import React from "react";
import { UserCheck, Sliders, CheckSquare2, Globe2, ShieldCheck, HeartHandshake } from "lucide-react";

export const WhyTravsior: React.FC = () => {
  const differentiators = [
    {
      icon: UserCheck,
      title: "Student-first guidance",
      desc: "We focus strictly on your career trajectory and academic priorities, not on pushing colleges based on agency commissions.",
    },
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
    {
      icon: HeartHandshake,
      title: "Human support",
      desc: "Dedicated advisors available via direct messaging and face-to-face consultations whenever questions arise.",
    },
  ];

  return (
    <section id="why-travsior" className="py-20 md:py-28 bg-travsior-bgLight">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
            Honest Consultancy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-4 tracking-tight">
            Why people choose Travsior
          </h2>
          <p className="text-base sm:text-lg text-travsior-navyMuted mt-4 leading-relaxed">
            We don’t believe in false promises or generic packages. We build tailored, transparent mobility plans designed to get you there safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-card bg-white border border-travsior-border shadow-sm hover:shadow-cardHover transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-travsior-blueLight text-travsior-blue flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-travsior-navy mb-2.5">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-travsior-navyMuted leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
