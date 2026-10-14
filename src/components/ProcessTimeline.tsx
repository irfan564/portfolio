import React from 'react';
import { profile } from '../data/profile';
import { Compass, Database, Search, Presentation, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const stepIcons = [
    <Compass className="w-5 h-5 text-cyan-400" />,
    <Database className="w-5 h-5 text-sky-400" />,
    <Search className="w-5 h-5 text-indigo-400" />,
    <Presentation className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <div className="relative">
      {/* Background connector line for desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/30 to-emerald-500/20 -translate-y-8 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {profile.processSteps.map((item, index) => (
          <div
            key={item.step}
            className="group relative rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] hover:border-cyan-500/40 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(56,189,248,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {item.step}
                </span>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] group-hover:border-cyan-500/30 transition-colors">
                  {stepIcons[index]}
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <div className="mb-3">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {item.subtitle}
                </span>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Progress Node */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Phase {index + 1} of 4</span>
              {index < 3 ? (
                <span className="flex items-center gap-1 text-cyan-400/80 group-hover:text-cyan-300">
                  Next <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              ) : (
                <span className="text-emerald-400 font-semibold">Delivered</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
