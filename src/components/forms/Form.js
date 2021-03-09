import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <div className='form-content-left'>
        <div className="map_google">
        <iframe  className="content_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.0199910510335!2d-77.00086673154433!3d-12.17495905581644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b996f8d28f1b%3A0xe7094e0b11ddcd9!2sAv%20El%20Sol%20965%2C%20Chorrillos%2015054!5e0!3m2!1ses-419!2spe!4v1615163401547!5m2!1ses-419!2spe" width="600" height="280"  title="google-map" ></iframe>
         {/*  <iframe className="content_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.434352152835!2d-76.99404808464854!3d-12.082389045855194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c634be4da727%3A0xe08227bb6779a3b2!2sCalle%20Enrique%20Pastor%20108%2C%20San%20Borja%2015021!5e0!3m2!1ses-419!2spe!4v1612846874590!5m2!1ses-419!2spe" width="600" height="280"  aria-hidden="false"  title="google-map"></iframe> */}
          </div>
          Escríbenos por Whatsapp:
          <div className="whastapp-btn">
            <a className="btn-whatsapp" href="https://api.whatsapp.com/send?phone=51995508944&text=Hola%20quisiera%20m%C3%A1s%20infomacion%20de%20sus%20servicios..." rel="noopener noreferrer" target="_blank">
               <i className="fab fa-whatsapp"></i> Envianos un mensaje
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Form;
