'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function SupplySlide3() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          준비물 (3) 이동트레이
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-12 w-full">
        <AnimatedElement delay={0.2}>
          <div className="pr-8">
            <h4 className="text-[1.8rem] text-white mb-5">문제 인지</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8] mb-8">
              채색존을 마련할까 했지만 바쁜 경우 <span className="text-[#64ffda] font-semibold">자리가 부족</span>하고,<br />
              뿌덕디퓨저 손님들끼리 겹친 경우 <span className="text-[#64ffda] font-semibold">자리가 협소</span>함
            </p>

            <h4 className="text-[1.8rem] text-white mb-5">해결책</h4>
            <p className="text-[#8892b0] text-lg leading-[1.8]">
              이동트레이를 <span className="text-[#64ffda] font-semibold">2세트 정도 구비</span>해두고 트레이를 통해 가져다준 뒤,<br />
              다 쓴 자리는 빠르게 치우는 형식으로 운영
            </p>

            <div className="flex gap-3 mt-5">
              <Badge className="bg-[#64ffda]/15 text-[#64ffda] border-0 px-4 py-1.5 text-sm">
                유연한 공간 활용
              </Badge>
              <Badge className="bg-[#64ffda]/15 text-[#64ffda] border-0 px-4 py-1.5 text-sm">
                효율적 운영
              </Badge>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="relative h-[350px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/2-2-4.jpg"
              alt="이동트레이"
              fill
              className="object-contain"
            />
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
