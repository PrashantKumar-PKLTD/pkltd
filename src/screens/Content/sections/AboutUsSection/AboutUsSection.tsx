import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollIndicator } from "../../../../components/ui/scroll-indicator";
import { SmoothScrollWrapper } from "../../../../components/ui/smooth-scroll-wrapper";

const mapControls = [
  {
    label: "Map",
    active: true,
    textColor: "text-[#101014]",
  },
  {
    label: "Satellite",
    active: false,
    textColor: "text-[#646466]",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about-section" className="flex-col w-full items-center justify-center flex-[0_0_auto] flex relative">
      <div className="items-center justify-center self-stretch w-full flex-[0_0_auto] flex flex-col relative">
        <div className="items-center justify-center self-stretch w-full flex-[0_0_auto] flex relative">
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div className="flex flex-col w-[840px] items-start justify-center gap-8 relative bg-[#ff5d3a1a]">
            <div className="relative self-stretch w-full h-[460px] [background:url(https://c.animaapp.com/mflezxv1yE4F7m/img/google-map.png)_50%_50%_/_cover]">
              <div className="inline-flex items-start gap-1 absolute top-5 left-5">
                {mapControls.map((control, index) => (
                  <Button
                    key={control.label}
                    variant="ghost"
                    className={`inline-flex h-10 items-center justify-center gap-2.5 px-[11px] py-0 relative flex-[0_0_auto] bg-[#ffffff] rounded shadow-[0px_1px_3px_#00000014] hover:bg-[#ffffff] hover:scale-105 transition-all duration-300`}
                  >
                    <div
                      className={`${control.textColor} relative w-fit [font-family:'Roboto',Helvetica] font-medium text-base tracking-[0.16px] leading-7 whitespace-nowrap`}
                    >
                      {control.label}
                    </div>
                  </Button>
                ))}
              </div>

              <div className="top-[380px] left-[760px] rotate-90 inline-flex h-10 items-center justify-center gap-2.5 px-[11px] py-0 absolute bg-[#ffffff] rounded shadow-[0px_1px_3px_#00000014] hover:scale-105 transition-all duration-300">
                <img
                  className="relative w-[18px] h-[18px] -rotate-90"
                  alt="Vector"
                  src="https://c.animaapp.com/mflezxv1yE4F7m/img/vector-4.svg"
                />

                <div className="relative w-px h-7 bg-x-color-black-15" />

                <div className="flex w-[18px] items-center justify-center gap-2.5 relative">
                  <div className="relative w-[18px] h-1 bg-[#646466] -rotate-90" />
                </div>
              </div>

              <Button
                variant="ghost"
                className="top-5 left-[780px] inline-flex h-10 items-center justify-center gap-2.5 px-[11px] py-0 absolute bg-[#ffffff] rounded shadow-[0px_1px_3px_#00000014] hover:bg-[#ffffff] hover:scale-105 transition-all duration-300"
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Vector"
                  src="https://c.animaapp.com/mflezxv1yE4F7m/img/vector-5.svg"
                />
              </Button>

              <div className="absolute w-9 h-[43px] top-[209px] left-[402px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-7.svg)] bg-[100%_100%] animate-pulse-slow" />
            </div>
            </div>
          </SmoothScrollWrapper>

          <SmoothScrollWrapper animationType="fade" delay={400}>
            <Card className="flex flex-col items-start gap-4 p-12 relative flex-1 self-stretch grow border-0 shadow-none hover:transform hover:scale-[1.02] transition-all duration-500">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
                  <div className="w-14 h-14 bg-[#88888914] rounded-[50px] flex items-center justify-center gap-1.5 relative">
                    <img
                      className="relative w-7 h-7"
                      alt="Bootstrap icons"
                      src="https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons-4.svg"
                    />
                  </div>

                  <div className="items-center gap-1.5 pt-4 pb-2 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative flex-1 mt-[-1.00px] font-title-h5 font-[number:var(--title-h5-font-weight)] text-[#101014] text-[length:var(--title-h5-font-size)] tracking-[var(--title-h5-letter-spacing)] leading-[var(--title-h5-line-height)] [font-style:var(--title-h5-font-style)]">
                      Get in touch
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-darklighter text-[16.4px] leading-[16.4px]">
                <span className="text-[#161418] tracking-[-0.05px] leading-[26.2px]">
                  Work and general inquiries
                  <br />
                </span>

                <span className="font-semibold text-[#111013] tracking-[-0.05px] leading-[26.2px]">
                  +1.809.120.6705
                </span>
              </div>

              <div className="relative self-stretch font-body-base font-[number:var(--body-base-font-weight)] text-darklighter text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                Assistance hours: <br />
                Monday - Friday <br />6 am to 8 pm EST
              </div>
            </CardContent>
            </Card>
          </SmoothScrollWrapper>

          <SmoothScrollWrapper animationType="fade" delay={600}>
            <Card className="flex flex-col items-start gap-4 p-12 relative flex-1 self-stretch grow bg-[#88888914] border-0 shadow-none hover:transform hover:scale-[1.02] transition-all duration-500">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
                  <div className="w-14 h-14 bg-[#88888914] rounded-[50px] flex items-center justify-center gap-1.5 relative">
                    <img
                      className="relative w-7 h-7"
                      alt="Bootstrap icons"
                      src="https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons-6.svg"
                    />
                  </div>

                  <div className="items-center gap-1.5 pt-4 pb-2 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative flex-1 mt-[-1.00px] font-title-h5 font-[number:var(--title-h5-font-weight)] text-[#101014] text-[length:var(--title-h5-font-size)] tracking-[var(--title-h5-letter-spacing)] leading-[var(--title-h5-line-height)] [font-style:var(--title-h5-font-style)]">
                      Post address
                    </h3>
                  </div>
                </div>
              </div>

              <address className="self-stretch text-darklighter text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] relative font-body-base font-[number:var(--body-base-font-weight)] [font-style:var(--body-base-font-style)] not-italic">
                541 Melville Ave, Palo Alto, <br />
                CA 94301,
                <br />
                United States
              </address>
            </CardContent>
            </Card>
          </SmoothScrollWrapper>
        </div>
      </div>
      
      <ScrollIndicator targetId="contact-section" />
    </section>
  );
};
