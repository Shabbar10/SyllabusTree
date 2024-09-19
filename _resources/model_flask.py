import joblib
from flask import Flask, jsonify, request

app = Flask(__name__)

# Load the vectorizer and model
vectorizer = joblib.load("./tfidf.joblib")
model = joblib.load("./mnb_model.joblib")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    # Vectorize the input data
    vectorized_data = vectorizer.transform([data["prn"]])
    # Make a prediction
    prediction = model.predict(vectorized_data)
    return jsonify({"prediction": prediction.tolist()})


if __name__ == "__main__":
    app.run(debug=True)
