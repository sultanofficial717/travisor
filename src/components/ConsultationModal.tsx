"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
  initialDestination?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialGoal = "Study Abroad",
  initialDestination = "United Kingdom",
}) => {
  const [goal, setGoal] = useState(initialGoal);
  const [destination, setDestination] = useState(initialDestination);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consultationMode, setConsultationMode] = useState("Online (Google Meet / Zoom)");
  const [preferredDate, setPreferredDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-travsior-navy/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-travsior-border overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-travsior-bgLight">
          <div className="flex items-center gap-2">
            <Logo size="sm" variant="dark" />
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-travsior-blue">
              Free Advisory
            </span>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close consultation modal"
            className="p-1 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 id="modal-title" className="text-xl font-bold text-travsior-navy">
                  Book Your Free Consultation
                </h3>
                <p className="text-xs text-travsior-navyMuted mt-1">
                  Speak directly with an experienced international advisor. No pressure, no obligations.
                </p>
              </div>

              {/* Pathway Selector */}
              <div>
                <span className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5">
                  I Want Guidance On:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {["Study Abroad", "Visit Visa", "Career Pathway"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGoal(g)}
                      className={`py-2 px-2 text-xs font-semibold rounded-btn border text-center transition-all ${
                        goal === g
                          ? "bg-travsior-blue text-white border-travsior-blue shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-blue-200"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="modal-destination" className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5">
                  Preferred Destination
                </label>
                <select
                  id="modal-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-travsior-blue"
                >
                  <option>United Kingdom (UK)</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>United States (USA)</option>
                  <option>Germany (Tuition-Free)</option>
                  <option>Ireland</option>
                  <option>Italy (Regional Scholarships)</option>
                  <option>UAE / Dubai</option>
                  <option>Other / Open to Advice</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-travsior-navy mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Talha Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-travsior-blue"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-travsior-navy mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-travsior-blue"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs font-bold text-travsior-navy mb-1">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="talha@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-travsior-blue"
                />
              </div>

              {/* Meeting Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-mode" className="block text-xs font-bold text-travsior-navy mb-1">
                    Meeting Mode
                  </label>
                  <select
                    id="modal-mode"
                    value={consultationMode}
                    onChange={(e) => setConsultationMode(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-btn bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-travsior-blue"
                  >
                    <option>Online (Google Meet / Zoom)</option>
                    <option>In-Person (Islamabad Office)</option>
                    <option>WhatsApp Voice Call</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-date" className="block text-xs font-bold text-travsior-navy mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-btn bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-travsior-blue"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-3 py-3.5 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Scheduling your session...</span>
                ) : (
                  <>
                    <span>Confirm Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-slate-500">
                100% Free Initial Evaluation • No Hidden Fees • Zero Spam
              </p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-travsior-navy mb-2">
                Consultation Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-travsior-navyMuted max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-travsior-navy">{name}</strong>. An advisor has been assigned to your case ({goal} &bull; {destination}). We have sent a confirmation to <span className="text-travsior-blue font-medium">{email}</span>.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%20just%20scheduled%20a%20free%20consultation%20for%20${encodeURIComponent(destination)}%20(${encodeURIComponent(goal)}).%20My%20name%20is%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-btn bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect With Advisor on WhatsApp</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 rounded-btn bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
