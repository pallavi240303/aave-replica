import React from 'react'
interface Props {
  isHovered: boolean;
}
const FaqIcon: React.FC<Props> = ({ isHovered }) =>{
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        >
            <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" stroke="#F1F1F0" fill="#fff"></rect>
            <path
            d="M21 38C17.6863 38 15 35.3137 15 32V32C15 28.6863 17.6863 26 21 26L31 26C35.4183 26 39 29.5817 39 34L39 36C39 37.1046 38.1046 38 37 38L21 38Z"
            fill={`${isHovered ? '#39bfb9' : '#8f8f8f'}`}
            ></path>
            <path
            d="M29 10C32.3137 10 35 12.6863 35 16V16C35 19.3137 32.3137 22 29 22L13 22C11.8954 22 11 21.1046 11 20L11 18C11 13.5817 14.5817 10 19 10L29 10Z"
            fill={`${isHovered ? "#1f807b " : '#8f8f8f'}`}
            ></path>
        </svg>
  )
}

export default FaqIcon
