"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, GraduationCap, Compass, Briefcase, CheckCircle2, Plane } from "lucide-react";
import { DESTINATIONS } from "./Globe";

const Globe = dynamic(() => import("./Globe").then((mod) => mod.Globe), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-50/50 flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-semibold text-slate-500">
        Loading 3D Global Routes...
      </span>
    </div>
  ),
});

interface HeroProps {
  onOpenConsultation: (goal?: string) => void;
  onScrollToEligibility: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onScrollToEligibility,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white min-h-[92vh] flex flex-col justify-center">
      {/* 1. Full Hero Background 3D Globe with 40-45% Transparency */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto opacity-[0.43] select-none z-0">
        <Globe
          isBackground={true}
          className="w-full h-full"
          onSelectDestination={(country) => onOpenConsultation(country)}
        />
      </div>

      {/* 2. Soft Ambient Vignette & Scrim for 100% Crisp Foreground Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/85 pointer-events-none z-[1]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[650px] h-[650px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 w-[550px] h-[550px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* 3. Foreground Bold and Clearly Readable Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="max-w-3xl lg:max-w-4xl flex flex-col items-start text-left pointer-events-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/95 border-2 border-blue-200 text-travsior-navy text-xs sm:text-sm font-black mb-6 shadow-sm backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-travsior-blue animate-pulse" aria-hidden="true" />
            <span>Your Next Chapter Starts Abroad • 500+ Universities Worldwide</span>
          </div>

          {/* Main Headline - Extra Bold & Clear */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-travsior-navy leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            Your Way Abroad <br className="hidden sm:inline" />
            <span className="text-travsior-blue">Starts Here.</span>
          </h1>

          {/* Supporting Copy - Bold & High Contrast */}
          <p className="text-lg sm:text-xl font-bold text-travsior-navy/90 max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
            From choosing the right destination to preparing your application, Travsior gives you the guidance, clarity, and support you need to move forward with confidence.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base sm:text-lg font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all border-2 border-transparent"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              onClick={onScrollToEligibility}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-white/95 hover:bg-white text-travsior-navy font-black text-base sm:text-lg border-2 border-slate-300 hover:border-travsior-blue shadow-md hover:shadow-lg transition-all backdrop-blur-sm"
            >
              <span>Check Your Eligibility</span>
            </button>
          </div>

          {/* Hero Services Trust Line */}
          <div className="inline-flex flex-wrap items-center gap-y-2.5 gap-x-4 px-5 py-3 rounded-2xl bg-white/95 border-2 border-slate-200/90 shadow-md backdrop-blur-md text-xs sm:text-sm font-black text-travsior-navy mb-6">
            <span className="text-travsior-blue font-black uppercase tracking-wider">Services:</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> Study Visa
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> Visit Visa
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> University Admissions
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-travsior-blue" aria-hidden="true" /> Scholarships
            </span>
          </div>

          {/* Quick Destination Navigation in Foreground */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="text-xs font-black text-travsior-navy uppercase tracking-wider flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-btn border border-slate-200 shadow-sm backdrop-blur-sm">
              <Plane className="w-3.5 h-3.5 text-travsior-blue" />
              Destinations:
            </span>
            {DESTINATIONS.slice(0, 6).map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => onOpenConsultation(d.country)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border-2 border-slate-200/80 hover:border-travsior-blue text-xs font-black text-travsior-navy hover:text-travsior-blue shadow-sm hover:shadow-md transition-all backdrop-blur-sm"
              >
                <span>{d.flag}</span>
                <span>{d.country}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 05: Hero Conversion Layer (Pathway Selector) */}
        <div className="mt-6 pt-8 border-t-2 border-slate-200/80 pointer-events-auto">
          <div className="text-left mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-travsior-blue bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block shadow-sm">
              Step 01: Self-Identify Your Goal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-travsior-navy mt-2">
              What are you planning?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Study Abroad */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Study Abroad")}
              className="cursor-pointer group p-6 rounded-card bg-white/95 backdrop-blur-md border-2 border-slate-200/90 hover:border-travsior-blue hover:shadow-cardHover transition-all duration-200 text-left flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-travsior-blue shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-travsior-blue mb-4 group-hover:bg-travsior-blue group-hover:text-white transition-all shadow-sm">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-travsior-navy mb-2 group-hover:text-travsior-blue transition-colors">
                  Study Abroad
                </h3>
                <p className="text-sm font-semibold text-travsior-navyMuted leading-relaxed mb-6">
                  Find universities, choose a destination, explore scholarships, and build your complete application.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-black text-travsior-blue group-hover:translate-x-1 transition-transform">
                <span>Explore Study Options</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>

            {/* Card 2: Visit Visa */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Visit Visa")}
              className="cursor-pointer group p-6 rounded-card bg-white/95 backdrop-blur-md border-2 border-slate-200/90 hover:border-travsior-blue hover:shadow-cardHover transition-all duration-200 text-left flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-travsior-blue shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-travsior-blue mb-4 group-hover:bg-travsior-blue group-hover:text-white transition-all shadow-sm">
                  <Compass className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-travsior-navy mb-2 group-hover:text-travsior-blue transition-colors">
                  Visit Visa
                </h3>
                <p className="text-sm font-semibold text-travsior-navyMuted leading-relaxed mb-6">
                  Get structured guidance for your tourist, family, or business visit visa application and financial documentation.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-black text-travsior-blue group-hover:translate-x-1 transition-transform">
                <span>Explore Visit Visa</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>

            {/* Card 3: Work / Career */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Work & Professional Pathway")}
              className="cursor-pointer group p-6 rounded-card bg-white/95 backdrop-blur-md border-2 border-slate-200/90 hover:border-travsior-blue hover:shadow-cardHover transition-all duration-200 text-left flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-travsior-blue shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-travsior-blue mb-4 group-hover:bg-travsior-blue group-hover:text-white transition-all shadow-sm">
                  <Briefcase className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-travsior-navy mb-2 group-hover:text-travsior-blue transition-colors">
                  Work / Career
                </h3>
                <p className="text-sm font-semibold text-travsior-navyMuted leading-relaxed mb-6">
                  Explore international opportunities, post-study work routes, and professional migration pathways.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-black text-travsior-blue group-hover:translate-x-1 transition-transform">
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
