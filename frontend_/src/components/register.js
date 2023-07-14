import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link, useLocation } from 'react-router-dom';
import PaymentForm from './paymentform'; // Importa el componente PaymentForm

import Swal from 'sweetalert2';
import { Stripe } from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./../styles/Dashboard.css"

function Register() {
    const onToken = (token) => {
        console.log(token)
    }

    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async () => {
        try {
        const response = await axios.post('http://localhost:5000/register', {
            fullname,
            username,
            password,
            email,
        });

        if (response.data.success) {
            // Registro exitoso
            Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: response.data.message,
            }).then(() => {
            navigate('/login'); // Redireccionar al login
            });
        } else {
            // Error en el registro
            Swal.fire({
            icon: 'error',
            title: 'Registration Error',
            text: response.data.message,
            });
        }
        } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Registration Error',
            text: 'An error occurred during registration.',
        });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 w-50">
            <h1 className="mb-4">Register</h1>
            <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input
                type="text"
                className="form-control"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            
            {/* Payment Form */}
            <StripeCheckout
                token={onToken}
                name='Zombiz Survival Solution'
                currency='USD'
                amount="10999"
                stripeKey='pk_test_51NTgdUKqtA4NHnnv1cw13aaf9wZF4NGpbpmW20B54MsGk60d4NSqUK8m4pOJbdGNvNYKKyEsZXctZS1aH1A1Drn200HpunoO4J'
            />
            <button className="btn btn-primary" onClick={handleRegister}>
                Register
            </button>
        </div>
        </div>
    );
}

export default Register;

