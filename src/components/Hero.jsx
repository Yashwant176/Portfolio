import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-[#D9DDE0] text-black relative"
    >
      {/* Name & Tagline */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4 text-center"
      >
        K Yashwant Kumar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-xl text-gray-700 mb-20 text-center max-w-xl"
      >
        Full Stack Developer | React & Python Enthusiast
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex space-x-8" // Increased space between buttons
      >
        {/* View Projects Button */}
        <a
          href="#projects"
          className="px-10 py-4 bg-white text-black font-semibold rounded shadow-md hover:shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1"
        >
          View Projects
        </a>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center px-10 py-4 bg-black text-white font-semibold rounded shadow-md hover:shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1 space-x-2"
        >
          <FaDownload />
          <span>Resume</span>
        </a>
      </motion.div>
    </section>
  );
}
