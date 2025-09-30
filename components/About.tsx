"use client";
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <motion.section ref={ref}  initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} id="about" transition={{delay:0.175}} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 dark:text-white'>
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
       Hey there! I'm Atharva Anbhule, a dedicated student on a mission to become a skilled software engineer. Currently pursuing my degree in{" "}
<span className="font-medium">Computer Science and Business Systems</span>, I'm deeply passionate about technology and its potential to change the world. My journey into software engineering began with curiosity-driven exploration of coding languages and frameworks, and since then, I've been immersed in learning the fundamentals of{" "}
<span className="font-medium">Computer Science</span> while applying my knowledge to real-world projects.
</p>

<p>
<span className="italic">My favorite part of programming</span> is problem-solving. I love the satisfaction of finding solutions to challenging problems. I have experience with <span className="font-medium">Java, Spring Boot, and Quasar</span>, and enjoy building applications that are both functional and scalable.
</p>

<p>
I thrive in collaborative environments and value <span className="font-medium">teamwork</span>, having worked on multiple group projects and internships where I contributed to developing innovative solutions. I am actively seeking an <span className="font-medium">internship position</span> as a Software Engineer to further enhance my skills and gain hands-on experience in real-world software development.
</p>

<p>
<span className="italic">When I'm not coding</span>, I enjoy playing Cricket, watching movies, and spending time with my dog. I also have a strong passion for <span className="font-medium">learning new technologies and expanding my skill set</span>.


        </p>
    </motion.section>
  )
}
