import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const newsArticles = [
  {
    id: 1,
    author: {
      name: "Colin Lucido",
      avatar: "https://c.animaapp.com/mflezxv1yE4F7m/img/avatar-2.png",
    },
    date: "June 24, 2025",
    readTime: "9 min read",
    title: "The High-Quality Architecture Solutions from a Silicon Valley.",
    tags: ["Case Study", "Perspectives"],
    leftArrow: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-9.svg",
    rightArrow: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-8.svg",
  },
  {
    id: 2,
    author: {
      name: "Colin Lucido",
      avatar: "https://c.animaapp.com/mflezxv1yE4F7m/img/avatar-2.png",
    },
    date: "June 24, 2025",
    readTime: "9 min read",
    title: "Outdoor Work: a Designer's Checklist for Every UX Project.",
    tags: ["Case Study", "Perspectives"],
    leftArrow: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-3.svg",
    rightArrow: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-4.svg",
  },
  {
    id: 3,
    author: {
      name: "Colin Lucido",
      avatar: "https://c.animaapp.com/mflezxv1yE4F7m/img/avatar-2.png",
    },
    date: "June 24, 2025",
    readTime: "9 min read",
    title: "Explore our new series on overcoming adversity.",
    tags: ["Case Study", "Perspectives"],
    leftArrow: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-10.svg",
    rightArrow: "https://c.animaapp.com/mflezxv1yE4F7m/img/arrow-11.svg",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex-col items-center justify-center px-0 py-24 self-stretch w-full flex-[0_0_auto] bg-[#88888914] flex relative">
      <div className="w-full max-w-[1312px] items-center flex-[0_0_auto] flex flex-col relative">
        <header className="items-center justify-center gap-8 pt-0 pb-8 px-0 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
            <div className="w-full max-w-[400px] gap-2 flex flex-col items-start relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
              <div className="text-[#151517] relative w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                NON-PROFIT INITIATIVE
              </div>

              <h2 className="text-[#101014] text-[38px] tracking-[0.38px] leading-[43.7px] relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black">
                Recent news.
              </h2>
            </div>
          </div>

          <div className="relative flex-1 self-stretch grow" />
        </header>

        <div className="items-center justify-center gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          {newsArticles.map((article, index) => (
            <Card
              key={article.id}
              className="flex flex-col w-[416px] h-[416px] items-start relative rounded-lg overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${200 + index * 200}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-between relative flex-1 self-stretch w-full grow bg-[#88888914] p-0">
                <div className="justify-between flex items-center p-7 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        src={article.author.avatar}
                        alt={article.author.name}
                      />
                      <AvatarFallback>
                        {article.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="inline-flex flex-[0_0_auto] flex-col items-start relative">
                      <div className="relative w-fit mt-[-1.00px] font-body-xsmall font-[number:var(--body-xsmall-font-weight)] text-[#151517] text-[length:var(--body-xsmall-font-size)] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] whitespace-nowrap [font-style:var(--body-xsmall-font-style)]">
                        Posted by
                      </div>

                      <div className="[font-family:'Inter',Helvetica] font-normal text-transparent text-[14.8px] leading-[14.8px] relative w-fit">
                        <span className="font-[number:var(--body-xsmall-font-weight)] text-[#151517] tracking-[var(--body-xsmall-letter-spacing)] leading-[var(--body-xsmall-line-height)] font-body-xsmall [font-style:var(--body-xsmall-font-style)] text-[length:var(--body-xsmall-font-size)]">
                          {article.author.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-start relative flex-[0_0_auto]">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rotate-180 flex w-14 h-14 items-center justify-center gap-1.5 p-3 relative rounded-[30px] h-auto"
                    >
                      <img
                        className="-rotate-180 relative w-6 h-6"
                        alt="Previous"
                        src={article.leftArrow}
                      />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex w-14 h-14 items-center justify-center gap-1.5 p-3 relative rounded-[30px] h-auto"
                    >
                      <img
                        className="relative w-6 h-6"
                        alt="Next"
                        src={article.rightArrow}
                      />
                    </Button>
                  </div>
                </div>

                <div className="gap-3 flex items-center p-7 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex gap-3 flex-1 grow rounded-[0px_0px_4px_4px] overflow-hidden flex-col items-start relative">
                    <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                      <time className="relative w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#151517] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                        {article.date}
                      </time>

                      <span className="relative w-fit mt-[-1.00px] font-caption-base font-[number:var(--caption-base-font-weight)] text-[#4487f2] text-[length:var(--caption-base-font-size)] tracking-[var(--caption-base-letter-spacing)] leading-[var(--caption-base-line-height)] whitespace-nowrap [font-style:var(--caption-base-font-style)]">
                        ·
                      </span>

                      <span className="w-fit mt-[-1.00px] text-[#151517] text-[length:var(--caption-base-font-size)] tracking-[var(--caption-base-letter-spacing)] leading-[var(--caption-base-line-height)] whitespace-nowrap relative font-caption-base font-[number:var(--caption-base-font-weight)] [font-style:var(--caption-base-font-style)]">
                        {article.readTime}
                      </span>
                    </div>

                    <div className="flex-col items-start gap-2.5 flex relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] font-h4-header-blog-mod font-[number:var(--h4-header-blog-mod-font-weight)] text-[#101014] text-[length:var(--h4-header-blog-mod-font-size)] tracking-[var(--h4-header-blog-mod-letter-spacing)] leading-[var(--h4-header-blog-mod-line-height)] [font-style:var(--h4-header-blog-mod-font-style)]">
                        {article.title}
                      </h3>
                    </div>

                    <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="inline-flex items-center justify-center gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#88888929] rounded-lg"
                        >
                          <span className="relative w-fit mt-[-2.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#151517] text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
