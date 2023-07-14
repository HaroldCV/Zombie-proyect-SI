import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard_game = () => {

    const navigate = useNavigate();
    const ini = () => {
        navigate("/")
    }
    const navigate_dashboard = () => [
        navigate("/dashboard")
    ]

    return (
        <section className="game-wrapper">
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
                Videojuego de aprendizaje
            </div>

            <div className="game-text">
                <p>
                ¡Estamos trabajando para mejorar tu experiencia! Por el momento puedes
                acceder al videojuego en el siguiente enlace: <br></br>
                https://drive.google.com/file/d/1kVTPUEM_taLxlbcE3ORTz1jL9poph04i/view?usp=sharing
                </p>
            </div>
        </section>
    )
}

export default Dashboard_game;