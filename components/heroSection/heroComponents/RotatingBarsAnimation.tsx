"use client";

import RotatingBar from "@/assets/HeroSection/RotatingBar";
import { motion } from "framer-motion";
import React from "react";

function RotatingBarsAnimation() {
  const variants = {
    hidden: {
      width: "0%",
      opacity: 0,
    },
    visible: {
      width: "100%",
      opacity: [100],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <div className="flex relative pt-16 md:pt-0 overflow-hidden md:overflow-visible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="985"
          height="438"
          fill="none"
          viewBox="0 0 985 438"
          className=" block overflow-visible m-0 md:-mt-[110px] mx-auto mb-0 px-2 md:px-12 w-full h-auto align-top max-w-none md:max-w-[1082px]"
        >
          <g clipPath="url(#hero-animation-mask)">
            <g transform="scale(1.08)">
              <g opacity="1"></g>
              <RotatingBar
                stroke="#d9f7ff"
                innerRectColor={"#39d0fa"}
                outerRectColor={"#a7e8fc"}
                translateX={0}
                translateY={145}
                delay={0.4}
              />
              <RotatingBar
                stroke="#fff8a6"
                innerRectColor={"#ffb300"}
                outerRectColor={"#ffd500"}
                translateX={101}
                translateY={140}
                delay={0.45}
              />
              <RotatingBar
                stroke="#82ede8"
                innerRectColor={"#00827c"}
                outerRectColor={"#39bfb9"}
                translateX={203}
                translateY={130}
                delay={0.5}
              />
              <RotatingBar
                stroke="#96e8ff"
                innerRectColor={"#0088ff"}
                outerRectColor={"#00aeff"}
                translateX={305}
                translateY={115}
                delay={0.55}
              />

              <RotatingBar
                stroke="#ffc48c"
                innerRectColor={"#ff3300"}
                outerRectColor={"#ff8030"}
                translateX={407}
                translateY={80}
                delay={0.6}
              />
              <RotatingBar
                stroke="#e2e0ff"
                innerRectColor={"#9896ff"}
                outerRectColor={"#bcbaff"}
                translateX={509}
                translateY={40}
                delay={0.65}
              />
            </g>
          </g>
          <clipPath id="hero-animation-mask">
            <rect
              width="1185"
              height="1438"
              x="-100"
              y="-1000"
              fill="#fff"
            ></rect>
          </clipPath>
        </svg>
      </div>
      <div className="flex justify-center w-full">
        <motion.div
          className="h-1 bg-rainbow-gradient-bar rounded-full"
          variants={variants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  );
}

export default RotatingBarsAnimation;
