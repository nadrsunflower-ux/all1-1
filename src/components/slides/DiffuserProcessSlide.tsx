'use client';

import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

export default function DiffuserProcessSlide() {
  const steps = [
    { number: '1', label: '출력된 디퓨저\n마련', highlight: false },
    { number: '2', label: 'AI 이미지\n분석', highlight: false },
    { number: '3', label: '커스텀\n조향', highlight: false },
    { number: '4', label: '채색', highlight: true },
    { number: '5', label: '포장', highlight: false },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start px-24 py-20">
      <AnimatedElement delay={0}>
        <h2 className="text-[2.2rem] font-semibold mb-8 text-white flex items-center gap-4">
          <span className="w-1 h-9 bg-gradient-to-b from-[#64ffda] to-[#4ecdc4] rounded-sm" />
          2-2. 뿌리는 덕질 디퓨저 채색 과정 도입
        </h2>
      </AnimatedElement>

      <AnimatedElement delay={0.05}>
        <div className="flex items-center justify-center gap-4 w-full my-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="flex items-center gap-4"
            >
              <motion.div
                className={`rounded-xl px-6 py-4 text-center min-w-[130px] ${
                  step.highlight
                    ? 'bg-gradient-to-br from-[#64ffda] to-[#4ecdc4] shadow-lg shadow-[#64ffda]/30'
                    : 'bg-gradient-to-br from-[#64ffda]/15 to-[#64ffda]/5 border border-[#64ffda]/30'
                }`}
                animate={step.highlight ? {
                  scale: [1, 1.05, 1],
                  boxShadow: ['0 10px 30px rgba(100, 255, 218, 0.2)', '0 15px 40px rgba(100, 255, 218, 0.4)', '0 10px 30px rgba(100, 255, 218, 0.2)']
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div
                  className={`text-xl font-bold mb-1 ${
                    step.highlight ? 'text-[#0a0a0a]' : 'text-[#64ffda]'
                  }`}
                >
                  {step.number}
                </div>
                <div
                  className={`text-sm whitespace-pre-line leading-tight ${
                    step.highlight ? 'text-[#0a0a0a] font-semibold' : 'text-white'
                  }`}
                >
                  {step.label}
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <span className="text-xl text-[#64ffda]">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.3}>
        <p className="text-[#8892b0] text-lg text-center w-full mt-8">
          채색 과정이 새롭게 도입되었으며, 이를 위한 준비물을 마련
        </p>
      </AnimatedElement>
    </div>
  );
}
