import React from 'react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import {
  MapPin,
  FileDown,
  ArrowDown,
  Award,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-16 sm:space-y-20">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. HERO SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="space-y-6 pt-4 sm:pt-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{profile.location}, India</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {profile.name} — {profile.role}
          </h1>

          <div className="space-y-1 text-base sm:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed">
            <p>{profile.bioSentences[0]}</p>
            <p>{profile.bioSentences[1]}</p>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href={profile.resumeUrl}
            download="Muhammed_Irfan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-sm"
          >
            <FileDown className="w-4 h-4 text-slate-600" />
            <span>Download Resume</span>
          </a>

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-900" />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. PROJECTS SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projects" className="space-y-6 scroll-mt-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Projects</h2>
          <p className="mt-1 text-sm text-slate-600">
            Selected analytical work using SQL, Power BI, and Python with real problem statements and transparent findings.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. SKILLS SECTION (Grouped Chips Only)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="skills" className="space-y-6 scroll-mt-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Skills</h2>
          <p className="mt-1 text-sm text-slate-600">
            Core analytical tools and technical competencies.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. CERTIFICATE SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="certificate" className="space-y-6 scroll-mt-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Certificate</h2>
          <p className="mt-1 text-sm text-slate-600">
            Government of Kerala undertaking credential in Data Analytics.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Grade: {profile.certificate.grade}
              </span>
              <span className="text-xs font-mono text-slate-500">
                No. {profile.certificate.certificateNo}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              {profile.certificate.title}
            </h3>

            <div className="text-xs text-slate-600 space-y-0.5">
              <p>
                <span className="font-medium text-slate-700">Issued by: </span>
                {profile.certificate.issuer}
              </p>
              <p>
                <span className="font-medium text-slate-700">Conducted by: </span>
                {profile.certificate.conductedBy}
              </p>
              <p>
                <span className="font-medium text-slate-700">Duration: </span>
                {profile.certificate.period} (Issued {profile.certificate.issuedDate})
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={profile.certificate.fileUrl}
              download="Muhammed_Irfan_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 w-full md:w-auto p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-colors"
            >
              <div className="p-2.5 rounded bg-white border border-slate-200 text-blue-700">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                  <span>View Certificate PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] text-slate-500">
                  certificate.pdf
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. EDUCATION SECTION (One Line)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Education</h2>
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-blue-700 shrink-0" />
          <p className="text-sm font-medium text-slate-800">
            {profile.education.degree}, {profile.education.institution}, {profile.education.duration}
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6. CONTACT SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ContactSection />
    </div>
  );
};
