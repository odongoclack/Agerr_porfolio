import React from 'react';
import { motion } from 'framer-motion';
import getStyles from '../styles/styles';
import './About.css';

const About = ({ darkMode, skills = [] }) => {  // Add default empty array for skills
  console.log(motion);
  const styles = getStyles(darkMode);

  const skillsContainer = {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const skillHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.25rem'
  };

  const skillBar = {
    width: '100%',
    height: '0.5rem',
    backgroundColor: darkMode ? '#4a5568' : '#edf2f7',
    borderRadius: '9999px',
    overflow: 'hidden'
  };

  const skillProgress = {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: '9999px'
  };

  const educationContainer = {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: darkMode ? '#2d3748' : '#f7fafc'
  };

  const educationCard = {
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: darkMode ? '#4a5568' : '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  return (
    <section id="about" style={{...styles.section}}>
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
        
        <div className="flex-container" style={{
          display: 'flex', 
          flexDirection: 'column', 
          gap: '3rem'
        }}>
          <motion.div 
            className="half-width"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{marginBottom: '1rem', fontSize: '1.125rem'}}>
              I'm a passionate fullstack engineer with 1.5 years of experience creating modern web applications. 
              I specialize in React, TypeScript, and UI/UX design.
            </p>
            <p style={{marginBottom: '1.5rem', fontSize: '1.125rem'}}>
              My approach combines technical expertise with creative problem-solving to build intuitive and 
              performant digital experiences.
            </p>
            
            <h3 style={styles.heading3}>My Skills</h3>
            <div style={skillsContainer}>
              {Array.isArray(skills) && skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  style={{marginBottom: '0.5rem'}}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div style={skillHeader}>
                    <span style={{fontWeight: 500}}>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div style={skillBar}>
                    <motion.div 
                      style={skillProgress}
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
            className="half-width"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={educationContainer}>
              <h3 style={styles.heading3}>Education & Certifications</h3>
              
              <motion.div 
                style={educationCard}
                whileHover={{ y: -5 }}
              >
                <h4 style={{fontWeight: 600}}>BST Statistics</h4>
                <p style={{fontSize: '0.875rem', color: darkMode ? '#a0aec0' : '#718096'}}>Jomo Kenyata University, 2022</p>
              </motion.div>
              
              <motion.div 
                style={educationCard}
                whileHover={{ y: -5 }}
              >
                <h4 style={{fontWeight: 600}}>Certified Developer</h4>
                <p style={{fontSize: '0.875rem', color: darkMode ? '#a0aec0' : '#718096'}}>Web Services, 2023</p>
              </motion.div>
              
              <motion.div 
                style={{...educationCard, marginBottom: 0}}
                whileHover={{ y: -5 }}
              >
                <h4 style={{fontWeight: 600}}>UI/UX Design Specialization</h4>
                <p style={{fontSize: '0.875rem', color: darkMode ? '#a0aec0' : '#718096'}}>Graphic Design, 2022</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;