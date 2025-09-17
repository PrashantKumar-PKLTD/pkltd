import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  const teamCards = [
    {
      subtitle: "CAPABILITIES",
      title: "Team \nmanagement. \nbrand strategy.",
      buttonText: "View Services",
      backgroundImage: "https://c.animaapp.com/mflezxv1yE4F7m/img/col.png",
      arrowSrc: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-5.svg",
      paddingLeft: "pl-[184px]",
      paddingRight: "pr-24",
      animationDelay: "0ms",
    },
    {
      subtitle: "SHOWCASE",
      title: "Our most recent digital and strategy projects.",
      buttonText: "View Projects",
      backgroundImage: "./showimg.jpg",
      arrowSrc: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-1.svg",
      paddingLeft: "pl-24",
      paddingRight: "pr-[184px]",
      animationDelay: "200ms",
    },
  ];

  return (
    <section className="flex-col items-center justify-center self-stretch w-full flex-[0_0_auto] flex relative">
      <div className="items-center justify-center self-stretch w-full flex-[0_0_auto] flex flex-col relative">
        <div className="items-center justify-center self-stretch w-full flex-[0_0_auto] flex relative">
          {teamCards.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col w-[840px] h-[560px] items-start justify-center gap-8 ${card.paddingLeft} ${card.paddingRight} py-24 relative border-0 rounded-none translate-y-[-1rem] animate-fade-in opacity-0`}
              style={
                {
                  background: `url(${card.backgroundImage}) 50% 50% / cover`,
                  "--animation-delay": card.animationDelay,
                } as React.CSSProperties
              }
            >
              <CardContent className="gap-2 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto] p-0">
                <div className="text-dark-light-dark-scheme relative w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                  {card.subtitle}
                </div>

                <div className="relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black text-white text-[52px] tracking-[0] leading-[54.6px] whitespace-pre-line">
                  {card.title}
                </div>
              </CardContent>

              <Button className="relative bg-[#4487f2] inline-flex h-11 items-center justify-center gap-2 px-5 py-3 rounded-lg overflow-hidden border-0 hover:bg-[#3a75d9] transition-colors h-auto">
                <span className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-action-base font-[number:var(--action-base-font-weight)] text-white text-[length:var(--action-base-font-size)] text-center tracking-[var(--action-base-letter-spacing)] leading-[var(--action-base-line-height)] whitespace-nowrap [font-style:var(--action-base-font-style)]">
                  {card.buttonText}
                </span>

                <img
                  className="mt-[-2.00px] mb-[-2.00px] relative w-6 h-6"
                  alt="Arrow"
                  src={card.arrowSrc}
                />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
