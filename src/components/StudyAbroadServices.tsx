"use client";

import React from "react";
import {
  GraduationCap,
  Compass,
  FileCheck,
  Award,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface StudyAbroadServicesProps {
  onOpenConsultation: () => void;
}

export const StudyAbroadServices: React.FC<StudyAbroadServicesProps> = ({
  onOpenConsultation,
}) => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Shortlisting",
      description:
        "Find high-acceptance programs accurately aligned with your academic transcript, budget, and post-study career goals.",
      detail: "Avoid applying blindly to colleges with low visa approval rates.",
    },
    {
      icon: BookOpen,
      title: "Course Selection",
      description:
        "Understand curriculum focus, credit transfers, and employment trends before committing 1 to 4 years to a degree.",
      detail: "Evaluate STEM, business, and healthcare degree returns.",
    },
    {
      icon: FileCheck,
      title: "Application Support",
      description:
        "Step-by-step submission tracking through direct university portals, UCAS, and authorized institutional channels.",
      detail: "Zero missed deadlines or incomplete portal records.",
    },
    {
      icon: Compass,
      title: "SOP & Document Guidance",
      description:
        "Present your academic journey clearly, addressing career gaps, genuine student intent, and future aspirations.",
      detail: "Strictly individualized editing — no robotic templates.",
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description:
        "Discover merit-based tuition discounts, departmental stipends, and government bilateral funding opportunities.",
      detail: "Guidance on Chevening, Commonwealth, and regional grants.",
    },
    {
      icon: ShieldCheck,
      title: "Visa Guidance",
      description:
        "Comprehensive visa file compilation, bank statement verification, mock interview coaching, and compliance vetting.",
      detail: "High-standard preparation aligned with current immigration policies.",
    },
  ];

  return (
    <section id="study-abroad" className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Fixed Issue 19: text-blue-900 on bg-blue-50/border-blue-200 provides > 10:1 contrast */}
          <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Higher Education Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            More than an admission application.
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-4 leading-relaxed">
            Travsior positions itself as your strategic decision-support partner. We don’t just fill forms; we structure your international academic pathway for long-term career success.
          </p>
        </div>

        {/* Stepped 2-Column Services Roadmap - Fixed Issue 14 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const stepNum = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className="p-7 rounded-card bg-white border border-travsior-border hover:border-travsior-blue shadow-sm hover:shadow-cardHover transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-travsior-blueLight text-travsior-blue flex items-center justify-center group-hover:bg-travsior-blue group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-travsior-blue/30 transition-colors">
                      {stepNum}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-travsior-navy mb-2.5 group-hover:text-travsior-blue transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-travsior-navyMuted leading-relaxed mb-5">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-travsior-navy">
                  <CheckCircle className="w-4 h-4 text-travsior-blue flex-shrink-0" aria-hidden="true" />
                  <span>{srv.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary Section CTA - Fixed Issue 20: bg-travsior-blue (#0958D9) yields 6.16:1 contrast against white */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base font-semibold shadow-md transition-all"
          >
            <span>Build My Study Plan</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
