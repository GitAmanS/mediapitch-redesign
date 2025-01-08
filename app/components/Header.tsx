import { Link, useLocation } from "react-router";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const getLinkClass = (path) => {
    const baseClass = "py-5 hover:text-[#1E429B] transition-colors";
    return location.pathname === path ? `${baseClass} text-[#1E429B]` : baseClass;
  };

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-40 text-[#2f303d] font-outfit items-center flex flex-row justify-between w-full md:px-20 transition-colors duration-300 ${
        isScrolled ? "bg-[#F4F9FB]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-12">
        <div className="py-5">
          {/* Logo */}
          <img src="logo.jpg" alt="logo" className="w-8 h-fit" />
        </div>
        <nav>
          <ul className="flex text-[16px] space-x-10 mr-auto font-[300] pb-1">
            <Link className={getLinkClass("/")} to="/">
              Home
            </Link>
            <Link
              className="relative py-5"
              to="/services"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="focus:outline-none">Services</button>
              {isDropdownOpen && (
                <ul className="absolute top-12 left-0 bg-white shadow-md rounded-md w-fit text-left z-50">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Designing
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Photo Editing
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Social Media
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Website Designing
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      App Development
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Cloud Infrastructure
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Marketing
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Trade Shows
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Public Relations
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link className="whitespace-nowrap" to="/services">
                      Translation & Transcription
                    </Link>
                  </li>
                </ul>
              )}
            </Link>
            <Link className={getLinkClass("/about")} to="/about">
              About
            </Link>
            <Link className={getLinkClass("/contact-us")} to="/contact-us">
              Contact
            </Link>
          </ul>
        </nav>
      </div>

      <div className="pb-1">
        <button className="bg-[#1E429B] text-white px-6 rounded-full pt-0.5 py-1.5">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
