import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Welcome = () => {
  return (
    <div className="font-outfit text-[#1E439B] w-full min-h-screen flex  md:px-20">
      <div className="flex flex-col space-y-6 md:w-1/2">
        <h1 className="text-7xl font-[600]  ">
          Transforming Creative Projects with Expert Services
        </h1>
        <h2 className="text-2xl tracking-wide font-[500]">
          Design. Edit. Develop. Manage. Optimize. Grow.
        </h2>
        <p className="text-xl font-[300]">
          We provide expert services in photo/video editing, social media, web
          design, and app development, delivering tailored solutions to elevate
          your creative projects.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
