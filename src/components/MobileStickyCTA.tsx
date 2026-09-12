"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

interface MobileStickyCTAProps {
  onOpenConsultation: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenConsultation }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl flex items-center gap-2">
      <button
        onClick={onOpenConsultation}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-btn bg-travsior-blue active:bg-travsior-blueHover text-white text-xs font-bold shadow-sm"
      >
        <span>Book Free Consultation</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      <a
        href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-btn bg-emerald-50 text-emerald-600 border border-emerald-200"
        aria-label="WhatsApp quick chat"
      >
        <MessageSquare className="w-5 h-5 fill-emerald-600" />
      </a>
    </div>
  );
};
