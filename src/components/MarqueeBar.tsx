
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const MarqueeBar = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-brutalist-black text-brutalist-white py-3 md:py-4 mb-8 md:mb-12 reveal">
      <div className="scroll-marquee">
        <div className="scroll-marquee-content text-lg md:text-2xl">
          AWS CERTIFIED DEVELOPER • JAVASCRIPT EXPERT • NODE.JS SPECIALIST • FULL-STACK DEVELOPER • PROJECT DELIVERY • PROBLEM SOLVER • AWS CERTIFIED DEVELOPER • JAVASCRIPT EXPERT • NODE.JS SPECIALIST • FULL-STACK DEVELOPER • PROJECT DELIVERY • PROBLEM SOLVER •&nbsp;
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;
