"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

interface DestinationsProps {
  onOpenConsultation: (destination?: string) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const destinations = [
    {
      country: "United Kingdom",
      code: "UK",
      region: "europe",
      tagline: "Globally recognized universities and diverse study opportunities.",
      highlights: "Russell Group institutions, 2-year post-study work visa (PSW), and fast 1-year master's degrees.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "Australia",
      code: "AU",
      region: "apac",
      tagline: "World-class education, vibrant lifestyle, and extensive stay-back rights.",
      highlights: "Group of Eight universities, generous post-study work visas, and high standard of living.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "Canada",
      code: "CA",
      region: "americas",
      tagline: "High-quality academic institutions with clear post-graduate work pathways.",
      highlights: "World-class polytechnics & universities with up to 3-year PGWP options.",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "United States",
      code: "US",
      region: "americas",
      tagline: "World-leading research universities and limitless innovation exposure.",
      highlights: "Ivy League & public flagship universities with 3-year STEM OPT work extensions.",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "Germany",
      code: "DE",
      region: "europe",
      tagline: "Tuition-free public universities and Europe’s strongest engineering economy.",
      highlights: "Zero tuition at most public universities, English-taught masters, and 18-month job seeker visa.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "Ireland",
      code: "IE",
      region: "europe",
      tagline: "Europe’s premier technology hub with accessible stay-back options.",
      highlights: "Global tech & pharma headquarters, English-speaking environment, 2-year master's stay-back.",
      image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "Italy",
      code: "IT",
      region: "europe",
      tagline: "Prestigious academic heritage with generous regional scholarships.",
      highlights: "Low tuition fees, regional DSU scholarships covering living costs, and Schengen mobility.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "United Arab Emirates",
      code: "UAE",
      region: "mena",
      tagline: "Modern global education hubs with seamless visa processing.",
      highlights: "International branch campuses (Dubai/Abu Dhabi), zero tax, and thriving business hubs.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filtered = activeFilter === "all"
    ? destinations
    : destinations.filter((d) => d.region === activeFilter);

  const filterTabs = [
    { id: "all", label: "All Destinations" },
    { id: "europe", label: "Europe & UK" },
    { id: "americas", label: "North America" },
    { id: "apac", label: "Australia & APAC" },
  ];

  return (
    <section id="destinations" className="py-20 md:py-28 bg-travsior-bgLight">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-10 max-w-2xl">
          {/* Fixed Issue 10: text-blue-900 on bg-blue-50/border-blue-200 provides > 10:1 contrast */}
          <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-travsior-blue" aria-hidden="true" />
            Global Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-travsior-navy mt-3 tracking-tight">
            Where do you want to go?
          </h2>
          <p className="text-base text-travsior-navyMuted mt-2 leading-relaxed">
            Explore leading global study and travel destinations with high visa feasibility and strong career outcomes.
          </p>

          {/* Segmented Pill Tab Control */}
          <div
            role="tablist"
            aria-label="Filter destinations by region"
            className="mt-6 inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-300/40 gap-1 flex-wrap"
          >
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-white text-travsior-navy shadow-sm"
                      : "text-travsior-navyMuted hover:text-travsior-navy"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Cards Grid - Fixed Issues 11-18 and Issues 58-73: Titles and badges placed inside solid white card body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((dest, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-card overflow-hidden border border-travsior-border shadow-sm hover:shadow-cardHover hover:border-travsior-blue transition-all duration-300 flex flex-col justify-between"
            >
              {/* Clean Image Area */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={`Landscape of ${dest.country}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body with solid white background ensuring 14.8:1 text contrast */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-travsior-navy leading-none">
                      {dest.country}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-bold text-travsior-navy">
                      {dest.code}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-travsior-navy mb-2">
                    {dest.tagline}
                  </p>
                  <p className="text-xs text-travsior-navyMuted line-clamp-2 mb-4">
                    {dest.highlights}
                  </p>
                </div>

                {/* Fixed Issues 11-18: text-travsior-blue (#0958D9) yields 6.16:1 contrast against white */}
                <button
                  onClick={() => onOpenConsultation(dest.country)}
                  className="w-full inline-flex items-center justify-between pt-3 border-t border-slate-100 text-sm font-bold text-travsior-blue hover:text-travsior-blueHover transition-colors focus:outline-none focus:underline"
                >
                  <span>Explore {dest.country}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Compare Options Card - Fixed Issue 10 */}
        <div className="mt-14 max-w-3xl mx-auto p-8 rounded-card bg-white border-2 border-travsior-blue/30 shadow-card hover:shadow-cardHover text-center flex flex-col items-center gap-4 transition-all">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-travsior-navy">
            <span className="w-2 h-2 rounded-full bg-travsior-blue animate-pulse" />
            <span>Interactive Country Evaluation</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-travsior-navy">
            Not sure which country suits your budget and profile?
          </h3>

          <p className="text-sm sm:text-base text-travsior-navyMuted max-w-xl leading-relaxed">
            We provide side-by-side comparative analysis of post-study stay options, living costs, university fees, and scholarships.
          </p>

          <button
            type="button"
            onClick={() => onOpenConsultation()}
            className="mt-2 inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-travsior-blue hover:bg-travsior-blueHover text-white text-base font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Compare My Options</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
