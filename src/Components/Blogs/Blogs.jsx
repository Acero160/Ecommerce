import React from 'react'
import Heading from '../Shared/Heading'

//import images

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";


const BlogData = [
    {
        title: "¿Como elegir el mejor smartwatch?",
        subtitle: "Conozca los factores clave a considerar al elegir el reloj inteligente perfecto para su estilo de vida, desde características hasta diseño y rendimiento...",
        published: "Feb 20, 2024 by Dilshad",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "¿Cómo elegir el gadget perfecto?",
        subtitle: "Conozca los factores clave a considerar al elegir el dispositivo perfecto para sus necesidades, desde características esenciales y diseño hasta presupuesto y..",
        published: "Feb 28, 2024 Setyva",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "¿Cómo elegir los auriculares VR perfectos?",
        subtitle: "Explore los elementos cruciales a considerar al seleccionar el visor de realidad virtual ideal para su experiencia, centrándose en las funciones, la comodidad y..",
        published: "Ap 17, 2024 by Sabir",
        image: Img3,
        aosDelay: "400",
    },

]

const Blogs = () => {
  return (
    <div className='my-12'>
       <div className="container">
          {/* HEADER SECTION */}

          <Heading title = "Noticias recientes"
        subtitle ={"Visita nuestors blogs"} />
       

        {/* BLOG SECTION */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>

            {/* BLOG CARD */}

        {
            BlogData.map((data) => (
                <div data-aos="fade-up"
                data-aos-delay={data.aosDelay} 
                key={data.title} 
                className='bg-white dark:bg-gray-900'>

                    {/* IMG SECTION */}
                    <div className='overflow-hidden rounded-2xl mb:2'>
                        <img src={data.image} alt="" 
                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                        
                        />
                    </div>

                    {/* CONTENT SECTION */}
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                    </div>

                </div>
            ))
        }

        </div>
       </div>
    </div>
  )
}

export default Blogs
