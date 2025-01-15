"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { IconTrendingUp } from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";

type Project = {
  name: string;
  repoUrl: string;
  url?: string;
  description: string;
  techStack: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const headerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const projectCardVariants = (index: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  },
});

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.4, delay: 0.3 },
  },
};

const footerLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } },
};

const ProjectsSection: React.FC = (): JSX.Element => {
  const projects: Project[] = [
    {
      name: "Quirk V1: Pioneering Workflow Automation",
      url: "https://quirk-v1.vercel.app",
      repoUrl: "https://github.com/Ajayaditya-Codes/Quirk-V1",
      description:
        "Quirk V1 is the initial iteration of a drag-and-drop workflow automation tool designed to integrate seamlessly with platforms like GitHub, Slack, and Asana. While offering foundational automation capabilities, Quirk V1 lacks the AI integration, responsive design, advanced analytics, and many other notable features of its successor. It served as a strong proof of concept, focusing on core automation and user-friendly interfaces.",
      techStack:
        "Next.js, React Flow, Zustand, Clerk Auth, TailwindCSS, Ngrok, & Neon Tech",
    },
    {
      name: "Cocoon V2: Discover Home Comfort",
      repoUrl: "https://github.com/Ajayaditya-Codes/Cocoon-V2",
      description:
        "Cocoon V2 is a household services marketplace connecting customers with skilled professionals for services like plumbing, electrical repairs, and cleaning. It features real-time service tracking, customer feedback, and a professional management interface to ensure reliable and transparent service delivery.",
      techStack: "Vue.js, Flask, SQLite3, Redis, & Celery",
    },
  ];

  return (
    <motion.div
      className="mx-auto mt-40 flex w-[90vw] flex-col items-center justify-center px-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative flex h-fit w-full items-center justify-center">
        <motion.div
          className="absolute top-[30px] flex w-full border border-[#020817] dark:border-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        ></motion.div>
        <motion.div
          className="w-fit mx-auto bg-white z-10 dark:bg-gray-950 rounded-2xl py-3 text-lg sm:text-2xl font-bold text-[#8a00c4] dark:text-sky-400 px-5 border-2 border-black dark:border-white flex absolute top-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          My Projects
        </motion.div>
      </div>
      <div className="mx-auto my-20 flex w-[90vw] max-w-[1000px] flex-col items-start justify-start px-auto space-y-10">
        {projects.map((project, index) => (
          <motion.div
            className="flex flex-col items-start justify-start"
            key={project.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectCardVariants(index)}
          >
            <h5 className="text-base/7 font-semibold text-[#8a00c4] dark:text-sky-400">
              {project.techStack}
            </h5>
            <h3 className="mt-2 mb-5 text-2xl font-bold sm:text-3xl">
              {project.name}
            </h3>
            <div className="mb-5 -mt-2 flex flex-col md:flex-row gap-x-5">
              {project.url && (
                <LinkPreview url={project.url}>
                  <div className="flex flex-row space-x-3 text-xl font-bold">
                    <p className="underline">View Project</p>
                    <IconTrendingUp />
                  </div>
                </LinkPreview>
              )}
              <LinkPreview url={project.repoUrl}>
                <div className="flex mt-2 md:mt-0 flex-row space-x-3 text-xl font-bold">
                  <p className="underline">View GitHub Repo</p>
                  <IconTrendingUp />
                </div>
              </LinkPreview>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <motion.div
              className="mt-16 w-full border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={dividerVariants}
            ></motion.div>
          </motion.div>
        ))}
      </div>
      <LinkPreview url="https://github.com/Ajayaditya-Codes">
        <motion.div
          className="flex flex-row space-x-2 text-xl text-center sm:text-2xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerLinkVariants}
        >
          <h6 className="underline">View All Projects on GitHub</h6>
          <IconTrendingUp />
        </motion.div>
      </LinkPreview>
    </motion.div>
  );
};

export default ProjectsSection;
