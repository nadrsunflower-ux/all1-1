'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

export default function AdditionalTasksSlide() {
  const tasks = [
    {
      icon: '📝',
      title: 'GPA 코리아 리뷰 준비중',
      description: '뿌디 진행 중, 가지고 있는 예산 범위 내에서 다양한 시도 예정',
    },
    {
      icon: '🎨',
      title: '악센트 아이디 배너 재디자인',
      description: '뿌디가 추가된 만큼 새롭게 걸어둘 배너를 재디자인할 예정',
    },
    {
      icon: '📋',
      title: '뿌덕디퓨저 예약관리 인수인계 매커니즘 확립',
      description: '체계적인 예약관리 시스템을 통한 원활한 인수인계 진행',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          2-3. 추가적으로 진행되고 있는 사안
        </h2>
      </AnimatedElement>

      <div className="space-y-6 w-full">
        {tasks.map((task, index) => (
          <AnimatedElement key={index} delay={0.2 + index * 0.15}>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', x: 5 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/5 transition-all duration-300"
            >
              <div className="w-[45px] h-[45px] bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10 rounded-[10px] flex items-center justify-center flex-shrink-0 text-2xl">
                {task.icon}
              </div>
              <div>
                <h5 className="text-white text-lg mb-2">{task.title}</h5>
                <p className="text-[#8892b0] text-[0.95rem] leading-[1.6]">{task.description}</p>
              </div>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}
