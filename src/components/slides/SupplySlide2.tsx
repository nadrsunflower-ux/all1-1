'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Package, XCircle, CheckCircle, ShoppingCart } from 'lucide-react';

export default function SupplySlide2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-4 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀 - 용품 2
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <Package className="w-10 h-10 text-[#64ffda]" />
          알코올 솜 / 면봉
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
                  잘못 색칠한 부분을 지우는데<br />
                  사용하는 알코올 솜이 부족해<br />
                  화장솜에 소독용 에탄올을 적셔서 사용
                </p>
              </motion.div>
              <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/2-2-4.jpg"
                  alt="주문 내역"
                  fill
                  className="object-contain"
                />
              </div>
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
                  기존 용품을 소진할 때까지<br />
                  기존 방법을 유지하고<br />
                  알코올 솜 대량 구매
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement delay={0.7}>
        <motion.div
          className="mt-6 flex items-center gap-3 px-6 py-3 bg-[#64ffda]/10 rounded-full border border-[#64ffda]/30"
          whileHover={{ scale: 1.02 }}
        >
          <ShoppingCart className="w-5 h-5 text-[#64ffda]" />
          <span className="text-[#ccd6f6]">용품 관리 체계화 진행 중</span>
        </motion.div>
      </AnimatedElement>
    </div>
  );
}
