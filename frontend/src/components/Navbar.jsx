import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  console.log("Cart:", cartItems);

  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-4 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-xl px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full  from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                XY
              </div>

              <h1 className="text-2xl font-extrabold from-indigo-600 via-purple-600 to-pink-600 bg-clip-text ">
                XY-STORE
              </h1>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative pb-1 transition ${
                        isActive ? "text-indigo-600" : "hover:text-indigo-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Cart */}
              <NavLink
                to="/cart"
                className="relative p-2 rounded-full hover:bg-indigo-100 transition"
              >
                <FiShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </NavLink>

              {token ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
                  >
                    <FiUser />
                    Login
                  </NavLink>

                  {/* <NavLink
                    to="/register"
                    className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition"
                  >
                    Register
                  </NavLink> */}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold text-indigo-600">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <FiX size={28} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "hover:text-indigo-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <hr />


   <NavLink
  to="/cart"
  className="flex items-center justify-between"
  onClick={() => setOpen(false)}
>
  <div className="flex items-center gap-3">
    <FiShoppingCart  size={22} />
    <span>Cart</span>
  </div>

  {totalItems > 0 && (
    <span className="bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
      {totalItems}
    </span>
  )}
</NavLink>

          <NavLink
            to="/login"
            className="flex items-center justify-center gap-2  from-indigo-600 to-purple-600 text-white py-3 rounded-full"
            onClick={() => setOpen(false)}
          >
            <FiUser />
            Sign Up / Login
          </NavLink>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
