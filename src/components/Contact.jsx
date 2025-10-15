import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  // Close form when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") setShowForm(false);
  };

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cuzt4cz", // EmailJS service ID
        "template_gxck0al", // EmailJS template ID
        e.target,
        "u-JB0VeRikXDDZ76N" // EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        setShowForm(false);
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#D9DDE0] text-black py-20 px-6 md:px-20 flex flex-col justify-center items-center relative"
    >
      {/* Heading + Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center md:flex-row md:items-center gap-6 w-full max-w-5xl justify-center md:justify-between text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug text-center md:text-left">
          <span className="block">Let’s Work</span>
          <span className="block">Together</span>
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="border-2 border-black px-6 py-3 rounded-md hover:bg-black hover:text-[#D9DDE0] transition mt-4 md:mt-0"
        >
          SEND ME A MESSAGE
        </button>
      </motion.div>

      {/* Divider */}
      <div className="w-full max-w-5xl h-[2px] bg-black/70 my-10"></div>

      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-16 text-center leading-tight"
      >
        <span className="block md:inline">K </span>
        <span className="block md:inline">YASHWANT </span>
        <span className="block md:inline">KUMAR</span>
      </motion.h2>

      {/* Modal */}
      {showForm && (
        <div
          id="modalOverlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/60 p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-black text-white p-6 sm:p-8 rounded-lg w-full max-w-md sm:max-w-lg relative shadow-lg"
          >
            <div className="flex justify-between mb-6">
              <h3 className="text-2xl font-bold">Send a Message</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-white font-bold text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="flex-1 p-3 rounded bg-[#D9DDE0] text-black border border-gray-400 w-full"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="flex-1 p-3 rounded bg-[#D9DDE0] text-black border border-gray-400 w-full"
                  required
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 rounded bg-[#D9DDE0] text-black border border-gray-400 w-full min-h-[120px]"
                required
              />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between mt-2 gap-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition w-full sm:w-auto"
                >
                  <FaPaperPlane /> MAIL ME
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-red-500 rounded hover:bg-red-500 hover:text-white transition w-full sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
