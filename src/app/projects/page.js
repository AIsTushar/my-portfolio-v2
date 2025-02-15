"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import img_1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion.create(Image);

const FeaturedProjects = ({ type, title, summery, image, link, gitLink }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-black bg-white dark:bg-black dark:border-white shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 rounded-[2.5rem] w-[101%] h-[103%] bg-black dark:bg-white rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-pink-400 dark:text-green-300 font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:underline-white"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-white">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-black dark:text-white">{summery}</p>

        <div className="flex items-center mt-2">
          <Link href={gitLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 bg-black text-white dark:bg-white dark:text-black py-2 px-4 rounded-lg text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, gitLink }) => {
  return (
    <article className="w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white dark:border-white dark:bg-black p-6">
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg"
      >
        <div className="absolute top-0 -right-3 -z-10 rounded-[2rem] w-[101%] h-[103%] bg-black dark:bg-white rounded-br-3xl" />
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-pink-400 dark:text-green-300 font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="flex items-center justify-between mt-2 w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2"
          >
            Visit
          </Link>
          <Link href={gitLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function Page() {
  return (
    <main className="flex flex-col w-full mb-16 items-center justify-center dark:text-white">
      <div className="w-full h-full inline-block z-0 bg-white p-32 pt-16 dark:bg-black">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

        <div className="grid grid-col-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProjects
              title="Crypto Screener Application"
              type="Featured Project"
              summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              image={img_1}
              link="https://crypto-screener.netlify.app/"
              gitLink="www.github.com"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              type="Featured Project"
              summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              image={img_1}
              link="https://crypto-screener.netlify.app/"
              gitLink="www.github.com"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              type="Featured Project"
              summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              image={img_1}
              link="https://crypto-screener.netlify.app/"
              gitLink="www.github.com"
            />
          </div>

          <div className="col-span-12">
            <FeaturedProjects
              title="Crypto Screener Application"
              type="Featured Project"
              summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              image={img_1}
              link="https://crypto-screener.netlify.app/"
              gitLink="www.github.com"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              type="Featured Project"
              summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              image={img_1}
              link="https://crypto-screener.netlify.app/"
              gitLink="www.github.com"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              type="Featured Project"
              summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              image={img_1}
              link="https://crypto-screener.netlify.app/"
              gitLink="www.github.com"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
