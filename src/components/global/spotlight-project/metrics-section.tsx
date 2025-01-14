"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CircleLoader from "@/components/ui/circle-loader";
import { LinkPreview } from "@/components/ui/link-preview";
import { IconDeviceDesktop } from "@tabler/icons-react";

export default function MetricsSection() {
  type metric = {
    name: string;
    value: number;
  };
  const desktop_metrics: metric[] = [
    {
      name: "Performance",
      value: 100,
    },
    {
      name: "Accessibility",
      value: 98,
    },
    {
      name: "Best Practices",
      value: 96,
    },
    {
      name: "SEO",
      value: 100,
    },
  ];

  const mobile_metrics: metric[] = [
    {
      name: "Performance",
      value: 97,
    },
    {
      name: "Accessibility",
      value: 98,
    },
    {
      name: "Best Practices",
      value: 96,
    },
    {
      name: "SEO",
      value: 100,
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

  const sectionVariants = {
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
      className="w-full flex flex-col justify-center items-center space-y-20 max-w-[1000px]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={sectionVariants} className="w-full">
        <LinkPreview
          url="https://pagespeed.web.dev/analysis/https-quirk-v2-vercel-app/jyn5yxt10l?form_factor=desktop"
          className="w-full"
        >
          <div className="flex flex-col space-y-10 w-full justify-center items-center">
            <motion.div
              className="flex flex-row space-x-3 text-2xl font-bold justify-center items-center"
              variants={titleVariants}
            >
              <IconDeviceDesktop />
              <h5>Desktop Metrics</h5>
            </motion.div>
            <div className="grid gap-10 grid-cols-4 border-2 w-full px-auto border-black dark:border-white p-5 rounded-3xl">
              {desktop_metrics.map((metric) => (
                <div
                  className="flex flex-col justify-center items-center py-3 col-span-2 md:col-span-1"
                  key={metric.name}
                >
                  <CircleLoader score={metric.value} />
                  <p className="text-xl font-bold">{metric.name}</p>
                </div>
              ))}
            </div>
          </div>
        </LinkPreview>
      </motion.div>

      <motion.div variants={sectionVariants} className="w-full">
        <LinkPreview
          url="https://pagespeed.web.dev/analysis/https-quirk-v2-vercel-app/jyn5yxt10l?form_factor=mobile"
          className="w-full"
        >
          <div className="flex flex-col space-y-10 w-full justify-center items-center">
            <motion.div
              className="flex flex-row space-x-3 text-2xl font-bold justify-center items-center"
              variants={titleVariants}
            >
              <IconDeviceDesktop />
              <h5>Mobile Metrics</h5>
            </motion.div>
            <div className="grid gap-10 grid-cols-4 border-2 w-full px-auto border-black dark:border-white p-5 rounded-3xl">
              {mobile_metrics.map((metric) => (
                <div
                  className="flex flex-col justify-center items-center py-3 col-span-2 md:col-span-1"
                  key={metric.name}
                >
                  <CircleLoader score={metric.value} />
                  <p className="text-xl font-bold">{metric.name}</p>
                </div>
              ))}
            </div>
          </div>
        </LinkPreview>
      </motion.div>
    </motion.div>
  );
}
