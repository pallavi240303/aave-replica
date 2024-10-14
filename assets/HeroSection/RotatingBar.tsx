"use client"
import React, { useEffect, useRef, useState } from 'react';
import { delay, motion, useMotionValue } from 'framer-motion';

interface Props{
  stroke: string,
  innerRectColor: string,
  outerRectColor: string,
  translateX : number,
  translateY : number,
  delay :number
}

const RotatingBar: React.FC<Props> = ({stroke ,innerRectColor,outerRectColor,translateX = 0, translateY = 0 ,delay}) => {
  const rotation = useMotionValue(0);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);

  const [leaving, setLeaving] = useState(false);
  const lastMoveTime = useRef(Date.now());
  const lastTorque = useRef(0);

  const handleMouseMove = (e: { movementX: number; movementY: number; }) => {
    velocityX.set(e.movementX);
    velocityY.set(e.movementY);
    lastMoveTime.current = Date.now();
    setLeaving(false);
  };

  const handleMouseEnter = () => {
    setLeaving(false);
  };

  const handleMouseLeave = () => {
    setLeaving(true);
    // Capture the current velocity to continue rotation
    const combinedTorque = velocityX.get() + velocityY.get();
    lastTorque.current = combinedTorque;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastMove = Date.now() - lastMoveTime.current;

      if (leaving) {
        // Apply inertia after leaving
        const currentRotation = rotation.get();
        const inertia = lastTorque.current / 8; 
        const slowedRotation = currentRotation + inertia;
        rotation.set(slowedRotation);

        // Apply a slowing factor based on torque
        lastTorque.current *= 0.9; 
        if (Math.abs(lastTorque.current) < 0.01) {
          clearInterval(interval);
        }
      } else {
        const currentRotation = rotation.get();
        rotation.set(currentRotation + (velocityX.get() + velocityY.get()) / 10); 
      }
    }, 16); 

    return () => clearInterval(interval);
  }, [leaving, rotation, velocityX, velocityY]);

  const y = {translateY};

  const variants = {

    hidden: {
      translateY: 600,
      opacity: 0,
    },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay:delay,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.g
    variants={variants}
    initial="hidden"
      animate="visible"
      style={{
        originX: '50%',
        originY: '50%',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <g transform={`scale(1.5) translate(${translateX}, ${translateY})`}>
        <path d="M50 50L50 303" stroke={stroke} strokeWidth="100" strokeLinecap="round" />
        <mask id="mask0_4272_2676" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <circle cx="50" cy="50" r="50" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4272_2676)">
          <g>
            <motion.g
              style={{
                originX: '50px',
                originY: '50px',
                rotate: rotation, 
              }}
            >
              <rect width="100" height="100" fill={innerRectColor}/>
              <rect width="50" height="100" fill={outerRectColor} />
              <mask id="mask1_4272_2676" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="25" y="25" width="50" height="50">
                <circle cx="50" cy="50" r="25" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask1_4272_2676)">
                <rect x="25" y="25" width="50" height="50" fill={innerRectColor} />
                <rect x="50" y="25" width="25" height="50" fill={outerRectColor} />
              </g>
            </motion.g>
          </g>
        </g>
      </g>
    </motion.g>
  );
};

export default RotatingBar;
