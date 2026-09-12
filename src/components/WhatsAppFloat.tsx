"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Interactive Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-float border border-slate-200 text-left animate-in fade-in slide-in-from-right-2 duration-300">
          <div>
            <p className="text-xs font-bold text-travsior-navy">Need fast answers?</p>
            <p className="text-[11px] text-travsior-navyMuted">Chat directly with an advisor</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-float flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp with Travsior"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
