import { ArrowRightIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

interface QuoteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  children?: React.ReactNode;
}

const QuoteButton = React.forwardRef<HTMLButtonElement, QuoteButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const baseClasses = "group relative overflow-hidden rounded-lg font-action-base font-[number:var(--action-base-font-weight)] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)] transition-all duration-300 ease-out transform hover:scale-105 active:scale-95";
    
    const variants = {
      primary: "bg-[#d90a2c] hover:bg-[#b8092a] text-white shadow-lg hover:shadow-xl",
      secondary: "bg-[#151517] hover:bg-[#2a2a2c] text-white shadow-lg hover:shadow-xl",
      outline: "border-2 border-[#151517] text-[#151517] hover:bg-[#151517] hover:text-white shadow-md hover:shadow-lg"
    };
    
    const sizes = {
      default: "px-6 py-3 h-11",
      lg: "px-8 py-4 h-14 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children || "Get a Quote"}
          <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200">
          <div className="absolute inset-0 bg-white/20 rounded-lg animate-ping" />
        </div>
      </button>
    );
  }
);

QuoteButton.displayName = "QuoteButton";

export { QuoteButton };
