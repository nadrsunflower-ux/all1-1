'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import Image from 'next/image';

export default function SupplySlide1() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          준비물 (1) 아크릴 마커
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-12 w-full">
        <AnimatedElement delay={0.2}>
          <div className="pr-8">
            <h4 className="text-[1.8rem] text-white mb-5">문제 발견</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8] mb-8">
              작은 부분(눈, 코, 입)을 칠하려는 경우 <span className="text-[#64ffda] font-semibold">두꺼운 펜촉</span>으로 인해 세밀하게 칠하기 어려움
            </p>

            <h4 className="text-[1.8rem] text-white mb-5">해결책</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8]">
              <span className="text-[#64ffda] font-semibold">두 가지의 펜촉</span>을 가진 아크릴 마커로 재주문
            </p>
            <p className="text-[#64ffda] mt-2">24색 기준 10,320원</p>

            <motion.div
              className="mt-6 bg-gradient-to-r from-[#fbbf24]/10 to-[#fbbf24]/5 border border-[#fbbf24]/30 rounded-xl px-5 py-3 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl">⚠️</span>
              <p className="text-[#fbbf24] text-sm text-left">
                울퉁불퉁한 표면이 최소화되도록 사포질을 신경 써서 해야 함
              </p>
            </motion.div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/2-2-1.jpg"
              alt="아크릴 마커"
              fill
              className="object-contain"
            />
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
