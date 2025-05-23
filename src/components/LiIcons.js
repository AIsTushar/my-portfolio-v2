import { motion, useScroll } from "framer-motion";

function LiIcons({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-black dark:stroke-white">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-pink-400 dark:stroke-green-300 stroke-1 fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="50"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-white dark:fill-black"
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-pink-400 dark:fill-green-300"
        />
      </svg>
    </figure>
  );
}

export default LiIcons;
