import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 mt-20">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full  from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
              XY
            </div>

            <h1 className="text-3xl font-extrabold  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              XY STORE
            </h1>
          </div>

          <p className="text-gray-400 leading-7">
            Discover premium fashion, quality products, and unbeatable
            prices. Shop confidently with fast delivery and secure
            payments.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gray-600 flex items-center justify-center transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-6">
            Company
          </h2>

          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/collections"
                className="hover:text-indigo-400 transition"
              >
                Collections
              </Link>
            </li>

            <li>
              <Link
                to="/bestseller"
                className="hover:text-indigo-400 transition"
              >
                Best Seller
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-indigo-400 transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-6">
            Customer Care
          </h2>

          <ul className="space-y-4">
            <li className="hover:text-indigo-400 cursor-pointer">
              My Account
            </li>

            <li className="hover:text-indigo-400 cursor-pointer">
              Orders
            </li>

            <li className="hover:text-indigo-400 cursor-pointer">
              Wishlist
            </li>

            <li className="hover:text-indigo-400 cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-indigo-400 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-6">
            Newsletter
          </h2>

          <p className="text-gray-400 mb-5">
            Subscribe to receive updates, offers, and new arrivals.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 border border-slate-700 rounded-full px-5 py-3 outline-none focus:border-indigo-500"
            />

            <button className=" from-indigo-600 to-purple-600 py-3 rounded-full text-white font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} XY STORE. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="hover:text-indigo-400 transition"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-indigo-400 transition"
            >
              Terms
            </Link>

            <Link
              to="/faq"
              className="hover:text-indigo-400 transition"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;