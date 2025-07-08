import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
const StyleInjector = () => (_jsx("style", { children: `
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Special+Elite&display=swap');

    /* Define classes for custom fonts */
    .font-display { font-family: 'Creepster', cursive; }
    .font-body { font-family: 'Special Elite', cursive; }

    /* Keyframe Animations */
    @keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } 52% { opacity: 1; } 60% { opacity: 0.5; } 62% { opacity: 1; } }
    @keyframes pulse {
      0%, 100% { transform: scale(1); text-shadow: 3px 3px 0 #000, 5px 5px 10px rgba(0,0,0,0.8); }
      50% { transform: scale(1.02); text-shadow: 3px 3px 5px #ff0000, 5px 5px 15px rgba(255,0,0,0.5); }
    }
    @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); } }

    /* Animation Utility Classes */
    .animate-flicker { animation: flicker 3s infinite steps(1); }
    .animate-pulse-slow { animation: pulse 4s infinite ease-in-out; }
    .hover-shake:hover { animation: shake 0.5s; animation-iteration-count: infinite; }
    
    /* Readability & Aesthetic Utility Classes */
    .text-pop { text-shadow: 1px 1px 4px rgba(0, 0, 0, 1); }
    .bg-film-grain {
      position: relative;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      background-size: 100px 100px;
      background-repeat: repeat;
      opacity: 0.95;
      overflow: hidden; /* Important for containing pseudo-elements */
    }

    /* Blood Splatter Pseudo-Elements */
    .bg-film-grain::before, .bg-film-grain::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      background-repeat: no-repeat;
      z-index: 0;
      opacity: 0.5;
    }
    .bg-film-grain::before {
      top: -40px;
      right: -50px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M75,0 C50,10 60,30 50,40 C40,50 45,65 25,70 C5,75 10,90 0,100 L20,100 C30,90 25,80 40,70 C55,60 50,50 60,40 C70,30 80,15 100,0 Z' fill='%238B0000'/%3E%3C/svg%3E");
      transform: rotate(45deg);
    }
    .bg-film-grain::after {
      bottom: -60px;
      left: -50px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M25,0 C50,10 40,30 50,40 C60,50 55,65 75,70 C95,75 90,90 100,100 L80,100 C70,90 75,80 60,70 C45,60 50,50 40,40 C30,30 20,15 0,0 Z' fill='%238B0000'/%3E%3C/svg%3E");
      transform: rotate(-120deg);
    }
  ` }));
