// import { useState } from "react"
import { useNavigate } from "react-router-dom"

import ShowMap from './showmap'; // Importa el componente ShowMap

import "./../styles/Dashboard.css"

const Map = () => {

    const navigate = useNavigate();
    const ini = () => {
        navigate("/")
      }
    const navigate_dashboard = () => [
        navigate("/dashboard")
    ]

    return (
        <section className="all-map-wrapper">
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

            <div className="map-wrapper">
                <div className='map-title'>
                    Survival - Risk Map
                </div>
                <div className='map-container'>
                    <ShowMap />
                </div>
            </div>
        </section>
    )
}

export default Map;