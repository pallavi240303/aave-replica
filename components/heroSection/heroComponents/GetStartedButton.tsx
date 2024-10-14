"use client";
import React from "react";
import { motion } from "framer-motion";
function GetStartedButton() {
  const rainbowWrap = {
    hidden: {scaleX : 0.9 , scaleY : 0.8},
    hover : {
      scaleX:  [0.95,1,1,0.95],
      scaleY: [0.8,1,1,0.8],
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const rainbowRotate = {
    hidden: {rotate: -180},
    hover : {
      rotate: 180,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const Button = {
    hidden: {backgroundColor: '#ffffff', boxShadow: '0 0 0 1.5px rgba(0,0,0,.06)'},
    hover: {
      backgroundColor: "#fcfcfb",
      boxShadow: '0 0 0 1.5px rgba(0,0,0,.06)',
      transition : {
        duration: 0.15,
        ease: "easeInOut"
      }
    }
  }


  return (
    <motion.div
    initial="hidden"
    animate="hidden"
    whileHover="hover"
    className="relative inline-flex items-center"
    >
      <motion.a variants={Button} className="z-[2] relative inline-flex items-center gap-x-[6px] bg-white  py-[9px] pr-4 pl-5 rounded-full  max-w-[150px] justify-center  px-3   gap-2">
        <motion.span className="font-regola-medium text-primaryGray">Get Started</motion.span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <path
            d="M4.5 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </motion.a>
      <motion.span
      variants={rainbowWrap}
        className="z-1 absolute -inset-[3px] rounded-full overflow-hidden "
      >
        <motion.span variants={rainbowRotate} className="absolute bg-rainbow-background -inset-y-[200%] -inset-x-[25%]"></motion.span>
      </motion.span>
    </motion.div>
  );
}

export default GetStartedButton;
