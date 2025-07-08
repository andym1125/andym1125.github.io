import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, MapPin, Code, Briefcase, GraduationCap, Binary, } from "lucide-react";
import TronBackground from "./TronBackground";
import TronWorkExperiencesCard from "./TronWorkExperiencesCard";
import VolunteerExperiences from "./VolunteerExperiences";
import { sectionClasses, headerClasses } from "../utilities";
import ProjectsCard from "./ProjectsCard";
import EducationCard from "./EducationCard";
import AwardsCard from "./AwardsCard";
import SidebarLayout from "./SidebarLayout";
const TronResume = ({ personalInfo, }) => {
    const [activeSection, setActiveSection] = useState("about");
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden", children: [_jsx(TronBackground, {}), _jsx("style", { children: `
        @keyframes lightbike-horizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        @keyframes lightbike-horizontal-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100vw);
          }
        }
        @keyframes lightbike-vertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.8),
              0 0 40px rgba(0, 255, 255, 0.6);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.5),
              0 0 10px rgba(0, 255, 255, 0.3), 0 0 15px rgba(0, 255, 255, 0.2);
            filter: brightness(1);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
              0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
            filter: brightness(1.2);
          }
        }
        @keyframes tech-scan {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
        .hover-glow:hover {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        .tech-tag:hover {
          position: relative;
          overflow: hidden;
        }
        .tech-tag:hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 255, 0.3),
            transparent
          );
          animation: tech-scan 2s ease-in-out infinite;
        }
      ` }), _jsxs("div", { className: "relative z-10 container mx-auto px-4 py-8", children: [_jsxs("div", { className: `${sectionClasses} text-center transform transition-all duration-1000 hover:shadow-cyan-300/40 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`, children: [_jsx("h1", { className: "text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 font-mono glow-animation hover:from-cyan-200 hover:to-blue-300 transition-all duration-300", children: personalInfo.name }), _jsxs("div", { className: "flex justify-center items-center gap-6 text-cyan-300 font-mono", children: [_jsxs("div", { className: "flex items-center gap-2 hover:text-cyan-200 hover:scale-110 transition-all duration-300 cursor-pointer hover-glow p-2 rounded", children: [_jsx(MapPin, { className: "w-4 h-4" }), _jsx("span", { children: personalInfo.location })] }), _jsxs("a", { href: personalInfo.github, target: "_blank", className: "flex items-center gap-2 hover:text-cyan-200 transition-all duration-300 hover:scale-110 hover-glow p-2 rounded group", children: [_jsx(Github, { className: "w-4 h-4 group-hover:rotate-12 transition-transform duration-300" }), _jsx("span", { children: "GitHub" })] }), _jsxs("a", { href: personalInfo.linkedin, target: "_blank", className: "flex items-center gap-2 hover:text-cyan-200 transition-all duration-300 hover:scale-110 hover-glow p-2 rounded group", children: [_jsx(Linkedin, { className: "w-4 h-4 group-hover:rotate-12 transition-transform duration-300" }), _jsx("span", { children: "LinkedIn" })] })] })] }), _jsx("div", { className: "flex justify-center mb-8", children: _jsx("div", { className: "bg-black/90 backdrop-blur-sm border border-cyan-500/50 rounded-full p-2 flex gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-300", children: [
                                { id: "about", label: "About", icon: Code },
                                { id: "work", label: "Job Experience", icon: Binary },
                                {
                                    id: "volunteer",
                                    label: "Volunteer/Board Experience",
                                    icon: GraduationCap,
                                },
                            ].map(({ id, label, icon: Icon }) => (_jsxs("button", { onClick: () => setActiveSection(id), className: `px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 group ${activeSection === id
                                    ? "bg-cyan-400 text-white-300 shadow-lg shadow-cyan-400/50 hover:bg-cyan-300"
                                    : "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-400/20 hover:shadow-cyan-400/30"}`, children: [_jsx(Icon, { className: "w-4 h-4 group-hover:rotate-12 transition-transform duration-300" }), label] }, id))) }) }), activeSection == "about" && (_jsx(_Fragment, { children: _jsxs(_Fragment, { children: [_jsxs("div", { className: sectionClasses, children: [_jsxs("h2", { className: headerClasses, children: [_jsx(Code, { className: "w-6 h-6" }), "Digital Profile"] }), _jsx("p", { className: "text-gray-200 leading-relaxed font-mono text-lg group-hover:text-gray-100 transition-colors duration-300", children: personalInfo.about })] }), _jsx(ProjectsCard, { projects: personalInfo.projects })] }) })), activeSection == "work" && (_jsx(_Fragment, { children: _jsxs(SidebarLayout, { children: [_jsx(TronWorkExperiencesCard, { jobs: personalInfo.jobs }), _jsx(EducationCard, { education: personalInfo.education })] }) })), activeSection == "volunteer" && (_jsx(_Fragment, { children: _jsxs(SidebarLayout, { children: [_jsx(VolunteerExperiences, { volunteer: personalInfo.volunteer }), personalInfo.awards.length > 0 && (_jsx(AwardsCard, { awards: personalInfo.awards }))] }) }))] })] }));
};
export default TronResume;
