import React from "react";

const Button: React.FC = () => {
  return (
    <a
      className=" inline-block relative left-0 rounded-full  px-4 py-[9px] bg-primaryGray text-white text-sm font-medium font-inter leading-[105%] tracking-[-0.09px] transition-all duration-150 ease-in-out hover:opacity-80 hover:pr-8 hover:-ml-4 hover:left-2 group"
      href="https://app.aave.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open App
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="absolute bottom-2 right-3 transition-opacity duration-150 ease-in-out opacity-0 group-hover:opacity-100 " 
      >
        <path
          d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </a>
  );
};

export default Button;
