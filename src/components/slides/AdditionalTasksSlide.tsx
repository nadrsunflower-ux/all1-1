'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks, ArrowRight, RefreshCw } from 'lucide-react';

export default function AdditionalTasksSlide() {
  const tasks = [
    {
      title: '인스타그램 하이라이트 업데이트',
      description: '콘텐츠 정리 및 최신화',
    },
    {
      title: '이벤트 관련 정리',
      description: '진행 중인 이벤트 문서화',
    },
    {
      title: '뿌덕디퓨저 예약관리 인수인계 매커니즘 확립',
      description: '프로세스 표준화',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-6 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-10 text-white flex items-center gap-3">
          <ListChecks className="w-10 h-10 text-[#64ffda]" />
          추가 진행 사안
        </h2>
      </AnimatedElement>

      <div className="space-y-6 w-full max-w-3xl">
        {tasks.map((task, index) => (
          <AnimatedElement key={index} delay={0.3 + index * 0.15}>
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative"
            >
              <Card className="bg-[#112240] border-[#1d3a6e] hover:border-[#64ffda]/50 transition-all duration-300">
                <CardContent className="flex items-center gap-6 p-6">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/30 flex items-center justify-center flex-shrink-0"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.5,
                    }}
                  >
                    <RefreshCw className="w-6 h-6 text-[#64ffda]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#ccd6f6] mb-1">
                      {task.title}
                    </h3>
                    <p className="text-[#8892b0] text-sm">{task.description}</p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#64ffda]" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.8}>
        <motion.p
          className="mt-10 text-[#8892b0] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          지속적인 업무 개선 및 체계화 진행 중
        </motion.p>
      </AnimatedElement>
    </div>
  );
}
