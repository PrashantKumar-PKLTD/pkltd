import { ArrowRightIcon, MinusIcon, PlayIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { QuoteButton } from "../../../components/ui/quote-button";
import { Separator } from "../../../components/ui/separator";
import LogoSection from "./LogoSection";

const servicesData = [
  {
    category: "STRATEGY",
    title: "ESG Strategy & Sustainability Planning",
    description:
      "Developing comprehensive ESG strategies and sustainability roadmaps that align with business goals and regulatory requirements.",
  },
  {
    category: "DESIGN",
    title: "Carbon Footprint & Impact Assessment",
    description:
      "Measuring, analyzing, and reporting on environmental impact with actionable insights for reduction and optimization.",
  },
  {
    category: "PRODUCTION",
    title: "Sustainable Technology Solutions",
    description:
      "Implementing green technologies and sustainable practices that reduce environmental impact while improving efficiency.",
  },
  {
    category: "CAMPAIGNS",
    title: "ESG Reporting & Compliance",
    description:
      "Creating comprehensive ESG reports and ensuring compliance with sustainability standards and regulations.",
  },
];

const capabilitiesData = [
  {
    title: "ESG Strategy",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/mingcute-target-fill.svg",
    alt: "ESG Strategy",
  },
  {
    title: "Carbon Tracking",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/fluent-building-bank-28-filled.svg",
    alt: "Carbon Tracking",
  },
  {
    title: "Green Technology",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/carbon-checkmark-filled.svg",
    alt: "Green Technology",
  },
  {
    title: "Impact Reporting",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/oui-nav-dashboards.svg",
    alt: "Impact Reporting",
  },
  {
    title: "Compliance",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/basil-document-solid.svg",
    alt: "Compliance",
  },
  {
    title: "Renewable Energy",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/picon-robot.svg",
    alt: "Renewable Energy",
  },
  {
    title: "Circular Economy",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/carbon-network-1.svg",
    alt: "Circular Economy",
  },
  {
    title: "Sustainable Supply",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/material-symbols-cloud.svg",
    alt: "Sustainable Supply",
  },
  {
    title: "Impact Measurement",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/mdi-gear.svg",
    alt: "Impact Measurement",
  },
];

const processSteps = [
  {
    stepNumber: "STEP NUMBER 1.",
    title: "Sustainability Assessment and Strategy",
    description:
      "We evaluate your current environmental impact, identify improvement opportunities, and develop comprehensive sustainability strategies aligned with your business objectives.",
    image: "https://c.animaapp.com/mfo404djpVGKfZ/img/image-2.png",
  },
  {
    stepNumber: "STEP NUMBER 2.",
    title: "Implementation and Technology Integration",
    description:
      "Our experts implement sustainable technologies, optimize processes, and integrate ESG practices into your operations for measurable environmental impact.",
    image: "https://c.animaapp.com/mfo404djpVGKfZ/img/image-1.png",
  },
  {
    stepNumber: "STEP NUMBER 3.",
    title: "Monitoring and Continuous Improvement",
    description:
      "We track progress, measure impact, and continuously optimize sustainability initiatives to ensure long-term environmental and business success.",
    image: "https://c.animaapp.com/mfo404djpVGKfZ/img/image.png",
  },
];

const awardsData = [
  [
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/idma-2020-1.png",
      alt: "Sustainability Excellence",
      title: "SUSTAINABILITY EXCELLENCE 2023",
    },
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/big-bang-award-19-1.png",
      alt: "Green Innovation Award",
      title: "GREEN INNOVATION 2022",
    },
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/adobe-express---file-1.png",
      alt: "ESG Leadership Award",
      title: "ESG LEADERSHIP 2024",
    },
  ],
  [
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/download-1.png",
      alt: "Environmental Impact",
      title: "ENVIRONMENTAL IMPACT' 23",
    },
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/images--1--1.png",
      alt: "Sustainability Pioneer",
      title: "SUSTAINABILITY PIONEER' 24",
    },
    null,
  ],
];

