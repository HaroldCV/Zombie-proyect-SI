import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./../styles/About.css"

// Images and stuff
const main_about = require("./../assets/NY-Dv2.jpg")
const big_logo = require("./../assets/main_logo.png")

const About = () => {
   const navigate = useNavigate();

   const navigate_home = () => {
       navigate("/");
   }
   const log = () => { navigate("/login") }
   const navigate_contact = () => {navigate("/contacto")}

   return (
       <section className='main-wrapper-1'>
           <header>
               <h1> ZomBiz </h1>

               <section class="menu">
                   <ul class="menu-list" >
                       <li onClick={navigate_home}>Home</li>
                       <li className="active">Nosotros</li>
                       <li onClick={navigate_contact}>Contacto</li>
                       <li className="always-active" onClick={log}>Ingresar</li>
                   </ul>

                   <button>
                       <i class="fas fa-times"></i>
                       <i class="fas fa-bars"></i>
                   </button>
               </section>
           </header>

           <section className="main">
             
               <section className="left">
                   <img className="about-image-1" src={main_about} alt="second"/>
               </section>
             
               <section className="right-about">
                   <img className="logo-image" src={big_logo} alt="logo"/>
                 
                   <p className="msg-1">
                       Somos una empresa dedicada a la investigación, desarrollo y
                       comercialización de productos y servicios diseñados específicamente
                       para ayudarte a sobrevivir en estas difíciles circunstancias.
                   </p>
               </section>
           </section>

           <section className="rectangle-1">
               <h1> Misión </h1>
           </section>
           <p className="msg-2">
               En ZomBiz, nuestra misión es brindar a las personas los recursos, conocimientos y
               soluciones necesarias para sobrevivir en un mundo dominado por zombies. Nos
               comprometemos a ofrecer productos y servicios de alta calidad que ayuden a nuestros
               clientes a prepararse, resistir y superar cualquier desafío que puedan enfrentar
               durante un brote zombie. Buscamos ser líderes en el mercado de la supervivencia zombie,
               ofreciendo innovación, confiabilidad y apoyo constante a nuestros clientes en su lucha
               por sobrevivir.
           </p>

           <section className="rectangle-2">
               <h1> Visión </h1>
           </section>
           <p className="msg-3">
               Nuestra visión es convertirnos en la empresa de referencia y la marca más reconocida en el
               campo de la supervivencia zombie. Buscamos establecer una comunidad global de personas
               preparadas y capacitadas para enfrentar cualquier situación de amenaza zombie. A través de
               nuestra investigación continua, desarrollo de productos de vanguardia y colaboración con
               expertos en el campo, aspiramos a ser la compañía a la que las personas recurran en busca
               de orientación, recursos y apoyo en su viaje de supervivencia. Nos esforzamos por promover
               una cultura de preparación y resiliencia en la lucha contra los muertos vivientes.
           </p>
       </section>
   )
}




export default About;
