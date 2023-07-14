// import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard_logistica = () => {

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
                Logística
            </div>

            <div className="text-wrapper">
                <div className="aprender-text">
                    <p>
                    La logística juega un papel crucial en la supervivencia. Aquí aprenderás cómo 
                    administrar eficientemente tus recursos, planificar rutas de viaje, organizar 
                    expediciones para conseguir suministros y optimizar tu estrategia de supervivencia. 
                    Te brindaremos consejos prácticos y técnicas de logística que te ayudarán a maximizar 
                    tus posibilidades de sobrevivir en este mundo hostil.
                    </p>
                    <br></br>
                    <p>                    
                    1.Importancia de la logística en la supervivencia diaria. <br></br>
                    2.Administración eficiente de recursos para la supervivencia. <br></br>
                    3.Planificación de rutas de viaje seguras. <br></br>
                    4.Organización de expediciones para obtener suministros. <br></br>
                    5.Sistemas de almacenamiento y distribución de recursos. <br></br>
                    6.Optimización del tiempo y la energía en situaciones de supervivencia. <br></br>
                    7.Sostenibilidad a largo plazo a través de una logística efectiva. <br></br>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Dashboard_logistica;