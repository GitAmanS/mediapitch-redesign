"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/home/h1.png", 
  "/home/h2.png",
  "/home/h3.png",
];

export default function SwishCarousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(true); 
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 md:h-full overflow-hidden relative">
      {!loaded && (
        <img
          src={images[0]}
          alt="Default Slide"
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}

      <AnimatePresence>
        {images.map((img, index) =>
          index === current ? (
            <motion.img
              key={img}
              src={img}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-contain"
              initial={loaded ? { opacity: 0, x: 400, scale: 1.2 } : { opacity: 1, x: 0, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: 150, scale: 0.8 }}
              transition={{
                opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                x: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
              }}
            />
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
