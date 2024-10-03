import React, { useState, useEffect, useContext } from 'react'
import { BsCart2 } from 'react-icons/bs'
import image5 from '../../assets/images/man.webp'
import CartContext from '../../context/CartContext'
import { motion } from 'framer-motion'

const Electronics = () => {
    const cartCtx = useContext(CartContext)
    const [electronics, setElectronics] = useState([])
    const [loading, setLoading] = useState(true)
    const [added, setAdded] = useState(false)

    const getElectronics = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await response.json()
        setElectronics(data)
        if(response) setLoading(false)
    }
    useEffect(() => {
        getElectronics()
    }, [])

    // useEffect(() => {
    //     fetchElectronics().then(data => {
    //         setElectronicsData(data)
    //     }).catch(error => {
    //         console.error('Error fetching electronics', error);
            
    //     })
    // }, [fetchElectronics])
    // console.log('electronicsData', electronicsData);
    
   
    const handleAddToCart = (electronic) => {
        cartCtx.addItem(electronic)
      }

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.5 }} 
        exit={{x: '-100vw', transition: 'easeInOut'}} 
        className='text bg-white text-black'>
        {loading && <span className="loading loading-spinner loading-lg absolute top-[20%] left-[50%] -translate-x-[50%]"></span>}
        {added &&  <div className="alert bg-purple-800 text-white w-[50%] sticky top-20 left-[50%] -translate-x-[50%]">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your item has been added to Cart!</span>
        </div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5 px-10 mt-[4rem]">
            {electronics.map((electronic, index) => (
                <div key={index} className='rounded-lg p-3 h-[80%] md:h-[90%]'>
                <img src={electronic.image} alt="" className='rounded-lg cursor-pointer w-[100%] h-[90%] md:h-[80%]'/>
                    <h2 className="pt-5">{electronic.title}</h2>
                    <div className="flex justify-between pt-5 md:pt-2">
                    <p className='font-bold'>#{electronic.price * 100}</p>
                       <div  onClick={() => handleAddToCart(electronic)} className='bg-purple-900 px-4 py-2 rounded flex items-center gap-2 cursor-pointer hover:scale-110 duration-700'>
                       <BsCart2 className='text-white'/><p className='text-white'>Add to Cart</p>
                       </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex flex-col justify-between items-center py-10 gap-3 mt-10 px-[2rem] lg:px-[5rem] sm:flex-row md:mt-0">
            <div className='w-[100%] sm:w-[45%] md:w-[50%] text-center md:text-left'>
            <h1 className='font-bold text-3xl py-5'>BRINGING YOU THE <span className='text-purple-800'>BEST</span> FASHION AND ELECTRONICS GEAR</h1>
            <h2>Discover a retail haven in Illinois, where sophistication and modernity converge. Our store presents an exclusive fusion of jewelry, men's and women's fashion, and cutting-edge electronics. Our jewelry collection sparkles with elegance, offering timeless pieces from necklaces to watches, catering to every style and occasion. Men find their style sanctuary among our curated selection, featuring refined suits, casual wear, and accessories. For the fashion-forward woman, our diverse array includes chic dresses, trendy tops, and comfortable yet stylish loungewear.</h2>
            </div>
            <img src={image5} alt="" className='w-[80%] sm:w-[50%] mt-5 md:w-[45%] lg:w-[35%]'/>
        </div>
    </motion.div>
  )
}

export default Electronics