import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
// --- SVG COMPONENTS ---
const StampSVG = () => (_jsxs("svg", { width: "100", height: "100", viewBox: "0 0 100 100", className: "drop-shadow-sm", children: [_jsx("defs", { children: _jsxs("mask", { id: "stampMask", children: [_jsx("rect", { width: "100", height: "100", fill: "white" }), _jsx("g", { transform: "translate(50 50)", children: _jsx("circle", { r: "40", fill: "black" }) })] }) }), _jsx("rect", { width: "90", height: "90", x: "5", y: "5", fill: "#F0EAD6", stroke: "#C9B7A6", strokeWidth: "1" }), _jsx("path", { d: "M25 65 Q50 40 75 65", stroke: "#D9534F", fill: "none", strokeWidth: "2" }), _jsx("path", { d: "M25 70 Q50 45 75 70", stroke: "#D9534F", fill: "none", strokeWidth: "2" }), _jsx("text", { x: "50", y: "35", textAnchor: "middle", fontSize: "12", fill: "#4A4A4A", style: { fontFamily: "'Special Elite', cursive" }, className: "font-bold", children: "U.S. POSTAGE" }), _jsx("text", { x: "50", y: "55", textAnchor: "middle", fontSize: "24", fill: "#4A4A4A", style: { fontFamily: "'Special Elite', cursive" }, className: "font-bold", children: "3\u00A2" })] }));
const PostmarkSVG = ({ location }) => (_jsxs("svg", { width: "120", height: "120", viewBox: "0 0 120 120", className: "absolute top-2 right-16 opacity-70 transform -rotate-12", children: [_jsx("circle", { cx: "60", cy: "60", r: "50", fill: "none", stroke: "#4A4A4A", strokeWidth: "2" }), _jsx("text", { x: "60", y: "40", textAnchor: "middle", fontSize: "14", fill: "#4A4A4A", className: "font-mono uppercase tracking-wider", children: location.split(',')[0] }), _jsx("text", { x: "60", y: "85", textAnchor: "middle", fontSize: "12", fill: "#4A4A4A", className: "font-mono", children: new Date().toLocaleDateString('en-US') })] }));
// --- PAGE COMPONENTS ---
const HomePage = ({ personalInfo, onNavigate }) => (_jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-5xl md:text-6xl font-bold text-[#4A4A4A] tracking-wider", style: { fontFamily: "'Special Elite', cursive" }, children: "Greetings from" }), _jsx("h2", { className: "text-7xl md:text-8xl font-extrabold text-[#D9534F]", style: { fontFamily: "'Lobster', cursive", marginTop: "-0.5rem" }, children: personalInfo.location.split(',')[0] }), _jsx("button", { onClick: onNavigate, className: "mt-8 px-6 py-2 bg-[#D9534F] text-white font-bold rounded-lg shadow-md hover:bg-[#C9302C] transition-colors", children: "View My Resume" })] }));
const ResumePage = ({ personalInfo, title, children }) => (_jsxs("div", { className: "flex flex-col md:flex-row h-full", children: [_jsxs("div", { className: "w-full md:w-2/3 pr-0 md:pr-4 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-400 overflow-y-auto pb-4 md:pb-0", children: [_jsx("h2", { className: "text-2xl font-bold border-b-2 border-gray-400 pb-1 mb-4", style: { fontFamily: "'Special Elite', cursive" }, children: title }), children] }), _jsxs("div", { className: "w-full md:w-1/3 pl-0 md:pl-4 mt-4 md:mt-0 relative", children: [_jsxs("div", { className: "md:text-right", children: [_jsx("h3", { className: "font-bold text-xl", children: personalInfo.name }), _jsx("p", { children: personalInfo.location }), _jsx("a", { href: personalInfo.github, className: "text-blue-600 hover:underline block", children: "GitHub" }), _jsx("a", { href: personalInfo.linkedin, className: "text-blue-600 hover:underline block", children: "LinkedIn" })] }), _jsx("div", { className: "mt-8 flex justify-center md:justify-end", children: _jsxs("div", { className: "relative", children: [_jsx(PostmarkSVG, { location: personalInfo.location }), _jsx(StampSVG, {})] }) })] })] }));
const ExperienceSection = ({ jobs }) => (_jsx("div", { children: jobs.map((job, index) => (_jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "font-bold text-lg", children: job.company }), _jsx("p", { className: "italic", children: job.position }), _jsxs("p", { className: "text-sm text-gray-600", children: [job.location, " | ", new Date(job.startDate).getFullYear(), " - ", job.current ? 'Present' : new Date(job.endDate).getFullYear()] }), _jsx("ul", { className: "list-disc list-inside text-sm mt-1", children: job.descriptionBulletPoints.map((point, i) => _jsx("li", { children: point }, i)) })] }, index))) }));
const EducationSection = ({ education }) => (_jsxs("div", { children: [_jsx("h3", { className: "font-bold text-lg", children: education.university }), _jsxs("p", { className: "italic", children: [education.degree, " ", education.major] }), _jsxs("p", { className: "text-sm text-gray-600", children: [education.location, " | Graduated: ", new Date(education.graduationDate).getFullYear()] }), _jsxs("p", { className: "text-sm", children: ["GPA: ", education.gpa.toFixed(1)] })] }));
const ProjectsSection = ({ projects }) => (_jsx("div", { children: projects.map((project, index) => (_jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "font-bold text-lg", children: project.title }), _jsx("p", { className: "text-sm italic", children: project.description }), _jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-blue-600 hover:underline", children: "View Project" })] }, index))) }));
const SkillsSection = ({ skills }) => (_jsx("div", { className: "flex flex-wrap", children: skills.map((skill, index) => (_jsx("span", { className: "bg-gray-300 text-gray-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full", children: skill.name }, index))) }));
// --- MAIN COMPONENT ---
const PostcardResume = ({ personalInfo }) => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const pages = [
        { id: 'home', component: _jsx(HomePage, { personalInfo: personalInfo, onNavigate: () => setActivePageIndex(1) }) },
        { id: 'experience', component: _jsx(ResumePage, { personalInfo: personalInfo, title: "Work Experience", children: _jsx(ExperienceSection, { jobs: personalInfo.jobs }) }) },
        { id: 'projects', component: _jsx(ResumePage, { personalInfo: personalInfo, title: "Projects", children: _jsx(ProjectsSection, { projects: personalInfo.projects }) }) },
        { id: 'education', component: _jsx(ResumePage, { personalInfo: personalInfo, title: "Education", children: _jsx(EducationSection, { education: personalInfo.education }) }) },
        { id: 'skills', component: _jsx(ResumePage, { personalInfo: personalInfo, title: "Skills", children: _jsx(SkillsSection, { skills: personalInfo.skills }) }) },
    ];
    const goToNext = () => setActivePageIndex(i => (i + 1) % pages.length);
    const goToPrev = () => setActivePageIndex(i => (i - 1 + pages.length) % pages.length);
    return (_jsxs("div", { className: "w-full max-w-4xl mx-auto p-4 h-[650px] md:h-[550px]", children: [_jsx("div", { className: "relative w-full h-full perspective", children: pages.map((page, index) => {
                    const isActive = index === activePageIndex;
                    const isPast = index < activePageIndex;
                    const style = {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease-out',
                    };
                    if (isActive) {
                        style.transform = 'translateY(0) rotate(0deg)';
                        style.opacity = 1;
                        style.zIndex = pages.length;
                    }
                    else if (isPast) {
                        const stackDepth = activePageIndex - index;
                        style.transform = `translateY(${stackDepth * 25}px) rotate(${-stackDepth * 2}deg)`;
                        style.opacity = 1 - (stackDepth * 0.25);
                        style.zIndex = pages.length - stackDepth;
                    }
                    else { // isUpcoming
                        style.transform = 'translateY(-120%) rotate(8deg)';
                        style.opacity = 0;
                        style.zIndex = pages.length + 1;
                    }
                    if (activePageIndex === 0 && index !== 0) {
                        style.opacity = 0;
                        style.transform = 'translateY(-120%) rotate(8deg)';
                    }
                    return (_jsx("div", { style: style, className: "transform-style-3d", children: _jsx("div", { className: "w-full h-full bg-[#FDFCEC] rounded-lg shadow-2xl border-4 border-double border-[#D2B48C] flex items-center justify-center p-6", style: { fontFamily: "'Special Elite', cursive", color: '#4A4A4A' }, children: page.component }) }, page.id));
                }) }), activePageIndex > 0 && (_jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4", style: { zIndex: 999 }, children: [_jsx("button", { onClick: goToPrev, className: "px-4 py-2 bg-[#5A7D9A] text-white font-bold rounded-lg shadow-md hover:bg-[#435F7A] transition-colors", children: "Previous" }), _jsx("button", { onClick: goToNext, className: "px-4 py-2 bg-[#D9534F] text-white font-bold rounded-lg shadow-md hover:bg-[#C9302C] transition-colors", children: activePageIndex === pages.length - 1 ? 'Back to Start' : 'Next' })] })), _jsx("style", { jsx: true, global: true, children: `
                @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Special+Elite&display=swap');
                .perspective {
                    perspective: 1500px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
            ` })] }));
};
export default PostcardResume;
