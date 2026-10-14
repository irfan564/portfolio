import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  Database,
  BarChart2,
  FileSpreadsheet,
  Terminal,
  Search,
  MessageSquareCode
} from 'lucide-react';
import { profile } from '../data/profile';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { InteractiveDataCanvas } from '../components/InteractiveDataCanvas';
import { SkillCard } from '../components/SkillCard';
import { ProjectCard } from '../components/ProjectCard';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { EducationCard } from '../components/EducationCard';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  const headlineWords = "Turning Raw Data Into Meaningful Decisions.".split(" ");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Subtle radial tech ambient backdrop */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Availability & Intro Tag */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>DATA ANALYST • BUSINESS INTELLIGENCE</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{profile.availabilityStatus}</span>
                </div>
              </div>

              {/* Main Headline with Staggered Word Reveal */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                {headlineWords.map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block mr-2.5 transition-all duration-300 hover:text-cyan-300"
                    style={{
                      animationDelay: `${idx * 0.08}s`
                    }}
                  >
                    {word === 'Decisions.' ? (
                      <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                {profile.heroSupportingText}
              </p>

              {/* Technical Stack Quick Ribbon */}
              <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
                <span className="text-slate-500 text-[11px] uppercase tracking-wider mr-1">Toolkit:</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.08] text-slate-300 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-cyan-400" /> Python
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.08] text-slate-300 flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-sky-400" /> SQL & PostgreSQL
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.08] text-slate-300 flex items-center gap-1.5">
                  <BarChart2 className="w-3 h-3 text-indigo-400" /> Power BI
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.08] text-slate-300 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3 h-3 text-emerald-400" /> Excel
                </span>
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('featured-projects')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Let's Connect</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Abstract Interactive Data Visualization */}
            <div className="lg:col-span-5">
              <InteractiveDataCanvas />
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="pt-16 lg:pt-20 flex justify-center">
            <button
              onClick={() => scrollToSection('about-section')}
              className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
              aria-label="Scroll to About Me section"
            >
              <span>DISCOVER INSIGHTS</span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-300" />
            </button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT ME SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about-section" className="py-24 border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About Me"
            title={profile.aboutHeading}
            description="Turning raw analytical curiosity into structured datasets and dependable business narratives."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                {profile.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Based In</span>
                  <span className="text-sm font-semibold text-white">{profile.location}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Education</span>
                  <span className="text-sm font-semibold text-white">BCA • SkillSpark</span>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Read Full Bio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Focus Areas Column */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              {profile.focusAreas.map((area, idx) => (
                <div
                  key={area.title}
                  className="p-6 rounded-2xl bg-[#090E1A]/85 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 hover:translate-x-1 shadow-lg"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400">
                      {idx === 0 && <Search className="w-5 h-5" />}
                      {idx === 1 && <BarChart2 className="w-5 h-5 text-sky-400" />}
                      {idx === 2 && <MessageSquareCode className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-12">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TECHNICAL SKILLS SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="skills-section" className="py-24 border-t border-white/[0.08] bg-[#050811]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical Toolkit"
            title="My Analytical Toolkit."
            description="Practical technologies and analytical methodologies used to prepare, validate, query, and visualize business data."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category) => (
              <SkillCard key={category.id} categoryGroup={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INTERACTIVE ANALYTICS SHOWCASE
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="showcase-section" className="py-24 border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Interactive Showcase"
            title="Data, Made Visible."
            description="An interactive business intelligence simulation demonstrating metric definitions, dimensional aggregations, and responsive dashboard design."
          />

          <AnalyticsDashboard />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED PROJECTS SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="featured-projects" className="py-24 border-t border-white/[0.08] bg-[#050811]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Featured Projects"
            title="Selected Work."
            description="Real datasets. Analytical thinking. Meaningful insights."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredMode={true} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all hover:scale-105"
            >
              <span>Explore All Projects & Filterable Gallery</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MY ANALYTICAL APPROACH
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Analytical Process"
            title="From Questions to Insights."
            description="A systematic four-phase framework transforming raw business ambiguity into validated decisions."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          EDUCATION & LEARNING
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 border-t border-white/[0.08] bg-[#050811]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Academic Credentials"
            title="Education & Learning."
            description="Foundational computing degree and specialized professional data analytics finishing curriculum."
          />

          <EducationCard />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTACT SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact-section" className="py-24 border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get In Touch"
            title="Have a Question Worth Exploring?"
            description="I'm interested in opportunities where analytical thinking, data, and technology come together to solve meaningful problems."
          />

          <ContactSection />
        </div>
      </section>
    </div>
  );
};
