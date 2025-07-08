import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Star, MapPin, Github, Linkedin, Calendar, Award, Briefcase, Heart, Sparkles } from 'lucide-react';
const BarbieResume = ({ personalInfo }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [sparkles, setSparkles] = useState([]);
    // Provide default values if personalInfo is undefined or incomplete
    const defaultPersonalInfo = {
        name: 'Your Name',
        location: '',
        github: '',
        linkedin: '',
        jobs: [],
        volunteer: [],
        awards: [],
        projects: [],
        skills: [],
        education: {
            degree: 'Bachelor of Science in',
            degreeShort: 'B.S.',
            major: 'Computer Science',
            minor: '',
            certificate: '',
            university: 'University',
            universityShort: 'U',
            graduationDate: new Date(),
            location: '',
            gpa: 0
        }
    };
    const safePersonalInfo = personalInfo ? {
        ...defaultPersonalInfo,
        ...personalInfo,
        education: personalInfo.education ? {
            ...defaultPersonalInfo.education,
            ...personalInfo.education
        } : defaultPersonalInfo.education
    } : defaultPersonalInfo;
    useEffect(() => {
        // Generate sparkles for background animation
        const newSparkles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2
        }));
        setSparkles(newSparkles);
    }, []);
    const formatDate = (date) => {
        if (typeof date === 'string')
            return date;
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };
    const SkillBar = ({ skill }) => (_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-pink-800 font-semibold text-sm", children: skill.name }), _jsxs("span", { className: "text-pink-600 text-xs", children: [Math.round(skill.level * 100), "%"] })] }), _jsx("div", { className: "w-full bg-pink-100 rounded-full h-3 overflow-hidden shadow-inner", children: _jsx("div", { className: "h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transition-all duration-1000 ease-out shadow-sm animate-pulse", style: { width: `${skill.level * 100}%` } }) })] }));
    const SectionCard = ({ children, className = "" }) => (_jsx("div", { className: `bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-pink-200/50 ${className}`, children: children }));
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 relative overflow-hidden", children: [sparkles.map(sparkle => (_jsx("div", { className: "absolute animate-ping", style: {
                    left: `${sparkle.x}%`,
                    top: `${sparkle.y}%`,
                    animationDelay: `${sparkle.delay}s`,
                    animationDuration: '3s'
                }, children: _jsx(Sparkles, { className: "text-white/30 w-4 h-4" }) }, sparkle.id))), _jsx("div", { className: "absolute top-20 left-10 animate-bounce", style: { animationDelay: '0.5s' }, children: _jsx(Heart, { className: "text-pink-500/40 w-8 h-8 fill-current" }) }), _jsx("div", { className: "absolute top-40 right-20 animate-bounce", style: { animationDelay: '1.5s' }, children: _jsx(Heart, { className: "text-pink-400/40 w-6 h-6 fill-current" }) }), _jsx("div", { className: "absolute bottom-32 left-1/4 animate-bounce", style: { animationDelay: '2.5s' }, children: _jsx(Heart, { className: "text-pink-600/40 w-5 h-5 fill-current" }) }), _jsxs("div", { className: "container mx-auto px-6 py-12 relative z-10", children: [_jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [_jsxs("div", { className: "relative inline-block", children: [_jsx("h1", { className: "text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800 mb-4 drop-shadow-lg animate-pulse", children: safePersonalInfo.name }), _jsx("div", { className: "absolute -top-2 -right-2", children: _jsx(Star, { className: "text-yellow-400 w-8 h-8 fill-current animate-spin", style: { animationDuration: '3s' } }) })] }), _jsxs("div", { className: "flex justify-center items-center gap-8 mt-8 flex-wrap", children: [safePersonalInfo.location && (_jsxs("div", { className: "flex items-center gap-2 bg-white/70 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm border-2 border-pink-200", children: [_jsx(MapPin, { className: "text-pink-600 w-5 h-5" }), _jsx("span", { className: "text-pink-800 font-semibold", children: safePersonalInfo.location })] })), safePersonalInfo.github && (_jsxs("a", { href: safePersonalInfo.github, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 bg-white/70 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:scale-105", children: [_jsx(Github, { className: "text-pink-600 w-5 h-5" }), _jsx("span", { className: "text-pink-800 font-semibold", children: "GitHub" })] })), safePersonalInfo.linkedin && (_jsxs("a", { href: safePersonalInfo.linkedin, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 bg-white/70 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:scale-105", children: [_jsx(Linkedin, { className: "text-pink-600 w-5 h-5" }), _jsx("span", { className: "text-pink-800 font-semibold", children: "LinkedIn" })] }))] })] }), _jsx("div", { className: "flex justify-center mb-12", children: _jsx("div", { className: "bg-white/60 backdrop-blur-sm rounded-full p-2 shadow-2xl border-4 border-pink-200", children: ['about', 'experience', 'projects', 'skills'].map((section) => (_jsx("button", { onClick: () => setActiveSection(section), className: `px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 mx-1 ${activeSection === section
                                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                                    : 'text-pink-700 hover:bg-pink-100 hover:scale-105'}`, children: section.charAt(0).toUpperCase() + section.slice(1) }, section))) }) }), _jsxs("div", { className: "max-w-6xl mx-auto", children: [activeSection === 'about' && (_jsxs("div", { className: "grid md:grid-cols-2 gap-8 animate-fade-in", children: [_jsxs(SectionCard, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Award, { className: "text-pink-600 w-8 h-8" }), _jsx("h2", { className: "text-3xl font-bold text-pink-800", children: "Education" })] }), _jsx("div", { className: "space-y-4", children: _jsxs("div", { children: [_jsxs("h3", { className: "text-xl font-bold text-pink-700", children: [safePersonalInfo.education.degree, " ", safePersonalInfo.education.major] }), safePersonalInfo.education.minor && (_jsxs("p", { className: "text-pink-600", children: ["Minor: ", safePersonalInfo.education.minor] })), safePersonalInfo.education.certificate && (_jsxs("p", { className: "text-pink-600", children: ["Certificate: ", safePersonalInfo.education.certificate] })), _jsx("p", { className: "text-pink-800 font-semibold", children: safePersonalInfo.education.university }), _jsx("p", { className: "text-pink-600", children: safePersonalInfo.education.location }), _jsxs("p", { className: "text-pink-600", children: ["Graduated: ", formatDate(safePersonalInfo.education.graduationDate)] }), safePersonalInfo.education.gpa > 0 && (_jsxs("p", { className: "text-pink-600", children: ["GPA: ", safePersonalInfo.education.gpa] }))] }) })] }), _jsxs(SectionCard, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Star, { className: "text-pink-600 w-8 h-8 fill-current" }), _jsx("h2", { className: "text-3xl font-bold text-pink-800", children: "Awards" })] }), _jsx("div", { className: "space-y-4", children: safePersonalInfo.awards.map((award, index) => (_jsxs("div", { className: "border-l-4 border-pink-300 pl-4 py-2", children: [_jsx("h3", { className: "text-lg font-bold text-pink-700", children: award.title }), _jsx("p", { className: "text-pink-600", children: award.organization }), _jsxs("p", { className: "text-pink-500 text-sm", children: [formatDate(award.date), " \u2022 ", award.location] }), award.description && (_jsx("p", { className: "text-pink-700 mt-2", children: award.description }))] }, index))) })] })] })), activeSection === 'experience' && (_jsxs("div", { className: "space-y-8 animate-fade-in", children: [_jsxs(SectionCard, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Briefcase, { className: "text-pink-600 w-8 h-8" }), _jsx("h2", { className: "text-3xl font-bold text-pink-800", children: "Work Experience" })] }), _jsx("div", { className: "space-y-6", children: safePersonalInfo.jobs.map((job, index) => (_jsxs("div", { className: "border-l-4 border-pink-300 pl-6 py-4", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-pink-700", children: job.position }), _jsxs("p", { className: "text-pink-600 font-semibold", children: [job.company, " \u2022 ", job.location] })] }), _jsx("div", { className: "text-right", children: _jsxs("p", { className: "text-pink-500 text-sm flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), formatDate(job.startDate), " - ", job.current ? 'Present' : formatDate(job.endDate)] }) })] }), job.descriptionBulletPoints.length > 0 && (_jsx("div", { className: "mb-4", children: job.descriptionBulletPoints.map((point, pointIndex) => (_jsx("p", { className: "text-pink-700 mb-2", children: point }, pointIndex))) })), job.technologies.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", children: job.technologies.map((tech, techIndex) => (_jsx("span", { className: "bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold border border-pink-200", children: tech }, techIndex))) }))] }, index))) })] }), safePersonalInfo.volunteer.length > 0 && (_jsxs(SectionCard, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Heart, { className: "text-pink-600 w-8 h-8 fill-current" }), _jsx("h2", { className: "text-3xl font-bold text-pink-800", children: "Volunteer Experience" })] }), _jsx("div", { className: "space-y-6", children: safePersonalInfo.volunteer.map((vol, index) => (_jsxs("div", { className: "border-l-4 border-pink-300 pl-6 py-4", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-pink-700", children: vol.position }), _jsxs("p", { className: "text-pink-600 font-semibold", children: [vol.organization, vol.suborganization && ` • ${vol.suborganization}`] }), _jsx("p", { className: "text-pink-600", children: vol.location })] }), _jsx("div", { className: "text-right", children: _jsxs("p", { className: "text-pink-500 text-sm flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), formatDate(vol.startDate), " - ", vol.current ? 'Present' : formatDate(vol.endDate)] }) })] }), vol.descriptionBulletPoints.length > 0 && (_jsx("div", { children: vol.descriptionBulletPoints.map((point, pointIndex) => (_jsx("p", { className: "text-pink-700 mb-2", children: point }, pointIndex))) }))] }, index))) })] }))] })), activeSection === 'projects' && (_jsx("div", { className: "animate-fade-in", children: _jsxs(SectionCard, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Sparkles, { className: "text-pink-600 w-8 h-8" }), _jsx("h2", { className: "text-3xl font-bold text-pink-800", children: "Projects" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: safePersonalInfo.projects.map((project, index) => (_jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-lg", children: [project.image && (_jsx("img", { src: project.image, alt: project.title, className: "w-full h-40 object-cover rounded-xl mb-4" })), _jsx("h3", { className: "text-xl font-bold text-pink-700 mb-2", children: project.title }), _jsx("p", { className: "text-pink-600 mb-4", children: project.description }), project.technologies.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.technologies.map((tech, techIndex) => (_jsx("span", { className: "bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-xs font-semibold", children: tech }, techIndex))) })), project.link && (_jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-200", children: "View Project" }))] }, index))) })] }) })), activeSection === 'skills' && (_jsx("div", { className: "animate-fade-in", children: _jsxs(SectionCard, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Star, { className: "text-pink-600 w-8 h-8 fill-current" }), _jsx("h2", { className: "text-3xl font-bold text-pink-800", children: "Skills" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: safePersonalInfo.skills.map((skill, index) => (_jsx(SkillBar, { skill: skill }, index))) })] }) }))] })] }), _jsx("style", { jsx: true, children: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      ` })] }));
};
export default BarbieResume;
