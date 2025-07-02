import { SquareChevronRight } from "lucide-react";
import type { Project } from "../../types";
import { headerClasses, sectionClasses } from "../utilities";

const ProjectsCard = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <h2 className={headerClasses}>
        <SquareChevronRight className="w-6 h-6" />
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${sectionClasses} hover:shadow-orange-400/30 hover:border-orange-400/60 group cursor-pointer`}
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-2 font-mono group-hover:text-cyan-200 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 font-mono group-hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-orange-500/20 border border-orange-500/60 rounded-full text-xs font-mono text-orange-300 tech-tag hover:bg-orange-300/30 hover:border-orange-300 hover:text-orange-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              {project.link ? (
                <a
                  href={project.link}
                  className="text-cyan-400 hover:text-cyan-200 font-mono text-sm transition-all duration-300 hover:scale-105 inline-block hover-glow p-1 rounded"
                >
                  View Project →
                </a>
              ) : (
                // An empty div to ensure the date stays on the right even if there's no link
                <div />
              )}

              {/* The date is now part of the normal document flow */}
              <div className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/60 rounded-full text-xs font-mono text-cyan-300 tech-tag hover:bg-cyan-300/30 hover:border-cyan-300 hover:text-cyan-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                {project.started.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProjectsCard;
