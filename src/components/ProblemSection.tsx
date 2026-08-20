'use client';

import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Clock, ArrowUpRight, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

interface ProblemSectionProps {
  onOpenModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenModal }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const problems = [
    {
      id: 0,
      badge: 'BOOTS ON THE GROUND',
      topBorder: 'border-t-4 border-t-red-600',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
      title: 'No Local Presence',
      tagline: 'High product-market fit, zero physical regional coverage',
      icon: ShieldAlert,
      problemText: 'You have a proven product in Europe, North America, or Asia, but no dedicated regional team to navigate local procurement cycles, build relationships, and drive pipeline.',
      impact: 'Opportunity Cost: Millions lost to local competitors with boots on the ground',
      dawrashSolution: 'DawRash provides fractional, enterprise-grade regional commercial directors who represent your brand directly in West Africa.',
      metrics: 'Save $250k+ annually in local office setup & overhead.'
    },
    {
      id: 1,
      badge: 'COUNTER-PARTY RISK',
      topBorder: 'border-t-4 border-t-amber-500',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      title: 'Unclear Market Access',
      tagline: 'High demand, severe counter-party & regulatory friction',
      icon: AlertTriangle,
      problemText: 'Demand exists across hospitals, utilities, and agribusinesses, but identifying vetted distributors and enterprise buyers from overseas carries massive credit and compliance risk.',
      impact: 'Risk Profile: Regulatory halts (SONCAP/NAFDAC), bad debt, rogue agents',
      dawrashSolution: 'Our institutional due diligence framework screens every channel partner for solvency, compliance, and distribution reach.',
      metrics: '100% verified distributor & buyer compliance screening.'
    },
    {
      id: 2,
      badge: 'COMMERCIAL VELOCITY',
      topBorder: 'border-t-4 border-t-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      title: 'Slow Market Development',
      tagline: 'Fragmented trade channels stalling revenue cycles',
      icon: Clock,
      problemText: 'Bureaucratic delays, complex import tariffs, and a lack of local relationship equity stall your regional expansion for 18–24 months before seeing initial revenue.',
      impact: 'Execution Lag: Extended sales cycles & deadlocked contract negotiations',
      dawrashSolution: 'Leverage our pre-established relationship matrix across government, institutional buyers, and Tier-1 distributor channels.',
      metrics: 'Accelerate market entry from 18 months down to 90 days.'
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-widest border border-slate-300">
            THE MARKET ENTRY CHALLENGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Entering West Africa Is Not Just About Finding a Market
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            International technology & hardware companies face 3 systemic bottlenecks when expanding into West Africa. Here is how we eliminate them.
          </p>
        </div>

        {/* 3 Distinct High-Contrast White Cards with Red/Gold/Green Top Accent Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-3xl p-8 border-x border-b border-slate-200 ${item.topBorder} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
              >
                {/* Top Badge & Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mb-6 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Problem Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    {item.problemText}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 mb-6">
                    {item.impact}
                  </div>
                </div>

                {/* Bottom Solution Callout */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <div className="space-y-1.5">
                    <div className="font-extrabold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      DawRash Commercial Solution:
                    </div>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                      {item.dawrashSolution}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-emerald-700 font-extrabold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <span>{item.metrics}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* High-Intent Conversion Footer Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-black text-slate-900">
              Ready to bypass conventional entry risks?
            </h4>
            <p className="text-xs text-slate-600 font-medium">
              Schedule a confidential commercial feasibility audit with our West Africa Managing Director.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-red-600/30 flex items-center gap-2"
          >
            Audit Your Expansion Feasibility
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
