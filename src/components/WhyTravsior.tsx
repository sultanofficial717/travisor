import React from "react";
import { UserCheck, Sliders, CheckSquare2, Globe2, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

export const WhyTravsior: React.FC = () => {
  const differentiators = [
    {
      icon: Sliders,
      title: "Personalized recommendations",
      desc: "Every recommendation factors in your GPA, financial capability, and post-study aspirations for a tailored fit.",
    },
    {
      icon: CheckSquare2,
      title: "Clear next steps",
      desc: "No ambiguity. At every milestone, you receive an exact checklist of documents, deadlines, and requirements.",
    },
    {
      icon: Globe2,
      title: "Destination-focused expertise",
      desc: "Real insight into country-specific job markets, post-study work regulations (PSW), and regional living expenses.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-end support",
      desc: "From initial course shortlisting and SOP proofreading to interview simulation and pre-departure briefings.",
    },
  ];

  return (
    <section id="why-travsior" className="py-20 md:py-28 bg-travsior-bgLight">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Fixed Issue 7: Removed all-caps to improve readability */}
          <span className="text-xs font-bold text-travsior-navy bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
            Honest Consultancy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Why people choose Travsior
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-4 leading-relaxed">
            We don’t believe in false promises or generic packages. We build tailored, transparent mobility plans designed to get you there safely.
          </p>
        </div>

        {/* Fixed Issue 14: Asymmetric layout breaks repetitive 3-column card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Pillar Hero Card (Left Column) */}
          <div className="lg:col-span-5 p-8 rounded-card bg-travsior-navy text-white shadow-card flex flex-col justify-between text-left relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-xl bg-travsior-blue text-white flex items-center justify-center mb-6 shadow-sm">
                <UserCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                Core Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                Student-First Guidance
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We focus strictly on your career trajectory and academic priorities, not on pushing colleges based on agency commissions.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero commission bias in university selection</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% transparent fee structures &amp; costs</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dedicated personal advisor throughout your journey</span>
              </div>
            </div>
          </div>

          {/* 2x2 Feature Grid (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-card bg-white border border-travsior-border shadow-sm hover:shadow-cardHover transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-travsior-blueLight text-travsior-blue flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-travsior-navy mb-2">
                      {diff.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-travsior-navyMuted leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
