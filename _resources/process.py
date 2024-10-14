import datetime
import json
import logging
import re
import string
import time
import traceback

import joblib
from flask import Flask, jsonify, request
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize
from pymongo import MongoClient
from rake_nltk import Rake

app = Flask(__name__)


# Set up logging
logging.basicConfig(
    level=logging.DEBUG, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# MongoDB setup
try:
    mongo_client = MongoClient("mongodb://localhost:27017/")
    db = mongo_client["ytprocessdb"]
    collection = db["processed_videos"]
    all_vids = collection.find()
    all_ids = [vid["videoId"] for vid in all_vids]
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {str(e)}")

# importing corpus, vectorizer, and classifier
try:
    corpus = joblib.load("corpus.joblib")
    tfidf = joblib.load("./tfidf.joblib")
    classifier = joblib.load("./mnb_model.joblib")
    rake = Rake()
except Exception as e:
    logger.error(f"Failed to load ML models: {str(e)}")


def remove_punc(text):
    return text.translate(str.maketrans("", "", string.punctuation))


def remove_url(text):
    pattern = re.compile(r"https?://\S+|www\.\S+")
    return pattern.sub(r"", text)


def remove_newline(text):
    pattern = re.compile(r"\n")
    return pattern.sub(r"", text)


def remove_emojis(text):
    pattern = re.compile(
        "["
        "\U0001F600-\U0001F64F"  # emoticons
        "\U0001F300-\U0001F5FF"  # symbols & pictographs
        "\U0001F680-\U0001F6FF"  # transport & map symbols
        "\U0001F1E0-\U0001F1FF"  # flags (iOS)
        "\U00002702-\U000027B0"  # dingbats
        "\U000024C2-\U0001F251"  # enclosed characters
        "]+",
        flags=re.UNICODE,
    )
    return pattern.sub(r"", text)


def remove_timestamps(text):
    pattern = re.compile(r"\(.*?\)")
    return pattern.sub(r"", text)


def remove_non_alpha(text):
    pattern = re.compile(r"[^\x00-\x7F]+")
    return pattern.sub(r"", text)


def remove_stop_words(text):
    new_text = [word for word in text.split() if word not in stopwords.words("english")]
    s = set(new_text)
    text = " ".join(s)
    return text


def process_desc(desc):
    try:
        text = remove_non_alpha(
            remove_timestamps(remove_emojis(remove_newline(remove_url(desc))))
        )
        tokens = sent_tokenize(text)
        top_3 = tokens[:3]
        final = []
        for each in top_3:
            sentence = remove_stop_words(each)
            rake.extract_keywords_from_text(sentence)
            keywords = rake.get_ranked_phrases()
            for key in keywords:
                rake.extract_keywords_from_text(key)
                new_keywords = rake.get_ranked_phrases()
                if new_keywords:
                    final.append(new_keywords[0])
        return " ".join(final[:3])
    except Exception as e:
        logger.error(f"Error in process_desc: {str(e)}")
        return ""


def process_yt_data(yt_result):
    logger.info("Processing YouTube data")
    processed_data = {}

    try:
        required_fields = [
            "title",
            "videoId",
            "channel_title",
            "description",
            "tags",
            "publishedAt",
        ]
        for field in required_fields:
            if field not in yt_result:
                raise ValueError(f"Missing required field: {field}")

        processed_data["title"] = yt_result["title"].lower()
        processed_data["videoId"] = yt_result["videoId"]
        processed_data["channel_title"] = yt_result["channel_title"]
        processed_data["views"] = int(yt_result.get("views", 0))
        processed_data["likes"] = int(yt_result.get("likes", 0))
        processed_data["thumbnail"] = yt_result.get("thumbnail")
        processed_data["url"] = yt_result.get("url")
        processed_data["description"] = yt_result["description"].lower()
        processed_data["publishedAt"] = yt_result.get("publishedAt")
        processed_data["duration"] = yt_result.get("duration")
        processed_data["tags"] = yt_result["tags"]

        tags_cat = " ".join(processed_data["tags"]).lower()

        new_desc = process_desc(processed_data["description"])

        combo = f"{processed_data['title']} {tags_cat} {new_desc}"
        processed_data["combo"] = combo

        try:
            vec = tfidf.transform([combo])
            pred = classifier.predict(vec)
            processed_data["prediction"] = pred[0] if pred is not None else None
        except Exception as e:
            logger.error(f"Error in ML prediction: {str(e)}")
            processed_data["prediction"] = None

        logger.debug(f"Processed data: {processed_data}")
        return processed_data

    except Exception as e:
        logger.error(f"Error in process_yt_data: {str(e)}")
        logger.error(traceback.format_exc())
        raise


@app.route("/process_yt", methods=["POST"])
def process_yt():
    start_time = time.time()
    logger.info("Received request to /process_yt")
    data = request.json
    logger.debug(f"Received data: {data}")

    if not data:
        logger.error("No JSON data received")
        return jsonify({"error": "No JSON data received"}), 400

    yt_search_result = data.get("ytSearchResult")

    if not yt_search_result:
        logger.error("Missing ytSearchResult in the request")
        return jsonify({"error": "Missing ytSearchResult"}), 400

    try:
        parsing_start = time.time()
        yt_result = (
            json.loads(yt_search_result)
            if isinstance(yt_search_result, str)
            else yt_search_result
        )
        parsing_end = time.time()
        logger.info(f"Data processing time: {parsing_end - parsing_start:.4f} seconds")

        processing_start = time.time()
        processed_data = process_yt_data(yt_result)
        processing_end = time.time()
        logger.info(
            f"Data processing time: {processing_end - processing_start:.4f} seconds"
        )

        insertion_start = time.time()
        insert_result = collection.insert_one(processed_data)
        insertion_end = time.time()
        logger.info(
            f"MongoDB insertion time: {insertion_end - insertion_start:.4f} seconds"
        )

        logger.info(
            f"Data processed and inserted successfully. ID: {insert_result.inserted_id}"
        )

        total_time = time.time() - start_time
        logger.info(f"Total processing time: {total_time:.4f} seconds")

        return (
            jsonify(
                {
                    "message": "Data processed successfully",
                    "processed_id": str(insert_result.inserted_id),
                    "videoId": processed_data["videoId"],
                }
            ),
            200,
        )

    except json.JSONDecodeError as e:
        logger.error(f"Invalid JSON in ytSearchResult: {str(e)}")
        return (
            jsonify({"error": "Invalid JSON in ytSearchResult", "details": str(e)}),
            400,
        )
    except ValueError as e:
        logger.error(f"Value error: {str(e)}")
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        logger.error(f"An error occurred: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({"error": "An error occurred", "details": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
