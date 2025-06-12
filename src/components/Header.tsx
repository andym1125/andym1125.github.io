import { useTheme } from "./ThemeProvider";
import ThemeSelector from "./ThemeSelector";

const Header = ({ currentPage, setCurrentPage }) => {
  const { theme } = useTheme();

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: `${theme.colors.surface}ee`,
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${theme.colors.border}`,
      zIndex: 1000,
      padding: '1rem 2rem',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      fontFamily: theme.fonts.heading,
      fontSize: '1.5rem',
      fontWeight: '700',
      color: theme.colors.primary,
      textShadow: theme.colors.glow,
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navLink: {
      color: theme.colors.text,
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      border: `1px solid transparent`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontWeight: '500',
    },
    navLinkActive: {
      border: `1px solid ${theme.colors.primary}`,
      boxShadow: theme.colors.cardGlow,
      color: theme.colors.primary,
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>M.McDOWALL</div>
        <div style={styles.navLinks}>
          <div 
            style={{
              ...styles.navLink,
              ...(currentPage === 'home' ? styles.navLinkActive : {})
            }}
            onClick={() => setCurrentPage('home')}
          >
            HOME
          </div>
          <div 
            style={{
              ...styles.navLink,
              ...(currentPage === 'projects' ? styles.navLinkActive : {})
            }}
            onClick={() => setCurrentPage('projects')}
          >
            PROJECTS
          </div>
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
};
export default Header;