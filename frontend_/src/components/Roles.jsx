import React from 'react';
import { useNavigate } from "react-router-dom"

import "./../styles/Roles.css";

const Roles = () => {
    const navigate = useNavigate();
    const ini = () => {
        navigate("/")
    }
    const navigate_dashboard = () => [
        navigate("/dashboard")
    ]
    const navigate_roles_familia = () => [
        navigate("/roles/familia")
    ]
    const navigate_roles_ing = () => [
        navigate("/roles/ingeniero")
    ]

    return (
        <section className='all-roles-wrapper'>
            <header>
                <h1> ZomBiz </h1>

                <section class="menu">
                    <ul class="menu-list" >
                        <li onClick={navigate_dashboard}>Back To Dashboard</li>
                        <li className="always-active" onClick={ini}> Log Out </li>
                    </ul>

                    <button>
                        <i class="fas fa-times"></i>
                        <i class="fas fa-bars"></i>
                    </button>
                </section>
            </header>

            <div className='roles-wrapper'>
                <p className="roles-big-title">
                    <i className='arrow-1'></i>
                    <i className='arrow-1'></i>
                    <i className='arrow-1'></i>

                    <span className="first-1"> Roles de </span>
                    <span className="second-1"> Supervivencia </span>
                </p>
                <div className='roles-grid-wrapper'>
                    <div>
                        <div className='roles-small-rectangle-1' onClick={navigate_roles_familia}>
                            <p className="little-tittle-black">
                                PADRES <br></br> DE FAMILIA
                            </p>
                        </div>
                        <div className='roles-large-rectangle-1'>
                            <p className='mid-tittle-white'>
                                FORO
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='roles-small-rectangle-2-blue' onClick={navigate_roles_ing}>
                            <p className='mid-tittle-white'>
                                INGENIERO
                            </p>
                        </div>
                        <div className='roles-small-rectangle-2-grey'>
                            <p className='mid-tittle-black'>
                                COCINERO
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='roles-small-rectangle-2-grey-v'>
                            <p className='mid-tittle-black'>
                                MÉDICO
                            </p>
                        </div>
                        <div className='roles-small-rectangle-2-bblue'>
                            <p className='mid-tittle-white'>
                                ESTUDIANTE
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='roles-small-rectangle-1-blue'>
                            <p className='little-tittle-white'>
                                PROFESOR
                            </p>
                        </div>
                        <div className='roles-large-rectangle-1'>
                            <p className='mid-tittle-white'>
                                AGRICULTOR
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='roles-small-rectangle-1'>
                            <p className="little-tittle-black">
                                DISEÑADOR <br></br> GRÁFICO
                            </p>
                        </div>
                        <div className='roles-large-rectangle-1-blue'>
                            <p className='mid-tittle-white'>
                                Experto <br></br> en marketing
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='roles-small-rectangle-2-blue'>
                            <p className='mid-tittle-white'>
                                FITNESS <br></br> TRAINNER
                            </p>
                        </div>
                        <div className='roles-small-rectangle-2-grey'>
                            <p className='mid-tittle-black'>
                                LÍDER DE COMUNIDAD
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roles;