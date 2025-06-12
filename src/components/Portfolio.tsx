import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import GridOverlay from "./GridOverlay";
import Header from "./Header";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { theme } = useTheme();

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: theme.colors.gradient,
      color: theme.colors.text,
      fontFamily: theme.fonts.body,
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      position: 'relative',
      zIndex: 2,
    },
    main: {
      paddingTop: '80px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 2rem 2rem',
    },
  };

  return (
    <div style={styles.container}>
      <GridOverlay />
      
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main style={styles.content}>
        <div style={styles.main}>
          {currentPage === 'home' ? <HomePage /> : <ProjectsPage />}
        </div>
      </main>
    </div>
  );
};
export default Portfolio;