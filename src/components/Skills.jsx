import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-20 px-6 md:px-20"
    >
      {/* Skills Heading */}
      <h2 className="text-4xl md:text-7xl font-extrabold mb-16 text-center tracking-widest text-white drop-shadow-lg">
        SKILLS
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-[#D9DDE0] p-6 rounded-lg shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:scale-105 transform transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#D9DDE0] shadow-md mb-3 p-4">
              <img
                src={skill.logo}
                alt={skill.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="font-medium text-black">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
