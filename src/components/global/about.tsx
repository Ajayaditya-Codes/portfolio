import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-[90vw] max-w-[1000px] flex flex-col justify-start items-start mx-auto px-auto my-40">
      <h5 className="text-xl font-bold text-[#8a00c4] dark:text-sky-400">
        About Me
      </h5>
      <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-5">
        Designing the Future, One Pixel at a Time
      </h3>
      <p className="text-pretty text-xl md:text-2xl font-medium mb-5">
        Hi, I'm Ajayaditya, a web developer specializing in Next.js, React,
        TypeScript, and Tailwind CSS. I focus on creating responsive,
        high-performance web applications with clean, maintainable code.
        Passionate about seamless user experiences and scalable solutions,
        I&apos;m eager to contribute to impactful projects in remote, flexible
        roles.
      </p>
      <p className="text-pretty text-xl md:text-2xl font-medium">
        I&apos;m pursuing a B.E. in Robotics at Kumaraguru College of Technology
        (CGPA: 9.3) and an online B.S. in Data Science and Programming at IIT
        Madras (CGPA: 9.7). I have completed my Diploma in Programming from IITM
        with Merit. Balancing dual degrees with project work has sharpened my
        time management and problem-solving skills, equipping me to handle
        challenging environments with ease.
      </p>
    </div>
  );
};

export default About;
