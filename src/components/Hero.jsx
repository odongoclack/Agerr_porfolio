import React from 'react';
import { motion } from 'framer-motion';
import getStyles from '../styles/styles';
import { pageVariants } from '../data/portfolioData';

const Hero = ({ darkMode }) => {
  console.log(motion)
  const styles = getStyles(darkMode);

  const heroSection = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '4rem'
  };

  const heroContainer = {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row'
    }
  };

  const heroContent = {
    '@media (min-width: 768px)': {
      width: '50%'
    }
  };

  const imageContainer = {
    marginBottom: '2.5rem',
    '@media (min-width: 768px)': {
      width: '50%',
      marginBottom: 0
    }
  };

  const profileImageContainer = {
    position: 'relative'
  };

  const profileImage = {
    width: '16rem',
    height: '16rem',
    borderRadius: '9999px',
    overflow: 'hidden',
    margin: '0 auto',
    border: '4px solid #3b82f6',
    '@media (min-width: 768px)': {
      width: '20rem',
      height: '20rem'
    }
  };

  const profileImageEmoji = {
    position: 'absolute',
    bottom: '-1rem',
    right: '-1rem',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '1rem',
    borderRadius: '9999px',
    fontSize: '1.5rem'
  };

  return (
    <section id="home" style={heroSection}>
      <div style={{...styles.container, ...heroContainer}}>
        <motion.div 
          style={heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            style={styles.heading1}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Hi, I'm <span style={styles.accentText}>CLACKSON</span> 
          </motion.h1>
          <motion.p 
            style={styles.subtitle}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ delay: 0.2 }}
          >
            Fullstack Engineer & UI/UX Designer
          </motion.p>
          <motion.p 
            style={styles.paragraph}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ delay: 0.3 }}
          >
            Creating beautiful and functional web experiences with modern technologies.
          </motion.p>
          <motion.div 
            style={styles.buttonContainer}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              style={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.button>
            <motion.button 
              style={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          style={imageContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={profileImageContainer}>
            <motion.div 
              style={profileImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/api/clacks.jpg" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </motion.div>
            <motion.div 
              style={profileImageEmoji}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span style={{fontSize: '1.5rem'}}>👋</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;