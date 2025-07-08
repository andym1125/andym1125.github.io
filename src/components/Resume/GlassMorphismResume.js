import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, MapPin, Briefcase, Award, Code, GraduationCap, ChevronsDown } from 'lucide-react';
/**
 * Formats a date range for display.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @param current - Whether the position is current.
 * @returns A formatted string like "Jan 2021 - Present".
 */
const formatDateRange = (startDate, endDate, current) => {
    const start = startDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
    if (current) {
        return `${start} - Present`;
    }
    const end = endDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
    return `${start} - ${end}`;
};
//==============================================================================
// CORE UI COMPONENTS
//==============================================================================
const MorphingBackground = () => {
    return (_jsxs("div", { className: "fixed inset-0 -z-10 overflow-hidden bg-gray-900", children: [_jsx(motion.div, { initial: { x: "-10%", y: "-10%", rotate: 0 }, animate: { x: "30%", y: "10%", rotate: 40 }, transition: { duration: 40, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, className: "absolute top-0 left-0 h-[25rem] w-[25rem] rounded-full bg-gradient-to-br from-orange-500/80 to-amber-600/80" }), _jsx(motion.div, { initial: { x: "60%", y: "80%" }, animate: { x: "40%", y: "20%", rotate: -30 }, transition: { duration: 35, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, className: "absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-red-500/80 to-orange-500/80" }), _jsx(motion.div, { initial: { x: "100%", y: "0%" }, animate: { x: "-20%", y: "100%", rotate: 60 }, transition: { duration: 50, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, className: "absolute top-0 right-0 h-[20rem] w-[20rem] rounded-full bg-gradient-to-tr from-yellow-400/80 to-orange-400/80" })] }));
};
/**
 * A reusable "glass" card component that provides the core visual style.
 * It includes an interactive glare and 3D tilt effect.
 */
const GlassCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], ["12.5deg", "-12.5deg"]);
    const rotateY = useTransform(x, [-0.5, 0.5], ["-12.5deg", "12.5deg"]);
    const [glareStyle, setGlareStyle] = useState({});
    const handleMouseMove = (e) => {
        if (!cardRef.current)
            return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
        setGlareStyle({
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 50%)`,
        });
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setGlareStyle({});
    };
    return (_jsxs(motion.div, { ref: cardRef, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, style: {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }, className: `relative rounded-3xl border-2 border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl shadow-black/40 ${className}`, children: [_jsx("div", { style: { transform: "translateZ(25px)", transformStyle: "preserve-3d" }, children: children }), _jsx("div", { className: "pointer-events-none absolute inset-0 transition-all duration-200", style: { ...glareStyle, transform: "translateZ(25px)" } })] }));
};
/**
 * A wrapper for content sections that animates them into view on scroll.
 */
const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);
    return (_jsx(motion.section, { ref: ref, variants: {
            hidden: { opacity: 0.001, y: 75, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
        }, initial: "hidden", animate: controls, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }, className: className, children: children }));
};
//==============================================================================
// RESUME-SPECIFIC COMPONENTS
//==============================================================================
const Header = ({ name, location, github, linkedin }) => {
    return (_jsx(AnimatedSection, { children: _jsx(GlassCard, { className: "p-6 md:p-8", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: name }), _jsxs("div", { className: "mt-2 flex items-center gap-2 text-orange-200/80", children: [_jsx(MapPin, { size: 16 }), _jsx("span", { children: location })] })] }), _jsxs("div", { className: "flex gap-4 mt-4 md:mt-0", children: [_jsx("a", { href: github, target: "_blank", rel: "noopener noreferrer", className: "text-orange-200/80 hover:text-white transition-colors", children: _jsx(Github, { size: 24 }) }), _jsx("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", className: "text-orange-200/80 hover:text-white transition-colors", children: _jsx(Linkedin, { size: 24 }) })] })] }) }) }));
};
const Section = ({ title, icon, children, id }) => {
    return (_jsxs(AnimatedSection, { className: "mt-12", id: id, children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "text-orange-300/80 drop-shadow-lg", children: icon }), _jsx("h2", { className: "text-3xl font-bold text-white tracking-wide", children: title })] }), children] }));
};
const ExperienceCard = ({ job }) => {
    return (_jsxs(GlassCard, { className: "p-6 mb-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between sm:items-center mb-2", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: job.position }), _jsx("span", { className: "text-sm text-orange-200/80 mt-1 sm:mt-0", children: formatDateRange(job.startDate, job.endDate, job.current) })] }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-between sm:items-center text-orange-100/90 mb-4", children: [_jsx("p", { children: job.company }), _jsx("p", { className: "text-sm", children: job.location })] }), _jsx("ul", { className: "list-disc list-inside text-gray-300/90 space-y-2 mb-4", children: job.descriptionBulletPoints.map((point, index) => (_jsx("li", { children: point }, index))) }), _jsx("div", { className: "flex flex-wrap gap-2", children: job.technologies.map((tech) => (_jsx("span", { className: "bg-white/10 border border-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full", children: tech }, tech))) })] }));
};
const ProjectCard = ({ project }) => (_jsx(GlassCard, { className: "p-6", children: _jsxs("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "block", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: project.title }), _jsx("p", { className: "text-gray-300/90 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech) => (_jsx("span", { className: "bg-white/10 border border-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full", children: tech }, tech))) })] }) }));
const Skills = ({ skills }) => {
    return (_jsx(Section, { title: "Skills", icon: _jsx(Code, { size: 28 }), id: "skills", children: _jsx(GlassCard, { className: "p-6", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: skills.map(skill => (_jsxs("div", { children: [_jsx("p", { className: "text-white mb-2", children: skill.name }), _jsx("div", { className: "w-full bg-white/10 rounded-full h-3", children: _jsx(motion.div, { className: "bg-gradient-to-r from-orange-400 to-amber-300 h-3 rounded-full shadow-[0_0_10px_theme(colors.orange.400),0_0_4px_theme(colors.amber.500)]", initial: { width: 0 }, whileInView: { width: `${skill.level * 100}%` }, viewport: { once: true, amount: 0.8 }, transition: { duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] } }) })] }, skill.name))) }) }) }));
};
const Education = ({ education }) => {
    return (_jsx(Section, { title: "Education", icon: _jsx(GraduationCap, { size: 28 }), id: "education", children: _jsxs(GlassCard, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: education.university }), _jsxs("p", { className: "text-orange-100/90", children: [education.degree, " in ", education.major] }), education.minor && _jsxs("p", { className: "text-orange-100/90 text-sm", children: ["Minor in ", education.minor] }), _jsxs("p", { className: "text-orange-200/80 text-sm mt-2", children: [education.graduationDate.getFullYear(), " | GPA: ", education.gpa.toFixed(2)] })] }) }));
};
const Awards = ({ awards }) => (_jsx(Section, { title: "Awards", icon: _jsx(Award, { size: 28 }), id: "awards", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: awards.map((award, index) => (_jsxs(GlassCard, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: award.title }), _jsx("p", { className: "text-orange-100/90", children: award.organization }), _jsx("p", { className: "text-orange-200/80 text-sm mt-1", children: award.date.toString() }), _jsx("p", { className: "text-gray-300/90 mt-2", children: award.description })] }, index))) }) }));
const FloatingDock = () => {
    const dockItems = [
        { id: 'experience', icon: _jsx(Briefcase, {}) },
        { id: 'projects', icon: _jsx(Code, {}) },
        { id: 'skills', icon: _jsx(ChevronsDown, {}) },
        { id: 'education', icon: _jsx(GraduationCap, {}) },
        { id: 'awards', icon: _jsx(Award, {}) },
    ];
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (_jsx(motion.div, { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 1.5, duration: 0.8, ease: "easeOut" }, className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50", children: _jsx(GlassCard, { className: "p-2", children: _jsx("div", { className: "flex items-center gap-2", children: dockItems.map(item => (_jsx(motion.button, { whileHover: { y: -10, scale: 1.15 }, whileTap: { scale: 0.9 }, onClick: () => scrollTo(item.id), className: "text-white/70 hover:text-white p-3 rounded-xl transition-all", children: item.icon }, item.id))) }) }) }));
};
//==============================================================================
// TOP-LEVEL COMPONENT
//==============================================================================
/**
 * The main component for the Liquid Glass themed resume.
 * @param {object} props - The component props.
 * @param {PersonalInfo} [props.personalInfo=dummyInfo] - The personal information to display.
 */
const GlassMorphismResume = ({ personalInfo }) => {
    return (_jsxs("div", { className: "min-h-screen font-sans text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]", children: [_jsx(MorphingBackground, {}), _jsxs("div", { className: "relative max-w-4xl mx-auto p-4 md:p-8 pb-32", children: [_jsx(Header, { name: personalInfo.name, location: personalInfo.location, github: personalInfo.github, linkedin: personalInfo.linkedin }), _jsx(Section, { title: "Work Experience", icon: _jsx(Briefcase, { size: 28 }), id: "experience", children: personalInfo.jobs.map((job, index) => (_jsx(ExperienceCard, { job: job }, index))) }), _jsx(Section, { title: "Projects", icon: _jsx(Code, { size: 28 }), id: "projects", children: _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: personalInfo.projects.map((project, index) => (_jsx(ProjectCard, { project: project }, index))) }) }), personalInfo.awards && personalInfo.awards.length > 0 && (_jsx(Awards, { awards: personalInfo.awards })), _jsx(Skills, { skills: personalInfo.skills }), _jsx(Education, { education: personalInfo.education }), _jsx(FloatingDock, {})] })] }));
};
export default GlassMorphismResume;
