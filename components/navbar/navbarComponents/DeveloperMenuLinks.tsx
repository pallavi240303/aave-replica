import BugBountyIcon from '@/assets/developersMenu/BugBountyIcon'
import DocumentationIcon from '@/assets/developersMenu/DocumentationIcon'
import SecurityIcon from '@/assets/developersMenu/SecurityIcon'
import React from 'react'

function DeveloperMenuLinks() {
  return (
    <div
      className={` absolute block pb-16`}
    >
      
        <div className="resource_menu pt-4">
          <div className="grid grid-flow-col  auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 px-2  w-full">
              <DocumentationIcon isHovered={true}/>
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
            
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
              <SecurityIcon isHovered={true}/>
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
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4  w-full">
              <BugBountyIcon isHovered={true}/>
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
      </div>
  )
}

export default DeveloperMenuLinks
