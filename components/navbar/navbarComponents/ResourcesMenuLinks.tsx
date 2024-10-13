import BrandIcon from '@/assets/resourcesMenu/BrandIcon';
import FaqIcon from '@/assets/resourcesMenu/FaqIcon';
import GovernanceIcon from '@/assets/resourcesMenu/GovernanceIcon';
import HelpIcon from '@/assets/resourcesMenu/HelpIcon';


function ResourcesMenuLinks() {
  return (
    <div
      className={` absolute block `}
    >
      
        <div className="resource_menu pt-4">
          <div className="grid grid-flow-col  auto-cols-max transition-all duration-300 ease-in-out rounded-lg hover:bg-tertiaryGray menu_link"
            
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2   w-full">
              <BrandIcon isHovered={true}/>
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
            
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2   w-full">
              <FaqIcon isHovered={true}/>
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
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2  w-full">
              <HelpIcon isHovered={true}/>
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
            
          >
            <a className=" flex items-center gap-x-3 relative z-0 rounded-lg py-2   w-full">
            <GovernanceIcon isHovered={true}/>
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
      </div>
  )
}

export default ResourcesMenuLinks
