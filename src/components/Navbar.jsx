import React from 'react';
import { motion } from 'framer-motion';
import getStyles from '../styles/styles';

const Navbar = ({ activeSection, darkMode, setDarkMode }) => {
  console.log(motion);
  const styles = getStyles(darkMode);

  return (
    <motion.nav 
      style={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{...styles.container, ...styles.navbarContainer}}>
        <motion.div 
          style={styles.navbarBrand}
          whileHover={{ scale: 1.1 }}
        >
          Ager.dev
        </motion.div>
        
        <div style={styles.navbarLinks}>
          {['home', 'about', 'projects', 'experience', 'contact'].map(item => (
            <motion.a
              key={item}
              href={`#${item}`}
              style={{
                ...styles.navbarLink,
                ...(activeSection === item ? styles.activeNavLink : {})
              }}
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={styles.darkModeButton}
        >
          {darkMode ? '🌙' : '☀️'}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;