export const SustainabilityMainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="flex flex-col w-full items-center justify-center min-h-[660px] relative">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-center justify-center gap-8 min-h-[480px]">
            <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 pt-8 pb-0 px-0 translate-y-[-1rem] animate-fade-in opacity-0">
              <div className="gap-2 flex flex-col items-start w-full">
                <div className="mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#151517] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] w-fit [font-style:var(--title-h6-font-style)]">
                  Building a sustainable future <br />
                  for generations to come.
                </div>

                <div className="flex items-center justify-center text-[#101014] text-[80px] tracking-[-2.20px] leading-[72px] w-full [font-family:'DM_Sans',Helvetica] font-bold">
                  Sustainability that matters.
                </div>
              </div>

              <div className="flex items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center justify-center gap-2 rounded-lg p-0 hover:scale-105 transition-transform duration-200"
                >
                  <div className="font-action-base font-[number:var(--action-base-font-weight)] text-[#151517] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)]">
                    Explore ESG Solutions
                  </div>
                  <ArrowRightIcon className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                
                <QuoteButton variant="primary" size="default">
                  Start Sustainability Journey
                </QuoteButton>
              </div>
            </div>

            <div className="flex flex-col items-start justify-end pt-0 pb-[80px] px-0 flex-1 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex flex-col items-start gap-2 w-full z-10">
                <div className="w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-[#151517] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                  Featured sustainability project:
                </div>

                <div className="w-[181px] font-title-h5 font-[number:var(--title-h5-font-weight)] text-[#101014] text-[length:var(--title-h5-font-size)] tracking-[var(--title-h5-letter-spacing)] leading-[var(--title-h5-line-height)] [font-style:var(--title-h5-font-style)]">
                  Carbon neutral transformation.
                </div>
              </div>

              <img
                className="absolute top-0 left-0 w-[652px] h-[525px]"
                alt="Sustainability Technology"
                src="https://c.animaapp.com/mfo404djpVGKfZ/img/technology.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col items-center justify-center px-0 py-24 w-full bg-[#88888914]">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start gap-8 w-full">
            <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <div className="gap-3 flex flex-col items-start w-full">
                <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  SUSTAINABILITY SERVICES
                </div>

                <Separator className="w-full h-px bg-[#8a8a93]" />

                <div className="flex items-center justify-center text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                  We&apos;re sustainability experts creating positive environmental impact.
                </div>
              </div>
            </div>

            <div className="w-20" />

            <div className="flex flex-col items-start justify-center gap-[50px] flex-1">
              {servicesData.slice(0, 2).map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${800 + index * 200}ms]`}
                >
                  <div className="gap-3 flex flex-col items-start w-full">
                    <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                      {service.category}
                    </div>

                    <Separator className="w-full h-px bg-[#8a8a93]" />

                    <div className="flex items-center justify-center w-full font-title-h4 font-[number:var(--title-h4-font-weight)] text-[#101014] text-[length:var(--title-h4-font-size)] tracking-[var(--title-h4-letter-spacing)] leading-[var(--title-h4-line-height)] [font-style:var(--title-h4-font-style)]">
                      {service.title}
                    </div>
                  </div>

                  <div className="w-full font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                    {service.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start justify-center gap-[50px] flex-1">
              {servicesData.slice(2, 4).map((service, index) => (
                <div
                  key={index + 2}
                  className={`flex flex-col items-start gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${1200 + index * 200}ms]`}
                >
                  <div className="gap-3 flex flex-col items-start w-full">
                    <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                      {service.category}
                    </div>

                    <Separator className="w-full h-px bg-[#8a8a93]" />

                    <div className="flex items-center justify-center w-full font-title-h4 font-[number:var(--title-h4-font-weight)] text-[#101014] text-[length:var(--title-h4-font-size)] tracking-[var(--title-h4-letter-spacing)] leading-[var(--title-h4-line-height)] [font-style:var(--title-h4-font-style)]">
                      {service.title}
                    </div>
                  </div>

                  <div className="w-full font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                    {service.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid Section */}
      <section className="flex flex-col min-h-[1120px] items-center justify-center w-full relative">
        <div className="w-full h-[1120px] bg-[#10b9811a] absolute inset-0" />

        <div className="w-full max-w-[1327px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-8 w-full">
            {capabilitiesData.map((capability, index) => (
              <Card
                key={index}
                className={`group w-full h-[187px] bg-[#ffffff] rounded-[20px] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${1600 + index * 100}ms] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
              >
                <CardContent className="flex flex-col items-start justify-between p-[18px] h-full">
                  <div className="w-16 h-[63px] bg-[#10b9811a] rounded-[10px] flex items-center justify-center group-hover:bg-[#10b981] transition-colors duration-300">
                    <img
                      className="w-[50px] h-[50px] group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      alt={capability.alt}
                      src={capability.icon}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full h-9 font-title-h4 font-[number:var(--title-h4-font-weight)] text-[#101014] text-[length:var(--title-h4-font-size)] tracking-[var(--title-h4-letter-spacing)] leading-[var(--title-h4-line-height)] [font-style:var(--title-h4-font-style)] group-hover:text-[#10b981] transition-colors duration-300">
                    {capability.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video/FAQ Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-0 px-0 w-full">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start gap-8 w-full">
            <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 pt-0 pb-2 px-0">
              <div className="gap-3 flex flex-col items-start w-full">
                <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  SUSTAINABILITY CAPABILITIES
                </div>

                <Separator className="w-full h-px bg-[#8a8a93]" />

                <div className="text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                  Green solutions with environmental responsibility.
                </div>
              </div>
            </div>

            <div className="w-20" />
            <div className="w-full max-w-[632px]" />
          </div>
        </div>

        <div className="items-center w-full flex flex-col justify-center">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col w-full max-w-[936px] items-start justify-center gap-8 px-0 py-24">
              <img
                className="flex-1 w-full object-cover"
                alt="Sustainability Team Working"
                src="https://c.animaapp.com/mfo404djpVGKfZ/img/stock-photo-portrait-of-successful-group-of-people-working-at-on.png"
              />
            </div>

            <div className="flex flex-col items-start gap-8 pl-24 pr-0 py-24 flex-1 bg-[#ffffff]">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center gap-3 hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex w-14 h-14 items-center justify-center gap-2.5 p-3.5 bg-[#151517] rounded-[50px] shadow-outline-shadow-animation hover:bg-[#10b981] transition-colors duration-300">
                    <PlayIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-action-base font-[number:var(--action-base-font-weight)] text-[#101014] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] whitespace-nowrap [font-style:var(--action-base-font-style)]">
                    Watch ESG Demo
                  </div>
                </Button>
                
                <QuoteButton variant="outline" size="default">
                  ESG Consultation
                </QuoteButton>
              </div>

              <div className="gap-3 flex flex-col items-start w-full">
                <div className="mt-[-1.00px] text-[#101014] text-[length:var(--title-h3-font-size)] tracking-[var(--title-h3-letter-spacing)] leading-[var(--title-h3-line-height)] w-full font-title-h3 font-[number:var(--title-h3-font-weight)] [font-style:var(--title-h3-font-style)]">
                  We specialize in ESG strategy, carbon tracking, and sustainable technology implementation.
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="flex h-10 items-center w-full hover:no-underline">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex w-10 h-10 items-center justify-center gap-1.5 p-3 rounded-3xl">
                        <MinusIcon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center justify-center flex-1 mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#101014] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                        What sustainability services do we provide?
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-start gap-4 px-0 py-1 w-full">
                    <div className="w-full mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                      We offer comprehensive sustainability solutions including ESG strategy, carbon footprint assessment, green technology implementation, and environmental compliance reporting.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="h-[51px] flex items-center w-full hover:no-underline">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex w-10 h-10 items-center justify-center gap-1.5 p-3 rounded-3xl">
                        <PlusIcon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center justify-center flex-1 mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#101014] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                        How do you measure environmental impact?
                      </div>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0">
                  <AccordionTrigger className="h-11 flex items-center w-full hover:no-underline">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex w-10 h-10 items-center justify-center gap-1.5 p-3 rounded-3xl">
                        <PlusIcon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center justify-center flex-1 mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#101014] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                        Can you help with ESG compliance?
                      </div>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="w-[184px] bg-[#ffffff]" />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="flex">
        <LogoSection />
      </section>

      {/* Process Steps Section */}
      <section className="w-full">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-center justify-center gap-10 w-full">
            <div className="flex flex-col items-start justify-center gap-8 flex-1 bg-[#10b9811a]">
              <div className="w-full h-[806px] bg-[#10b981] overflow-hidden relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex w-[51.22%] items-start pt-24 pb-0 px-0 absolute top-[calc(50.00%_-_404px)] bg-[#ffffff] ${index === 0 ? "left-0 shadow-accordion-shadow" : index === 1 ? "left-[24.39%] shadow-accordion-shadow" : "left-[48.78%]"}`}
                  >
                    <div className="flex flex-col items-start flex-1">
                      <div className="flex flex-col items-start gap-6 pt-0 pb-12 px-0 w-full">
                        <div className="flex flex-col items-start gap-5 pl-0 pr-24 py-0 w-full">
                          <div className="gap-3 flex flex-col items-start w-full">
                            <Separator className="w-full h-px bg-[#8a8a93]" />

                            <div className="font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap w-fit [font-style:var(--title-subtitle-font-style)]">
                              {step.stepNumber}
                            </div>

                            <div className="text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                              {step.title}
                            </div>
                          </div>

                          <div className="w-full font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                            {step.description}
                          </div>
                        </div>
                      </div>

                      <img
                        className="w-full h-[399.5px] object-cover"
                        alt="Sustainability Process Step"
                        src={step.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="flex flex-col items-center justify-center px-0 py-24 w-full">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start gap-8 w-full">
            <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8">
              <div className="gap-3 flex flex-col items-start w-full">
                <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  SUSTAINABILITY AWARDS & RECOGNITION
                </div>

                <Separator className="w-full h-px bg-[#8a8a93]" />

                <div className="text-[#101014] text-[length:var(--title-h3-font-size)] tracking-[var(--title-h3-letter-spacing)] leading-[var(--title-h3-line-height)] w-full font-title-h3 font-[number:var(--title-h3-font-weight)] [font-style:var(--title-h3-font-style)]">
                  Recognition for environmental <br />
                  leadership and impact.
                </div>
              </div>
            </div>

            <div className="w-20" />

            <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="w-[542px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#151517] text-[17.2px] tracking-[-0.34px] leading-[27.5px]">
                <span className="tracking-[-0.06px]">
                  Leading the way in{" "}
                </span>

                <span className="font-bold tracking-[-0.06px]">
                  environmental sustainability
                </span>

                <span className="tracking-[-0.06px]"> and </span>

                <span className="font-bold tracking-[-0.06px]">ESG excellence</span>

                <span className="tracking-[-0.06px]"> initiatives.</span>
              </div>

              <div className="flex items-center justify-center gap-8 w-full">
                {awardsData[0].map((award, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center gap-9 flex-1"
                  >
                    <img
                      className={`object-cover ${index === 0 ? "w-[124px] h-[67px]" : index === 1 ? "w-[68px] h-[86px]" : "w-[122px] h-[75px]"}`}
                      alt={award.alt}
                      src={award.image}
                    />

                    <div className="flex items-center justify-center w-fit font-body-small font-[number:var(--body-small-font-weight)] text-demo-2dark text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                      {award.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-8 w-full">
                {awardsData[1].map((award, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center gap-4 flex-1"
                  >
                    {award ? (
                      <>
                        <img
                          className={`object-cover ${index === 0 ? "w-[126px] h-[47px]" : "w-[172px] h-[43px]"}`}
                          alt={award.alt}
                          src={award.image}
                        />

                        <div className="flex items-center justify-center w-[173px] h-6 font-body-small font-[number:var(--body-small-font-weight)] text-[#151517] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                          {award.title}
                        </div>
                      </>
                    ) : (
                      <div className="flex-1 h-[92px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section Header */}
      <div className="flex w-full max-w-[1312px] mx-auto px-4 items-start gap-8 relative">
        <div className="w-20" />
        <div className="w-full max-w-[632px]" />
        <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 pt-0 pb-2 px-0">
          <div className="gap-3 flex flex-col items-start w-full">
            <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
              SUSTAINABILITY FEATURES
            </div>

            <Separator className="w-full h-px bg-[#8a8a93]" />

            <div className="text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
              Where responsibility meets innovation
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="flex flex-col w-full items-center justify-center px-0 py-24 bg-[#101014]">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start justify-center gap-8 w-full">
            <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="gap-2 flex flex-col items-start w-full">
                <div className="mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#888889] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap w-fit [font-style:var(--title-subtitle-font-style)]">
                  SUSTAINABILITY COLLABORATION
                </div>

                <div className="text-[#ffffff] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                  Ready for sustainable transformation?
                  <br />
                  Let&apos;s create impact together.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-8 pt-[42px] pb-0 px-0 flex-1">
              <div className="flex items-center gap-4">
                <QuoteButton variant="primary" size="lg">
                  Start Sustainability Project
                </QuoteButton>
                
                <Button className="h-11 px-5 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#101014] inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-fit mt-[-3.00px] mb-[-1.00px] font-action-base font-[number:var(--action-base-font-weight)] text-[length:var(--action-base-font-size)] text-center tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] whitespace-nowrap [font-style:var(--action-base-font-style)]">
                    ESG Consultation
                  </div>
                  <ArrowRightIcon className="mt-[-2.00px] mb-[-2.00px] w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 px-0 py-7 w-full">
            <Separator className="flex-1 h-px bg-[#888889]" />
          </div>

          <div className="flex items-center justify-center gap-8 w-full">
            <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="w-full mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-[#ffffffbf] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                We&apos;re sustainability champions who are passionate about creating positive environmental impact through innovative ESG strategies and green technology solutions.
              </div>
            </div>

            <div className="flex-1 h-[50px]" />
          </div>
        </div>
      </section>
    </div>
  );
};