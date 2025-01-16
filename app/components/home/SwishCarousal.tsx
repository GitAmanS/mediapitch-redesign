import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  // "/services/appdev.jpg",
  // "/services/cloud.jpg",
  // "/services/designing.jpg",
  // "/services/photo_editing.jpg",
  // "/services/social_media.jpg",
  // "/services/web_design.jpg",
  // "/services/writing.jpg",
  "/home/h1.png",
  "/home/h2.png",
  "/home/h3.png",
];

export default function SwishCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full h-64 md:h-full overflow-hidden relative">

      <AnimatePresence>
        {images.map((img, index) =>
          index === current ? (
            <motion.img
              key={img}
              src={img}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full  h-full object-contain"
              initial={{
                opacity: 0,
                x: 400, // Starts even further for dramatic effect
                scale: 1.2, // Slight zoom-in on start
              }}
              animate={{
                opacity: 1,
                x: 0, // Smoothly moves to the center
                scale: 1, // Returns to normal size
              }}
              exit={{
                opacity: 0,
                y: 150, // Smoothly moves downward
                scale: 0.8, // Shrinks slightly
              }}
              transition={{
                // Polished entry transition
                opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, // Fast and swishy
                x: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },

                // Polished exit transition
                exit: {
                  opacity: { duration: 1.4, ease: "ease-in-out" }, // Slow fade-out
                  y: { duration: 1.4, ease: "ease-in-out" },
                  scale: { duration: 1.4, ease: "ease-in-out" },
                },
              }}
            />
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}







// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "/1.jpg",
//   "/2.jpg",
//   "/3.jpg", 
// ];

// export default function SwishCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="w-full h-64 overflow-hidden relative">
//       <AnimatePresence>
//         {images.map((img, index) =>
//           index === current ? (
//             <motion.img
//               key={img}
//               src={img}
//               alt={`Slide ${index}`}
//               className="absolute inset-0 w-full h-full object-contain"
//               initial={{
//                 opacity: 0,
//                 x: 100,
//                 scale: 1.1,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: 100, // Moves downwards on exit
//                 scale: 0.8,
//               }}
//               transition={{ duration: 1.2 }}
//             />
//           ) : null
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
