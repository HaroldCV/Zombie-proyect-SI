// import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard_aprender = () => {

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
                Aprendizaje de zonas seguras
            </div>

            <div className="text-wrapper">
                <div className="aprender-text">
                    <p>
                    Conocer las zonas seguras es fundamental para garantizar tu supervivencia. 
                    En esta sección, te proporcionaremos información sobre cómo identificar y evaluar 
                    zonas seguras, ya sea refugios abandonados, instalaciones fortificadas o áreas 
                    remotas de bajo riesgo. Aprenderás técnicas de navegación y mapas para encontrar y 
                    llegar a estas zonas seguras, donde podrás descansar y reabastecerte de manera segura.
                    </p>
                    <br></br>
                    <p>                    
                    Conocer las zonas seguras es fundamental para garantizar tu supervivencia. En esta 
                    sección, te proporcionaremos información sobre cómo identificar y evaluar zonas 
                    seguras, ya sea refugios abandonados, instalaciones fortificadas o áreas remotas 
                    de bajo riesgo. Aprenderás técnicas de navegación y mapas para encontrar y llegar a 
                    estas zonas seguras, donde podrás descansar y reabastecerte de manera segura.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Dashboard_aprender;