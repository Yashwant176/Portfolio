import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // replace with your image

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-black text-white py-20 relative"
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-1/2 mb-10 md:mb-0 md:h-full flex flex-col justify-end md:items-start items-center text-center md:text-left"
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-20 md:ml-20 leading-tight -mt-0 md:-mt-24 ">
          ABOUT ME
        </h2>

        <div className="flex flex-col">
          <p className="text-gray-300 text-lg mb-4">
            Hi, I'm K. Yashwant Kumar, a Full Stack Developer passionate about
            building modern, responsive web applications using React,
            JavaScript, and Python. I enjoy learning new technologies and
            constantly improving my skills.
          </p>
          <p className="text-gray-300 text-lg">
            I love transforming ideas into impactful projects, combining
            creativity with technology to deliver exceptional solutions. Whether
            it's building intuitive web applications, solving real-world
            problems, or experimenting with cutting-edge tools, I'm always up
            for a challenge.
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src={profilePic}
          alt="Yashwant Kumar"
          className="rounded-lg w-64 md:w-80 shadow-lg border border-gray-700"
        />
      </motion.div>
    </section>
  );
}
