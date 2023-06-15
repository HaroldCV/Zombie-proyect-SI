import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./../styles/Home.css"

// Images and stuff
const main_img = require("./../assets/1216331.jpg")

const HomePage = () => {
   // const {isMobile, setIsMobile} = useState(false);
   const navigate = useNavigate();

   const navigate_about = () => { navigate("/nosotros"); }
   const navigate_contact = () => {navigate("/contacto")}
   const log = () => { navigate("/login") }
   const register_buy = () => {
       navigate("/register")
   }


   return (
       <section className='main-wrapper'>
           <header>
               <h1> ZomBiz </h1>

               <section class="menu">
                   <ul class="menu-list" >
                       <li className='active'>Home</li>
                       <li onClick={navigate_about}>Nosotros</li>
                       <li onClick={navigate_contact}>Contacto</li>
                       <li className="always-active" onClick={log}>Ingresar</li>
                   </ul>

                   <button>
                       <i class="fas fa-times"></i>
                       <i class="fas fa-bars"></i>
                   </button>
               </section>
           </header>

           <section class="main">

               <section class="left">
                   <p className="big-title">
                       <span className="first"> Guía de </span>
                       <span className="second"> Supervivencia </span>
                     
                       <i className='arrow'></i>
                       <i className='arrow'></i>
                       <i className='arrow'></i>
                   </p>
                   <img className="home-image-1" src={main_img} alt='main'/>
               </section>

               <section class="right">
                   <p class="title">¡Prepárate para sobrevivir al apocalipsis!</p>
                   <p class="msg">
                       ¡Atención, sobreviviente! ¿Estás listo para enfrentarte a un mundo
                       plagado de zombis? En nuestra Guía de Supervivencia Zombie, te proporcionaremos
                       los conocimientos esenciales y las estrategias necesarias para mantenerte con
                       vida en medio del caos. Prepárate para adentrarte en un viaje lleno de peligro,
                       emoción y, sobre todo, supervivencia.
                   </p>
                   <button className="fs" onClick={register_buy}>
                       Comprar
                   </button>
               </section>
           </section>
         
           <div className="rectangle"></div>
       </section>
   )
}




export default HomePage;
