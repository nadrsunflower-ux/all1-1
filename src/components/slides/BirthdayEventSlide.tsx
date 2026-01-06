'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BirthdayEventSlide() {
  const progressItems = [
    '전체적인 이벤트 및 다혜&수빈 업무 스케줄링',
    '기획안 작성, 계정 관리, 공지글 작성 등에 관한 피드백',
    '악센트 와우&아이디 상담 진행 (카카오톡 오픈채팅방)',
    '악센트 와우&아이디 X 계정 관리 (후기 리트윗, 문의 답변 등)',
  ];

  const commentItems = [
    { text: '다혜언니가 ', highlight: '창의적인 아이디어', after: '를 바탕으로 특전 구성을 예산 안에서 다양하게 구성 중' },
    { text: '컨셉 또한 국한되지 않고 다양하게 구상하여 ', highlight: '다채로운 이벤트들', after: '이 기획되고 있음' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          다혜언니에게 인수인계 진행 중
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-10 w-full">
        <AnimatedElement delay={0.2}>
          <Card className="bg-white/[0.03] border-white/10 h-full hover:bg-white/[0.05] hover:border-[#64ffda]/30 transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-[#64ffda] text-xl font-semibold">진행 사안</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {progressItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-[#c9d1d9] leading-[1.7] pl-6 relative"
                  >
                    <span className="absolute left-0 top-[10px] w-2 h-2 rounded-full bg-[#64ffda]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <Card className="bg-white/[0.03] border-white/10 h-full hover:bg-white/[0.05] hover:border-[#64ffda]/30 transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-[#64ffda] text-xl font-semibold">첨언</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {commentItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-[#c9d1d9] leading-[1.7] pl-6 relative"
                  >
                    <span className="absolute left-0 top-[10px] w-2 h-2 rounded-full bg-[#64ffda]" />
                    <span>
                      {item.text}
                      <span className="text-[#64ffda] font-semibold">{item.highlight}</span>
                      {item.after}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </div>
  );
}
