import React, { useState } from 'react';
import type { PersonalInfo, WorkExperience, Project, Skill } from '../types';

// --- SVG COMPONENTS ---
const StampSVG = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-sm">
        <defs>
            <mask id="stampMask">
                <rect width="100" height="100" fill="white" />
                <g transform="translate(50 50)">
                    <circle r="40" fill="black" />
                </g>
            </mask>
        </defs>
        <rect width="90" height="90" x="5" y="5" fill="#F0EAD6" stroke="#C9B7A6" strokeWidth="1" />
        <path d="M25 65 Q50 40 75 65" stroke="#D9534F" fill="none" strokeWidth="2" />
        <path d="M25 70 Q50 45 75 70" stroke="#D9534F" fill="none" strokeWidth="2" />
        <text x="50" y="35" textAnchor="middle" fontSize="12" fill="#4A4A4A" style={{fontFamily: "'Special Elite', cursive"}} className="font-bold">U.S. POSTAGE</text>
        <text x="50" y="55" textAnchor="middle" fontSize="24" fill="#4A4A4A" style={{fontFamily: "'Special Elite', cursive"}} className="font-bold">3¢</text>
    </svg>
);

const PostmarkSVG = ({ location }: { location: string }) => (
    <svg width="120" height="120" viewBox="0 0 120 120" className="absolute top-2 right-16 opacity-70 transform -rotate-12">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#4A4A4A" strokeWidth="2" />
        <text x="60" y="40" textAnchor="middle" fontSize="14" fill="#4A4A4A" className="font-mono uppercase tracking-wider">{location.split(',')[0]}</text>
        <text x="60" y="85" textAnchor="middle" fontSize="12" fill="#4A4A4A" className="font-mono">{new Date().toLocaleDateString('en-US')}</text>
    </svg>
);



// --- PAGE COMPONENTS ---
const HomePage: React.FC<{ personalInfo: PersonalInfo, onNavigate: () => void }> = ({ personalInfo, onNavigate }) => (
    <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#4A4A4A] tracking-wider" style={{fontFamily: "'Special Elite', cursive"}}>Greetings from</h1>
        <h2 className="text-7xl md:text-8xl font-extrabold text-[#D9534F]" style={{fontFamily: "'Lobster', cursive", marginTop: "-0.5rem"}}>{personalInfo.location.split(',')[0]}</h2>
        <button
            onClick={onNavigate}
            className="mt-8 px-6 py-2 bg-[#D9534F] text-white font-bold rounded-lg shadow-md hover:bg-[#C9302C] transition-colors"
        >
            View My Resume
        </button>
    </div>
);

const ResumePage: React.FC<{
    personalInfo: PersonalInfo;
    title: string;
    children: React.ReactNode
}> = ({ personalInfo, title, children }) => (
    <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-400 overflow-y-auto pb-4 md:pb-0">
             <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1 mb-4" style={{fontFamily: "'Special Elite', cursive"}}>{title}</h2>
            {children}
        </div>
        <div className="w-full md:w-1/3 pl-0 md:pl-4 mt-4 md:mt-0 relative">
            <div className="md:text-right">
                <h3 className="font-bold text-xl">{personalInfo.name}</h3>
                <p>{personalInfo.location}</p>
                <a href={personalInfo.github} className="text-blue-600 hover:underline block">GitHub</a>
                <a href={personalInfo.linkedin} className="text-blue-600 hover:underline block">LinkedIn</a>
            </div>
            <div className="mt-8 flex justify-center md:justify-end">
                <div className="relative">
                    <PostmarkSVG location={personalInfo.location} />
                    <StampSVG />
                </div>
            </div>
        </div>
    </div>
);

