'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SlideWrapper from './slides/SlideWrapper';
import TitleSlide from './slides/TitleSlide';
import SectionHeader from './slides/SectionHeader';
import BirthdayEventSlide from './slides/BirthdayEventSlide';
import MonthlyGoalsSlide from './slides/MonthlyGoalsSlide';
import AccountActivationSlide from './slides/AccountActivationSlide';
import FollowerInsightSlide from './slides/FollowerInsightSlide';
import DiffuserProcessSlide from './slides/DiffuserProcessSlide';
import SupplySlide1 from './slides/SupplySlide1';
import SupplySlide2 from './slides/SupplySlide2';
import SupplySlide3 from './slides/SupplySlide3';
import SupplySlide4 from './slides/SupplySlide4';
import AdditionalTasksSlide from './slides/AdditionalTasksSlide';
import FebruaryMarketingSlide from './slides/FebruaryMarketingSlide';
import ThankYouSlide from './slides/ThankYouSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  { component: TitleSlide, title: '타이틀' },
  { component: () => <SectionHeader number="1" title="생일이벤트 팀" subtitle="Birthday Event Team" />, title: '섹션 1' },
  { component: BirthdayEventSlide, title: '진행 사안' },
  { component: MonthlyGoalsSlide, title: '월별 목표' },
  { component: () => <SectionHeader number="2" title="마케팅 팀" subtitle="Marketing Team" />, title: '섹션 2' },
  { component: AccountActivationSlide, title: '계정 활성화' },
  { component: FollowerInsightSlide, title: '팔로워 인사이트' },
  { component: DiffuserProcessSlide, title: '채색 과정 도입' },
  { component: SupplySlide1, title: '아크릴 마커' },
  { component: SupplySlide2, title: '알코올 솜/면봉' },
  { component: SupplySlide3, title: '이동트레이' },
  { component: SupplySlide4, title: '채색 안내문' },
  { component: AdditionalTasksSlide, title: '추가 진행 사안' },
  { component: FebruaryMarketingSlide, title: '2월 마케팅' },
  { component: ThankYouSlide, title: '감사합니다' },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const goToSlide = useCallback((index: number, dir?: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(dir !== undefined ? dir : index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1, 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, -1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div
      className="w-screen h-screen bg-[#0a0a0a] overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main slide content */}
      <AnimatePresence initial={false} mode="popLayout" custom={direction}>
        <SlideWrapper key={currentSlide} direction={direction}>
          <CurrentSlideComponent />
        </SlideWrapper>
      </AnimatePresence>

      {/* Navigation buttons */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#112240]/80 border border-[#1d3a6e] flex items-center justify-center text-[#64ffda] hover:bg-[#1d3a6e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
        onClick={prevSlide}
        disabled={currentSlide === 0}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#112240]/80 border border-[#1d3a6e] flex items-center justify-center text-[#64ffda] hover:bg-[#1d3a6e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#112240]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#64ffda] to-[#a78bfa]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#112240]/80 rounded-full border border-[#1d3a6e] text-[#8892b0] text-sm z-10">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Mini navigation dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#64ffda]' : 'bg-[#1d3a6e]'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
