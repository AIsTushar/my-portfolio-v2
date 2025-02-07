"use client";

import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePhoto from "../../../public/images/profile/developer-pic-2.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const sprintValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    sprintValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
    console.log("hello");
    return () => unsubscribe();
  }, [sprintValue, value]);

  return <span ref={ref}></span>;
};

function page() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <div className="w-full h-full inline-block z-0 bg-white p-32 pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />

        <div className="grid grid-cols-8 w-full gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
              About Me
            </h2>
            <p className="font-medium">
              Hi, I&lsquo;m Azizul Islam Tushar, a web developer and UI/UX
              designer with a passion for creating beautiful, functional, and
              user-centered digital experiences. With 4 years of experience in
              the field. I am always looking for new and innovative ways to
              bring my clients&lsquo; visions to life.
            </p>
            <p className="my-4 font-medium">
              I believe that design is about more than just making things look
              pretty - it&lsquo;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&lsquo;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          {/* Profile Pictire */}
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
            <div className="absolute top-0 -right-3 -z-10 rounded-[2rem] w-[102%] h-[103%] bg-black" />
            <Image
              src={profilePhoto}
              alt="My photo"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Numbers */}

          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="text-6xl font-bold">
                <AnimatedNumber value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/75">
                Something
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center">
              <span className="text-6xl font-bold">
                <AnimatedNumber value={40} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/75">
                Something
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center">
              <span className="text-6xl font-bold">
                <AnimatedNumber value={10} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/75">
                Something
              </h2>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </main>
  );
}

export default page;
