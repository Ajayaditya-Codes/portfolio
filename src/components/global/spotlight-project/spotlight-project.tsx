import FeaturesSection from "./features-section";
import LogoCloud from "./logo-cloud";
import MetricsSection from "./metrics-section";

export default function SpotlightProject() {
  return (
    <div className="w-[90vw] flex flex-col justify-center items-center mx-auto px-auto my-40">
      <div className="relative w-full h-fit justify-center items-center flex">
        <div className="w-full border absolute top-[30px] flex border-black dark:border-white"></div>
        <div className="w-fit mx-auto bg-white z-10 dark:bg-gray-950 rounded-2xl py-3 text-2xl font-bold text-[#8a00c4] dark:text-sky-400 px-5 border-2 border-black dark:border-white flex absolute top-0 h-[60px]">
          Spotlight Project
        </div>
      </div>
      <FeaturesSection />
      <MetricsSection />
      <LogoCloud />
    </div>
  );
}
