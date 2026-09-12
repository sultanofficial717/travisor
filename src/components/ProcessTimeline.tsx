"use client";

import React from "react";
import { ArrowRight, Compass, CheckCircle2 } from "lucide-react";

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      text: "Tell us where you want to go and what you want to achieve. We review your academic history, target courses, and personal priorities.",
    },
    {
      num: "02",
      title: "Plan",
      text: "We help identify suitable pathways, shortlisted universities, scholarship windows, and clear next steps.",
    },
    {
      num: "03",
      title: "Prepare",
      text: "Organize academic transcripts, polished Statement of Purpose (SOP), recommendation letters, and financial proofs.",
    },
    {
      num: "04",
      title: "Apply",
      text: "Move forward with structured, prompt university applications and accurate visa portal filings.",
    },
    {
      num: "05",
      title: "Get Ready",
      text: "Receive admissions & visa decision, attend pre-departure guidance, and prepare for accommodation and travel.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Transparent Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Your journey, simplified.
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-3">
            From the initial conversation to boarding your flight, every phase has a clear purpose.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-card bg-travsior-bgLight/70 border border-travsior-border text-left flex flex-col justify-between hover:border-travsior-blue hover:bg-white hover:shadow-card transition-all"
            >
              <div>
                <span className="text-3xl font-extrabold text-travsior-blue tracking-tight block mb-3 font-mono">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-travsior-navy mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-travsior-navyMuted leading-relaxed">
                  {step.text}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-travsior-blue">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Phase Completed</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base font-semibold shadow-md shadow-blue-500/15 hover:shadow-lg transition-all"
          >
            <span>Start My Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
