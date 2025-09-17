import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  const statsData = [
    {
      icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons.svg",
      number: "130",
      title: "designers\nand developers",
      description:
        "Using year-over-year approaches and the latest technologies, we will ensure that your new website will be visible, accessible, and treads lightly.",
    },
    {
      icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons.svg",
      number: "15",
      title: "awards for digital\ninnovation",
      description:
        "We've structured our workflow processes were from the funny the century rather, initial all the made, have spare to negatives.",
    },
    {
      icon: "https://c.animaapp.com/mflezxv1yE4F7m/img/bootstrap-icons.svg",
      number: "200",
      title: "Our Satisfied\nClients",
      description:
        "Our team of designers and developers are experts in their field and are passionate about creating beautiful, functional websites that meet the needs of our clients.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center px-0 py-24 relative">
      <div className="w-full max-w-[1312px] items-center justify-center flex flex-col relative">
        <div className="items-center justify-center gap-8 w-full flex relative">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex-col w-[304px] items-start gap-5 self-stretch flex relative bg-transparent border-none shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col w-40 items-start gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="w-8 h-8 flex items-center justify-center gap-1.5 relative">
                      <img
                        className="relative w-8 h-8"
                        alt="Bootstrap icons"
                        src={stat.icon}
                      />
                    </div>

                    <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-components-counter font-[number:var(--components-counter-font-weight)] text-[#101014] text-[length:var(--components-counter-font-size)] tracking-[var(--components-counter-letter-spacing)] leading-[var(--components-counter-line-height)] whitespace-nowrap [font-style:var(--components-counter-font-style)]">
                        {stat.number}
                      </div>

                      <div className="relative w-fit font-title-h4 font-[number:var(--title-h4-font-weight)] text-[#101014] text-[length:var(--title-h4-font-size)] tracking-[var(--title-h4-letter-spacing)] leading-[var(--title-h4-line-height)] whitespace-nowrap [font-style:var(--title-h4-font-style)]">
                        +
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#151517] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] [font-style:var(--title-h6-font-style)] whitespace-pre-line">
                    {stat.title}
                  </div>
                </div>

                <div className="relative self-stretch font-body-base font-[number:var(--body-base-font-weight)] text-[#151517] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] mt-5">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="relative flex-1 self-stretch grow" />
        </div>
      </div>
    </section>
  );
};
