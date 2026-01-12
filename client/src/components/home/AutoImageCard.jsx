import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AutoImageCard({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // slow = premium

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <div className="relative h-[300px] rounded-2xl overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt={title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <h3 className="mt-4 text-lg font-medium text-center">
        {title}
      </h3>
    </div>
  );
}

export default AutoImageCard;
