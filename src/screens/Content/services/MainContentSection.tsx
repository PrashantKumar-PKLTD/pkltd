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
import { ScrollIndicator } from "../../../components/ui/scroll-indicator";
import { Separator } from "../../../components/ui/separator";
import { SmoothScrollWrapper } from "../../../components/ui/smooth-scroll-wrapper";
import LogoSection from "./LogoSection";









const servicesData = [
  {
    category: "STRATEGY",
    title: "Data Strategy & Consulting",
    description:
      "Helping businesses design data-driven roadmaps, align goals with analytics, and unlock smarter decision-making.",
  },
  {
    category: "DESIGN",
    title: "Data Visualization & Dashboards",
    description:
      "Transforming raw data into clear, interactive dashboards and reports that make insights easy to understand .",
  },
  {
    category: "PRODUCTION",
    title: "Data Engineering & Integration",
    description:
      "We build pipelines, clean data, and connect systems for reliable, real-time insights.",
  },
  {
    category: "CAMPAIGNS",
    title: "Analytics & Predictive Modeling",
    description:
      "Applying advanced analytics, machine learning, and predictive models to identify trends and performance",
  },
];

const capabilitiesData = [
  {
    title: "Strategy",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/mingcute-target-fill.svg",
    alt: "Mingcute target fill",
  },
  {
    title: "Governance",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/fluent-building-bank-28-filled.svg",
    alt: "Fluent building bank",
  },
  {
    title: "Quality",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/carbon-checkmark-filled.svg",
    alt: "Carbon checkmark",
  },
  {
    title: "Dashboards",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/oui-nav-dashboards.svg",
    alt: "Oui nav dashboards",
  },
  {
    title: "Reporting",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/basil-document-solid.svg",
    alt: "Basil document solid",
  },
  {
    title: "Automation",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/picon-robot.svg",
    alt: "Picon robot",
  },
  {
    title: "Big Data",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/carbon-network-1.svg",
    alt: "Carbon network",
  },
  {
    title: "Cloud Data",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/material-symbols-cloud.svg",
    alt: "Material symbols",
  },
  {
    title: "Optimisation",
    icon: "https://c.animaapp.com/mfo404djpVGKfZ/img/mdi-gear.svg",
    alt: "Mdi gear",
  },
];

const processSteps = [
  {
    stepNumber: "STEP NUMBER 1.",
    title: "Data Strategy and Business Roadmap",
    description:
      "We help businesses define clear data strategies by aligning business goals with analytics, governance, and infrastructure planning. This ensures every decision is backed by structured and actionable insights.",
    image: "https://c.animaapp.com/mfo404djpVGKfZ/img/image-2.png",
  },
  {
    stepNumber: "STEP NUMBER 1.",
    title: "Data Engineering and System Integration",
    description:
      "From building pipelines to unifying multiple data sources, we create robust architectures that deliver reliable, real-time, and accessible data across the organization.",
    image: "https://c.animaapp.com/mfo404djpVGKfZ/img/image-1.png",
  },
  {
    stepNumber: "STEP NUMBER 1.",
    title: "Data Visualization and Insightful Reporting",
    description:
      "We transform raw data into meaningful dashboards, visual reports, and interactive tools that simplify complex information and empower data-driven decisions.",
    image: "https://c.animaapp.com/mfo404djpVGKfZ/img/image.png",
  },
];

