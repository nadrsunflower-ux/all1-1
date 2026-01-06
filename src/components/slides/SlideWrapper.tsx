'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  direction: number;
  className?: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function SlideWrapper({ children, direction, className = '' }: SlideWrapperProps) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className={`absolute inset-0 flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
