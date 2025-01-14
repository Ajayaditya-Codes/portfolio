export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center w-screen fixed top-0 right-0 h-fit py-5 px-3 sm:px-5 md:px-7 bg-transparent z-50 backdrop-blur-md">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#8a00c4] dark:text-sky-400">
        Ajayaditya
      </h2>
      <a
        href="mailto:ajayaditya.dev@proton.me"
        className="px-3 py-2 rounded-xl shadow-lg bg-[#8a00c4] text-white font-semibold text-lg md:text-xl"
      >
        Get in Touch
      </a>
    </div>
  );
}