const awardsData = [
  [
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/idma-2020-1.png",
      alt: "Idma",
      title: "IDMA 2020",
    },
    {
      image:
        "https://c.animaapp.com/mfo404djpVGKfZ/img/big-bang-award-19-1.png",
      alt: "Big bang award",
      title: "BIG BANG 2019",
    },
    {
      image:
        "https://c.animaapp.com/mfo404djpVGKfZ/img/adobe-express---file-1.png",
      alt: "Adobe express file",
      title: "DIGIPLUS 2021",
    },
  ],
  [
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/download-1.png",
      alt: "Download",
      title: "BBC KNOWLEDGE' 17",
    },
    {
      image: "https://c.animaapp.com/mfo404djpVGKfZ/img/images--1--1.png",
      alt: "Images",
      title: "EMVIE' 19 award",
    },
    null,
  ],
];

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section id="hero-section" className="flex flex-col w-full items-center justify-center min-h-[660px] relative">
  <div className="w-full max-w-[1312px] mx-auto px-4">
    <div className="flex items-center justify-center gap-8 min-h-[480px]">
      <SmoothScrollWrapper animationType="slide" delay={0}>
        <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 pt-8 pb-0 px-0">
        <div className="gap-2 flex flex-col items-start w-full">
          <div className="mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#151517] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] w-fit [font-style:var(--title-h6-font-style)]">
            Proud of the insights <br />
            we deliver.
          </div>

          <div className="flex items-center justify-center text-[#101014] text-[80px] tracking-[-2.20px] leading-[72px] w-full [font-family:'DM_Sans',Helvetica] font-bold">
            Turning data into decisions.
          </div>
        </div>

        <SmoothScrollWrapper animationType="fade" delay={200}>
          <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="h-auto inline-flex items-center justify-center gap-2 rounded-lg p-0 hover:scale-105 transition-transform duration-200"
          >
            <div className="font-action-base font-[number:var(--action-base-font-weight)] text-[#151517] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)]">
              Explore Our Work
            </div>
            <ArrowRightIcon className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
          
          <QuoteButton variant="primary" size="default">
            Start Your Project
          </QuoteButton>
        </div>
        </SmoothScrollWrapper>
      </div>
      </SmoothScrollWrapper>

      <SmoothScrollWrapper animationType="fade" delay={400}>
        <div className="flex flex-col items-start justify-end pt-0 pb-[80px] px-0 flex-1 relative">
        <div className="flex flex-col items-start gap-2 w-full z-10">
          <div className="w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-[#151517] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
            Featured project:
          </div>

          <div className="w-[181px] font-title-h5 font-[number:var(--title-h5-font-weight)] text-[#101014] text-[length:var(--title-h5-font-size)] tracking-[var(--title-h5-letter-spacing)] leading-[var(--title-h5-line-height)] [font-style:var(--title-h5-font-style)]">
            Growth through data intelligence.
          </div>
        </div>

        <img
          className="absolute top-0 left-0 w-[652px] h-[525px]"
          alt="Technology"
          src="https://c.animaapp.com/mfo404djpVGKfZ/img/technology.png"
        />
      </div>
      </SmoothScrollWrapper>
    </div>
  </div>
  <ScrollIndicator targetId="services-section" />
