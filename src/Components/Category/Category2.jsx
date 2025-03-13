import React from 'react'
import Image1 from "../../assets/category/gaming.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/speaker.png"
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>


             {/* FIRST COLUMN */}

             <div className='sm:col-span-2 py-10 pl-10 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-6'>
                        <p className='mb-[2px] text-white'>  Dsifruta  </p>
                        <p className='text-2xl font-semibold mb-[2px]'>  La Nueva   </p>
                        <p className='text-4xl xl:text-4xl font-bold opacity-40 mb-6'> PS4 </p>

                        <Button 
                        text="Browse"
                        bgColor = {"bg-primary"}
                        textColor= {"text-white"}/>
                    </div>
                </div>
                <img src={Image1} alt="" className="w-[300px] absolute top-1/2 -translate-y-1/2 right-14 "/>
            </div>


            {/* SECOND COLUMN */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen 90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>  Disfruta  </p>
                        <p className='text-2xl font-semibold mb-[2px]'>  De Las  </p>
                        <p className='text-4xl xl:text-4.7xl font-bold opacity-20 mb-6'>  VR  </p>
                        <Button 
                        text="Browse"
                        bgColor = {"bg-white"}
                        textColor= {"text-brandGreen"}/>
                    </div>
                </div>
                <img src={Image2} alt="" 
                className='w-[320px] absolute bottom-0'/>
            </div>

            {/* THIRD COLUMN */}

            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'> Disfruta  </p>
                        <p className='text-2xl font-semibold mb-[2px]'>  del nuevo </p>
                        <p className='text-4xl xl:text-4.7xl font-bold opacity-40 mb-6'>  Altavoz </p>
                        <Button 
                        text="Browse"
                        bgColor = {"bg-white"}
                        textColor= {"text-brandBlue"}/>
                    </div>
                </div>
                <img src={Image3} alt="" className='w-[200px] absolute bottom-0 right-0'/>
            </div>

            



        </div>
      </div>
    </div>
  )
}

export default Category
