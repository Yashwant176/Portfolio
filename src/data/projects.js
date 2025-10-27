import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'

export const projects = [
  {
    id: 1,
    title: "DevFolio - BlogApp",
    description: "A blog application where users can write, update, and manage their blogs.",
    tech: ["React", "Django", "db sqlite","Postman"],
    image: project1,
    github: "https://github.com/Yashwant176/Devfolio-Frontend",
    demo: "https://devfolio-frontend-z9so.onrender.com/",
  },
  {
    id: 2,
    title: "Student Registration System",
    description: "Manage student details with full CRUD operations.",
    tech: ["Django", "db sqlite"],
    image: project2,
    github: "https://github.com/Yashwant176/Student-Registration-System",
    demo: "",
  },
  {
    id: 3,
    title: "Spring Travels",
    description: "Ticket booking website for buses, allowing users to book tickets online.",
    tech: ["Django", "React","db sqlite","Thunder Client"],
    image: project3,
    github: "https://github.com/Yashwant176/Spring-Travels-frontend",
    demo: "",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Todo list app with checkboxes; users can mark tasks as completed.",
    tech: ["React", "Express Js", "Mongo DB", "Node JS"],
    image: project4,
    github: "https://github.com/Yashwant176/ToDo-List",
    demo: "",
  },
  {
    id: 5,
    title: "MERN Authentication App",
    description: "Authentication app built with MERN stack.",
    tech: ["React", "Express Js", "Mongo DB", "Node JS","Postman"],
    image: project6,
    github: "https://github.com/Yashwant176/MERN-Authorization-App",
    demo: "",
  },
];
export default projects;
