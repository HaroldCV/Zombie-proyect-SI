import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./../styles/Contact.css"

// Images and stuff
const redes = require("./../assets/redes.png")

const Contact = () => {

   const navigate = useNavigate();

   const navigate_home = () => {
       navigate("/");
   }
   const navigate_about = () => {
       navigate("/nosotros");
   }

   return (
       <section className='main-wrapper-2'>
           <header>
               <h1> ZomBiz </h1>

               <section class="menu">
                   <ul class="menu-list" >
                       <li onClick={navigate_home}>Home</li>
                       <li onClick={navigate_about}>Nosotros</li>
                       <li className="active">Contacto</li>
                       <li className="always-active" >Ingresar</li>
                   </ul>

                   <button>
                       <i class="fas fa-times"></i>
                       <i class="fas fa-bars"></i>
                   </button>
               </section>
           </header>

           <section className="main">
               <section className="left-contact">
                   <p className="msg-4">
                       Nuestro equipo de atención al cliente estará encantado de responder
                       tus preguntas y brindarte asistencia en todo lo relacionado con
                       nuestros productos y servicios. No dudes en enviarnos un correo
                       electrónico y te responderemos en el menor tiempo posible.
                   </p>

                   <p className="msg-indicator">
                       Correo:
                       <span>
                           info@zombiz.com
                       </span>
                   </p>
                   <p className="msg-indicator">
                       Teléfono:
                       <span>
                           +1 (555) 123-4567
                       </span>
                   </p>
               </section>
               <section className="right-contact">
                   <p className="big-contact-title">
                       <i className='arrow-1'></i>
                       <i className='arrow-1'></i>
                       Contacto
                       <i className='arrow-1'></i>
                       <i className='arrow-1'></i>
                   </p>

                   <p className="msg-5">
                       ¡Gracias por visitar ZomBiz! Estamos aquí para responder tus
                       consultas y proporcionarte la información que necesites. Puedes
                       contactarnos a través de los siguientes canales:
                   </p>

                   <p className="msg-indicator-1">
                       ---- Horario de atención ----
                       <br></br>
                       9:00 am a 5:00 pm
                   </p>
               </section>
           </section>
         
           <section className="rectangle-4">
               <h1> Redes Sociales </h1>
           </section>
           <div className="redes">
               <img src={redes} alt="a"/>
           </div>

           <section className="rectangle-3">
               <h1> Dirección </h1>
           </section>
           <div className="redes-1">
               <div className="text">
                   <ul>
                       <li>ZomBiz Headquarters</li>
                       <li>123 Main Street</li>
                       <li>Cityville, Zombie County</li>
                       <li>Código postal: 12345</li>
                       <li>País: PERÚ</li>
                   </ul>
               </div>
               <p className="msg-4">
                   ¡Esperamos poder ayudarte en tu viaje de supervivencia! No dudes en
                   contactarnos para cualquier pregunta o inquietud que puedas tener. Estamos
                   aquí para ti en la lucha contra los muertos vivientes.
               </p>
           </div>
       </section>
   )
}




export default Contact;
