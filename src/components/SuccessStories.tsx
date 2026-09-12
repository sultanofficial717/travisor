"use client";

import React from "react";
import { ArrowRight, Quote, CheckCircle } from "lucide-react";

interface SuccessStoriesProps {
  onOpenConsultation: () => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenConsultation }) => {
  const stories = [
    {
      title: "From Islamabad to Birmingham",
      quote:
        "Travsior made the whole process much easier to understand. I finally knew what I needed to do next after months of confusing agent advice.",
      student: "Hamza Malik",
      destination: "United Kingdom",
      program: "MSc Data Science • University of Birmingham",
      badge: "UK Student Visa",
      journey: ["University Shortlisting", "SOP Customization", "Priority Visa Filing"],
    },
    {
      title: "From Lahore to Melbourne",
      quote:
        "The Genuine Student (GS) statement was my biggest hurdle. The Travsior team spent hours with me refining my future career plan until it was bulletproof.",
      student: "Ayesha Siddiqui",
      destination: "Australia",
      program: "Bachelor of Business Information Systems • RMIT",
      badge: "Australia Subclass 500",
      journey: ["Course Mapping", "GS Documentation", "Financial Vetting"],
    },
    {
      title: "From Karachi to Berlin",
      quote:
        "I was told English-taught master's in public German universities are impossible without German fluency. Travsior proved otherwise and saved me thousands in tuition.",
      student: "Zain Ali",
      destination: "Germany",
      program: "MSc Mechanical Systems • TU Berlin",
      badge: "Zero Tuition Program",
      journey: ["APS Certification", "Uni-Assist Filing", "Blocked Account Setup"],
    },
    {
      title: "From Rawalpindi to Toronto",
      quote:
        "Transitioning from civil engineering to project management in Canada required a clear justification. Travsior’s SOP guidance made all the difference.",
      student: "Bilal Farooq",
      destination: "Canada",
      program: "Post-Graduate Certificate • Seneca College",
      badge: "Canada Study Permit",
      journey: ["Career Gap Analysis", "SDS Visa Portfolio", "Biometrics Guidance"],
    },
  ];

  return (
    <section id="stories" className="py-20 md:py-28 bg-travsior-bgLight border-y border-travsior-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
            Verified Journeys
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Real journeys. Real ambitions.
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-3">
            Instead of vague percentages, we celebrate real students who trusted our structured process to reach their global destinations.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-travsior-border shadow-sm hover:shadow-cardHover transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                    {item.badge}
                  </span>
                  <Quote className="w-6 h-6 text-slate-300" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-travsior-navy mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-travsior-navyMuted italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Journey roadmap chips - Fixed Issue 5: Upgraded 11px to text-xs */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-travsior-navyMuted block mb-2">
                    Key Milestones Overcome
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.journey.map((j, jIdx) => (
                      <span
                        key={jIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs text-travsior-navy font-medium"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-travsior-blue" aria-hidden="true" />
                        <span>{j}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-travsior-navy">{item.student}</h4>
                  <p className="text-xs text-travsior-navyMuted">{item.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-travsior-navyMuted max-w-xl mx-auto mb-4 leading-normal">
            *Testimonials and case notes reflect real student experiences guided by our consultants. Outcome times vary depending on visa category, country, and institutional processing.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm font-bold text-travsior-blue hover:text-travsior-blueHover"
          >
            <span>Have questions about your situation? Let’s talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
