'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, Anchor, Zap, Stethoscope, Award, Globe, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50/90 via-white/80 to-white/90 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Enterprise Hook */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline & Main H1 */}
            <div className="space-y-3">
              <div className="text-red-600 font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-red-600 inline-block" />
                You build the product. We build the market.
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Your Commercial Partner for <span className="underline decoration-red-600 underline-offset-8 decoration-4">West Africa</span>
              </h1>
            </div>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              We represent international enterprise technology and hardware providers—generating pipeline, securing vetted distributors, and closing commercial agreements without the risk and overhead of setting up a local subsidiary.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                Discuss Your African Expansion
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#framework"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-base px-7 py-4 rounded-xl transition-all border border-slate-300"
              >
                Explore Our Approach
              </a>
            </div>

            {/* Microcopy Guarantee */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Enter West Africa without the immediate cost of establishing a local office.</span>
            </div>

            {/* Metric Callout Strip with Gold/Green/Red Accents */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">$45M+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" /> Pipeline Generated
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">140+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Vetted Channel Partners
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">8 Markets</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" /> ECOWAS Representation
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Multi-Image Collage of West African Commerce */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Main Visual Container */}
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">West Africa Commercial Operations</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-slate-900 text-white">
                    Boots On The Ground
                  </span>
                </div>

                {/* Editorial Photo Grid Collage */}
                <div className="grid grid-cols-2 gap-3">
                  
                  <div className="group relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                      alt="West African Commercial Business District" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="flex items-center gap-1 text-[10px] font-extrabold text-amber-400 uppercase tracking-wider">
                        <Building2 className="w-3 h-3" /> Commercial Hubs
                      </div>
                      <div className="text-xs font-black leading-tight">Lagos & Accra Central Districts</div>
                    </div>
                  </div>

                  <div className="group relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" 
                      alt="Container Logistics & Maritime Shipping Ports" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="flex items-center gap-1 text-[10px] font-extrabold text-red-400 uppercase tracking-wider">
                        <Anchor className="w-3 h-3" /> Maritime Trade
                      </div>
                      <div className="text-xs font-black leading-tight">Apapa & Tema Port Clearing</div>
                    </div>
                  </div>

                  <div className="group relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80" 
                      alt="Commercial Solar Micro-Grids & Clean Energy Projects" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                        <Zap className="w-3 h-3" /> CleanTech
                      </div>
                      <div className="text-xs font-black leading-tight">C&I Solar & Micro-Grids</div>
                    </div>
                  </div>

                  <div className="group relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80" 
                      alt="MedTech Hospital Equipment & Diagnostic Facilities" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="flex items-center gap-1 text-[10px] font-extrabold text-sky-400 uppercase tracking-wider">
                        <Stethoscope className="w-3 h-3" /> MedTech
                      </div>
                      <div className="text-xs font-black leading-tight">Hospital Supply & Compliance</div>
                    </div>
                  </div>

                </div>

                {/* Institutional Representation Banner */}
                <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center justify-between border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center font-black text-white text-xs shadow-md">
                      WA
                    </div>
                    <div>
                      <div className="text-xs font-black">Outsourced Commercial Representation</div>
                      <div className="text-[11px] text-slate-300 font-medium">Pitching, negotiating, and closing under your brand</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800 shrink-0">
                    ACTIVE
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
