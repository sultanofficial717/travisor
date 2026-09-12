"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowRight, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-travsior-navy text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 text-left">
            <Link href="/" className="inline-block mb-4">
              <Logo size="md" variant="light" showTagline={true} />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              Travsior helps Pakistani students and professionals move abroad with a clear, guided, and faster path. Built on transparency and student-first principles.
            </p>

            {/* Fixed Issue 13 & 26: Standardized button size and solid WhatsApp button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-travsior-blue hover:bg-blue-600 text-white text-sm font-semibold shadow-sm transition-all"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-btn bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links - Fixed Issue 6 & 9: Use h3 instead of h4, remove all-caps; Fixed Issue 27: increased vertical spacing to space-y-3.5 */}
          <div className="lg:col-span-2 text-left">
            <h3 className="text-sm font-bold text-slate-200 mb-4">
              Study Pathways
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li><a href="#destinations" className="hover:text-travsior-blue transition-colors py-1 inline-block">Study in UK</a></li>
              <li><a href="#destinations" className="hover:text-travsior-blue transition-colors py-1 inline-block">Study in Australia</a></li>
              <li><a href="#destinations" className="hover:text-travsior-blue transition-colors py-1 inline-block">Study in Canada</a></li>
              <li><a href="#destinations" className="hover:text-travsior-blue transition-colors py-1 inline-block">Study in USA</a></li>
              <li><a href="#destinations" className="hover:text-travsior-blue transition-colors py-1 inline-block">Study in Germany (Free)</a></li>
              <li><a href="#destinations" className="hover:text-travsior-blue transition-colors py-1 inline-block">Scholarship Guidance</a></li>
            </ul>
          </div>

          {/* Visit & Services - Fixed Issue 6 & 9: Use h3 instead of h4, remove all-caps */}
          <div className="lg:col-span-3 text-left">
            <h3 className="text-sm font-bold text-slate-200 mb-4">
              Services &amp; Visas
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li><a href="#visit-visa" className="hover:text-travsior-blue transition-colors py-1 inline-block">UK Standard Visitor Visa</a></li>
              <li><a href="#visit-visa" className="hover:text-travsior-blue transition-colors py-1 inline-block">USA B1/B2 Visa Prep</a></li>
              <li><a href="#visit-visa" className="hover:text-travsior-blue transition-colors py-1 inline-block">Schengen Tourist &amp; Business</a></li>
              <li><a href="#study-abroad" className="hover:text-travsior-blue transition-colors py-1 inline-block">SOP &amp; Genuine Intent Writing</a></li>
              <li><a href="#eligibility" className="hover:text-travsior-blue transition-colors py-1 inline-block">Eligibility Calculator</a></li>
              <li><a href="#process" className="hover:text-travsior-blue transition-colors py-1 inline-block">Our 5-Stage Process</a></li>
            </ul>
          </div>

          {/* Contact Information - Fixed Issue 9: Use h3 instead of h4 */}
          <div className="lg:col-span-3 text-left">
            <h3 className="text-sm font-bold text-slate-200 mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-travsior-blue flex-shrink-0 mt-0.5" />
                <span>Sector F-7 / Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-travsior-blue flex-shrink-0" />
                <span>+92 (300) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-travsior-blue flex-shrink-0" />
                <span>admissions@travsior.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: Mon - Sat (9am - 7pm PKT)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Visa Disclaimer - Fixed Issue 7: Upgraded text-[11px] to text-xs, Fixed Issue 20: Constrained line length to max-w-3xl */}
        <div className="pt-8 pb-6 border-b border-slate-800/80 text-left">
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            <strong className="text-slate-300 font-semibold">Regulatory &amp; Immigration Disclaimer:</strong> Admission and visa decisions are made exclusively by the relevant foreign university or official sovereign immigration authority (e.g., UKVI, Australian Department of Home Affairs, IRCC, US Department of State). Travsior is an independent advisory and mobility consultancy providing genuine educational guidance, profile assessment, and document readiness support. Travsior does not guarantee visa approval, admissions, or scholarships.
          </p>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Travsior. All rights reserved. Your Way Abroad.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Visa Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
