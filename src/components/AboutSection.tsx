'use client';

import React from 'react';
import { Award, ShieldCheck, Users2, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Position */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase tracking-widest border border-slate-200">
              OUTSOURCED REGIONAL REVENUE ENGINE
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              We Are Not a Generic Consulting Firm. We Are Your Boots on the Ground.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              DawRash International was established to solve a single fundamental problem: international enterprise technology and hardware providers fail in West Africa not because their products lack quality, but because traditional market entry models (setting up costly local offices or handing exclusive rights to unvetted local agents) create massive execution risk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-extrabold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  Institutional Governance
                </div>
                <p className="text-xs text-slate-500">
                  Strict adherence to UK Bribery Act, US FCPA, and local ECOWAS regulatory standards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-extrabold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-emerald-600" />
                  Fractional Sales Directors
                </div>
                <p className="text-xs text-slate-500">
                  Veteran B2B commercial leaders pitching, negotiating, and closing contracts under your brand.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenModal}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                Connect With Our Managing Directors
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Institutional Leadership Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-red-400">
                Executive Leadership Matrix
              </div>
              <Award className="w-5 h-5 text-amber-400" />
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <p className="italic">
                "Our mission is to turn West Africa from a complex high-risk territory into a predictable, scaling commercial revenue center for global technology leaders."
              </p>
              
              <div className="pt-2 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>20+ Years Cumulative West Africa Enterprise Sales Experience</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>140+ Direct Institutional Relationships in ECOWAS</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Bilingual Leadership (English & French Execution)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">DawRash Senior Leadership Board</div>
                <div className="text-[11px] text-slate-400">Lagos • Accra • Abidjan • London</div>
              </div>
              <span className="text-[10px] font-extrabold bg-red-600 text-white px-2 py-1 rounded uppercase">
                Enterprise
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
