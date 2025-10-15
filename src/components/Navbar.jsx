import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside sidebar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
      bg-white shadow-md rounded-lg w-[96%] max-w-7xl px-6 md:px-10 py-3`}
    >
      <div className="flex justify-between items-center h-12 relative">
        {/* ----------- Logo (Desktop) ----------- */}
        <a
          href="#hero"
          className="hidden md:block text-lg font-bold text-black px-3 py-1 rounded-md bg-gray-200 hover:bg-black hover:text-white transition-colors duration-300"
        >
          yashwant.is-a.dev
        </a>

        {/* ----------- Desktop Nav Links ----------- */}
        <ul className="hidden md:flex space-x-8 font-medium text-black">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item === "HOME" ? "#hero" : `#${item.toLowerCase()}`}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* ----------- Mobile Menu Icon (Top-Left) ----------- */}
        <div className="md:hidden absolute left-2 top-1 z-50">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl bg-white p-2 rounded-lg shadow-md focus:outline-none cursor-pointer"
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* ----------- Mobile Logo (Top-Right) ----------- */}
        <a
          href="#hero"
          className="md:hidden absolute right-3 top-2 text-sm font-bold bg-gray-200 px-2 py-1 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
        >
          yashwant.is-a.dev
        </a>
      </div>

      {/* ----------- Mobile Sidebar ----------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[4.5rem] left-0 w-[55%] bg-white/90 backdrop-blur-md shadow-xl md:hidden z-40 flex flex-col items-start p-10 space-y-8 rounded-r-lg"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item === "HOME" ? "#hero" : `#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-black hover:text-gray-700 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
