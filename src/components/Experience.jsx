import React from 'react';
import { motion } from 'framer-motion';
import getStyles from '../styles/styles';

const Experience = ({ darkMode, experiences }) => {
  console.log(motion)
  const styles = getStyles(darkMode);
  const experienceTimeline = {
    maxWidth: '48rem',
    margin: '0 auto'
  };
  const experienceItem = {
    marginBottom: '3rem',
    position: 'relative'
  };
  const timelineConnector = {
    position: 'absolute',
    left: '2rem',
    top: '2rem',
    bottom: 0,
    width: '2px',
    backgroundColor: '#3b82f6',
    zIndex: 0
  };
  const experienceContent = {
    display: 'flex',
    alignItems: 'flex-start'
  };
  const experienceNumber = {
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
  };
  const experienceCard = {
    flex: 1,
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    backgroundColor: darkMode ? '#2d3748' : '#ffffff'
  };
  const experienceHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  };
  const experienceCompany = {
    color: '#3b82f6',
    fontWeight: 500
  };
  const experiencePeriod = {
    fontSize: '0.875rem',
    color: darkMode ? '#a0aec0' : '#718096'
  };
  const experienceTitle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: darkMode ? '#e2e8f0' : '#1a202c',
    marginBottom: '0.5rem'
  };
  const experienceDescription = {
    color: darkMode ? '#cbd5e0' : '#4a5568',
    lineHeight: '1.625'
  };
  const experienceTags = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    gap: '0.5rem'
  };
  const experienceTag = {
    padding: '0.25rem 0.75rem',
    backgroundColor: darkMode ? '#4a5568' : '#edf2f7',
    color: darkMode ? '#e2e8f0' : '#2d3748',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
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
        
        <div style={experienceTimeline}>
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              style={experienceItem}
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {index < experiences.length - 1 && (
                <div style={timelineConnector}></div>
              )}
              <div style={experienceContent}>
                <div style={experienceNumber}>
                  {index + 1}
                </div>
                <motion.div 
                  style={experienceCard}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div style={experienceHeader}>
                    <div style={experienceCompany}>
                      {experience.company}
                    </div>
                    <div style={experiencePeriod}>
                      {experience.period}
                    </div>
                  </div>
                  <h3 style={experienceTitle}>{experience.title}</h3>
                  <p style={experienceDescription}>{experience.description}</p>
                  
                  {experience.achievements && (
                    <ul style={{ ...experienceDescription, paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  
                  {experience.tags && (
                    <div style={experienceTags}>
                      {experience.tags.map((tag, i) => (
                        <span key={i} style={experienceTag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;