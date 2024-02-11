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
        <span className="font-medium">Computer Science and Bussiness Systems.</span>,  I'm deeply passionate about technology and its potential to change the world.{" "} My journey into software engineering began with a curiosity-driven exploration of coding languages and their applications. Since then, I've been immersed in learning the fundamentals of 
        <span className="font-medium"> Computer Science</span>{" "},eager to apply my knowledge to real-world projects.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        As a student, I thrive in environments that foster creativity and critical thinking. Whether it's tackling coding challenges, collaborating with peers on group projects, or seeking out new opportunities for learning,I'm always eager to push myself beyond my comfort zone. I am Looking for an{" "}
        <span className="font-medium">Internship position</span> as a software
        Engineer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Cricket, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>

        </p>
    </motion.section>
  )
}
