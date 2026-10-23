import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { GithubIcon } from '../components/Icons';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Image as ImageIcon
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Project Not Found</h1>
        <p className="text-sm text-slate-600">
          The requested project case study does not exist.
        </p>
        <div className="pt-2">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  // Next and Previous navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0 && !project.githubUrl.includes('[FILL'));

  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          NAVIGATION BREADCRUMB
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECT HEADER & LINKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="space-y-4 pb-8 border-b border-slate-200">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {project.businessQuestion}
          </p>
        </div>

        {/* Tools Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors"
            >
              <span>Live Dashboard / Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {hasGithubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository: [FILL: repo URL]</span>
            </span>
          )}
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CASE STUDY CONTENT (ONLY REQUIRED SECTIONS)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="space-y-10">
        {/* 1. Problem */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Problem
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed">
            {project.problem}
          </div>
        </section>

        {/* 2. Data */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Data
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4 text-sm text-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Source
                </span>
                <span className="font-medium text-slate-900">{project.dataset.source}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Dataset Size & Scope
                </span>
                <span className="font-medium text-slate-900">{project.dataset.rowCount}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                How I Cleaned It
              </span>
              <p className="leading-relaxed">{project.dataset.cleaning}</p>
            </div>
          </div>
        </section>

        {/* 3. What I Did (3-5 bullets) */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            What I Did
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2.5 text-sm text-slate-700">
              {project.whatIDid.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-blue-700 font-bold mt-0.5">
                    {`0${idx + 1}.`}
                  </span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Findings (Numbers) */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Findings
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-700">
              {project.keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-blue-700 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed font-medium text-slate-800">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Recommendation */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Recommendation
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed">
            {project.recommendation}
          </div>
        </section>

        {/* 6. Screenshots (min 2) */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.screenshots.map((screen, idx) => {
              const hasFailed = imageErrors[idx];

              return (
                <figure
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                    {!hasFailed ? (
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        onError={() => handleImageError(idx)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="p-6 text-center space-y-2">
                        <ImageIcon className="w-8 h-8 text-slate-400 mx-auto" />
                        <div className="text-xs font-medium text-slate-700">
                          {screen.alt}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500">
                          [FILL: Add image to {screen.src}]
                        </div>
                      </div>
                    )}
                  </div>
                  <figcaption className="p-3.5 text-xs text-slate-600 leading-snug">
                    <span className="font-semibold text-slate-800">{screen.alt}: </span>
                    {screen.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        {/* 7. Code Snippet (Max one short SQL or Python snippet) */}
        {project.codeSnippet && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
                Code Snippet
              </h2>
              <span className="text-xs font-mono text-slate-500 uppercase">
                {project.codeSnippet.language}
              </span>
            </div>

            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
                <span>{project.codeSnippet.title}</span>
                <button
                  onClick={() => handleCopyCode(project.codeSnippet!.code)}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {copied ? (
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

              <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed bg-[#0B0F19]">
                <code>{project.codeSnippet.code}</code>
              </pre>

              <div className="px-4 py-2.5 bg-slate-950/70 border-t border-slate-800 text-xs font-mono text-slate-400">
                {project.codeSnippet.explanation}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PREV / NEXT PROJECT NAVIGATION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav aria-label="Project Case Studies" className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-blue-700 shrink-0" />
            <div className="text-left">
              <span className="text-[11px] font-mono text-slate-500 block uppercase">Previous Project</span>
              <span className="text-sm font-semibold text-slate-900">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className="flex items-center justify-end gap-2 p-3 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-colors text-right"
          >
            <div>
              <span className="text-[11px] font-mono text-slate-500 block uppercase">Next Project</span>
              <span className="text-sm font-semibold text-slate-900">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-700 shrink-0" />
          </Link>
        )}
      </nav>
    </div>
  );
};
