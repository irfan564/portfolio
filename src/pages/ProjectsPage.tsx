import React, { useState } from 'react';
import { projects } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { Search } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    'All',
    'Python',
    'SQL',
    'Power BI',
    'Data Analysis',
    'Business Intelligence'
  ];

  const filteredProjects = projects.filter((project) => {
    // Category match
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.includes(selectedCategory as any);

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(q)) ||
      project.analyticalTechniques.some((tech) => tech.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          badge="Project Portfolio"
          title="Selected Work & Case Studies"
          description="Explore real datasets, relational SQL schemas, analytical Python notebooks, and executive business dashboards."
          align="center"
        />

        {/* Filter Bar & Search */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#090E1A]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-mono">
            {filterCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all duration-200 border ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'bg-slate-900/60 text-slate-400 border-white/[0.06] hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tool, technique, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Project Results Count */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-slate-400">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          {selectedCategory !== 'All' && (
            <span className="text-cyan-400">Filtered by: {selectedCategory}</span>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-white/[0.06] space-y-3">
            <p className="text-slate-300 font-medium">No projects match the current filter or search criteria.</p>
            <p className="text-xs font-mono text-slate-500">Try selecting "All" or clearing the search bar.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
