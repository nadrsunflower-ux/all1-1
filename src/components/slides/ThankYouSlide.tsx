'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Heart, MessageCircle, Mail } from 'lucide-react';

export default function ThankYouSlide() {
  return (
    <div className="title-gradient w-full h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Animated background particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${10 + (i % 6) * 15}%`,
            top: `${20 + Math.floor(i / 6) * 40}%`,
            backgroundColor: i % 2 === 0 ? 'rgba(100, 255, 218, 0.3)' : 'rgba(167, 139, 250, 0.3)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      <AnimatedElement delay={0.2} direction="scale">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#a78bfa]/20 flex items-center justify-center mb-8 border-2 border-[#64ffda]/30"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: ['0 0 0px rgba(100, 255, 218, 0)', '0 0 40px rgba(100, 255, 218, 0.4)', '0 0 0px rgba(100, 255, 218, 0)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="w-16 h-16 text-[#64ffda]" />
        </motion.div>
      </AnimatedElement>

      <AnimatedElement delay={0.3}>
        <h1 className="text-6xl font-bold mb-6 gradient-text">
          감사합니다
        </h1>
      </AnimatedElement>

      <AnimatedElement delay={0.4}>
        <p className="text-2xl text-[#8892b0] mb-8">
          질문이 있으시면 말씀해주세요
        </p>
      </AnimatedElement>

      <AnimatedElement delay={0.5}>
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 bg-[#64ffda]/10 rounded-full border border-[#64ffda]/30"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
          >
            <MessageCircle className="w-5 h-5 text-[#64ffda]" />
            <span className="text-[#64ffda]">Q&A</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-6 py-3 bg-[#a78bfa]/10 rounded-full border border-[#a78bfa]/30"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(167, 139, 250, 0.2)' }}
          >
            <Mail className="w-5 h-5 text-[#a78bfa]" />
            <span className="text-[#a78bfa]">피드백</span>
          </motion.div>
        </motion.div>
      </AnimatedElement>

      <AnimatedElement delay={0.7}>
        <motion.p
          className="absolute bottom-10 text-[#8892b0] text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          마케팅 & 생일이벤트 팀 | 발표자: 유선화
        </motion.p>
      </AnimatedElement>
    </div>
  );
}
