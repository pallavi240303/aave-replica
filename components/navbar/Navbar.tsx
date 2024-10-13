"use client";


import React from "react";
import NavMenu from "./navbarComponents/NavMenu";
import useSticky from "@/utils/hooks/useSticky";
import Button from "./navbarComponents/Button";
import AaveLogo from "@/assets/AaveLogo";
import useIsMedia from "@/utils/hooks/useIsMedia";

function Navbar() {
  const isSticky = useSticky();
  const isMobile = useIsMedia();
  return (
    <div
      className={`flex sticky justify-between items-center max-w-[1082px] h-14 mx-auto px-6 bg-white md:px-12 transition-all duration-300 ease-in-out ${
         isSticky ? "top-0 shadow-custom " : isMobile? "top-0 py-1 " : "top-6 pb-0"
      }`}
    >
      <AaveLogo />
      <div className="justify-between items-center hidden md:flex">
        <NavMenu isSticky={isSticky} />
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
