import React, { JSX } from "react";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="fixed top-0 right-0 z-50 flex w-screen flex-row items-center justify-between bg-transparent px-3 py-5 h-fit backdrop-blur-md sm:px-5 md:px-7">
      <h2 className="text-2xl font-semibold tracking-tight text-[#8a00c4] dark:text-sky-400 md:text-3xl">
        Ajayaditya
      </h2>
      <a
        href="mailto:ajayaditya.dev@proton.me"
        className="rounded-xl bg-[#8a00c4] px-3 py-2 text-lg font-semibold text-white shadow-lg md:text-xl"
      >
        Get in Touch
      </a>
    </div>
  );
};

export default Navbar;
