"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useInView } from "react-intersection-observer";

const LogoCloud: React.FC = (): JSX.Element => {
  type Logo = {
    name: string;
    src: string;
    dark_src?: string;
  };

  const logos: Logo[] = [
    { name: "Next.Js", src: "/next.svg", dark_src: "/next-dark.svg" },
    {
      name: "TypeScript",
      src: "/typescript-logomark.png",
      dark_src: "/typescript-logomark-dark.png",
    },
    {
      name: "TailwindCSS",
      src: "/tailwindcss.svg",
      dark_src: "/tailwindcss-dark.svg",
    },
    { name: "ShadCN", src: "/shadcn-ui.svg", dark_src: "/shadcn-ui-dark.svg" },
    {
      name: "React Flow",
      src: "/reactflow.png",
      dark_src: "/reactflow-dark.png",
    },
    {
      name: "Zustand",
      src: "/zustand-logomark.png",
      dark_src: "/zustand-logomark-dark.png",
    },
    {
      name: "Drizzle ORM",
      src: "/drizzle-logomark.png",
      dark_src: "/drizzle-logomark-dark.png",
    },
    { name: "Kinde Auth", src: "/kinde.png", dark_src: "/kinde-dark.png" },
    {
      name: "Nodejs",
      src: "/nodejs-logomark.svg",
      dark_src: "/nodejs-logomark-dark.svg",
    },
    {
      name: "Sentry",
      src: "/sentry-logomark.svg",
      dark_src: "/sentry-logomark-dark.svg",
    },
    { name: "Ngrok", src: "/ngrok.svg", dark_src: "/ngrok-dark.svg" },
    {
      name: "Vercel",
      src: "/vercel-logomark.svg",
      dark_src: "/vercel-logomark-dark.svg",
    },
    {
      name: "Git",
      src: "/git-logomark.svg",
      dark_src: "/git-logomark-dark.svg",
    },
    { name: "Yarn", src: "/yarn.svg" },
  ];

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Variants for the heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full flex flex-col space-y-10 justify-center items-center pt-52">
      <motion.h5
        className="text-2xl font-semibold"
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        Loved by Teams, Quirk V2 is Built Using
      </motion.h5>
      <InfiniteMovingCards items={logos} speed="normal" pauseOnHover={false} />
    </div>
  );
};

export default LogoCloud;
