import React from 'react'
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

            {/* FIRST COLUMN */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black 90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>  Disfruta </p>
                        <p className='text-2xl font-semibold mb-[2px]'>   Ancho  </p>
                        <p className='text-4xl xl:text-4.7xl font-bold opacity-20 mb-6'>  Auriculares  </p>
                        <Button 
                        text="Browse"
                        bgColor = {"bg-primary"}
                        textColor= {"text-white"}/>
                    </div>
                </div>
                <img src={Image1} alt="" 
                className='w-[320px] absolute bottom-0'/>
            </div>

            {/* SECOND COLUMN */}

            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>  Disfruta </p>
                        <p className='text-2xl font-semibold mb-[2px]'>  Ancho  </p>
                        <p className='text-4xl xl:text-4.7xl font-bold opacity-40 mb-6'>  Reloj </p>
                        <Button 
                        text="Browse"
                        bgColor = {"bg-white"}
                        textColor= {"text-brandYellow"}/>
                    </div>
                </div>
                <img src={Image2} alt="" className='w-[320px] absolute -right-14 lg:top-[10px]'/>
            </div>

            {/* THIRD COLUMN */}

            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>  Disfruta  </p>
                        <p className='text-2xl font-semibold mb-[2px]'>  El nuevo  </p>
                        <p className='text-4xl xl:text-4xl font-bold opacity-40 mb-6'> Portatil </p>

                        <Button 
                        text="Browse"
                        bgColor = {"bg-white"}
                        textColor= {"text-primary"}/>
                    </div>
                </div>
                <img src={Image3} alt="" className="w-[300px] absolute top-1/2 -translate-y-1/2 right-12 "/>
            </div>




        </div>
      </div>
    </div>
  )
}

export default Category
