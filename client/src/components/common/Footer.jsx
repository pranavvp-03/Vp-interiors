import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            VP Interiors
          </h3>
          <p className="text-neutral-400 leading-relaxed max-w-sm">
            Premium interior solutions designed with clarity,
            precision, and long-term value.
          </p>
        </div>

       {/* Links */}
<div>
  <h4 className="text-lg font-semibold text-white mb-4">
    Quick Links
  </h4>

  <ul className="space-y-3">
    <li>
      <Link
        to="/"
        className="hover:text-rose-400 transition"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/services"
        className="hover:text-rose-400 transition"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        to="/gallery"
        className="hover:text-rose-400 transition"
      >
        Gallery
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="hover:text-rose-400 transition"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-neutral-400">
            <li>📞 +91 7909101024</li>
            <li>💬 WhatsApp Available</li>
            <li>📍 Kuttippuram,malappuram,Kerala</li>
            <li className="text-sm text-neutral-500">
              Mon – Sat | 9:00 AM – 7:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} VP Interiors. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
