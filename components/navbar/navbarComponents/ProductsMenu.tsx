import '../styles/ProductsMenuAnimation.css'
import React from "react";

interface props{
    isSticky:boolean
}

function ProductsMenu({isSticky}:props) {
  return (
    <div className={` absolute block left-[-120px] transition-all duration-300 ease ${isSticky? 'top-6' : 'top-4'}  text-white rounded-xl bg-background `}>
      <div className="p-3 rounded-2xl border shadow-custom ">
        <div className=" text-left products_menu">
          <a
            href="/"
            className="menu_link p-3 mb-3 block rounded-lg z-0 bg-appBgPurple relative w-[356px] none overflow-hidden text-white "
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="15.1111"
                height="15.1111"
                rx="3"
                fill="#D6D5FF"
              ></rect>
              <rect
                y="18.8906"
                width="15.1111"
                height="15.1111"
                rx="3"
                fill="white"
              ></rect>
              <rect
                x="18.8906"
                width="15.1111"
                height="15.1111"
                rx="3"
                fill="white"
              ></rect>
              <rect
                x="18.8906"
                y="18.8906"
                width="15.1111"
                height="15.1111"
                rx="3"
                fill="#D6D5FF"
              ></rect>
            </svg>
            <p className="mt-3 font-regola-semibold text-sm font-semibold tracking-wide">
              App
            </p>
            <p className="leading-normal">Interact with Aave easily</p>
            <svg
              style={{
                position: "absolute",
                top: "-64px",
                right: "-128px",
              }}
              width="256"
              height="256"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="outer_circle">
                <circle
                  mask="url(#menu1-circle-mask-2)"
                  cx="128"
                  cy="128"
                  r="128"
                  fill="#E2E0FF"
                ></circle>
                <circle
                  mask="url(#menu1-circle-mask-1)"
                  cx="128"
                  cy="128"
                  r="128"
                  fill="#BCBBFF"
                ></circle>
              </g>
              <g className="inner_circle">
                <circle
                  mask="url(#menu1-circle-mask-2)"
                  cx="128"
                  cy="128"
                  r="64"
                  fill="#9896FF"
                ></circle>
                <circle
                  mask="url(#menu1-circle-mask-1)"
                  cx="128"
                  cy="128"
                  r="64"
                  fill="#E2E0FF"
                ></circle>
              </g>
              <defs>
                <mask id="menu1-circle-mask-1">
                  <rect y="128" width="256" height="128" fill="white"></rect>
                </mask>
                <mask id="menu1-circle-mask-2">
                  <rect width="256" height="128" fill="white"></rect>
                </mask>
              </defs>
            </svg>
          </a>
          <a
            href="/"
            className="menu_link p-4 block rounded-lg z-0 bg-ghoBgGreen relative w-[356px] none overflow-hidden text-white "
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
              <path
                d="M13.3477 17.6905C13.3477 19.2412 14.6047 20.4982 16.1553 20.4982C17.706 20.4982 18.963 19.2412 18.963 17.6905C18.963 16.1398 17.706 14.8828 16.1553 14.8828C14.6047 14.8828 13.3477 16.1398 13.3477 17.6905Z"
                fill="white"
              ></path>
              <path
                d="M21.0391 17.6905C21.0391 19.2412 22.2961 20.4982 23.8468 20.4982C25.3974 20.4982 26.6544 19.2412 26.6544 17.6905C26.6544 16.1398 25.3974 14.8828 23.8468 14.8828C22.2961 14.8828 21.0391 16.1398 21.0391 17.6905Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.8704 37.3987V29.8364C27.6919 32.768 24.4258 34.5784 19.9985 34.5784C12.0708 34.5784 5.65234 28.0974 5.65234 20.1154C5.65234 12.1334 12.0708 5.65234 19.9985 5.65234C27.1658 5.65234 33.2736 10.9538 34.3389 17.8864L34.4273 18.4623H29.6811L29.5984 18.0639C28.6699 13.5916 24.7569 10.3355 19.9985 10.3355C14.5402 10.3355 10.1891 14.6159 10.1891 20.1154C10.1891 25.6096 14.5349 29.8128 19.9985 29.8128C24.939 29.8128 28.8696 26.3737 29.5914 21.6478L29.6563 21.2233H34.3423V33.9391C33.0272 35.2921 31.5222 36.4596 29.8704 37.3987Z"
                fill="white"
              ></path>
            </svg>
            <p className="mt-3 font-regola-semibold text-sm font-semibold tracking-wide">
              GHO
            </p>
            <p className="leading-normal">The Aave-native stablecoin.</p>
            <svg
              style={{ position: "absolute", top: "-27px", right: "-17px" }}
              width="138"
              height="179"
              viewBox="0 0 138 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="76"
                r="15"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
                className="c1"
              />
              <circle
                cx="107"
                cy="31"
                r="31"
                fill="#44DD6F"
                style={{ fill: "color(display-p3 0.2655 0.8673 0.434)" }}
                className="c2"
              />
              <circle
                cx="89"
                cy="130"
                r="49"
                fill="#62E687"
                style={{ fill: "color(display-p3 0.3832 0.9005 0.528)" }}
                className="c3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductsMenu;
