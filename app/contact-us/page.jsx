"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get('message') || "";
  const service = searchParams.get('service') || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: initialMessage,
  });

  useEffect(() => {
    if (service) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in your ${service} services...`,
      }));
    }
  }, [service]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.history.replaceState({}, document.title, window.location.pathname);
    alert("Form Submitted!\nWe'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen font-outfit bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-8 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch to discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  📍
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                  <a
                    href="https://www.google.com/maps/search/?q=D+136,+Abul+Fazal+Enclave-I,+New+Delhi,+Delhi+110025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 underline hover:text-blue-600 transition-colors"
                  >
                    D 136, Abul Fazal Enclave-I,<br />
                    New Delhi, Delhi 110025
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
                  <a
                    href="tel:+919718013213"
                    className="text-gray-600 underline hover:text-blue-600 transition-colors"
                  >
                    +91 9718013213
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  📧
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                  <a
                    href="mailto:info@mediapitch.in"
                    className="text-gray-600 underline hover:text-blue-600 transition-colors"
                  >
                    info@mediapitch.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
};

export default ContactUs;
