import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TechStack() {
  type tech = {
    name: string;
    src: string;
    dark_src?: string;
  };

  const tech_stack: tech[] = [
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "React.Js", src: "/react-logo.svg" },
    {
      name: "Next.Js",
      src: "/nextjs-icon.svg",
      dark_src: "/nextjs-icon-dark.svg",
    },
    { name: "TailwindCSS", src: "/tailwindcss-logo.svg" },
    { name: "ShadCN", src: "/shadcn.svg", dark_src: "/shadcn-dark.svg" },
    { name: "Zustand", src: "/zustand.svg" },
    { name: "Capacitor.Js", src: "/capacitorjs.svg" },
    { name: "Chakra UI", src: "/chakraui.svg" },
    { name: "Neon Tech", src: "/neon.svg" },
    { name: "Clerk Auth", src: "/clerk.svg", dark_src: "/clerk-dark.svg" },
    { name: "Drizzle ORM", src: "/drizzle.png" },
    { name: "PrismaDB", src: "/Prisma.svg", dark_src: "/Prisma-dark.svg" },
    { name: "Supabase", src: "/supabase.svg" },
    { name: "GraphQL", src: "/graphql.svg" },
    {
      name: "Express.Js",
      src: "/expressjs.svg",
      dark_src: "/expressjs-dark.svg",
    },
    { name: "Python", src: "/python.svg" },
    { name: "Git", src: "/Git.svg" },
    { name: "Sentry", src: "/sentry.svg", dark_src: "/sentry-dark.svg" },
  ];

  return (
    <div className="w-[90vw] max-w-[1000px] flex flex-col justify-start items-start mx-auto px-auto mb-40">
      <h5 className="text-xl font-bold text-[#8a00c4] dark:text-sky-400">
        Tech Stack
      </h5>
      <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-5">
        Technologies I Leverage for Seamless Development
      </h3>
      <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 self-center w-fit gap-5">
        {tech_stack.map((tech) => (
          <TooltipProvider key={tech.name}>
            <Tooltip>
              <TooltipTrigger>
                <div className="col-span-1 hover:scale-125 ease-in-out animate-in aspect-square flex flex-col items-center justify-center p-5">
                  <img
                    alt={tech.name}
                    src={tech.src}
                    width={100}
                    height={100}
                    className={
                      "w-full object-contain" +
                      (tech.dark_src ? " dark:hidden flex" : "")
                    }
                  />
                  {tech.dark_src && (
                    <img
                      alt={tech.name}
                      src={tech.dark_src}
                      width={100}
                      height={100}
                      className="w-full object-contain dark:flex hidden"
                    />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xl">{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
