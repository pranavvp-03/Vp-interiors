import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo - Left */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold tracking-wide">
              Interior<span className="text-gray-400 font-normal">Studio</span>
            </h1>
          </div>

          {/* Center Menu - Desktop */}
          <nav className="hidden md:flex flex-1 justify-center gap-14 text-base font-semibold tracking-wide">
            <Link className="hover:text-gray-600 transition" to="/">
              Home
            </Link>
            <Link className="hover:text-gray-600 transition" to="/services">
              Services
            </Link>
            <Link className="hover:text-gray-600 transition" to="/gallery">
              Gallery
            </Link>
          </nav>

          {/* Right CTA + Mobile Menu */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold tracking-wide hover:bg-gray-800 transition"
            >
              Contact
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden flex flex-col gap-4 pb-4 text-sm font-medium">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/services">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} to="/projects">
              Projects
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="mt-2 inline-block px-4 py-2 bg-black text-white rounded-full w-fit"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
