"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CircleLoader({ score }: { score: number }) {
  const radius = 54; // Circle radius
  const circumference = 2 * Math.PI * radius; // Full circle circumference

  // Calculate stroke offset based on score
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const ref = useRef(null); // Reference for the element
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-32 h-32"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#005500"
          strokeWidth="8"
          fill="none"
        />
        {/* Animated foreground circle */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#00ff00"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeLinecap="round"
          animate={
            isInView
              ? { strokeDashoffset }
              : { strokeDashoffset: circumference }
          }
          initial={{ strokeDashoffset: circumference }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      {/* Centered score text */}
      <div className="absolute text-3xl font-semibold font-electrolize">
        {score}
      </div>
    </div>
  );
}
