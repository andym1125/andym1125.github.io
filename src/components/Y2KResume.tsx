import { useState, useEffect } from 'react';
import type { PersonalInfo } from '../types';


interface Y2KResumeProps {
  personalInfo: PersonalInfo;
}

const Y2KResume = ({ personalInfo } : Y2KResumeProps) => {
  const [visitorCount, setVisitorCount] = useState(42069);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const blinkTimer = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, []);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getSkillColor = (index: number): string => {
    const colors = ['#ff0080', '#00ff80', '#8000ff', '#ff8000', '#0080ff', '#ff0040', '#80ff00', '#ff4000', '#0040ff', '#ff8040'];
    return colors[index % colors.length];
  };

  const getJobIcon = (index: number): string => {
    const icons = ['🌐', '⚡', '🐛', '💻', '🚀', '🎯'];
    return icons[index % icons.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 via-blue-500 via-green-500 to-yellow-500">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 3s ease-in-out infinite'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 p-6 bg-black bg-opacity-30 border-4 border-yellow-400" style={{boxShadow: '0 0 20px #ffff00'}}>
          <div className="flex justify-center items-center mb-4">
            <span className="text-6xl animate-spin mr-4">🌟</span>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" 
                style={{fontFamily: 'Impact, fantasy', textShadow: '3px 3px 0px #000, 6px 6px 0px #ff00ff'}}>
              {personalInfo.name}
            </h1>
            <span className="text-6xl animate-spin ml-4">🌟</span>
          </div>
          
          <div className={`text-2xl font-bold ${isBlinking ? 'text-yellow-300' : 'text-red-300'} transition-colors duration-100`}
               style={{fontFamily: 'Arial Black, sans-serif'}}>
            ★☆★ ULTIMATE WEB DEVELOPER ★☆★
          </div>
          
          <div className="flex flex-wrap justify-center items-center mt-4 gap-4 text-lg">
            <div className="bg-red-600 px-3 py-1 border-2 border-white" style={{fontFamily: 'Courier New, monospace'}}>
              📍 {personalInfo.location}
            </div>
            {personalInfo.github && (
              <div className="bg-blue-600 px-3 py-1 border-2 border-white" style={{fontFamily: 'Courier New, monospace'}}>
                🐙 GitHub
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="bg-green-600 px-3 py-1 border-2 border-white" style={{fontFamily: 'Courier New, monospace'}}>
                💼 LinkedIn
              </div>
            )}
          </div>
          
          <div className="mt-4 text-sm">
            <div className="bg-purple-800 inline-block px-4 py-2 border border-white" style={{fontFamily: 'Times New Roman, serif'}}>
              👀 Visitor #{visitorCount.toLocaleString()} | 🕐 {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Animated Banner */}
        <div className="mb-8 p-4 bg-gradient-to-r from-red-500 to-blue-500 border-4 border-yellow-300 relative overflow-hidden">
          <div className="text-3xl font-bold text-center text-white animate-bounce" style={{fontFamily: 'Trebuchet MS, sans-serif', textShadow: '2px 2px 0px #000, 4px 4px 0px #00ff00'}}>
            🔥🔥🔥 WELCOME TO MY CYBER RESUME 🔥🔥🔥
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="text-8xl animate-ping">💻</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 border-4 border-cyan-400" 
               style={{boxShadow: '0 0 15px #00ffff'}}>
            <h2 className="text-4xl font-bold mb-4 text-yellow-300 text-center" style={{fontFamily: 'Papyrus, fantasy', textShadow: '2px 2px 4px #000, 4px 4px 8px #ff00ff'}}>
              🎯 ABOUT ME 🎯
            </h2>
            <div className="text-lg space-y-3">
              <p className="bg-black bg-opacity-50 p-3 border-2 border-green-400" style={{fontFamily: 'Lucida Console, monospace'}}>
                {    "Greetings, fellow netizens! I'm Chad, your friendly neighborhood cyber-wizard! I create websites that are SO cool, they make Netscape Navigator crash from pure awesomeness! Master of HTML tables, animated GIFs, and <blink> tags (RIP)!"
}
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gradient-to-br from-green-800 to-blue-800 p-6 border-4 border-yellow-400"
               style={{boxShadow: '0 0 15px #ffff00'}}>
            <h2 className="text-4xl font-bold mb-4 text-cyan-300 text-center" style={{fontFamily: 'Copperplate, fantasy', textShadow: '2px 2px 4px #000, 4px 4px 8px #00ff00'}}>
              💪 SKILLS 💪
            </h2>
            <div className="space-y-4">
              {personalInfo.skills.map((skill, index) => (
                <div key={index} className="bg-black bg-opacity-50 p-3 border-2 border-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white" style={{fontFamily: 'Arial Black, sans-serif'}}>{skill.name}</span>
                    <span className="text-yellow-300 font-bold" style={{fontFamily: 'Courier New, monospace'}}>{Math.round(skill.level * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-4 border-2 border-gray-600">
                    <div 
                      className="h-full transition-all duration-1000"
                      style={{
                        width: `${skill.level * 100}%`,
                        backgroundColor: getSkillColor(index),
                        boxShadow: `0 0 10px ${getSkillColor(index)}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8 bg-gradient-to-br from-red-800 to-orange-800 p-6 border-4 border-lime-400"
             style={{boxShadow: '0 0 15px #00ff00'}}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 text-center" style={{fontFamily: 'Chiller, fantasy', textShadow: '2px 2px 4px #000, 4px 4px 8px #ff0000'}}>
            💼 WORK EXPERIENCE 💼
          </h2>
          <div className="space-y-6">
            {personalInfo.jobs.map((job, index) => (
              <div key={index} className="bg-black bg-opacity-60 p-4 border-4 border-purple-400 hover:border-yellow-400 transition-colors">
                <div className="flex items-center mb-2">
                  <span className="text-4xl mr-3 animate-bounce">{getJobIcon(index)}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300" style={{fontFamily: 'Wide Latin, fantasy'}}>{job.position}</h3>
                    <p className="text-xl text-yellow-300" style={{fontFamily: 'Times New Roman, serif'}}>
                      {job.company} | {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                    </p>
                    <p className="text-lg text-pink-300" style={{fontFamily: 'Arial, sans-serif'}}>{job.location}</p>
                  </div>
                </div>
                {job.descriptionBulletPoints.map((point, pointIndex) => (
                  <p key={pointIndex} className="text-lg text-white bg-purple-900 bg-opacity-50 p-3 mb-2 border-2 border-pink-400" style={{fontFamily: 'Georgia, serif'}}>
                    • {point}
                  </p>
                ))}
                <div className="mt-2">
                  <span className="text-sm text-cyan-200" style={{fontFamily: 'Courier New, monospace'}}>
                    🛠️ Technologies: {job.technologies.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        {personalInfo.projects.length > 0 && (
          <div className="mt-8 bg-gradient-to-br from-indigo-800 to-cyan-800 p-6 border-4 border-orange-400"
               style={{boxShadow: '0 0 15px #ff8000'}}>
            <h2 className="text-4xl font-bold mb-6 text-pink-300 text-center" style={{fontFamily: 'Broadway, fantasy', textShadow: '2px 2px 4px #000, 4px 4px 8px #0080ff'}}>
              🚀 EPIC PROJECTS 🚀
            </h2>
            <div className="space-y-6">
              {personalInfo.projects.map((project, index) => (
                <div key={index} className="bg-black bg-opacity-60 p-4 border-4 border-green-400">
                  <div className="flex items-center mb-2">
                    <span className="text-4xl mr-3">💾</span>
                    <h3 className="text-2xl font-bold text-lime-300" style={{fontFamily: 'Stencil, fantasy'}}>{project.title}</h3>
                  </div>
                  <p className="text-lg text-white bg-blue-900 bg-opacity-50 p-3 border-2 border-cyan-400 mb-2" style={{fontFamily: 'Tahoma, sans-serif'}}>
                    {project.description}
                  </p>
                  <div className="text-sm text-yellow-200" style={{fontFamily: 'Courier New, monospace'}}>
                    ⚙️ Built with: {project.technologies.join(', ')}
                  </div>
                  {project.link && (
                    <div className="mt-2">
                      <span className="bg-red-600 px-3 py-1 border-2 border-white text-sm" style={{fontFamily: 'Impact, fantasy'}}>
                        🔗 VIEW PROJECT
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards Section */}
        {personalInfo.awards.length > 0 && (
          <div className="mt-8 bg-gradient-to-br from-yellow-800 to-red-800 p-6 border-4 border-purple-400"
               style={{boxShadow: '0 0 15px #8000ff'}}>
            <h2 className="text-4xl font-bold mb-6 text-lime-300 text-center" style={{fontFamily: 'Old English Text MT, fantasy', textShadow: '2px 2px 4px #000, 4px 4px 8px #ffff00'}}>
              🏆 AWESOME AWARDS 🏆
            </h2>
            <div className="space-y-4">
              {personalInfo.awards.map((award, index) => (
                <div key={index} className="bg-black bg-opacity-60 p-4 border-4 border-gold">
                  <div className="flex items-center mb-2">
                    <span className="text-4xl mr-3">🥇</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gold" style={{fontFamily: 'Castellar, fantasy'}}>{award.title}</h3>
                      <p className="text-lg text-yellow-300" style={{fontFamily: 'Times New Roman, serif'}}>
                        {award.organization} | {typeof award.date === 'string' ? award.date : formatDate(award.date)}
                      </p>
                    </div>
                  </div>
                  <p className="text-white bg-yellow-900 bg-opacity-50 p-3 border-2 border-yellow-400" style={{fontFamily: 'Georgia, serif'}}>
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        <div className="mt-8 bg-gradient-to-br from-teal-800 to-green-800 p-6 border-4 border-pink-400"
             style={{boxShadow: '0 0 15px #ff0080'}}>
          <h2 className="text-4xl font-bold mb-6 text-orange-300 text-center" style={{fontFamily: 'Blackletter, fantasy', textShadow: '2px 2px 4px #000, 4px 4px 8px #00ffff'}}>
            🎓 EDUCATION 🎓
          </h2>
          <div className="bg-black bg-opacity-60 p-4 border-4 border-cyan-400">
            <div className="flex items-center mb-2">
              <span className="text-4xl mr-3">📚</span>
              <div>
                <h3 className="text-2xl font-bold text-cyan-300" style={{fontFamily: 'Rockwell, serif'}}>
                  {personalInfo.education.degree} {personalInfo.education.major}
                </h3>
                <p className="text-xl text-yellow-300" style={{fontFamily: 'Times New Roman, serif'}}>
                  {personalInfo.education.university} | {formatDate(personalInfo.education.graduationDate)}
                </p>
                <p className="text-lg text-pink-300" style={{fontFamily: 'Arial, sans-serif'}}>
                  Minor: {personalInfo.education.minor} | Certificate: {personalInfo.education.certificate}
                </p>
                <p className="text-lg text-lime-300" style={{fontFamily: 'Courier New, monospace'}}>
                  GPA: {personalInfo.education.gpa.toFixed(1)} | {personalInfo.education.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center p-6 bg-gradient-to-r from-indigo-800 to-purple-800 border-4 border-rainbow">
          <div className="text-2xl font-bold mb-4 text-yellow-300" style={{fontFamily: 'Algerian, fantasy', textShadow: '3px 3px 0px #000, 6px 6px 0px #ff00ff'}}>
            🌈 HIRE ME AND MAKE YOUR WEBSITE TOTALLY RADICAL! 🌈
          </div>
          <div className="flex justify-center space-x-4 text-lg">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 border-4 border-white font-bold transform hover:scale-110 transition-all" style={{fontFamily: 'Impact, fantasy'}}>
              📧 EMAIL ME!
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 border-4 border-white font-bold transform hover:scale-110 transition-all" style={{fontFamily: 'Impact, fantasy'}}>
              💾 DOWNLOAD RESUME
            </button>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 border-4 border-white font-bold transform hover:scale-110 transition-all" style={{fontFamily: 'Impact, fantasy'}}>
              🚀 VIEW PORTFOLIO
            </button>
          </div>
          <div className="mt-4 text-sm text-cyan-300" style={{fontFamily: 'MS Sans Serif, sans-serif'}}>
            © 2003 {personalInfo.name} | Best viewed in Internet Explorer 6.0 | 1024x768 resolution
          </div>
          <div className="mt-2 text-xs text-pink-300 animate-bounce" style={{fontFamily: 'Wingdings, fantasy'}}>
            ⚠️ WARNING: This website may cause excessive awesomeness ⚠️
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .border-rainbow {
          border-image: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1;
        }

        .text-gold {
          color: #ffd700;
        }

        .border-gold {
          border-color: #ffd700;
        }
      `}</style>
    </div>
  );
};
export default Y2KResume;