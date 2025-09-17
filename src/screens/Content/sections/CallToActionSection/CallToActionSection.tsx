import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { ScrollIndicator } from "../../../../components/ui/scroll-indicator";
import { SmoothScrollWrapper } from "../../../../components/ui/smooth-scroll-wrapper";

const faqData = [
  {
    id: "item-1",
    question: "What does a subscription include?",
    answer:
      "By leveraging their expertise in digital technologies and strategies, digital agencies assist businesses in reaching their target audience, building brand awareness.",
    isExpanded: true,
  },
  {
    id: "item-2",
    question: "Can I move from another platform?",
    answer: "Absolutely! We provide comprehensive migration services to help you seamlessly transition from any existing platform. Our team handles data migration, design adaptation, and ensures zero downtime during the process. We support migrations from WordPress, Shopify, Wix, Squarespace, and custom-built solutions.",
    isExpanded: false,
  },
  {
    id: "item-3",
    question: "Can someone build my site for me?",
    answer: "Yes, our expert development team offers full-service website creation. From initial concept and design to development and launch, we handle everything. We also provide ongoing maintenance, updates, and optimization services to ensure your site performs at its best.",
    isExpanded: false,
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section id="cta-section" className="flex-col w-full items-center justify-center px-0 py-24 flex-[0_0_auto] flex relative">
      <div className="w-full max-w-[1312px] items-start justify-end flex-[0_0_auto] flex flex-col relative">
        <div className="items-center gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div className="flex flex-col w-[528px] items-start justify-center gap-8 relative self-stretch">
            <div className="gap-2 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
              <div className="text-[#151517] relative w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                APPROACH
              </div>

              <h2 className="text-[#101014] text-[52px] tracking-[0] leading-[54.6px] relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black">
                Putting our focus on
                <br />
                changing the way
                <br />
                of mobile UX.
              </h2>
            </div>

            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-center justify-between pl-0 pr-8 py-0 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[331px] h-5 font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#101014] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] whitespace-nowrap [font-style:var(--title-h6-font-style)]">
                  Structured Media Insights
                </div>

                <div className="inline-flex flex-col items-center relative flex-[0_0_auto] rounded-md">
                  <Badge
                    variant="secondary"
                    className="inline-flex items-start gap-3 px-2 py-1 relative flex-[0_0_auto] bg-[#151517] rounded-lg"
                  >
                    <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-[#ffffff] text-[13px] tracking-[-0.13px] leading-5 whitespace-nowrap">
                      93%
                    </span>
                  </Badge>

                  <img
                    className="relative w-3.5 h-[7px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mflezxv1yE4F7m/img/vector-1-1.svg"
                  />
                </div>
              </div>

              <div className="relative self-stretch w-full h-1 bg-[#8a8a9329] rounded overflow-hidden">
                <div className="w-[478px] h-1 rounded-sm bg-[linear-gradient(90deg,rgba(68,135,242,1)_0%,rgba(117,68,221,1)_100%)]" />
              </div>
            </div>
            </div>
          </SmoothScrollWrapper>

          <div className="relative self-stretch w-[304px]" />

          <SmoothScrollWrapper animationType="fade" delay={400}>
            <div className="flex flex-col items-start justify-center gap-8 relative flex-1 self-stretch grow">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="flex-col items-start flex-[0_0_auto] flex relative self-stretch w-full"
            >
              {faqData.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-none"
                >
                  <AccordionTrigger className="h-10 items-center flex relative self-stretch w-full hover:no-underline p-0">
                    <div className="relative self-stretch w-full mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#101014] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)] text-left">
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  {item.answer && (
                    <AccordionContent className="flex-col items-start gap-4 px-0 py-1 flex-[0_0_auto] flex relative self-stretch w-full">
                      <p className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            </div>
          </SmoothScrollWrapper>
        </div>
      </div>
      
      <ScrollIndicator targetId="team-section" />
    </section>
  );
};
