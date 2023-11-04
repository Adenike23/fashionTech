import React, {useState, useEffect} from 'react'
import { BsCart2 } from 'react-icons/bs'

const Jewelery = () => {
    const [jewelery, setJewelery] = useState([])
    const getJewelery = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const data = await response.json()
        setJewelery(data)
    }
    console.log(jewelery);
    useEffect(() => {
        getJewelery()
    }, [])
  return (
    <div>
        <div className="grid grid-cols-4 gap-6 px-10 mt-[4rem]">
            {jewelery.map(eachJewelery => (
                <div onClick={()=> navigate(`/moviedetails/${eachJewelery.id}`)} className='rounded-lg bg-gray-200 shadow-xl p-3 h-[75%]'>
                <img src={eachJewelery.image} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer w-[100%] h-[75%]'/>
                    <h2 className="pt-5">{eachJewelery.title}</h2>
                    <div className="flex justify-between items-center py-4">
                    <p><span className='text-purple-500 text-xl'>Price:</span> ${eachJewelery.price}</p>
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

export default Jewelery