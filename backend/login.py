import stripe
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import psycopg2.extras
from werkzeug.security import generate_password_hash, check_password_hash
import paypalrestsdk
import os
import requests

app = Flask(__name__)
CORS(app)

DB_HOST = "localhost"
DB_NAME = "login"
DB_USER = "haroldcv"
DB_PASS = "harold123"

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)


@app.route('/login', methods=['POST'])
def login():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    # Verificar existen las solicitudes POST "username" y "password"
    if 'username' in request.json and 'password' in request.json:
        username = request.json['username']
        password = request.json['password']

        # Verificar si la cuenta existe en la base de datos
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        account = cursor.fetchone()

        if account:
            password_rs = account['password']

            # Si la contraseña es correcta, se retorna una respuesta exitosa
            if check_password_hash(password_rs, password):
                return jsonify({'success': True, 'message': 'Login successful'})
            else:
                return jsonify({'success': False, 'message': 'Incorrect username/password'})
        else:
            return jsonify({'success': False, 'message': 'Incorrect username/password'})

    return jsonify({'success': False, 'message': 'Invalid request'})


@app.route('/register', methods=['POST'])
def register():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    # Verificar si existen las solicitudes POST "username", "password" y "email"
    if 'username' in request.json and 'password' in request.json and 'email' in request.json:
        fullname = request.json['fullname']
        username = request.json['username']
        password = request.json['password']
        email = request.json['email']

        hashed_password = generate_password_hash(password)

        # Verificar si la cuenta ya existe en la base de datos
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        account = cursor.fetchone()

        if account:
            return jsonify({'success': False, 'message': 'Account already exists!'})
        elif not username or not password or not email:
            return jsonify({'success': False, 'message': 'Please fill out the form!'})
        else:
            # Insertar la nueva cuenta en la base de datos
            cursor.execute("INSERT INTO users (fullname, username, password, email) VALUES (%s,%s,%s,%s)",
                           (fullname, username, hashed_password, email))
            conn.commit()
            return jsonify({'success': True, 'message': 'Registration successful'})

    return jsonify({'success': False, 'message': 'Invalid request'})



# Configurar las credenciales de PayPal
paypalrestsdk.configure({
    "mode": "sandbox",  # Puedes cambiar a "live" en producción
    "client_id": "AYLx1k0w_fAz_UtgyIzNedvVoovcBc4R0ciogcGfqz5BmFJn9BBvHtoNcyLSEcHxO0UeWKqlMCA1xLck",
    "client_secret": "EPmNy5bNXgUoG5qSL9kXODy7AX5tYYCQkKU8QotNb51Ati0v_r520Bxqw2QOP2BMVFnyliBUrSr3Wj1S"
})
@app.after_request
def add_csp_header(response):
    response.headers["Content-Security-Policy"] = "img-src 'self' <URL> data:"
    return response

@app.route("/create_payment", methods=["POST"])
def create_payment():
    # Obtener el monto del pago desde el frontend
    amount = request.json["amount"]

    # Crear un objeto de pago de PayPal
    payment = paypalrestsdk.Payment({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [{
            "amount": {
                "total": str(amount),
                "currency": "USD"
            }
        }],
        "redirect_urls": {
            "return_url": "http://localhost:3000/execute_payment",
            "cancel_url": "http://localhost:3000/cancel_payment"
        }
    })

    # Crear el pago en PayPal
    if payment.create():
        return payment.to_dict()
    else:
        return {"error": payment.error}
    
mapbox_access_token = 'pk.eyJ1IjoiZGVtb24yMTM4IiwiYSI6ImNsaWdrazVoYjFpeXMzZ21teHE5eWVvN3kifQ.0aNpCXwwZFb_aWqSDR7bhQ'

@app.route('/coordinates', methods=['GET'])
def get_coordinates():
    coordinates = {'lat': -12.0464, 'lng': -77.0428}  # Coordenadas de Lima, Perú
    return jsonify({'coordinates': coordinates, 'mapbox_access_token': mapbox_access_token})


@app.route('/districts', methods=['GET'])
def get_districts():
    districts = [
        {'name': 'San Miguel', 'color': 'red'},
        {'name': 'Jesús María', 'color': 'green'},
        {'name': 'Magdalena del Mar', 'color': 'blue'}
        # Agrega más distritos y colores según sea necesario
    ]

    district_coordinates = {}

    # Realiza una solicitud a la API de Mapbox para obtener las coordenadas de cada distrito
    for district in districts:
        name = district['name']
        response = requests.get(f'https://api.mapbox.com/geocoding/v5/mapbox.places/{name}.json?access_token={mapbox_access_token}')
        data = response.json()
        coordinates = data['features'][0]['geometry']['coordinates']
        district['coordinates'] = coordinates

    return jsonify({'districts': districts})

if __name__ == "__main__":
    app.run(debug=True)
