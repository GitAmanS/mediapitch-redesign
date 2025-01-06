import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="flex justfiy-center items-center flex-col min-h-[85vh] md:px-20 font-outfit relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('wavebackground.png')",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex h-full space-x-20  py-8  justify-between flex-row">
        <div className="flex-col mt-auto h-fit w-full text-xs font-[400]  text-[#022a4e]">
          <div className="h-full py-4">
            <img src="logo.jpg" alt="logo" className="w-1/2 h-fit" />
          </div>
          <div className="flex flex-col space-y-4  h-full">
            <p className=""> App Development </p>
            <p className=""> Web Development </p>
            <p className=""> Social Media </p>
            <p className=""> Digital Marketing </p>
            <p className=""> Graphic Design </p>
          </div>
        </div>

        <div className="flex-col w-full text-xs font-[400]  text-[#022a4e]">
          <h1 className="font-[400] text-lg py-4">Resources</h1>
          <div className="flex flex-col space-y-4 mt-auto h-full">
            <p className=""> App Development </p>
            <p className=""> Web Development </p>
            <p className=""> Social Media </p>
            <p className=""> Digital Marketing </p>
            <p className=""> Graphic Design </p>
          </div>
        </div>

        <div className="flex-col h-full w-full text-xs font-[400] text-[#022a4e]">
          <h1 className="font-[400] h-full mt-auto text-lg py-4">Contact</h1>
          <div className="flex flex-col space-y-4 mt-auto h-full">
            <p className=""> Web Development </p>
            <p className=""> Social Media </p>
            <p className=""> Digital Marketing </p>
            <p className=""> Graphic Design </p>
          </div>
        </div>

        <div className="flex-col h-full w-full text-xs font-[400]  text-[#022a4e]">
          <h1 className="font-[400] text-lg py-4 h-full">Find Us on Social</h1>
          <div className="flex flex-col space-y-4 mt-auto h-full">
            <div className="flex space-x-2 flex-row">
              <div className="bg-[#022A4E] p-1.5 rounded-full">
                <FaFacebookF className="text-white " />
              </div>
              <div className="bg-[#022A4E] p-1.5 rounded-full">
                <FaXTwitter className="text-white " />
              </div>
              <div className="bg-[#022A4E] p-1.5 rounded-full">
                <FaInstagram className="text-white " />
              </div>
              <div className="bg-[#022A4E] p-1.5 rounded-full">
                <FaLinkedinIn className="text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row mt-20">
        <div className="w-full">
          <p className="text-xs text-grey-300">
            Privacy & Cookies Policy <br />
            © 2025. All rights reserved. <br />
            Trademarks & photos are the property of their respective owners.
          </p>
        </div>

        <div className="flex w-full space-x-8 text-xs place-items-end justify-end">
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
