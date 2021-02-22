import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-3.jpg";
import imgDetail2 from "../../images/detalle-ser-3-2.jpg";
import Zoom from "../../images/zoom.svg";

const ServiceThree= () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service-3">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {services[2].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
          <div className="info-parrafo">
              <p className="information">
              El psicomatrix es un sistema de numerología creado por sacerdotes egipcios y seguido por Pitágoras quien expandió y exploto estos conocimientos para ayudar a descubrir el propósito de vida de una persona. 
              <br/><br/>
              El psicomatrix sirve como herramienta de autoconocimiento, además de ayudarnos a mantener un equilibrio.
              <br/><br/>
              Dentro de la consulta se puede analizar:
              <br/>
              Relaciones: socios, pareja o amigos.
              <br/>
              Fechas propicias para proyectos o lo que desees. 

              <br/><br/>
              En el psicomatrix podemos analizar distintos tipos de temas: 
              <br/><br/>

              </p>
              <div className="information-list">
              <ul className="lista">
                <li>Energía ha y tha ( positiva y negativa) </li>
                <li>Autoestima</li>
                <li>Carácter</li>
                <li>Salud</li>
                <li>Memoria</li>
                <li>Intuición</li>
                <li>Estabilidad de nucleos ( familia e hijos) </li>
                <li>Estabilidad emocional </li>
                <li>Estabilidad financiera</li>
                <li>Sexualidad</li>
                <li>Fidelidad </li>
                <li>Karma </li>
                <li>Dones mágicos y más. </li>
              </ul>
              </div>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Sesión: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{services[2].hora}</p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{services[2].price}</p>
                    </div>
                  </div>
                </div>
                <div className="content-pay">
                  <div className="columnTwo">
                    <div className="name-column">
                    <p><i className="">&nbsp;</i></p>
                    <p>modalidad: </p>
                    </div>
                    <div className="icon-column">
                      <p className="i-pago" ><i className="fab fa-whatsapp"></i>
                      
                        <img src={Zoom} alt=""/>
                      
                      </p>
                      <p >WhatsApp o Zoom </p>
                    </div>
                  </div>
                  <div className="columnTwo">
                    <div className="name-column">
                    <p><i className="">&nbsp;</i></p>
                    <p>Medio de pago: </p>
                    </div>
                    <div className="icon-column">
                      <p className="i-pago"><i className="fab fa-cc-paypal"></i><i className="fas fa-random"></i></p>
                      <p className="pago">Paypal o Transferencia</p>
                    </div>
                  </div>
                </div>


                <div className="sale-button">
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[2].mensaje}`} rel="noopener noreferrer" target="_blank">
                    <button type="button">
                    <i className="fab fa-whatsapp"></i> Solicitar
                    </button>
                    </a>
                </div>
              </div>
            </div>
            <div className="info-images">
              <div className="img">
                <img src={imgDetail1} alt=""/>
              </div>
              <div className="img">
                <img src={imgDetail2} alt=""/>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default ServiceThree;
