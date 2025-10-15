import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-[#D9DDE0] py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-0 whitespace-nowrap">
        DESIGNED AND DEVELOPED BY YASH 😎
      </p>

      <div className="flex space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/Yashwant176"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaGithub size={22} className="hover:text-gray-400 transition" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/k-yashwant-kumar-87b882286/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin size={22} className="hover:text-gray-400 transition" />
        </a>

        {/* Email */}
        <a
          href="mailto:kumarkyashwant@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <MdEmail size={22} className="hover:text-gray-400 transition" />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/Yashrockz_777"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaTwitter size={22} className="hover:text-gray-400 transition" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yash_it_iz_/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaInstagram size={22} className="hover:text-gray-400 transition" />
        </a>
      </div>
    </footer>
  );
}
