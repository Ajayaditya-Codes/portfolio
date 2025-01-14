import { IconTrendingUp } from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";

export default function ProjectsSection() {
  type project = {
    name: string;
    repoUrl: string;
    url?: string;
    description: string;
    techStack: string;
  };

  const projects: project[] = [
    {
      name: "Quirk V1: Pioneering Workflow Automation",
      url: "https://quirk-v1.vercel.app",
      repoUrl: "https://github.com/Ajayaditya-Codes/Quirk-V1",
      description:
        "Quirk V1 is the initial iteration of a drag-and-drop workflow automation tool designed to integrate seamlessly with platforms like GitHub, Slack, and Asana. While offering foundational automation capabilities, Quirk V1 lacks the AI integration, responsive design, advanced analytics and many other notable features of its successor. It served as a strong proof of concept, focusing on core automation and user-friendly interfaces.",
      techStack:
        "Next.js, React Flow, Zustand, Clerk Auth, TailwindCSS, Ngrok, Neon Tech",
    },
    {
      name: "Cocoon V2: Discover Home Comfort",
      repoUrl: "https://github.com/Ajayaditya-Codes/Cocoon-V2",
      description:
        "Cocoon V2 is a household services marketplace connecting customers with skilled professionals for services like plumbing, electrical repairs, and cleaning. It features real-time service tracking, customer feedback, and a professional management interface to ensure reliable and transparent service delivery.",
      techStack: "Vue.js, Flask, SQLite3, Redis, Celery",
    },
  ];

  return (
    <div className="w-[90vw] flex flex-col justify-center items-center mx-auto px-auto mt-40">
      <div className="relative w-full h-fit justify-center items-center flex">
        <div className="w-full border absolute top-[30px] flex border-[#020817] dark:border-white"></div>
        <div className="w-fit mx-auto bg-white z-10 dark:bg-gray-950 rounded-2xl py-3 text-2xl font-bold text-[#8a00c4] dark:text-sky-400 px-5 border-2 border-black dark:border-white flex absolute top-0 h-[60px]">
          My Projects
        </div>
      </div>
      <div className="w-[90vw] max-w-[1000px] flex flex-col justify-start items-start mx-auto px-auto mt-40 mb-20 space-y-10">
        {projects.map((project) => (
          <div
            className="flex flex-col justify-start items-start"
            key={project.name}
          >
            <h5 className="text-xl font-bold text-[#8a00c4] dark:text-sky-400">
              {project.techStack}
            </h5>

            <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-5">
              {project.name}
            </h3>
            <div className="flex flex-row gap-x-5 -mt-2 mb-5">
              {project.url && (
                <LinkPreview url={project.repoUrl}>
                  <div className=" text-xl flex flex-row space-x-3 font-bold">
                    <p className="underline">View Project </p>
                    <IconTrendingUp />
                  </div>
                </LinkPreview>
              )}

              <LinkPreview url={project.repoUrl}>
                <div className="text-xl flex flex-row space-x-3 font-bold">
                  <p className="underline">View GitHub Repo </p>
                  <IconTrendingUp />
                </div>
              </LinkPreview>
            </div>
            <p className="text-pretty text-xl md:text-2xl font-medium">
              {project.description}
            </p>
            <div className="flex container border w-full mt-16"></div>
          </div>
        ))}
      </div>
      <LinkPreview
        url="https://github.com/Ajayaditya-Codes"
        className="flex flex-row space-x-2 font-bold text-2xl"
      >
        <h6 className="underline">View All Projects on GitHub</h6>
        <IconTrendingUp />
      </LinkPreview>
    </div>
  );
}
