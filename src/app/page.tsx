"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Destinations } from "@/components/Destinations";
import { StudyAbroadServices } from "@/components/StudyAbroadServices";
import { VisitVisaSection } from "@/components/VisitVisaSection";
import { EligibilityAssessment } from "@/components/EligibilityAssessment";
import { WhyTravsior } from "@/components/WhyTravsior";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SuccessStories } from "@/components/SuccessStories";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalGoal, setModalGoal] = useState<string>("Study Abroad");
  const [modalDestination, setModalDestination] = useState<string>("United Kingdom");

  const handleOpenConsultation = (presetDestinationOrGoal?: string) => {
    if (presetDestinationOrGoal) {
      if (
        presetDestinationOrGoal.includes("Study") ||
        presetDestinationOrGoal.includes("Visit") ||
        presetDestinationOrGoal.includes("Career")
      ) {
        setModalGoal(presetDestinationOrGoal);
      } else {
        setModalDestination(presetDestinationOrGoal);
      }
    }
    setModalOpen(true);
  };

  const handleScrollToEligibility = () => {
    const el = document.getElementById("eligibility");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-travsior-navy flex flex-col selection:bg-travsior-blueLight selection:text-travsior-blue">
      {/* 1. Header & Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* 2. Hero & Pathway Selector */}
      <Hero
        onOpenConsultation={handleOpenConsultation}
        onScrollToEligibility={handleScrollToEligibility}
      />

      {/* 3. Trust Bar (4 Non-numerical Transparent Pillars) */}
      <TrustBar />

      {/* 4. Problem vs. Solution (Overcoming Traditional Friction + 5-Stage Roadmap) */}
      <ProblemSolution onOpenConsultation={() => handleOpenConsultation()} />

      {/* 5. Destination Discovery (UK, Australia, Canada, USA, Germany, Ireland, Italy, UAE) */}
      <Destinations onOpenConsultation={handleOpenConsultation} />

      {/* 6. Study Abroad Services (More than an admission application) */}
      <StudyAbroadServices onOpenConsultation={() => handleOpenConsultation("Study Abroad")} />

      {/* 7. Visit Visa Section (Understand, Prepare, Apply) */}
      <VisitVisaSection onOpenConsultation={handleOpenConsultation} />

      {/* 8. Personalized Eligibility Assessment (Interactive Tool) */}
      <EligibilityAssessment />

      {/* 9. Why Travsior (6 Core Student-First Differentiators) */}
      <WhyTravsior />

      {/* 10. Process Section (Your journey, simplified) */}
      <ProcessTimeline onOpenConsultation={() => handleOpenConsultation()} />

      {/* 11. Social Proof & Success Stories (Islamabad, Lahore, Karachi, Rawalpindi) */}
      <SuccessStories onOpenConsultation={() => handleOpenConsultation()} />

      {/* 12. Honest FAQ Section with Visa Compliance Disclaimers */}
      <FAQSection />

      {/* 13. Final Conversion Action (Book Free Consultation + WhatsApp) */}
      <FinalCTA onOpenConsultation={() => handleOpenConsultation()} />

      {/* 14. Global Mobility Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Global Modals & Floating Triggers */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialGoal={modalGoal}
        initialDestination={modalDestination}
      />

      <WhatsAppFloat />
      <MobileStickyCTA onOpenConsultation={() => handleOpenConsultation()} />
    </main>
  );
}
