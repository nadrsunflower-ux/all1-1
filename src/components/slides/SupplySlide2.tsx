'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import Image from 'next/image';

export default function SupplySlide2() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          준비물 (2) 알코올 솜 또는 면봉
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-12 w-full">
        <AnimatedElement delay={0.2}>
          <div className="pr-8">
            <h4 className="text-[1.8rem] text-white mb-5">문제 발견</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8] mb-8">
              칠한 부분이 손에 살짝 스치면 번지며, 손이나 물로는 잘 닦이지 않음
            </p>

            <h4 className="text-[1.8rem] text-white mb-5">해결책</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8]">
              <span className="text-[#64ffda] font-semibold">1~3초 내에</span> 빠르게 알코올로 닦으면 지워짐!
            </p>

            <table className="w-full mt-5 border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="bg-[#64ffda]/10 text-[#64ffda] font-semibold p-5 text-left rounded-tl-xl">방법</th>
                  <th className="bg-[#64ffda]/10 text-[#64ffda] font-semibold p-5 text-left rounded-tr-xl">가격</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[#c9d1d9] p-5 border-b border-white/10">알코올솜</td>
                  <td className="text-[#c9d1d9] p-5 border-b border-white/10">개당 30~40원</td>
                </tr>
                <tr>
                  <td className="text-[#c9d1d9] p-5 rounded-bl-xl">알코올면봉</td>
                  <td className="text-[#c9d1d9] p-5 rounded-br-xl">개당 115원</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 text-[#8892b0] text-sm">
              두 개를 시범 테스트 후 편리한 것을 도입 예정
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="flex flex-col gap-4 items-center">
            <div className="relative h-[280px] w-full rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/2-2-2.png"
                alt="채색 테스트"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[100px] w-auto rounded-lg overflow-hidden opacity-80">
              <Image
                src="/images/2-2-3.jpg"
                alt="알코올 솜/면봉 구매"
                width={300}
                height={100}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
