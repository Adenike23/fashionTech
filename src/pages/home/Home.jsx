import React, { useEffect, useState } from 'react'
import image from '../../assets/images/television.jpg'
import image2 from '../../assets/images/mensClothing.jpg'
import image3 from '../../assets/images/jewelery.jpg'
import image5 from '../../assets/images/man.webp'
import image6 from '../../assets/images/womensClothing.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Home = () => {
    const [electronics, setElectronics] = useState([])
    const [mens_clothing, SetMens_clothing] = useState([])
    const [womens_clothing, SetWomens_clothing] = useState([])
    const [loading, setLoading] = useState(true)
    const [jewelry, setJewelry] = useState([])
    const navigate = useNavigate()
    const getElectronics = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await response.json()
        setElectronics(data[4])
        if(response) setLoading(false)
    }
    useEffect(() => {
        getElectronics()
    }, [])
   
    const getMenCloth = async() => {
        const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        const data = await response.json()
        SetMens_clothing(data[3])
    }
    useEffect(() => {
        getMenCloth()
    }, [])
    
    const getWomenCloth = async() => {
        const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        const data = await response.json()
        SetWomens_clothing(data[0])
    }
    useEffect(() => {
        getWomenCloth()
    }, [])
   
    const getJewelry = async() => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const data = await response.json()
        setJewelry(data[0])
    }
    // console.log(electronics);
    useEffect(() => {
        getJewelry()
    }, [])

  return (
    <div className='text bg-white pt-[5rem]'>
        {loading && <span className="loading loading-spinner loading-lg absolute top-[20%] left-[50%] -translate-x-[50%]"></span>}
        <div className="flex flex-col-reverse gap-9 justify-around items-center py-10 px-[1rem] md:px-[5rem] lg:flex-row">
            <div className='w-[80%] lg:w-[40%] text-black text-center md:text-left'>
                <p className='text-sm font-bold mt-10 md:mt-0'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-2xl md:text-3xl py-5'>{electronics.title}</h1>
                <h3 className='pb-5'>{electronics.description}</h3>
                <button className="px-5 py-3 bg-purple-500 rounded text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>SEE PRODUCT</button>
            </div>
            <img src={electronics.image} alt="" className='md:w-[60%]'/>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-center bg-white text-black">
                <h3 className="font-bold md:text-lg">{electronics.title}</h3>
                <p className='uppercase font-bold text-xs mt-2'>{electronics.category}</p>
                <img src={electronics.image} alt="" className='mt-4 w-[70%] mx-auto'/>
                <p className="py-4">{electronics.description}</p>
                <p className='mt-5 font-bold text-2xl'>${electronics.price}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
            
        
        <div className='py-10 grid grid-cols-2 lg:grid-cols-4 gap-[1.5rem] mt-10 mx-6'>
            <div className='max-w-md shadow-md pb-5 rounded h-[90%]'>
                <img src={image} alt="" className='w-[60%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Electronics</p>
                    <div onClick={() => navigate('/electronics')} className='cursor-pointer'>
                        <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                        <BsArrowRight className='inline'/>
                    </div>
               </div>
            </div>
            {loading && <span className="loading loading-spinner loading-lg absolute top-[20%] left-[50%] -translate-x-[50%]"></span>}
            <div className='shadow-md max-w-md pb-5 rounded h-[90%]'>
                <img src={image3} alt="" className='w-[60%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Jewelery</p>
                    <div className="cursor-pointer" onClick={() => navigate('/jewelery')}>
                        <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                        <BsArrowRight className='inline'/>
                    </div>
               </div>
            </div>
            {loading && <span className="loading loading-spinner loading-lg absolute top-[20%] left-[50%] -translate-x-[50%]"></span>}
            <div className='shadow-md max-w-md pb-12 rounded h-[90%]'>
                <img src={image2} alt="" className='w-[26%] mx-auto relative -top-7 rounded-sm'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Men's Clothing</p>
                    <div className="cursor-pointer" onClick={() => navigate('/mensClothing')}>
                        <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                        <BsArrowRight className='inline'/>
                    </div>
               </div>
            </div>
            <div className='shadow-md max-w-md pb-5 rounded h-[90%]'>
                <img src={image6} alt="" className='w-[22%] mx-auto relative -top-7'/>
               <div className='text-center text-black'>
                    <p className='font-bold text-lg'>Women's Clothing</p>
                    <div className="cursor-pointer" onClick={() => navigate('/womensClothing')}>
                        <h1 className='inline-block pe-3 text-xs'>SHOP</h1>
                        <BsArrowRight className='inline'/>
                    </div>
               </div>
            </div>
        </div>
        


        <div>
        <div data-aos="zoom-in-left" data-aos-duration="2000" className="flex flex-col-reverse justify-around items-center py-10 px-0 md:px-[5rem] mx-[2rem] lg:flex-row">
            <div className='w-[100%] lg:w-[60%] px-10 py-5 md:py-20 bg-purple-800 text-white rounded'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-xl md:text-3xl py-5 rounded'>{jewelry.title}</h1>
                <h3 className='pb-5'>{jewelry.description}</h3>
                <button className="px-5 py-3 bg-purple-500 rounded text-white" onClick={()=>document.getElementById('my_modal_2').showModal()}>SEE PRODUCT</button>
            </div>
            <img src={jewelry.image} alt="" className='rounded-full w-[50%] lg:w-[25%]'/>
        </div>

        <dialog id="my_modal_2" className="modal">
            <div className="modal-box text-center bg-white text-black">
                <h3 className="font-bold text-lg">{jewelry.title}</h3>
                <p className='uppercase font-bold text-xs mt-2'>{jewelry.category}</p>
                <img src={jewelry.image} alt="" className='mt-4 w-[70%] mx-auto'/>
                <p className="py-4">{jewelry.description}</p>
                <p className='mt-5 font-bold text-2xl'>${jewelry.price}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>

        <div data-aos="zoom-in-right" data-aos-duration="2500" className="flex flex-col justify-around items-center py-10 px-10 md:px-[5rem] lg:flex-row">
        <img src={mens_clothing.image} alt="" className='w-[50%] rounded-lg lg:w-[30%]'/>
            <div className='w-[100%]  lg:w-[55%] bg-gray-200 px-10 py-8 md:py-20 rounded'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-2xl md:text-3xl py-5 text-black'>{mens_clothing.title}</h1>
                <button className="px-5 py-3 bg-purple-500 rounded text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>SEE PRODUCT</button>
            </div>
        </div>

        <dialog id="my_modal_3" className="modal">
            <div className="modal-box text-center bg-white text-black">
                <h3 className="font-bold text-lg">{mens_clothing.title}</h3>
                <p className='uppercase font-bold text-xs mt-2'>{mens_clothing.category}</p>
                <img src={mens_clothing.image} alt="" className='mt-4 w-[70%] mx-auto'/>
                <p className="py-4">{mens_clothing.description}</p>
                <p className='mt-5 font-bold text-2xl'>${mens_clothing.price}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>

        <div data-aos="zoom-in-left" data-aos-duration="3000" className="flex flex-col-reverse justify-around items-center py-10 px-0 md:px-[5rem] mx-[2rem] rounded lg:flex-row">
            <div className='w-[100%] lg:w-[55%] px-10 py-8 md:py-20 bg-purple-800 text-white rounded'>
                <p className='text-sm'>NEW PRODUCT</p>
                <h1 className='font-extrabold text-xl md:text-3xl py-5'>{womens_clothing.title}</h1>
                <button className="px-5 py-3 bg-purple-500 rounded text-white" onClick={()=>document.getElementById('my_modal_4').showModal()}>SEE PRODUCT</button>
            </div>
            <img src={womens_clothing.image} alt="" className='w-[50%] rounded-full lg:w-[30%]'/>
        </div>
        </div>

        <dialog id="my_modal_4" className="modal">
            <div className="modal-box text-center bg-white text-black">
                <h3 className="font-bold text-lg">{womens_clothing.title}</h3>
                <p className='uppercase font-bold text-xs mt-2'>{womens_clothing.category}</p>
                <img src={womens_clothing.image} alt="" className='mt-4 w-[70%] mx-auto'/>
                <p className="py-4">{womens_clothing.description}</p>
                <p className='mt-5 font-bold text-2xl'>${womens_clothing.price}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>

        <div className="flex flex-col justify-between items-center py-10 gap-3 px-[2rem] lg:px-[5rem] md:flex-row">
            <div className='w-[100%] md:w-[50%] text-black text-center md:text-left'>
            <h1 className='font-bold text-3xl py-5'>BRINGING YOU THE <span className='text-purple-500'>BEST</span> FASHION AND ELECTRONICS GEAR</h1>
            <h2>Discover a retail haven in Illinois, where sophistication and modernity converge. Our store presents an exclusive fusion of jewelry, men's and women's fashion, and cutting-edge electronics. Our jewelry collection sparkles with elegance, offering timeless pieces from necklaces to watches, catering to every style and occasion. Men find their style sanctuary among our curated selection, featuring refined suits, casual wear, and accessories. For the fashion-forward woman, our diverse array includes chic dresses, trendy tops, and comfortable yet stylish loungewear.</h2>
            </div>
            <img src={image5} alt="" className='w-[80%] mt-5 md:w-[45%] lg:w-[35%]'/>
        </div>
    </div>
  )
}

export default Home