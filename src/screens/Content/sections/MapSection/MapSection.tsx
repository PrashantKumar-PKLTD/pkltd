import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { SmoothScrollWrapper } from "../../../../components/ui/smooth-scroll-wrapper";

const services = [
  {
    icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons-5.svg",
    title: "Data Tracking",
    description:
      "Strategy is a forward-looking plan for your brand's behavior.",
    animationDelay: "200ms",
  },
  {
    icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons-7.svg",
    title: "Press Releases",
    description:
      "Strategy is a forward-looking plan for your brand's behavior.",
    animationDelay: "400ms",
  },
  {
    icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons-1.svg",
    title: "Financial Audit",
    description:
      "Audits help your company to have the unique plan for your brand.",
    animationDelay: "600ms",
  },
  {
    icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons-2.svg",
    title: "Website/App Design",
    description:
      "UI/UX design gives the appearance above your brand's behavior.",
    animationDelay: "800ms",
  },
];

export const MapSection = (): JSX.Element => {
  return (
    <section id="map-section" className="flex-col items-center justify-center px-0 py-24 self-stretch w-full flex-[0_0_auto] bg-darkbasic flex relative">
      <div className="w-full max-w-[1312px] items-center justify-center flex-[0_0_auto] flex flex-col relative px-4">
        <div className="items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div className="flex flex-col w-full lg:w-[528px] items-start gap-8 relative self-stretch">
            <div className="gap-2 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[#888889] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                WHAT WE DO
              </div>

              <h2 className="relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black text-white text-[52px] tracking-[0] leading-[54.6px]">
                Does more then ever platform to achieve goal stages.
              </h2>
            </div>
            </div>
          </SmoothScrollWrapper>

          <div className="relative self-stretch w-20 hidden lg:block" />

          <div className="flex flex-col items-start gap-12 relative flex-1 self-stretch grow">
            <SmoothScrollWrapper animationType="fade" delay={200}>
              <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
                <p className="relative self-stretch mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-[#ffffffbf] text-[length:var(--body-large-font-size)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)] tracking-[var(--body-large-letter-spacing)]">
                  Our clients describe us as a product team which creates
                  amazing UI/UX experiences, by crafting top-notch user
                  experience.
                </p>
              </div>
            </SmoothScrollWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 self-stretch w-full">
              {services.map((service, index) => (
                <SmoothScrollWrapper 
                  key={index}
                  animationType="scale"
                  delay={400 + index * 100}
                >
                  <Card className="bg-transparent border-none hover:transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-0">
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                          <img
                            className="relative w-8 h-8"
                            alt="Bootstrap icons"
                            src={service.icon}
                          />
                        </div>

                        <div className="items-center gap-1.5 pt-4 pb-2 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
                          <h3 className="relative flex-1 mt-[-1.00px] font-title-h5 font-[number:var(--title-h5-font-weight)] text-white text-[length:var(--title-h5-font-size)] tracking-[var(--title-h5-letter-spacing)] leading-[var(--title-h5-line-height)] [font-style:var(--title-h5-font-style)]">
                            {service.title}
                          </h3>
                        </div>

                        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                          <p className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#888889] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    </CardContent>
                  </Card>
                </SmoothScrollWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
