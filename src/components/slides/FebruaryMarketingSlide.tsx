'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, Sparkles, Gift, Star } from 'lucide-react';

export default function FebruaryMarketingSlide() {
  const plans = [
    {
      icon: Heart,
      title: '발렌타인 이벤트',
      date: '2.14',
      color: '#f472b6',
    },
    {
      icon: Sparkles,
      title: '졸업 이벤트',
      date: '2월 중',
      color: '#a78bfa',
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
        <h2 className="text-4xl font-bold mb-4 text-white flex items-center gap-3">
          <Calendar className="w-10 h-10 text-[#64ffda]" />
          2월 마케팅
        </h2>
      </AnimatedElement>

      <AnimatedElement delay={0.3}>
        <p className="text-[#8892b0] mb-10 text-lg">예정된 이벤트 및 마케팅 계획</p>
      </AnimatedElement>

      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mb-8">
        {plans.map((plan, index) => (
          <AnimatedElement key={index} delay={0.4 + index * 0.15}>
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              className="h-full"
            >
              <Card
                className="bg-[#112240] border-[#1d3a6e] h-full overflow-hidden relative"
                style={{ borderColor: `${plan.color}30` }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: plan.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                />
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      backgroundColor: `${plan.color}15`,
                      border: `2px solid ${plan.color}50`
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [`0 0 0px ${plan.color}00`, `0 0 30px ${plan.color}40`, `0 0 0px ${plan.color}00`]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <plan.icon className="w-10 h-10" style={{ color: plan.color }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: plan.color }}>
                    {plan.title}
                  </h3>
                  <p className="text-[#8892b0] text-lg">{plan.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.8}>
        <motion.div
          className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#64ffda]/10 to-[#a78bfa]/10 rounded-xl border border-[#64ffda]/20"
          whileHover={{ scale: 1.02 }}
        >
          <Gift className="w-6 h-6 text-[#64ffda]" />
          <span className="text-[#ccd6f6]">특별한 이벤트로 고객과 소통 강화</span>
          <Star className="w-6 h-6 text-[#a78bfa]" />
        </motion.div>
      </AnimatedElement>
    </div>
  );
}
