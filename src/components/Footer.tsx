'use client';

import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-4 space-y-4">
            <Logo className="text-white" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              DawRash International is an enterprise-grade commercial expansion partner representing global MedTech, CleanTech, AgTech, and industrial technology providers across West Africa.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Institutional FCPA & UK Bribery Act Governance</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#framework" className="hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries Matrix</a></li>
              <li><a href="#markets" className="hover:text-white transition-colors">Regional Footprint</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About DawRash</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Market Intelligence</a></li>
            </ul>
          </div>

          {/* Regional Hubs & Offices */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Regional Commercial Hubs
            </h4>
            <div className="space-y-2 text-slate-300">
              <div>
                <strong className="text-white block">Lagos (Commercial Engine)</strong>
                Victoria Island & Lekki Trade Corridor, Nigeria
              </div>
              <div>
                <strong className="text-white block">Accra (Gateway Hub)</strong>
                Airport Residential Area, Accra, Ghana
              </div>
              <div>
                <strong className="text-white block">Abidjan (Francophone Hub)</strong>
                Plateau Commercial Center, Côte d’Ivoire
              </div>
            </div>
          </div>

          {/* Direct Contact & CTA */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Executive Briefing
            </h4>
            <p className="text-xs text-slate-400">
              Request a confidential market assessment with our Managing Director.
            </p>
            <button
              onClick={onOpenModal}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md text-center block"
            >
              Schedule Expansion Briefing
            </button>
            <div className="pt-2 text-[11px] text-slate-500">
              Response SLA: 24 Business Hours
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} DawRash International. All rights reserved. Your Commercial Partner for West Africa.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Representation</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Anti-Bribery Policy</a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
