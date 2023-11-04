import React, { useEffect, useState } from 'react'
import image from '../../assets/images/television.jpg'
import image3 from '../../assets/images/jewelry.webp'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [electronics, setElectronics] = useState([])
    const [mens_clothing, SetMens_clothing] = useState([])
    const [womens_clothing, SetWomens_clothing] = useState([])
    const [jewelry, setJewelry] = useState([])
    const navigate = useNavigate()
    const getElectronics = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await response.json()
        setElectronics(data[4])
    }
    console.log(electronics);
    useEffect(() => {
        getElectronics()
    }, [])
   
    const getMenCloth = async() => {
        const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        const data = await response.json()
        SetMens_clothing(data[0])
    }
    console.log(electronics);
    useEffect(() => {
        getMenCloth()
    }, [])
    
    const getWomenCloth = async() => {
        const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        const data = await response.json()
        SetWomens_clothing(data[0])
    }
    console.log(electronics);
    useEffect(() => {
        getWomenCloth()
    }, [])
   
    const getJewelry = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const data = await response.json()
        setJewelry(data[0])
    }
    console.log(electronics);
    useEffect(() => {
        getJewelry()
    }, [])
    // Samsung Crystal UHD Smart TV
  return (
    <div className=''>
            <div className="flex justify-between items-center py-10 px-[5rem]">
            <div className='w-[40%]'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-3xl py-5'>{electronics.title}</h1>
                <h3 className='pb-5'>{electronics.description}</h3>
                <button onClick={() => navigate('/electronics')} className='px-5 py-3 bg-purple-500 rounded text-white'>SEE PRODUCT</button>
            </div>
            <img src={electronics.image} alt="" className='bg-red-600'/>
        </div>
        
        
        <div className='py-10 grid grid-cols-4 gap-[1.5rem] mx-6'>
            <div className='max-w-md shadow-md pb-5 rounded'>
                <img src={image} alt="" className='w-[50%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Electronics</p>
                    <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                    <BsArrowRight className='inline'/>
               </div>
            </div>
            <div className='shadow-md max-w-md pb-5 rounded'>
                <img src={image} alt="" className='w-[50%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Electronics</p>
                    <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                    <BsArrowRight className='inline'/>
               </div>
            </div>
            <div className='shadow-md max-w-md pb-5 rounded'>
                <img src={image3} alt="" className='w-[50%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Electronics</p>
                    <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                    <BsArrowRight className='inline'/>
               </div>
            </div>
            <div className='shadow-md max-w-md pb-5 rounded'>
                <img src={image} alt="" className='w-[50%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Electronics</p>
                    <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                    <BsArrowRight className='inline'/>
               </div>
            </div>
        </div>

        <div>
        <div className="flex justify-around items-center py-10 px-[5rem] rounded mx-[2rem]">
            <div className='w-[60%] px-10 py-20 bg-purple-800 text-white'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-3xl py-5 rounded'>{jewelry.title}</h1>
                <h3 className='pb-5'>{jewelry.description}</h3>
                <button className='px-5 py-3 bg-purple-500 rounded'>SEE PRODUCT</button>
            </div>
            <img src={jewelry.image} alt="" className='bg-red-600 rounded-full w-[25%]'/>
        </div>
        <div className="flex justify-around items-center py-10 px-[5rem]">
        <img src={mens_clothing.image} alt="" className='bg-red-600 rounded-lg w-[30%]'/>
            <div className='w-[55%] bg-gray-200 px-10 py-20'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-3xl py-5'>{mens_clothing.title}</h1>
                <button className='px-5 py-3 bg-purple-500 text-white rounded'>SEE PRODUCT</button>
            </div>
        </div>
        <div className="flex justify-around items-center py-10 px-[5rem] mx-[2rem] rounded">
            <div className='w-[55%] px-10 py-20 bg-purple-800 text-white'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-3xl py-5'>{womens_clothing.title}</h1>
                <button className='px-5 py-3 bg-purple-500 rounded'>SEE PRODUCT</button>
            </div>
            <img src={womens_clothing.image} alt="" className='rounded-full w-[30%]'/>
        </div>
        </div>
    </div>
  )
}

export default Home