import numpy as np
import pandas as pd
import joblib
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

model = joblib.load('diabetes_model.pkl')
scaler = joblib.load('scaler.pkl')

COLUMNS = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
           'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    values = [float(data[col]) for col in COLUMNS]
    input_df = pd.DataFrame([values], columns=COLUMNS)
    std_data = scaler.transform(input_df)
    prediction = model.predict(std_data)[0]
    result = 'diabetic' if prediction == 1 else 'not_diabetic'
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
