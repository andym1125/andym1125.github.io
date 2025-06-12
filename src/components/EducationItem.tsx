import { useTheme } from "./ThemeProvider";

const EducationItem = ({ degree, school, details, dateRange, location }) => {
  const { theme } = useTheme();

  const styles = {
    item: {
      marginBottom: '2rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      flexWrap: 'wrap',
    },
    degree: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: theme.colors.accent,
      marginBottom: '0.25rem',
    },
    school: {
      fontSize: '1.1rem',
      color: theme.colors.primary,
      marginBottom: '0.25rem',
    },
    details: {
      color: theme.colors.textSecondary,
      marginTop: '0.5rem',
    },
    dateLocation: {
      color: theme.colors.textSecondary,
      fontSize: '0.9rem',
      textAlign: 'right',
    },
  };

  return (
    <div style={styles.item}>
      <div style={styles.header}>
        <div>
          <div style={styles.degree}>{degree}</div>
          <div style={styles.school}>{school}</div>
          {details && <div style={styles.details}>{details}</div>}
        </div>
        <div style={styles.dateLocation}>
          <div>{dateRange}</div>
          <div>{location}</div>
        </div>
      </div>
    </div>
  );
};
export default EducationItem;