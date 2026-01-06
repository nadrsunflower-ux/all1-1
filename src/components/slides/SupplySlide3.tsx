'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Package, XCircle, CheckCircle } from 'lucide-react';

export default function SupplySlide3() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-4 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀 - 용품 3
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <Package className="w-10 h-10 text-[#64ffda]" />
          이동트레이
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
        <AnimatedElement delay={0.3} direction="left">
          <Card className="bg-[#112240] border-[#1d3a6e] h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#f472b6]">
                <XCircle className="w-5 h-5" />
                문제점
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                className="p-4 bg-[#f472b6]/10 rounded-lg border border-[#f472b6]/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[#ccd6f6]">
                  디퓨저 채색 과정에서 마카, 면봉,<br />
                  알코올 솜 등을 자리가 부족하고,<br />
                  가져다준 뒤, 회수가 어려움
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedElement>

        <AnimatedElement delay={0.4} direction="right">
          <Card className="bg-[#112240] border-[#1d3a6e] h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#64ffda]">
                <CheckCircle className="w-5 h-5" />
                해결책
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                className="p-4 bg-[#64ffda]/10 rounded-lg border border-[#64ffda]/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[#ccd6f6]">
                  뚜껑이 있는 이동트레이를 구매해<br />
                  채색 용품들을 담아 제공
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement delay={0.6}>
        <Card className="bg-[#112240] border-[#1d3a6e] w-full max-w-5xl mt-6">
          <CardContent className="p-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/2-3-1.png"
                alt="이동트레이 이미지"
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>
    </div>
  );
}
