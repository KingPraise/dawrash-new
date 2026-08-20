'use client';

import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2, ArrowRight, Building2, Globe2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InlineLeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    countryOrigin: '',
    industryVertical: 'Healthcare & MedTech',
    targetMarket: 'Nigeria (Commercial Powerhouse)',
    primaryObjective: 'Distributor Sourcing & Vetting',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Valid business email required';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {
        // Fallback
      }
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Conversion Messaging & Proof */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-widest">
              HIGH-INTENT LEAD QUALIFICATION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Establish Your West Africa Revenue Engine?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Schedule a confidential 30-minute Market Entry Briefing with our West Africa Managing Directors to review market feasibility, regulatory clearance, and vetted channel partner availability.
            </p>

            {/* Proof checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero obligation, strict NDA-protected briefing</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Custom market entry blueprint tailored to your specific product</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct access to Tier-1 distributor networks in Nigeria & ECOWAS</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-red-500 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block">Enterprise Compliance Guaranteed</strong>
                Full compliance with international FCPA and UK Bribery governance.
              </div>
            </div>
          </div>

          {/* Right Side: High-Converting Form Container */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Schedule Market Entry Briefing
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below to receive a personalized West Africa market readiness report.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@enterprise.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.businessEmail ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                      }`}
                    />
                    {errors.businessEmail && <p className="text-xs text-red-600 mt-1">{errors.businessEmail}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Global CleanTech Systems"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.companyName ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                      }`}
                    />
                    {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Country of Origin / HQ
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United Kingdom, USA, Germany"
                      value={formData.countryOrigin}
                      onChange={(e) => setFormData({ ...formData, countryOrigin: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Industry Vertical
                    </label>
                    <select
                      value={formData.industryVertical}
                      onChange={(e) => setFormData({ ...formData, industryVertical: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                    >
                      <option value="Healthcare & MedTech">Healthcare & MedTech</option>
                      <option value="Renewable Energy & Infrastructure">Renewable Energy & Infrastructure</option>
                      <option value="AgTech & Food Processing">AgTech & Food Processing</option>
                      <option value="Industrial Technology & Logistics">Industrial Technology & Logistics</option>
                      <option value="Other B2B Hardware / Technology">Other B2B Hardware / Technology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Target West African Market
                    </label>
                    <select
                      value={formData.targetMarket}
                      onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                    >
                      <option value="Nigeria (Commercial Powerhouse)">Nigeria (Commercial Powerhouse)</option>
                      <option value="Ghana (West Coast Gateway)">Ghana (West Coast Gateway)</option>
                      <option value="Côte d'Ivoire (Francophone Hub)">Côte d'Ivoire (Francophone Hub)</option>
                      <option value="Multi-Country ECOWAS Corridor">Multi-Country ECOWAS Corridor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    Primary Objective
                  </label>
                  <select
                    value={formData.primaryObjective}
                    onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                  >
                    <option value="Distributor Sourcing & Vetting">Distributor Sourcing & Vetting</option>
                    <option value="Fractional Regional Sales Engine">Fractional Regional Sales Engine</option>
                    <option value="Market & Regulatory Assessment (SONCAP/NAFDAC)">Market & Regulatory Assessment</option>
                    <option value="Turnkey Regional Commercial Representation">Turnkey Regional Commercial Representation</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-xl hover:shadow-red-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing Briefing Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Schedule Market Entry Briefing
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-500">
                  By submitting, you agree to receive institutional communications regarding West African market expansion. Strict privacy guaranteed.
                </p>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Briefing Request Confirmed
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our Regional Managing Director has received <strong className="text-slate-900">{formData.companyName}</strong>'s request and will follow up within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Submit Another Briefing Request
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
