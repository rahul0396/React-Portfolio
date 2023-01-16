import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Slide1 from "../../img/ecommerce.png"
import Slide2 from "../../img/componentlib.png"
import Slide3 from "../../img/musicapp.png"
import Slide4 from "../../img/amazon.png"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Portfolio = () => {
  return (
    // <div className="portfolio">

    //     <span>Recent Projects</span>
    //     <span>Portfolio</span>
        
    //         <Swiper spaceBetween={30}
    //                 slidesPerView={3}
    //                 grabCursor={true}>
               
               
    //             <SwiperSlide className='portfolio-slider'>
    //             <img src={Slide1} alt="" />
    //             </SwiperSlide>
    //             <SwiperSlide className='portfolio-slider'>
    //             <img src={Slide2} alt="" />
    //             </SwiperSlide >
    //             <SwiperSlide className='portfolio-slider'>
    //             <img src={Slide3} alt="" />
    //             </SwiperSlide>
    //             <SwiperSlide className='portfolio-slider'>
    //             <img src={Slide4} alt="" />
    //             </SwiperSlide>


                
    //         </Swiper>
           
        

        




    // </div>
    <div className="portfolio" id="portfolio">
    {/* heading */}
    <span >Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
    >
      <SwiperSlide>
        <a href="https://stackzer.netlify.app/">

        <img src={Slide2} alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide1} alt="" />
      </SwiperSlide>
     
    </Swiper>
  </div>
  )
}

export default Portfolio