import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaProjectDiagram, FaReact, FaRobot } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import twitter from "@/public/twitter.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import hotel from "@/public/hotel.png";
import Insta from "@/public/Inta UI.png";
import Vehivle from "@/public/Vehivle.png";
import Agency from "@/public/Agency.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
  title: "Site Reliability Engineer Intern (Applically)",
  location: "Pune",
  description:
    "Optimized large-scale distributed systems with monitoring, automation, and CI/CD pipelines.",
  icon: React.createElement(FaRobot),
  date: "Jan 2025 - Jun 2025",
} , 

  {
    title: "Software Engineer Intern (R.K Innovate)",
    location: "Pune",
    description:
      "Completed a hands-on internship, developing software solutions and enhancing practical engineering skills in real-world projects",
    icon: React.createElement(FaRobot),
    date: "Jun 2024 - Dec 2024",
  },
  {
    title: "Business Development Intern (Demand Nexus)",
    location: "Pune",
    description:
      "Completed a hands-on internship, driving business growth initiatives, building client relationships, and enhancing practical skills in market research and strategy",
    icon: React.createElement(FaRobot),
    date: "Jan 2024 - March 2024",
},

 
  {
    title: "C++ Certification (IIT Bombay)",
    location: "Pune",
    description:
      "Completed C++ Certification Course from IIT Bombay, strengthening programming fundamentals and problem-solving skills.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024-present",
  },
  {
    title: "Oasis Infobyte Data Science Internship",
    location: "Pune",
    description:
      "Completed a virtual internship in Data Science, gaining experience in data analysis, visualization, and real-world problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-present",
  },
  {
    title: "Bharat Intern App Development Internship",
    location: "Pune",
    description:
      "Secured a virtual internship in App Development, working on practical projects and enhancing programming skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-present",
  },
  {
    title: "Linux Certification (Udemy)",
    location: "Online",
    description:
      "Completed a certification course in Linux, learning system administration, command-line usage, and scripting.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024",
  },
  {
    title: "AWS Cloud Certification (Udemy)",
    location: "Online",
    description:
      "Completed AWS certification, gaining hands-on knowledge of cloud computing, services, and deployment best practices.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024",
  },
  {
    title: "JP Morgan Software Engineering Simulation (Forage)",
    location: "Online",
    description:
      "Completed a virtual Software Engineering simulation program, understanding real-world SE workflows and problem-solving scenarios.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024",
  },
  {
    title: "Walmart Software Engineering Simulation (Forage)",
    location: "Online",
    description:
      "Participated in Walmart's virtual Software Engineering simulation, gaining exposure to industry practices and project implementation.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024",
  },
  {
    title: "Java Certification (Oracle)",
    location: "Online",
    description:
      "Completed Java certification from Oracle, strengthening object-oriented programming skills and Java development expertise.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024",
  },{
    title: "Smartlearn AI Certification",
    location: "Pune",
    description:
      "Completed a professional certification course in Artificial Intelligence, gaining practical skills in AI concepts and applications.",
    icon: React.createElement(FaRobot),
    date: "2023",
  },
  {
    title: "Teachnook ML Certification",
    location: "Pune",
    description:
      "Completed a comprehensive Machine Learning certification course, building hands-on experience with ML models and algorithms.",
    icon: React.createElement(FaRobot),
    date: "2023",
  }
] as const;

export const projectsData = [
  {
    title: "Workeloo CRM",
    description:
      "A CRM platform that streamlines lead management, team collaboration, and client communication, boosting productivity and automating workflows for scalable growth.",
    tags: [
  "Next.js",
  "MongoDB",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Spring Boot",
  "Java",
  "Microservices",
  "Apache Kafka",
  "SQL",
  "Docker",
  "CI/CD",
  "Kubernetes",
  "API Development"
]
,
    imageUrl: Agency,
  },
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Hotel Booking",
    description:
      "It is Application Used for making Reservations in hotel.It has search,filter,Add hotels,Map,Authentication functions",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDb","Node.js","Prisma"],
    imageUrl: hotel,
  },
  {
    title: "Messaging",
    description:
      "An app used to Message,Make Group chats,Edit profile,Auth,Send images features",
    tags: ["React", "Next.js", "MongoDB", "Tailwind","Node.js","Prisma","Typescript"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Twitter Clone",
    description:
      "An App used to make Post,comment on post,like,Auth,search and many more functions.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind","Node.js","Prisma","Typescript","NextAuth"],
    imageUrl: twitter,
  },
  {
    title: "Instagram UI",
    description:
      "This Application is built in React Native representing UI of Instagram.",
    tags: ["React", "React Native","Typescript"],
    imageUrl: Insta,
  },
  {
    title: "Vehicle detection",
    description:
      "This application is used for vehicle detection on road using OpenCV.",
    tags: ["Python","OpenCV"],
    imageUrl: Vehivle,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Spring Boot",
  "Tailwind CSS",
  "Prisma",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST API",
  "C",
  "C++",
  "Java",
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Structures",
  "Algorithms",
  "Networking (TCP/IP)",
  "Linux",
  "DevOps",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "CI/CD",
  "Git",
  "Prometheus",
  "Grafana",
  "Apache Kafka",
  "RabbitMQ",
  "Virtualization",
  "TLS/SSL",
  "VPN Integration",
  "Secure Coding Standards",
  "Event-Driven Architecture",
  "Fault Tolerance",
  "Scalability",
  "Load Balancing",
  "Performance Optimization",
  "Agile",
  "SDLC",
  "Problem-Solving",
  "Communication",
  "Leadership",
  "Ownership Mindset"
] as const;
