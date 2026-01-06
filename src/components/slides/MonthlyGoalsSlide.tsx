'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

export default function MonthlyGoalsSlide() {
  const goals = [
    {
      month: '1월',
      title: '감 익히기',
      description: '1월 생일이벤트 약 80% 업로드\n완료 상태에서 인수인계',
      subDescription: '2월 이벤트 기획안 작성, 계정 관리\n디피 감각 익히기',
    },
    {
      month: '2월',
      title: '본격 운영',
      description: '주최자 있는 이벤트 제외\n다혜언니 100% 담당',
      subDescription: '매출 & 계정 관리에 집중하며 자리잡기',
    },
    {
      month: '+',
      title: '세부 인수인계',
      description: '공지 디테일과 계정 운영에 관한\n세부사항까지 모두 전달 예정',
      subDescription: '',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-12 text-white flex items-center gap-4 justify-center">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          월별 목표
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-3 gap-10 w-full max-w-[1200px]">
        {goals.map((goal, index) => (
          <AnimatedElement key={index} delay={0.2 + index * 0.15}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full"
            >
              <div
                className="bg-gradient-to-br from-[#64ffda]/15 to-[#64ffda]/5 border border-[#64ffda]/30 rounded-[20px] p-10 text-center h-full"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#64ffda] to-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#0a0a0a] font-bold text-[1.8rem]">{goal.month}</span>
                </div>

                <h5 className="text-white text-[1.4rem] font-medium mb-5">{goal.title}</h5>

                <p className="text-[#8892b0] text-base leading-[1.8] whitespace-pre-line">
                  {goal.description}
                </p>

                {goal.subDescription && (
                  <p className="mt-4 text-[#64ffda] text-[0.95rem] leading-[1.6] whitespace-pre-line">
                    {goal.subDescription}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}
