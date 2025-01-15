"use client";

import React, { JSX } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Tech = {
  name: string;
  src: string;
  dark_src?: string;
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TechStack: React.FC = (): JSX.Element => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const tech_stack: Tech[] = [
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "React.Js", src: "/react-logo.svg" },
    {
      name: "Next.Js",
      src: "/nextjs-icon.svg",
      dark_src: "/nextjs-icon-dark.svg",
    },
    { name: "TailwindCSS", src: "/tailwindcss-logo.svg" },
    { name: "ShadCN", src: "/shadcn.svg", dark_src: "/shadcn-dark.svg" },
    { name: "Zustand", src: "/zustand.svg" },
    { name: "Capacitor.Js", src: "/capacitorjs.svg" },
    { name: "Chakra UI", src: "/chakraui.svg" },
    { name: "Neon Tech", src: "/neon.svg" },
    { name: "Clerk Auth", src: "/clerk.svg", dark_src: "/clerk-dark.svg" },
    { name: "Drizzle ORM", src: "/drizzle.png" },
    { name: "PrismaDB", src: "/Prisma.svg", dark_src: "/Prisma-dark.svg" },
    { name: "Supabase", src: "/supabase.svg" },
    { name: "GraphQL", src: "/graphql.svg" },
    {
      name: "Express.Js",
      src: "/expressjs.svg",
      dark_src: "/expressjs-dark.svg",
    },
    { name: "Python", src: "/python.svg" },
    { name: "Git", src: "/Git.svg" },
    { name: "Sentry", src: "/sentry.svg", dark_src: "/sentry-dark.svg" },
  ];

  return (
    <div className="mx-auto flex w-[90vw] max-w-[1000px] flex-col items-start justify-start px-auto">
      <motion.h5
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-xl font-bold text-[#8a00c4] dark:text-sky-400"
      >
        Tech Stack
      </motion.h5>
      <motion.h3
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="mt-2 mb-5 text-2xl font-bold sm:text-3xl"
      >
        Technologies I Leverage for Seamless Development
      </motion.h3>
      <motion.div
        ref={gridRef}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
        variants={gridVariants}
        className="mt-5 grid w-fit grid-cols-3 gap-5 self-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
      >
        {tech_stack.map((tech) => (
          <TooltipProvider key={tech.name}>
            <Tooltip>
              <TooltipTrigger>
                <motion.div
                  className="aspect-square col-span-1 flex flex-col items-center justify-center p-5 hover:scale-125 ease-in-out"
                  variants={techItemVariants}
                >
                  <Image
                    alt={`Logo of ${tech.name}`}
                    src={tech.src}
                    width={100}
                    height={100}
                    className={
                      "w-full object-contain" +
                      (tech.dark_src ? " dark:hidden flex" : "")
                    }
                  />
                  {tech.dark_src && (
                    <Image
                      alt={`Dark mode logo of ${tech.name}`}
                      src={tech.dark_src}
                      width={100}
                      height={100}
                      className="hidden w-full object-contain dark:flex"
                    />
                  )}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xl">{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
