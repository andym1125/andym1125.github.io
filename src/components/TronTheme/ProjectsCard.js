import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Boxes, SquareChevronRight } from "lucide-react";
import { headerClasses, sectionClasses } from "../utilities";
const ProjectsCard = ({ projects }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("h2", { className: headerClasses, children: [_jsx(Boxes, { className: "w-6 h-6" }), "Projects"] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: projects.map((project, index) => (_jsxs("div", { className: `${sectionClasses} hover:shadow-orange-400/30 hover:border-orange-400/60 group cursor-pointer`, children: [_jsx("h3", { className: "text-xl font-bold text-cyan-300 mb-2 font-mono group-hover:text-cyan-200 transition-colors duration-300", children: project.title }), _jsx("p", { className: "text-gray-300 mb-4 font-mono group-hover:text-gray-200 transition-colors duration-300", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.technologies.map((tech, idx) => (_jsx("span", { className: "px-3 py-1 bg-orange-500/20 border border-orange-500/60 rounded-full text-xs font-mono text-orange-300 tech-tag hover:bg-orange-300/30 hover:border-orange-300 hover:text-orange-200 hover:scale-105 transition-all duration-300 cursor-pointer", children: tech }, idx))) }), _jsxs("div", { className: "flex justify-between items-center mt-4", children: [project.link ? (_jsx("a", { href: project.link, target: "_blank", className: "text-cyan-400 hover:text-cyan-200 font-mono text-sm transition-all duration-300 hover:scale-105 inline-block hover-glow p-1 rounded", children: "View Project \u2192" })) : (
                                // An empty div to ensure the date stays on the right even if there's no link
                                _jsx("div", {})), _jsx("div", { className: "px-3 py-1 bg-cyan-400/20 border border-cyan-400/60 rounded-full text-xs font-mono text-cyan-300 tech-tag hover:bg-cyan-300/30 hover:border-cyan-300 hover:text-cyan-200 hover:scale-105 transition-all duration-300 cursor-pointer", children: project.started.toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    }) })] })] }, index))) })] }));
};
export default ProjectsCard;
