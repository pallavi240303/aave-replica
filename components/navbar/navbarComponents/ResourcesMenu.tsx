import BrandIcon from "@/assets/resourcesMenu/BrandIcon";
import FaqIcon from "@/assets/resourcesMenu/FaqIcon";
import GovernanceIcon from "@/assets/resourcesMenu/GovernanceIcon";
import HelpIcon from "@/assets/resourcesMenu/HelpIcon";
import ResourceMenuIllustration from "@/assets/resourcesMenu/ResoucesIllustration";
import React, { useState } from "react";
interface props {
  isSticky: boolean;
}
function ResourcesMenu({ isSticky }: props) {

    const [isHovered,setIsHovered] =useState<string | null>(null);

  return (
    <div
      className={` absolute block left-[-120px] transition-all duration-300 ease z-[100] bg-white ${
        isSticky ? "top-6" : "top-4"
      }  text-white rounded-xl bg-background `}
    >
      <div className=" flex p-3 rounded-2xl border shadow-custom gap-2 ml-[-30px] bg-white transition-all duration-300 ease-in-out">
        <div className="transition-all duration-300 ease-in-out">
          <div className="grid grid-flow-col  auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("brand")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 px-2  w-full">
              <BrandIcon isHovered={isHovered === "brand"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                  Brand
                </p>
                <p className="text-sm font-inter leading-[150%] -tracking-[.09px] text-secondaryGray">
                  Assets, examples and guides.
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-flow-col auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("faq")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
              <FaqIcon isHovered={isHovered === "faq"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                  FAQ
                </p>
                <p className="text-sm font-regola-regular leading-[150%] -tracking-[.09px] text-secondaryGray">
                  Answers to common questions.
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-flow-col auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("help")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
              <HelpIcon isHovered={isHovered === "help"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                  Help & Support
                </p>
                <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-secondaryGray">
                  Guides, articles and more.
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-flow-col auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("governance")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
            <GovernanceIcon isHovered={isHovered === "governance"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                  Governance
                </p>
                <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-secondaryGray">
                  The Aave Governance forum.
                </p>
              </div>
            </a>
          </div>
        </div>
        <ResourceMenuIllustration />
      </div>
    </div>
  );
}

export default ResourcesMenu;
