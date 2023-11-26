import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Navbar = ({uniqueArray}) => {
  console.log(uniqueArray);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const cartItems = JSON.parse(localStorage.getItem('cart')) || []
  
  return (
    <div className='nav flex flex-col justify-around py-5 fixed top-0 w-[100%] z-10 bg-purple-800 text-white pb-1 md:pb-4 md:flex-row'>
       <div className="flex justify-between mx-5">
          <p className='logo text-2xl text-amber-300'>fashionTech</p> 
          {open ? <span  onClick={() => setOpen(!open)} className='menu text-3xl text-amber-300 block md:hidden'><i class="ri-close-line"></i></span>
          : <span onClick={() => setOpen(!open)} className='text-3xl text-amber-300 block md:hidden'><i class="ri-menu-3-line"></i></span>}
       </div>
      
       {open ? 
       <div className='gap-[5rem] md:hidden'><ul className='text w-full flex flex-col items-center space-y-7 gap-3 -z-10 md:gap-5 md:flex-row md:z-auto md:space-y-0 md:static md:bg-purple-800 text-white md:min-w-[65%] md:opacity-100 lg:gap-10'>
        {location.pathname === '/' ? <li onClick={() => navigate('/')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Home</li>
          : <li onClick={() => navigate('/')} className='hover:text-amber-300 cursor-pointer'>Home</li>
          }
        {location.pathname === '/electronics' ? <li onClick={() => navigate('/electronics')} className='hover:text-amber-300 cursor-pointer text-amber-400'>Electronics</li>
          : <li onClick={() => navigate('/electronics')} className='hover:text-amber-300 cursor-pointer'>Electronics</li>
        }
        {
          location.pathname === '/jewelery' ? <li onClick={() => navigate('/jewelery')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Jewelry</li>
          : <li onClick={() => navigate('/jewelery')} className='hover:text-amber-300 cursor-pointer'>Jewelry</li>
        }
        {
          location.pathname === '/mensClothing' ? <li onClick={() => navigate('/mensClothing')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Men's clothing</li>
          : <li onClick={() => navigate('/mensClothing')} className='hover:text-amber-300 cursor-pointer'>Men's clothing</li>
        }
        {
          location.pathname === '/womensClothing' ? <li onClick={() => navigate('/womensClothing')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Women's clothing</li>
          : <li onClick={() => navigate('/womensClothing')} className='hover:text-amber-300 cursor-pointer'>Women's clothing</li>
        }
       </ul>
       <div className='relative'>
        {<BsCart3 className='mt-5 w-[30%] mx-auto text-2xl cursor-pointer mb-5 hover:text-amber-300 md:text-white md:mt-0 md:w-full md:mb-0' onClick={() => navigate('/checkout')}/>}
        {cartItems.length > 0 && <p className='absolute -translate-x-[50%] left-[53%] -top-[35%] w-[3%] md:-top-3 md:left-4 flex md:h-[70%] md:w-[100%] items-center justify-center rounded-full -z-10 text-sm bg-purple-900'>{cartItems.length}</p>}
       </div> 
       </div> : ''}

       <div className='hidden md:flex md:gap-[3.5rem] lg:gap-[10rem]'><ul className='flex md:gap-5 md:flex-row md:z-auto md:space-y-0 md:static md:bg-purple-800 text-white md:min-w-[65%] md:opacity-100 lg:gap-10'>
        {location.pathname === '/' ? <li onClick={() => navigate('/')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Home</li>
          : <li onClick={() => navigate('/')} className='hover:text-amber-300 cursor-pointer'>Home</li>
          }
        {location.pathname === '/electronics' ? <li onClick={() => navigate('/electronics')} className='hover:text-amber-300 cursor-pointer text-amber-400'>Electronics</li>
          : <li onClick={() => navigate('/electronics')} className='hover:text-amber-300 cursor-pointer'>Electronics</li>
        }
        {
          location.pathname === '/jewelery' ? <li onClick={() => navigate('/jewelery')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Jewelry</li>
          : <li onClick={() => navigate('/jewelery')} className='hover:text-amber-300 cursor-pointer'>Jewelry</li>
        }
        {
          location.pathname === '/mensClothing' ? <li onClick={() => navigate('/mensClothing')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Men's clothing</li>
          : <li onClick={() => navigate('/mensClothing')} className='hover:text-amber-300 cursor-pointer'>Men's clothing</li>
        }
        {
          location.pathname === '/womensClothing' ? <li onClick={() => navigate('/womensClothing')} className='hover:text-amber-300 text-amber-400 cursor-pointer'>Women's clothing</li>
          : <li onClick={() => navigate('/womensClothing')} className='hover:text-amber-300 cursor-pointer'>Women's clothing</li>
        }
       </ul>
       <div className='relative'>
        {<BsCart3 className='text-2xl cursor-pointer hover:text-amber-300 md:text-white md:mt-0 md:w-full md:mb-0' onClick={() => navigate('/checkout')}/>}
        {cartItems && <p className='absolute -translate-x-[50%] left-[53%] -top-[35%] w-[3%] md:-top-3 md:left-7 flex md:h-[70%] md:w-[100%] items-center justify-center rounded-full -z-10 text-sm bg-purple-900'>{cartItems.length}</p>}
       </div> 
       </div>
       
    </div>
  )
}

export default Navbar