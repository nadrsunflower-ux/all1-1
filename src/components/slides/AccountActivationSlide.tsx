'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

export default function AccountActivationSlide() {
  const stats = [
    { icon: '👀', value: '18.7만', label: '조회수', change: '↑ 상승' },
    { icon: '💬', value: '2.3천', label: '반응', change: '↑ 상승' },
    { icon: '👥', value: '161', label: '새 팔로워', change: '↑ 상승' },
    { icon: '🔄', value: '28', label: '공유 콘텐츠', change: '회원님이 공유' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-6 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          2-1. 악센트 아이디 계정 활성화 및 인플루언서 협업
        </h2>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <p className="text-[#8892b0] text-lg mb-8">
          12월부터 <span className="text-[#64ffda] font-semibold">뿌리는 덕질 디퓨저</span> 런칭을 준비하면서 악센트 아이디 계정과 인플루언서 협업을 통해 계정을 활성화
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-4 gap-8 w-full mt-6">
        {stats.map((stat, index) => (
          <AnimatedElement key={index} delay={0.3 + index * 0.1}>
            <motion.div
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(100, 255, 218, 0.1)' }}
              className="bg-gradient-to-br from-[#64ffda]/10 to-[#4ecdc4]/5 border border-[#64ffda]/20 rounded-[20px] p-9 text-center transition-all duration-300"
            >
              <div className="text-[2.5rem] mb-4">{stat.icon}</div>
              <div className="text-[2.8rem] font-bold text-[#64ffda] mb-2">{stat.value}</div>
              <div className="text-base text-[#8892b0] mb-2">{stat.label}</div>
              <div className="text-sm text-[#4ade80]">{stat.change}</div>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.8}>
        <p className="text-[#8892b0] mt-6 text-sm">
          * 10~11월 대비 수치
        </p>
      </AnimatedElement>
    </div>
  );
}
