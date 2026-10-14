import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { GithubIcon } from './Icons';
import {
  ArrowRight,
  Database,
  BarChart3,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featuredMode?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isCompleted = project.status === 'Completed';

  // Render abstract data visual based on project ID
  const renderAbstractGraphic = () => {
    if (project.id === 'retail-bi-ecommerce') {
      return (
        <div className="relative h-48 w-full bg-gradient-to-br from-slate-950 via-[#0B132B] to-[#0A192F] p-5 overflow-hidden flex flex-col justify-between border-b border-white/[0.08]">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-30" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
              <Database className="w-3 h-3 text-cyan-400" />
              <span>PostgreSQL Star Schema</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">100k+ Records</span>
          </div>

          {/* Mini revenue bar visualization */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-end gap-1.5 h-16 pt-2">
              <div className="w-1/6 bg-cyan-500/20 rounded-t h-[35%]" />
              <div className="w-1/6 bg-cyan-500/30 rounded-t h-[50%]" />
              <div className="w-1/6 bg-cyan-500/40 rounded-t h-[65%]" />
              <div className="w-1/6 bg-cyan-500/60 rounded-t h-[80%]" />
              <div className="w-1/6 bg-cyan-400/80 rounded-t h-[92%]" />
              <div className="w-1/6 bg-cyan-400 rounded-t h-[100%]" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-1">
              <span>Cohort Acquisition</span>
              <span className="text-cyan-300 font-semibold">+24.8% LTV</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'movie-rental-eda') {
      return (
        <div className="relative h-48 w-full bg-gradient-to-br from-slate-950 via-[#10192A] to-[#1E1B4B] p-5 overflow-hidden flex flex-col justify-between border-b border-white/[0.08]">
          <div className="absolute inset-0 bg-tech-grid opacity-30" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 flex items-center gap-1.5">
              <BarChart3 className="w-3 h-3 text-indigo-400" />
              <span>Seaborn EDA Heatmap</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">16,000 Rentals</span>
          </div>

          {/* Mini Heatmap Matrix Representation */}
          <div className="relative z-10 grid grid-cols-7 gap-1 pt-4">
            {Array.from({ length: 21 }).map((_, i) => {
              const opacity = [0.2, 0.4, 0.7, 0.9, 0.5, 0.3, 0.8][i % 7];
              return (
                <div
                  key={i}
                  className="h-3 rounded-sm bg-indigo-500 transition-opacity"
                  style={{ opacity }}
                />
              );
            })}
          </div>
          <div className="relative z-10 flex justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-1">
            <span>Peak Demand Window</span>
            <span className="text-indigo-300 font-semibold">Fri-Sat 17:00-21:00</span>
          </div>
        </div>
      );
    }

    // Default for NL to SQL Platform
    return (
      <div className="relative h-48 w-full bg-gradient-to-br from-slate-950 via-[#0D1A2D] to-[#132E35] p-5 overflow-hidden flex flex-col justify-between border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-tech-grid opacity-30" />
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
            <span>NL Query Engine</span>
          </span>
          <span className="text-[10px] font-mono text-slate-400">PostgreSQL + NLP</span>
        </div>

        {/* Code translation mockup snippet */}
        <div className="relative z-10 p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[10px] space-y-1">
          <div className="text-slate-400">&gt; "Show top 5 revenue categories"</div>
          <div className="text-cyan-400 truncate">&gt; SELECT category, SUM(rev) FROM sales...</div>
        </div>
        <div className="relative z-10 flex justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-1">
          <span>Read-Only Guardrail</span>
          <span className="text-emerald-300 font-semibold">Active & Operational</span>
        </div>
      </div>
    );
  };

  return (
    <div className="group rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] hover:border-cyan-500/40 overflow-hidden shadow-xl hover:shadow-[0_15px_40px_-10px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover Graphic Preview */}
        {renderAbstractGraphic()}

        <div className="p-5 sm:p-6 space-y-4">
          {/* Status & Category Tag */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono ${
                  isCompleted
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3 h-3" />
                ) : (
                  <Clock className="w-3 h-3" />
                )}
                <span>{project.status}</span>
              </span>
            </div>

            <span className="text-xs font-mono text-slate-400">
              {project.category[0]}
            </span>
          </div>

          {/* Project Title */}
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Analytical Techniques Pills */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Key Analytical Focus:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.analyticalTechniques.slice(0, 3).map((technique, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-white/[0.06] text-slate-300"
                >
                  {technique}
                </span>
              ))}
              {project.analyticalTechniques.length > 3 && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400">
                  +{project.analyticalTechniques.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Technologies Used Pills */}
          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span>View on GitHub</span>
        </a>

        <Link
          to={`/projects/${project.id}`}
          className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all hover:scale-[1.02]"
        >
          <span>Explore Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
