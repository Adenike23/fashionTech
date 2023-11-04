import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-around py-5 bg-purple-800 border-b-2 border-white text-white'>
       <p className='logo text-2xl text-amber-300'>fashionTech</p> 
       <ul className='flex gap-10'>
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
       <BsCart3 className='text-2xl cursor-pointer hover:text-amber-300' onClick={() => navigate('/checkout')}/>
    </div>
  )
}

export default Navbar