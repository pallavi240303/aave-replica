"use client"
import { motion } from 'framer-motion';

const radarOut = {
  initial: { r: 0, opacity: 1 },
  active: {
    r: 16, 
    opacity: 0, 
    transition: {
      duration: 1.5,
      repeatDelay: 0.5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const radarIn = {
  initial: { r: 3.5 }, 
  active: {
    r: [3.5, 4.5, 3.5], 
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const RadarAnimation = () => {
  return (
    <svg className="overflow-visible " width="13" height="13">
      <motion.circle
        initial="initial"
        animate="active"
        variants={radarOut}
        cx="6.5" 
        cy="6.5" 
        r="0" 
        fill="#E2E0FF"
        className="origin-center"
      />
      <motion.circle
        initial="initial"
        animate="active"
        variants={radarIn}
        cx="6.5"
        cy="6.5"
        r="3.5" 
        fill="#9896FF"
        className="origin-center"
      />
    </svg>
  );
};

export default RadarAnimation;
