import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.success) {
        // Inicio de sesión exitoso, redirigir al dashboard
        navigate('/dashboard');
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have been successfully logged in.',
        });
      } else {
        // Error en el inicio de sesión
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: response.data.message,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'An error occurred during login.',
      });
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h1 className="mb-4">Login</h1>
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
        <button className="btn btn-primary mb-3" onClick={handleLogin}>
          Login
        </button>
        <button className="btn btn-secondary" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
