"use client";

import React, { useState } from "react";
import NavMenu from "./navbarComponents/NavMenu";
import useSticky from "@/utils/hooks/useSticky";
import Button from "./navbarComponents/Button";
import AaveLogo from "@/assets/AaveLogo";
import useIsMedia from "@/utils/hooks/useIsMedia";
import ProductsMenuLinks from "./navbarComponents/ProductsMenuLinks";
import ResourcesMenuLinks from "./navbarComponents/ResourcesMenuLinks";
import DeveloperMenuLinks from "./navbarComponents/DeveloperMenuLinks";

function Navbar() {
  const isSticky = useSticky();
  const isMobile = useIsMedia();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`flex sticky justify-between items-center max-w-[1082px] h-14 mx-auto px-6 bg-white md:px-12 transition-all duration-300 ease-in-out ${
        isSticky
          ? "top-0 shadow-custom "
          : isMobile
          ? "top-0 py-1 "
          : "top-6 pb-0"
      }`}
    >
      <AaveLogo />
      <div className="justify-between items-center hidden md:flex">
        <NavMenu isSticky={isSticky} />
        <Button />
      </div>
      <button
        className={`md:hidden block before:content-[''] after:content-[''] duration-200 ease-in-out w-8 h-8 bg-none relative before:duration-200 after:duration-200 before:top-[32%] before:absolute before:left-[13%] before:right-[13%] before:h-0.5 before:bg-primaryGray after:bottom-[32%] after:absolute after:left-[13%] after:right-[13%] after:h-0.5 after:bg-primaryGray ${
          isMenuOpen
            ? "before:translate-y-[6px] before:rotate-45 after:-translate-y-[4px] after:-rotate-45 rotate-90"
            : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></button>

        {isMenuOpen && (
          <div className="block md:hidden z-[99999] fixed inset-0 top-12 overflow-y-scroll  px-3 pt-6  bg-white duration-200 ease">
            <ProductsMenuLinks/>
            <h2 className="text-primaryGray font-regola-medium text-lg pt-6">
              Resources
            </h2>
            <ResourcesMenuLinks/>
            <h2 className="text-primaryGray font-regola-medium text-lg pt-72">
              Developers
            </h2>
            <DeveloperMenuLinks/>
          </div>
        )}
    </div>
  );
}

export default Navbar;
