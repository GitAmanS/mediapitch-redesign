import { Link, useLocation } from "react-router";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeHamburger = () => {
    setIsHamburgerOpen(false);
  };

  const getLinkClass = (path) => {
    const baseClass = "py-5 hover:text-[#1E429B] transition-colors";
    return location.pathname === path ? `${baseClass} text-[#1E429B]` : baseClass;
  };

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
    <>
      {/* Desktop Header */}
      <div
        className={`fixed z-40 text-[#2f303d] font-outfit items-center flex flex-row justify-between w-full md:px-20 transition-colors duration-300 hidden md:flex ${
          isScrolled ? "bg-[#F4F9FB]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center md:space-x-12">
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
                    {/* Add more items here */}
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

      {/* Mobile Header */}
      <div
        className={`fixed z-40 text-[#2f303d] font-outfit flex items-center justify-between w-full px-4 transition-colors duration-300 md:hidden ${
          isScrolled ? "bg-[#F4F9FB]" : "bg-transparent"
        }`}
      >
        <div className="py-4">
          {/* Logo */}
          <img src="logo.jpg" alt="logo" className="w-8 h-fit" />
        </div>
        <button
          className="text-[#2f303d] focus:outline-none"
          onClick={toggleHamburger}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isHamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Hamburger Menu */}
      {isHamburgerOpen && (
        <div className="fixed font-outfit top-0 left-0 w-full h-full bg-[#F4F9FB] z-50 flex flex-col items-center md:space-y-6 pt-20">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-[#2f303d] focus:outline-none"
            onClick={closeHamburger}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
            className="text-lg font-medium"
            to="/"
            onClick={closeHamburger}
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium"
            to="/services"
            onClick={closeHamburger}
          >
            Services
          </Link>
          <Link
            className="text-lg font-medium"
            to="/about"
            onClick={closeHamburger}
          >
            About
          </Link>
          <Link
            className="text-lg font-medium"
            to="/contact-us"
            onClick={closeHamburger}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
