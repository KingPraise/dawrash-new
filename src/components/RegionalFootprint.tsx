'use client';

import React from 'react';
import { MapPin, Globe, CheckCircle2, ArrowRight, Anchor, Building2, ShieldCheck, Flag } from 'lucide-react';

interface RegionalFootprintProps {
  onOpenModal: (market?: string) => void;
}

export const RegionalFootprint: React.FC<RegionalFootprintProps> = ({ onOpenModal }) => {
  const regions = [
    {
      id: 'nigeria',
      flag: '🇳🇬',
      name: 'Nigeria',
      type: 'Primary Regional Hub',
      badgeColor: 'bg-red-600/20 text-red-400 border-red-500/40',
      description: 'Sub-Saharan Africa’s largest market (220M+ population base). Direct commercial representation across Lagos and Abuja.',
      headquarters: 'Lagos & Abuja Commercial Corridor',
      corridors: [
        'Lagos Commercial Engine: Apapa & Lekki Deep Sea Port integration',
        'Abuja Regulatory Liaison: Direct NAFDAC & SONCAP clearance protocols',
        'Direct relationship coverage across 80+ Tier-1 Nigerian distributors',
        'Sub-Saharan Africa’s largest MedTech & C&I solar growth market'
      ],
      tradeCorridor: 'Lagos - Abuja Economic Spine'
    },
    {
      id: 'anglophone',
      flag: '🇬🇭 🇸🇱 🇱🇷',
      name: 'Anglophone West Africa',
      type: 'Anglophone Trade Corridor',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      description: 'High Ease-of-Doing-Business rankings, stable legal frameworks, and rapidly expanding industrial infrastructure.',
      headquarters: 'Accra (Ghana), Freetown (Sierra Leone), Monrovia (Liberia)',
      corridors: [
        'Ghana FDA & Energy Commission regulatory fast-tracking',
        'Tema Port logistics & ECOWAS free trade corridor access',
        'AgTech cold-chain & mining equipment distribution networks',
        'Established banking & FX repatriation channels'
      ],
      tradeCorridor: 'Accra - Tema Gateway Axis'
    },
    {
      id: 'francophone',
      flag: '🇨🇮 🇸🇳 🇧🇯 🇹🇬',
      name: 'Francophone Corridor (UEMOA)',
      type: 'Euro-Pegged CFA Currency Zone',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      description: 'Single regional currency (CFA Franc pegged to Euro), rapid GDP growth, and UEMOA customs union benefits.',
      headquarters: 'Abidjan (Côte d’Ivoire), Dakar (Senegal), Cotonou (Benin), Lomé (Togo)',
      corridors: [
        'Abidjan: Economic capital of Francophone West Africa',
        'Unified UEMOA regulatory framework & Euro FX stability',
        'Port of Cotonou & Lomé transshipment logistics coverage',
        'Bilingual French-English enterprise commercial sales team'
      ],
      tradeCorridor: 'Abidjan - Dakar UEMOA Corridor'
    }
  ];

  return (
    <section id="markets" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Vector Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Prominent Regional Africa Map Watermark Graphic */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-12 w-80 md:w-96 lg:w-[32rem] opacity-20 pointer-events-none select-none z-0">
        <img
          src="/africa.png"
          alt="West Africa Regional Footprint Silhouette"
          className="w-full h-auto object-contain filter drop-shadow-2xl brightness-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-extrabold uppercase tracking-widest">
            <span>REGIONAL FOOTPRINT & TRADE CORRIDORS</span>
            <span className="text-amber-400 font-extrabold">• ECOWAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Direct Boots on the Ground Across 8 West African Markets
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We bridge both Anglophone and Francophone trade corridors, providing localized commercial representation without currency or regulatory barriers.
          </p>
        </div>

        {/* 3 Structured Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regions.map((reg) => (
            <div
              key={reg.id}
              className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-2xl flex flex-col justify-between hover:border-slate-600 transition-all group"
            >
              <div>
                {/* Header Flag & Type */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{reg.flag}</span>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded border ${reg.badgeColor}`}>
                    {reg.type}
                  </span>
                </div>

                {/* Name & Description */}
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-red-400 transition-colors">
                  {reg.name}
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed font-medium">
                  {reg.description}
                </p>

                {/* Trade Corridor Highlights */}
                <div className="space-y-3 mb-6 border-t border-slate-700/60 pt-4">
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    Trade Corridor Infrastructure:
                  </div>
                  <div className="space-y-2">
                    {reg.corridors.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{reg.headquarters}</span>
                </div>

                <button
                  onClick={() => onOpenModal(reg.name)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Target {reg.name.split(' ')[0]} Region
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
