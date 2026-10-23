import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { GithubIcon } from './Icons';
import { ArrowRight, ExternalLink, Database } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0 && !project.githubUrl.includes('[FILL'));

  return (
    <article className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-5 transition-colors hover:border-slate-300">
      {/* Header: Title & Business Question */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
            <Link
              to={`/projects/${project.id}`}
              className="hover:text-blue-700 transition-colors"
            >
              {project.title}
            </Link>
          </h3>
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-sm font-medium text-slate-700 leading-relaxed">
          {project.businessQuestion}
        </p>
      </div>

      {/* Tools Used Chips */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200/80"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Dataset & Row Count */}
      <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/60 rounded-md p-3">
        <Database className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-medium text-slate-700">Dataset: </span>
          <span>{project.dataset.name}</span>
        </div>
      </div>

      {/* 2 Findings with Numbers */}
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Key Findings
        </div>
        <ul className="space-y-1.5 text-sm text-slate-700">
          {project.keyFindings.slice(0, 2).map((finding, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-700 font-bold text-xs mt-1">•</span>
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons: Live Dashboard, GitHub, Case Study */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors"
            >
              <span>Live Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors ml-auto"
        >
          <span>Read full case study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
