import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-2.jpg";
import imgDetail2 from "../../images/detalle-ser-2-2.jpg";
import Zoom from "../../images/zoom.svg";

const ServiceTwo= () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service-2">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {services[1].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
          <div className="info-parrafo">
              <p className="information">
             <b>Carta natal y tránsitos:</b>  
              <br/>
              Es como una foto que se tomó al cielo en el momento exacto de tu nacimiento. Esta es la primera carta a la cual debemos consultar. Es una herramienta de autoconocimiento infinita, nos permite conocer que energías nos componen, cual es nuestro propósito de vida, que eventos sucedieron a lo largo de nuestra vida, por qué y más.
              <br/><br/>
              La astrología es un lenguaje simbólico sagrado el cual nos permite interpretar nuestra relación con los planetas y como estos guían a través de la vida.
                <br/> <br/>
               <b>Sinastria:</b> 
                <br/>
                Esta carta es una comparación entre dos cartas natales, para así poder identificar fortalezas y debilidades en una relación. Nos permite tener una mejor comprensión de las relaciones con ayuda de los planetas.
                <br/> <br/>
               <b>Carta compuesta: </b> 
                <br/>
                La carta compuesta es el punto medio entre dos cartas natales, representa la relación en su máximo entendimiento. Se crea una tercera carta combinando las energías de dos personas. Así podemos entender el propósito y lo que esta relación aporta para ambas partes.
                <br/> <br/>

               <b>Revolución solar y lunar:</b> 
                <br/>
                La revolución solar es una lectura de carta en el momento exacto del retorno de nuestro Sol natal. Es cuando se interpreta que nos trae el nuevo periodo solar. Para esto se recomienda hacer la consulta cerca de la fecha de cumpleaños. La lectura nos brinda una guía para aprovechar el nuevo año solar de vida.
                <br/> <br/>

                La revolución lunar es una lectura de la carta en el momento del retorno de nuestra Luna natal. Se puede decir que es la energía del mes que nos tocará vivir. Esta lectura se puede hacer en cualquier momento ya que se toma la energía del mes lunar. 
                <br/> <br/>
               <b>*Depende de ti si deseas usar sistema sideral o tropical para tu consulta.</b>
                <br/>
               <b>** Incluye : gráfico de la carta personalizado + informe y recomendaciones.</b>

              </p>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Sesión: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{services[1].hora}</p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{services[1].price}</p>
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
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[1].mensaje}`} rel="noopener noreferrer" target="_blank">
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

export default ServiceTwo;
