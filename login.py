from flask import Flask, render_template, request, jsonify
import csv
app = Flask(__name__)

def read_users_csv():
    with open('data/dati_utenti.csv', 'r') as file:
        reader = csv.DictReader(file)
        users = list(reader)
    return users

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    users = read_users_csv()

    for user in users:
        if user['username'] == username and user['password'] == password:
            return jsonify({'success': True, 'name': user['name'], 'surname': user['surname']})
    
    return jsonify({'success': False, 'message': 'Username o password errati'})

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)