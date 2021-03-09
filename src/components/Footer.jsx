import React from 'react'
import './styles/footer.css'
import './styles/Footertwo.scss'
import { Link } from "react-router-dom";
 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
         <div className="info">
           <p className="title-info">Contáctame</p>
           <div className="">
            <p>Teléfono: +51 995 508 944</p>
            <p>Email: svillavicencio@geoexplovillavicencio.com</p>
            <p>Direción: Av. El Sol 965 - Chorrillos - Lima - Perú</p>
           </div>
         </div>
         <div className="redes">
            <p className="title-info">Sígueme:</p>
            <div className="icon-redes">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>

            </div>
         </div>
         <div className="explorer">
           <p className="title-info">Destacados</p>
           <div className="link-footer">
            <Link className="footerLink" to="/s"><p>Proyectos</p></Link> 
            <Link className="footerLink" to="/s"><p>Servicios</p></Link> 
             
           </div>
         </div>
       </div>
       <div className="derechos desktop">
         <p>© Copyright Geoexplo Villavicencio 2021 -Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>

       </div>
     </div>
    </>
  )
}

export default Footer;
