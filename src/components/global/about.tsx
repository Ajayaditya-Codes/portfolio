"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const paragraphVariants = (index: number) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: index * 0.3, ease: "easeOut" },
  },
});

const About: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="mx-auto my-40 flex w-[90vw] max-w-[1000px] flex-col items-start justify-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h5
        className="text-xl font-bold text-[#8a00c4] dark:text-sky-400"
        variants={headingVariants}
      >
        About Me
      </motion.h5>
      <motion.h3
        className="mt-2 mb-5 text-2xl font-bold sm:text-3xl"
        variants={headingVariants}
      >
        Designing the Future, One Pixel at a Time
      </motion.h3>
      {[
        `Hi, I'm Ajayaditya, a web developer specializing in Next.js, React, TypeScript, and Tailwind CSS. I focus on creating responsive, high-performance web applications with clean, maintainable code. Passionate about seamless user experiences and scalable solutions, I'm eager to contribute to impactful projects in remote, flexible roles.`,
        `I'm pursuing a B.E. in Robotics at Kumaraguru College of Technology (CGPA: 9.3) and an online B.S. in Data Science and Programming at IIT Madras (CGPA: 9.7). I have completed my Diploma in Programming from IITM with Merit. Balancing dual degrees with project work has sharpened my time management and problem-solving skills, equipping me to handle challenging environments with ease.`,
      ].map((text, index) => (
        <motion.p
          key={index}
          className="mb-5 text-xl font-medium text-pretty md:text-2xl"
          variants={paragraphVariants(index)}
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default About;
