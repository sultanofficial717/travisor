"use client";

import React from "react";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-travsior-navy to-slate-900 text-white relative overflow-hidden text-center">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-blue-200 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span>Start With Zero Risk</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Ready to explore <br className="hidden sm:inline" />
            your options?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
            You don’t need to have everything figured out before you start. Tell us your goal, and we’ll help you map out your exact next step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base font-bold shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Standardized solid WhatsApp button (Fix Issue 26 & 50) */}
            <a
              href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-emerald-700 hover:bg-emerald-800 text-white text-base font-semibold shadow-md transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            100% Free Initial Evaluation • No Hidden Obligations • Expert Advisors
          </p>
        </div>
      </div>
    </section>
  );
};
