import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  console.log(motion);
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'MERN stack', level: 75 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'python', level: 70 }
  ];

  // Styles
  const styles = {
    section: {
      padding: '5rem 0'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'background-color 0.3s, color 0.3s',
      width: '100%',
      margin: '0 auto',
      padding: '0 1rem'
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
    skillsContainer: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.25rem'
    },
    skillBar: {
      width: '100%',
      height: '0.5rem',
      backgroundColor: darkMode ? '#4a5568' : '#edf2f7',
      borderRadius: '9999px',
      overflow: 'hidden'
    },
    skillProgress: {
      height: '100%',
      backgroundColor: '#3b82f6',
      borderRadius: '9999px'
    },
    educationContainer: {
      padding: '1.5rem',
      borderRadius: '0.75rem',
      backgroundColor: darkMode ? '#2d3748' : '#f7fafc'
    },
    educationCard: {
      marginBottom: '1rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: darkMode ? '#4a5568' : '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      width: '100%'
    },
    column: {
      width: '100%'
    },
    paragraph: {
      marginBottom: '1rem',
      fontSize: '1.125rem'
    },
    lastParagraph: {
      marginBottom: '1.5rem',
      fontSize: '1.125rem'
    },
    skillItem: {
      marginBottom: '0.5rem'
    },
    degreeTitle: {
      fontWeight: 600
    },
    degreeInfo: {
      fontSize: '0.875rem',
      color: '#718096'
    },
    darkDegreeInfo: {
      fontSize: '0.875rem',
      color: '#a0aec0'
    }
  };

  // Use window.matchMedia for responsive styles
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <motion.h2 
          style={styles.heading2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div style={{
          ...styles.contentWrapper,
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <motion.div 
            style={{
              ...styles.column,
              width: isMobile ? '100%' : '50%'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={styles.paragraph}>
              I'm a passionate fullstack engineer with 1.5 years of experience creating modern web applications. 
              I specialize in React, TypeScript, and UI/UX design.
            </p>
            <p style={styles.lastParagraph}>
              My approach combines technical expertise with creative problem-solving to build intuitive and 
              performant digital experiences.
            </p>
            
            <h3 style={styles.heading3}>My Skills</h3>
            <div style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  style={styles.skillItem}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div style={styles.skillHeader}>
                    <span style={{fontWeight: 500}}>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div style={styles.skillBar}>
                    <motion.div 
                      style={styles.skillProgress}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            style={{
              ...styles.column,
              width: isMobile ? '100%' : '50%'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.educationContainer}>
              <h3 style={styles.heading3}>Education & Certifications</h3>
              
              <motion.div 
                style={styles.educationCard}
                whileHover={{ y: -5 }}
              >
                <h4 style={styles.degreeTitle}>BST Statistics</h4>
                <p style={darkMode ? styles.darkDegreeInfo : styles.degreeInfo}>Jomo Kenyata University, 2023</p>
              </motion.div>
              
              <motion.div 
                style={styles.educationCard}
                whileHover={{ y: -5 }}
              >
                <h4 style={styles.degreeTitle}>Certified Developer</h4>
                <p style={darkMode ? styles.darkDegreeInfo : styles.degreeInfo}>Web Services, 2023</p>
              </motion.div>
              
              <motion.div 
                style={{...styles.educationCard, marginBottom: 0}}
                whileHover={{ y: -5 }}
              >
                <h4 style={styles.degreeTitle}>UI/UX Design Specialization</h4>
                <p style={darkMode ? styles.darkDegreeInfo : styles.degreeInfo}>Graphic Design, 2022</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;