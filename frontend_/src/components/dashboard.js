import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PaymentForm from './paymentform'; // Importa el componente PaymentForm
import ShowMap from './showmap'; // Importa el componente ShowMap

function Dashboard({ username }) {
  const location = useLocation();

  const handlePayment = (token) => {
    // Aquí puedes enviar el token de pago a tu backend para procesar la compra
    console.log(token);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Welcome to the Dashboard</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-text">{username}</div>
        </div>
      </nav>
      {/* Renderiza el componente PaymentForm y pasa la función handlePayment como prop */}
      <PaymentForm handlePayment={handlePayment} />
      {/* Renderiza el componente ShowMap */}
      <ShowMap />
    </div>
  );
}

export default Dashboard;
