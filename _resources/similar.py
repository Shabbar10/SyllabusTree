import logging

import joblib
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app, resources={r"/similar": {"origins": "http://localhost:3000"}})

logging.basicConfig(level=logging.DEBUG)

# Load data and models
try:
    df = pd.read_csv("./final.csv")
    vectorizer = joblib.load("./tfidf.joblib")
    model = joblib.load("./mnb_model.joblib")
    vectors = joblib.load("./vectors.joblib")
    similarity = cosine_similarity(vectors)
    app.logger.info("Data and models loaded successfully")
except Exception as e:
    app.logger.error(f"Error loading data or models: {str(e)}")

def recommend(video):
    try:
        video_index = df[df["title"] == video].index[0]
        top_5 = sorted(
            list(enumerate(similarity[video_index])), reverse=True, key=lambda x: x[1]
        )[2:7]
        video_list = []
        for k, v in top_5:
            app.logger.debug(f"Recommended: {df.iloc[k].title}")
            video_list.append(df.iloc[k].title)
        return video_list
    except Exception as e:
        app.logger.error(f"Error in recommend function: {str(e)}")
        return []

@app.route("/similar", methods=["POST"])
def predict():
    app.logger.info("Received request at /similar endpoint")
    try:
        data = request.get_json()
        app.logger.debug(f"Received data: {data}")
        video_title = data.get("title")
        app.logger.info(f"Processing video title: {video_title}")
        
        to_send = recommend(video_title)
        app.logger.info(f"Recommendations: {to_send}")
        
        returnal = {"input": video_title, "recommendation": to_send}
        return jsonify(returnal)
    except Exception as e:
        app.logger.error(f"Error in predict function: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
