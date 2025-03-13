import React from 'react';
import Slider from "react-slick";
import Image1 from "../../../assets/hero/headphone.png";
import Image2 from "../../../assets/category/vr.png";
import Image3 from "../../../assets/category/macbook.png";
import Button from '../../Shared/Button';

const HeroData = [
    {
        id: 1, 
        img: Image1,
        subtitle: "Beats Solo",
        title: "Inalambricos",
        title2: "Auriculares",
        
    },
    {
        id: 2, 
        img: Image2,
        subtitle: "¿Donde miras?",
        title: "Inalambricos",
        title2: "Virtuales",
        
    },
    {
        id: 3, 
        img: Image3,
        subtitle: "Unicas",
        title: "Marcas",
        title2: "Portatiles",
       
    },
   

];





const Hero = ({handleOrderPopup}) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        autoplay: true,
         // autodisplay: true,
        autoplaySpeed: 2000,
        cssEase: "easy-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
  };
    
  return (
    <div className='container'>
      <div className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-color flex justify-center items-center">

        <div className='container pb-8 sm:pb-0'>
        {/*HERO SECTION*/}

        <Slider {...settings}>
         
            {HeroData.map((data) => (
                 <div key = {data.id}>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/*TEXT CONTENT SECTION*/}
                      <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order- relative z-10 '>
                        <h1 data-aos="zoom-out"
                            datao-aos-duration="500"
                            data-aos-delay="true"
                         className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                        <h1 data-aos="zoom-out"
                            datao-aos-duration="500"
                            data-aos-delay="true"
                           className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                        <h1 data-aos="zoom-out"
                            datao-aos-duration="500"
                            data-aos-delay="true"
                            className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[98px] font-bold'>{data.title2}</h1>
                            
                        <div 
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        >
                          <Button 
                          text = "Shop By Category"
                          bgColor= "bg-primary"
                          textColor = "text-white"
                          handler = {handleOrderPopup}
                          />
                        </div>
                      </div>

                    {/*IMG  SECTION*/}
                    <div className='order-1 sm:order-2'>
                   </div>
                     <div 
                        data-aos="zoom-in"
                        data-aos-once = "true"
                        className='relative z-10'
                     >
                    <img src={data.img} alt=""  className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_  rgba(0 0 0)] relative z-40'/>
                       </div>
                 </div>
                 </div>
                ))
            }
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
