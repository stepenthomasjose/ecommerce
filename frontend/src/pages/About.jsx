import React from "react";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaTags,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-4">
            About XY-STORE
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Welcome to XY-STORE, your one-stop destination for stylish,
            high-quality fashion. We believe shopping should be simple,
            enjoyable, and affordable for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
            alt="About XY Store"
            className="rounded-2xl shadow-xl w-full size-96 object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              XY-STORE was created with a simple goal—to make fashion
              accessible, affordable, and enjoyable. From everyday wear to
              premium collections, we carefully select products that combine
              comfort, quality, and modern style.
            </p>

            <p className="text-gray-600 leading-8">
              We are committed to delivering an exceptional shopping
              experience through secure payments, fast delivery, and
              outstanding customer support. Every order is handled with care
              because your satisfaction is our highest priority.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-xl shadow p-8 text-center hover:shadow-lg transition">
              <FaShippingFast className="text-5xl text-indigo-600 mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable shipping to ensure your orders reach you
                on time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8 text-center hover:shadow-lg transition">
              <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Shop with confidence using secure and trusted payment
                methods.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8 text-center hover:shadow-lg transition">
              <FaTags className="text-5xl text-orange-500 mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Premium quality products at competitive prices with great
                value.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8 text-center hover:shadow-lg transition">
              <FaHeadset className="text-5xl text-red-500 mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Friendly customer support whenever you need assistance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaUsers className="text-5xl mx-auto text-indigo-600 mb-4" />
              <h2 className="text-4xl font-bold">10K+</h2>
              <p className="text-gray-600 mt-2">
                Happy Customers
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaBoxOpen className="text-5xl mx-auto text-green-600 mb-4" />
              <h2 className="text-4xl font-bold">500+</h2>
              <p className="text-gray-600 mt-2">
                Products
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaShippingFast className="text-5xl mx-auto text-orange-500 mb-4" />
              <h2 className="text-4xl font-bold">5K+</h2>
              <p className="text-gray-600 mt-2">
                Orders Delivered
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaHeadset className="text-5xl mx-auto text-red-500 mb-4" />
              <h2 className="text-4xl font-bold">24/7</h2>
              <p className="text-gray-600 mt-2">
                Customer Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            Our mission is to provide stylish, high-quality fashion at
            affordable prices while delivering an exceptional online shopping
            experience. We aim to build lasting relationships with our
            customers through trust, quality, and outstanding service.
          </p>

        </div>
      </section>

    </div>
  );
};

export default About;