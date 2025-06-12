import { useTheme } from "./ThemeProvider";

const Section = ({ title, children }) => {
  const { theme } = useTheme();

  const styles = {
    section: {
      marginBottom: '4rem',
      padding: '2rem',
      background: `${theme.colors.surface}44`,
      border: `1px solid ${theme.colors.border}44`,
      borderRadius: '8px',
      boxShadow: theme.colors.cardGlow,
      backdropFilter: 'blur(10px)',
    },
    title: {
      fontFamily: theme.fonts.heading,
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '2rem',
      color: theme.colors.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      borderBottom: `2px solid ${theme.colors.primary}`,
      paddingBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;