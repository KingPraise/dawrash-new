'use client';

import React from 'react';

export const Logo: React.FC<{ className?: string; iconOnly?: boolean }> = ({ className = '', iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 font-sans ${className}`}>
      {/* Official Brand Logo */}
      <img
        src="/logo.png"
        alt="DawRash Logo"
        className="h-10 w-auto object-contain shrink-0"
      />

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="font-black tracking-tight text-xl text-slate-900">
              DAWRASH
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-red-600" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-500 mt-0.5">
            INTERNATIONAL
          </span>
        </div>
      )}
    </div>
  );
};
