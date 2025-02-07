"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLinks = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute h-[1px] bg-black left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

function Navbar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative">
      <nav>
        <CustomLinks title="Home" href="/" className="mr-4" />
        <CustomLinks title="About" href="/about" className="mx-4" />
        <CustomLinks title="Projects" href="/projects" className="mx-4" />
        <CustomLinks title="Blog" href="/blog" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 ml-3"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
      </nav>

      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
