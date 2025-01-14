export default function LogoCloud() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center flex flex-col">
        <h2 className="text-center text-xl font-semibold">
          The Tools Behind My Craft
        </h2>
        <div className="mx-auto mt-10 dark:grid hidden grid-cols-4 items-center gap-x-10 gap-y-10 ">
          <img
            alt="Next.Js"
            src="/next-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <img
            alt="TailwindCSS"
            src="/tailwindcss-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <img
            alt="ShadCN"
            src="/shadcn-ui-dark.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <div className="flex flex-row space-x-3 justify-center items-center col-span-2 lg:col-span-1">
            <img
              alt="TypeScript"
              src="/typescript.svg"
              width={158}
              height={48}
              className=" w-[50px] object-contain "
            />
            <h6 className="text-2xl font-bold">TypeScript</h6>
          </div>
        </div>
        <div className="mx-auto mt-10 grid dark:hidden grid-cols-4 items-center gap-x-10 gap-y-10">
          <img
            alt="Next.Js"
            src="/next.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <img
            alt="TailwindCSS"
            src="/tailwindcss.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <img
            alt="ShadCN"
            src="/shadcn-ui.svg"
            width={158}
            height={48}
            className="col-span-2 w-[200px] object-contain lg:col-span-1"
          />
          <img
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
}
