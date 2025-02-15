"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 mx-auto first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize text-2xl font-bold">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-slate-500">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="mb-32 font-bold text-8xl text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-[2.15rem] top-0 w-[4px] h-full bg-black origin-top dark:bg-white"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            type="Computer Science And Engineering"
            time="Summer 2021"
            place="East West University"
            info="I have completed my bachelor's degree in Computer Science and Engineering from East West University. Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Web Programming."
          />

          <Details
            type="Computer Science And Engineering"
            time="Summer 2021"
            place="East West University"
            info="I have completed my bachelor's degree in Computer Science and Engineering from East West University. Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Web Programming."
          />

          <Details
            type="Computer Science And Engineering"
            time="Summer 2021"
            place="East West University"
            info="I have completed my bachelor's degree in Computer Science and Engineering from East West University. Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Web Programming."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
