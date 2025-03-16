import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const projects = [/* Your project data */];
  const experiences = [/* Your experiences data */];

  useEffect(() => {

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a202c' : '#ffffff', color: darkMode ? '#ffffff' : '#2d3748' }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
