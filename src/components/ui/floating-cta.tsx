import { MessageCircleIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { QuoteButton } from "./quote-button";

export const FloatingCTA = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded form */}
      <div className={`mb-4 transition-all duration-500 ease-out transform ${
        isExpanded 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#151517] text-[length:var(--title-h6-font-size)]">
              Quick Quote Request
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
          
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d90a2c] focus:border-transparent transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d90a2c] focus:border-transparent transition-all"
            />
            <textarea
              placeholder="Project Details"
              rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d90a2c] focus:border-transparent transition-all resize-none"
            />
            <QuoteButton className="w-full" size="default">
              Send Request
            </QuoteButton>
          </form>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative bg-[#d90a2c] hover:bg-[#b8092a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isExpanded ? 'rotate-180' : ''
        }`}
      >
        <div className="flex items-center justify-center w-14 h-14">
          {isExpanded ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MessageCircleIcon className="w-6 h-6" />
          )}
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#d90a2c] animate-ping opacity-20" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Get a Quote
        </div>
      </button>
    </div>
  );
};
