import React from 'react';
import type { WorkExperience, Skill, PersonalInfo } from '../types';
const StyleInjector = () => (
  <style>{`
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
  `}</style>
);


// --- HELPER COMPONENTS --- //
const formatDate = (date: Date): string => new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10 relative z-10">
    <h2 className="font-display text-6xl text-red-600 text-center tracking-wider mb-6 [text-shadow:2px_2px_0_#000] text-pop hover-shake cursor-pointer">
      {title}
    </h2>
    <div className="border-l-2 border-red-600 pl-6">{children}</div>
  </section>
);

const ExperienceItem: React.FC<{ experience: WorkExperience }> = ({ experience }) => (
  <div className="mb-8">
    <div className="mb-2">
      <h3 className="text-2xl font-bold text-gray-100">{experience.position}</h3>
      <p className="text-xl text-red-600 text-pop">{experience.company}</p>
    </div>
    <div className="text-gray-400 mb-3">
      {formatDate(experience.startDate)} - {experience.current ? 'PRESENT' : formatDate(experience.endDate)}
      <span className="mx-2 text-gray-600">|</span>
      {experience.location}
    </div>
    <ul className="list-none pl-0 mt-2">
      {experience.descriptionBulletPoints.map((point, i) => (
        <li key={i} className="flex items-start mb-2">
          <span className="text-red-600 text-xl leading-tight mr-3 text-pop">†</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
    {experience.technologies.length > 0 && (
      <p className="mt-4 text-gray-400 text-sm">
        <span className="text-red-600 font-bold text-pop">Featuring:</span> {experience.technologies.join(' • ')}
      </p>
    )}
  </div>
);

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div>
    <p className="mb-2 text-lg">{skill.name}</p>
    <div className="w-full h-4 bg-gray-700 border border-red-600 p-0.5">
      <div className="h-full bg-red-600 shadow-md shadow-red-600 animate-flicker" style={{ width: `${skill.level * 100}%` }}></div>
    </div>
  </div>
);

// --- MAIN COMPONENT --- //
interface HorrorPosterResumeProps {
  personalInfo: PersonalInfo;
}

const HorrorPosterResume: React.FC<HorrorPosterResumeProps> = ({ personalInfo }) => {
  if (!personalInfo) {
    return (
      <>
        <StyleInjector />
        <div className="font-body bg-gray-900 text-gray-100 p-8 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="font-display text-6xl text-red-600 text-pop">Awaiting Transmission...</h2>
                <p className="mt-4 text-xl">The signal from the beyond has not yet arrived.</p>
            </div>
        </div>
      </>
    );
  }

  const { name, location, github, linkedin, jobs, skills, projects, education } = personalInfo;

  return (
    <>
      <StyleInjector />
      <div className="font-body bg-gray-900 text-gray-100 p-4 sm:p-8 max-w-4xl mx-auto border-4 border-red-600 shadow-lg shadow-red-600/50 bg-film-grain">
        <header className="text-center border-b-2 border-dashed border-red-600 pb-8 mb-8 relative z-10">
          <p className="text-lg tracking-wider text-red-600 text-pop">A Film By</p>
          <h1 className="font-display text-7xl sm:text-8xl text-red-600 my-[-1rem] tracking-widest animate-pulse-slow">
            {name}
          </h1>
          <p className="text-2xl tracking-wider mt-2">A TALE OF CODE AND CHAOS</p>
        </header>

        <main className="relative z-10">
          {jobs?.length > 0 && (
            <Section title="Based on a True Story">
              {jobs.map((job, index) => <ExperienceItem key={index} experience={job} />)}
            </Section>
          )}
          {skills?.length > 0 && (
            <Section title="Survival Skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => <SkillBar key={index} skill={skill} />)}
              </div>
            </Section>
          )}
          {projects?.length > 0 && (
            <Section title="Special Features">
              {projects.map((project, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <p className="mt-4 text-gray-400 text-sm">
                    <span className="text-red-600 font-bold text-pop">Built With:</span> {project.technologies.join(' • ')}
                  </p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="inline-block mt-4 px-4 py-2 bg-red-600 text-gray-900 font-bold no-underline border-2 border-red-600 transition-all duration-300 hover:bg-gray-900 hover:text-red-600">
                      Witness The Horror
                    </a>
                  )}
                </div>
              ))}
            </Section>
          )}
          {education && (
            <Section title="The Origin">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-100">{education.degree} in {education.major}</h3>
                <p className="text-xl text-red-600 text-pop">{education.university}</p>
                <div className="text-gray-400 my-3">
                  Graduated: {formatDate(education.graduationDate)}
                  <span className="mx-2 text-gray-600">|</span>
                  {education.location}
                </div>
                {education.minor && <p className="text-gray-300">Minor in {education.minor}</p>}
                {education.certificate && <p className="text-gray-300">Certificate in {education.certificate}</p>}
              </div>
            </Section>
          )}
        </main>

        <footer className="mt-12 pt-6 border-t-2 border-dashed border-red-600 text-center font-sans font-bold text-xs uppercase leading-relaxed relative z-10">
          <div className="credit-block">
            <p><span className="text-red-600 mr-4 text-pop">Location</span> {location}</p>
            <p>
              <span className="text-red-600 mr-4 text-pop">G I T H U B</span>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-100 no-underline transition-colors hover:text-red-600">
                {github.replace('https://github.com/', '')}
              </a>
            </p>
            <p>
              <span className="text-red-600 mr-4 text-pop">L I N K E D I N</span>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-100 no-underline transition-colors hover:text-red-600">
                {linkedin.replace('https://www.linkedin.com/in/', '')}
              </a>
            </p>
          </div>
          <p className="mt-8 text-lg text-red-600 tracking-wider text-pop">Rated D for Developer</p>
        </footer>
      </div>
    </>
  );
};

export default HorrorPosterResume;
