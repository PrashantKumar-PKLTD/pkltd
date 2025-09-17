import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const testimonials = [
  {
    id: 1,
    badge: "Design Quality",
    quote: "I would put 10 stars to all points. From theme features, design, to Customer support, I only have to say \"WOW\". Cannot express myself better, to explain how great and satisfied we are with this theme and their support!",
    author: "Colin Lucido",
    position: "UI/UX Designer, Colabrio",
    current: 3,
    total: 5,
    image: "https://c.animaapp.com/mflezxv1yE4F7m/img/col-3.png"
  },
  {
    id: 2,
    badge: "Development Speed",
    quote: "Outstanding development experience! The code quality is exceptional and the documentation is crystal clear. This has significantly accelerated our project timeline and improved our overall workflow.",
    author: "Sarah Chen",
    position: "Lead Developer, TechFlow",
    current: 1,
    total: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=712&h=580&fit=crop&crop=faces"
  },
  {
    id: 3,
    badge: "Customer Support",
    quote: "The support team is incredibly responsive and knowledgeable. They went above and beyond to help us customize the solution to fit our specific needs. Truly exceptional service!",
    author: "Michael Rodriguez",
    position: "Product Manager, InnovateCorp",
    current: 2,
    total: 5,
    image: "/customer.jpg"
  },
  {
    id: 4,
    badge: "User Experience",
    quote: "The user interface is intuitive and beautifully designed. Our clients love the seamless experience, and we've seen a significant increase in user engagement since implementation.",
    author: "Emma Thompson",
    position: "UX Director, DesignHub",
    current: 4,
    total: 5,
    image: "/user.jpg"
  },
  {
    id: 5,
    badge: "Performance",
    quote: "Incredible performance optimization! Our website loads faster than ever before, and the SEO improvements have boosted our search rankings significantly. Highly recommended!",
    author: "David Park",
    position: "Marketing Director, GrowthLab",
    current: 5,
    total: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=712&h=580&fit=crop&crop=faces"
  }
];

export const ServicesSection = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];
  return (
    <section className="flex-col items-center justify-center self-stretch w-full flex-[0_0_auto] bg-[#88888914] flex relative">
      <div className="items-center justify-center self-stretch w-full flex-[0_0_auto] flex flex-col relative">
        <div className="items-center justify-center self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start gap-10 px-0 py-24 relative flex-1 self-stretch grow">
            <div className="items-start gap-8 px-0 py-24 self-stretch w-full flex-[0_0_auto] bg-[#ffffff] flex relative">
              <div className="flex flex-col items-start gap-10 pl-[184px] pr-0 py-0 relative flex-1 self-stretch grow">
                <div className="gap-2 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0">
                  <div className="text-[#151517] relative w-fit mt-[-1.00px] font-title-subtitle font-[number:var(--title-subtitle-font-weight)] text-[length:var(--title-subtitle-font-size)] tracking-[var(--title-subtitle-letter-spacing)] leading-[var(--title-subtitle-line-height)] whitespace-nowrap [font-style:var(--title-subtitle-font-style)]">
                    TESTIMONIALS
                  </div>

                  <h2 className="text-[#101014] text-[52px] tracking-[0] leading-[54.6px] relative self-stretch [font-family:'Playfair_Display',Helvetica] font-black">
                    We help to achieve
                    <br />
                    mutual goals.
                  </h2>
                </div>

                <div className="flex flex-col items-start gap-3 self-stretch w-full relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <Badge
                      variant="secondary"
                      className="inline-flex items-center gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#88888929] rounded-lg border-0"
                    >
                      <span className="relative w-fit mt-[-2.00px] font-caption-base font-[number:var(--caption-base-font-weight)] text-[#151517] text-[length:var(--caption-base-font-size)] text-center tracking-[var(--caption-base-letter-spacing)] leading-[var(--caption-base-line-height)] whitespace-nowrap [font-style:var(--caption-base-font-style)]">
                        {testimonial.badge}
                      </span>
                    </Badge>

                    <blockquote className="relative self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-[#151517] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                      {testimonial.quote}
                    </blockquote>

                    <div className="inline-flex flex-col items-start gap-1 pt-0 pb-[5px] px-0 relative flex-[0_0_auto]">
                      <div className="mt-[-1.00px] font-title-h6 font-[number:var(--title-h6-font-weight)] text-[#101014] text-[length:var(--title-h6-font-size)] tracking-[var(--title-h6-letter-spacing)] leading-[var(--title-h6-line-height)] whitespace-nowrap relative w-fit [font-style:var(--title-h6-font-style)]">
                        {testimonial.author}
                      </div>

                      <div className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-[#151517] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <div className="flex flex-col items-start gap-10 self-stretch w-full relative flex-[0_0_auto]">
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-24 items-center gap-2 relative">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#151517] text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                            {String(testimonial.current).padStart(2, '0')}
                          </div>

                          <div className="relative w-9 h-0.5 bg-[#646466]" />

                          <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#151517] text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                            {String(testimonial.total).padStart(2, '0')}
                          </div>
                        </div>

                        <div className="inline-flex items-start relative flex-[0_0_auto]">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevTestimonial}
                            className="rotate-180 flex w-14 h-14 items-center justify-center gap-1.5 p-3 relative rounded-[30px] h-auto hover:bg-gray-100 transition-colors"
                          >
                            <ChevronLeftIcon className="w-6 h-6" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextTestimonial}
                            className="flex w-14 h-14 items-center justify-center gap-1.5 p-3 relative rounded-[30px] h-auto hover:bg-gray-100 transition-colors"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative self-stretch w-[113px]" />
            </div>
          </div>

          <div 
            className="relative self-stretch w-[712px] bg-cover bg-center bg-no-repeat translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] transition-all duration-500 ease-in-out" 
            style={{ backgroundImage: `url(${testimonial.image})` }}
          />
        </div>
      </div>
    </section>
  );
};
