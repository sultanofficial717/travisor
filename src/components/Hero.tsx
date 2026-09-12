"use client";

import React from "react";
import { ArrowRight, GraduationCap, Compass, Briefcase, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenConsultation: (goal?: string) => void;
  onScrollToEligibility: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onScrollToEligibility,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Background Decorative Gradients - contained without overlaying text */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] bg-travsior-bgLight rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 -translate-x-1/3 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow - Fixed Issue 2: text-blue-900 on bg-blue-50/border-blue-200 achieves >10:1 contrast */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-travsior-blue animate-pulse" aria-hidden="true" />
              <span>Your next chapter starts abroad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-travsior-navy leading-[1.1] tracking-tight mb-5">
              Your Way Abroad <br className="hidden sm:inline" />
              <span className="text-travsior-blue">Starts Here.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-travsior-navyMuted max-w-xl leading-relaxed mb-8">
              From choosing the right destination to preparing your application, Travsior gives you the guidance, clarity, and support you need to move forward with confidence.
            </p>

            {/* Primary & Secondary CTAs - Fixed Issue 3: bg-travsior-blue (#0958D9) yields 6.16:1 contrast against white */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                onClick={onScrollToEligibility}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-btn bg-white hover:bg-travsior-bgLight text-travsior-navy font-semibold text-base border border-travsior-border hover:border-travsior-blue transition-all"
              >
                <span>Check Your Eligibility</span>
              </button>
            </div>

            {/* Hero Trust Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-2 text-xs sm:text-sm font-medium text-travsior-navyMuted border-t border-slate-100 pt-5 w-full">
              <span className="text-travsior-navy font-bold mr-1">Services:</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> Study Visa
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 inline-block mx-1.5" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> Visit Visa
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 inline-block mx-1.5" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> University Admissions
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 inline-block mx-1.5" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> Scholarships
              </span>
            </div>
          </div>

          {/* Hero Right Visual Column - Fixed Issues 55, 56, 57: Solid bg-white container resolves determinate contrast */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-card border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="International university students collaborating on campus"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-travsior-navy/70 via-transparent to-transparent pointer-events-none" />

                {/* Solid opaque white card eliminates gradient background contrast uncertainty */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white border border-slate-200 shadow-lg text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-travsior-blue tracking-wide">
                      Admissions Open
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                      Jan &amp; Sept Intakes
                    </span>
                  </div>
                  <p className="text-sm font-bold text-travsior-navy">
                    UK • Australia • Canada • Germany • USA
                  </p>
                  <p className="text-xs text-travsior-navyMuted mt-0.5">
                    Start your university shortlisting &amp; scholarship review today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 05: Hero Conversion Layer (Pathway Selector) - Fixed Issues 4, 5, 6: text-travsior-blue (#0958D9) yields 5.83:1 contrast on #F5F9FF */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-100">
          <div className="text-left mb-6">
            <span className="text-xs font-bold text-travsior-navyMuted">
              Step 01: Self-Identify Your Goal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-travsior-navy mt-1">
              What are you planning?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Study Abroad */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Study Abroad")}
              className="cursor-pointer group p-6 rounded-card bg-travsior-bgLight border border-travsior-border hover:border-travsior-blue hover:bg-white hover:shadow-cardHover transition-all duration-200 text-left flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-travsior-blue"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-travsior-blue mb-4 group-hover:bg-travsior-blue group-hover:text-white transition-all">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-travsior-navy mb-2 group-hover:text-travsior-blue transition-colors">
                  Study Abroad
                </h3>
                <p className="text-sm text-travsior-navyMuted leading-relaxed mb-6">
                  Find universities, choose a destination, explore scholarships, and build your complete application.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-bold text-travsior-blue group-hover:translate-x-1 transition-transform">
                <span>Explore Study Options</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>

            {/* Card 2: Visit Visa */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Visit Visa")}
              className="cursor-pointer group p-6 rounded-card bg-travsior-bgLight border border-travsior-border hover:border-travsior-blue hover:bg-white hover:shadow-cardHover transition-all duration-200 text-left flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-travsior-blue"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-travsior-blue mb-4 group-hover:bg-travsior-blue group-hover:text-white transition-all">
                  <Compass className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-travsior-navy mb-2 group-hover:text-travsior-blue transition-colors">
                  Visit Visa
                </h3>
                <p className="text-sm text-travsior-navyMuted leading-relaxed mb-6">
                  Get structured guidance for your tourist, family, or business visit visa application and financial documentation.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-bold text-travsior-blue group-hover:translate-x-1 transition-transform">
                <span>Explore Visit Visa</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>

            {/* Card 3: Work / Career */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Work & Professional Pathway")}
              className="cursor-pointer group p-6 rounded-card bg-travsior-bgLight border border-travsior-border hover:border-travsior-blue hover:bg-white hover:shadow-cardHover transition-all duration-200 text-left flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-travsior-blue"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-travsior-blue mb-4 group-hover:bg-travsior-blue group-hover:text-white transition-all">
                  <Briefcase className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-travsior-navy mb-2 group-hover:text-travsior-blue transition-colors">
                  Work / Career
                </h3>
                <p className="text-sm text-travsior-navyMuted leading-relaxed mb-6">
                  Explore international opportunities, post-study work routes, and professional migration pathways.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-bold text-travsior-blue group-hover:translate-x-1 transition-transform">
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
