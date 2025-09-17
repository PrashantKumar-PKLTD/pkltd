import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { ScrollIndicator } from "../../../../components/ui/scroll-indicator";
import { SmoothScrollWrapper } from "../../../../components/ui/smooth-scroll-wrapper";

export const NewsSection = (): JSX.Element => {
  return (
    <section id="news-section" className="flex-col w-full items-center justify-center px-0 py-[98px] flex-[0_0_auto] bg-darkbasic flex relative">
      <div className="w-full max-w-[1312px] items-center justify-center flex-[0_0_auto] flex flex-col relative px-4">
        <div className="items-start justify-center gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div className="flex flex-col w-[528px] items-start justify-center gap-8 relative">
            <div className="gap-2 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#888889] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                CAREERS
              </div>

              <h2 className="text-white text-[38px] tracking-[0.38px] leading-[43.7px] relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black">
                Join our team to <br />
                create the best digital solutions.
              </h2>
            </div>
            </div>
          </SmoothScrollWrapper>

          <div className="relative self-stretch w-20" />

          <SmoothScrollWrapper animationType="fade" delay={300}>
            <div className="flex flex-col items-start gap-7 relative flex-1 grow">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-dark-light-dark-scheme text-[17.2px] leading-[17.2px]">
              <span className="text-[#ffffffbf] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] font-body-large [font-style:var(--body-large-font-style)] font-[number:var(--body-large-font-weight)] text-[length:var(--body-large-font-size)]">
                We&#39;re{" "}
              </span>

              <span className="[font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#ffffffbf] text-[18.4px] tracking-[0.03px] leading-[29.4px]">
                a team of creatives
              </span>

              <span className="text-[#ffffffbf] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] font-body-large [font-style:var(--body-large-font-style)] font-[number:var(--body-large-font-weight)] text-[length:var(--body-large-font-size)]">
                {" "}
                who are excited about unique ideas and help digital and fin-tech
                companies{" "}
              </span>

              <span className="[font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#ffffffbf] text-[18.4px] tracking-[0.03px] leading-[29.4px]">
                to create amazing identity
              </span>

              <span className="text-[#ffffffbf] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] font-body-large [font-style:var(--body-large-font-style)] font-[number:var(--body-large-font-weight)] text-[length:var(--body-large-font-size)]">
                .
              </span>
            </p>

            <Button className="relative bg-[#4487f2] h-11 px-5 py-3 rounded-lg text-white font-action-base font-[number:var(--action-base-font-weight)] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)] hover:bg-[#3a75d9] hover:scale-105 transition-all duration-300">
              See Open Positions
              <ArrowRightIcon className="ml-2 w-6 h-6" />
            </Button>
            </div>
          </SmoothScrollWrapper>
        </div>
      </div>
      
      <ScrollIndicator targetId="contact-section" />
    </section>
  );
};
