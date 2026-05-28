const form = document.getElementById('predict-form');
const resultBox = document.getElementById('result-box');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  btnText.textContent = 'Analyzing...';
  btnLoader.classList.remove('hidden');
  submitBtn.disabled = true;

  const fields = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
                  'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'];

  const data = {};
  fields.forEach(f => data[f] = document.getElementById(f).value);

  try {
    const response = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await response.json();
    showResult(json.result);
  } catch (err) {
    alert('Something went wrong. Please try again.');
  } finally {
    btnText.textContent = 'Check Diabetes Risk';
    btnLoader.classList.add('hidden');
    submitBtn.disabled = false;
  }
});

function showResult(result) {
  form.classList.add('hidden');
  resultBox.classList.remove('hidden', 'diabetic', 'not_diabetic');
  resultBox.classList.add(result);

  const icon = document.getElementById('result-icon');
  const title = document.getElementById('result-title');
  const msg = document.getElementById('result-msg');

  if (result === 'diabetic') {
    icon.textContent = '⚠️';
    title.textContent = 'High Diabetes Risk Detected';
    msg.textContent = 'Based on the values you entered, the model predicts a higher risk of diabetes. Please consult a healthcare professional for a proper diagnosis and guidance.';
  } else {
    icon.textContent = '✅';
    title.textContent = 'Low Diabetes Risk';
    msg.textContent = 'Based on the values you entered, the model predicts a lower risk of diabetes. Keep maintaining a healthy lifestyle!';
  }
}

function resetForm() {
  resultBox.classList.add('hidden');
  form.classList.remove('hidden');
  form.reset();
}
