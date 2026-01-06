'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { BarChart3, TrendingUp, AlertCircle } from 'lucide-react';

export default function FollowerInsightSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-4 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-8 text-white">팔로워 인사이트</h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
        <AnimatedElement delay={0.3} direction="left">
          <Card className="bg-[#112240] border-[#1d3a6e] h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#64ffda]">
                <BarChart3 className="w-5 h-5" />
                상위 도시
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/2-1.jpg"
                  alt="상위 도시 인사이트"
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
              <CardTitle className="flex items-center gap-2 text-[#a78bfa]">
                <TrendingUp className="w-5 h-5" />
                연령대별 분포
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/2-2-1.jpg"
                  alt="연령대별 분포"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement delay={0.6}>
        <motion.div
          className="mt-8 flex items-center gap-3 px-6 py-3 bg-[#64ffda]/10 rounded-full border border-[#64ffda]/20"
          whileHover={{ scale: 1.02 }}
        >
          <AlertCircle className="w-5 h-5 text-[#64ffda]" />
          <span className="text-[#ccd6f6]">인사이트 데이터 기반 타겟팅 전략 수립 진행 중</span>
        </motion.div>
      </AnimatedElement>
    </div>
  );
}
