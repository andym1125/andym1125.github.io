import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Briefcase, Edit3, Award as AwardIcon, Star, University, Github, Linkedin, MapPin } from 'lucide-react';
// --- Google Fonts Import ---
// This should ideally be in your main index.html for best performance
const WebFontLoader = () => {
    React.useEffect(() => {
        const webFontScript = document.createElement('script');
        webFontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        webFontScript.async = true;
        document.head.appendChild(webFontScript);
        // FIX: Added 'Xanh Mono' for a messier typewriter look.
        webFontScript.onload = () => {
            window.WebFont.load({
                google: {
                    families: ['Special Elite', 'IM Fell English SC', 'Old Standard TT', 'Xanh Mono']
                }
            });
        };
    }, []);
    return null;
};
// --- Themed Helper Components ---
const Section = ({ title, children, className }) => (_jsxs("div", { className: `border-2 border-neutral-700 bg-black/50 shadow-[0_0_15px_rgba(0,0,0,0.7)] ${className}`, children: [_jsx("h2", { className: "text-2xl text-neutral-200 p-3 border-b-2 border-neutral-700 font-special-elite tracking-wider", children: title }), _jsx("div", { className: "p-4", children: children })] }));
const CaseFileCard = ({ item }) => (_jsxs("div", { className: "mb-6 p-4 border border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800/60 transition-colors duration-300 font-xanh-mono", children: [_jsx("h3", { className: "text-xl font-im-fell text-neutral-100", children: 'company' in item ? item.company : item.title }), 'position' in item && _jsx("p", { className: "text-lg text-neutral-400", children: item.position }), 'startDate' in item && (_jsxs("p", { className: "text-sm text-neutral-500 my-1 font-special-elite", children: [item.startDate.getFullYear(), " - ", item.current ? 'Present' : item.endDate.getFullYear()] })), _jsx("div", { className: "my-3 text-neutral-300 space-y-2 text-justify", children: 'descriptionBulletPoints' in item ? item.descriptionBulletPoints.map((point, i) => _jsxs("p", { children: ["- ", point] }, i)) : _jsx("p", { children: item.description }) }), 'technologies' in item && item.technologies && (_jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: item.technologies.map(tech => (_jsx("span", { className: "bg-neutral-700/50 text-neutral-300 text-xs px-2 py-1 rounded-sm border border-neutral-600 font-special-elite", children: tech }, tech))) }))] }));
const SkillBar = ({ skill }) => (_jsxs("div", { className: "mb-4 font-xanh-mono", children: [_jsx("div", { className: "flex justify-between mb-1", children: _jsx("span", { className: "text-base text-neutral-300", children: skill.name }) }), _jsx("div", { className: "w-full bg-neutral-800 border border-neutral-700 h-3", children: _jsx("div", { className: "bg-neutral-200 h-full", style: { width: `${skill.level * 100}%` } }) })] }));
// --- Main Component ---
const NoirResume = ({ personalInfo }) => {
    const [isSweeping, setIsSweeping] = useState(false);
    const [sweepDirection, setSweepDirection] = useState('ltr');
    useEffect(() => {
        const sweepDuration = 6000;
        const scheduleNextSweep = () => {
            const randomInterval = Math.random() * (20000 - 8000) + 8000;
            const timeoutId = setTimeout(() => {
                setSweepDirection(Math.random() < 0.5 ? 'ltr' : 'rtl');
                setIsSweeping(true);
                const sweepEndTimeoutId = setTimeout(() => {
                    setIsSweeping(false);
                    scheduleNextSweep();
                }, sweepDuration);
                return () => clearTimeout(sweepEndTimeoutId);
            }, randomInterval);
            return () => clearTimeout(timeoutId);
        };
        scheduleNextSweep();
    }, []);
    const animationStyles = `
        @keyframes sweep-ltr {
          from { transform: translateX(-250%) skewX(-30deg); opacity: 0.8; }
          to { transform: translateX(250%) skewX(-30deg); opacity: 0.8; }
        }
        @keyframes sweep-rtl {
          from { transform: translateX(250%) skewX(-30deg); opacity: 0.8; }
          to { transform: translateX(-250%) skewX(-30deg); opacity: 0.8; }
        }
        .animate-sweep-ltr {
          animation: sweep-ltr 6s ease-in-out;
        }
        .animate-sweep-rtl {
          animation: sweep-rtl 6s ease-in-out;
        }
    `;
    const animationClass = isSweeping ? `animate-sweep-${sweepDirection}` : 'opacity-0';
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: animationStyles }), _jsx(WebFontLoader, {}), _jsxs("div", { className: "min-h-screen bg-black text-neutral-300 font-serif relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-repeat bg-center", style: { backgroundImage: "url('https://www.transparenttextures.com/patterns/crissxcross.png')", opacity: 0.05 } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" }), _jsx("div", { className: "absolute inset-0 z-10 pointer-events-none overflow-hidden", children: _jsx("div", { className: `absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-neutral-100/40 to-transparent ${animationClass}`, style: {
                                maskImage: 'linear-gradient(to bottom, transparent 0, transparent 10px, black 10px, black 25px)',
                                maskSize: '100% 25px',
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, transparent 10px, black 10px, black 25px)',
                                WebkitMaskSize: '100% 25px',
                            } }) }), _jsxs("main", { className: "container mx-auto p-4 sm:p-8 relative z-20", children: [_jsxs("header", { className: "text-center mb-12 p-6 border-y-4 border-neutral-600 bg-black/60 backdrop-blur-sm", children: [_jsx("h1", { className: "text-5xl md:text-6xl text-neutral-100 font-im-fell tracking-widest", style: { textShadow: '2px 2px 4px rgba(255,255,255,0.1)' }, children: personalInfo.name }), _jsx("p", { className: "text-neutral-400 mt-2 font-special-elite text-lg tracking-wider", children: personalInfo.location })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 space-y-8", children: [_jsx(Section, { title: "CASE HISTORY", children: personalInfo.jobs.map((job, i) => _jsx(CaseFileCard, { item: job }, `job-${i}`)) }), _jsx(Section, { title: "SIDE JOBS", children: personalInfo.projects.map((proj, i) => _jsx(CaseFileCard, { item: proj }, `proj-${i}`)) })] }), _jsxs("div", { className: "space-y-8", children: [_jsx(Section, { title: "THE TOOLKIT", children: personalInfo.skills.map((skill, i) => _jsx(SkillBar, { skill: skill }, `skill-${i}`)) }), _jsx(Section, { title: "ACCOLADES", children: personalInfo.awards.map((award, i) => (_jsxs("div", { className: "mb-4 font-xanh-mono", children: [_jsx("p", { className: "font-bold text-neutral-200 text-lg", children: award.title }), _jsxs("p", { className: "text-neutral-400", children: [award.organization, " - ", award.date.toString()] })] }, i))) }), _jsx(Section, { title: "EDUCATION", children: _jsxs("div", { className: "font-xanh-mono", children: [_jsx("p", { className: "font-bold text-neutral-200 text-lg", children: personalInfo.education.university }), _jsx("p", { className: "text-neutral-400", children: personalInfo.education.major })] }) })] })] })] })] })] }));
};
// Add a new style rule to apply the messier font
const styles = document.createElement('style');
styles.innerHTML = `
  .font-xanh-mono {
    font-family: 'Xanh Mono', monospace;
  }
`;
document.head.appendChild(styles);
export default NoirResume;
