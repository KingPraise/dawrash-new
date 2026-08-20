'use client';

import React, { useState } from 'react';
import { BookOpen, FileText, ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';

interface InsightsSectionProps {
  onOpenModal: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onOpenModal }) => {
  const articles = [
    {
      title: 'Navigating NAFDAC & SONCAP: A MedTech & Hardware Regulatory Guide for Nigeria',
      category: 'Regulatory Compliance',
      readTime: '6 min read',
      date: 'Q3 2026 Briefing',
      summary: 'Essential clearance protocols, timeline expectations, and common documentation pitfalls when shipping medical devices and industrial technology into Sub-Saharan Africa’s largest economy.'
    },
    {
      title: 'How to Structure Tier-1 Distribution Agreements in Francophone West Africa (UEMOA)',
      category: 'Channel Strategy',
      readTime: '8 min read',
      date: 'Q2 2026 Analysis',
      summary: 'Key legal safeguards, Euro-pegged CFA currency mechanics, and anti-exclusive performance metrics for enterprise sales across Abidjan, Dakar, and Lomé.'
    },
    {
      title: 'Commercial & Industrial Solar in ECOWAS: Bridging the Equipment Supply Bottleneck',
      category: 'CleanTech Market Insights',
      readTime: '5 min read',
      date: 'Q3 2026 Executive Brief',
      summary: 'Why European and North American solar OEMs are transitioning to fractional regional sales engines to secure C&I developer contracts in Ghana and Nigeria.'
    }
  ];

  return (
    <section id="insights" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-widest">
              COMMERCIAL INTELLIGENCE & INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              West Africa Market Briefings
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Institutional intelligence on regulatory changes, distribution contract frameworks, and high-ticket B2B market dynamics across ECOWAS.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md"
          >
            Subscribe to Regional Executive Briefings
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-slate-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="px-2.5 py-1 rounded bg-slate-100 border text-slate-700 font-bold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">{item.date}</span>
                <button
                  onClick={onOpenModal}
                  className="text-red-600 group-hover:text-red-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Read Full Briefing <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
