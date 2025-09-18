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
    // Reset selection to first project when filter changes
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
    <div className="min-h-screen p-4 md:p-8 font-mono bg-white dark:bg-black text-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-neutral-50">
            Portfolio
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Selected projects and works ({filteredProjects.length} projects)
          </p>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedTechnology("all")}
              className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${selectedTechnology === "all"
                ? "bg-black text-white"
                : "bg-gray-800 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              All Projects
            </button>
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTechnology(tech)}
                className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${selectedTechnology === tech
                  ? "bg-black text-white"
                  : "bg-gray-800 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Project Navigation - Compact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => handleProjectSelect(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`w-full text-left p-3 transition-all duration-300 ${selectedProject === index
                    ? "bg-black text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={0}
                  aria-selected={selectedProject === index}
                  role="option"
                >
                  <div className="text-xs font-medium leading-tight">
                    {project.title}
                  </div>
                  <div className="text-[10px] opacity-70 mt-1">
                    {project.technologies.slice(0, 2).join(', ')}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {isMounted && currentProject && (
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden bg-gray-800 dark:bg-gray-900 rounded-lg">
                    <img
                      src={currentProject.image || "/api/placeholder/800/600"}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {currentProject.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                          Featured Project
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h2 className="text-2xl md:text-3xl font-light mb-2 md:mb-0">
                        {currentProject.title}
                      </h2>
                      <div className="text-sm text-gray-400 font-mono">
                        {new Date(currentProject.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6">
                      {currentProject.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-sm font-mono text-gray-400 mb-3">TECHNOLOGIES</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-mono rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-mono text-sm hover:bg-gray-200 transition-colors"
                        >
                          VIEW PROJECT →
                        </a>
                      )}
                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-900 text-white font-mono text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          GITHUB →
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