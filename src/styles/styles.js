// Common styles used across components
const getStyles = (darkMode) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'background-color 0.3s, color 0.3s',
      width: '100%',
      margin: '0 auto',
      padding: '0 1rem'
    },
    section: {
      padding: '5rem 0'
    },
    navbar: {
      position: 'relative',
      width: '100%',
      top: '0',
      left: '0',
      zIndex: 50,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: darkMode ? '#2d3748' : '#ffffff',
      padding: '1rem 2rem',
      transform: 'background 0.3s',
    },
    navbarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    navbarBrand: {
      fontSize: '1.25rem',
      fontWeight: 'bold'
    },
    navbarLinks: {
      display: 'none',
      gap: '1.5rem',
      '@media (min-width: 768px)': {
        display: 'flex'
      }
    },
    navbarLink: {
      textTransform: 'capitalize',
      textDecoration: 'none',
      color: 'inherit'
    },
    activeNavLink: {
      color: '#3b82f6',
      fontWeight: 600
    },
    darkModeButton: {
      padding: '0.5rem',
      borderRadius: '9999px',
      backgroundColor: darkMode ? '#4a5568' : '#edf2f7'
    },
    heading1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      '@media (min-width: 768px)': {
        fontSize: '3.75rem'
      }
    },
    heading2: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '3rem',
      textAlign: 'center'
    },
    heading3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '1rem'
    },
    accentText: {
      color: '#3b82f6'
    },
    subtitle: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
      '@media (min-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    paragraph: {
      marginBottom: '2rem',
      color: darkMode ? '#a0aec0' : '#718096'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer'
    },
    secondaryButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: 600,
      cursor: 'pointer',
      border: `1px solid ${darkMode ? '#ffffff' : '#2d3748'}`,
      backgroundColor: 'transparent',
      color: 'inherit'
    },
    footer: {
      padding: '2rem 0',
      backgroundColor: darkMode ? '#1a202c' : '#f7fafc',
      textAlign: 'center'
    }
  });
  
  export default getStyles;