import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ darkMode }) => {
  console.log(motion)
  const projects = [
    { 
      id: 1, 
      title: 'student portal app', 
      category: 'Web Development', 
      image: '/api/studentportal.png', 
      description: 'A full-stack plattform with MERN stack' 
    },
    { 
      id: 2, 
      title: 'portfolio App', 
      category: 'UI/UX Design', 
      image: '/api/portfolio.png', 
      description: 'A full responsive portfolio website with Next.js with some dependencies' 
    },
    { 
      id: 3, 
      title: 'CRUD App', 
      category: 'mern stack proejcts', 
      image: '/api/crudapp.png', 
      description: 'An application where you can perfom CRUD operations with mern stack' 
    },
    { 
      id: 4, 
      title: 'Adverts', 
      category: 'UI/UX Design', 
      image: '/api/poster.png', 
      description: 'A job advert poster using vite/React with some dependencies' 
    }
  ];

  // Styles for the projects section
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
    projectsSection: {
      backgroundColor: darkMode ? '#1a202c' : '#f7fafc'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    projectCard: {
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      backgroundColor: darkMode ? '#2d3748' : '#ffffff'
    },
    projectImageContainer: {
      position: 'relative',
      overflow: 'hidden'
    },
    projectImage: {
      width: '100%',
      height: '12rem',
      objectFit: 'cover'
    },
    projectCategory: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: 600,
      backgroundColor: darkMode ? '#2d3748' : '#ffffff',
      color: '#3b82f6'
    },
    projectContent: {
      padding: '1.5rem'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem'
    },
    projectDescription: {
      color: darkMode ? '#a0aec0' : '#718096',
      marginBottom: '1rem'
    },
    projectFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    projectLink: {
      color: '#3b82f6',
      fontWeight: 500,
      cursor: 'pointer'
    },
    projectIcons: {
      display: 'flex',
      gap: '0.5rem'
    },
    projectIcon: {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      backgroundColor: darkMode ? '#4a5568' : '#f7fafc',
      cursor: 'pointer'
    },
    secondaryButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: 600,
      cursor: 'pointer',
      border: `1px solid ${darkMode ? '#ffffff' : '#2d3748'}`,
      backgroundColor: 'transparent',
      color: darkMode ? '#ffffff' : '#2d3748'
    }
  };

  return (
    <section id="projects" style={{...styles.section, ...styles.projectsSection}}>
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
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%'
        }}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              style={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div style={styles.projectImageContainer}>
                <img src={project.image} alt={project.title} style={styles.projectImage} />
                <div style={styles.projectCategory}>
                  {project.category}
                </div>
              </div>
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.projectFooter}>
                  <motion.button 
                    style={styles.projectLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                  <div style={styles.projectIcons}>
                    <motion.span style={styles.projectIcon} whileHover={{ y: -3 }}>
                      👁️
                    </motion.span>
                    <motion.span style={styles.projectIcon} whileHover={{ y: -3 }}>
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