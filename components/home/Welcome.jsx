import React from "react";
import SwishCarousel from "./SwishCarousal";

const Welcome = () => {
  return (
    <div className="flex   justify-center flex-col-reverse md:flex-row font-outfit md:pt-24 bg-gradient-to-t from-[#F3FEFD00] to-[#506ba8] text-[#1E439B] w-full min-h-screen h-fit md:px-20">

      <div className="flex flex-col justify-center space-y-4 md:space-y-6 w-full px-4 sm:px-6 md:px-0 md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left leading-tight md:leading-none">
          Transforming Creative Projects<br className="hidden md:block" /> 
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
            with Expert Services
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl tracking-normal font-semibold text-center md:text-left text-gray-700">
          Design • Edit • Develop<br className="md:hidden" /> 
          Manage • Optimize • Grow
        </h2>
        
        <p className="text-lg md:text-xl font-light text-center md:text-left text-gray-600 leading-relaxed">
          We provide expert services in photo/video editing, social media management,<br className="hidden md:block" /> 
          web design, and app development - delivering tailored solutions to elevate your creative projects.
        </p>
      </div>

      <div className="flex flex-col w-full md:w-1/2 p-0 md:pr-8 md:mb-16 mt-2 md:mt-0">
        <div className="w-full h-full px-2 sm:px-4 md:px-0 -mr-4 md:mr-0">

          <SwishCarousel className="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;