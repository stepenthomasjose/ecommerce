import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart} from "../features/cart/cartSlice"

const ProductCard = ({product, showCart=false}) => {
  const dispatch = useDispatch()

const handleAddToCart = () => {
  dispatch(
    addToCart({
      ...product,
      size: product.sizes?.[0] || "Default",
    })
  );
  console.log("Added");
};
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="relative">
        <Link to={`/product/${product._id}`}>
          <img
            src={`http://localhost:5001/uploads/images/${product.image[0]}`}
            alt={product.name}
            className="w-full h-64 object-cover hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
            ⭐ Bestseller
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm">
          {product.category}
        </p>

        <p className="text-xl font-bold text-red-500 mt-2">
          ₹{product.price}
        </p>

         {/* Add To Cart - Only on Collection page */}
        {showCart && (
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>
        )}



        <Link
          to={`/product/${product._id}`}
          className="block w-full mt-3 text-center border border-black py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;