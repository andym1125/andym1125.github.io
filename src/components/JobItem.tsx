import { useTheme } from "./ThemeProvider";

const JobItem = ({ title, company, dateRange, location, bulletPoints, isLast = false }) => {
  const { theme } = useTheme();

  const styles = {
    item: {
      marginBottom: '2rem',
      paddingBottom: isLast ? '0' : '2rem',
      borderBottom: isLast ? 'none' : `1px solid ${theme.colors.border}22`,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: theme.colors.accent,
      marginBottom: '0.25rem',
    },
    company: {
      fontSize: '1.1rem',
      color: theme.colors.primary,
      marginBottom: '0.25rem',
    },
    dateLocation: {
      color: theme.colors.textSecondary,
      fontSize: '0.9rem',
      textAlign: 'right',
    },
    bulletPoints: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    bulletPoint: {
      marginBottom: '0.75rem',
      paddingLeft: '1rem',
      position: 'relative',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.item}>
      <div style={styles.header}>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.company}>{company}</div>
        </div>
        <div style={styles.dateLocation}>
          <div>{dateRange}</div>
          <div>{location}</div>
        </div>
      </div>
      {bulletPoints && (
        <ul style={styles.bulletPoints}>
          {bulletPoints.map((point, index) => (
            <li key={index} style={styles.bulletPoint}>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default JobItem;