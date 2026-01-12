import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SlidingImageCard({ images, title, delay = 0, navigateTo }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [images.length, delay]);

  return (
    <div
      onClick={() => navigate(navigateTo)}
      className="w-full cursor-pointer select-none"
    >
      <div className="relative h-[260px] overflow-hidden rounded-2xl bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={title}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <h3 className="mt-4 text-center text-lg font-medium">
        {title}
      </h3>
    </div>
  );
}

export default SlidingImageCard;
