import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Electronics from './pages/electronics/Electronics'
import Jewelery from './pages/jewelery/Jewelery'
import MensClothing from './pages/mensClothing/MensClothing'
import WomensClothing from './pages/womensClothing/WomensClothing'
import Checkout from './pages/checkout/Checkout'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/jewelery' element={<Jewelery/>}/>
          <Route path='/mensClothing' element={<MensClothing/>}/>
          <Route path='/womensClothing' element={<WomensClothing/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </CartContextProvider>
  )
}

export default App
