// import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard_armas = () => {

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

            <div className="gestor-tittle">
                Fabricación de Armas
            </div>

            <div className="text-wrapper">
                <div className="aprender-text">
                    <p>
                    En un mundo zombi, contar con armas adecuadas es fundamental para tu supervivencia 
                    y defensa personal. En esta sección, aprenderás técnicas de fabricación de armas 
                    improvisadas utilizando objetos cotidianos que puedes encontrar en tu entorno. 
                    Te proporcionaremos instrucciones paso a paso para crear armas efectivas y seguras, 
                    como lanzas, trampas improvisadas y armas cuerpo a cuerpo. Sin embargo, es importante 
                    recordar que el uso de armas debe ser responsable y limitado a situaciones de peligro 
                    inminente. La fabricación de armas es una habilidad que puede marcar la diferencia 
                    en tu lucha contra los zombis, así que asegúrate de adquirir los conocimientos 
                    necesarios.
                    </p>
                    <br></br>
                    <p>                    
                    1.Importancia de tener armas en un mundo zombi. <br></br>
                    2.Técnicas de fabricación de armas improvisadas. <br></br>
                    3.Utilización de objetos cotidianos como herramientas de defensa. <br></br>
                    4.Instrucciones paso a paso para crear armas efectivas y seguras. <br></br>
                    5.Tipos de armas improvisadas: lanzas, trampas y armas cuerpo a cuerpo. <br></br>
                    6.Responsabilidad en el uso de armas: limitaciones y precauciones. <br></br>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Dashboard_armas;