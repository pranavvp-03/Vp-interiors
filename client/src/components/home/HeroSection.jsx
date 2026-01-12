import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Premium Interior Designs for Modern Living",
  "Elegant Spaces Crafted with Precision",
  "Designing Homes That Reflect Your Lifestyle",
];

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Images */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl text-center md:text-left">

            {/* Brand */}
            <p className="text-sm tracking-widest text-rose-200 mb-4">
              VP INTERIORS
            </p>

            {/* Animated Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={texts[index]}
                className="text-3xl md:text-5xl font-semibold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {texts[index]}
              </motion.h1>
            </AnimatePresence>

            {/* Subtext */}
            <p className="mt-6 text-gray-200 text-base md:text-lg">
              We create timeless interiors with a perfect balance of aesthetics,
              comfort, and functionality.
            </p>

            {/* CTA */}
            <div className="mt-10 relative inline-block">
              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-rose-400 blur-lg opacity-70"></span>

              <button className="relative px-8 py-3 bg-black text-white rounded-full text-sm font-semibold tracking-wide">
                Get Free Consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;