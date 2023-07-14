import React from 'react';
import { useNavigate } from "react-router-dom"

const Roles_familia = () => {

    const navigate = useNavigate();
    const navigate_roles = () => {
        navigate("/dashboard/roles")
    }

    return (
        <section className='skyblue-all-wrapper'>
            <header>
                <h1> ZomBiz </h1>

                <section class="menu">
                    <ul class="menu-list" >
                        <li onClick={navigate_roles}>Back To Roles</li>
                    </ul>

                    <button>
                        <i class="fas fa-times"></i>
                        <i class="fas fa-bars"></i>
                    </button>
                </section>
            </header>

            <div className="all-roles-tittle">
                Padres de Familia
            </div>
            <div className='all-roles-text-wrapper'>
                <p>
                1.Evaluación de riesgos: Identificar los posibles peligros y amenazas que podrían afectar a los niños durante un apocalipsis zombie. <br></br>
                2.Plan de emergencia familiar: Crear un plan detallado para la protección y seguridad de los niños en caso de un brote zombi. <br></br>
                3.Suministros esenciales: Asegurarse de contar con alimentos, agua, medicamentos y otros elementos necesarios para el cuidado de los niños durante una crisis. <br></br>
                4.Refugios seguros: Identificar y fortificar áreas seguras para proteger a los niños de los zombis y otros peligros. <br></br>
                5.Comunicación y reunificación familiar: Establecer protocolos claros de comunicación y un punto de encuentro para reunir a la familia en caso de separación durante el caos del apocalipsis zombie. <br></br>
                6.Educación y entrenamiento: Enseñar a los niños medidas de seguridad básicas, como el reconocimiento de zombis, cómo mantenerse ocultos y cómo buscar ayuda. <br></br>
                7.Salud y bienestar: Cuidar de la salud física y emocional de los niños durante el apocalipsis zombie, brindándoles apoyo psicológico y atención médica adecuada. <br></br>
                8.Actividades y entretenimiento: Proporcionar actividades divertidas y educativas para mantener a los niños ocupados y motivados en un entorno desafiante. <br></br>
                9.Red de apoyo: Conectar con otros padres y familias para compartir experiencias, consejos y recursos relacionados con la protección y cuidado de los niños durante el apocalipsis zombie. <br></br>
                10.Actualizaciones y consejos de expertos: Mantenerse informado sobre las últimas recomendaciones de seguridad infantil en un contexto de apocalipsis zombie, con contenido revisado por expertos y pruebas de usuario para garantizar su efectividad. <br></br>
                </p>
            </div>
        </section>
    )
}

export default Roles_familia;