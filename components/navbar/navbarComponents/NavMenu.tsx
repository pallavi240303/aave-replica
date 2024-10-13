"use client";

import React, { useState } from "react";
import ProductsMenu from "./ProductsMenu";
import ResourcesMenu from "./ResourcesMenu";
import DevelopersMenu from "./DevelopersMenu";
import Tooltip from "@/assets/DropDownTooltip";

interface props {
  isSticky: boolean;
}

function NavMenu({ isSticky }: props) {
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isDevelopersHovered, setIsDevelopersHovered] = useState(false);

  return (
    <div>
      <nav className="flex justify-center items-center mr-4 transition-all duration-300 ease-in-out">
        <div className="flex relative justify-center items-center gap-2">
          <div
            className="relative"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
          >
            <button className="py-[9px] px-4 rounded-full text-sm font-inter tracking-[-0.09px] leading-[105%] font-medium hover:bg-tertiaryGray before:content-[''] before:absolute before:top-8 before:-left-78 before:w-10 before:h-full cursor-pointer">
              Products
            </button>
            {isProductsHovered && <Tooltip x={30} y={isSticky ? 50 : 42} />}
            {isProductsHovered && (
              <div className="absolute top-full left-0">
                <ProductsMenu isSticky={isSticky} />
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsResourcesHovered(true)}
            onMouseLeave={() => setIsResourcesHovered(false)}
          >
            <button className="py-[9px] px-4 rounded-full text-sm font-medium font-inter tracking-[-0.09px] leading-[105%] hover:bg-tertiaryGray before:content-[''] before:absolute before:top-8 before:-left-78 before:w-10 before:h-full cursor-pointer">
              Resources
            </button>
            {isResourcesHovered && <Tooltip x={30} y={isSticky ? 50 : 42} />}
            {isResourcesHovered && (
              <div className="absolute top-full left-[-70px]">
                <ResourcesMenu isSticky={isSticky} />
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsDevelopersHovered(true)}
            onMouseLeave={() => setIsDevelopersHovered(false)}
          >
            <button className="py-[9px] px-4 rounded-full text-sm font-medium font-inter tracking-[-0.09px] leading-[105%] hover:bg-tertiaryGray before:content-[''] before:absolute before:top-8 before:-left-78 before:w-10 before:h-full cursor-pointer">
              Developers
            </button>
            {isDevelopersHovered && <Tooltip x={30} y={isSticky ? 50 : 42} />}
            {isDevelopersHovered && (
              <div className="absolute top-full left-[-180px]">
                <DevelopersMenu isSticky={isSticky} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavMenu;
