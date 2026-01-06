'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import Image from 'next/image';

export default function SupplySlide2() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-16">
      <AnimatedElement delay={0}>
        <h2 className="text-[2rem] font-semibold mb-6 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          준비물 (2) 알코올 솜 또는 면봉
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-10 w-full">
        <AnimatedElement delay={0.05}>
          <div className="pr-6">
            <h4 className="text-[1.5rem] text-white mb-3">문제 발견</h4>
            <p className="text-[#8892b0] text-base leading-[1.6] mb-5">
              칠한 부분이 손에 살짝 스치면 번지며, 손이나 물로는 잘 닦이지 않음
            </p>

            <h4 className="text-[1.5rem] text-white mb-3">해결책</h4>
            <p className="text-[#8892b0] text-base leading-[1.6]">
              <span className="text-[#64ffda] font-semibold">1~3초 내에</span> 빠르게 알코올로 닦으면 지워짐!
            </p>

            <table className="w-full mt-4 border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="bg-[#64ffda]/10 text-[#64ffda] font-semibold p-3 text-left rounded-tl-xl text-sm">방법</th>
                  <th className="bg-[#64ffda]/10 text-[#64ffda] font-semibold p-3 text-left rounded-tr-xl text-sm">가격</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[#c9d1d9] p-3 border-b border-white/10 text-sm">알코올솜</td>
                  <td className="text-[#c9d1d9] p-3 border-b border-white/10 text-sm">개당 30~40원</td>
                </tr>
                <tr>
                  <td className="text-[#c9d1d9] p-3 rounded-bl-xl text-sm">알코올면봉</td>
                  <td className="text-[#c9d1d9] p-3 rounded-br-xl text-sm">개당 115원</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3 text-[#8892b0] text-sm">
              두 개를 시범 테스트 후 편리한 것을 도입 예정
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <div className="flex flex-col gap-3 items-center">
            <div className="relative h-[250px] w-full rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/2-2-2.png"
                alt="채색 테스트"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[90px] w-auto rounded-lg overflow-hidden opacity-80">
              <Image
                src="/images/2-2-3.jpg"
                alt="알코올 솜/면봉 구매"
                width={280}
                height={90}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
