import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/testimonials.css'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import user from '../images/user-profile.png'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);
const Testimonials = () => {
  return (
    <div className="content_testimonials">
      <div className="title-testimonios">
        <p>Testimonios</p>
      </div>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      navigation
     /*  onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      <SwiperSlide>
        <div className="content-detail-test">
          <div className="img-details-test">
            <img src={user} alt=""/>
          </div>
          <div className="details_info-test">
            <p>
            “Conocí el horóscopo de muy pequeña. Mi alma pisciana me ha hecho siempre buscar señales, respuestas del mundo. Y en Piscesntonic encontré el camino. Agradezco al universo por sus místicas y a Piscesntonic por siempre mostrarme el camino real. La leída de mi carta astral me ha ayudado en caer en cuenta de dónde vengo, quién soy y a donde voy. Algo que todos deberíamos obtener y más si viene de una fuente confiable. La mía Piscesntonic.”
            <br/><br/>
            k.M.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="content-detail-test">
          <div className="img-details-test">
            <img src={user} alt=""/>
          </div>
          <div className="details_info-test">
            <p>
            “Obtener algún indicio para entender lo que pasa se ha vuelto clave para mí y conocerme. Las lecturas de tarot evolutivo con Piscesntonic son perfectas para conocer lo que me pasa, así me ayuda a caminar con cautela. Agradezco tener a la mano esta consulta tarotista siempre, Piscesntonic me ha guiado con todas sus proyecciones e interpretaciones y lo sigue haciendo.”
            <br/><br/>
            S.C.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Testimonials;
