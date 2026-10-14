import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { GithubIcon } from '../components/Icons';
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  Terminal,
  Code2,
  Copy,
  Check,
  TrendingUp,
  AlertCircle,
  Clock,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-36 pb-24 text-center min-h-screen max-w-xl mx-auto px-4">
        <h2 className="font-display text-2xl font-bold text-white mb-3">Project Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">
          The requested analytical case study could not be located.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Gallery</span>
        </Link>
      </div>
    );
  }

  // Find next and prev project
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const isCompleted = project.status === 'Completed';

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>

          <span className="text-xs font-mono text-slate-500">
            Case Study #{currentIndex + 1} of {projects.length}
          </span>
        </div>

        {/* Project Header Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#090E1A]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                isCompleted
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              <span>{project.status}</span>
            </span>

            <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
              {project.category.join(' • ')}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {project.subtitle}
          </p>

          {/* Action Links & Tech Pills */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-white/[0.08] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-800 text-white border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>Repository on GitHub</span>
            </a>
          </div>
        </div>

        {/* Metrics Highlight Row */}
        {project.metricsHighlighted && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metricsHighlighted.map((m, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/[0.06] space-y-1"
              >
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-400">{m.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Section: Overview & Business Problem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Project Overview</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Executive Context
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Business Problem</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              The Analytical Challenge
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.businessProblem}
            </p>
          </div>
        </div>

        {/* Section: Dataset & Schema Information */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>Dataset & Data Architecture</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            Underlying Data Structure
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.datasetInfo.schemaDescription}
          </p>

          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/[0.06] space-y-1">
              <span className="text-slate-400 block uppercase">Data Source:</span>
              <span className="text-slate-200">{project.datasetInfo.source}</span>
            </div>
            {project.datasetInfo.records && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-white/[0.06] space-y-1">
                <span className="text-slate-400 block uppercase">Volume & Scale:</span>
                <span className="text-cyan-300">{project.datasetInfo.records}</span>
              </div>
            )}
          </div>

          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Primary Attributes & Relational Keys:
            </span>
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-xs text-slate-300 space-y-1 overflow-x-auto">
              {project.datasetInfo.attributes.map((attr, idx) => (
                <div key={idx} className="text-slate-400">
                  <span className="text-cyan-400 font-bold">&gt;</span> {attr}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Data Preparation & Cleaning */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Data Cleaning & Validation Protocols</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            How Data Was Prepared
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {project.dataPreparation.map((prep, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-white/[0.04] text-xs text-slate-300 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                <span>{prep}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section: Analytical Approach */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Analytical Methodology</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            Analytical Approach & Query Logic
          </h3>
          <div className="space-y-3 pt-2">
            {project.analyticalApproach.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-white/[0.04] text-xs sm:text-sm text-slate-300"
              >
                <span className="font-mono text-cyan-400 font-bold shrink-0">{`0${idx + 1}.`}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Code Snippets (SQL / Python) */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Code Artifacts
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Analytical Query & Script Inspection
                </h3>
              </div>
            </div>

            {project.codeSnippets.map((snippet, sIdx) => (
              <div
                key={sIdx}
                className="rounded-2xl bg-[#070A12] border border-white/[0.08] overflow-hidden shadow-2xl"
              >
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 ml-2 font-medium">
                      {snippet.title}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyCode(snippet.code, sIdx)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
                  >
                    {copiedIndex === sIdx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body */}
                <pre className="p-4 sm:p-5 overflow-x-auto text-xs font-mono text-cyan-300 leading-relaxed bg-[#05070D]">
                  <code>{snippet.code}</code>
                </pre>

                {/* Snippet Explanation Footer */}
                <div className="p-3.5 bg-slate-950/60 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{snippet.explanation}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section: Key Findings & Business Implications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Analytical Insights</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Key Findings & Patterns
            </h3>
            <ul className="space-y-3 pt-2">
              {project.keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Strategic Impact</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Business Implications
            </h3>
            <ul className="space-y-3 pt-2">
              {project.businessImplications.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next & Previous Project Switcher */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-white/[0.06] hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Previous Case Study</span>
                <span className="font-semibold text-white">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.id}`}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-white/[0.06] hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all text-right"
            >
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Next Case Study</span>
                <span className="font-semibold text-white">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
