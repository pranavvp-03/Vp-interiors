import { useState } from "react";
import MainLayout from "../layouts/mainLayout";

const categories = [
  "Living Room",
  "Modular Kitchen",
  "Bedroom",
  "Wardrobe",
  "Dining Area",
  "TV Unit",
  "ShowCase",
  "Staircase",
];

function Gallery() {
  const [active, setActive] = useState("Living Room");

  return (
    <MainLayout>
      <section className="pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Our Interior Works
        </h1>

        {/* Category Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full border transition
                ${
                  active === cat
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* images will go here */}
        </div>

      </div>
    </section>
    </MainLayout>
  );
}

export default Gallery;
