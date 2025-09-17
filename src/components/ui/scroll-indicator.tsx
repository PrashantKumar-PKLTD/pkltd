import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  targetId = "next-section", 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide indicator after scrolling 50% of viewport height
      setIsVisible(scrolled < windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`scroll-indicator ${!isVisible ? 'hidden' : ''} ${className}`}
      onClick={scrollToTarget}
    >
      <div className="flex flex-col items-center cursor-pointer group">
        <span className="text-sm font-medium text-gray-600 mb-2 group-hover:text-gray-900 transition-colors">
          Scroll Down
        </span>
        <div className="flex flex-col items-center animate-scroll-down-bounce">
          <ChevronDownIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors animate-scroll-down-arrow" />
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent mt-2"></div>
      </div>
    </div>
  );
};