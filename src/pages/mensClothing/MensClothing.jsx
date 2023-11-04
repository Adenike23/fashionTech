import React, {useState, useEffect} from 'react'
import { BsCart2 } from 'react-icons/bs'

const MensClothing = () => {
    const [mensClothings, setMensClothings] = useState([])
    const getMensClothings = async() => {
        const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        const data = await response.json()
        setMensClothings(data)
    }
    console.log(mensClothings);
    useEffect(() => {
        getMensClothings()
    }, [])
   

  return (
    <div>
         <div className="grid grid-cols-4 gap-8 px-10 mt-[4rem]">
            {mensClothings.map(mensCloth => (
                <div onClick={()=> navigate(`/moviedetails/${mensCloth.id}`)} className='rounded-lg bg-gray-200 shadow-xl p-3 h-[90%]'>
                <img src={mensCloth.image} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer  w-[100%] h-[77%]'/>
                    <h2 className="pt-5">{mensCloth.title}</h2>
                    <div className="flex justify-between items-center py-4">
                    <p>${mensCloth.price}</p>
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

export default MensClothing