'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Package, XCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export default function SupplySlide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-4 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀 - 용품 1
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <Package className="w-10 h-10 text-[#64ffda]" />
          아크릴 마커
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
                className="p-4 bg-[#f472b6]/10 rounded-lg border border-[#f472b6]/20 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[#ccd6f6]">
                  현재 12색으로,<br />
                  표현할 수 있는 색상이 제한됨
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
                className="p-4 bg-[#64ffda]/10 rounded-lg border border-[#64ffda]/20 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[#ccd6f6]">
                  색상 추가 구매
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement delay={0.6}>
        <Card className="bg-[#112240] border-[#1d3a6e] w-full max-w-5xl mt-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" />
              <div className="space-y-2 text-left">
                <p className="text-[#ccd6f6]">
                  기존 마카의 물감 소진시 리필 잉크 구매해서 재활용
                </p>
                <p className="text-[#8892b0] text-sm">
                  (마카 한 개 3,000 → 리필 한 개 1,700원)
                </p>
                <p className="text-[#ccd6f6]">
                  기존 마카에서 잘 안나오는 펜촉은 리필 잉크와 같이 교체
                </p>
                <p className="text-[#8892b0] text-sm">
                  (펜촉 5개 2,900원 / 마카 1개 당 펜촉 2개)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>
    </div>
  );
}
