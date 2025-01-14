"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { JSX } from "react";

const LogoCloud: React.FC = (): JSX.Element => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Start animation when 20% of the section is visible
  });

  // Container and Item Variants for smoother animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger time
        delayChildren: 0.6, // Slightly reduced delay for children to appear
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }, // Reduced duration for quicker animation
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Added some delay for a more "hero" effect
    },
  };

  return (
    <motion.div
      ref={ref}
      className="py-24"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8">
        <motion.h2
          className="text-center text-xl font-semibold"
          variants={headingVariants} // Added animation to the heading
        >
          The Tools Behind My Craft
        </motion.h2>

        {/* Dark Theme Logos */}
        <motion.div
          className="mx-auto mt-10 hidden grid-cols-4 items-center gap-x-10 gap-y-10 dark:grid"
          variants={itemVariants}
        >
          <Image
            alt="Next.Js"
            src="/next-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="TailwindCSS"
            src="/tailwindcss-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="ShadCN"
            src="/shadcn-ui-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <div className="col-span-2 flex flex-row items-center justify-center space-x-3 lg:col-span-1">
            <Image
              alt="TypeScript"
              src="/typescript.svg"
              width={158}
              height={48}
              className="w-[50px] object-contain"
            />
            <h6 className="text-2xl font-bold">TypeScript</h6>
          </div>
        </motion.div>

        {/* Light Theme Logos */}
        <motion.div
          className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-10 gap-y-10 dark:hidden"
          variants={itemVariants}
        >
          <Image
            alt="Next.Js"
            src="/next.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="TailwindCSS"
            src="/tailwindcss.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="ShadCN"
            src="/shadcn-ui.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="React.Js"
            src="/react.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoCloud;
