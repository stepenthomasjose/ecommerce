import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from "./pages/AddProduct"
import ProductList from './pages/ProductList'

export const App = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <Navbar open={open} setOpen={setOpen}/>
      <hr />
    <div>  
      <Sidebar open={open} setOpen={setOpen}/>
    
    <div className=' w-[60%] mx-auto'>
      <Routes>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/list' element={<ProductList/>}/>
      </Routes>
    </div>
    
    </div>

    
    </div>
  )
}

export default App
