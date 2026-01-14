import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const headlines = [
  "Thoughtful interiors, executed with precision.",
  "Designs that reflect your lifestyle.",
  "Spaces crafted for comfort and elegance.",
];

function WhyChooseUs() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-5 py-16 md:py-24 bg-white overflow-hidden">
      {/* soft rose ambient background */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-rose-100/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-rose-500 mb-4">
            Why VP Interiors
          </p>

          {/* Animated headline */}
          <div className="relative min-h-[120px] md:min-h-[110px] mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-gray-900"
              >
                {headlines[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8">
            We combine creative design thinking with precise execution to
            deliver interiors that feel timeless, functional, and personal.
          </p>

          <ul className="space-y-4 text-gray-900 text-base md:text-lg font-semibold">
            <li>End-to-end interior solutions</li>
            <li>Transparent pricing & realistic timelines</li>
            <li>Premium materials & craftsmanship</li>
            <li>Dedicated project supervision</li>
          </ul>
        </div>

        {/* RIGHT IMAGE WITH ROSE AMBIENT GLOW */}
<div className="relative flex justify-center items-center">

  {/* Outer rose ambient glow */}
  <div className="absolute w-[115%] h-[115%] bg-rose-300/25 blur-[100px] rounded-full" />

  {/* Inner soft rose gradient */}
  <div className="absolute w-[95%] h-[95%] bg-gradient-to-br from-rose-200/40 via-white/10 to-rose-400/20 blur-3xl rounded-3xl" />

  {/* Image */}
  <div className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] rounded-2xl overflow-hidden">
    <img
      src="/interiors/whychoose/why-choose-us.png"
      alt="VP Interiors Design"
      className="w-full h-full object-cover"
    />
  </div>

</div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
