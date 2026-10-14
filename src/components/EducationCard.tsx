import { profile } from '../data/profile';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

export const EducationCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {profile.education.map((edu, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(56,189,248,0.12)] flex flex-col justify-between"
        >
          <div>
            {/* Header info */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400">
                  {idx === 0 ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-indigo-400" />
                  )}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase block">
                    {edu.type}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {edu.degree}
                  </h3>
                </div>
              </div>
            </div>

            <div className="mb-4 inline-block px-3 py-1 rounded-md bg-slate-900 border border-white/[0.06] text-xs font-mono text-slate-300">
              Institution: <strong className="text-white">{edu.institution}</strong>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
              {edu.description}
            </p>

            {/* Curriculum Highlights */}
            <div className="space-y-2 pt-3 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Core Competencies & Curriculum:
              </span>
              <ul className="space-y-1.5">
                {edu.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Verified Coursework</span>
            <span className="text-cyan-400">Data Analytics Track</span>
          </div>
        </div>
      ))}
    </div>
  );
};
