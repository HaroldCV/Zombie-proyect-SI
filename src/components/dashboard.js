import React from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

function Dashboard() {
  // Aquí deberías obtener el nombre de usuario del estado o de tu sistema de autenticación
  const username = 'NombreUsuario';

  const handlePayment = (token) => {
    // Aquí puedes enviar el token de pago a tu backend para procesar la compra
    console.log(token);
  };

  return (
    <div>
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
      <h1>Welcome to the Dashboard</h1>
      {/* Agrega el contenido adicional de tu dashboard */}
      <StripeCheckout
        stripeKey="tu_stripe_public_key"
        token={handlePayment}
        name="Mi Tienda"
        description="Realiza tu compra"
        amount={1000} // Monto en centavos
        currency="USD"
      >
        <button>Realizar Compra</button>
      </StripeCheckout>
    </div>
  );
}

export default Dashboard;
