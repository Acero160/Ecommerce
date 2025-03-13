import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "<Hero />",
    },
    {
        title: "Nosotros",
        link: "",
    },
    {
        title: "Contacto",
        link: "/#contact",
    },
    {
        title: "Blogs",
        link: "<Blogs />",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* COMPANY DETAILS */}
            <div className='py-8 px-5'>
                <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'> TECHMART </a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                ¡Descubre lo último en tecnología en nuestra tienda online! Desde relojes elegantes hasta auriculares de alta calidad y computadoras potentes, tenemos todo lo que necesitas para mejorar tu experiencia tecnológica.
                </p>
               
              <p className='text-gray-500 mt-4 py-2'>
                     Realizado por Gabriel Acero
                </p> 
                <div className='pb-20 pt-5'>
                <a href="https://www.youtube.com" target='_blank' className='inline_block bg-primary/90 text-white py-4 px-8 mt-2 text-sem rounded-full'> Visita nuestro Canal de Youtube </a>
                </div>
            </div>
            {/* FOOTER LINKS */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'> Links Importantes </h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'> {data.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                    {/* SECOND LINKS */}

                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'> Links Rapidos </h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'> {data.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* COMPANY ADDRESS */}

                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-bold sm:text-left mb-3'> Direccion </h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p> Al Waha St, Dubai </p>
                                <div>
                                <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p> +91457463 </p>
                                </div>

                                {/* SOCIAL LINKS */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="https://www.instagram.com" target='_blank'>
                                        <FaInstagram  className='text-3xl hover:text-primary duration-300'/>
                                    </a>
                                    <a href="https://www.facebook.com" target='_blank'>
                                        <FaFacebook  className='text-3xl hover:text-primary duration-300'/>
                                    </a>
                                    <a href="https://www.linkedin.com" target='_blank'>
                                        <FaLinkedin  className='text-3xl hover:text-primary duration-300'/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>


            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
