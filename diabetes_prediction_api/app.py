from flask import Flask, request, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load dataset
df = pd.read_csv('diabetes.csv')

# Preprocess data and train model
X = df.drop(['Outcome'], axis=1)
y = df['Outcome']
X_train, _, y_train, _ = train_test_split(X, y, test_size=0.2, random_state=0)
rf = RandomForestClassifier()
rf.fit(X_train, y_train)

# Prediction route
@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json()

    standardized_data = {
        'Pregnancies': data['pregnancies'],
        'Glucose': data['glucose'],
        'BloodPressure': data['bloodPressure'],
        'SkinThickness': data['skinThickness'],
        'Insulin': data['insulin'],
        'BMI': data['bmi'],
        'DiabetesPedigreeFunction': data['diabetesPedigreeFunction'],
        'Age': data['age'],
    }
    
    user_data = pd.DataFrame(standardized_data, index=[0])
    prediction = rf.predict(user_data)
    output = 'Diabetic' if prediction[0] == 1 else 'Not Diabetic'
    return jsonify({'result': output})

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
