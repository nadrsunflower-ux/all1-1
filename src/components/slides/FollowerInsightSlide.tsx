'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';

export default function FollowerInsightSlide() {
  const timeSlots = [
    { day: '월요일', time: '오후 6시 ~ 9시' },
    { day: '수요일', time: '오후 9시 ~ 12시' },
    { day: '금요일', time: '오후 6시 ~ 9시' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          팔로워 인사이트
        </h2>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <div className="bg-gradient-to-br from-[#64ffda]/10 to-[#64ffda]/[0.02] border border-[#64ffda]/20 rounded-2xl p-8 w-full">
          <h4 className="text-[#64ffda] text-xl mb-6 flex items-center gap-3">
            <span className="text-2xl">📊</span>
            악센트 아이디 팔로워 활발 시간대
          </h4>

          <div className="space-y-6 mt-6">
            {timeSlots.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex items-center gap-4 text-[1.3rem]"
              >
                <Badge className="bg-[#64ffda]/15 text-[#64ffda] border-0 px-4 py-1.5 text-base">
                  {slot.day}
                </Badge>
                <span className="text-[#c9d1d9]">{slot.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
