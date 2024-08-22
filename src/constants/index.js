import project1 from "../assets/projects/project-1.jpg";
import project2 from '../assets/projects/project-2.jpg';
import project3 from "../assets/projects/project-3.jpeg";
// import project4 from "../assets/projects/project-4.jpg";

export const LANDING_CONTENT = `Hi, I’m Priyanshi, a full stack developer with a passion for building impactful web applications that not only meet business needs but also provide exceptional user experiences. My journey in tech has been fueled by curiosity and a love for problem-solving, leading me to specialize in both frontend and backend development.I enjoy working with technologies like React, Node.js, and MongoDB, and I’m always excited to take on new challenges that push the boundaries of what’s possible. I believe in the power of technology to transform ideas into reality, and I’m eager to contribute my skills to projects that make a difference. Whether it’s developing a responsive UI or designing a secure and scalable backend, I’m committed to delivering high-quality solutions that exceed expectations.`;

export const ABOUT_CONTENT = `I am a passionate Computer Science Engineering student at GLA University, with a strong foundation in both frontend and backend development. My experience spans building full-stack applications using modern technologies like Node.js, React.js, and MongoDB. I thrive in dynamic, fast-paced environments and have a keen eye for detail, which allows me to create intuitive and efficient solutions. I am deeply committed to continuous learning and innovation, and I'm eager to leverage my skills and experience to contribute to groundbreaking projects in a professional setting.`;

export const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "Developed a full-stack e-commerce platform with features like user authentication, cart management, and wish-list functionalities. Ensured data integrity and security by integrating authentication middleware and encryption techniques.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Chat App using MERN Stack",
      image: project2,
      description:
        "A real-time chat application with features like WebSocket communication, JWT-based authentication, and secure data storage. Implemented a responsive frontend using React.js, enhancing user experience across devices.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind"],
    },
    {
      title: "Food Ordering Website",
      image: project3,
      description:
        "Designed a user-friendly frontend for a food ordering website with interactive features and easy navigation. Created a visually appealing interface that enhances user engagement and accessibility.",
      technologies: ["HTML", "CSS"],
    },
];
  
export const CONTACT = {
  address: "367 Sadar Bazar, Mathura, India ",
  phoneNo: "+91 9548071818 ",
  email: "priyanshimittal2301@gmail.com",
};
