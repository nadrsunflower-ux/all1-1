'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function SupplySlide4() {
  const features = [
    'POP 형태로 트레이에 배치',
    '주의사항 사전 전달',
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-4 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀 - 용품 4
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <FileText className="w-10 h-10 text-[#64ffda]" />
          채색 안내문 제작
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
        <AnimatedElement delay={0.3} direction="left">
          <Card className="bg-[#112240] border-[#1d3a6e] h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#64ffda]">
                <CheckCircle className="w-5 h-5" />
                주요 내용
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[#64ffda]/10 rounded-lg border border-[#64ffda]/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#64ffda] font-bold">{index + 1}</span>
                  </div>
                  <span className="text-[#ccd6f6]">{feature}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </AnimatedElement>

        <AnimatedElement delay={0.4} direction="right">
          <Card className="bg-[#112240] border-[#1d3a6e] h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#a78bfa]">
                <AlertCircle className="w-5 h-5" />
                안내문 이미지
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-72 rounded-lg overflow-hidden border border-[#1d3a6e]">
                <Image
                  src="/images/notice.jpg"
                  alt="채색 안내문"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement delay={0.7}>
        <motion.div
          className="mt-6 flex items-center gap-3 px-6 py-3 bg-[#64ffda]/10 rounded-full border border-[#64ffda]/30"
          whileHover={{ scale: 1.02 }}
          animate={{
            boxShadow: ['0 0 0px rgba(100, 255, 218, 0)', '0 0 15px rgba(100, 255, 218, 0.3)', '0 0 0px rgba(100, 255, 218, 0)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FileText className="w-5 h-5 text-[#64ffda]" />
          <span className="text-[#ccd6f6]">트레이와 함께 배치하여 안내</span>
        </motion.div>
      </AnimatedElement>
    </div>
  );
}
