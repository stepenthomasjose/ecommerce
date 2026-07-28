import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about
            products, orders, or anything else, our team is ready to help.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div>

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-5 bg-white shadow rounded-xl p-6">
                <FaMapMarkerAlt className="text-red-500 text-3xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    XY-STORE
                    <br />
                    Calicut, Kerala
                    <br />
                    India - 673001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white shadow rounded-xl p-6">
                <FaPhoneAlt className="text-green-600 text-3xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white shadow rounded-xl p-6">
                <FaEnvelope className="text-blue-600 text-3xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    support@xystore.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white shadow rounded-xl p-6">
                <FaClock className="text-orange-500 text-3xl mt-1" />

                <div>
                  <h3 className="font-semibold text-xl">
                    Business Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-black outline-none"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="pb-20 px-5">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">

          <iframe
            title="Location"
            src="https://www.google.com/maps?q=Calicut,Kerala&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            className="border-0"
          ></iframe>

        </div>
      </section>

    </div>
  );
};

export default Contact;