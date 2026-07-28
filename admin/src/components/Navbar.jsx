

import React from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setOpen }) => {

  const navigate = useNavigate()
   
       const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setOpen(true)}
            className="text-2xl md:hidden"
          >
            <FaBars />
          </button>

          {/* Logo */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 ">
              X<span className="text-blue-600">Y</span>-STORE
            </h2>
            <span className="text-sm text-gray-500">
              Admin Dashboard
            </span>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={logout} className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;