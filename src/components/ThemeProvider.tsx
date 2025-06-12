import { createContext, useContext, useState } from "react";

export interface Theme {
	  name: string;
	  colors: {
	primary: string;
	secondary: string;
	accent: string;
	background: string;
	surface: string;
	border: string;
	text: string;
	textSecondary: string;
	gradient: string;
	glow: string;
	cardGlow: string;
	  };
	  fonts: {
	heading: string;
	body: string;
	  };
}

export const themes : {[key: string]: Theme} = {
  tron: {
	name: 'Tron Legacy',
	colors: {
	  primary: '#00d4ff',
	  secondary: '#ff6600',
	  accent: '#ffffff',
	  background: '#000000',
	  surface: '#0a0a0a',
	  border: '#00d4ff',
	  text: '#ffffff',
	  textSecondary: '#b0b0b0',
	  gradient: 'linear-gradient(45deg, #000000, #001122, #000000)',
	  glow: '0 0 20px #00d4ff',
	  cardGlow: '0 0 10px rgba(0, 212, 255, 0.3)',
	},
	fonts: {
	  heading: "'Orbitron', monospace",
	  body: "'Rajdhani', sans-serif",
	}
  },
  minimal: {
	name: 'Minimal',
	colors: {
	  primary: '#2563eb',
	  secondary: '#7c3aed',
	  accent: '#1f2937',
	  background: '#ffffff',
	  surface: '#f9fafb',
	  border: '#e5e7eb',
	  text: '#111827',
	  textSecondary: '#6b7280',
	  gradient: 'linear-gradient(45deg, #f9fafb, #ffffff)',
	  glow: '0 2px 4px rgba(0, 0, 0, 0.1)',
	  cardGlow: '0 4px 6px rgba(0, 0, 0, 0.1)',
	},
	fonts: {
	  heading: "'Inter', sans-serif",
	  body: "'Inter', sans-serif",
	}
  }
};

const ThemeContext = createContext({});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('tron');
  
  const theme = themes[currentTheme];
  
  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;