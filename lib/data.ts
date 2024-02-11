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
    title: "Smartlearn AI",
    location: "Pune",
    description:
      "I Completed Certification course in AI.",
    icon: React.createElement(FaRobot),
    date: "2023",
  },
  {
    title: "Teachnook ML",
    location: "Pune",
    description:
      "I Completed Certification course in Machine Learning.",
    icon: React.createElement(FaRobot),
    date: "2023",
  },
  {
    title: "C++ Certification",
    location: "Pune",
    description:
      "I completed C++ Certification Course From IIT Bombay.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024-present",
  },
  {
    title: "Oasis Infobyte Internship",
    location: "Pune",
    description:
      "Got Selected for Virtual internship by Oasis infobyte in Data Science in second year in college",
    icon: React.createElement(LuGraduationCap),
    date: "2024-present",
  },
  {
    title: "Bharat Intern Internship",
    location: "Pune",
    description:
      "I secured Virtual internship in App development at Bharat Intern while in second year of college.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-present",
  },
] as const;

export const projectsData = [
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
    title: "Messeging",
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
    title: "Intagram UI",
    description:
      "This Application is built in React Native representing UI of Instsgram.",
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
  "Node.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "C++",
  "Java",
  "C",
  "Machine Learning",
  "Data structures",
  "Alogirithms",
] as const;