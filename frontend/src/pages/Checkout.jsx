import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { placeOrder } from "../services/axiosInstances";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);





  const validateForm = () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    street,
    city,
    state,
    zipcode,
    country,
  } = address;

  if (
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !street.trim() ||
    !city.trim() ||
    !state.trim() ||
    !zipcode.trim() ||
    !country.trim()
  ) {
    toast.error("Please fill in all delivery information.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return false;
  }

  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {
    toast.error("Please enter a valid 10-digit phone number.");
    return false;
  }

  return true;
};

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const handleChange = (e) => {
    setAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 50 : 0;

  const totalAmount = subtotal + deliveryFee;

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      return toast.error("Your cart is empty");
    }
     if (!validateForm()) {
    return;
     }

    try {
      const orderData = {
        items: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
        })),
        address,
        amount: totalAmount,
        paymentMethod: "COD",
      };

      const { data } = await placeOrder(orderData);

      if (data.success) {
        toast.success("Order Placed Successfully");

        dispatch(clearCart());

        navigate("/order-success");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Order Failed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT */}

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Delivery Information
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border p-3 rounded col-span-2"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="border p-3 rounded col-span-2"
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              onChange={handleChange}
              className="border p-3 rounded col-span-2"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              className="border p-3 rounded"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-gray-50 rounded-xl p-6 shadow">

          <h2 className="text-2xl font-bold mb-5">
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <div
              key={`${item._id}-${item.size}`}
              className="flex justify-between border-b py-3"
            >
              <div>
                <p className="font-medium">{item.name}</p>

                <p className="text-sm text-gray-500">
                  {item.size} × {item.quantity}
                </p>
              </div>

              <p>
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <div className="mt-6 space-y-3">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Payment Method
            </h3>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked
                readOnly
              />

              Cash On Delivery
            </label>

          </div>

          
              <button
                onClick={handlePlaceOrder}
                className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Place Order
              </button>
          

        </div>

      </div>

    </div>
  );
};

export default Checkout;