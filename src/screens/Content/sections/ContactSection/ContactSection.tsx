import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { SmoothScrollWrapper } from "../../../../components/ui/smooth-scroll-wrapper";

// Data for locations
const locations = [
  {
    title: "Rotterdam",
    company: "Colabrio Digital Media LTD.",
    address: ["Graaf Florisstraat 22A,", "3021 CH Rotterdam", "Netherlands"],
  },
  {
    title: "Barcelona",
    company: "Colabrio Digital LTD.",
    address: ["365 Gran Via de Corts", "Catalanes, BA 08015"],
  },
];

// Data for contact sections
const contactSections = [
  {
    title: "Work inquiries",
    titleColor: "text-[#ffffffbf]",
    content: [
      { text: "Interested in working with us?", type: "normal" },
      { text: "hello@clbthemes.com", type: "email" },
    ],
  },
  {
    title: "Career",
    titleColor: "text-[#ffffff]",
    content: [
      { text: "Looking for a job opportunity?", type: "normal" },
      { text: "See open positions", type: "link" },
    ],
  },
];

// Data for footer links
const footerLinks = [
  "Site Map",
  "Sale Terms",
  "Privacy & Cookie Policy",
  "Website Terms of Use",
];

export const ContactSection = (): JSX.Element => {
  return (
    <footer id="contact-section" className="flex flex-col w-full items-center bg-[#151517]">
      <div className="w-full max-w-[1312px] items-start justify-center px-4 py-20 flex flex-col">
        <div className="items-start gap-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Social Media Section */}
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div className="flex flex-col items-start gap-8">
            <div className="inline-flex flex-col gap-6 px-0 py-px items-start">
              <div className="relative w-[79px] h-10">
                <div className="h-[41px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/ohio-theme-.svg)] bg-[100%_100%]">
                  <div className="flex flex-col w-[25px] h-4 items-start gap-2.5 px-1 py-[3px] relative top-[3px] left-[53px] rounded-md border-[1.5px] border-solid border-[#ffffffbf]">
                    <div className="relative w-fit mt-[-1.50px] [font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#ffffffbf] text-[11px] tracking-[-0.11px] leading-[11px] whitespace-nowrap">
                      3.4
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col gap-6 px-0 py-px items-start">
              <div className="relative w-fit mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#ffffff] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] whitespace-nowrap [font-style:var(--title-h6-font-style)]">
                Fb.&nbsp;&nbsp;/&nbsp;&nbsp;Ig.&nbsp;&nbsp;/&nbsp;&nbsp;Tw.&nbsp;&nbsp;/&nbsp;&nbsp;Be.
              </div>
            </div>
            </div>
          </SmoothScrollWrapper>

          {/* Locations Section */}
          <SmoothScrollWrapper animationType="slide" delay={200}>
            <div className="flex flex-col items-start gap-8">
            {locations.map((location, index) => (
              <div
                key={location.title}
                className="flex flex-col gap-6 px-0 py-px w-full items-start"
              >
                <div className="flex gap-2.5 w-full items-start">
                  <div className="relative w-fit mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#ffffff] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] whitespace-nowrap [font-style:var(--title-h6-font-style)]">
                    {location.title}
                  </div>
                </div>

                <div className="relative w-full [font-family:'Inter',Helvetica] font-normal text-transparent text-[15.6px] leading-[15.6px]">
                  <span className="font-[number:var(--body-small-font-weight)] text-[#ffffffbf] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] font-body-small [font-style:var(--body-small-font-style)] text-[length:var(--body-small-font-size)]">
                    {location.company}
                    <br />
                  </span>

                  <span className="text-[#ffffffbf] tracking-[-0.02px] leading-[24.9px]">
                    {location.address.map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < location.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
            </div>
          </SmoothScrollWrapper>

          {/* Contact Sections */}
          <SmoothScrollWrapper animationType="slide" delay={400}>
            <div className="flex flex-col items-start gap-8">
            {contactSections.map((section, index) => (
              <div
                key={section.title}
                className="flex flex-col gap-6 px-0 py-px w-full items-start"
              >
                <div className="flex gap-2.5 w-full items-start">
                  <div
                    className={`w-fit whitespace-nowrap relative mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)] ${section.titleColor}`}
                  >
                    {section.title}
                  </div>
                </div>

                <div className="relative w-full [font-family:'Inter',Helvetica] font-normal text-transparent text-[15.6px] leading-[15.6px]">
                  {section.content.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={
                        item.type === "email" || item.type === "link"
                          ? "font-[number:var(--body-small-font-weight)] text-[#ffffffbf] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] font-body-small [font-style:var(--body-small-font-style)] text-[length:var(--body-small-font-size)]"
                          : "text-[#ffffffbf] tracking-[-0.02px] leading-[24.9px]"
                      }
                    >
                      {item.text}
                      {itemIndex === 0 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </SmoothScrollWrapper>

          {/* Newsletter Section */}
          <SmoothScrollWrapper animationType="slide" delay={600}>
            <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-6 w-full items-start">
              <div className="flex gap-2.5 w-full items-start">
                <div className="flex-1 text-[#ffffffbf] relative mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                  Sign up for the newsletter
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                <div className="relative w-full h-11">
                  <div className="relative w-full max-w-[304px] h-11 rounded-lg">
                    <div className="flex w-full h-11 items-center px-4 py-0 bg-[#88888914] rounded-lg">
                      <Input
                        placeholder="Enter your email"
                        className="flex-1 h-6 bg-transparent border-none p-0 font-body-base font-[number:var(--body-base-font-weight)] text-[#646466] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] placeholder:text-[#646466] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                      />
                    </div>

                    <div className="absolute top-0 right-0 inline-flex h-11 items-center justify-center gap-2 px-5 py-3 rounded-lg overflow-hidden">
                      <Button className="relative w-fit mt-[-4.00px] font-action-base font-[number:var(--action-base-font-weight)] text-[#ffffff] text-[length:var(--action-base-font-size)] text-center tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)] bg-transparent hover:bg-transparent hover:scale-105 transition-all duration-300 p-0 h-auto">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 w-full">
                  <Checkbox
                    id="newsletter-consent"
                    className="relative flex-shrink-0 mt-1"
                  />

                  <div className="flex items-start gap-2.5 flex-1">
                    <label
                      htmlFor="newsletter-consent"
                      className="relative flex-1 mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#646466] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] [font-style:var(--body-xsmall-font-style)] cursor-pointer"
                    >
                      I&apos;m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </SmoothScrollWrapper>
        </div>
      </div>

      <div className="w-full max-w-[1312px] items-start justify-center flex flex-col px-4">
        <div className="relative w-full h-px bg-[#90919c29]" />

        <SmoothScrollWrapper animationType="fade" delay={800}>
          <div className="items-start gap-8 px-0 py-[30px] w-full flex flex-col md:flex-row">
          <div className="flex flex-col items-start justify-center gap-8 flex-1">
            <div className="inline-flex items-center justify-center gap-1">
              <div className="inline-flex items-center">
                <div className="relative w-fit mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] whitespace-nowrap [font-style:var(--body-xsmall-font-style)]">
                  © 2019-
                </div>

                <div className="relative w-fit mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] whitespace-nowrap [font-style:var(--body-xsmall-font-style)]">
                  2025
                </div>
              </div>

              <div className="relative w-fit mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] whitespace-nowrap [font-style:var(--body-xsmall-font-style)]">
                Colabrio. All rights reserved.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-center gap-8 flex-1">
            <div className="inline-flex items-start gap-2 flex-wrap">
              {footerLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <div className="relative w-fit mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] whitespace-nowrap [font-style:var(--body-xsmall-font-style)] cursor-pointer hover:text-white transition-colors">
                    {link}
                  </div>
                  {index < footerLinks.length - 1 && (
                    <div className="relative w-fit mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] whitespace-nowrap [font-style:var(--body-xsmall-font-style)]">
                      |
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          </div>
        </SmoothScrollWrapper>
      </div>
    </footer>
  );
};
