"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Navbar: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="fixed top-0 right-0 z-50 flex w-screen flex-row items-center justify-between bg-transparent px-3 py-5 h-fit backdrop-blur-sm sm:px-5 md:px-7"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.h2
        className="text-2xl font-semibold tracking-tight text-[#8a00c4] dark:text-sky-400 md:text-3xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Ajayaditya
      </motion.h2>
      <motion.a
        href="mailto:ajayaditya.dev@proton.me"
        className="rounded-xl bg-[#8a00c4] px-3 py-2 text-lg font-semibold text-white shadow-lg md:text-xl"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#9c27b0",
          boxShadow: "0px 4px 15px rgba(140, 0, 196, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Get in Touch
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
