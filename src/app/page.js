import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <div className="w-full h-full inline-block z-0 bg-white p-32 xl:p-24 lg:p-16 md:p-16 sm:p-8 pt-0 dark:bg-black  ">
      <div className="flex items-center justify-between w-full dark:text-white lg:flex-col">
        <div className="w-1/2 md:w-full">
          <Image
            src={profilePic}
            alt="Picture"
            className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>

          <div className="flex items-center mt-2 self-start lg:self-center">
            <Link
              href="/azizul_islam_tushar.pdf"
              target="_blank"
              download={true}
              className="flex items-center py-2.5 px-6 bg-black text-white rounded-lg text-lg font-semibold border-2
               border-solid border-transparent hover:bg-white hover:text-black hover:border-black dark:bg-white
                dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white
                md:py-2 md:px-4 md:text-base"
            >
              Resume <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:azizultushar98@gmail.com"
              className="ml-4 text-lg font-medium capitalize underline dark:text-white md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>

        <HireMe />
      </div>
    </div>
  );
}
