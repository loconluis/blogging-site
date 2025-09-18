"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from "react-icons/fi";
import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  featured?: boolean;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        {!imageError && project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
        )}

        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
            <div className="animate-pulse">
              <FiCode className="w-8 h-8 text-neutral-400" />
            </div>
          </div>
        )}

        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
            <FiCode className="w-8 h-8 text-neutral-400" />
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Overlay Links */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-neutral-900/90 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-neutral-900/90 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiExternalLink className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
              {project.title}
            </h3>
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <FiCalendar className="w-4 h-4 mr-1" />
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Overview (only visible on hover or featured) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: "auto" }}
          className="overflow-hidden mb-4"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {project.overview}
          </p>
        </motion.div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--pink)",
                color: "white"
              }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiExternalLink className="w-4 h-4" />
              View Live
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub className="w-4 h-4" />
              Source
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;