'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function FebruaryMarketingSlide() {
  const plans = [
    {
      icon: '💕',
      title: '발렌타인데이',
      badge: '페어링퍼퓸패키지',
      badgeColor: 'pink',
      description: '페어링되면 좋은 조합과 퍼퓸뚜껑을 구성해볼 예정',
      hasImage: true,
    },
    {
      icon: '🎓',
      title: '졸업 시즌',
      badge: '졸업퍼퓸패키지',
      badgeColor: 'cyan',
      description: '졸업을 기념하는 특별한 퍼퓸 패키지 구성',
      hasImage: false,
    },
    {
      icon: '🧧',
      title: '구정',
      badge: '연휴 정상영업 안내',
      badgeColor: 'yellow',
      description: '연휴 정상영업 안내 및 구정 인사',
      hasImage: false,
    },
  ];

  const getBadgeClass = (color: string) => {
    switch (color) {
      case 'pink':
        return 'bg-[#ec4899]/15 text-[#ec4899] border-0';
      case 'yellow':
        return 'bg-[#fbbf24]/15 text-[#fbbf24] border-0';
      default:
        return 'bg-[#64ffda]/15 text-[#64ffda] border-0';
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0.1}>
        <h2 className="text-[2.2rem] font-semibold mb-10 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          2월 마케팅 사안들 준비중
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-3 gap-6 w-full">
        {plans.map((plan, index) => (
          <AnimatedElement key={index} delay={0.2 + index * 0.15}>
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(100, 255, 218, 0.3)' }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center h-full transition-all duration-300"
            >
              <div className="text-5xl mb-5">{plan.icon}</div>
              <h5 className="text-[#64ffda] text-xl mb-4">{plan.title}</h5>
              <Badge className={`${getBadgeClass(plan.badgeColor)} px-3 py-1 mb-4`}>
                {plan.badge}
              </Badge>
              <p className="text-[#8892b0] text-[0.95rem] leading-[1.6] mt-4">
                {plan.description}
              </p>
              {plan.hasImage && (
                <div className="mt-5 bg-white/5 rounded-xl p-4">
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/2-3-1.png"
                      alt="페어링 퍼퓸"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}
