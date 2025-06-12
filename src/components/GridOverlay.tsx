import { useTheme } from "./ThemeProvider";

const GridOverlay = () => {
  const { theme } = useTheme();
  
  const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(${theme.colors.primary}22 1px, transparent 1px),
      linear-gradient(90deg, ${theme.colors.primary}22 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    pointerEvents: 'none',
    zIndex: 1,
  };

  return <div style={styles}></div>;
};
export default GridOverlay;