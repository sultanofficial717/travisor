"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Send, MessageSquare } from "lucide-react";

export const EligibilityAssessment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    goal: "Study Abroad",
    education: "Bachelors (16 Years)",
    field: "Computer Science & IT",
    destination: "United Kingdom",
    budget: "$15,000 - $25,000 / year",
    intake: "Fall 2026",
    hasEnglishTest: "Planning to take IELTS",
    fullName: "",
    whatsapp: "",
    email: "",
  });

  const handleFieldChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
      }, 700);
    }
  };

  const stepTitles = ["Goal & Profile", "Destination & Timing", "Contact Details"];

  return (
    <section id="eligibility" className="py-20 md:py-28 bg-gradient-to-b from-travsior-navy via-[#0c2035] to-travsior-navy relative text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-travsior-blue/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-sky-300 bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30 inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
            Interactive Assessment Utility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Not sure where you qualify?
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Tell us about your plans. Our advisors will assess your academic profile and provide clear, realistic options within 24 hours.
          </p>
        </div>

        {/* Interactive App-Like Form Card */}
        <div className="max-w-xl mx-auto bg-white text-travsior-navy border-2 border-blue-400/40 rounded-card shadow-2xl p-6 sm:p-8 text-left relative overflow-hidden">
          {/* Progress Indicator - Fixed Issue 27: text-travsior-blue (#0958D9) yields 5.83:1 contrast on #f6faff */}
          {!isCompleted && (
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-travsior-navyMuted mb-2">
                <span className="font-bold text-travsior-navy">Step {step} of 3:</span>
                <span className="font-semibold text-travsior-blue">{stepTitles[step - 1]}</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-travsior-blue h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {!isCompleted ? (
            <form onSubmit={handleNextStep}>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-2">
                      What are you planning?
                    </label>
                    {/* Fixed Issue 28: text-travsior-blue (#0958D9) yields 5.50:1 contrast on #e6f4ff */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {["Study Abroad", "Visit Visa", "Career / Work"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleFieldChange("goal", opt)}
                          className={`py-2.5 px-2 text-center rounded-btn text-xs sm:text-sm font-semibold border transition-all ${
                            formData.goal === opt
                              ? "bg-travsior-blueLight text-travsior-blue border-travsior-blue ring-1 ring-travsior-blue font-bold shadow-sm"
                              : "bg-white text-travsior-navyMuted border-travsior-border hover:border-travsior-blue"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fixed Issue 53: Added explicit id and matching htmlFor for accessible name */}
                  <div>
                    <label
                      htmlFor="highest-education"
                      className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5"
                    >
                      Your Highest / Current Education
                    </label>
                    <select
                      id="highest-education"
                      value={formData.education}
                      onChange={(e) => handleFieldChange("education", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-travsior-border text-sm font-medium text-travsior-navy focus:outline-none focus:border-travsior-blue shadow-sm"
                    >
                      <option>Intermediate / FSc / FA / ICS</option>
                      <option>A-Levels / Cambridge</option>
                      <option>Bachelors (14 Years / BA / BSc)</option>
                      <option>Bachelors (16 Years / BS / Hons)</option>
                      <option>Masters / MS / MPhil (18 Years)</option>
                      <option>Working Professional (5+ Years Experience)</option>
                    </select>
                  </div>

                  {/* Fixed Issue 54: Added explicit id and matching htmlFor for accessible name */}
                  <div>
                    <label
                      htmlFor="target-discipline"
                      className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5"
                    >
                      Target Discipline or Field of Study
                    </label>
                    <select
                      id="target-discipline"
                      value={formData.field}
                      onChange={(e) => handleFieldChange("field", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-travsior-border text-sm font-medium text-travsior-navy focus:outline-none focus:border-travsior-blue shadow-sm"
                    >
                      <option>Computer Science &amp; IT / Data / AI</option>
                      <option>Business Administration &amp; Finance / MBA</option>
                      <option>Engineering (Mechanical, Civil, Electrical)</option>
                      <option>Health Sciences, Nursing &amp; Public Health</option>
                      <option>Law, Social Sciences &amp; Humanities</option>
                      <option>Art, Architecture &amp; Design</option>
                      <option>General Tourism / Family Visit (Not Study)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="preferred-destination"
                      className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5"
                    >
                      Preferred Destination
                    </label>
                    <select
                      id="preferred-destination"
                      value={formData.destination}
                      onChange={(e) => handleFieldChange("destination", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-travsior-border text-sm font-medium text-travsior-navy focus:outline-none focus:border-travsior-blue shadow-sm"
                    >
                      <option>United Kingdom (UK)</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>United States (USA)</option>
                      <option>Germany (Europe)</option>
                      <option>Ireland</option>
                      <option>Italy (Regional Scholarships)</option>
                      <option>UAE / Dubai</option>
                      <option>Open to Advisor Recommendations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5">
                      Approximate Yearly Tuition / Living Budget
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "Under $10,000 (Germany/Italy)",
                        "$12,000 - $20,000 / yr",
                        "$22,000+ / yr",
                      ].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleFieldChange("budget", b)}
                          className={`py-2.5 px-2 text-center rounded-btn text-xs font-semibold border transition-all ${
                            formData.budget === b
                              ? "bg-travsior-blueLight text-travsior-blue border-travsior-blue ring-1 ring-travsior-blue font-bold"
                              : "bg-white text-travsior-navyMuted border-travsior-border hover:border-travsior-blue"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1.5">
                      Target Intake
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Fall 2026", "Spring 2027", "Undecided"].map((intake) => (
                        <button
                          key={intake}
                          type="button"
                          onClick={() => handleFieldChange("intake", intake)}
                          className={`py-2.5 px-2 text-center rounded-btn text-xs font-semibold border transition-all ${
                            formData.intake === intake
                              ? "bg-travsior-blueLight text-travsior-blue border-travsior-blue ring-1 ring-travsior-blue font-bold"
                              : "bg-white text-travsior-navyMuted border-travsior-border hover:border-travsior-blue"
                          }`}
                        >
                          {intake}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="e.g. Talha Khan"
                      value={formData.fullName}
                      onChange={(e) => handleFieldChange("fullName", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-travsior-border text-sm text-travsior-navy focus:outline-none focus:border-travsior-blue shadow-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp-phone"
                      className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      id="whatsapp-phone"
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.whatsapp}
                      onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-travsior-border text-sm text-travsior-navy focus:outline-none focus:border-travsior-blue shadow-sm"
                    />
                    <span className="text-xs text-travsior-navyMuted mt-1 block">
                      We respect your privacy. No spam or unsolicited calls.
                    </span>
                  </div>

                  <div>
                    <label
                      htmlFor="user-email"
                      className="block text-xs font-bold text-travsior-navy uppercase tracking-wider mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      placeholder="talha@example.com"
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-btn bg-white border border-travsior-border text-sm text-travsior-navy focus:outline-none focus:border-travsior-blue shadow-sm"
                    />
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons - Fixed Issue 29: bg-travsior-blue (#0958D9) yields 6.16:1 contrast against white */}
              <div className="mt-5 pt-4 flex items-center justify-between border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-xs font-semibold text-travsior-navyMuted hover:text-travsior-navy"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-sm font-semibold shadow-md transition-all ml-auto disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Evaluating...</span>
                  ) : step === 3 ? (
                    <>
                      <span>Check My Options</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* SUCCESS CONFIRMATION */
            <div className="text-center py-5">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-travsior-navy mb-1.5">
                Assessment Request Received!
              </h3>
              <p className="text-sm text-travsior-navyMuted max-w-md mx-auto mb-5 leading-relaxed">
                Thank you, <span className="font-semibold text-travsior-navy">{formData.fullName}</span>. Based on your interest in <span className="font-semibold text-travsior-blue">{formData.destination}</span>, an educational advisor is preparing your tailored university &amp; visa roadmap.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%20just%20submitted%20my%20eligibility%20for%20${encodeURIComponent(formData.destination)}%20(${encodeURIComponent(formData.goal)}).%20My%20name%20is%20${encodeURIComponent(formData.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-btn bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" aria-hidden="true" />
                  <span>Get Instant Reply on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsCompleted(false);
                    setStep(1);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-btn bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Calculate Another Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
