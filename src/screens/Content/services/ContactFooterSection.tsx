import React from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { SmoothScrollWrapper } from "../../../components/ui/smooth-scroll-wrapper";

const officeLocations = [
  {
    city: "Rotterdam",
    company: "Colabrio Digital Media LTD.",
    address: "Graaf Florisstraat 22A,\n3021 CH Rotterdam\nNetherlands",
  },
  {
    city: "Barcelona",
    company: "Colabrio Digital LTD.",
    address: "365 Gran Via de Corts\nCatalanes, BA 08015",
  },
];

const contactSections = [
  {
    title: "Work inquiries",
    description: "Interested in working with us?",
    contact: "hello@clbthemes.com",
  },
  {
    title: "Career",
    description: "Looking for a job opportunity?",
    contact: "See open positions",
  },
];

const footerLinks = [
  "Site Map",
  "Sale Terms",
  "Privacy & Cookie Policy",
  "Website Terms of Use",
];

export const ContactFooterSection = (): JSX.Element => {
  return (
    <footer id="contact-footer" className="w-full bg-[#151517]">
      <div className="max-w-[1312px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links Column */}
          <SmoothScrollWrapper animationType="slide" delay={0}>
            <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="relative w-[79px] h-10">
                <img
                  className="absolute w-[99.83%] h-full top-0 left-0"
                  alt="Ohio theme"
                  src="https://c.animaapp.com/mfo404djpVGKfZ/img/ohio-theme-.svg"
                />
                <div className="absolute top-[calc(50%-17px)] left-[67.16%] w-[31.65%] h-4 flex items-center justify-center px-1 py-[3px] rounded-md border-[1.5px] border-solid border-[#ffffffbf]">
                  <div className="[font-family:'SF_Pro_Display-Bold',Helvetica] font-bold text-[#ffffffbf] text-[11px] tracking-[-0.11px] leading-[11px]">
                    3.4
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#ffffff] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                Fb.&nbsp;&nbsp;/&nbsp;&nbsp;Ig.&nbsp;&nbsp;/&nbsp;&nbsp;Tw.&nbsp;&nbsp;/&nbsp;&nbsp;Be.
              </div>
            </div>
          </div>
          </SmoothScrollWrapper>

          {/* Office Locations */}
          {officeLocations.map((location, index) => (
            <SmoothScrollWrapper
              key={location.city}
              animationType="fade"
              delay={200 + index * 100}
            >
              <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#ffffff] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                  {location.city}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[15.6px] leading-[15.6px]">
                  <span className="font-[number:var(--body-small-font-weight)] text-[#ffffffbf] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] font-body-small [font-style:var(--body-small-font-style)] text-[length:var(--body-small-font-size)]">
                    {location.company}
                    <br />
                  </span>
                  <span className="text-[#ffffffbf] tracking-[-0.02px] leading-[24.9px] whitespace-pre-line">
                    {location.address}
                  </span>
                </div>
              </div>
            </div>
            </SmoothScrollWrapper>
          ))}

          {/* Newsletter Signup Column */}
          <SmoothScrollWrapper animationType="scale" delay={400}>
            <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#ffffffbf] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]">
                Sign up for the newsletter
              </div>

                <div className="flex flex-col gap-4">
                <div className="relative h-11 group">
                  <Input
                    className="w-full h-11 px-4 bg-[#88888914] border-0 rounded-lg text-[#646466] font-body-base font-[number:var(--body-base-font-weight)] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] focus:bg-[#ffffff1a] focus:ring-2 focus:ring-[#d90a2c] transition-all duration-300"
                    placeholder="Enter your email"
                  />
                  <Button className="absolute right-0 top-0 h-11 px-5 py-3 bg-[#d90a2c] hover:bg-[#b8092a] border-0 rounded-lg transition-all duration-300 hover:scale-105">
                    <div className="font-action-base font-[number:var(--action-base-font-weight)] text-[#ffffff] text-[length:var(--action-base-font-size)] tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] [font-style:var(--action-base-font-style)]">
                      Sign Up
                    </div>
                  </Button>
                </div>

                <div className="flex items-start gap-2">
                  <img
                    className="flex-shrink-0"
                    alt="Holder"
                    src="https://c.animaapp.com/mfo404djpVGKfZ/img/holder.svg"
                  />
                  <div className="flex-1 font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#646466] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] [font-style:var(--body-xsmall-font-style)]">
                    I&apos;m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SmoothScrollWrapper>
        </div>

        {/* Contact Sections - Work Inquiries and Career */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:mt-0 lg:col-span-2">
          {contactSections.map((section, index) => (
            <SmoothScrollWrapper
              key={section.title}
              animationType="fade"
              delay={600 + index * 100}
            >
              <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div
                  className={`font-title-h6 font-[number:var(--title-h6-font-weight)] ${section.title === "Work inquiries" ? "text-[#ffffffbf]" : "text-[#ffffff]"} text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)]`}
                >
                  {section.title}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[15.6px] leading-[15.6px]">
                  <span className="text-[#ffffffbf] tracking-[-0.02px] leading-[24.9px]">
                    {section.description}
                    <br />
                  </span>
                  <span className="font-[number:var(--body-small-font-weight)] text-[#ffffffbf] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] font-body-small [font-style:var(--body-small-font-style)] text-[length:var(--body-small-font-size)]">
                    {section.contact}
                  </span>
                </div>
              </div>
            </div>
            </SmoothScrollWrapper>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1312px] mx-auto px-4">
        <div className="w-full h-px bg-[#90919c29]" />

        <SmoothScrollWrapper animationType="fade" delay={800}>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 py-[30px]">
          <div className="flex items-center gap-1">
            <div className="font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] [font-style:var(--body-xsmall-font-style)]">
              © 2019-2025 Colabrio. All rights reserved.
            </div>
          </div>

          <div className="flex items-center gap-2">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link}>
                <div className="font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] [font-style:var(--body-xsmall-font-style)] cursor-pointer hover:text-white transition-colors">
                  {link}
                </div>
                {index < footerLinks.length - 1 && (
                  <div className="font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#ffffffbf] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] [font-style:var(--body-xsmall-font-style)]">
                    |
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        </SmoothScrollWrapper>
      </div>
    </footer>
  );
};
