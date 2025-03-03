import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import data from "../utils/data.json";

const services = Object.keys(data).map((key) => ({
  name: data[key].editingTitle,
  href: `/service?service=${key}`,
  image: data[key].pageImage,
}));
const columnSize = 6;
const serviceColumns = [];
for (let i = 0; i < services.length; i += columnSize) {
  serviceColumns.push(services.slice(i, i + columnSize));
}

const Footer = () => {
  return (
    <div
      className="flex 2xl:px-56 w-full justify-center items-center flex-col min-h-[85vh] px-6 md:px-20 font-outfit relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('wavebackground.png')",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full py-8 gap-6 md:gap-20">
        <div className="flex flex-col w-fit text-sm font-medium text-[#022a4e]">
          <div className="py-4">
            <img src="logo.png" alt="logo" className="w-1/2 md:w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col w-full text-sm font-medium text-[#022a4e]">
          <div className="flex items-center w-full">
            <h1 className="text-xl md:text-2xl font-semibold py-4">Services</h1>
            <div className="bg-black h-[2px] mx-2 mt-3 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceColumns.map((column, index) => (
              <div key={index} className="flex flex-col space-y-3">
                {column.map((service, idx) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="relative before:absolute before:w-0 before:h-[1px] before:bg-black before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full text-sm font-medium text-[#022a4e]">
          <h1 className="text-xl md:text-2xl font-semibold py-4">
            Find Us on Social
          </h1>
          <div className="flex space-x-3">
            <Link
              target="_blank"
              href="https://www.facebook.com/mpphotoservice?locale=nl_BE"
              className="bg-[#022A4E] p-2 rounded-full"
            >
              <FaFacebookF className="text-white text-lg" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/media-pitch/"
              className="bg-[#022A4E] p-2 rounded-full"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 pb-6 text-sm text-gray-600">
        <div className="text-center md:text-left">
          <p>Privacy & Cookies Policy</p>
          <p>© 2025. All rights reserved.</p>
          <p>
            Trademarks & photos are the property of their respective owners.
          </p>
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
