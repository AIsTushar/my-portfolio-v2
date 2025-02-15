"use client";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import img_1 from "../../../public/images/blog/img_1.jpg";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const FramerImage = motion.create(Image);

const HoverImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouseMove(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link}>
      <h2
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" capitalize text-xl font-semibold hover:underline"
      >
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        ref={imgRef}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className="w-96 z-10 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Blog = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5 } }}
      className="flex items-center justify-between relative w-full bg-white text-black dark:bg-black dark:text-white px-4 py-6 my-4 first:mt-0 rounded-xl border border-solid border-black dark:border-white border-r-4 border-b-4"
    >
      <HoverImg title={title} img={img} link={link} />
      <span className="text-sm text-pink-400 dark:text-green-300 font-semibold">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedBlog = ({ img, title, time, summery, link }) => {
  return (
    <li className="col-span-1 relative w-full p-4 bg-white dark:bg-black border border-black dark:border-white rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 rounded-[2.5rem] w-[101%] h-[103%] bg-black dark:bg-white rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <Link href={link}>
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2 ">{summery}</p>
      <span className="text-pink-400 font-semibold dark:text-green-300">
        {time}
      </span>
    </li>
  );
};

function page() {
  return (
    <main className="flex flex-col w-full items-center justify-center overflow-hidden ">
      <div className="w-full h-full inline-block z-0 bg-white p-32 pt-16 dark:bg-black dark:text-white">
        <AnimatedText text="Words Can Change the World!" className="mb-16" />

        <ul className="grid grid-cols-2 gap-16">
          <FeaturedBlog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            time="9 min read"
            summery="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          />
          <FeaturedBlog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            time="9 min read"
            summery="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          />
        </ul>

        <h2 className="text-4xl font-bold w-full text-center my-16 mt-32">
          All Blogs
        </h2>

        <ul>
          <Blog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            date="April 12, 2021"
          />

          <Blog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            date="April 12, 2021"
          />
          <Blog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            date="April 12, 2021"
          />

          <Blog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            date="April 12, 2021"
          />
          <Blog
            img={img_1}
            link="/"
            title="How To Build A Custom Pagination Component In Reactjs From Scratch"
            date="April 12, 2021"
          />
        </ul>
      </div>
    </main>
  );
}

export default page;
