import React, { JSX } from "react";
import About from "@/components/global/about";
import HeroSection from "@/components/global/hero-section";
import Navbar from "@/components/global/navbar";
import SpotlightProject from "@/components/global/spotlight-project/spotlight-project";
import ThemeToggle from "@/components/theming/theme-toggle";
import LogoCloud from "@/components/global/logo-cloud";
import ProjectsSection from "@/components/global/projects-section";
import TechStack from "@/components/global/tech-stack";

const Home = (): JSX.Element => {
  return (
    <div className="w-full h-fit">
      <Navbar />
      <main className="flex flex-col justify-center">
        <HeroSection />
        <LogoCloud />
        <SpotlightProject />
        <TechStack />
        <ProjectsSection />
        <About />
        <footer className="w-full flex flex-row space-x-5 items-center justify-center md:text-base text-sm text-center mb-10">
          <p>© Ajayaditya, {new Date().getFullYear()}.</p>
          <ThemeToggle />
        </footer>
      </main>
    </div>
  );
};

export default Home;
