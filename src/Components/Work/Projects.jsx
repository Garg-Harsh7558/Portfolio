import React from "react";
import { projects } from "../../constants";
import { ProjectCard } from "../cards/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1.5 bg-[#8245ec] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, side projects, and digital experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

