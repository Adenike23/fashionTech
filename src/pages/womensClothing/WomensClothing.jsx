import React, {useState, useEffect} from 'react'
import { BsCart2 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import image3 from '../../assets/images/jewelry.webp'

const WomensClothing = () => {
    const [womensClothings, setWomensClothings] = useState([])
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    const getWomensClothings = async() => {
        const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        const data = await response.json()
        setWomensClothings(data)
    }
    // console.log(womensClothings);
    useEffect(() => {
        getWomensClothings()
    }, [])

    const increment = (id) => {
        womensClothings.map(cloth => {
            if(cloth.id === id) {
             setCount(count + 1)
            } return setCount(count)
        })
    }
    
    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
         <div className="grid grid-cols-3 gap-8 px-10 mt-[4rem]">
            {womensClothings.map(womensCloth => (
                <div className='rounded-lg bg-gray-200 shadow-xl p-3 h-[90%]'>
                <img src={womensCloth.image} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer  w-[100%] h-[80%]'/>
                    <h2 className="pt-5">{womensCloth.title}</h2>
                    <p>${womensCloth.price}</p>
                    <div className="flex justify-between items-center pt-4">
                        <div className="bg-gray-100 flex p-3 rounded">
                        <button onClick={() => increment(womensCloth.id)}>+</button>
                        <p className='px-3'>{count}</p>
                        <button onClick={() => decrement()}>-</button>
                        </div>
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

export default WomensClothing