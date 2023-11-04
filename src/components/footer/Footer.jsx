import React from 'react'
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import image5 from '../../assets/images/man.webp'

const Footer = () => {
  return (
    <>
   {location.pathname !== '/checkout' ?  <div className="flex justify-between items-center py-10 px-[5rem]">
        <div className='w-[50%]'>
        <h1 className='font-bold text-3xl py-5'>BRINGING YOU THE <span className='text-purple-500'>BEST</span> FASHION AND ELECTRONICS GEAR</h1>
        <h2>Discover a retail haven in Illinois, where sophistication and modernity converge. Our store presents an exclusive fusion of jewelry, men's and women's fashion, and cutting-edge electronics. Our jewelry collection sparkles with elegance, offering timeless pieces from necklaces to watches, catering to every style and occasion. Men find their style sanctuary among our curated selection, featuring refined suits, casual wear, and accessories. For the fashion-forward woman, our diverse array includes chic dresses, trendy tops, and comfortable yet stylish loungewear.</h2>
    </div>
    <img src={image5} alt="" className='w-[35%]'/>
    </div>
    : ''}


    <div className='bg-purple-800 px-10 pb-4 pt-10 text-white'>
        <div className="flex justify-around items-center">
            <div className='w-[50%]'>
                <p className='logo text-2xl text-amber-300'>fashiontech</p>
                <h1 className='my-5'>Nestled in Illinois, our store stands as a testament to quality, style, and customer satisfaction. Our mission revolves around delivering an unparalleled shopping experience where the harmonious blend of fashion and technology meets the diverse demands of our clientele. Explore our sanctuary in Illinois, where fashion meets innovation, promising an immersive and unparalleled shopping experience for every visitor.</h1>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li onClick={() => navigate('/')} className='hover:text-amber-300 cursor-pointer'>Home</li>
                    <li onClick={() => navigate('/electronics')} className='hover:text-amber-300 cursor-pointer'>Electronics</li>
                    <li onClick={() => navigate('/jewelery')} className='hover:text-amber-300 cursor-pointer'>Jewelry</li>
                    <li onClick={() => navigate('/mensClothing')} className='hover:text-amber-300 cursor-pointer'>Men's clothing</li>
                    <li onClick={() => navigate('/womensClothing')} className='hover:text-amber-300 cursor-pointer'>Women's clothing</li>
                </ul>
                <div className='flex gap-8 mt-6'>
                    <BsWhatsapp/>
                    <BsInstagram/>
                    <BsTwitter/>
                </div>
            </div>
        </div>
        <p className='text-center text-xs'>Copyright &copy; 2023 By <span className='text-amber-300'><a href="https://adeofe.netlify.app">Adenike</a></span></p>
    </div>
    </>
  )
}

export default Footer