import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: Logo + Brand (Fixed tight spacing) */}
          <Link 
            to="/" 
            className="flex items-center gap-1.5 flex-shrink-0" 
            onClick={() => setOpen(false)}
          >
            {/* Logo Image */}
            <img
              src="/fevicon/vpinterior-logo.png"
              alt="VP Interior Studio"
              className="h-9 md:h-11 w-auto object-contain"
            />
            
            {/* Logo Text - Locked to the right of image */}
            <div className="flex flex-col leading-none">
              <span className="text-lg pt-2 md:text-2xl font-bold text-gray-900 tracking-tight">
                VP Interiors
                
              </span>   
            </div>
          </Link>

          {/* CENTER: Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base font-medium text-gray-600 hover:text-black transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? (
                // Close Icon
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Icon
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg z-40">
          <div className="space-y-1 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center px-6 py-3 text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;