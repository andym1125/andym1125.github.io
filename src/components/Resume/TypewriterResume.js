import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
// Simple Typewriter Effect Component
const Typewriter = ({ text, delay = 0, speed = 60, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);
    useEffect(() => {
        if (!started || currentIndex >= text.length) {
            if (currentIndex >= text.length && onComplete) {
                onComplete();
            }
            return;
        }
        const timer = setTimeout(() => {
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
    }, [currentIndex, text, speed, started, onComplete]);
    return _jsx("span", { children: displayText });
};
// Header Component
const Header = ({ personalInfo }) => {
    const [showDetails, setShowDetails] = useState(false);
    // Format phone number in vintage style
    const formatVintagePhone = (modern) => {
        // Convert modern phone to vintage format
        return "MAyfair 4-7829"; // Keeping vintage style
    };
    return (_jsxs("header", { className: "header", children: [_jsx("h1", { className: "name", children: _jsx(Typewriter, { text: personalInfo.name, speed: 80, onComplete: () => setShowDetails(true) }) }), showDetails && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "address", children: [_jsx("div", { children: _jsx(Typewriter, { text: personalInfo.location, speed: 50, delay: 200 }) }), _jsx("div", { children: _jsx(Typewriter, { text: `Telephone: ${formatVintagePhone("")}`, speed: 50, delay: 600 }) })] }), _jsx("div", { className: "date", children: _jsx(Typewriter, { text: "March 15, 1947", speed: 60, delay: 1200 }) })] }))] }));
};
// Section Component
const Section = ({ title, children, delay = 0 }) => {
    const [showContent, setShowContent] = useState(false);
    return (_jsxs("section", { className: "section", children: [_jsx("h2", { className: "section-title", children: _jsx(Typewriter, { text: title, speed: 70, delay: delay, onComplete: () => setShowContent(true) }) }), showContent && (_jsx("div", { className: "section-content", children: children }))] }));
};
// Experience Item Component
const ExperienceItem = ({ job, delay = 0 }) => {
    const [showDetails, setShowDetails] = useState(false);
    const formatDateRange = (startDate, endDate, current) => {
        const start = startDate.getFullYear();
        const end = current ? "Present" : endDate.getFullYear();
        return `${start}-${end}`;
    };
    return (_jsxs("div", { className: "experience-item", children: [_jsx("div", { className: "job-line", children: _jsx(Typewriter, { text: `${job.position} - ${job.company} (${formatDateRange(job.startDate, job.endDate, job.current)})`, speed: 40, delay: delay, onComplete: () => setShowDetails(true) }) }), showDetails && (_jsx("div", { className: "job-description", children: job.descriptionBulletPoints.map((desc, index) => (_jsx("div", { className: "description-line", children: _jsx(Typewriter, { text: `    ${desc}`, speed: 35, delay: 300 + (index * 500) }) }, index))) }))] }));
};
// Projects Section Component
const ProjectsSection = ({ projects, delay = 0 }) => {
    return (_jsx("div", { className: "projects", children: projects.slice(0, 3).map((project, index) => (_jsxs("div", { className: "project-item", children: [_jsx("div", { className: "project-title", children: _jsx(Typewriter, { text: project.title, speed: 50, delay: delay + (index * 800) }) }), _jsx("div", { className: "project-description", children: _jsx(Typewriter, { text: `    ${project.description}`, speed: 35, delay: delay + (index * 800) + 200 }) }), project.technologies.length > 0 && (_jsx("div", { className: "project-tech", children: _jsx(Typewriter, { text: `    Technologies: ${project.technologies.slice(0, 3).join(", ")}`, speed: 30, delay: delay + (index * 800) + 500 }) }))] }, index))) }));
};
// Skills Component (adapted for vintage style)
const SkillsSection = ({ skills, delay = 0 }) => {
    const topSkills = skills
        .sort((a, b) => b.level - a.level)
        .slice(0, 8)
        .map(skill => skill.name);
    return (_jsx("div", { className: "skills", children: _jsx(Typewriter, { text: `Proficient in: ${topSkills.join(", ")}`, speed: 40, delay: delay }) }));
};
// Main Resume Component
const TypewriterResume = ({ personalInfo }) => {
    return (_jsxs("div", { className: "container", children: [_jsxs("div", { className: "paper", children: [_jsxs("div", { className: "ink-stains", children: [_jsx("div", { className: "ink-spot spot-1" }), _jsx("div", { className: "ink-spot spot-2" }), _jsx("div", { className: "ink-spot spot-3" }), _jsx("div", { className: "ink-spot spot-4" })] }), _jsx(Header, { personalInfo: personalInfo }), _jsx(Section, { title: "OBJECTIVE", delay: 2500, children: _jsx("div", { className: "objective", children: _jsx(Typewriter, { text: `To secure a position as Senior ${personalInfo.jobs[0]?.position || "Engineer"} where I may utilize my extensive experience in technology and innovation to contribute to industrial growth.`, speed: 35, delay: 200 }) }) }), _jsx(Section, { title: "EXPERIENCE", delay: 4500, children: personalInfo.jobs.slice(0, 3).map((job, index) => (_jsx(ExperienceItem, { job: job, delay: index * 1500 }, index))) }), _jsx(Section, { title: "EDUCATION", delay: 8000, children: _jsxs("div", { className: "education", children: [_jsx(Typewriter, { text: `${personalInfo.education.degree} ${personalInfo.education.major} - ${personalInfo.education.university}, ${personalInfo.education.graduationDate.getFullYear()}`, speed: 45, delay: 200 }), personalInfo.education.gpa && (_jsx("div", { style: { marginTop: '0.5rem' }, children: _jsx(Typewriter, { text: `    Grade Point Average: ${personalInfo.education.gpa.toFixed(2)}`, speed: 45, delay: 800 }) }))] }) }), personalInfo.projects.length > 0 && (_jsx(Section, { title: "NOTABLE PROJECTS", delay: 9500, children: _jsx(ProjectsSection, { projects: personalInfo.projects, delay: 200 }) })), personalInfo.skills.length > 0 && (_jsx(Section, { title: "TECHNICAL PROFICIENCIES", delay: 11000, children: _jsx(SkillsSection, { skills: personalInfo.skills, delay: 200 }) })), personalInfo.awards.length > 0 && (_jsx(Section, { title: "HONORS & RECOGNITION", delay: 12500, children: _jsx("div", { className: "awards", children: personalInfo.awards.slice(0, 3).map((award, index) => (_jsx("div", { className: "award-item", children: _jsx(Typewriter, { text: `${award.title} - ${award.organization}, ${typeof award.date === 'string' ? award.date : award.date.getFullYear()}`, speed: 40, delay: 200 + (index * 600) }) }, index))) }) }))] }), _jsx("style", { jsx: true, children: `
        .container {
          min-height: 100vh;
          background: #e8dcc6;
          padding: 2rem;
          font-family: 'Courier New', Courier, monospace;
        }

        .paper {
          max-width: 800px;
          margin: 0 auto;
          background: #f8f6f0;
          padding: 3rem 2.5rem;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          border: 1px solid #d4c4a8;
        }

        .paper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              transparent,
              transparent 24px,
              #e0d4c0 24px,
              #e0d4c0 25px
            );
          pointer-events: none;
          opacity: 0.4;
        }

        .paper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 60px;
          bottom: 0;
          width: 2px;
          background: #dc143c;
          opacity: 0.6;
        }

        .ink-stains {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .ink-spot {
          position: absolute;
          background: #1e3a8a;
          border-radius: 50%;
          opacity: 0.2;
        }

        .spot-1 {
          width: 6px;
          height: 8px;
          top: 20%;
          right: 25%;
          border-radius: 60% 40% 30% 70%;
        }

        .spot-2 {
          width: 3px;
          height: 4px;
          top: 50%;
          left: 15%;
        }

        .spot-3 {
          width: 8px;
          height: 5px;
          bottom: 30%;
          right: 30%;
          border-radius: 70% 30% 60% 40%;
        }

        .spot-4 {
          width: 4px;
          height: 6px;
          top: 70%;
          left: 45%;
          border-radius: 40% 60% 50% 50%;
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .name {
          font-size: 24px;
          font-weight: bold;
          color: #000;
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }

        .address {
          margin-bottom: 1rem;
          font-size: 14px;
          color: #000;
          line-height: 1.5;
        }

        .date {
          text-align: right;
          font-size: 14px;
          color: #000;
          margin-top: 1rem;
        }

        .section {
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #000;
          margin-bottom: 0.5rem;
          text-decoration: underline;
          letter-spacing: 1px;
        }

        .section-content {
          font-size: 14px;
          color: #000;
          line-height: 1.4;
        }

        .objective {
          text-align: justify;
          margin-left: 1rem;
        }

        .experience-item {
          margin-bottom: 1rem;
        }

        .job-line {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .job-description {
          margin-left: 0;
        }

        .description-line {
          margin-bottom: 0.3rem;
        }

        .education {
          margin-left: 1rem;
        }

        .projects {
          margin-left: 1rem;
        }

        .project-item {
          margin-bottom: 1rem;
        }

        .project-title {
          font-weight: bold;
          margin-bottom: 0.3rem;
        }

        .project-description {
          margin-bottom: 0.3rem;
        }

        .project-tech {
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .skills {
          margin-left: 1rem;
        }

        .awards {
          margin-left: 1rem;
        }

        .award-item {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .paper {
            padding: 2rem 1.5rem;
          }
          
          .name {
            font-size: 20px;
          }
        }
      ` })] }));
};
export default TypewriterResume;
