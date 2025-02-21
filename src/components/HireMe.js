import Link from "next/link";
import { CircularText } from "./Icons";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-36 md:w-20 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-black animate-spin-slow dark:fill-white"}
        />
        <Link
          className="flex items-center justify-center absolute bg-black text-white font-semibold text-sm md:text-[9px] w-16 h-16 md:h-10 md:w-10 rounded-full shadow-md border border-solid border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white dark:shadow-none "
          href="mailto:azizultushar98@gmail.com"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
