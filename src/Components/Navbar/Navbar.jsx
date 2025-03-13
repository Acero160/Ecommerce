import React from 'react';
import {IoMdSearch} from "react-icons/io";
import {FaCaretDown, FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Tienda",
        link: "",
    },
    {
        id: 3,
        name: "About",
        link: "/Products",
    },
    {
        id: 4,
        name: "Blogs",
        link: "",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Productos Tendencia",
        link: "/#",
    },
    {
        id: 2,
        name: "Mejores Ventas",
        link: "/#",
    },
    {
        id: 3,
        name: "Mejor Valorados",
        link: "",
    },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
      <div className='py-4'>
        <div className="container flex justify-between items-center ">

            {/*LOGO AND LINKS SECTION */}
            <div className='flex  items-center gap-4'>

                <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                    TechMart
                </a>
                
                {/* MENU ITEMS */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-6'>
                        {MenuLinks.map((data,index) => (
                                <li key={index}>
                                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'> {''} {data.name} </a>
                                </li>
                            ))}
                            
                             {/*DROPDOWN */}  
                           <li className='relative cursor-pointer group'>
                            <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'> Links rapidos 
                            
                                <FaCaretDown className='group:hover:rotate-180 duration-300'/>
                            </a>

                         {/* Dropdown Links */}
                         <div className='abosulte left-0 -bottom-1 h-1 hidden  group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                            <ul className='space-y-2'>
                                {
                                    DropdownLinks.map((data, index) => (
                                        <li>
                                            <a 
                                            className='text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                                            href={data.link}>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                         </div>
                        </li>
                    </ul>
                </div>
            <div>

                {/*NAVBAR RIGHT SECTION */}
                <div className='flex justify-between items-center gap-4'>
                    {/*SEARCH BAR SECTION*/}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search'
                        className='search-bar' />
                        <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top1/2 -translate-y-1/2 right-3 duration-200'/>
                    </div>

                    {/*ORDER BUTTON SECTION*/}
                    <button className='  relative p-3' onClick={handleOrderPopup}> 
                        <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                        <div className='w-4 h-4 bg-red-500 text-white rounded-full abosulte top-0 right-0 flex items-center justify-center text-xs'>
                            0
                        </div>
                    </button>
                     {/*DARK MODE Section*/}
                     <div>
                        <DarkMode />
                     </div>
              </div>               
             </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Navbar;
