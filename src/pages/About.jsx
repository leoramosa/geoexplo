import React from 'react'
import './styles/about.css'
import imgAbout from '../images/about.jpg'
import { Link } from 'react-router-dom'

 const About = () => {
  return (
    <>
      <div className="content_about">
        
        <div className="about-header">
          <div className="about_overlay">
          <div className="about_container">
              <p className="about_title">Expertos en <strong>Servicios de Exploración</strong></p>
              
              <br/>
              <div className="link_contact">
              <Link to="/contacto" className="" >
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </Link>
              </div>
             
            </div>
          </div>
        </div>
        <div className="about_information">
          <div className="row_about">
       <p>
       Somos una empresa especializada en Dirección y Administración de Proyectos de Exploración, que brinda soporte a inversiones nacionales y extranjeras.
       </p>
       <p className="second_title">Misión</p>
       <p>
       Brindar un servicio 100% confiable y cumpliendo estándares internacionales en el área de exploraciones, fortaleciendo el mercado peruano para las diversas inversiones nacionales y extranjeras mediante la generación de nuevas zonas exploradas.
       </p>
       <p className="second_title">Visión</p>
       <p>
       Ser la mejor empresa peruana en Dirección y Administración de Proyectos de Exploración,  respetando las Comunidades, Medio Ambiente y generando nuevas alternativas de empleo. 
       </p>
       <p className="second_title">Valores</p>
       <p>
       Integridad, Responsabilidad, Respeto, Pasión y Humildad.
       </p>

          </div>
          <div className="row_about">
            <div className="img_about">
              <img src={imgAbout} alt=""/>
            </div>
            <p className="title-foto">Directora de Proyectos, Ing. Shirley Villavicencio</p>
            <div className="button-cv">
            <a download="cv-ing-shirley-villavicencio-geoexplo-english"  href="https://apiweb.netlify.app/images/geoexplo/Shirley_Villavicencio_Gallo_CV_espanol.pdf" target="_blank" rel="noreferrer">
              <button type="button">
              <i class="far fa-file-pdf"></i> CV Español
              </button>
              <a download="cv-ing-shirley-villavicencio-geoexplo-espanol" href="https://apiweb.netlify.app/images/geoexplo/CV_Shirley_Villavicencio_Gallo_english.pdf" target="_blank" rel="noreferrer">
              <button type="button">
              <i class="far fa-file-pdf"></i> CV English
              </button>
              </a>
              
             
              </a>
              
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;