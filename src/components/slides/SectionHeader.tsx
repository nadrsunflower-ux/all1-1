'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center section-gradient">
      <AnimatedElement delay={0.1} direction="scale">
        <motion.div
          className="w-24 h-24 rounded-full bg-[#64ffda]/10 border-2 border-[#64ffda]/50 flex items-center justify-center mb-8"
          animate={{
            boxShadow: ['0 0 20px rgba(100, 255, 218, 0.2)', '0 0 40px rgba(100, 255, 218, 0.4)', '0 0 20px rgba(100, 255, 218, 0.2)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-4xl font-bold text-[#64ffda]">{number}</span>
        </motion.div>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-5xl font-bold mb-4 text-white">{title}</h2>
      </AnimatedElement>

      {subtitle && (
        <AnimatedElement delay={0.3}>
          <p className="text-xl text-[#8892b0]">{subtitle}</p>
        </AnimatedElement>
      )}

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#64ffda]/30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-l from-transparent to-[#64ffda]/30" />
    </div>
  );
}
