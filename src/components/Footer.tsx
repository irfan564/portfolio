import React from 'react';
import { profile } from '../data/profile';
import { ArrowUp } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white mt-20 py-10">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 text-sm">
          <div>
            <div className="font-semibold text-slate-900">{profile.name}</div>
            <div className="text-xs text-slate-500 mt-0.5">{profile.role} • {profile.location}</div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-600">
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#certificate" className="hover:text-slate-900 transition-colors">Certificate</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between text-xs text-slate-500">
          <div>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-slate-800 transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
