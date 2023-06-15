import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PaymentForm from './paymentform'; // Importa el componente PaymentForm
import ShowMap from './showmap'; // Importa el componente ShowMap
import "./../styles/Dashboard.css"

function Dashboard({ username }) {
 const location = useLocation();

 const handlePayment = (token) => {
   // Aquí puedes enviar el token de pago a tu backend para procesar la compra
   console.log(token);
 };

 return (
   <div className="container">
     <h1 className="main-title">Welcome to your Dashboard</h1>
    
     {/* Renderiza el componente PaymentForm y pasa la función handlePayment como prop */}
     <PaymentForm handlePayment={handlePayment} />
     {/* Renderiza el componente ShowMap */}
    
     <div className='map-title'>
        Survival - Risk Map
     </div>
     <div className='map-container'>
        <ShowMap />
     </div>     
   </div>
 );
}


export default Dashboard;