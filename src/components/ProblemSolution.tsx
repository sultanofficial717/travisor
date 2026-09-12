"use client";

import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface ProblemSolutionProps {
  onOpenConsultation: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenConsultation }) => {
  const painPoints = [
    "Too many universities and confusing ranking lists",
    "Complex, varying eligibility & GPA requirements",
    "Unclear financial and statement of purpose (SOP) documentation",
    "Varying visa rules and high risk of visa refusal",
    "Fear of making an irreversible, expensive mistake",
    "Impersonal agents who push partner colleges over your goals",
  ];

  const travsiorSolutions = [
    {
      title: "Student-Centric Shortlisting",
      desc: "Target institutions selected solely on academic fit and return on investment, not agency commission rates.",
    },
    {
      title: "Accurate SOP & Visa Prep",
      desc: "Rigorous document reviews and tailored statements of purpose that meet official immigration standards.",
    },
    {
      title: "Transparent Cost Analysis",
      desc: "Upfront tuition breakdowns, realistic living expense estimates, and scholarship application support.",
    },
    {
      title: "Direct Advisor Access",
      desc: "Consistent guidance from experienced mobility consultants who know your case personally.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Fixed Issue 7: text-blue-900 on bg-blue-50 provides > 10:1 contrast */}
          <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            The Travsior Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Going abroad shouldn’t feel complicated.
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-4 leading-relaxed">
            Traditional overseas consultancy often leaves students confused by paperwork and hidden agendas. We replace anxiety with clarity and objective guidance.
          </p>
        </div>

        {/* Comparison Grid: Traditional vs Travsior */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Traditional Way */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-card bg-slate-50 border border-slate-200 flex flex-col justify-between text-left">
            <div>
              {/* Fixed Issue 8: text-rose-700 (#be123c) yields 6.01:1 contrast on #f8fafc */}
              <div className="flex items-center gap-2 text-rose-700 mb-4">
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold">The Traditional Way</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Overwhelming, Opacity &amp; Pressure
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Most students get stuck in endless research, conflicting advice from forums, and visa agents pushing only high-commission colleges.
              </p>
              <ul className="space-y-3">
                {painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Travsior Way */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-card bg-travsior-navy text-white shadow-card flex flex-col justify-between relative overflow-hidden text-left">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-emerald-400 mb-4">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold">The Travsior Way</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                A Guided, Fast &amp; Transparent Pathway
              </h3>
              <p className="text-slate-200 text-sm sm:text-base mb-6 leading-relaxed">
                We empower your ambitions with honest profile evaluation, university shortlisting tailored strictly to your goals, and institutional-grade visa documentation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {travsiorSolutions.map((sol, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-white mb-1">{sol.title}</h4>
                    <p className="text-xs text-slate-300">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Issue 9: bg-travsior-blue (#0958D9) yields 6.16:1 contrast against white */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-slate-300">Ready to see your options?</span>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
