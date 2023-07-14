import React from 'react';
import { useNavigate } from "react-router-dom"

const Roles_ing = () => {

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

            <div className='all-roles-tittle-yw'>
                INGENIERO
            </div>

            <div className='all-roles-text-wrapper'>
                <p>
                1.Evaluación de terrenos y ubicación: Aprender a evaluar terrenos y seleccionar la ubicación adecuada para la construcción de refugios y estructuras seguras durante un apocalipsis zombie. <br></br>
                2.Diseño y planificación de refugios: Obtener conocimientos sobre el diseño y la planificación de refugios que sean resistentes, funcionales y capaces de proteger a los ocupantes de los zombis y otros peligros. <br></br>
                3.Materiales y recursos: Conocer los materiales y recursos disponibles para la construcción de refugios, considerando su durabilidad, resistencia y disponibilidad durante una crisis. <br></br>
                4.Técnicas de construcción seguras: Aprender técnicas de construcción seguras y eficientes para la edificación de refugios y estructuras resistentes al apocalipsis zombie. <br></br>
                5.Sistemas de seguridad: Conocer y aplicar sistemas de seguridad adicionales, como medidas anti-intrusión y protección contra ataques zombis, en la construcción de refugios. <br></br>
                6.Sistemas de abastecimiento: Incorporar sistemas de abastecimiento de agua, electricidad y ventilación en los refugios, garantizando la comodidad y la supervivencia a largo plazo. <br></br>
                7.Mantenimiento y reparación: Aprender técnicas de mantenimiento y reparación de refugios, incluyendo la detección de daños y la resolución de problemas relacionados con la seguridad estructural. <br></br>
                8.Diseño comunitario: Explorar la construcción de estructuras comunitarias y la planificación urbana para promover la seguridad y la colaboración entre los supervivientes. <br></br>
                9.Innovación y adaptabilidad: Estar al tanto de las últimas innovaciones en tecnología y materiales de construcción para mejorar la seguridad y la eficiencia de los refugios en un contexto de apocalipsis zombie. <br></br>
                10.Validación y revisión por expertos: Acceder a contenido revisado por expertos en ingeniería y realizar pruebas de usuario para garantizar la calidad y eficacia de las guías de construcción de refugios en situaciones de apocalipsis zombie. <br></br>
                </p>
            </div>
        </section>
    )
}

export default Roles_ing;