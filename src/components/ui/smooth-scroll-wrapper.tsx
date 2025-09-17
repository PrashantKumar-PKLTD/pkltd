import React, { useEffect, useRef } from "react";

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fade" | "slide" | "scale";
  delay?: number;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
  className = "",
  animationType = "fade",
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animationType) {
      case "slide":
        return "animate-on-scroll";
      case "scale":
        return "animate-on-scroll-scale";
      default:
        return "animate-on-scroll";
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};