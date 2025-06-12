import { useTheme } from "./ThemeProvider";

const Hero = ({ title, subtitle }) => {
  const { theme } = useTheme();

  const styles = {
    hero: {
      textAlign: 'center',
      padding: '4rem 0',
      marginBottom: '4rem',
    },
    title: {
      fontFamily: theme.fonts.heading,
      fontSize: '3.5rem',
      fontWeight: '900',
      marginBottom: '1rem',
      color: theme.colors.primary,
      textShadow: theme.colors.glow,
      letterSpacing: '2px',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: theme.colors.textSecondary,
      marginBottom: '2rem',
      fontWeight: '300',
    },
  };

  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
export default Hero;