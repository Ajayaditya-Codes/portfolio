"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  IconBrandOpenai,
  IconSchema,
  IconBrandSpeedtest,
  IconTrendingUp,
} from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import React, { JSX } from "react";

const FeaturesSection: React.FC = (): JSX.Element => {
  type Feature = {
    name: string;
    description: string;
    icon: JSX.Element;
  };

  const features: Feature[] = [
    {
      name: "Dynamic Workflow Automation",
      description:
        "Effortlessly create custom workflows with a drag-and-drop editor. Automate repetitive tasks across GitHub, Slack, and Asana seamlessly to save time and increase efficiency.",
      icon: <IconSchema className="text-[#8a00c4] dark:text-sky-400" />,
    },
    {
      name: "AI-Powered Insights",
      description:
        "Incorporate the Gemini API to enhance workflows with intelligent suggestions. Turn raw data into actionable insights without complex configurations.",
      icon: <IconBrandOpenai className="text-[#8a00c4] dark:text-sky-400" />,
    },
    {
      name: "Optimized Performance and Compatibility",
      description:
        "Built with Next.js, this platform combines lightning-fast performance with seamless TypeScript integration. Benefit from SEO optimization through server-side rendering and dynamic routing, ensuring faster load times and better search engine visibility.",
      icon: <IconBrandSpeedtest className="text-[#8a00c4] dark:text-sky-400" />,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
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

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden py-24 sm:py-32"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.p
                className="text-base/7 font-semibold text-[#8a00c4] dark:text-sky-400"
                variants={titleVariants}
              >
                Streamline Your Team’s Productivity
              </motion.p>
              <motion.h2
                className="mt-2 text-pretty text-5xl font-semibold tracking-tight"
                variants={titleVariants}
              >
                Quirk V2 - the GitHub Automata
              </motion.h2>

              <div className="flex flex-col md:flex-row gap-x-5">
                <LinkPreview url="https://quirk-v2.vercel.app">
                  <div className="mt-5 text-xl flex flex-row space-x-3 font-bold">
                    <p className="underline">View Project </p>
                    <IconTrendingUp />
                  </div>
                </LinkPreview>
                <LinkPreview url="https://github.com/Ajayaditya-Codes/Quirk-V3">
                  <div className="mt-2 md:mt-5 text-xl flex flex-row space-x-3 font-bold">
                    <p className="underline">View GitHub Repo </p>
                    <IconTrendingUp />
                  </div>
                </LinkPreview>
              </div>

              <div className="mt-10 max-w-xl space-y-8 text-xl lg:max-w-none">
                {features.map((feature) => (
                  <motion.div
                    className="flex flex-col space-y-3"
                    key={feature.name}
                    variants={featureVariants}
                  >
                    <div className="flex flex-row space-x-2 justify-start items-center">
                      {feature.icon}
                      <h3 className="font-semibold text-pretty">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Product images */}
          <Image
            alt="Product screenshot"
            src="/hero-dark-sm.png"
            width={2800}
            height={2000}
            className="dark:flex hidden w-[55rem] max-w-none rounded-xl shadow-xl sm:w-[75rem] md:-ml-4 lg:-ml-0"
          />
          <Image
            alt="Product screenshot"
            src="/hero-light-sm.png"
            width={2800}
            height={2000}
            className="dark:hidden flex w-[55rem] max-w-none rounded-xl shadow-xl sm:w-[75rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
