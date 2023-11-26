import React, { useState } from 'react'
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import image5 from '../../assets/images/man.webp'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    const navigate = useNavigate()
  return (
    <>
    <div className='text bg-purple-800 px-2 md:px-10 pb-4 pt-5 md:pt-10 text-white'>
        <div className="flex flex-col justify-around items-center lg:flex-row">
            <div className='mb-5 w-[80%] lg:w-[50%]'>
                <p className='logo text-2xl text-amber-300'>fashiontech</p>
                <h1 className='md:my-5'>Nestled in Illinois, our store stands as a testament to quality, style, and customer satisfaction. Our mission revolves around delivering an unparalleled shopping experience where the harmonious blend of fashion and technology meets the diverse demands of our clientele. Explore our sanctuary in Illinois, where fashion meets innovation, promising an immersive and unparalleled shopping experience for every visitor.</h1>
            </div>
            <div>
                <ul className='hidden sm:flex gap-3 md:gap-5'>
                    <li onClick={() => navigate('/')} className='hover:text-amber-300 cursor-pointer'>Home</li>
                    <li onClick={() => navigate('/electronics')} className='hover:text-amber-300 cursor-pointer'>Electronics</li>
                    <li onClick={() => navigate('/jewelery')} className='hover:text-amber-300 cursor-pointer'>Jewelry</li>
                    <li onClick={() => navigate('/mensClothing')} className='hover:text-amber-300 cursor-pointer'>Men's clothing</li>
                    <li onClick={() => navigate('/womensClothing')} className='hover:text-amber-300 cursor-pointer'>Women's clothing</li>
                </ul>
                <div className='flex gap-8 md:mt-6 justify-center mb-4'>
                    <BsWhatsapp/>
                    <BsInstagram/>
                    <BsTwitter/>
                </div>
            </div>
        </div>
        <p className='text-center text-xs'>&copy; Copyright <span>{year}</span> By <span className='text-amber-300'><a href="https://adeofe.netlify.app" className='underline'>Adenike</a></span></p>
    </div>
    </>
  )
}

export default Footer