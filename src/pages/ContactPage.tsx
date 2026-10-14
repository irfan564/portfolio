import { SectionHeading } from '../components/SectionHeading';
import { ContactSection } from '../components/ContactSection';
import { MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen relative overflow-hidden">
      {/* Subtle background ambient data points */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <SectionHeading
          badge="Direct Channel"
          title="Have a Question Worth Exploring?"
          description="I'm interested in opportunities where analytical thinking, data, and technology come together to solve meaningful problems."
          align="center"
        />

        {/* Contact Module */}
        <ContactSection />

        {/* Recruiter Quick Information Cards */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Recruiter Quick Reference
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Candidate Availability & Preferences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400 inline-block">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Target Roles</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Data Analyst, Junior Data Analyst, Business Intelligence Analyst, SQL / Reporting Analyst, and Analytics Associate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-emerald-400 inline-block">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Location & Work Mode</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Based in Ernakulam, Kerala, India. Open to on-site, hybrid, or remote opportunities globally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-indigo-400 inline-block">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Immediate Readiness</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Available to start immediately upon selection, equipped with verified foundational skills and real analytical project workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
