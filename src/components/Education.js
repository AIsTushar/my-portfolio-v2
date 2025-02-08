"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className=" capitalize text-2xl font-bold">
          {position}&nbsp;{" "}
          <a href={companyLink} target="_blank" className="text-blue-500">
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-black/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
          className=" absolute left-[2.15rem] top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            position=" Intern"
            company="Facebook"
            companyLink="https://www.facebook.com/"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          />

          <Details
            position=" Intern"
            company="Facebook"
            companyLink="https://www.facebook.com/"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          />

          <Details
            position=" Intern"
            company="Facebook"
            companyLink="https://www.facebook.com/"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          />
          <Details
            position=" Intern"
            company="Facebook"
            companyLink="https://www.facebook.com/"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
