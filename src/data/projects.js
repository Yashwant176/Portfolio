import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'

export const projects = [
  {
    id: 1,
    title: "QuickShow - Movie Ticket Booking Platform",
    description: "A full-stack MERN application for seamless movie ticket booking. Users can explore movies, view details, select seats, and make secure payments using Stripe. Admins can manage shows, movies, and bookings via a dedicated dashboard.",
    tech: ["React", "Express Js", "MongoDB", "Node Js", "Clerk", "Stripe"],
    image: project5,
    github: "https://github.com/Yashwant176/QuickShow",
    demo: "https://quickshow-puce-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "DevFolio - BlogApp",
    description: "A blog application where users can write, update, and manage their blogs with a clean and responsive interface.",
    tech: ["React", "Django", "SQLite", "Postman"],
    image: project1,
    github: "https://github.com/Yashwant176/Devfolio-Frontend",
    demo: "https://devfolio-frontend-z9so.onrender.com/",
  },
  {
    id: 3,
    title: "Spring Travels",
    description: "A bus ticket booking web application that allows users to browse routes, select seats, and reserve tickets easily.",
    tech: ["React", "Django", "SQLite", "Thunder Client"],
    image: project3,
    github: "https://github.com/Yashwant176/Spring-Travels-frontend",
    demo: "",
  },
  {
    id: 4,
    title: "Student Registration System",
    description: "A CRUD-based Django application for managing student details including registration, updates, and deletion.",
    tech: ["Django", "SQLite"],
    image: project2,
    github: "https://github.com/Yashwant176/Student-Registration-System",
    demo: "",
  },
  {
    id: 5,
    title: "MERN Authentication App",
    description: "A secure authentication system using JWT and bcrypt for login and registration, built on the MERN stack.",
    tech: ["React", "Express Js", "MongoDB", "Node Js", "Postman"],
    image: project6,
    github: "https://github.com/Yashwant176/MERN-Authorization-App",
    demo: "",
  },
  {
    id: 6,
    title: "Todo List",
    description: "A simple and efficient ToDo list app that allows users to add, check off, and manage tasks effectively.",
    tech: ["React", "Express Js", "MongoDB", "Node Js"],
    image: project4,
    github: "https://github.com/Yashwant176/ToDo-List",
    demo: "",
  },
];

export default projects;
