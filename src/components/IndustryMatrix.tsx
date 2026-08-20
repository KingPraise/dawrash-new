'use client';

import React from 'react';
import { Stethoscope, Zap, Sprout, HardHat, ArrowRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

interface IndustryMatrixProps {
  onOpenModal: (vertical?: string) => void;
}

export const IndustryMatrix: React.FC<IndustryMatrixProps> = ({ onOpenModal }) => {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare & MedTech',
      tagline: 'Hospital supply chains, diagnostics, medical device clearance.',
      icon: Stethoscope,
      accentBorder: 'border-t-4 border-t-red-600',
      badgeText: 'NAFDAC & FDA CLEARED',
      badgeStyle: 'bg-red-50 text-red-700 border-red-200',
      subPoints: [
        'NAFDAC & Ministry of Health regulatory clearance protocols',
        'Direct relationships with top 50 private & teaching hospital chains',
        'Vetted biomedical engineering service & distribution partners',
        'Cold-chain diagnostic reagent warehousing compliance'
      ],
      metric: '$14.2M MedTech Pipeline Represented',
      metricStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'energy',
      title: 'CleanTech & Energy',
      tagline: 'Commercial & Industrial solar, micro-grids, water tech.',
      icon: Zap,
      accentBorder: 'border-t-4 border-t-amber-500',
      badgeText: 'ACTIVE REGIONAL PIPELINE',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
      subPoints: [
        'Commercial & Industrial (C&I) solar developer partner matching',
        'Off-grid solar pump & micro-grid hardware representation',
        'Local warranty servicing & spares stocking agreements',
        'Utility tender representation & local joint venture structuring'
      ],
      metric: '35MW Solar Equipment Contracts Negotiated',
      metricStyle: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      id: 'agtech',
      title: 'AgTech & Food Processing',
      tagline: 'Post-harvest machinery, cold storage, precision farming.',
      icon: Sprout,
      accentBorder: 'border-t-4 border-t-emerald-600',
      badgeText: 'VERIFIED CHANNEL PARTNER',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      subPoints: [
        'Cassava, Cocoa, Grain & Oil Palm processor sales representation',
        'Solar-powered cold storage distribution network setup',
        'Commercial agribusiness loan & equipment financing alignment',
        'Operator training & localized spare parts distribution'
      ],
      metric: '18 Post-Harvest Industrial Units Deployed',
      metricStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'industrial',
      title: 'Industrial Tech & Logistics',
      tagline: 'Heavy machinery, fleet automation, supply chain tech.',
      icon: HardHat,
      accentBorder: 'border-t-4 border-t-slate-800',
      badgeText: 'INSTITUTIONAL CLEARANCE',
      badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
      subPoints: [
        'Port & maritime terminal logistics hardware sales',
        'Mining & construction heavy equipment dealer network vetting',
        'Fleet telematics & IoT supply chain tracking integration',
        'Industrial park & free-zone procurement representation'
      ],
      metric: '12 Tier-1 Heavy Machinery Dealers Secured',
      metricStyle: 'bg-red-50 text-red-700 border-red-200'
    }
  ];

  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-widest border border-slate-300">
            FOCUSED B2B SECTOR MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            High-Ticket Sector Expertise
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We specialize exclusively in complex, high-ticket B2B industries where local regulatory clearance, technical credibility, and vetted channel partnerships determine commercial success.
          </p>
        </div>

        {/* 4-Column Crisp Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;

            return (
              <div
                key={ind.id}
                className={`bg-white rounded-3xl p-6 ${ind.accentBorder} border-x border-b border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Header Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${ind.badgeStyle}`}>
                      {ind.badgeText}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">
                    {ind.tagline}
                  </p>

                  {/* Concrete Sub-Points */}
                  <div className="space-y-2.5 mb-6">
                    {ind.subPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metric & Action */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className={`text-[11px] font-extrabold p-2.5 rounded-lg border text-center ${ind.metricStyle}`}>
                    {ind.metric}
                  </div>

                  <button
                    onClick={() => onOpenModal(ind.title)}
                    className="w-full bg-slate-900 hover:bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors shadow flex items-center justify-center gap-2"
                  >
                    Discuss {ind.title.split(' ')[0]}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
