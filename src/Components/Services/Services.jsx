import React from 'react'
import{
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";


const ServiceData = [

{
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: "Envio Gratuito",
    description: "Envio gratuito en todos los pedidos",
},

{
    id: 2,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: "Dinero seguro",
    description: "Te devolvemos tu dinero",
},

{
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: "Pago asegurados",
    description: "Todos los pagos estan asegurados",
},

{
    id: 4,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: "Soporte online 24/7",
    description: "Soporte técnico 24/7",
},

];



const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
            {
                ServiceData.map((data) => (
                    <div className='flex flex-col items-center sm:flex-row gap-4'>
                        {data.icon}
                        <div>
                        <h1 className='lg:text-xl fontbold'>{data.title}</h1> 
                        <h1 className='text-gray-400 text-sm'>{data.description}</h1>   
                        </div>
                    </div>        
            ))}
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
