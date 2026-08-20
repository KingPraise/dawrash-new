'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Globe, Building2, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVertical?: string;
  defaultMarket?: string;
}

export const QualificationModal: React.FC<QualificationModalProps> = ({
  isOpen,
  onClose,
  defaultVertical = '',
  defaultMarket = ''
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    countryOrigin: '',
    industryVertical: defaultVertical || 'Healthcare & MedTech',
    targetMarket: defaultMarket || 'Nigeria (Commercial Powerhouse)',
    primaryObjective: 'Distributor Sourcing & Vetting',
    annualRevenue: '$5M - $20M',
    timeline: 'Immediate (1-3 Months)',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid work email';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.countryOrigin.trim()) newErrors.countryOrigin = 'Country of origin is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-converting enterprise API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1200);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Accent Bar with Pan-African Subtle Color Accents */}
        <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-red-600 to-amber-500" />

        {/* Modal Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 md:p-8">
            {/* Header Context */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> Direct Commercial Access
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Schedule Market Entry Briefing
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Evaluate market demand, distributor networks, and commercial pathways for West Africa with our senior partners.
              </p>
            </div>

            {/* Stepper indicators */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className={`flex items-center gap-2 text-xs font-bold ${step === 1 ? 'text-red-600' : 'text-slate-400'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 1 ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'}`}>1</span>
                Corporate & Contact Info
              </div>
              <div className="w-8 h-px bg-slate-200" />
              <div className={`flex items-center gap-2 text-xs font-bold ${step === 2 ? 'text-red-600' : 'text-slate-400'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 2 ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'}`}>2</span>
                Expansion Scope & Objectives
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Marcus Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          errors.fullName ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        placeholder="marcus@company.com"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          errors.businessEmail ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.businessEmail && <p className="text-xs text-red-600 mt-1">{errors.businessEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex BioMedical Global"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          errors.companyName ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Country of Origin / HQ *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Germany, USA, Japan"
                        value={formData.countryOrigin}
                        onChange={(e) => setFormData({ ...formData, countryOrigin: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          errors.countryOrigin ? 'border-red-500 ring-red-200' : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.countryOrigin && <p className="text-xs text-red-600 mt-1">{errors.countryOrigin}</p>}
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (validate()) setStep(2);
                      }}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md text-sm"
                    >
                      Next: Expansion Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Industry Vertical
                      </label>
                      <select
                        value={formData.industryVertical}
                        onChange={(e) => setFormData({ ...formData, industryVertical: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                      >
                        <option value="Healthcare & MedTech">Healthcare & MedTech</option>
                        <option value="Renewable Energy & Infrastructure">Renewable Energy & Infrastructure</option>
                        <option value="AgTech & Food Processing">AgTech & Food Processing</option>
                        <option value="Industrial Technology & Logistics">Industrial Technology & Logistics</option>
                        <option value="CleanTech & Water Systems">CleanTech & Water Systems</option>
                        <option value="Other High-Ticket B2B Enterprise">Other High-Ticket B2B Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Target West African Market
                      </label>
                      <select
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                      >
                        <option value="Nigeria (Commercial Powerhouse)">Nigeria (Commercial Powerhouse)</option>
                        <option value="Ghana (West Coast Gateway)">Ghana (West Coast Gateway)</option>
                        <option value="Côte d'Ivoire (Francophone Hub)">Côte d'Ivoire (Francophone Hub)</option>
                        <option value="Senegal & Regional Francophone Zone">Senegal & Regional Francophone Zone</option>
                        <option value="Multi-Country West African Expansion">Multi-Country West African Expansion</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Objective
                      </label>
                      <select
                        value={formData.primaryObjective}
                        onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                      >
                        <option value="Distributor Sourcing & Vetting">Distributor Sourcing & Vetting</option>
                        <option value="Fractional Regional Commercial Team">Fractional Regional Commercial Team</option>
                        <option value="Market & Regulatory Assessment (NAFDAC/SONCAP)">Market & Regulatory Assessment</option>
                        <option value="Full Turnkey Regional Revenue Engine">Full Turnkey Regional Revenue Engine</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Target Deployment Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 bg-white"
                      >
                        <option value="Immediate (1-3 Months)">Immediate (1-3 Months)</option>
                        <option value="Next Quarter (3-6 Months)">Next Quarter (3-6 Months)</option>
                        <option value="Strategic Planning (6-12 Months)">Strategic Planning (6-12 Months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Additional Context / Equipment Details (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly describe your hardware/technology and existing distribution model..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 underline"
                    >
                      ← Back to Contact Info
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-7 py-3 rounded-xl transition-all shadow-lg hover:shadow-red-600/30 text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Verifying Corporate Details...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Schedule Market Briefing
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Non-Disclosure Protected & Institutional Governance
              </span>
              <span className="hidden sm:inline">Guaranteed response within 24 business hours</span>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center py-12">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Briefing Request Received
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our West Africa Managing Director will review <strong className="text-slate-900">{formData.companyName}</strong>'s profile and dispatch a preliminary market readiness assessment prior to our briefing.
            </p>
            <div className="inline-block p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-md w-full">
              <div className="flex justify-between">
                <span className="text-slate-500">Target Region:</span>
                <span className="font-bold text-slate-900">{formData.targetMarket}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sector:</span>
                <span className="font-bold text-slate-900">{formData.industryVertical}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation Sent To:</span>
                <span className="font-bold text-slate-900">{formData.businessEmail}</span>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="bg-slate-900 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-sm"
            >
              Return to Platform Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
