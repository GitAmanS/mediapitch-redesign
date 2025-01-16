import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwishCarousel from "./SwishCarousal";

const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row font-outfit pt-16 md:pt-24 bg-[#ffffff] bg-gradient-to-t from-[#F3FEFD00] to-[#506ba8] text-[#1E439B] w-full min-h-screen h-fit md:px-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center space-y-6 w-full px-6 md:px-0 md:w-1/2">
        <h1 className="text-4xl md:text-7xl font-[600] text-center md:text-left">
          Transforming Creative Projects with Expert Services
        </h1>
        <h2 className="text-lg md:text-2xl tracking-wide font-[500] text-center md:text-left">
          Design. Edit. Develop. Manage. Optimize. Grow.
        </h2>
        <p className="text-base md:text-xl font-[300] text-center md:text-left">
          We provide expert services in photo/video editing, social media, web
          design, and app development, delivering tailored solutions to elevate
          your creative projects.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8">
        {/* Ensure the SwishCarousel component fits its container */}
        <div className="w-full h-full">
          <SwishCarousel />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
