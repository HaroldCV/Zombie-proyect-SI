import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import PaymentForm from './components/paymentform';

const App = () => {
 return (
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/nosotros" element={<About />} />
     <Route path="/contacto" element={<Contact />} />


     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/payment" element={<PaymentForm />} />
   </Routes>
 );
};


export default App;
