import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 md:px-20"
    >
      {/* Projects Heading */}
      <h2 className="text-4xl md:text-7xl font-extrabold mb-16 text-center tracking-widest text-white drop-shadow-lg">
        PROJECTS
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-black rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)] hover:-translate-y-2 transform transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-5 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-300 px-2 py-1 rounded text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition"
                  >
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
