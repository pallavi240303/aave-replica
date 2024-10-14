import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'regola-regular': ['var(--font-ft-regola-neue-regular)'],
        'regola-medium': ['var(--font-ft-regola-neue-medium)'],
        'regola-semibold': ['var(--font-ft-regola-neue-semibold)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
        'inter': ['var(--font-inter)'],
      },
      
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.06) 0px 1px 0px 0px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryGray: "var(--primary-gray)",
        secondaryGray: "var(--secondary-gray)",
        tertiaryGray: "var(--tertiary-gray)",
        ghoBgGreen: "var(--gho-bg-green)",
        appBgPurple: "var(--app-bg-purple)",
        iconPrimaryGray: "var(--icon-primary-gray)",
        iconSecondaryGray: "var(--icon-secondary-gray)",
        buttonBorderGray: "var(--button-border-gray)",
      },
      backgroundImage: {
        'rainbow-background': 'conic-gradient(from 0deg at 50% 50%, #ff8947 0deg, #b5e7fa 124.43deg, #9896ff 179.13deg, #63bbb6 233.53deg, #ffd631 308.53deg, #ff8947 364.52deg)',
      },
      keyframes: {
        blink: {
          '0%': { transform: 'translateX(0)', visibility: 'visible' },
          '20%': { transform: 'translateX(-26px)', visibility: 'visible' },
          '40%': { transform: 'translateX(26px)', visibility: 'visible' },
          '60%': { transform: 'translateX(0)', visibility: 'visible' },
          '70%, 72%': { visibility: 'hidden' },
          '73%, 75%': { visibility: 'visible' },
          '76%, 78%': { visibility: 'hidden' },
          '79%, 81%': { visibility: 'visible' },
          '100%': { transform: 'translateX(0)', visibility: 'visible' },
        },
      },
      animation: {
        blink: 'blink 5s linear infinite ', 
      },
    },
  },
  plugins: [],
};
export default config;
