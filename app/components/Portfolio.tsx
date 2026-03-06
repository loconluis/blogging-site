"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { sampleProjects, getAllTechnologies, filterProjectsByTechnology } from "@/lib/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const filtered = filterProjectsByTechnology(sampleProjects, selectedTechnology);
    setFilteredProjects(filtered);
    if (filtered.length > 0 && !filtered.some(p => p.id === sampleProjects[selectedProject]?.id)) {
      setSelectedProject(0);
    }
  }, [selectedTechnology]);

  const technologies = getAllTechnologies(sampleProjects);

  const handleProjectSelect = (index: number) => {
    setSelectedProject(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleProjectSelect(index);
    }
  };

  const currentProject = filteredProjects[selectedProject];

  return (
    <div className="min-h-screen p-6 md:p-8 font-body bg-[#faf8f5] dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-[#f0ede8]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#1d4ed8] dark:text-[#60a5fa]">
            Selected Work
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-[#1a1a1a] dark:text-[#f0ede8] mt-3 italic">
            Portfolio
          </h1>
          <p className="text-[#6b6b6b] dark:text-[#666] mt-3 text-sm md:text-base">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} showcasing my work
          </p>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedTechnology("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedTechnology === "all"
                  ? "bg-[#1a1a1a] dark:bg-[#f0ede8] text-[#faf8f5] dark:text-[#0f0f0f]"
                  : "border border-[#e8e4df] dark:border-[#2a2a2a] text-[#6b6b6b] dark:text-[#888] hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
              }`}
            >
              All Projects
            </button>
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTechnology(tech)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedTechnology === tech
                    ? "bg-[#1a1a1a] dark:bg-[#f0ede8] text-[#faf8f5] dark:text-[#0f0f0f]"
                    : "border border-[#e8e4df] dark:border-[#2a2a2a] text-[#6b6b6b] dark:text-[#888] hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          {/* Project Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="space-y-1 max-h-[600px] overflow-y-auto pr-2">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => handleProjectSelect(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`w-full text-left p-4 transition-all duration-300 rounded-xl ${
                    selectedProject === index
                      ? "bg-[#1a1a1a] dark:bg-[#f0ede8] text-[#faf8f5] dark:text-[#0f0f0f]"
                      : "text-[#4a4a4a] dark:text-[#888] hover:bg-[#f5f2ed] dark:hover:bg-[#1a1a1a]"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={0}
                  aria-selected={selectedProject === index}
                  role="option"
                >
                  <div className="text-sm font-medium leading-tight">
                    {project.title}
                  </div>
                  <div className={`text-xs mt-1.5 ${selectedProject === index ? 'opacity-70' : 'opacity-50'}`}>
                    {project.technologies.slice(0, 2).join(' + ')}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {isMounted && currentProject && (
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-64 md:h-80 lg:h-[450px] overflow-hidden bg-[#f5f2ed] dark:bg-[#1a1a1a] rounded-2xl">
                    <img
                      src={currentProject.image || "/api/placeholder/800/600"}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/40 via-transparent to-transparent" />
                    {currentProject.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-medium bg-[#1d4ed8] text-white rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <h2 className="font-display text-2xl md:text-3xl text-[#1a1a1a] dark:text-[#f0ede8] italic">
                        {currentProject.title}
                      </h2>
                      <div className="text-sm text-[#888] dark:text-[#666] font-medium">
                        {new Date(currentProject.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </div>
                    </div>

                    <p className="text-[#4a4a4a] dark:text-[#a0a0a0] leading-relaxed mb-6 max-w-2xl">
                      {currentProject.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#888] dark:text-[#666] mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-[#f5f2ed] dark:bg-[#1a1a1a] text-[#4a4a4a] dark:text-[#a0a0a0] text-xs font-medium rounded-full border border-[#e8e4df] dark:border-[#2a2a2a]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] dark:bg-[#f0ede8] text-[#faf8f5] dark:text-[#0f0f0f] text-sm font-medium rounded-full hover:bg-[#1d4ed8] dark:hover:bg-[#1d4ed8] dark:hover:text-white transition-all duration-300"
                        >
                          View Project
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e8e4df] dark:border-[#2a2a2a] text-[#4a4a4a] dark:text-[#a0a0a0] text-sm font-medium rounded-full hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa] transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Source Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;