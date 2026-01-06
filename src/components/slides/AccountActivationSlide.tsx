'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Users, UserCheck, TrendingUp, Target } from 'lucide-react';

export default function AccountActivationSlide() {
  const stats = [
    { label: '이전 팔로워', value: 2697, icon: Users, color: '#8892b0' },
    { label: '현재 팔로워', value: 2737, icon: UserCheck, color: '#64ffda' },
    { label: '증가', value: 40, suffix: '명', icon: TrendingUp, color: '#a78bfa' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-6 bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/30">
          마케팅 팀
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-2 text-white">계정 활성화</h2>
      </AnimatedElement>

      <AnimatedElement delay={0.3}>
        <p className="text-[#8892b0] mb-10 text-lg">2024.12.17 - 2025.01.05 기준</p>
      </AnimatedElement>

      <div className="grid grid-cols-3 gap-8 w-full max-w-4xl mb-10">
        {stats.map((stat, index) => (
          <AnimatedElement key={index} delay={0.4 + index * 0.1}>
            <motion.div whileHover={{ scale: 1.05, y: -4 }}>
              <Card className="bg-[#112240] border-[#1d3a6e] overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: stat.color }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  />
                  <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} />
                  <motion.p
                    className="text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value.toLocaleString()}{stat.suffix || ''}
                  </motion.p>
                  <p className="text-[#8892b0] text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.8}>
        <Card className="bg-[#112240] border-[#1d3a6e] w-full max-w-4xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#64ffda]" />
                <span className="text-[#ccd6f6]">목표 달성률</span>
              </div>
              <span className="text-[#64ffda] font-bold">+1.5%</span>
            </div>
            <div className="relative">
              <Progress value={75} className="h-3 bg-[#1d3a6e]" />
              <motion.div
                className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-[#64ffda] to-[#a78bfa]"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>
    </div>
  );
}
