"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import FeaturesSection from "./features-section";
import LogoCloud from "./logo-cloud";
import MetricsSection from "./metrics-section";

const SpotlightProject: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.05, // Trigger animation when 20% of the section is visible
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      className="w-[90vw] flex flex-col justify-center items-center mx-auto px-auto my-40"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="relative w-full h-fit justify-center items-center flex">
        <motion.div
          className="absolute top-[30px] flex w-full border border-[#020817] dark:border-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        ></motion.div>
        <motion.div
          className="w-fit mx-auto bg-white z-10 dark:bg-gray-950 rounded-2xl py-3 text-2xl font-bold text-[#8a00c4] dark:text-sky-400 px-5 border-2 border-black dark:border-white flex absolute top-0 h-[60px]"
          variants={titleVariants}
        >
          Spotlight Project
        </motion.div>
      </div>

      <FeaturesSection />
      <MetricsSection />
      <LogoCloud />
    </motion.div>
  );
};

export default SpotlightProject;
