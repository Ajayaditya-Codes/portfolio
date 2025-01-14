import About from "@/components/global/about";
import HeroSection from "@/components/global/hero-section";
import LogoCloud from "@/components/global/logo-cloud";
import Navbar from "@/components/global/navbar";
import ProjectsSection from "@/components/global/projects-section";
import SpotlightProject from "@/components/global/spotlight-project/spotlight-project";
import TechStack from "@/components/global/tech-stack";
import ThemeToggle from "@/components/theming/theme-toggle";

export default function Home() {
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
        <footer className="w-full flex flex-row space-x-5 items-center justify-center md:text-base text-sm  text-center mb-10">
          <p>© Ajayaditya, 2025.</p>
          <ThemeToggle />
        </footer>
      </main>
    </div>
  );
}
