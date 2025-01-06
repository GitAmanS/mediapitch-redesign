import { Image } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="fixed z-40 text-[#2f303d] bg-[#F4F9FB] backdrop-blur-md font-outfit items-center flex flex-row justify-between w-full md:px-20 py-5">
      <div className="flex items-center space-x-12">
        <div>
          {/* <h1>Logo</h1> */}
          <img src="logo.jpg" alt="logo" className="w-8 h-fit" />
        </div>
        <nav>
          <ul className="flex text-[16px] space-x-10 mr-auto font-[300] pb-1">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact-us">Contact</Link>
          </ul>
        </nav>
      </div>

      <div className="pb-1">
        <button className="bg-[#1E429B] text-white px-6 rounded-full pt-0.5  py-1.5">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
