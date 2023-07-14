// import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard_gestor = () => {

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
                Gestor de suministros para usuarios
            </div>

            <div className="text-wrapper">
                <div className="gestor-text">
                    <p>
                    ¡La gestión eficiente de suministros es esencial para la supervivencia 
                    a largo plazo. En esta sección, te brindaremos herramientas y consejos 
                    para organizar tus suministros, asegurarte de tener alimentos y agua 
                    adecuados, kits de primeros auxilios, herramientas de supervivencia y 
                    otros elementos esenciales. Te ayudaremos a desarrollar un sistema eficaz 
                    para mantener tus suministros actualizados y optimizar tus recursos.
                    </p>
                    <p>                    
                    1.Importancia de la gestión de suministros para la supervivencia. <br></br>
                    2.Organización de alimentos y agua: asegurando tu sustento. <br></br>
                    3.Kits de primeros auxilios: preparación para emergencias médicas. <br></br>
                    4.Herramientas de supervivencia: equipamiento esencial para enfrentar desafíos. <br></br>
                    5.Mantener tus suministros actualizados: estrategias para no quedarte sin recursos. <br></br>
                    6.Optimización de recursos: maximizando la eficiencia en la gestión de suministros. <br></br>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Dashboard_gestor;