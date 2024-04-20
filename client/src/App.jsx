import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup'
import HomePage from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
