import React from "react";
import { FloatingCTA } from "../../../components/ui/floating-cta";
import { ContactFooterSection } from "./ContactFooterSection";
import { SustainabilityMainContentSection } from "./SustainabilityMainContentSection.tsx";
import { ProjectCallToActionSection } from "./ProjectCallToActionSection";
import SustainabilityHero from "./SustainabilityHero.tsx";

export const Home = (): JSX.Element => {
  return (
    <main
      className="relative w-full min-h-screen bg-white overflow-hidden"
      data-model-id="42:33829"
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 flex justify-center">
        <div className="relative w-full max-w-[1312px] h-full">
          <div
            className="absolute top-1/2 left-1/2 w-[5371px] h-px bg-[#90919c29] -rotate-90 opacity-75 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "calc(50% - 840px)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[5371px] h-px bg-[#90919c29] -rotate-90 opacity-75 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "calc(50% - 504px)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[5371px] h-px bg-[#90919c29] -rotate-90 opacity-75 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "calc(50% - 168px)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[5371px] h-px bg-[#90919c29] -rotate-90 opacity-75 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "calc(50% + 168px)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[5371px] h-px bg-[#90919c29] -rotate-90 opacity-75 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "calc(50% + 471px)" }}
          />
        </div>
      </div>

      {/* Main content sections with entrance animations */}
      <div className="relative z-10">
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <SustainabilityHero />
          <SustainabilityMainContentSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <ProjectCallToActionSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <ContactFooterSection />
        </section>
      </div>

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  );
};

export default Home;