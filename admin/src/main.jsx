import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from './components/PublicRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
   <Routes>
    <Route path='/login' element={
      
    <PublicRoute>
         <Login/>
    </PublicRoute>
      
      }/>
    <Route path='/*' element={
      <ProtectedRoute>
         <App />
    </ProtectedRoute>
    
    }
    />
   </Routes>

   <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </BrowserRouter>
  

  </StrictMode>,
)
