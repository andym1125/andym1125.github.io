import React, { useState, useEffect } from 'react';
import type { PersonalInfo, WorkExperience, Project, Skill, Award, VolunteerExperience } from './types';
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
            (window as any).WebFont.load({
                google: {
                    families: ['Special Elite', 'IM Fell English SC', 'Old Standard TT', 'Xanh Mono']
                }
            });
        };
    }, []);
    return null;
};


// --- Themed Helper Components ---

const Section = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
    <div className={`border-2 border-neutral-700 bg-black/50 shadow-[0_0_15px_rgba(0,0,0,0.7)] ${className}`}>
        <h2 className="text-2xl text-neutral-200 p-3 border-b-2 border-neutral-700 font-special-elite tracking-wider">
            {title}
        </h2>
        <div className="p-4">
            {children}
        </div>
    </div>
);

const CaseFileCard = ({ item }: { item: WorkExperience | Project }) => (
    <div className="mb-6 p-4 border border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800/60 transition-colors duration-300 font-xanh-mono">
        <h3 className="text-xl font-im-fell text-neutral-100">
            {'company' in item ? item.company : item.title}
        </h3>
        {'position' in item && <p className="text-lg text-neutral-400">{item.position}</p>}
        {'startDate' in item && (
            <p className="text-sm text-neutral-500 my-1 font-special-elite">
                {item.startDate.getFullYear()} - {item.current ? 'Present' : item.endDate.getFullYear()}
            </p>
        )}
        <div className="my-3 text-neutral-300 space-y-2 text-justify">
           {'descriptionBulletPoints' in item ? item.descriptionBulletPoints.map((point, i) => <p key={i}>- {point}</p>) : <p>{item.description}</p>}
        </div>
        
        {'technologies' in item && item.technologies && (
            <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map(tech => (
                    <span key={tech} className="bg-neutral-700/50 text-neutral-300 text-xs px-2 py-1 rounded-sm border border-neutral-600 font-special-elite">
                        {tech}
                    </span>
                ))}
            </div>
        )}
    </div>
);


const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-4 font-xanh-mono">
        <div className="flex justify-between mb-1">
            <span className="text-base text-neutral-300">{skill.name}</span>
        </div>
        <div className="w-full bg-neutral-800 border border-neutral-700 h-3">
            <div
                className="bg-neutral-200 h-full"
                style={{ width: `${skill.level * 100}%` }}
            ></div>
        </div>
    </div>
);


// --- Main Component ---

const NoirResume = ({ personalInfo }: { personalInfo: PersonalInfo }) => {
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
    
    return (
        <>
            <style>{animationStyles}</style>
            <WebFontLoader />
             {/* FIX: Reverted to the dark theme layout */}
            <div className="min-h-screen bg-black text-neutral-300 font-serif relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-repeat bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/crissxcross.png')", opacity: 0.05}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                
                {/* Sweeping Light Animation with Blinds Mask */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div 
                        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-neutral-100/40 to-transparent ${animationClass}`}
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent 0, transparent 10px, black 10px, black 25px)',
                            maskSize: '100% 25px',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, transparent 10px, black 10px, black 25px)',
                            WebkitMaskSize: '100% 25px',
                        }}
                    ></div>
                </div>


                <main className="container mx-auto p-4 sm:p-8 relative z-20">
                    {/* Header */}
                    <header className="text-center mb-12 p-6 border-y-4 border-neutral-600 bg-black/60 backdrop-blur-sm">
                        <h1 className="text-5xl md:text-6xl text-neutral-100 font-im-fell tracking-widest" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.1)' }}>
                            {personalInfo.name}
                        </h1>
                        <p className="text-neutral-400 mt-2 font-special-elite text-lg tracking-wider">{personalInfo.location}</p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Dossier */}
                        <div className="lg:col-span-2 space-y-8">
                            <Section title="CASE HISTORY">
                                {personalInfo.jobs.map((job, i) => <CaseFileCard key={`job-${i}`} item={job} />)}
                            </Section>
                             <Section title="SIDE JOBS">
                                {personalInfo.projects.map((proj, i) => <CaseFileCard key={`proj-${i}`} item={proj} />)}
                            </Section>
                        </div>

                        {/* Right Column - Vitals */}
                        <div className="space-y-8">
                            <Section title="THE TOOLKIT">
                                {personalInfo.skills.map((skill, i) => <SkillBar key={`skill-${i}`} skill={skill}/>)}
                            </Section>
                             <Section title="ACCOLADES">
                                {personalInfo.awards.map((award, i) => (
                                    <div key={i} className="mb-4 font-xanh-mono">
                                        <p className="font-bold text-neutral-200 text-lg">{award.title}</p>
                                        <p className="text-neutral-400">{award.organization} - {award.date.toString()}</p>
                                    </div>
                                ))}
                            </Section>
                            <Section title="EDUCATION">
                                <div className="font-xanh-mono">
                                    <p className="font-bold text-neutral-200 text-lg">{personalInfo.education.university}</p>
                                    <p className="text-neutral-400">{personalInfo.education.major}</p>
                                </div>
                            </Section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
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
