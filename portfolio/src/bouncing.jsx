import * as React from "react";
import { motion } from "framer-motion";

//This code was insipired by the bounce example at:
//github.com/Darth-Knoppix/loading-animation/blob/master/src/BouncingBall.jsx
export default function AnimatedBall () {
  const transitionValues = {
    duration: 1,
    ease: "easeIn",
    repeat: Infinity,
    repeatType: "reverse",
    // repeatDelay: 0.5,
  };

  const ballStyle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "black",
    borderRadius: "5rem",
    marginRight: "auto",
    marginLeft: "auto"
  };

  return (
    <motion.span
      style={ballStyle}
      transition={{
        y: transitionValues,
        height: transitionValues,
        width: transitionValues,
      }}
      animate={{
        y: ["2rem", "8rem", "10rem"],
        height: ["5rem", "2rem", "5rem"],
        width: ["1rem", "2rem", "5rem"],
      }}
     className=" text-5xl"> Y </motion.span>
  );
};
