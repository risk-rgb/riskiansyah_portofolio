import { useState } from "react";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <ul className="nav-ul">
      {["home", "about", "work", "contact"].map((section) => (
        <li key={section} className="nav-li">
          <a className="nav-link" href={`#${section}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Rizkiyansyah
          </a>

          {/* Toggle Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="sm:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/${isOpen ? "close" : "menu"}.svg`}
              alt={isOpen ? "Close menu" : "Open menu"}
              className="w-6 h-6 text-neutral-400 hover:text-white"
            />
          </button>

          {/* Navigation (Desktop) */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Navigation (Mobile) */}
      {isOpen && (
        <motion.nav
          className="block overflow-hidden text-center sm:hidden pb-5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
