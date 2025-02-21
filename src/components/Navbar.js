"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

import { useState } from "react";

const CustomLinks = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute h-[1px] bg-black left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-white`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLinks = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute h-[1px] bg-white left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-black`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-white z-10 lg:px-16 md:px-12 sm:px-8">
      {/* Hamburger */}
      <button
        className="relative flex-col w-6 h-6 hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`absolute h-0.5 w-full transition-all duration-300 bg-black dark:bg-white rounded-md ${
            isOpen ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>

        <span
          className={`absolute h-0.5 w-full transition-all duration-300 bg-black dark:bg-white rounded-md ${
            isOpen ? "opacity-0 translate-x-2" : "opacity-100"
          }`}
        ></span>

        <span
          className={`absolute h-0.5 w-full transition-all duration-300 bg-black dark:bg-white rounded-md ${
            isOpen ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>

      {/* Full Screen Menu */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full flex items-center justify-between lg:hidden"
      >
        <nav>
          <CustomLinks title="Home" href="/" className="mr-4" />
          <CustomLinks title="About" href="/about" className="mx-4" />
          <CustomLinks title="Projects" href="/projects" className="mx-4" />
          <CustomLinks title="Blog" href="/blog" className="ml-4" />
        </nav>

        {/* Social Midea Icons */}
        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3 sm:mx-1 bg-white dark:bg-black rounded-full"
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
            className="w-6 mx-3 sm:mx-1"
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
            className="w-6 ml-3 sm:ml-1"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          <button
            className={`ml-3 rounded-full flex items-center justify-center w-6 ${
              mode === "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={toggleTheme}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </motion.div>

      {/* Mobile Screen Menu */}
      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] z-30 bg-black/75
       dark:bg-white/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLinks
              title="Home"
              href="/"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLinks
              title="About"
              href="/about"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLinks
              title="Projects"
              href="/projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLinks
              title="Blog"
              href="/blog"
              className=""
              toggle={handleClick}
            />
          </nav>

          {/* Social Midea Icons */}
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

            <button
              className={`ml-3 rounded-full flex items-center justify-center w-6 ${
                mode === "light" ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={toggleTheme}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-black"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}

      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;

{
  /* <button
className="flex flex-col justify-center items-center w-6 h-6 relative"
onClick={handleClick}
aria-label="Menu"
>
<span
  className={`absolute h-0.5 w-full rounded-sm transition-all duration-300 bg-black dark:bg-white ${
    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
  }`}
></span>
<span
  className={`absolute h-0.5 w-full rounded-sm transition-all duration-300 bg-black dark:bg-white ${
    isOpen ? "opacity-0 translate-x-2" : "opacity-100"
  }`}
></span>
<span
  className={`absolute h-0.5 w-full rounded-sm transition-all duration-300 bg-black dark:bg-white ${
    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
  }`}
></span>
</button> */
}
