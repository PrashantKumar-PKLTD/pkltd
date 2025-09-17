import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MapSection } from "./sections/MapSection/MapSection";
import { NewsSection } from "./sections/NewsSection/NewsSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

import Header from "../../components/Header";
import AnimatedTextRows from "./sections/AnimatedRowSection/AnimatedTextRows";

const companyLogos = [
  {
    row: 1,
    logos: [
      {
        className:
          "w-[85.99px] h-[31.98px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-3.svg)] bg-[100%_100%]",
      },
      {
        src: "https://c.animaapp.com/mflezxv1yE4F7m/img/electronic-arts-logo.svg",
        alt: "Electronic arts logo",
        className: "w-[52px] h-[52px]",
      },
      {
        className:
          "w-[110px] h-8 bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector.svg)] bg-[100%_100%]",
      },
      {
        className:
          "w-[117.62px] h-[29.67px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-8.svg)] bg-[100%_100%]",
      },
      {
        className:
          "w-[116px] h-9 bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-6.svg)] bg-[100%_100%]",
      },
      {
        src: "https://c.animaapp.com/mflezxv1yE4F7m/img/vector-11.svg",
        alt: "Vector",
        className: "w-[63px] h-[26px]",
      },
    ],
  },
  {
    row: 2,
    logos: [
      {
        className:
          "w-[133px] h-8 mr-[-3.00px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-1.svg)] bg-[100%_100%]",
      },
      {
        className:
          "w-[116.88px] h-[28.16px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-10.svg)] bg-[100%_100%]",
      },
      {
        src: "https://c.animaapp.com/mflezxv1yE4F7m/img/vector-2.svg",
        alt: "Vector",
        className: "w-[105px] h-[35px]",
      },
      {
        className:
          "w-[56.7px] h-[39.75px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/logo-standard.svg)] bg-[100%_100%]",
      },
      {
        className:
          "w-[126.87px] h-[37.88px] bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/vector-9.svg)] bg-[100%_100%]",
      },
      {
        className:
          "w-[122px] h-9 bg-[url(https://c.animaapp.com/mflezxv1yE4F7m/img/national-geographic-1.svg)] bg-[100%_100%]",
      },
    ],
  },
  {
    row: 3,
    logos: [
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Starbucks-Logo.png",
        alt: "Starbucks",
        className: "w-[50px] h-[50px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
        alt: "Nike",
        className: "w-[70px] h-[25px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png",
        alt: "Apple",
        className: "w-[35px] h-[43px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png",
        alt: "Google",
        className: "w-[85px] h-[28px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png",
        alt: "Microsoft",
        className: "w-[108px] h-[23px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
        alt: "Amazon",
        className: "w-[80px] h-[24px] object-contain",
      },
    ],
  },
  {
    row: 4,
    logos: [
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
        alt: "Netflix",
        className: "w-[85px] h-[23px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Spotify-Logo.png",
        alt: "Spotify",
        className: "w-[80px] h-[24px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Uber-Logo.png",
        alt: "Uber",
        className: "w-[60px] h-[25px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Airbnb-Logo.png",
        alt: "Airbnb",
        className: "w-[75px] h-[24px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Tesla-Logo.png",
        alt: "Tesla",
        className: "w-[70px] h-[28px] object-contain",
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2020/04/Adobe-Logo.png",
        alt: "Adobe",
        className: "w-[70px] h-[25px] object-contain",
      },
    ],
  },
];

export const Content = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center w-full"
      data-model-id="4019:47478"
    >
      <Header/>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full">
        <HeroSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full">
        <MapSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full">
        <TeamSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full">
        <CallToActionSection />
      </div>




      <section className="flex items-end justify-around gap-[152px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="w-full max-w-[1680px] items-end justify-between flex">
          <div className="flex flex-col w-[936px] items-center justify-center gap-2.5 px-[425px] py-[246px] [background:url(https://c.animaapp.com/mflezxv1yE4F7m/img/col-2.png)_50%_50%_/_cover]">
            <div className="flex w-[81.72px] h-[66.81px] items-center gap-3">
              <Button
                size="icon"
                className="w-16 h-16 bg-[#151517] rounded-[50px] shadow-outline-shadow-animation hover:bg-[#252527] transition-colors"
              >
                <img
                  className="w-7 h-7"
                  alt="Play"
                  src="https://c.animaapp.com/mflezxv1yE4F7m/img/play.svg"
                />
              </Button>
            </div>
          </div>

          <div className="w-36" />

          <div className="flex items-center gap-2.5 flex-1">
            <img
              className="flex-1 h-[580.59px] object-cover"
              alt="Image"
              src="https://c.animaapp.com/mflezxv1yE4F7m/img/image-1.png"
            />
          </div>

          <div className="w-[184px]" />
        </div>
      </section>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] w-full">
        <ProjectsSection />
      </div>

      <section className="flex flex-col items-center justify-center px-0 py-24 w-full bg-[#88888914] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <div className="w-full max-w-[1312px] items-center justify-center flex flex-col">
          <div className="flex items-start gap-8 w-full">
            {Array.from({ length: 6 }, (_, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col items-start justify-center gap-12 flex-1"
              >
                {companyLogos.map((logoRow, rowIndex) => (
                  <div
                    key={`${colIndex}-${rowIndex}`}
                    className="flex flex-col w-[130px] h-[54px] items-center justify-center"
                  >
                    {logoRow.logos[colIndex]?.src ? (
                      logoRow.logos[colIndex].alt === "Vector" ? (
                        <div className="relative w-[72px] h-[30px]">
                          <img
                            className={`absolute top-0.5 left-0 ${logoRow.logos[colIndex].className}`}
                            alt={logoRow.logos[colIndex].alt}
                            src={logoRow.logos[colIndex].src}
                          />
                        </div>
                      ) : logoRow.logos[colIndex].alt === "Vector" &&
                        rowIndex === 1 ? (
                        <div className="relative w-[106px] h-9">
                          <img
                            className={`absolute top-0 left-0 ${logoRow.logos[colIndex].className}`}
                            alt={logoRow.logos[colIndex].alt}
                            src={logoRow.logos[colIndex].src}
                          />
                        </div>
                      ) : (
                        <img
                          className={logoRow.logos[colIndex].className}
                          alt={logoRow.logos[colIndex].alt}
                          src={logoRow.logos[colIndex].src}
                        />
                      )
                    ) : logoRow.logos[colIndex]?.className ? (
                      <div className={logoRow.logos[colIndex].className} />
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] w-full">
        <AnimatedTextRows />
    </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] w-full">
        <ServicesSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms] w-full">
        <TestimonialsSection />
      </div>

      <section className="flex flex-col w-full h-[600px] items-center justify-center [background:url(https://c.animaapp.com/mflezxv1yE4F7m/img/section.png)_50%_50%_/_cover] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <div className="items-center justify-center flex-1 w-full bg-x-color-black-50 flex flex-col">
          <div className="flex w-[81.72px] h-[66.81px] items-center gap-3">
            <Button
              size="icon"
              className="w-16 h-16 bg-[#151517] rounded-[50px] shadow-outline-shadow-animation hover:bg-[#252527] transition-colors"
            >
              <img
                className="w-7 h-7"
                alt="Play"
                src="https://c.animaapp.com/mflezxv1yE4F7m/img/play.svg"
              />
            </Button>
          </div>
        </div>
      </section>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms] w-full">
        <AboutUsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms] w-full">
        <NewsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms] w-full">
        <ContactSection />
      </div>
    </main>
  );
};
