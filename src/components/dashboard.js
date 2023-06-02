import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Aquí deberías obtener el nombre de usuario del estado o de tu sistema de autenticación
  const username = 'NombreUsuario';

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
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
    </div>
  );
}

export default Dashboard;
