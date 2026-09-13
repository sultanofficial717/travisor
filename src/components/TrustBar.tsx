import React from "react";
import { Compass, Sparkles, ShieldCheck, Layers } from "lucide-react";

export const TrustBar: React.FC = () => {
  const trustPillars = [
    {
      icon: Sparkles,
      title: "Personalized Guidance",
      description: "Every application starts with your specific academic goals and financial background.",
    },
    {
      icon: Compass,
      title: "Destination Expertise",
      description: "In-depth knowledge across UK, Australia, Canada, USA, Germany, and Europe.",
    },
    {
      icon: Layers,
      title: "End-to-End Support",
      description: "From initial course shortlisting to final visa filing and pre-departure briefings.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Process",
      description: "Clear steps, genuine eligibility assessment, and no false guarantees.",
    },
  ];

  return (
    <section className="py-10 bg-travsior-bgLight border-y border-travsior-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-travsior-blue flex-shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-travsior-navy mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-travsior-navyMuted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
