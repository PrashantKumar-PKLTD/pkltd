import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { QuoteButton } from "../../../components/ui/quote-button";
import { ScrollIndicator } from "../../../components/ui/scroll-indicator";
import { Separator } from "../../../components/ui/separator";
import { SmoothScrollWrapper } from "../../../components/ui/smooth-scroll-wrapper";

const faqData = [
  {
    id: "item-1",
    question: "Difference between data engineering and analytics?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-2",
    question: "Can you integrate my existing systems and databases?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-3",
    question: "What is the process for setting up a data platform?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-4",
    question: "Do I need to clean my data before working with you?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-5",
    question: "How long does it take to implement a data solution?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-6",
    question: "How do you ensure data security and compliance?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-7",
    question: "Can you build AI and machine learning models for us?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
];

export const ProjectCallToActionSection = (): JSX.Element => {
  return (
    <section id="faq-section" className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div>
            <h2 className="bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent [font-family:'Inter',Helvetica] font-bold text-5xl lg:text-6xl tracking-[0] leading-normal mb-8">
              Creative Services <br />
              FAQs
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about our data services? We're here to help you make informed decisions.
              </p>
              
              <QuoteButton variant="primary" size="lg">
                Schedule a Consultation
              </QuoteButton>
            </div>
          </div>
          </SmoothScrollWrapper>

          <SmoothScrollWrapper animationType="fade" delay={200}>
            <div>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-none group"
                >
                  <div className="space-y-3.5">
                    <AccordionTrigger className="flex items-start justify-between p-0 hover:no-underline [&[data-state=open]>div>span]:rotate-45 group-hover:bg-gray-50 rounded-lg p-4 -m-4 transition-all duration-200">
                      <div className="flex items-start gap-12 w-full">
                        <div className="flex items-center justify-center w-[43px] h-[45px] flex-shrink-0">
                          <span className="[font-family:'Inter',Helvetica] font-medium text-[#4487f2] text-6xl tracking-[0] leading-normal transition-all duration-300 group-hover:text-[#d90a2c] group-hover:scale-110">
                            +
                          </span>
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-4xl tracking-[0] leading-normal group-hover:text-[#d90a2c] transition-colors duration-200">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-0">
                      <div className="ml-[55px] pr-4">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>

                    <div className="ml-12">
                      <Separator className="h-[5px] bg-gray-300" />
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          </SmoothScrollWrapper>
        </div>
      </div>
      <ScrollIndicator targetId="contact-footer" />
    </section>
  );
};
