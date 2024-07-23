import project1 from "../assets/projects/gg.png";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a dedicated and versatile full stack developer with 
a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including
  React, Spring ecosystem, Node.js, MySQL, PostgreSQL,Redis and installing a CI/CD pipelines. My journey in web 
  development began with a deep curiosity for how things work, and it has evolved 
  into a career where I continuously strive to learn and adapt to new challenges. 
  I thrive in collaborative environments and enjoy solving complex problems 
  to deliver high-quality solutions. Outside of coding, I enjoy staying active, 
  exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Intern Software Enginner",
    company: "Offzone-Agency",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Spring Boot. 
    Implemented RESTful APIs and integrated with Mysql databases.
     Collaborated with team to define project requirements and timelines and  deliver the  projet.`,
    technologies: ["React.js", "Spring Boot", "Mysql","Docker"],
  },
  {
    year: "2022 - 2023",
    role: "Intern Software Enginner",
    company: "RADEEC",
    description: `Contributed to the development of Desktop applications using Java and Javafx. 
    Managed databases using Mysql. Worked closely with team  to prioritize features and enhancements.`,
    technologies: ["JAVA", "JavaFx", "Python", "Mysql"],
  },

];

export const PROJECTS = [
  {
    title: "E-Health Platform",
    image: project1,
    description:
      "Implemenation of comprehensive medical e-health platform. This project aimed to enhance healthcare services through innovative digital solutions. The platform included features for patient management, appointment scheduling, telemedicine, electronic health records (EHR), and secure communication between healthcare professionals and patients using Spring Boot/ReactJs",
    technologies: ["HTML", "CSS", "React", "Spring Boot", "Mysql"],
  },
  {
    title: "Abscence-Guard Application",
    image: project2,
    description:
      "Implemented desktop application focused on AI to efficiently manage absence using Java, Python and MySql for DataBase management also merge it to the principal system.",
    technologies: ["Java", "JavaFX", "Python", "OpenCV"],
  },
  {
    title: "E-banking Website",
    image: project3,
    description:
      "Implementing a web platform to manage transactions between clients involved overseeing the development and deployment of a robust system. This included designing intuitive user interfaces and ensuring seamless transaction processing. The project focused on enhancing user experience through responsive design and optimizing backend functionalities to support high-volume transactions efficiently.",
    technologies: ["HTML", "CSS", "Angular", "Spring Boot"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "TailwindCss","framer Motion"],
  },

];

export const CONTACT = {
  address: "Rue Ain Ali MOUMEN. SETTAT, MOROCCO ",
  phoneNo: "+212-693-228-504 ",
  email: "abdelfattah.mostakir@gmail.com",
};
