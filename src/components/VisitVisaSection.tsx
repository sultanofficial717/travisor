"use client";

import React from "react";
import { Compass, CheckCircle, ArrowRight, Plane, Users, Briefcase } from "lucide-react";

interface VisitVisaSectionProps {
  onOpenConsultation: (goal?: string) => void;
}

export const VisitVisaSection: React.FC<VisitVisaSectionProps> = ({ onOpenConsultation }) => {
  const visaCategories = [
    {
      icon: Users,
      title: "Family & Friend Visits",
      desc: "Guidance on sponsorship letters, ties to home country, and genuine visitor evidence.",
    },
    {
      icon: Plane,
      title: "Tourism & Exploration",
      desc: "Comprehensive itinerary planning, hotel bookings, and authentic travel proof.",
    },
    {
      icon: Briefcase,
      title: "Business & Conferences",
      desc: "Corporate invitation verification, trade delegation filings, and meeting itineraries.",
    },
  ];

  const stages = [
    {
      step: "1",
      title: "Understand",
      subtitle: "Profile & Intent Assessment",
      desc: "We analyze your travel history, financial ties, employment standing, and exact purpose of visit to determine case strength.",
    },
    {
      step: "2",
      title: "Prepare",
      subtitle: "Tailored Evidence Checklist",
      desc: "We build an ironclad document portfolio: source of funds, tax returns, property proofs, and detailed cover letters.",
    },
    {
      step: "3",
      title: "Apply",
      subtitle: "Flawless Portal Submission",
      desc: "You submit a meticulously structured application without inconsistencies that commonly trigger refusals.",
    },
  ];

  return (
    <section id="visit-visa" className="py-20 md:py-28 bg-travsior-bgLight border-t border-travsior-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Categories */}
          <div className="lg:col-span-6 text-left">
            {/* Fixed Issue 21: text-blue-900 on bg-blue-50/border-blue-200 provides > 10:1 contrast */}
            <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-flex items-center gap-1.5 mb-4">
              <Compass className="w-3.5 h-3.5 text-travsior-blue" aria-hidden="true" />
              Visitor &amp; Travel Mobility
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy tracking-tight mb-5">
              Planning a trip abroad?
            </h2>
            <p className="text-base sm:text-lg text-travsior-navyMuted leading-relaxed mb-8">
              Whether you’re visiting family, attending a business conference, exploring a new country, or attending a graduation, Travsior helps you understand the requirements before you spend non-refundable visa fees.
            </p>

            <div className="space-y-4 mb-8">
              {visaCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-travsior-border shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-travsior-blueLight text-travsior-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-travsior-navy">{cat.title}</h3>
                      <p className="text-xs sm:text-sm text-travsior-navyMuted mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3-Stage Process Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-travsior-border shadow-card text-left">
              <span className="text-xs font-bold text-travsior-navyMuted">
                3-Step Structured Method
              </span>
              <h3 className="text-2xl font-bold text-travsior-navy mt-1 mb-6">
                How we prepare your visitor file
              </h3>

              <div className="space-y-6">
                {stages.map((stg, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-travsior-navy text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {stg.step}
                    </div>
                    <div>
                      {/* Fixed Issues 23, 24, 25: text-travsior-blue (#0958D9) yields 6.16:1 contrast on #ffffff */}
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-travsior-navy">{stg.title}:</span>
                        <span className="text-xs font-semibold text-travsior-blue">{stg.subtitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-travsior-navyMuted leading-relaxed mt-1">
                        {stg.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-travsior-navyMuted">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Countries supported: UK, USA B1/B2, Schengen, Canada, Australia, UAE, Turkey.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered CTA applying to entire visitor visa section - Fixed Issue 13 */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-card bg-white border border-travsior-border shadow-sm text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-travsior-navy">
              Ready to verify your visitor visa documentation?
            </h4>
            <p className="text-xs sm:text-sm text-travsior-navyMuted mt-1">
              Avoid costly visa refusals with structured, professional document and intent review.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation("Visit Visa")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base font-bold shadow-md hover:shadow-lg transition-all flex-shrink-0"
          >
            <span>Talk to a Visa Consultant</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
