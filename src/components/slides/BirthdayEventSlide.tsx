'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Users } from 'lucide-react';

export default function BirthdayEventSlide() {
  const items = [
    { text: '뿌덕 디퓨저 제작 및 예약', done: true },
    { text: '뿌덕 타투스티커 제작 및 예약', done: true },
    { text: '인사이트 분석 개선', done: true },
    { text: '뿌덕 디퓨저 채색 과정 도입', done: true },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-6 bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 hover:bg-[#64ffda]/20">
          생일이벤트 팀
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-2 text-white">진행 사안</h2>
      </AnimatedElement>

      <AnimatedElement delay={0.3}>
        <p className="text-[#8892b0] mb-10 text-lg">마케팅 팀으로 인수인계 완료</p>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {items.map((item, index) => (
          <AnimatedElement key={index} delay={0.4 + index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative"
            >
              <Card className="bg-[#112240] border-[#1d3a6e] hover:border-[#64ffda]/50 transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                  >
                    <CheckCircle className="w-8 h-8 text-[#64ffda]" />
                  </motion.div>
                  <span className="text-lg text-[#ccd6f6]">{item.text}</span>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.9}>
        <motion.div
          className="mt-10 flex items-center gap-3 text-[#8892b0]"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Users className="w-5 h-5" />
          <span>생일이벤트 팀</span>
          <ArrowRight className="w-5 h-5 text-[#64ffda]" />
          <span className="text-[#64ffda]">마케팅 팀</span>
        </motion.div>
      </AnimatedElement>
    </div>
  );
}
