// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cloudinary from './assets/tech_logo/cloudinary.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import iiitbh from './assets/education_logo/iiitbh.png';
import bps from './assets/education_logo/bps.jpeg';


// Project Section Logo's
import E_Cell from "./assets/work_logo/E_Cell.png"
import AstroLogic from "./assets/work_logo/AstroLogic.png"
import Portfolio from "./assets/work_logo/Portfolio.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Cloudinary', logo: cloudinary },

      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: "__",
      role: "__",
      company: "__",
      date: "__",
      desc: "__",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    
    {
      id: 0,
      img: iiitbh,
      school: "IIIT BHAGALPUR, Bhagalpur",
      date: "Nov 2022 - Present",
      // grade: "73.2%",
      desc: "I am currently pursuing a degree in Electronics and Communication Engineering (ECE) from IIIT Bhagalpur. Alongside my academic studies, I am actively developing my skills in Web Development, focusing on both front-end and back-end technologies.",
      degree: "Electronics and Communication Engineering (ECE)",
    },
    {
      id: 1,
      img: bps,
      school: "Bijendra Public School,Purnia",
      date: "Apr 2020 - March 2021",
      grade: "77.4%",
      desc: "I completed my Class 12 from Bijendra Public School, Purnia, with a focus on the PCM stream (Physics, Chemistry, and Mathematics). During this time, I developed a strong foundation in analytical thinking and problem-solving, which played a key role in shaping my interest in technology and engineering.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: bps,
      school: "Bijendra Public School,Purnia",
      date: "Apr 2018 - March 2019",
      grade: "93.4%",
      desc: "Completed my secondary education (Class 10) from Bijendra Public School, Purnia. The curriculum, affiliated with the CBSE board, provided me with a strong and comprehensive foundational knowledge base.",
      degree: "CBSE(X) ",
    },
  ];
  
  export const projects = [
  {
    id: 1,
    title: "Astrologic",
    description: "A modern astrology platform featuring real-time chart generation, AI-driven analysis, and personalized insights for users.",
    image: AstroLogic,
    tags: ["React", "Node.js","Express.js", "Tailwind CSS","MongoDB", "AI Analysis", "RESTful APIs","JWT", "Nodemailer"],
    github: "https://github.com/Garg-Harsh7558/AstrologicFrontend",
    webapp: "https://astrologic-frontend.vercel.app/"
  },
  {
    id: 2,
    title: "E-Cell Platform",
    description: "A centralized portal for the Entrepreneurship Cell to manage events, student registrations, and startup resources, fostering a culture of innovation.",
    image: E_Cell,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Garg-Harsh7558/E-Cell",
    webapp: "https://e-cell-fu6v4veta-harsh-agrawals-projects-c802d9de.vercel.app/"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A clean and responsive personal portfolio website built with React and Tailwind CSS, showcasing skills and projects with a modern aesthetic.",
    image: Portfolio,
    tags: ["React", "JavaScript", "EmailJS", "Tailwind CSS", "Vite"],
    github: "https://github.com/Garg-Harsh7558/Portfolio",
    webapp: "https://portfolio-omega-ten-qkic0lbfm5.vercel.app/"
  },

];
