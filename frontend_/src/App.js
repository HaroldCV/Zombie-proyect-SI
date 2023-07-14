import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/Dashboard';
import PaymentForm from './components/paymentform';

import Fundamentos from './components/Fundamentos';
import Dashboard_gestor from './components/Dashboard_gestor';
import Dashboard_aprender from './components/Dashboard_aprender';
import Dashboard_armas from './components/Dashboard_armas';
import Dashboard_logistica from './components/Dashboard_logistica';
import Dashboard_game from './components/Dashboard_game';
import Map from './components/Map';
import Roles from './components/Roles';

import Roles_familia from './components/Roles_familia';
import Roles_ing from './components/Roles_ingeniero';

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

     <Route path="/dashboard/fundamentos" element={<Fundamentos />}/>
     <Route path="/dashboard/map" element={<Map />}/>
     <Route path='/dashboard/gestor' element={<Dashboard_gestor />}/>
     <Route path='/dashboard/zonas_seguras' element={<Dashboard_aprender />}/>
     <Route path='/dashboard/armas' element={<Dashboard_armas />}/>
     <Route path='/dashboard/logistica' element={<Dashboard_logistica />}/>

     <Route path='/dashboard/roles' element={<Roles />}></Route>
     <Route path='/dashboard/videojuego' element={<Dashboard_game />}></Route>

     <Route path='/roles/familia' element={<Roles_familia />}></Route>
     <Route path='/roles/ingeniero' element={<Roles_ing />}></Route>
   </Routes>
 );
};


export default App;
