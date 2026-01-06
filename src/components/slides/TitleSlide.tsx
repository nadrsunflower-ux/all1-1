'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

export default function TitleSlide() {
  return (
    <div className="title-gradient w-full h-full flex flex-col items-center justify-center text-center">
      <AnimatedElement delay={0.1}>
        <p className="text-[#64ffda] text-lg tracking-[8px] font-light mb-5">
          2026. 01. 07
        </p>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h1 className="text-6xl font-bold mb-8 gradient-text">
          1월 1차 전체 회의
        </h1>
      </AnimatedElement>

      <AnimatedElement delay={0.3}>
        <p className="text-[#8892b0] text-2xl font-normal">
          마케팅 & 생일이벤트 팀
        </p>
      </AnimatedElement>

      <AnimatedElement delay={0.4}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded-full text-[#64ffda]"
        >
          발표자: 유선화
        </motion.div>
      </AnimatedElement>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#64ffda]/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
