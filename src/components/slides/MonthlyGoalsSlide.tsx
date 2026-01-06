'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Target, TrendingUp } from 'lucide-react';

export default function MonthlyGoalsSlide() {
  const goals = [
    {
      month: '1월',
      icon: Calendar,
      items: ['마케팅 팀 업무 인수인계', '뿌덕디퓨저, 타투스티커 메커니즘 완료'],
      color: '#64ffda',
    },
    {
      month: '2월',
      icon: Target,
      items: ['인수인계 마무리', '2월 마케팅 시작'],
      color: '#a78bfa',
    },
    {
      month: '3월',
      icon: TrendingUp,
      items: ['안정화', '생일이벤트 팀 해산'],
      color: '#f472b6',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12">
      <AnimatedElement delay={0.1}>
        <Badge className="mb-6 bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30">
          생일이벤트 팀
        </Badge>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <h2 className="text-4xl font-bold mb-12 text-white">월별 목표</h2>
      </AnimatedElement>

      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
        {goals.map((goal, index) => (
          <AnimatedElement key={index} delay={0.3 + index * 0.15}>
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              className="h-full"
            >
              <Card className="bg-[#112240] border-[#1d3a6e] h-full hover:border-opacity-100 transition-all duration-300"
                style={{ borderColor: `${goal.color}30` }}
              >
                <CardHeader className="text-center pb-2">
                  <motion.div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${goal.color}15`, border: `2px solid ${goal.color}50` }}
                    animate={{
                      boxShadow: [`0 0 0px ${goal.color}00`, `0 0 20px ${goal.color}40`, `0 0 0px ${goal.color}00`]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <goal.icon className="w-8 h-8" style={{ color: goal.color }} />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold" style={{ color: goal.color }}>
                    {goal.month}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {goal.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.15 + itemIndex * 0.1 }}
                        className="flex items-start gap-2 text-[#ccd6f6]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: goal.color }} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}
