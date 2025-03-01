"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ContactUs = () => {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get('message') || "";
  const service = searchParams.get('service') || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: initialMessage,
  });

  const serviceTemplates = {
    designing: "I'm interested in your graphic design services...",
    editing: "I need help with photo editing services...",
    writing: "I'm looking for professional content writing services...",
    strategy: "I want to discuss digital marketing strategy...",
  };

  useEffect(() => {
    if (service && serviceTemplates[service]) {
      setFormData(prev => ({
        ...prev,
        message: serviceTemplates[service]
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
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                  <a
                    href="https://www.google.com/maps/search/?q=D+136,+Abul+Fazal+Enclave-I,+New+Delhi,+Delhi+110025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 underline underline-offset-1  hover:text-blue-600 transition-colors"
                  >
                    D 136, Abul Fazal Enclave-I,<br/>
                    New Delhi, Delhi 110025
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
                  <a
                    href="tel:+919718013213"
                    className="text-gray-600 underline underline-offset-1  hover:text-blue-600 transition-colors"
                  >
                    +91 9718013213
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                  <a
                    href="mailto:info@mediapitch.in"
                    className="text-gray-600 underline underline-offset-1  hover:text-blue-600 transition-colors"
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

export default ContactUs;