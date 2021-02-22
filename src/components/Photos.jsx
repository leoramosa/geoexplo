import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../images/ser6.jpg'
import img2 from '../images/ser6-2.jpg'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);
const Photos = () => {
  return (
    <div>
       <Swiper
      spaceBetween={5}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
     /*  onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      <SwiperSlide>
      
                <img src={img1} alt=""/>
      
      </SwiperSlide>
      <SwiperSlide>
      
      <img src={img2} alt=""/>
      
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Photos;
