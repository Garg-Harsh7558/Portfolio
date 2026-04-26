import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-[#ffffff05] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#8245ec]/50 transition-all duration-500 hover:-translate-y-2 h-full ">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050414] to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-[#8245ec15] text-[#8245ec] border border-[#8245ec20] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8245ec] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-4 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-white hover:bg-[#8245ec] hover:scale-110 transition-all duration-300"
              title="View Source Code"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-white hover:bg-[#8245ec] hover:scale-110 transition-all duration-300"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8245ec]/20 rounded-2xl pointer-events-none transition-all duration-500"></div>
    </div>
  );
};