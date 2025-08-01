import React, { useState, useEffect } from 'react';
import type { PersonalInfo, Project, Skill, WorkExperience } from '../types';

// --- ICON COMPONENTS ---
const TypeScriptIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M14.4,8.4H12.9V20.5h1.5V13.9h1.9v-1.5H14.4V8.4z M9.8,20.5V18.1L6.4,12h1.8l2,3.9l2-3.9h1.8l-3.4,6.1v2.4H9.8z M22,3.5H2 v18h20V3.5z M4.3,18.7V6.3h15.4v12.4H4.3z"/></svg>);
const ReactIcon = ({ className = "w-6 h-6" }) => (<svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>);
const NodeIcon = ({ className = "w-6 h-6" }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M22.6,10.3l-1.1-6.4c-0.2-1-1-1.7-2-1.7H4.5c-1,0-1.8,0.7-2,1.7L1.4,10.3c-0.1,0.3,0,0.6,0.2,0.8l10,9.4c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3l10-9.4C22.6,10.9,22.7,10.6,22.6,10.3z M12.1,18.8L3.2,10.5l0.8-4.4h16l0.8,4.4L12.1,18.8z"/></svg>);
const TailwindIcon = ({ className = "w-6 h-6" }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.334,13.382,8.973,12,6.001,12z"/></svg>);
const FirebaseIcon = ({ className = "w-6 h-6" }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M5.1,3.1L4,4.2l7.5,12.3l-1.8,3.1L11,21l3.3-5.5L20,3l-1.2-1.2L5.1,3.1z M8.1,5.2l6.2-1l-2.8,7.4L8.1,5.2z M12,17.2l-1.8-3l4.3-7.2l1.3,1.3L12,17.2z"/></svg>);
const SqlIcon = ({ className = "w-6 h-6" }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z M11,10H8v2h3v4h2v-4h3v-2h-3V6h-2V10z"/></svg>);

const skillIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'React': ReactIcon,
    'TypeScript': TypeScriptIcon,
    'Node.js': NodeIcon,
    'TailwindCSS': TailwindIcon,
    'Firebase': FirebaseIcon,
    'SQL': SqlIcon,
    'default': ReactIcon,
};

// --- UI COMPONENTS ---
const PixelPanel = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-[#2c2c54] border-4 border-[#40407a] p-4 md:p-6 shadow-lg ${className}`} style={{ imageRendering: 'pixelated' }}>
        {children}
    </div>
);

const PixelButton = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
    <button onClick={onClick} className={`bg-[#ff793f] text-white font-bold py-2 px-4 border-b-4 border-[#cd6133] hover:bg-[#cd6133] hover:border-[#ff793f] active:translate-y-1 active:border-b-0 transition-all duration-100 ease-in-out ${className}`}>
        {children}
    </button>
);


// --- RESUME SUB-COMPONENTS ---
const Header = ({ name, location }: { name: string, location: string }) => (
    <header className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-6 bg-black bg-opacity-30 border-b-4 border-[#40407a]">
        <img src="https://placehold.co/128x128/1a202c/ffffff?text=AR" alt="Avatar" className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#706fd3]" style={{ imageRendering: 'pixelated' }} />
        <div>
            <h1 className="text-4xl md:text-5xl font-press-start text-[#ffb142] drop-shadow-lg">{name}</h1>
            <p className="text-lg md:text-xl text-[#ffda79] mt-2 animate-pulse">{location}</p>
        </div>
    </header>
);

const PlayerInfo = ({ bio, education }: { bio: string, education: PersonalInfo['education'] }) => (
    <PixelPanel>
        <h2 className="text-2xl font-press-start text-[#ffb142] mb-4">Character File</h2>
        <p className="text-white leading-relaxed mb-6">{bio}</p>
        <h3 className="text-xl font-press-start text-[#ffda79] mb-2">Training</h3>
        <p className="text-white"><span className='font-bold'>{education.degree} {education.major}</span></p>
        <p className="text-gray-300">{education.university}</p>
        <p className="text-gray-400 text-sm">{education.location} | Graduated: {education.graduationDate.getFullYear()}</p>
    </PixelPanel>
);

const SkillsInventory = ({ skills }: { skills: Skill[] }) => {
    const getLevelLabel = (level: number) => {
        if (level >= 0.9) return "Master";
        if (level >= 0.75) return "Expert";
        if (level >= 0.5) return "Adept";
        return "Novice";
    };

    return (
        <PixelPanel>
            <h2 className="text-2xl font-press-start text-[#ffb142] mb-4">Skill Inventory</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => {
                    const Icon = skillIcons[skill.name] || skillIcons.default;
                    return (
                        <div key={skill.name} className="flex flex-col items-center p-2 bg-[#40407a] border-2 border-[#1e1e3f] hover:bg-[#706fd3] transition-colors duration-200 cursor-pointer">
                            <Icon className="w-10 h-10 text-[#ffda79]" />
                            <span className="text-white font-bold mt-2 text-center text-sm">{skill.name}</span>
                            <span className="text-xs text-gray-300">{getLevelLabel(skill.level)}</span>
                        </div>
                    );
                })}
            </div>
        </PixelPanel>
    );
};

const QuestLog = ({ experience }: { experience: WorkExperience[] }) => {
    const formatDate = (date: Date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    return (
        <PixelPanel>
            <h2 className="text-2xl font-press-start text-[#ffb142] mb-4">Quest Log</h2>
            <div className="space-y-6">
                {experience.map((job, index) => (
                    <div key={index} className="border-l-4 border-[#ff793f] pl-4">
                        <h3 className="text-xl font-bold text-white">{job.position}</h3>
                        <p className="text-md text-[#ffda79]">{job.company} | {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                            {job.descriptionBulletPoints.map((obj, i) => <li key={i}>{obj}</li>)}
                        </ul>
                        <div className="mt-2 flex flex-wrap gap-2">
                           {job.technologies.map(tech => <span key={tech} className="text-xs bg-[#706fd3] text-white px-2 py-1">{tech}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </PixelPanel>
    );
};

const ProjectShowcase = ({ projects }: { projects: Project[] }) => {
    const [selectedSlot, setSelectedSlot] = useState(0);
    if (!projects || projects.length === 0) return null;
    
    const project = projects[selectedSlot];

    return (
        <PixelPanel>
            <h2 className="text-2xl font-press-start text-[#ffb142] mb-4">Saved Games (Projects)</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-2">
                    {projects.map((p, i) => (
                        <button key={i} onClick={() => setSelectedSlot(i)} className={`p-2 w-full text-left whitespace-nowrap border-2 transition-colors duration-200 ${selectedSlot === i ? 'bg-[#ff793f] text-white border-[#cd6133]' : 'bg-[#40407a] text-gray-300 border-[#1e1e3f] hover:bg-[#706fd3]'}`}>
                            SLOT {i + 1}: {p.title}
                        </button>
                    ))}
                </div>
                <div className="flex-1 bg-[#1e1e3f] p-4 border-2 border-black">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 border-2 border-black" style={{ imageRendering: 'pixelated' }} />
                    <p className="text-gray-300 mb-4">{project.description}</p>
                     <div className="mb-4 flex flex-wrap gap-2">
                           {project.technologies.map(tech => <span key={tech} className="text-xs bg-[#706fd3] text-white px-2 py-1">{tech}</span>)}
                        </div>
                    <PixelButton onClick={() => window.open(project.link, '_blank')}>
                        Load Game
                    </PixelButton>
                </div>
            </div>
        </PixelPanel>
    );
};

const ContactScreen = ({ contact }: { contact: { github: string, linkedin: string } }) => (
    <footer className="text-center p-6 bg-black bg-opacity-30 border-t-4 border-[#40407a] mt-8">
        <h2 className="text-2xl font-press-start text-[#ffb142] mb-4">Continue?</h2>
        <div className="flex justify-center gap-4 flex-wrap">
            <PixelButton onClick={() => window.open(`https://${contact.github}`, '_blank')}>GitHub</PixelButton>
            <PixelButton onClick={() => window.open(`https://${contact.linkedin}`, '_blank')}>LinkedIn</PixelButton>
        </div>
        <p className="text-gray-400 mt-6 text-sm">© {new Date().getFullYear()} Alex 'Pixel' Ryder. All rights reserved.</p>
    </footer>
);


// --- TOP-LEVEL COMPONENT ---
const RetroGameResume = ({ personalInfo }: { personalInfo: PersonalInfo }) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => { document.head.removeChild(link); }
    }, []);
    
    return (
        <div className="bg-[#1e1e3f] min-h-screen font-sans text-white" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            <div className="container mx-auto p-4 md:p-8 max-w-5xl">
                <main className="space-y-8">
                    <Header name={personalInfo.name} location={personalInfo.location} />
                    <PlayerInfo bio={"A seasoned developer who traded in his sword for a keyboard. I build legendary web applications and slay bugs with clean, efficient code. My quest is to forge amazing user experiences."} education={personalInfo.education} />
                    <SkillsInventory skills={personalInfo.skills} />
                    <QuestLog experience={personalInfo.jobs} />
                    <ProjectShowcase projects={personalInfo.projects} />
                </main>
                <ContactScreen contact={{ github: personalInfo.github, linkedin: personalInfo.linkedin }} />
            </div>
        </div>
    );
};
export default RetroGameResume;