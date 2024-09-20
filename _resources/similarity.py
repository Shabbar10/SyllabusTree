import joblib
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)


CORS(app, resources={r"/similar": {"origins": "http://localhost:3000"}})

df = pd.read_csv("./final.csv")

# Load the vectorizer and model
vectorizer = joblib.load("./tfidf.joblib")
model = joblib.load("./mnb_model.joblib")
vectors = joblib.load("./vectors.joblib")

print(vectors.shape)
print(vectors[0].shape)

similarity = cosine_similarity(vectors)


def recommend(video):
    # print(df.head())
    video_index = df[df["title"] == video].index[0]
    top_5 = sorted(
        list(enumerate(similarity[video_index])), reverse=True, key=lambda x: x[1]
    )[2:7]
    video_list = []
    for k, v in top_5:
        print(df.iloc[k].title)
        video_list.append(df.iloc[k].title)

    return video_list


@app.route("/similar", methods=["POST", "GET"])
@cross_origin()
def predict():
    data = request.get_json()
    video_title = data.get("title")
    print(video_title)
    to_send = recommend(video_title)

    for each in to_send:
        print(each)

    returnal = {"input": video_title, "recommendation": to_send}
    # print(type(returnal))
    return jsonify(returnal)


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5001)
