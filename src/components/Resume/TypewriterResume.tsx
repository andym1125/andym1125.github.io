import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

// Simple Typewriter Effect Component
const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 0, 
  speed = 60, 
  onComplete 
}) => {
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

  return <span>{displayText}</span>;
};

// Header Component
const Header: React.FC<{ personalInfo: any }> = ({ personalInfo }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Format phone number in vintage style
  const formatVintagePhone = (modern: string) => {
    // Convert modern phone to vintage format
    return "MAyfair 4-7829"; // Keeping vintage style
  };

  return (
    <header className="header">
      <h1 className="name">
        <Typewriter 
          text={personalInfo.name}
          speed={80}
          onComplete={() => setShowDetails(true)}
        />
      </h1>
      {showDetails && (
        <>
          <div className="address">
            <div>
              <Typewriter 
                text={personalInfo.location}
                speed={50}
                delay={200}
              />
            </div>
            <div>
              <Typewriter 
                text={`Telephone: ${formatVintagePhone("")}`}
                speed={50}
                delay={600}
              />
            </div>
          </div>
          <div className="date">
            <Typewriter 
              text="March 15, 1947"
              speed={60}
              delay={1200}
            />
          </div>
        </>
      )}
    </header>
  );
};

// Section Component
const Section: React.FC<{ 
  title: string; 
  children: React.ReactNode;
  delay?: number;
}> = ({ title, children, delay = 0 }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className="section">
      <h2 className="section-title">
        <Typewriter 
          text={title}
          speed={70}
          delay={delay}
          onComplete={() => setShowContent(true)}
        />
      </h2>
      {showContent && (
        <div className="section-content">
          {children}
        </div>
      )}
    </section>
  );
};

// Experience Item Component
const ExperienceItem: React.FC<{ 
  job: any; 
  delay?: number;
}> = ({ job, delay = 0 }) => {
  const [showDetails, setShowDetails] = useState(false);

  const formatDateRange = (startDate: Date, endDate: Date, current: boolean) => {
    const start = startDate.getFullYear();
    const end = current ? "Present" : endDate.getFullYear();
    return `${start}-${end}`;
  };

  return (
    <div className="experience-item">
      <div className="job-line">
        <Typewriter 
          text={`${job.position} - ${job.company} (${formatDateRange(job.startDate, job.endDate, job.current)})`}
          speed={40}
          delay={delay}
          onComplete={() => setShowDetails(true)}
        />
      </div>
      {showDetails && (
        <div className="job-description">
          {job.descriptionBulletPoints.map((desc: string, index: number) => (
            <div key={index} className="description-line">
              <Typewriter 
                text={`    ${desc}`}
                speed={35}
                delay={300 + (index * 500)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Projects Section Component
const ProjectsSection: React.FC<{ 
  projects: any[]; 
  delay?: number;
}> = ({ projects, delay = 0 }) => {
  return (
    <div className="projects">
      {projects.slice(0, 3).map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-title">
            <Typewriter 
              text={project.title}
              speed={50}
              delay={delay + (index * 800)}
            />
          </div>
          <div className="project-description">
            <Typewriter 
              text={`    ${project.description}`}
              speed={35}
              delay={delay + (index * 800) + 200}
            />
          </div>
          {project.technologies.length > 0 && (
            <div className="project-tech">
              <Typewriter 
                text={`    Technologies: ${project.technologies.slice(0, 3).join(", ")}`}
                speed={30}
                delay={delay + (index * 800) + 500}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Skills Component (adapted for vintage style)
const SkillsSection: React.FC<{ 
  skills: any[]; 
  delay?: number;
}> = ({ skills, delay = 0 }) => {
  const topSkills = skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 8)
    .map(skill => skill.name);

  return (
    <div className="skills">
      <Typewriter 
        text={`Proficient in: ${topSkills.join(", ")}`}
        speed={40}
        delay={delay}
      />
    </div>
  );
};

// Main Resume Component
const TypewriterResume: React.FC<{ personalInfo: any }> = ({ personalInfo }) => {
  return (
    <div className="container">
      <div className="paper">
        <div className="ink-stains">
          <div className="ink-spot spot-1"></div>
          <div className="ink-spot spot-2"></div>
          <div className="ink-spot spot-3"></div>
          <div className="ink-spot spot-4"></div>
        </div>
        
        <Header personalInfo={personalInfo} />
        
        <Section title="OBJECTIVE" delay={2500}>
          <div className="objective">
            <Typewriter 
              text={`To secure a position as Senior ${personalInfo.jobs[0]?.position || "Engineer"} where I may utilize my extensive experience in technology and innovation to contribute to industrial growth.`}
              speed={35}
              delay={200}
            />
          </div>
        </Section>

        <Section title="EXPERIENCE" delay={4500}>
          {personalInfo.jobs.slice(0, 3).map((job: any, index: number) => (
            <ExperienceItem 
              key={index}
              job={job}
              delay={index * 1500}
            />
          ))}
        </Section>

        <Section title="EDUCATION" delay={8000}>
          <div className="education">
            <Typewriter 
              text={`${personalInfo.education.degree} ${personalInfo.education.major} - ${personalInfo.education.university}, ${personalInfo.education.graduationDate.getFullYear()}`}
              speed={45}
              delay={200}
            />
            {personalInfo.education.gpa && (
              <div style={{ marginTop: '0.5rem' }}>
                <Typewriter 
                  text={`    Grade Point Average: ${personalInfo.education.gpa.toFixed(2)}`}
                  speed={45}
                  delay={800}
                />
              </div>
            )}
          </div>
        </Section>

        {personalInfo.projects.length > 0 && (
          <Section title="NOTABLE PROJECTS" delay={9500}>
            <ProjectsSection projects={personalInfo.projects} delay={200} />
          </Section>
        )}

        {personalInfo.skills.length > 0 && (
          <Section title="TECHNICAL PROFICIENCIES" delay={11000}>
            <SkillsSection skills={personalInfo.skills} delay={200} />
          </Section>
        )}

        {personalInfo.awards.length > 0 && (
          <Section title="HONORS & RECOGNITION" delay={12500}>
            <div className="awards">
              {personalInfo.awards.slice(0, 3).map((award: any, index: number) => (
                <div key={index} className="award-item">
                  <Typewriter 
                    text={`${award.title} - ${award.organization}, ${typeof award.date === 'string' ? award.date : award.date.getFullYear()}`}
                    speed={40}
                    delay={200 + (index * 600)}
                  />
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};
export default TypewriterResume;