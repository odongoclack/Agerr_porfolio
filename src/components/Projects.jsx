import React from 'react';
import { motion } from 'framer-motion';
import getStyles from '../styles/styles';

const Projects = ({ darkMode, projects }) => {
  console.log(motion);
  const styles = getStyles(darkMode);

  const projectsSection = {
    backgroundColor: darkMode ? '#2d3748' : '#f7fafc'
  };

  const projectsGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr'
    }
  };

  const projectCard = {
    borderRadius: '0.75rem',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    backgroundColor: darkMode ? '#4a5568' : '#ffffff'
  };

  const projectImageContainer = {
    position: 'relative',
    overflow: 'hidden'
  };

  const projectImage = {
    width: '100%',
    height: '12rem',
    objectFit: 'cover'
  };

  const projectCategory = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 600,
    backgroundColor: darkMode ? '#2d3748' : '#ffffff',
    color: '#3b82f6'
  };

  const projectContent = {
    padding: '1.5rem'
  };

  const projectTitle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem'
  };

  const projectDescription = {
    color: darkMode ? '#a0aec0' : '#718096',
    marginBottom: '1rem'
  };

  const projectFooter = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const projectLink = {
    color: '#3b82f6',
    fontWeight: 500,
    cursor: 'pointer'
  };

  const projectIcons = {
    display: 'flex',
    gap: '0.5rem'
  };

  const projectIcon = {
    width: '2rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    backgroundColor: darkMode ? '#4a5568' : '#f7fafc',
    cursor: 'pointer'
  };

  return (
    <section id="projects" style={{...styles.section, ...projectsSection}}>
      <div style={styles.container}>
        <motion.h2 
          style={styles.heading2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div style={projectsGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              style={projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div style={projectImageContainer}>
                <img src={project.image} alt={project.title} style={projectImage} />
                <div style={projectCategory}>
                  {project.category}
                </div>
              </div>
              <div style={projectContent}>
                <h3 style={projectTitle}>{project.title}</h3>
                <p style={projectDescription}>{project.description}</p>
                <div style={projectFooter}>
                  <motion.button 
                    style={projectLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                  <div style={projectIcons}>
                    <motion.span style={projectIcon} whileHover={{ y: -3 }}>
                      👁️
                    </motion.span>
                    <motion.span style={projectIcon} whileHover={{ y: -3 }}>
                      🔗
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          style={{textAlign: 'center', marginTop: '3rem'}}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            style={styles.secondaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;