"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: "Designing", href: "/services#designing" },
    { name: "Photo Editing", href: "/services#editing" },
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);
  const closeAll = () => {
    setIsHamburgerOpen(false);
    setIsDropdownOpen(false);
  };

  const getLinkClass = (path) => {
    const baseClass = "transition-all duration-300 px-4 py-2 font-medium";
    if (pathname === path) {
      return `${baseClass} text-white bg-blue-600 rounded-full`;
    }
    return `${baseClass} ${isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`;
  };

  const isServicesActive = pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-40 font-outfit items-center flex flex-row justify-between w-full md:px-20 transition-all duration-300 hidden md:flex ${
          isScrolled ? "bg-white shadow-md py-3" : "py-5"
        }`}
      >
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center">
            <Image height={50} width={50} src="/logo.png" alt="logo" className="w-10 h-10 " />
          </Link>
          <nav>
            <ul className="flex space-x-6 items-center">
              <li>
                <Link className={getLinkClass("/")} href="/">
                  Home
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={toggleDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href="/services"
                  className={`${getLinkClass("/services")} flex items-center gap-1 ${
                    isServicesActive ? "!bg-blue-700" : ""
                  }`}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[200px]">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="px-6 py-3 block hover:bg-blue-50 text-gray-800 hover:text-blue-600 transition-colors"
                          onClick={closeDropdown}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link className={getLinkClass("/about")} href="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link
          href="/contact-us"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg"
        >
          Contact
        </Link>
      </div>

      <div
        className={`fixed z-40 w-full md:hidden transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </Link>
          
          <button
            onClick={toggleHamburger}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke={isScrolled ? "#1E429B" : "white"}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isHamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isHamburgerOpen && (
          <div className="absolute top-full w-full bg-white shadow-xl border-t border-gray-100">
            <div className="px-5 py-4 space-y-4">
              <Link
                href="/"
                onClick={closeAll}
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg font-medium"
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg font-medium"
                >
                  Services
                </Link>
                <div className="pl-6 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={closeAll}
                      className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                onClick={closeAll}
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg font-medium"
              >
                About
              </Link>
              
              <Link
                href="/contact-us"
                onClick={closeAll}
                className="block py-3 px-4 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;