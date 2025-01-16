import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Form Submitted!");
  };

  return (
    <div className="min-h-screen font-outfit flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">

      <div className="w-full max-w-lg bg-white p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

        <div className="space-y-6">
{/* Address */}
<div>
  <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
  <p className="text-lg text-gray-700">
    <a
      href="https://www.google.com/maps/search/?q=D+136,+Abul+Fazal+Enclave-I,+New+Delhi,+Delhi+110025"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      D 136, Abul Fazal Enclave-I, New Delhi, Delhi 110025
    </a>
  </p>
</div>

{/* Phone */}
<div>
  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
  <p className="text-lg text-gray-700">
    <a
      href="tel:+919718013213"
      className="text-blue-500 hover:underline"
    >
      +91 9718013213
    </a>
  </p>
</div>

{/* Email */}
<div>
  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
  <p className="text-lg text-gray-700">
    <a
      href="mailto:info@mediapitch.in"
      className="text-blue-500 hover:underline"
    >
      info@mediapitch.in
    </a>
  </p>
</div>



        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-lg bg-white p-8 rounded-lg ">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send Us a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
