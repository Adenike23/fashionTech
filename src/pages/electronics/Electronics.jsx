import React, { useState, useEffect } from 'react'
import { BsCart2 } from 'react-icons/bs'

const Electronics = () => {
    const [electronics, setElectronics] = useState([])
    const getElectronics = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await response.json()
        setElectronics(data)
    }
    console.log(electronics);
    useEffect(() => {
        getElectronics()
    }, [])
   
  return (
    <div>
        <div className="grid grid-cols-3 gap-8 px-10 mt-[4rem]">
            {electronics.map(electronic => (
                <div onClick={()=> navigate(`/moviedetails/${electronic.id}`)} className='rounded-lg bg-gray-200 shadow-xl p-3 h-[90%]'>
                <img src={electronic.image} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer  w-[100%] h-[80%]'/>
                    <h2 className="pt-5">{electronic.title}</h2>
                    <div className="flex justify-between items-center py-4">
                    <p>${electronic.price}</p>
                       <div className='bg-purple-400 px-4 py-2 rounded flex items-center gap-2'>
                       <BsCart2 className=''/><p className=''>Add to Cart</p>
                       </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Electronics