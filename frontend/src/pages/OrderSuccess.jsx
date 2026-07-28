import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">

        {/* Success Icon */}
        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-3">
          Order Placed Successfully!
        </h1>

        {/* Message */}
        <p className="text-gray-600 leading-7">
          Thank you for shopping with{" "}
          <span className="font-semibold text-black">
            XY-STORE
          </span>.
        </p>

        <p className="text-gray-500 mt-2">
          Your order has been received and is being processed.
        </p>

        {/* Info Box */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-8">
          <p className="text-green-700 font-medium">
            ✔ You will receive a confirmation soon.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
          >
            View Orders
          </Link>

        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;