'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Palette, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function DiffuserProcessSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-4 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-8 text-white">뿌덕 디퓨저 채색 과정 도입</h2>
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
            <CardContent className="space-y-4">
              <motion.div
                className="p-4 bg-[#f472b6]/10 rounded-lg border border-[#f472b6]/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[#ccd6f6]">
                  채색시 물감이 잘 안 나오고,<br />
                  힘 조절에 따라 물감이 넘침
                </p>
              </motion.div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/2-2-2.png"
                  alt="문제점 이미지"
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
            <CardContent className="space-y-4">
              <motion.div
                className="p-4 bg-[#64ffda]/10 rounded-lg border border-[#64ffda]/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[#ccd6f6]">
                  채색 과정을 미리 진행한 뒤,<br />
                  예약자에게 전달
                </p>
              </motion.div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/2-2-3.jpg"
                  alt="해결책 이미지"
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
          className="mt-6 px-6 py-3 bg-[#fbbf24]/10 rounded-lg border border-[#fbbf24]/30 flex items-center gap-3"
          animate={{
            boxShadow: ['0 0 0px rgba(251, 191, 36, 0)', '0 0 15px rgba(251, 191, 36, 0.3)', '0 0 0px rgba(251, 191, 36, 0)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle className="w-5 h-5 text-[#fbbf24]" />
          <span className="text-[#fbbf24] text-left">
            주의: 아크릴 마카 특성상 펜의 아래쪽이 아닌,<br />
            위를 향하게 보관해야 함
          </span>
        </motion.div>
      </AnimatedElement>
    </div>
  );
}
