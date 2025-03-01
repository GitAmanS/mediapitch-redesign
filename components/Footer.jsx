import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="flex w-full justify-center items-center flex-col min-h-[85vh] px-6 md:px-20 font-outfit relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('wavebackground.png')",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full py-8 gap-6 md:gap-20">
        <div className="flex flex-col w-full text-sm font-medium text-[#022a4e]">
          <div className="py-4">
            <img src="logo.png" alt="logo" className="w-1/2 h-auto" />
          </div>
          <div className="flex flex-col space-y-3">
            <p>App Development</p>
            <p>Web Development</p>
            <p>Social Media</p>
            <p>Digital Marketing</p>
            <p>Graphic Design</p>
          </div>
        </div>

        <div className="flex flex-col w-full text-sm font-medium text-[#022a4e]">
          <h1 className="text-xl md:text-2xl font-semibold py-4">Resources</h1>
          <div className="flex flex-col space-y-3">
            <p>App Development</p>
            <p>Web Development</p>
            <p>Social Media</p>
            <p>Digital Marketing</p>
            <p>Graphic Design</p>
          </div>
        </div>

        <div className="flex flex-col w-full text-sm font-medium text-[#022a4e]">
          <h1 className="text-xl md:text-2xl font-semibold py-4">Services</h1>
          <div className="flex flex-col space-y-3">
            <p>Web Development</p>
            <p>Social Media</p>
            <p>Digital Marketing</p>
            <p>Graphic Design</p>
          </div>
        </div>

        <div className="flex flex-col w-full text-sm font-medium text-[#022a4e]">
          <h1 className="text-xl md:text-2xl font-semibold py-4">Find Us on Social</h1>
          <div className="flex space-x-3">
            <div className="bg-[#022A4E] p-2 rounded-full">
              <FaFacebookF className="text-white text-lg" />
            </div>
            <div className="bg-[#022A4E] p-2 rounded-full">
              <FaXTwitter className="text-white text-lg" />
            </div>
            <div className="bg-[#022A4E] p-2 rounded-full">
              <FaInstagram className="text-white text-lg" />
            </div>
            <div className="bg-[#022A4E] p-2 rounded-full">
              <FaLinkedinIn className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 pb-6 text-sm text-gray-600">
        <div className="text-center md:text-left">
          <p>Privacy & Cookies Policy</p>
          <p>© 2025. All rights reserved.</p>
          <p>Trademarks & photos are the property of their respective owners.</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-right">
          <p>Data Protection Policy</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
