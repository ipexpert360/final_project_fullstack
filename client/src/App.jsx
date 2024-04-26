import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HomePage from './pages/Home'
import AboutUs from './pages/AboutUs'
import Saloon from './pages/Saloon'
import Wagon from './pages/Wagon'
import Jeep from './pages/Jeep'
import ProductDetail from './pages/ProductDetail'
import Shoppingcart from './pages/Shoppingcart'
import ContactUs from './pages/ContactUs' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saloon" element={<Saloon />} />
      <Route path="/wagon" element={<Wagon />} />
      <Route path="/jeep" element={<Jeep />} />
      <Route path="/shoppingcart" element={<Shoppingcart />} />
      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
