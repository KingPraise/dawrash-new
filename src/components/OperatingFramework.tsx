'use client';

import React, { useState } from 'react';
import { Search, UserCheck, Briefcase, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, FileCheck2, Users, FileText, BarChart3 } from 'lucide-react';

interface OperatingFrameworkProps {
  onOpenModal: () => void;
}

export const OperatingFramework: React.FC<OperatingFrameworkProps> = ({ onOpenModal }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNumber: '01',
      title: 'Market Validation',
      subtitle: 'Demand audit, price tolerance & regulatory compliance',
      icon: Search,
      deliverableTitle: 'Operational Deliverable: Regulatory & Demand Roadmap',
      deliverableIcon: FileCheck2,
      deliverableDetails: [
        'Local pricing sensitivity & import tariff clearance route',
        'Regulatory gap analysis (NAFDAC, SONCAP, Ghana FDA, Cote d’Ivoire clearance)',
        'Competitive landscape & addressable market profiling'
      ],
      timeframe: 'Weeks 1–3',
      outcome: 'Validated Market Entry Blueprint & Legal Clearance Route'
    },
    {
      stepNumber: '02',
      title: 'Channel Due Diligence',
      subtitle: 'Vetting Tier-1 distributors & institutional buyers',
      icon: UserCheck,
      deliverableTitle: 'Operational Deliverable: Vetted Partner Audit Matrix',
      deliverableIcon: Users,
      deliverableDetails: [
        'Solvency & creditworthiness audit of local partner candidates',
        'Distribution logistics & cold-chain/warehouse physical verification',
        'Counter-party background verification & anti-bribery compliance check'
      ],
      timeframe: 'Weeks 4–6',
      outcome: 'Shortlist of Pre-Vetted, High-Capacity Tier-1 Channel Partners'
    },
    {
      stepNumber: '03',
      title: 'Commercial Representation',
      subtitle: 'Fractional sales engine pitching under your brand',
      icon: Briefcase,
      deliverableTitle: 'Operational Deliverable: Active Field Sales Pipeline',
      deliverableIcon: FileText,
      deliverableDetails: [
        'Dedicated Regional Commercial Director acting as your local VP of Sales',
        'Direct pitching to hospital groups, energy developers, and industrial hubs',
        'Drafting & negotiating high-ticket commercial distribution agreements'
      ],
      timeframe: 'Months 2–4',
      outcome: 'First High-Ticket Distribution Deals Signed & Initial Orders Executed'
    },
    {
      stepNumber: '04',
      title: 'Scaling & Governance',
      subtitle: 'Quota monitoring, supply chain oversight & contract execution',
      icon: TrendingUp,
      deliverableTitle: 'Operational Deliverable: Quota & Governance Dashboard',
      deliverableIcon: BarChart3,
      deliverableDetails: [
        'Ongoing distributor performance & sell-through quota monitoring',
        'Local payment collection oversight & FX milestone tracking',
        'Quarterly expansion planning into adjacent ECOWAS corridors'
      ],
      timeframe: 'Ongoing Year-Round',
      outcome: 'Predictable, Scaling Revenue Channel without Physical Office Overhead'
    }
  ];

  return (
    <section id="framework" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase tracking-widest border border-slate-200">
              OPERATIONAL EXECUTION PIPELINE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              4-Step Sequential Commercial Engine
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A structured, institutional approach to expanding into West Africa safely, transparently, and with concrete commercial deliverables at every stage.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              Request Custom Pipeline Blueprint
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean Horizontal Milestone Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={item.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]'
                    : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black ${isActive ? 'text-red-500' : 'text-slate-400'}`}>
                    {item.stepNumber}
                  </span>
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="font-extrabold text-base leading-snug">
                  {item.title}
                </div>
                <div className={`text-xs font-bold mt-1 ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                  {item.timeframe}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Operational Deliverable Card */}
        {steps[activeStep] && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-10 shadow-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Core Execution Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-black text-red-600">
                      {steps[activeStep].stepNumber}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700">
                      Phase {activeStep + 1} Field Execution
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      • {steps[activeStep].timeframe}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold mt-1">
                    {steps[activeStep].subtitle}
                  </p>
                </div>

                {/* Key Deliverables Bulleted List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Field Deliverables & Activities:
                  </h4>
                  <ul className="space-y-2.5">
                    {steps[activeStep].deliverableDetails.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Clean Operational Deliverable Card */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-white">
                    {React.createElement(steps[activeStep].deliverableIcon, { className: "w-5 h-5 text-amber-400" })}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Executive Deliverable
                    </div>
                    <div className="text-sm font-bold text-slate-700">
                      {steps[activeStep].deliverableTitle}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1.5">
                  <div className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider">
                    Measurable Result
                  </div>
                  <div className="text-sm font-black leading-snug">
                    "{steps[activeStep].outcome}"
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Every deliverable is reviewed directly by our senior B2B commercial directors with established relationship networks in Nigeria, Ghana, and Francophone West Africa.
                </p>

                <button
                  onClick={onOpenModal}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md"
                >
                  Discuss Step {steps[activeStep].stepNumber} For Your Product
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
