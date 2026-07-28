import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Collections from './pages/Collections'
import ProductInfo from './pages/ProductInfo'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from "react-toastify";
import PublicRoute from "./components/PublicRoute"
import ProtectedRoute from "./components/ProtectedRoute"
import OrderSuccess from './pages/OrderSuccess'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <Navbar/>
      <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/product/:id' element={<ProductInfo/>}/>
        <Route path='/cart' element={
         <ProtectedRoute>
           <Cart/>
         </ProtectedRoute>
          }/>
        <Route path='/register' element={
         <PublicRoute> <Register/></PublicRoute>
          }/>

        <Route  path='/login' element={

         <PublicRoute>
        <Login/>
         </PublicRoute>
          
          }/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="/order-success" element={<OrderSuccess/>}/>
       </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App