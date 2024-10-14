import React from 'react'

function ReadMore() {
  return (
    <div className="pb-5 pt-[14px] ">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#221d1d] text-xs font-inter font-medium leading-[105%] tracking-[-0.01em] py-[8px] pl-3 px-3 rounded-full bg-[#f7f6f6] transition-all duration-100 ease-in-out hover:bg-[#f0f0ef]"
        >
          <span>Introducing Aave&#39;s new visual identity</span>
          <span className="inline-block w-1 h-1 rounded-full bg-[#bcbbbb]"></span>
          <div className="flex items-center gap-2 text-[#636161] text-xs font-inter  leading-[105%] tracking-normal">
            <span>Read more</span>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5H9.94444M9.94444 5L6.44444 1.5M9.94444 5L6.44444 8.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </a>
      </div>
  )
}

export default ReadMore
