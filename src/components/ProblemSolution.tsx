"use client";

import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface ProblemSolutionProps {
  onOpenConsultation: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenConsultation }) => {
  const comparisonPairs = [
    {
      problem: "Confusing university rankings and commission-driven agents pushing partner colleges.",
      solution: {
        title: "Student-Centric Shortlisting",
        desc: "Institutions selected strictly on your academic fit, budget, and ROI — zero agency commission bias.",
      },
    },
    {
      problem: "Unclear GPA criteria, vague prerequisites, and fear of irreversible application errors.",
      solution: {
        title: "Objective Eligibility Assessment",
        desc: "Precise evaluation of your qualifications with clear, realistic pathway options upfront.",
      },
    },
    {
      problem: "Generic statement of purpose templates and confusing financial documentation rules.",
      solution: {
        title: "Rigorous SOP & Document Review",
        desc: "Bespoke, human-reviewed SOP drafting and institutional-grade financial checklists.",
      },
    },
    {
      problem: "Varying immigration rules, hidden costs, and anxiety over visa refusal risks.",
      solution: {
        title: "Transparent Costs & Direct Advisor Access",
        desc: "Upfront tuition breakdowns, realistic living estimates, and direct access to personal advisors.",
      },
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-travsior-navy bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
            The Travsior Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Going abroad shouldn’t feel complicated.
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-4 leading-relaxed">
            Traditional overseas consultancy often leaves students confused by paperwork and hidden agendas. We replace anxiety with clarity and objective guidance.
          </p>
        </div>

        {/* Fixed Issue 9: Row-based aligned comparison grid */}
        <div className="max-w-5xl mx-auto rounded-card border border-slate-200 overflow-hidden shadow-card bg-white">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-200 text-left">
            <div className="p-5 sm:p-6 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Common Frustrations</span>
                <h3 className="text-lg sm:text-xl font-bold text-travsior-navy">The Traditional Way</h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-travsior-navy text-white flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Transparent &amp; Guided</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">The Travsior Way</h3>
              </div>
            </div>
          </div>

          {/* Horizontally Aligned Comparison Rows */}
          <div className="divide-y divide-slate-200">
            {comparisonPairs.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 text-left items-stretch">
                {/* Traditional Column */}
                <div className="p-5 sm:p-6 bg-slate-50/70 border-b md:border-b-0 md:border-r border-slate-200 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs sm:text-sm text-travsior-navyMuted font-medium leading-relaxed">
                    {pair.problem}
                  </p>
                </div>

                {/* Travsior Column */}
                <div className="p-5 sm:p-6 bg-white flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-travsior-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-travsior-navy mb-1">
                      {pair.solution.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-travsior-navyMuted leading-relaxed">
                      {pair.solution.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-travsior-bgLight border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-sm font-bold text-travsior-navy">Ready for an objective evaluation?</span>
              <p className="text-xs text-travsior-navyMuted mt-0.5">Explore your genuine chances of admission and scholarship.</p>
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-sm font-bold transition-all shadow-md hover:shadow-lg flex-shrink-0"
            >
              <span>Talk to an Advisor</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
