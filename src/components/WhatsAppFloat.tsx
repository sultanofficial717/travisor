"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2">
      {/* Interactive Tooltip - Non-obstructive, revealed on hover or tap */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white rounded-card shadow-float border border-travsior-border text-left animate-in fade-in slide-in-from-right-2 duration-300">
          <div>
            <p className="text-xs font-bold text-travsior-navy">Need fast answers?</p>
            <p className="text-xs text-travsior-navyMuted">Chat directly with an advisor</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-travsior-navyMuted hover:text-travsior-navy p-1 transition-colors"
            aria-label="Close message"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-float flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Chat on WhatsApp with Travsior"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
