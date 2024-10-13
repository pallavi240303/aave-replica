import BugBountyIcon from "@/assets/developersMenu/BugBountyIcon";
import DeveloperIllustration from "@/assets/developersMenu/DeveloperIllustration";
import DocumentationIcon from "@/assets/developersMenu/DocumentationIcon";
import SecurityIcon from "@/assets/developersMenu/SecurityIcon";
import React, { useState } from "react";
interface props {
  isSticky: boolean;
}
const DevelopersMenu:React.FC<props> = ({isSticky}) => {
  const [isHovered,setIsHovered] =useState<string | null>(null);

  return (
    <div
      className={` absolute block left-[-120px] ${
        isSticky ? "top-6" : "top-4"
      }  text-white rounded-xl bg-background `}
    >
      <div className=" flex p-3 rounded-2xl border shadow-custom gap-2 ml-[-30px]">
        <div className="resource_menu">
          <div className="grid grid-flow-col  auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("doc")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 px-2  w-full">
              <DocumentationIcon isHovered={isHovered === "doc"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                Documentation
                </p>
                <p className="text-sm font-inter leading-[150%] -tracking-[.09px] text-secondaryGray">
                Technical guides for developers.
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-flow-col auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("security")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
              <SecurityIcon isHovered={isHovered === "security"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                Security
                </p>
                <p className="text-sm font-regola-regular leading-[150%] -tracking-[.09px] text-secondaryGray">
                Audit reports and information.
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-flow-col auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            onMouseEnter={() => setIsHovered("bug")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
              <BugBountyIcon isHovered={isHovered === "bug"}/>
              <div className="">
                <p className="text-sm font-regola-medium leading-[120%] tracking-[.1px] text-primaryGray">
                Bug Bounty
                </p>
                <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-secondaryGray">
                  
                </p>
              </div>
            </a>
          </div>
          
        </div>
        <DeveloperIllustration/>
      </div>
    </div>
  )
}

export default DevelopersMenu
