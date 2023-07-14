// import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Fundamentos = () => {

    const navigate = useNavigate();
    const ini = () => {
        navigate("/")
    }
    const navigate_dashboard = () => [
        navigate("/dashboard")
    ]

    return (
        <section className="fundamentos-wrapper">
            <header>
                <h1> ZomBiz </h1>

                <section class="menu">
                    <ul class="menu-list" >
                        <li className="active" onClick={navigate_dashboard}>Back To Dashboard</li>
                        <li className="always-active" onClick={ini}> Log Out </li>
                    </ul>

                    <button>
                        <i class="fas fa-times"></i>
                        <i class="fas fa-bars"></i>
                    </button>
                </section>
            </header>
            
            <div className="fundamentos-tittle">
                Fundamentos de Supervivencia
            </div>
            <div className="text-wrapper">
                <div className="fundamentos-text">
                    <p>
                        ¡Bienvenido a la página web de Zombis, tu compañero de supervivencia en un 
                        mundo apocalíptico! Aquí encontrarás valiosa información para enfrentar los 
                        desafíos y aumentar tus posibilidades de supervivencia. Nuestra guía de 
                        supervivencia es nuestro producto estrella, diseñado para brindarte 
                        conocimientos y estrategias prácticas. ¡Prepárate para enfrentar el 
                        apocalipsis zombi con Zombis!
                    </p>
                    <p>
                        En esta sección, te proporcionaremos los conocimientos esenciales y los 
                        fundamentos necesarios para sobrevivir en un mundo dominado por zombis. 
                        Aprenderás cómo evaluar situaciones, crear un plan de emergencia, fortificar 
                        refugios, administrar suministros y adquirir habilidades de supervivencia. 
                        Estos fundamentos te ayudarán a mantenerte seguro y preparado en todo momento.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Fundamentos;