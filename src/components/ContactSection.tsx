import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="space-y-6 pt-4 scroll-mt-20">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Contact</h2>
        <p className="mt-1 text-sm text-slate-600">
          I am actively looking for Data Analyst opportunities. Reach out directly via email, phone, or LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5 text-slate-800">
              <Mail className="w-4 h-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </span>
            </div>
            <button
              onClick={() => handleCopy(profile.contact.email, 'email')}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              title="Copy email to clipboard"
            >
              {copiedItem === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-sm font-medium text-slate-900 hover:text-blue-700 transition-colors break-all"
            >
              {profile.contact.email}
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5 text-slate-800">
              <Phone className="w-4 h-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Phone
              </span>
            </div>
            <button
              onClick={() => handleCopy(profile.contact.phone, 'phone')}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              title="Copy phone to clipboard"
            >
              {copiedItem === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div>
            <a
              href={`tel:${profile.contact.phone}`}
              className="text-sm font-medium text-slate-900 hover:text-blue-700 transition-colors"
            >
              {profile.contact.phone}
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-slate-800">
              <LinkedinIcon className="w-4 h-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                LinkedIn
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-900 hover:text-blue-700 transition-colors break-all"
            >
              linkedin.com/in/muhammed-irfan-911208251
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-slate-800">
              <GithubIcon className="w-4 h-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                GitHub
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-900 hover:text-blue-700 transition-colors"
            >
              github.com/irfan564
            </a>
          </div>
        </div>
      </div>

      {/* Location footnote */}
      <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
        <MapPin className="w-3.5 h-3.5 text-slate-400" />
        <span>Based in {profile.location}, India</span>
      </div>
    </section>
  );
};
