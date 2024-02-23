"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

 const { ref } = useSectionInView("Home",0.5);
 const { setActiveSection , setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        {/**<div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"tween",duration:0.2}}>
                <Image 
                src="" 
                alt='Atharva Anbhule'
                 width="192" 
                 height="192" 
                 quality="95" 
                 priority={true}
                 className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                 />
                 </motion.div>
                 <motion.span initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{
                    type:"spring",
                    stiffness:125,
                    delay:0.1,
                    duration:0.7,
                 }} className='text-4xl absolute bottom-0 right-0'
                 
                 >
                 👋
                </motion.span>
            </div>
        </div>*/}
        <motion.h1 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-white'>
        <span className="font-bold">Hello, I'm Atharva.</span> I'm a{" "}
        <span className="font-bold">Software Engineering Student</span> with persuing{" "}
        <span className="font-bold">Computer Science and Business System</span> degree. I enjoy
        building <span className="italic">apps and Solve Complex problems.I enjoy learning new things about Artificial Intelligence and Machine Learning.</span>
        </motion.h1>

        <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.1,}} className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
            <Link onClick={()=>{setActiveSection("Contact");setTimeOfLastClick(Date.now())}} className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition' href="#contact">Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>
            <a className=' dark:bg-white/10 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' href="/Resume.pdf" download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
            <a className='bg-white dark:text-white/60 dark:bg-white/10  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href="https://www.linkedin.com/in/atharva-anbhule-1546ba259" target="_blank"><BsLinkedin /></a>
            <a className='bg-white dark:text-white/60 dark:bg-white/10  p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href="https://github.com/AtharvaAnbhule" target="_blank"><FaGithubSquare /></a>

        </motion.div>
    </section>
  )
}
