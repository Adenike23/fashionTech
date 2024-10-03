import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Electronics from './pages/electronics/Electronics'
import Jewelery from './pages/jewelery/Jewelery'
import MensClothing from './pages/mensClothing/MensClothing'
import WomensClothing from './pages/womensClothing/WomensClothing'
import Checkout from './pages/checkout/Checkout'
import { CartContextProvider } from './context/CartContext'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <CartContextProvider>
        <Navbar/>
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home/>} />
            <Route path='/electronics' element={<Electronics/>}/>
            <Route path='/jewelery' element={<Jewelery/>}/>
            <Route path='/mensClothing' element={<MensClothing/>}/>
            <Route path='/womensClothing' element={<WomensClothing/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </AnimatePresence>
        <Footer/>
    </CartContextProvider>
  )
}

export default App
