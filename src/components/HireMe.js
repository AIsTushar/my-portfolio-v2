import Link from "next/link";
import { CircularText } from "./Icons";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-36 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-black animate-spin-slow"} />
        <Link
          className="flex items-center justify-center absolute bg-black text-white font-semibold text-sm w-16 h-16 rounded-full shadow-md border border-solid border-black hover:bg-white hover:text-black"
          href="mailto:azizultushar98@gmail.com"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
