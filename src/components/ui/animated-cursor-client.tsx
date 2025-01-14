"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function AnimatedCursorClient() {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={30}
      color="193, 11, 111"
      outerAlpha={0.5}
      innerScale={1.2}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
