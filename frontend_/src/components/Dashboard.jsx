import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

import "./../styles/Dashboard.css"

function Dashboard({ username }) {
    const navigate = useNavigate();
    const ini = () => {
    navigate("/")
    }
    const navigate_fundamentos = () => [
    navigate("/dashboard/fundamentos")
    ]
    const navigate_map = () => [
    navigate("/dashboard/map")
    ]
    const navigate_gestor = () => [
    navigate("/dashboard/gestor")
    ]
    const navigate_aprender = () => [
    navigate("/dashboard/zonas_seguras")
    ]
    const navigate_fabricacion = () => [
    navigate("/dashboard/armas")
    ]
    const navigate_logistica = () => [
    navigate("/dashboard/logistica")
    ]
    const navigate_roles = () => [
    navigate("/dashboard/roles")
    ]
    const navigate_game = () => [
    navigate("/dashboard/videojuego")
    ]

    return (
        <section className='all-dashboard-wrapper'>
            <header>
                <h1> ZomBiz </h1>
                <section class="menu">
                    <ul class="menu-list" >
                        <li className="active">HI USER</li>
                        <li className="always-active" onClick={ini}> Log Out </li>
                    </ul>
                    <button>
                        <i class="fas fa-times"></i>
                        <i class="fas fa-bars"></i>
                    </button>
                </section>
            </header>

            <div className='dashboard-wrapper'>
                <p className="big-title">
                <span className="first"> Guía de </span>
                <span className="second"> Supervivencia </span>

                <i className='arrow'></i>
                <i className='arrow'></i>
                <i className='arrow'></i>
                </p>
                <div className='grid-wrapper'>
                    <div>
                        <div className='big-square-l' onClick={navigate_fundamentos}>
                            <div className='fg-1-tittle'>
                                Fundamentos de <br></br> Supervivencia
                            </div>
                        </div>
                        <div className='small-rectangle-l' onClick={navigate_map}>
                            <div className='fg-2-tittle'>
                                Mapa
                            </div>
                        </div>
                    </div>

                    {/* Mid-grid*/}
                    <div className='nested'>
                        <div className='little-tittle' onClick={navigate_gestor}>Gestor de suministros para usuarios</div>
                        <div className='little-tittle' onClick={navigate_logistica}>Logística en la supervivencia</div>
                        <div className='little-tittle' onClick={navigate_aprender}>Aprendizaje de Zonas Seguras</div>
                        <div className='little-tittle' onClick={navigate_fabricacion}>Fabricación de armas de autodefensa</div>
                    </div>

                    <div>
                        <div className='small-rectangle-2' onClick={navigate_roles}>
                            <div className='sg-1-tittle'>
                                Roles
                            </div>
                        </div>
                        <div className='big-square-2' onClick={navigate_game}>
                            <div className='sg-2-tittle'>
                                Juego
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );

}

export default Dashboard;