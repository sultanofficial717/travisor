"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Study Abroad", href: "#study-abroad" },
    { name: "Visit Visa", href: "#visit-visa" },
    { name: "Destinations", href: "#destinations" },
    { name: "Eligibility", href: "#eligibility" },
    { name: "Why Travsior", href: "#why-travsior" },
    { name: "Process", href: "#process" },
    { name: "Stories", href: "#stories" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-travsior-border/60"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Logo size="md" variant="dark" showTagline={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-travsior-navyMuted hover:text-travsior-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Fixed Issue 1: Upgraded to bg-emerald-700 (#047857) giving 5.48:1 contrast on white */}
            <a
              href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-btn bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            {/* Header Ghost CTA */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-btn border border-travsior-border hover:border-travsior-blue text-travsior-navy hover:text-travsior-blue text-sm font-semibold transition-all bg-white"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-btn bg-travsior-blue text-white text-xs font-semibold"
            >
              Book Free
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-travsior-navy hover:text-travsior-blue focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-travsior-navy" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-travsior-border shadow-xl px-4 pt-3 pb-6 transition-all">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-travsior-navy py-2.5 border-b border-slate-100 hover:text-travsior-blue"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-5 pt-3 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-btn bg-travsior-blue text-white font-semibold text-sm"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/923001234567?text=Hi%20Travsior%2C%20I%27d%20like%20to%20explore%20my%20study%2Fvisa%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-btn bg-emerald-700 text-white font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
