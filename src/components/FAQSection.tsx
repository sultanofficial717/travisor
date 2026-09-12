"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldAlert } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Which countries does Travsior help with?",
      a: "Travsior actively handles study and visitor pathways for the United Kingdom, Australia, Canada, United States, Germany, Ireland, Italy, UAE, and Schengen countries. Each destination has dedicated advisors who specialize in its specific visa rules and academic intakes.",
    },
    {
      q: "Can you help me choose a university?",
      a: "Yes. Our university shortlisting process evaluates your past academic transcript, current GPA, target course, career objectives, and financial capacity. We provide a balanced shortlist featuring high-probability, target, and ambitious institutions with strong post-study work outcomes.",
    },
    {
      q: "Do I need an English language test (IELTS/PTE)?",
      a: "Requirements depend on the destination, institution, and level of study. While many top UK, Australian, and Canadian universities require IELTS Academic or PTE, certain universities accept Duolingo English Test or Medium of Instruction (MOI) English proficiency letters for Pakistani degree holders. We advise on the fastest, most cost-effective route for your profile.",
    },
    {
      q: "Can you help me secure scholarships?",
      a: "Yes, we actively guide eligible students toward institutional merit discounts, early-bird fee reductions (typically £1,500 to £5,000 in the UK/Australia), fully funded government programs (like Chevening or DAAD), and regional European grants (such as Italy’s DSU regional scholarship). While scholarships are awarded at the discretion of the funding body, we ensure your essays and applications are submitted with maximum competitive strength.",
    },
    {
      q: "Do you guarantee visa approval?",
      a: "No, and any consultancy that guarantees a visa is misleading you. Visa and immigration decisions are made solely by the respective government’s immigration authority (such as UK Visas & Immigration or the Australian Department of Home Affairs). What Travsior guarantees is thorough file compilation, financial scrutiny, compliance vetting, and genuine student intent statements to ensure your application stands the best possible chance of success under official guidelines.",
      highlight: true,
    },
    {
      q: "How much does the initial consultation cost?",
      a: "Your initial profile evaluation and consultation with Travsior are 100% free of charge. We believe every student and professional deserves clear, objective advice about their international feasibility before committing financial resources.",
    },
    {
      q: "When should I start my application?",
      a: "We recommend starting 6 to 9 months before your intended intake. For example, for a September (Fall) intake, you should ideally begin shortlisting in December to February. This provides ample time for English testing, university offer generation, CAS/COE issuance, bank statement seasoning, and visa processing without rushed deadlines.",
    },
  ];

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-900" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Questions before you start?
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-3">
            Transparency is at the core of Travsior. Here are straightforward answers to our most common inquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-travsior-bgLight/90 border-travsior-blue shadow-sm"
                    : "bg-white border-travsior-border hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-travsior-blue"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-travsior-navy">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-travsior-blue text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-travsior-navyMuted leading-relaxed border-t border-blue-100/60">
                    <p>{faq.a}</p>
                    {faq.highlight && (
                      <div className="mt-3.5 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2.5 text-xs text-travsior-navy font-medium">
                        <ShieldAlert className="w-4 h-4 text-travsior-blue flex-shrink-0 mt-0.5" />
                        <span>This transparent policy protects your legal rights and ensures genuine, compliant preparation.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
