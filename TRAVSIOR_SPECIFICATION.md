# TRAVSIOR — High-Conversion Website Content, Styling & Structure

## 1. Brand Direction

**Brand:** Travsior  
**Category:** Study Abroad + Visa Consultancy  
**Primary audience:** Pakistani students and professionals seeking study, visit, and international opportunities.

### Brand positioning
> **Travsior helps students and professionals move abroad with a clear, guided, and faster path.**

The website does not look like a traditional visa-agent website. It feels like a **modern international mobility platform**: trustworthy enough for parents and professionals, energetic enough for university students, and conversion-focused enough to turn visitors into consultation leads.

### Core brand attributes
- Modern
- Trustworthy
- Fast
- International
- Student-first
- Transparent
- Helpful
- Professional
- Energetic

---

## 2. Primary Conversion Goal

The website has one dominant conversion action:
### **Book a Free Consultation**

Secondary conversion:
### **Check Your Eligibility**

Tertiary conversion:
### **Explore Destinations**

Recommended conversion funnel:
```text
Landing Page → Choose your goal → Destination/Visa pathway → Eligibility confidence → Proof + process → Free consultation → WhatsApp / Form / Call
```

---

## 3. Brand Styling & Color System
* **Primary (Travsior Blue)**: `#1677FF`
* **Text (Deep Navy)**: `#102A43`
* **Background (White)**: `#FFFFFF`
* **Secondary background (Light Blue Gray)**: `#F5F9FF`
* **Border (Cool Gray)**: `#D9E2EC`
* **Shadow**: `rgba(16, 42, 67, 0.08)`
* **Color Ratio**: 70% White, 20% Navy, 10% Blue
* **Typography**: Manrope (Geometric Modern Sans-Serif)

---

## 4. Built Pages & Component Hierarchy
1. `Navbar.tsx`: Fixed header, geometric logo, navigation anchors, instant WhatsApp quick link, and `Book Free Consultation` primary trigger.
2. `Hero.tsx`: Eyebrow badge, headline *"Your Way Abroad Starts Here"*, supporting copy, dual CTAs, trust line, and interactive 3-card Pathway Selector (`Study Abroad`, `Visit Visa`, `Work / Career`).
3. `TrustBar.tsx`: 4 non-numerical transparent pillars (Personalized Guidance, Destination Expertise, End-to-End Support, Transparent Process).
4. `ProblemSolution.tsx`: Traditional agency friction points compared with Travsior’s guided pathway, with a 5-stage roadmap (`Discover → Plan → Apply → Prepare → Move`).
5. `Destinations.tsx`: 8 core destination cards (UK, Australia, Canada, USA, Germany, Ireland, Italy, UAE) with regional filters.
6. `StudyAbroadServices.tsx`: 6 decision-support services (University Shortlisting, Course Selection, Application Support, SOP & Document Guidance, Scholarship Guidance, Visa Guidance) + `Build My Study Plan` CTA.
7. `VisitVisaSection.tsx`: 3-stage travel mobility flow (`Understand → Prepare → Apply`) for family, tourism, and business trips.
8. `EligibilityAssessment.tsx`: Interactive 3-step profile evaluation tool providing immediate pathway recommendations and direct WhatsApp routing.
9. `WhyTravsior.tsx`: 6 student-first differentiators avoiding generic agency clichés.
10. `ProcessTimeline.tsx`: Step-by-step phased journey timeline from initial discovery to pre-departure.
11. `SuccessStories.tsx`: Verified case studies from Islamabad, Lahore, Karachi, and Rawalpindi.
12. `FAQSection.tsx`: Accordion answering essential questions with strict visa disclaimer compliance.
13. `FinalCTA.tsx`: Conversion closer with dual `Book a Free Consultation` and `WhatsApp Us` triggers.
14. `Footer.tsx`: Brand summary, navigation directory, contact details, and official immigration regulatory disclaimer.
15. `ConsultationModal.tsx`: Global interactive consultation booking popup with validation and meeting preferences.
16. `WhatsAppFloat.tsx`: Floating action widget with prefilled chat starter.
17. `MobileStickyCTA.tsx`: Friction-reducing sticky bottom conversion bar on mobile devices.
