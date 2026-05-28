# 🩺 Diabetes Risk Predictor

A machine learning web application that predicts diabetes risk based on health parameters using a Support Vector Machine (SVM) model trained on the PIMA Indians Diabetes Dataset.

---

## 🌐 Live Demo

> Coming soon on Render

---

## 📸 Preview

![Diabetes Predictor UI](https://i.imgur.com/placeholder.png)

---

## 🧠 How It Works

1. User enters 8 health parameters in the web form
2. Flask backend receives the input
3. Data is standardized using a pre-trained `StandardScaler`
4. The SVM model predicts whether the person is diabetic or not
5. Result is displayed instantly with color-coded feedback

---

## 🔬 Model Details

| Property | Value |
|---|---|
| Algorithm | Support Vector Machine (SVM) |
| Kernel | Linear |
| Dataset | PIMA Indians Diabetes Dataset |
| Total Records | 768 |
| Training Accuracy | ~78.7% |
| Test Accuracy | ~77.3% |

---

## 📋 Input Features

| Feature | Description | Normal Range |
|---|---|---|
| Pregnancies | Number of times pregnant | 0 – 17 |
| Glucose | Plasma glucose concentration (mg/dL) | 70 – 99 (normal) |
| Blood Pressure | Diastolic blood pressure (mm Hg) | 60 – 80 |
| Skin Thickness | Triceps skin fold thickness (mm) | 0 – 99 |
| Insulin | 2-hour serum insulin (μU/mL) | 2 – 25 (fasting) |
| BMI | Body Mass Index (kg/m²) | 18.5 – 24.9 (normal) |
| Diabetes Pedigree | Family history likelihood score | 0.078 – 2.42 |
| Age | Age in years | 21 – 81 |

---

## 🛠️ Tech Stack

**Backend**
- Python 3.12
- Flask
- Scikit-learn (SVM, StandardScaler)
- NumPy, Pandas
- Joblib

**Frontend**
- HTML5, CSS3, Vanilla JavaScript
- Responsive 2-column grid layout
- Hover tooltips on every input field
- Animated result cards

---

## 📁 Project Structure

```
Diabetes Prediction/
├── app.py                          # Flask backend
├── requirements.txt                # Python dependencies
├── diabetes_model.pkl              # Trained SVM model
├── scaler.pkl                      # Fitted StandardScaler
├── Diabetes dataset.csv            # PIMA dataset
├── Project_3_Diabetes_Prediction.ipynb  # Model training notebook
├── templates/
│   └── index.html                  # Frontend UI
└── static/
    ├── style.css                   # Styling
    └── script.js                   # Form logic & API call
```

---

## 🚀 Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/diabetes-prediction.git
cd diabetes-prediction
```

**2. Create and activate virtual environment**
```bash
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux
```

**3. Install dependencies**
```bash
pip install -r requirements.txt
```

**4. Run the app**
```bash
python app.py
```

**5. Open in browser**
```
http://127.0.0.1:5000
```

---

## ⚠️ Disclaimer

This tool is built for **educational purposes only**. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.

---

## 👨‍💻 Author

**Shlok**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

---

## ⭐ If you found this useful, give it a star on GitHub!
