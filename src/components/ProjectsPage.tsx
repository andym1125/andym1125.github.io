import Hero from "./Hero";
import ProjectCard from "./ProjectsCard";
import { useTheme } from "./ThemeProvider";

const ProjectsPage = () => {
  const { theme } = useTheme();

  const projects = [
    {
      id: 'blockchain-explorer',
      title: 'Cosmos Blockchain Explorer',
      description: 'Advanced blockchain search and analysis tool built with Go, featuring real-time transaction monitoring and comprehensive network statistics.',
      tech: ['Go', 'gRPC', 'REST API', 'Cosmos SDK'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: 'invoice-system',
      title: 'Real-time Invoice Decisioning',
      description: 'Event-sourced CQRS system for automated invoice processing with 10% improvement in code coverage and enhanced reliability.',
      tech: ['C#', '.NET', 'Kafka', 'Event Sourcing'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: 'hackunt-platform',
      title: 'HackUNT Event Platform',
      description: 'Full-stack platform managing 200+ participants and $20k in sponsorships for competitive programming events.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      githubUrl: '#',
      demoUrl: '#'
    }
  ];

  const styles = {
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
  };

  return (
    <div>
      <Hero 
        title="PROJECTS" 
        subtitle="Selected Technical Work" 
      />
      
      <div style={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;