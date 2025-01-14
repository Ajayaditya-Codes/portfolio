import React, { JSX } from "react";
import { IconTrendingUp } from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";

type Project = {
  name: string;
  repoUrl: string;
  url?: string;
  description: string;
  techStack: string;
};

const ProjectsSection: React.FC = (): JSX.Element => {
  const projects: Project[] = [
    {
      name: "Quirk V1: Pioneering Workflow Automation",
      url: "https://quirk-v1.vercel.app",
      repoUrl: "https://github.com/Ajayaditya-Codes/Quirk-V1",
      description:
        "Quirk V1 is the initial iteration of a drag-and-drop workflow automation tool designed to integrate seamlessly with platforms like GitHub, Slack, and Asana. While offering foundational automation capabilities, Quirk V1 lacks the AI integration, responsive design, advanced analytics, and many other notable features of its successor. It served as a strong proof of concept, focusing on core automation and user-friendly interfaces.",
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
    <div className="mx-auto mt-40 flex w-[90vw] flex-col items-center justify-center px-auto">
      <div className="relative flex h-fit w-full items-center justify-center">
        <div className="absolute top-[30px] flex w-full border border-[#020817] dark:border-white"></div>
        <div className="absolute top-0 z-10 flex h-[60px] w-fit items-center justify-center rounded-2xl border-2 border-black bg-white px-5 py-3 text-2xl font-bold text-[#8a00c4] dark:border-white dark:bg-gray-950 dark:text-sky-400">
          My Projects
        </div>
      </div>
      <div className="mx-auto mt-40 mb-20 flex w-[90vw] max-w-[1000px] flex-col items-start justify-start px-auto space-y-10">
        {projects.map((project) => (
          <div
            className="flex flex-col items-start justify-start"
            key={project.name}
          >
            <h5 className="text-xl font-bold text-[#8a00c4] dark:text-sky-400">
              {project.techStack}
            </h5>
            <h3 className="mt-2 mb-5 text-2xl font-bold sm:text-3xl">
              {project.name}
            </h3>
            <div className="mb-5 -mt-2 flex flex-row gap-x-5">
              {project.url && (
                <LinkPreview url={project.url}>
                  <div className="flex flex-row space-x-3 text-xl font-bold">
                    <p className="underline">View Project</p>
                    <IconTrendingUp />
                  </div>
                </LinkPreview>
              )}
              <LinkPreview url={project.repoUrl}>
                <div className="flex flex-row space-x-3 text-xl font-bold">
                  <p className="underline">View GitHub Repo</p>
                  <IconTrendingUp />
                </div>
              </LinkPreview>
            </div>
            <p className="text-pretty text-xl font-medium md:text-2xl">
              {project.description}
            </p>
            <div className="mt-16 w-full border"></div>
          </div>
        ))}
      </div>
      <LinkPreview
        url="https://github.com/Ajayaditya-Codes"
        className="flex flex-row space-x-2 text-2xl font-bold"
      >
        <h6 className="underline">View All Projects on GitHub</h6>
        <IconTrendingUp />
      </LinkPreview>
    </div>
  );
};

export default ProjectsSection;
