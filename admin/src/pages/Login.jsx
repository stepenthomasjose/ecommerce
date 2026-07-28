import React, { useState } from "react";
import {adminLogin} from "../services/axiosInstance"
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const Login = () => {
    const[email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()


    const onSubmitHandler = async(e)=>{
       try{
         e.preventDefault()
        const {data} = await adminLogin({
            email,
            password,
        })

         if (data.success) {
        // Save token
        localStorage.setItem("token", data.token);

        // Navigate to admin panel
        navigate("/");
      }else{
        toast.error(data.message)
      }

       }catch(error){
       console.log(error);
       toast.error(error.response?.data?.message || error.message);
       
       }
    }
  return (
    <div className="min-h-screen  from-blue-100 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            X<span className="text-blue-600">Y</span>-STORE
          </h1>
          <p className="text-gray-500 mt-2">
            Admin Login
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={onSubmitHandler}>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input 
              type="email" onChange={(e)=>setEmail(e.target.value)}
              placeholder="admin@example.com" value={email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password" onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={password}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;