import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" from-gray-100 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* Left */}
          <div>
            <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              New Collection 2026
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Welcome to{" "}
              <span className="text-red-500">
                XY-STORE
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              Discover premium fashion, trending collections, and
              unbeatable prices. Shop the latest arrivals and best
              sellers—all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/collections"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-red-500 transition duration-300"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="border-2 border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
              >
                Learn More
              </Link>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-500">Products</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">24/7</h2>
                <p className="text-gray-500">Support</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900"
              alt="Fashion Collection"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;