import React from 'react'
import './styles/home.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Link } from 'react-router-dom'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);



 const Home = () => {
  return (
    <>

      <div className="content_home">
      
        <NavBar/>
        <div className="Home_container">
        <div className="swiper_content_app">
          <Swiper
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={true}
              /* autoplay= {{
                delay: 2500,
                disableOnInteraction: false,
              }} */
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="full"
            >
              <SwiperSlide className="swiper_container-box_1">
                    <div className="overlay">
                  <div className="img_content">
                      {/* <p className="title_type">
                        Servicios
                      </p> */}
                      <p className="title_overlay">
                      Expertos en Servicios de Exploración
                      </p>
                      <Link to="/servicios/negociacion-y-conciliacion" className="button_header" >
                        <button type="button">
                          Más información
                        </button>
                      </Link>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_2">
                    <div className="overlay">
                  <div className="img_content">
                      
                      <p className="title_overlay">
                      Expertos en Servicios de Exploración
                      </p>
                      <Link to="/servicios/precios-de-transferencia" className="button_header" >
                        <button type="button">
                          Más información
                        </button>
                      </Link>
                    </div>
                  </div>
              </SwiperSlide>
             
             
            </Swiper>
          </div>

          <div className="projects">
            <p className="project_title">Servicios destacados</p>
            <div className="project_count">
              <div className="project_box">
                <div className="project_img one">
                <div className="project_img_content">
                <i class="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                  <p className="project_info_title">Trámite de Concesiones Mineras</p>
                  <Link to="/servicios/contractual" className="project_plus" >ver más</Link>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img two">
                <div className="project_img_content">
                <i class="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                <p className="project_info_title">Trámite para la autorización de uso de propiedad superficial </p>
                  <Link to="/servicios/corporativo" className="project_plus" href>ver más</Link>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img three">
                  <div className="project_img_content">
                  <i class="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                <p className="project_info_title">Mapeo Geológico, toma de muestras a nivel global</p>
                  <Link to="/servicios/tributario"  className="project_plus" href>ver más</Link>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img four">
                  <div className="project_img_content">
                  <i class="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                <p className="project_info_title">Mapeo Geológico, toma de muestras a nivel de Targets</p>
                  <Link to="/servicios/Arbitraje" className="project_plus" href>ver más</Link>
                </div>
              </div>
            </div>
            <div className="project_button">
              <Link to="/servicios">
                <button type="button">
                  ver más servicios
                </button>
              </Link>
            </div>
          </div>
          </div>
          <Footer/>
      </div>
      
     
    </>
  )
}

export default Home;