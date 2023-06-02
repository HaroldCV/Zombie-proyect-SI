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
    <div>
      <h1>Welcome to the Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>{username}</li>
        </ul>
      </nav>
      {/* Renderiza el componente PaymentForm y pasa la función handlePayment como prop */}
      <PaymentForm handlePayment={handlePayment} />
    </div>
  );
}

export default Dashboard;
