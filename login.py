from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

df = pd.read_csv("/workspace/flaskLogin/data/users.csv")

def authenticate_user(username, password):
    user = df[(df['username'] == username) & (df['password'] == password)]
    return len(user) > 0

@app.route('/')
def homepage():
    return render_template("login.html")

@app.route('/elenco', methods=['POST'])
def information():
    username = request.form.get('username')
    password = request.form.get('password')

    if authenticate_user(username, password):
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)