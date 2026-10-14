import { Link } from 'react-router-dom';
import {
  Search,
  BarChart3,
  MessageSquareCode,
  ArrowRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { EducationCard } from '../components/EducationCard';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          badge="About Muhammed Irfam M A"
          title="Curiosity Meets Data."
          description="A data analytics graduate passionate about uncovering trends, ensuring data quality, and structuring insights that empower teams."
          align="center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Split Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Context & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="font-display font-bold text-2xl text-white">
                My Perspective on Data Analytics
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {profile.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  What Drives My Approach:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Data hygiene and defensive schema validation before calculations.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Clear SQL CTE structures over confusing, nested black-box queries.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Executive dashboards that answer 'what now?' rather than just 'what happened?'.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Open, honest technical communication without buzzwords or fake metrics.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Facts & Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 text-xl font-bold font-display text-cyan-300">
                  {profile.monogram}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">{profile.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">{profile.subTitle}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profile.location}</span>
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.availabilityStatus}</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-slate-300">
                  <span className="text-slate-400">Core Specialty:</span>
                  <span className="text-white font-medium">Relational SQL & BI</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-slate-300">
                  <span className="text-slate-400">Primary Database:</span>
                  <span className="text-cyan-300 font-medium">PostgreSQL</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-slate-300">
                  <span className="text-slate-400">Visualization Suite:</span>
                  <span className="text-sky-300 font-medium">Power BI, Seaborn, Excel</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-slate-300">
                  <span className="text-slate-400">Analytics Scripting:</span>
                  <span className="text-indigo-300 font-medium">Python (Pandas, NumPy)</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <Link
                  to="/projects"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-500/40 transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Focus Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Methodological Pillars
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              How I Approach Every Dataset
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.focusAreas.map((area, idx) => (
              <div
                key={area.title}
                className="p-6 rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] hover:border-cyan-500/30 transition-all shadow-xl space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400 inline-block">
                  {idx === 0 && <Search className="w-5 h-5" />}
                  {idx === 1 && <BarChart3 className="w-5 h-5 text-sky-400" />}
                  {idx === 2 && <MessageSquareCode className="w-5 h-5 text-indigo-400" />}
                </div>
                <h4 className="font-display font-bold text-lg text-white">{area.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Learning Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Credentials
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Education & Academic Learning
            </h3>
          </div>

          <EducationCard />
        </div>
      </div>
    </div>
  );
};
