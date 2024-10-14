import RotatingBar from "@/assets/HeroSection/RotatingBar";
import React from "react";

function RotatingBarsAnimation() {
  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="985"
        height="438"
        fill="none"
        viewBox="0 0 985 438"
        className=" block overflow-visible m-0 md:-mt-[110px] mx-auto mb-0 px-2  w-full h-auto align-top max-w-none md:max-w-[1082px]"
      >
        <g clipPath="url(#hero-animation-mask)">
          <g transform="scale(1.1)">
            <g opacity="1"></g>
            <RotatingBar
              stroke="#d9f7ff"
              innerRectColor={"#39d0fa"}
              outerRectColor={"#a7e8fc"}
              translateX={0}
              translateY={145}
            />
              <RotatingBar
                stroke="#fff8a6"
                innerRectColor={"#ffb300"}
                outerRectColor={"#ffd500"}
                translateX={101}
                translateY={140}
              />
            <RotatingBar
              stroke="#82ede8"
              innerRectColor={"#00827c"}
              outerRectColor={"#39bfb9"}
              translateX={203}
              translateY={130}
            />
            <RotatingBar
              stroke="#96e8ff"
              innerRectColor={"#0088ff"}
              outerRectColor={"#00aeff"}
              translateX={305}
              translateY={115}
            />

            <RotatingBar
              stroke="#ffc48c"
              innerRectColor={"#ff3300"}
              outerRectColor={"#ff8030"}
              translateX={407}
              translateY={80}
            />
            <RotatingBar
              stroke="#e2e0ff"
              innerRectColor={"#9896ff"}
              outerRectColor={"#bcbaff"}
              translateX={509}
              translateY={40}
            />
          </g>
        </g>
        <clipPath id="hero-animation-mask">
            <rect width="1185" height="1438" x="-100" y="-1000" fill="#fff"></rect>
            </clipPath>
      </svg>
      <div>
        
      </div>
    </div>
  );
}

export default RotatingBarsAnimation;