const ExperienceSection: React.FC<{ jobs: WorkExperience[] }> = ({ jobs }) => (
    <div>
        {jobs.map((job, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-bold text-lg">{job.company}</h3>
                <p className="italic">{job.position}</p>
                <p className="text-sm text-gray-600">{job.location} | {new Date(job.startDate).getFullYear()} - {job.current ? 'Present' : new Date(job.endDate).getFullYear()}</p>
                <ul className="list-disc list-inside text-sm mt-1">
                    {job.descriptionBulletPoints.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </div>
        ))}
    </div>
);

const EducationSection: React.FC<{ education: Education }> = ({ education }) => (
    <div>
        <h3 className="font-bold text-lg">{education.university}</h3>
        <p className="italic">{education.degree} {education.major}</p>
        <p className="text-sm text-gray-600">{education.location} | Graduated: {new Date(education.graduationDate).getFullYear()}</p>
        <p className="text-sm">GPA: {education.gpa.toFixed(1)}</p>
    </div>
);

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => (
     <div>
        {projects.map((project, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm italic">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">View Project</a>
            </div>
        ))}
    </div>
);

const SkillsSection: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <div className="flex flex-wrap">
        {skills.map((skill, index) => (
            <span key={index} className="bg-gray-300 text-gray-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{skill.name}</span>
        ))}
    </div>
);

// --- MAIN COMPONENT ---
const PostcardResume: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
    const [activePageIndex, setActivePageIndex] = useState(0);

    const pages = [
        { id: 'home', component: <HomePage personalInfo={personalInfo} onNavigate={() => setActivePageIndex(1)} /> },
        { id: 'experience', component: <ResumePage personalInfo={personalInfo} title="Work Experience"><ExperienceSection jobs={personalInfo.jobs} /></ResumePage> },
        { id: 'projects', component: <ResumePage personalInfo={personalInfo} title="Projects"><ProjectsSection projects={personalInfo.projects} /></ResumePage> },
        { id: 'education', component: <ResumePage personalInfo={personalInfo} title="Education"><EducationSection education={personalInfo.education} /></ResumePage> },
        { id: 'skills', component: <ResumePage personalInfo={personalInfo} title="Skills"><SkillsSection skills={personalInfo.skills} /></ResumePage> },
    ];
    
    const goToNext = () => setActivePageIndex(i => (i + 1) % pages.length);
    const goToPrev = () => setActivePageIndex(i => (i - 1 + pages.length) % pages.length);

    return (
        <div className="w-full max-w-4xl mx-auto p-4 h-[650px] md:h-[550px]">
            <div className="relative w-full h-full perspective">
                {pages.map((page, index) => {
                    const isActive = index === activePageIndex;
                    const isPast = index < activePageIndex;

                    const style: React.CSSProperties = {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease-out',
                    };

                    if (isActive) {
                        style.transform = 'translateY(0) rotate(0deg)';
                        style.opacity = 1;
                        style.zIndex = pages.length;
                    } else if (isPast) {
                        const stackDepth = activePageIndex - index;
                        style.transform = `translateY(${stackDepth * 25}px) rotate(${-stackDepth * 2}deg)`;
                        style.opacity = 1 - (stackDepth * 0.25);
                        style.zIndex = pages.length - stackDepth;
                    } else { // isUpcoming
                        style.transform = 'translateY(-120%) rotate(8deg)';
                        style.opacity = 0;
                        style.zIndex = pages.length + 1;
                    }
                    
                    if (activePageIndex === 0 && index !== 0) {
                        style.opacity = 0;
                        style.transform = 'translateY(-120%) rotate(8deg)';
                    }
                    
                    return (
                        <div
                            key={page.id}
                            style={style}
                            className="transform-style-3d"
                        >
                            <div className="w-full h-full bg-[#FDFCEC] rounded-lg shadow-2xl border-4 border-double border-[#D2B48C] flex items-center justify-center p-6" style={{fontFamily: "'Special Elite', cursive", color: '#4A4A4A'}}>
                               {page.component}
                            </div>
                        </div>
                    )
                })}
            </div>
             {activePageIndex > 0 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4" style={{zIndex: 999}}>
                     <button
                        onClick={goToPrev}
                        className="px-4 py-2 bg-[#5A7D9A] text-white font-bold rounded-lg shadow-md hover:bg-[#435F7A] transition-colors"
                    >
                        Previous
                    </button>
                    <button
                        onClick={goToNext}
                        className="px-4 py-2 bg-[#D9534F] text-white font-bold rounded-lg shadow-md hover:bg-[#C9302C] transition-colors"
                    >
                       {activePageIndex === pages.length - 1 ? 'Back to Start' : 'Next'}
                    </button>
                </div>
            )}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Special+Elite&display=swap');
                .perspective {
                    perspective: 1500px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </div>
    );
};
export default PostcardResume;