</section>


      {/* Services Section */}
      <section id="services-section" className="flex flex-col items-center justify-center px-0 py-24 w-full bg-[#88888914]">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start gap-8 w-full">
            <SmoothScrollWrapper animationType="slide" delay={0}>
              <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8">
              <div className="gap-3 flex flex-col items-start w-full">
                <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  SERVICES
                </div>

                <Separator className="w-full h-px bg-[#8a8a93]" />

                <div className="flex items-center justify-center text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                  We&apos;re a team of data experts turning insights into
                  measurable impact.
                </div>
              </div>
            </div>
            </SmoothScrollWrapper>

            <div className="w-20" />

            <div className="flex flex-col items-start justify-center gap-[50px] flex-1">
              {servicesData.slice(0, 2).map((service, index) => (
                <SmoothScrollWrapper
                  key={index}
                  animationType="fade"
                  delay={200 + index * 100}
                >
                  <div className="flex flex-col items-start gap-4 w-full">
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
                </SmoothScrollWrapper>
              ))}
            </div>

            <div className="flex flex-col items-start justify-center gap-[50px] flex-1">
              {servicesData.slice(2, 4).map((service, index) => (
                <SmoothScrollWrapper
                  key={index + 2}
                  animationType="fade"
                  delay={400 + index * 100}
                >
                  <div className="flex flex-col items-start gap-4 w-full">
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
                </SmoothScrollWrapper>
              ))}
            </div>
          </div>
        </div>
        <ScrollIndicator targetId="capabilities-section" />
      </section>

      {/* Capabilities Grid Section */}
      <section id="capabilities-section" className="flex flex-col min-h-[1120px] items-center justify-center w-full relative">
        <div className="w-full h-[1120px] bg-[#fef29366] absolute inset-0" />

        <div className="w-full max-w-[1327px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-8 w-full">
            {capabilitiesData.map((capability, index) => (
              <SmoothScrollWrapper
                key={index}
                animationType="scale"
                delay={index * 100}
              >
                <Card className="group w-full h-[187px] bg-[#ffffff] rounded-[20px] border-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardContent className="flex flex-col items-start justify-between p-[18px] h-full">
                  <div className="w-16 h-[63px] bg-[#fef29366] rounded-[10px] flex items-center justify-center group-hover:bg-[#d90a2c] transition-colors duration-300">
                    <img
                      className="w-[50px] h-[50px] group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      alt={capability.alt}
                      src={capability.icon}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full h-9 font-title-h4 font-[number:var(--title-h4-font-weight)] text-[#101014] text-[length:var(--title-h4-font-size)] tracking-[var(--title-h4-letter-spacing)] leading-[var(--title-h4-line-height)] [font-style:var(--title-h4-font-style)] group-hover:text-[#d90a2c] transition-colors duration-300">
                    {capability.title}
                  </div>
                </CardContent>
              </Card>
              </SmoothScrollWrapper>
            ))}
          </div>
        </div>
        <ScrollIndicator targetId="video-section" />
      </section>

      {/* Video/FAQ Section */}
      <section id="video-section" className="flex flex-col items-center justify-center pt-24 pb-0 px-0 w-full">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start gap-8 w-full">
            <SmoothScrollWrapper animationType="slide" delay={0}>
              <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 pt-0 pb-2 px-0">
              <div className="gap-3 flex flex-col items-start w-full">
                <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  CAPABILITIES
                </div>

                <Separator className="w-full h-px bg-[#8a8a93]" />

                <div className="text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                  Smart data solutions with technology.
                </div>
              </div>
            </div>
            </SmoothScrollWrapper>

            <div className="w-20" />
            <div className="w-full max-w-[632px]" />
          </div>
        </div>

        <div className="items-center w-full flex flex-col justify-center">
          <div className="flex items-center justify-center w-full">
            <SmoothScrollWrapper animationType="fade" delay={200}>
              <div className="flex flex-col w-full max-w-[936px] items-start justify-center gap-8 px-0 py-24">
              <img
                className="flex-1 w-full object-cover"
                alt="Stock photo portrait"
                src="https://c.animaapp.com/mfo404djpVGKfZ/img/stock-photo-portrait-of-successful-group-of-people-working-at-on.png"
              />
            </div>
            </SmoothScrollWrapper>

            <SmoothScrollWrapper animationType="fade" delay={400}>
              <div className="flex flex-col items-start gap-8 pl-24 pr-0 py-24 flex-1 bg-[#ffffff]">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center gap-3 hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex w-14 h-14 items-center justify-center gap-2.5 p-3.5 bg-[#151517] rounded-[50px] shadow-outline-shadow-animation hover:bg-[#d90a2c] transition-colors duration-300">
                    <PlayIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-action-base font-[number:var(--action-base-font-weight)] text-[#101014] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] whitespace-nowrap [font-style:var(--action-base-font-style)]">
                    Play Video
                  </div>
                </Button>
                
                <QuoteButton variant="outline" size="default">
                  Get Consultation
                </QuoteButton>
              </div>

              <div className="gap-3 flex flex-col items-start w-full">
                <div className="mt-[-1.00px] text-[#101014] text-[length:var(--title-h3-font-size)] tracking-[var(--title-h3-letter-spacing)] leading-[var(--title-h3-line-height)] w-full font-title-h3 font-[number:var(--title-h3-font-weight)] [font-style:var(--title-h3-font-style)]">
                  We work in the fields of data strategy, analytics, and
                  technology-driven insights.
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
                        What do our data services include?
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-start gap-4 px-0 py-1 w-full">
                    <div className="w-full mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                      We deliver end-to-end solutions: from data engineering and
                      visualization to predictive analytics and AI-powered
                      business insights.
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
                        Can I migrate my existing data?
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
                        Can you build custom dashboards for me?
                      </div>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>
            </SmoothScrollWrapper>

            <div className="w-[184px] bg-[#ffffff]" />
          </div>
        </div>
        <ScrollIndicator targetId="logo-section" />
      </section>

      {/* Screenshot Section */}
      <section id="logo-section" className="flex">
         <LogoSection/>
         <ScrollIndicator targetId="process-section" />
      </section>

      {/* Process Steps Section */}
      <section id="process-section" className="w-full">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-center justify-center gap-10 w-full">
            <SmoothScrollWrapper animationType="scale" delay={0}>
              <div className="flex flex-col items-start justify-center gap-8 flex-1 bg-[#ff5d3a1a]">
              <div className="w-full h-[806px] bg-[#06ff00] overflow-hidden relative">
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
                        alt="Image"
                        src={step.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </SmoothScrollWrapper>
          </div>
        </div>
        <ScrollIndicator targetId="awards-section" />
      </section>

      {/* Awards Section */}
      <section id="awards-section" className="flex flex-col items-center justify-center px-0 py-24 w-full">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start gap-8 w-full">
            <SmoothScrollWrapper animationType="slide" delay={0}>
              <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8">
              <div className="gap-3 flex flex-col items-start w-full">
                <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  AWARDS &amp; HONORS
                </div>

                <Separator className="w-full h-px bg-[#8a8a93]" />

                <div className="text-[#101014] text-[length:var(--title-h3-font-size)] tracking-[var(--title-h3-letter-spacing)] leading-[var(--title-h3-line-height)] w-full font-title-h3 font-[number:var(--title-h3-font-weight)] [font-style:var(--title-h3-font-style)]">
                  The awards won <br />
                  by our works.
                </div>
              </div>
            </div>
            </SmoothScrollWrapper>

            <div className="w-20" />

            <SmoothScrollWrapper animationType="fade" delay={200}>
              <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="w-[542px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#151517] text-[17.2px] tracking-[-0.34px] leading-[27.5px]">
                <span className="tracking-[-0.06px]">
                  Recognized for delivering innovative{" "}
                </span>

                <span className="font-bold tracking-[-0.06px]">
                  digital solutions
                </span>

                <span className="tracking-[-0.06px]"> that blend </span>

                <span className="font-bold tracking-[-0.06px]">creativity</span>

                <span className="tracking-[-0.06px]"> with </span>

                <span className="font-bold tracking-[-0.06px]">
                  technology.
                </span>
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
            </SmoothScrollWrapper>
          </div>
        </div>
        <ScrollIndicator targetId="features-section" />
      </section>

      {/* Service Features Section Header */}
      <section id="features-section" className="flex w-full max-w-[1312px] mx-auto px-4 items-start gap-8 relative py-12">
        <div className="w-20" />
        <div className="w-full max-w-[632px]" />
        <SmoothScrollWrapper animationType="slide" delay={0}>
          <div className="flex flex-col w-full max-w-[528px] items-start justify-center gap-8 pt-0 pb-2 px-0">
          <div className="gap-3 flex flex-col items-start w-full">
            <div className="w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#151517] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
              SERVICE FEATURES
            </div>

            <Separator className="w-full h-px bg-[#8a8a93]" />

            <div className="text-[#101014] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
              Where ideas meet innovation
            </div>
          </div>
        </div>
        </SmoothScrollWrapper>
        <ScrollIndicator targetId="cta-section" />
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="flex flex-col w-full items-center justify-center px-0 py-24 bg-[#101014]">
        <div className="w-full max-w-[1312px] mx-auto px-4">
          <div className="flex items-start justify-center gap-8 w-full">
            <SmoothScrollWrapper animationType="slide" delay={0}>
              <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="gap-2 flex flex-col items-start w-full">
                <div className="mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#888889] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap w-fit [font-style:var(--title-subtitle-font-style)]">
                  COLLABORATION
                </div>

                <div className="text-[#ffffff] text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] w-full font-title-h2 font-[number:var(--title-h2-font-weight)] [font-style:var(--title-h2-font-style)]">
                  Got a project?
                  <br />
                  Let&apos;s talk.
                </div>
              </div>
            </div>
            </SmoothScrollWrapper>

            <SmoothScrollWrapper animationType="fade" delay={200}>
              <div className="flex flex-col items-end gap-8 pt-[42px] pb-0 px-0 flex-1">
              <div className="flex items-center gap-4">
                <QuoteButton variant="primary" size="lg">
                  Start Your Project
                </QuoteButton>
                
                <Button className="h-11 px-5 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#101014] inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-fit mt-[-3.00px] mb-[-1.00px] font-action-base font-[number:var(--action-base-font-weight)] text-[length:var(--action-base-font-size)] text-center tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] whitespace-nowrap [font-style:var(--action-base-font-style)]">
                    Contact Us
                  </div>
                  <ArrowRightIcon className="mt-[-2.00px] mb-[-2.00px] w-6 h-6" />
                </Button>
              </div>
            </div>
            </SmoothScrollWrapper>
          </div>

          <div className="flex items-center justify-center gap-8 px-0 py-7 w-full">
            <Separator className="flex-1 h-px bg-[#888889]" />
          </div>

          <div className="flex items-center justify-center gap-8 w-full">
            <SmoothScrollWrapper animationType="fade" delay={400}>
              <div className="flex flex-col items-start justify-center gap-8 flex-1">
              <div className="w-full mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-[#ffffffbf] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                We&apos;re a team of creatives who are excited about unique
                ideas and help fin-tech companies create amazing identities by
                crafting superior UI/UX.
              </div>
            </div>
            </SmoothScrollWrapper>

            <div className="flex-1 h-[50px]" />
          </div>
        </div>
      </section>
    </div>
  );
};
