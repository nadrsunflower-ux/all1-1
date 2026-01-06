'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function SupplySlide4() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          준비물 (4) 채색 안내문 제작
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-12 w-full">
        <AnimatedElement delay={0.2}>
          <div className="pr-8">
            <h4 className="text-[1.8rem] text-white mb-5">제작 방향</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8] mb-8">
              POP 형태로 트레이에 배치하여<br />
              고객이 쉽게 확인할 수 있도록 구성
            </p>

            <h4 className="text-[1.8rem] text-white mb-5">목적</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8]">
              <span className="text-[#64ffda] font-semibold">주의사항 사전 전달</span>을 통해<br />
              채색 과정에서 발생할 수 있는 문제 예방
            </p>

            <div className="flex gap-3 mt-5">
              <Badge className="bg-[#64ffda]/15 text-[#64ffda] border-0 px-4 py-1.5 text-sm">
                POP 형태
              </Badge>
              <Badge className="bg-[#64ffda]/15 text-[#64ffda] border-0 px-4 py-1.5 text-sm">
                트레이 배치
              </Badge>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="relative h-[350px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/notice.jpg"
              alt="채색 안내문"
              fill
              className="object-contain"
            />
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
