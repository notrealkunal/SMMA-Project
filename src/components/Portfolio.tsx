import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData, Project } from "../data";
import { Sparkles, ArrowUpRight, TrendingUp } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Reddit & X Marketing", "Community & X Campaigns", "TikTok & Influencers", "SEO & Paid Media"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="portfolio-section" className="py-24 relative overflow-hidden bg-dark-bg/30">
      {/* Background radial highlight */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
              Success Stories
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Proven Campaigns. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue">
                Compound Outcomes.
              </span>
            </h2>
          </div>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm font-light">
            We don't deal in empty metrics like impressions. These are detailed breakdowns of client projects that scaled into market leaders.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2.5 pb-8 mb-12 border-b border-white/5 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? "bg-white text-black shadow-[0_4px_15px_rgba(255,255,255,0.15)] scale-[1.02]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {filter === "All" ? "All Projects" : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-white/15 transition-all duration-300"
              >
                {/* Visual Image Banner Placeholder (Styled gorgeously in CSS gradients instead of risky external files) */}
                <div className={`h-64 sm:h-72 w-full bg-gradient-to-br ${project.imageColor} relative overflow-hidden flex items-center justify-center p-8`}>
                  {/* Dynamic background art circles */}
                  <div className="absolute top-[-20%] right-[-10%] w-60 h-60 rounded-full bg-white/5 blur-xl group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 rounded-full bg-black/30 blur-lg" />
                  
                  {/* Visual Art Representation of the project metrics */}
                  <div className="relative text-center z-10 space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10"
                    >
                      <TrendingUp className="w-5 h-5 text-brand-purple" />
                      <span className="font-display font-bold text-white text-lg tracking-tight">
                        {project.metric}
                      </span>
                    </motion.div>
                    <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                      VERIFIED OUTCOME
                    </p>
                  </div>
                  
                  {/* Subtle noise texture */}
                  <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-purple tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-brand-purple transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white/3 border border-white/5">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                      DELIVERED RESULTS
                    </span>
                    <p className="font-sans text-sm font-medium text-gray-200">
                      {project.results}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-mono text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
