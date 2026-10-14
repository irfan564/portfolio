import React, { useState } from 'react';
import type { SkillCategoryGroup, SkillDetail } from '../data/skills';
import { Terminal, Database, BarChart2, Filter, Info } from 'lucide-react';

interface SkillCardProps {
  categoryGroup: SkillCategoryGroup;
}

export const SkillCard: React.FC<SkillCardProps> = ({ categoryGroup }) => {
  const [activeSkill, setActiveSkill] = useState<SkillDetail>(categoryGroup.skills[0]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'databases':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'bi':
        return <BarChart2 className="w-5 h-5 text-indigo-400" />;
      case 'preparation':
        return <Filter className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_10px_35px_-10px_rgba(56,189,248,0.12)] flex flex-col justify-between">
      <div>
        {/* Category Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08]">
              {getCategoryIcon(categoryGroup.id)}
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                {categoryGroup.categoryName}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                {categoryGroup.categoryBadge}
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-5 leading-relaxed">
          {categoryGroup.categoryDescription}
        </p>

        {/* Skill Badges Selection */}
        <div className="mb-5">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Info className="w-3 h-3 text-cyan-400" />
            <span>Hover or click a skill for details</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryGroup.skills.map((skill) => {
              const isSelected = activeSkill.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-slate-900/70 text-slate-300 border-white/[0.06] hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  {skill.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Skill Analytical Insight Card */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs font-mono space-y-2 mt-auto">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
          <span className="font-bold text-cyan-300">{activeSkill.name}</span>
          <span className="text-[10px] text-slate-400 tracking-wider uppercase">
            {activeSkill.tagline}
          </span>
        </div>

        <p className="text-slate-300 font-sans text-xs leading-relaxed">
          {activeSkill.description}
        </p>

        <div className="pt-2 border-t border-white/[0.05] space-y-1">
          <span className="text-[10px] text-cyan-400 block font-semibold uppercase tracking-wider">
            Analytical Application:
          </span>
          <p className="text-slate-400 font-sans text-[11px] leading-relaxed">
            {activeSkill.practicalApplication}
          </p>
        </div>

        {/* Popular Functions Chips */}
        <div className="pt-2 flex flex-wrap gap-1">
          {activeSkill.popularFunctions.map((fn, idx) => (
            <span
              key={idx}
              className="px-1.5 py-0.5 rounded text-[10px] bg-slate-900 border border-white/[0.06] text-slate-400"
            >
              {fn}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
