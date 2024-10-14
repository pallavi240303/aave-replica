import React from "react";
import ReadMore from "./heroComponents/ReadMore";
import GetStartedButton from "./heroComponents/GetStartedButton";
import RadarAnimation from "../../assets/HeroSection/RadarAnimation";
import RotatingBar from "@/assets/HeroSection/RotatingBar";
import RotatingBarsAnimation from "./heroComponents/RotatingBarsAnimation";

function HeroSection() {
  return (
    <div className="py-6 md:py-20 mx-auto px-5 bg-white md:px-12 max-w-[1082px]">
      <ReadMore />
      <h1 className="text-[40px] pb-1 md:text-5xl font-semibold  tracking-tight leading-[105%] mb-4 w-full max-w-full md:max-w-[684px]">
        <span className="block relative font-regola-semibold">
          <span className="whitespace-normal">
            Access the full power of DeFi.
          </span>
        </span>
      </h1>

      <div className="opacity-100 will-change-transform transform-none pb-[26px]">
        <p className="max-w-[20em] font-medium text-xl font-inter leading-[150%] tracking-tight text-[#636161]">
          Aave is the world’s largest liquidity protocol. Supply, borrow, swap,
          stake and more.
        </p>
      </div>
      <GetStartedButton />
      <div className="md:py-4  py-4 flex items-center gap-2 font-inter text-sm text-secondaryGray ">
        <RadarAnimation />
        <span className="tracking-tight"><span className="text-primaryGray opacity-90 tracking-wide">$19.21 billion </span>of liquidity currently supplied in Aave.</span>
      </div>
      <RotatingBarsAnimation/>
    </div>
  );
}

export default HeroSection;
