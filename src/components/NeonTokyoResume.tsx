import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Github, Linkedin, Award, Code, Briefcase, Heart, GraduationCap, ExternalLink } from 'lucide-react';
import type { PersonalInfo, Skill } from '../types';

interface CyberpunkResumeProps {
  personalInfo: PersonalInfo;
}

const NeonTokyoResume: React.FC<CyberpunkResumeProps> = ({ personalInfo }) => {
  const [glitchText, setGlitchText] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  // Handle case where personalInfo might be undefined or incomplete
  if (!personalInfo) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Loading...</h1>
          <p className="text-gray-400">Personal information not available</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const formatDate = (date: Date | string) => {
    if (typeof date === 'string') return date;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-cyan-300 font-mono text-sm">{skill.name}</span>
        <span className="text-pink-400 text-xs">{Math.round(skill.level * 100)}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/50"
          style={{ width: `${skill.level * 100}%` }}
        />
      </div>
    </div>
  );

  const GlowCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-2xl shadow-cyan-500/20 hover:shadow-pink-500/20 transition-all duration-300 hover:border-pink-500/50 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 2}s`,
                animation: 'rain 2s linear infinite'
              }}
            />
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent ${glitchText ? 'animate-pulse' : ''}`}>
            {personalInfo?.name || 'Name Not Available'}
          </h1>
          <div className="flex justify-center items-center space-x-6 text-cyan-300 mb-4">
            {personalInfo?.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="font-mono">{personalInfo.location}</span>
              </div>
            )}
            {personalInfo?.github && (
              <a href={personalInfo.github} className="flex items-center space-x-2 hover:text-pink-400 transition-colors">
                <Github className="w-4 h-4" />
                <span className="font-mono">GitHub</span>
              </a>
            )}
            {personalInfo?.linkedin && (
              <a href={personalInfo.linkedin} className="flex items-center space-x-2 hover:text-pink-400 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="font-mono">LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-full p-2">
            {['profile', 'experience', 'projects', 'skills'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-black shadow-lg'
                    : 'text-cyan-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {activeSection === 'profile' && personalInfo?.education && (
              <GlowCard>
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-cyan-300">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-pink-400">{personalInfo.education.degree} {personalInfo.education.major}</h3>
                    {personalInfo.education.minor && (
                      <p className="text-cyan-300">Minor: {personalInfo.education.minor}</p>
                    )}
                    {personalInfo.education.certificate && (
                      <p className="text-cyan-300">Certificate: {personalInfo.education.certificate}</p>
                    )}
                    <p className="text-gray-400 font-mono">{personalInfo.education.university} • {formatDate(personalInfo.education.graduationDate)}</p>
                    <p className="text-gray-400 font-mono">{personalInfo.education.location} • GPA: {personalInfo.education.gpa}</p>
                  </div>
                </div>
              </GlowCard>
            )}

            {activeSection === 'experience' && (
              <>
                {personalInfo?.jobs && personalInfo.jobs.length > 0 && (
                <GlowCard>
                  <div className="flex items-center space-x-3 mb-6">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-bold text-cyan-300">Work Experience</h2>
                  </div>
                  <div className="space-y-6">
                    {personalInfo.jobs.map((job, index) => (
                      <div key={index} className="border-l-2 border-pink-500/50 pl-6">
                        <h3 className="text-xl font-semibold text-pink-400">{job.position}</h3>
                        <p className="text-cyan-300 font-mono">{job.company} • {job.location}</p>
                        <p className="text-gray-400 text-sm font-mono mb-3">
                          {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                        </p>
                        <ul className="space-y-1 mb-3">
                          {job.descriptionBulletPoints.map((point, i) => (
                            <li key={i} className="text-gray-300 text-sm">{point}</li>
                          ))}
                        </ul>
                        {job.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-800 text-cyan-300 text-xs rounded border border-cyan-500/30 font-mono">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </GlowCard>
                )}

                {personalInfo?.volunteer && personalInfo.volunteer.length > 0 && (
                  <GlowCard>
                    <div className="flex items-center space-x-3 mb-6">
                      <Heart className="w-6 h-6 text-pink-400" />
                      <h2 className="text-2xl font-bold text-pink-300">Volunteer Experience</h2>
                    </div>
                    <div className="space-y-6">
                      {personalInfo.volunteer.map((vol, index) => (
                        <div key={index} className="border-l-2 border-cyan-500/50 pl-6">
                          <h3 className="text-xl font-semibold text-cyan-400">{vol.position}</h3>
                          <p className="text-pink-300 font-mono">
                            {vol.organization}{vol.suborganization && ` • ${vol.suborganization}`}
                          </p>
                          <p className="text-gray-400 text-sm font-mono mb-3">
                            {formatDate(vol.startDate)} - {vol.current ? 'Present' : formatDate(vol.endDate)} • {vol.location}
                          </p>
                          <ul className="space-y-1">
                            {vol.descriptionBulletPoints.map((point, i) => (
                              <li key={i} className="text-gray-300 text-sm">{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </GlowCard>
                )}
              </>
            )}

            {activeSection === 'projects' && personalInfo?.projects && personalInfo.projects.length > 0 && (
              <GlowCard>
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-cyan-300">Projects</h2>
                </div>
                <div className="grid gap-6">
                  {personalInfo.projects.map((project, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-pink-500/50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-pink-400">{project.title}</h3>
                        {project.link && (
                          <a href={project.link} className="text-cyan-400 hover:text-pink-400 transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-900 text-cyan-300 text-xs rounded border border-cyan-500/30 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            )}

            {activeSection === 'skills' && personalInfo?.skills && personalInfo.skills.length > 0 && (
              <GlowCard>
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-cyan-300">Technical Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalInfo.skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </GlowCard>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {personalInfo?.awards && personalInfo.awards.length > 0 && (
              <GlowCard>
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-yellow-300">Awards</h2>
                </div>
                <div className="space-y-4">
                  {personalInfo.awards.map((award, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="text-lg font-semibold text-yellow-400">{award.title}</h3>
                      <p className="text-cyan-300 font-mono text-sm">{award.organization}</p>
                      <p className="text-gray-400 text-sm font-mono">
                        {formatDate(award.date)} • {award.location}
                      </p>
                      {award.description && (
                        <p className="text-gray-300 text-sm mt-2">{award.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </GlowCard>
            )}

            {/* Quick Skills Preview */}
            {personalInfo?.skills && personalInfo.skills.length > 0 && (
            <GlowCard>
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Top Skills</h3>
              <div className="space-y-3">
                {personalInfo.skills
                  .sort((a, b) => b.level - a.level)
                  .slice(0, 5)
                  .map((skill, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.round(skill.level * 5)
                                ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                                : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </GlowCard>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rain {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default NeonTokyoResume;