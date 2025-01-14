import Image from "next/image";
import React, { JSX } from "react";

const LogoCloud: React.FC = (): JSX.Element => {
  return (
    <div className="py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold">
          The Tools Behind My Craft
        </h2>
        <div className="mx-auto mt-10 hidden grid-cols-4 items-center gap-x-10 gap-y-10 dark:grid">
          <Image
            alt="Next.Js"
            src="/next-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="TailwindCSS"
            src="/tailwindcss-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="ShadCN"
            src="/shadcn-ui-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <div className="col-span-2 flex flex-row items-center justify-center space-x-3 lg:col-span-1">
            <Image
              alt="TypeScript"
              src="/typescript.svg"
              width={158}
              height={48}
              className="w-[50px] object-contain"
            />
            <h6 className="text-2xl font-bold">TypeScript</h6>
          </div>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-10 gap-y-10 dark:hidden">
          <Image
            alt="Next.Js"
            src="/next.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="TailwindCSS"
            src="/tailwindcss.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="ShadCN"
            src="/shadcn-ui.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <Image
            alt="React.Js"
            src="/react.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
