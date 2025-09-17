import { ArrowRightIcon, PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { ScrollIndicator } from "../../../../components/ui/scroll-indicator";

export const HeroSection = (): JSX.Element => {
  return (
    <section id="hero" className="relative w-full h-[840px] overflow-hidden mt-16">
      <div className="relative w-full max-w-[1312px] h-[840px] mx-auto">
        <img
          className="absolute w-[864px] h-[840px] top-0 left-0 object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
          alt="Leadership retreat workshop"
          src="/hero.jpg"
        />

        {/* Circle with ONLY background opacity (no element opacity) */}
        <div
          className="absolute w-[840px] h-[840px] top-0 left-[472px] bg-[#4487f2]/60 rounded-[420px] translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]"
        />

        <div className="flex flex-col w-[528px] items-start justify-center gap-6 absolute top-36 left-[672px]">
          <div className="flex flex-col items-start gap-4 self-stretch w-full relative flex-[0_0_auto]">
            <div className="inline-flex flex-[0_0_auto] items-center gap-3 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <Button
                size="icon"
                className="w-16 h-16 bg-[#151517] hover:bg-[#151517]/90 rounded-[50px] shadow-outline-shadow-animation transition-transform hover:scale-105"
              >
                <PlayIcon className="w-7 h-7 text-white fill-white" />
              </Button>
            </div>

            <div className="gap-3 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
              <h1 className="mt-[-1.00px] text-white text-[82px] tracking-[-0.82px] leading-[83.6px] relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                Simple, <br />
                Powerful <br />
                Transformative
              </h1>
            </div>

            <p className="relative w-[324px] font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              We design, build, and scale digital engines that help brands grow with clarity, efficiency, and impact.
            </p>
          </div>

          <Button className="bg-[#151517] hover:bg-[#151517]/90 h-11 px-5 py-3 rounded-lg font-action-base font-[number:var(--action-base-font-weight)] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)] transition-transform hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            Get Started
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
      
      <ScrollIndicator targetId="map-section" />
    </section>
  );
};