// --- HELPER COMPONENTS --- //
const formatDate = (date) => new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
const Section = ({ title, children }) => (_jsxs("section", { className: "mb-10 relative z-10", children: [_jsx("h2", { className: "font-display text-6xl text-red-600 text-center tracking-wider mb-6 [text-shadow:2px_2px_0_#000] text-pop hover-shake cursor-pointer", children: title }), _jsx("div", { className: "border-l-2 border-red-600 pl-6", children: children })] }));
const ExperienceItem = ({ experience }) => (_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "mb-2", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-100", children: experience.position }), _jsx("p", { className: "text-xl text-red-600 text-pop", children: experience.company })] }), _jsxs("div", { className: "text-gray-400 mb-3", children: [formatDate(experience.startDate), " - ", experience.current ? 'PRESENT' : formatDate(experience.endDate), _jsx("span", { className: "mx-2 text-gray-600", children: "|" }), experience.location] }), _jsx("ul", { className: "list-none pl-0 mt-2", children: experience.descriptionBulletPoints.map((point, i) => (_jsxs("li", { className: "flex items-start mb-2", children: [_jsx("span", { className: "text-red-600 text-xl leading-tight mr-3 text-pop", children: "\u2020" }), _jsx("span", { children: point })] }, i))) }), experience.technologies.length > 0 && (_jsxs("p", { className: "mt-4 text-gray-400 text-sm", children: [_jsx("span", { className: "text-red-600 font-bold text-pop", children: "Featuring:" }), " ", experience.technologies.join(' • ')] }))] }));
const SkillBar = ({ skill }) => (_jsxs("div", { children: [_jsx("p", { className: "mb-2 text-lg", children: skill.name }), _jsx("div", { className: "w-full h-4 bg-gray-700 border border-red-600 p-0.5", children: _jsx("div", { className: "h-full bg-red-600 shadow-md shadow-red-600 animate-flicker", style: { width: `${skill.level * 100}%` } }) })] }));
const HorrorPosterResume = ({ personalInfo }) => {
    if (!personalInfo) {
        return (_jsxs(_Fragment, { children: [_jsx(StyleInjector, {}), _jsx("div", { className: "font-body bg-gray-900 text-gray-100 p-8 min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "font-display text-6xl text-red-600 text-pop", children: "Awaiting Transmission..." }), _jsx("p", { className: "mt-4 text-xl", children: "The signal from the beyond has not yet arrived." })] }) })] }));
    }
    const { name, location, github, linkedin, jobs, skills, projects, education } = personalInfo;
    return (_jsxs(_Fragment, { children: [_jsx(StyleInjector, {}), _jsxs("div", { className: "font-body bg-gray-900 text-gray-100 p-4 sm:p-8 max-w-4xl mx-auto border-4 border-red-600 shadow-lg shadow-red-600/50 bg-film-grain", children: [_jsxs("header", { className: "text-center border-b-2 border-dashed border-red-600 pb-8 mb-8 relative z-10", children: [_jsx("p", { className: "text-lg tracking-wider text-red-600 text-pop", children: "A Film By" }), _jsx("h1", { className: "font-display text-7xl sm:text-8xl text-red-600 my-[-1rem] tracking-widest animate-pulse-slow", children: name }), _jsx("p", { className: "text-2xl tracking-wider mt-2", children: "A TALE OF CODE AND CHAOS" })] }), _jsxs("main", { className: "relative z-10", children: [jobs?.length > 0 && (_jsx(Section, { title: "Based on a True Story", children: jobs.map((job, index) => _jsx(ExperienceItem, { experience: job }, index)) })), skills?.length > 0 && (_jsx(Section, { title: "Survival Skills", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: skills.map((skill, index) => _jsx(SkillBar, { skill: skill }, index)) }) })), projects?.length > 0 && (_jsx(Section, { title: "Special Features", children: projects.map((project, index) => (_jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-100", children: project.title }), _jsx("p", { className: "mt-2 text-gray-300", children: project.description }), _jsxs("p", { className: "mt-4 text-gray-400 text-sm", children: [_jsx("span", { className: "text-red-600 font-bold text-pop", children: "Built With:" }), " ", project.technologies.join(' • ')] }), project.link && (_jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "inline-block mt-4 px-4 py-2 bg-red-600 text-gray-900 font-bold no-underline border-2 border-red-600 transition-all duration-300 hover:bg-gray-900 hover:text-red-600", children: "Witness The Horror" }))] }, index))) })), education && (_jsx(Section, { title: "The Origin", children: _jsxs("div", { className: "mb-8", children: [_jsxs("h3", { className: "text-2xl font-bold text-gray-100", children: [education.degree, " in ", education.major] }), _jsx("p", { className: "text-xl text-red-600 text-pop", children: education.university }), _jsxs("div", { className: "text-gray-400 my-3", children: ["Graduated: ", formatDate(education.graduationDate), _jsx("span", { className: "mx-2 text-gray-600", children: "|" }), education.location] }), education.minor && _jsxs("p", { className: "text-gray-300", children: ["Minor in ", education.minor] }), education.certificate && _jsxs("p", { className: "text-gray-300", children: ["Certificate in ", education.certificate] })] }) }))] }), _jsxs("footer", { className: "mt-12 pt-6 border-t-2 border-dashed border-red-600 text-center font-sans font-bold text-xs uppercase leading-relaxed relative z-10", children: [_jsxs("div", { className: "credit-block", children: [_jsxs("p", { children: [_jsx("span", { className: "text-red-600 mr-4 text-pop", children: "Location" }), " ", location] }), _jsxs("p", { children: [_jsx("span", { className: "text-red-600 mr-4 text-pop", children: "G I T H U B" }), _jsx("a", { href: github, target: "_blank", rel: "noopener noreferrer", className: "text-gray-100 no-underline transition-colors hover:text-red-600", children: github.replace('https://github.com/', '') })] }), _jsxs("p", { children: [_jsx("span", { className: "text-red-600 mr-4 text-pop", children: "L I N K E D I N" }), _jsx("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", className: "text-gray-100 no-underline transition-colors hover:text-red-600", children: linkedin.replace('https://www.linkedin.com/in/', '') })] })] }), _jsx("p", { className: "mt-8 text-lg text-red-600 tracking-wider text-pop", children: "Rated D for Developer" })] })] })] }));
};
export default HorrorPosterResume;
