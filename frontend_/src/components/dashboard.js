import React from 'react';
import { Link } from 'react-router-dom';
import PaymentForm from './paymentform'; // Importa el componente PaymentForm

function Dashboard() {
  // Aquí deberías obtener el nombre de usuario del estado o de tu sistema de autenticación
  const username = 'NombreUsuario';

  const handlePayment = (token) => {
    // Aquí puedes enviar el token de pago a tu backend para procesar la compra
    console.log(token);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Welcome to the Dashboard</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/dashboard" className="navbar-brand">Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>{username}</div>
        </div>
      </nav>
      {/* Renderiza el componente PaymentForm y pasa la función handlePayment como prop */}
      <PaymentForm handlePayment={handlePayment} />
    </div>
  );
}

export default Dashboard;
