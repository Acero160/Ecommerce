import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import DarkMode from './Components/Navbar/DarkMode';
import Hero from './Components/Navbar/Hero/Hero';
import Category from './Components/Category/Category';
import Category2 from './Components/Category/Category2';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import Heading from './Components/Shared/Heading';
import Blogs from './Components/Blogs/Blogs';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";




import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";


const BannerData = {
  discount: "30% OFF",
  title: "Sientete Feliz",
  date: "10 Jan al 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Rebajas Invierno",
  title4: "Disfruta de un sonido de alta calidad con cancelación activa de ruido y hasta 30 horas de autonomía.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "40% OFF",
  title: "HAPPY HOURS",
  date: "14 Jan al 28 Jan",
  image: smartwatch2,
  title2: "Air Solo Bass",
  title3: "Rebajas Invierno",
  title4: "Mantente conectado y en control con nuestro reloj inteligente. Monitorea tu salud, recibe notificaciones y disfruta de hasta 10 días de batería.",
  bgColor: "#2dcc6f",
};


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState (false) ;

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  
  React.useEffect(() => {
    AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
  },[]); 







  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
       <Navbar handleOrderPopup ={handleOrderPopup} />
       <Hero handleOrderPopup={handleOrderPopup} />
       <Category />
       <Category2 />
       <Services />
       <Banner data = {BannerData}/>
       <Products />
       <Heading />
       <Banner data = {BannerData2}/>
       <Blogs /> 
       <Partners />
       <Footer />
       <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
   </div>
  )
}

export default App
