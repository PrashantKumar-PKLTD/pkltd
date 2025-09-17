import React from 'react';

const AnimatedTextRows: React.FC = () => {
  const row1Text = [
    "Design", "Design Thinking", "Metaverse", "Web3", "Artificial Intelligence", 
    "Machine Learning", "Blockchain", "NFTs", "Virtual Reality", "Augmented Reality"
  ];

  const row2Text = [
    "Digital Marketing", "Creative Coding", "Responsive Architecture", "User Experience",
    "Brand Strategy", "Content Creation", "Social Media", "SEO Optimization", "Analytics"
  ];

  const row3Text = [
    "Service Design", "Sound Design", "Graphic & Visual Design", "Motion Graphics",
    "Typography", "Illustration", "Photography", "Video Production", "Animation"
  ];

  return (
    <div className="bg-black py-20 overflow-hidden">
      <div className="space-y-8">
        {/* Row 1 - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex">
                {row1Text.map((text, textIndex) => (
                  <span
                    key={`${index}-${textIndex}`}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mx-8 hover:text-white/80 transition-colors duration-300"
                  >
                    {text} /
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Left */}
        <div className="relative">
          <div className="flex animate-scroll-left-fast whitespace-nowrap">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex">
                {row2Text.map((text, textIndex) => (
                  <span
                    key={`${index}-${textIndex}`}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mx-8 hover:text-white/80 transition-colors duration-300"
                  >
                    {text} /
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex">
                {row3Text.map((text, textIndex) => (
                  <span
                    key={`${index}-${textIndex}`}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mx-8 hover:text-white/80 transition-colors duration-300"
                  >
                    {text} /
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section with labels */}
      <div className="mt-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider">TOPICS</h3>
              <div className="h-px bg-white/40"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider">HIGHLIGHT</h3>
              <div className="h-px bg-white/40"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider">TOPICS</h3>
              <div className="h-px bg-white/40"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider">HIGHLIGHT</h3>
              <div className="h-px bg-white/40"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider">TOPICS</h3>
              <div className="h-px bg-white/40"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider">HIGHLIGHT</h3>
              <div className="h-px bg-white/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextRows;