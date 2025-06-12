import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ProjectCard = ({ title, description, tech, githubUrl, demoUrl }) => {
  const { theme } = useTheme();

  const styles = {
    card: {
      background: `${theme.colors.surface}66`,
      border: `1px solid ${theme.colors.border}44`,
      borderRadius: '8px',
      padding: '2rem',
      transition: 'all 0.3s ease',
    },
    title: {
      fontFamily: theme.fonts.heading,
      fontSize: '1.4rem',
      fontWeight: '600',
      color: theme.colors.primary,
      marginBottom: '1rem',
    },
    description: {
      color: theme.colors.textSecondary,
      marginBottom: '1.5rem',
      lineHeight: '1.6',
    },
    techStack: {
      marginBottom: '1.5rem',
    },
    techTag: {
      display: 'inline-block',
      background: `${theme.colors.primary}22`,
      color: theme.colors.primary,
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.8rem',
      marginRight: '0.5rem',
      marginBottom: '0.5rem',
      border: `1px solid ${theme.colors.primary}44`,
    },
    links: {
      display: 'flex',
      gap: '1rem',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: theme.colors.primary,
      textDecoration: 'none',
      fontSize: '0.9rem',
      padding: '0.5rem 1rem',
      border: `1px solid ${theme.colors.primary}66`,
      borderRadius: '4px',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <div style={styles.techStack}>
        {tech.map((technology) => (
          <span key={technology} style={styles.techTag}>
            {technology}
          </span>
        ))}
      </div>
      <div style={styles.links}>
        <a href={githubUrl} style={styles.link}>
          <Github size={16} />
          Code
        </a>
        <a href={demoUrl} style={styles.link}>
          <ExternalLink size={16} />
          Demo
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;