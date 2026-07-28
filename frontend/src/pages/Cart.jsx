import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-semibold">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* Cart Items */}

        <div className="flex-1">

          {cartItems.map((item) => (

            <div
              key={`${item._id}-${item.size}`}
              className="flex items-center justify-between border-b py-6"
            >

              <div className="flex items-center gap-5">

                <img
                  src={`http://localhost:5001/uploads/images/${item.image[0]}`}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded"
                />

                <div>

                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Size : {item.size}
                  </p>

                  <p className="text-red-500 font-bold mt-2">
                    ₹{item.price}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item))
                  }
                  className="w-8 h-8 border rounded"
                >
                  -
                </button>

                <span className="text-lg font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item))
                  }
                  className="w-8 h-8 border rounded"
                >
                  +
                </button>

              </div>

              <div>

                <p className="font-bold">
                  ₹{item.price * item.quantity}
                </p>

              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item))
                }
                className="text-red-500 font-bold text-xl"
              >
                ✕
              </button>

            </div>

          ))}

        </div>

        {/* Cart Summary */}

        <div className="lg:w-80 border rounded-lg p-6 h-fit shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Cart Summary
          </h2>

          <div className="flex justify-between mb-3">

            <span>Total Items</span>

            <span>{cartItems.length}</span>

          </div>

          <div className="flex justify-between mb-3">

            <span>Subtotal</span>

            <span>₹{totalAmount}</span>

          </div>

          <div className="flex justify-between mb-6">

            <span>Shipping</span>

            <span>Free</span>

          </div>

          <hr />

          <div className="flex justify-between mt-5 text-xl font-bold">

            <span>Total</span>

            <span>₹{totalAmount}</span>

          </div>

          <NavLink to="/checkout">
            <button className="w-full mt-8 bg-black text-white py-3 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </NavLink>

        </div>

      </div>

    </div>
  );
};

export default Cart;