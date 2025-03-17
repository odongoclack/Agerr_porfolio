import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ darkMode }) => {
  console.log(motion)
  
  
  const experiences = [
    { 
      position: 'senior Frontend Developer', 
      company: 'Tech Expo', 
      period: '2023 - Present',
      description: 'Leading the frontend team in developing cutting-edge web applications'
    },
    { 
      position: 'UI/UX Designer', 
      company: 'Designcamp', 
      period: '2022 - 2024',
      description: 'Created user-centered designs for various web and mobile platforms'
    },
    { 
      position: 'Junior Developer', 
      company: 'Tech map', 
      period: '2023 - 2024',
      description: 'Worked on full-stack development for early-stage startups'
    }
  ];

  // Styles
  const styles = {
    // All your styles remain the same
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
    experienceTimeline: {
      maxWidth: '48rem',
      margin: '0 auto'
    },
    experienceItem: {
      marginBottom: '3rem',
      position: 'relative'
    },
    timelineConnector: {
      position: 'absolute',
      left: '2rem',
      top: '2rem',
      bottom: 0,
      width: '2px',
      backgroundColor: '#3b82f6',
      zIndex: 0
    },
    experienceContent: {
      display: 'flex',
      alignItems: 'flex-start'
    },
    experienceNumber: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      width: '4rem',
      height: '4rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginRight: '1.5rem',
      zIndex: 10
    },
    experienceCard: {
      flex: 1,
      padding: '1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: darkMode ? '#2d3748' : '#ffffff'
    },
    experienceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    experienceCompany: {
      color: '#3b82f6',
      fontWeight: 500
    },
    experiencePeriod: {
      fontSize: '0.875rem',
      color: darkMode ? '#a0aec0' : '#718096'
    }
  };

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <motion.h2 
          style={styles.heading2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div style={styles.experienceTimeline}>
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              style={styles.experienceItem}
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {index < experiences.length - 1 && <div style={styles.timelineConnector}></div>}
              <div style={styles.experienceContent}>
                <div style={styles.experienceNumber}>{index + 1}</div>
                <div style={styles.experienceCard}>
                  <div style={styles.experienceHeader}>
                    <h4 style={styles.experienceCompany}>{experience.company}</h4>
                    <span style={styles.experiencePeriod}>{experience.period}</span>
                  </div>
                  <h3 style={{fontWeight: 600, marginBottom: '0.5rem'}}>{experience.position}</h3>
                  <p>{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;