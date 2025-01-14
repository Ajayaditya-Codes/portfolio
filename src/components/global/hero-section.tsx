"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = (): JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger time
        delayChildren: 0.2, // Slightly reduced delay for children to appear
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

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }, // Faster background transition
    },
  };
  return (
    <motion.div
      className="relative isolate pt-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
        <motion.div
          style={{
            clipPath:
              "polygon(40% 0%, 70% 10%, 100% 0%, 90% 30%, 100% 60%, 80% 80%, 60% 100%, 40% 80%, 20% 100%, 0% 70%, 10% 40%, 0% 20%, 40% 0%)",
          }}
          className="absolute left-1/4 top-0 -z-10 h-[40vh] w-[80vw] -translate-x-1/2 rotate-[25deg] bg-gradient-to-tr from-[#93c5fd] via-[#bfdbfe] to-[#e5c8f6] opacity-50 dark:from-[#1e3a8a] dark:via-[#3b516f] dark:to-[#5e3d70]"
          variants={backgroundVariants}
        />
        <motion.div
          style={{
            clipPath:
              "polygon(30% 0%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%, 30% 0%)",
          }}
          className="absolute left-[60%] top-10 -translate-x-1/2 h-[35vh] w-[70vw] rotate-[50deg] bg-gradient-to-bl from-[#bfdbfe] via-[#d7c1f3] to-[#f3ccfa] opacity-40 dark:from-[#3b516f] dark:via-[#504d6f] dark:to-[#70478a]"
          variants={backgroundVariants}
        />
        <motion.div
          style={{
            clipPath:
              "polygon(25% 0%, 75% 10%, 90% 30%, 90% 70%, 75% 90%, 25% 90%, 10% 70%, 10% 30%, 25% 0%)",
          }}
          className="absolute left-[30%] top-[50%] -translate-x-1/2 h-[30vh] w-[60vw] rotate-[10deg] bg-gradient-to-br from-[#d7c1f3] via-[#e5c8f6] to-[#f9e0fc] opacity-60 dark:from-[#504d6f] dark:via-[#70478a] dark:to-[#8f5da2]"
          variants={backgroundVariants}
        />
      </div>

      <motion.div className="mx-auto py-32" variants={itemVariants}>
        {/* Greeting */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative py-2 text-center text-xl font-bold text-gray-600 dark:text-gray-300">
            Hey There, 👋
          </div>
        </motion.div>

        {/* Title and Description */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="px-2 text-balance text-7xl font-semibold tracking-tight md:text-8xl">
            I&apos;m{" "}
            <span className="text-[#8a00c4] dark:text-sky-400">Ajayaditya</span>
          </h1>
          <p className="mt-8 text-2xl font-medium text-gray-500 dark:text-gray-100 sm:text-3xl">
            `Creating Seamless Experience` <br /> Full Stack Next.Js Developer
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-y-6 gap-x-6 md:flex-row md:gap-y-0"
          variants={itemVariants}
        >
          <a
            href="mailto:ajayaditya.dev@proton.me"
            className="z-50 rounded-xl bg-[#8a00c4] px-3 py-2 text-lg font-semibold text-white shadow-lg md:text-xl"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Gradient */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        variants={backgroundVariants}
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
