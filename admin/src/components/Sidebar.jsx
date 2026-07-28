import React, { useState } from "react";
import { FaPlus, FaList, FaShoppingCart, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const [active, setActive] = useState("");

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed  left-0 z-50 w-60 h-screen bg-gray-900 text-white shadow-lg
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Admin Menu</h2>

          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col gap-2 px-3">
          <NavLink
            to="/add"
            onClick={() => {
              setActive("add");
              setOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              active === "add"
                ? "bg-amber-200 text-black"
                : "hover:bg-gray-400 hover:text-black"
            }`}
          >
            <FaPlus />
            <span>Add Product</span>
          </NavLink>

          <NavLink
            to="/list"
            onClick={() => {
              setActive("list");
              setOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              active === "list"
                ? "bg-amber-200 text-black"
                : "hover:bg-gray-400 hover:text-black"
            }`}
          >
            <FaList />
            <span>List Items</span>
          </NavLink>

          <NavLink
            to="/orders"
            onClick={() => {
              setActive("order");
              setOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              active === "order"
                ? "bg-amber-200 text-black"
                : "hover:bg-gray-400 hover:text-black"
            }`}
          >
            <FaShoppingCart />
            <span>Orders</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;