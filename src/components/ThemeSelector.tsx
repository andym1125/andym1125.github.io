import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const ThemeSelector = () => {
  const { theme, currentTheme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    container: {
      position: 'relative',
    },
    button: {
      background: 'transparent',
      border: `1px solid ${theme.colors.border}`,
      color: theme.colors.text,
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      background: theme.colors.surface,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: '4px',
      minWidth: '150px',
      boxShadow: theme.colors.cardGlow,
      zIndex: 1001,
    },
    option: {
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      borderBottom: `1px solid ${theme.colors.border}22`,
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme.name}
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div style={styles.dropdown}>
          {Object.entries(themes).map(([key, themeOption]) => (
            <div
              key={key}
              style={{
                ...styles.option,
                backgroundColor: currentTheme === key ? `${theme.colors.primary}22` : 'transparent',
              }}
              onClick={() => {
                changeTheme(key);
                setIsOpen(false);
              }}
            >
              {themeOption.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ThemeSelector;