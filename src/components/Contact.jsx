import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
    console.log(motion)
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormStatus({ type: 'success', message: 'Message sent successfully!' });
      formRef.current.reset();
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    section: {
      padding: '6rem 1.5rem',
      backgroundColor: darkMode ? '#111827' : '#f3f4f6',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '1.125rem',
      color: darkMode ? '#d1d5db' : '#4b5563',
      marginBottom: '3rem',
      maxWidth: '600px',
      textAlign: 'center',
      margin: '0 auto 3rem',
      lineHeight: '1.7',
    },
    formContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      width: '100%',
    },
    formSection: {
      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
      padding: '2.5rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    formHeading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: darkMode ? '#f3f4f6' : '#111827',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: darkMode ? '#e5e7eb' : '#374151',
    },
    inputGroup: {
      marginBottom: '1.5rem',
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: darkMode ? '#374151' : '#f9fafb',
      color: darkMode ? '#f3f4f6' : '#111827',
      border: `1px solid ${darkMode ? '#4b5563' : '#e5e7eb'}`,
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      outline: 'none',
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: darkMode ? '#374151' : '#f9fafb',
      color: darkMode ? '#f3f4f6' : '#111827',
      border: `1px solid ${darkMode ? '#4b5563' : '#e5e7eb'}`,
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      minHeight: '150px',
      resize: 'vertical',
      outline: 'none',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    buttonHover: {
      backgroundColor: '#2563eb',
      transform: 'translateY(-2px)',
    },
    buttonDisabled: {
      backgroundColor: darkMode ? '#4b5563' : '#9ca3af',
      cursor: 'not-allowed',
      transform: 'none',
    },
    spinner: {
      width: '1.25rem',
      height: '1.25rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: '#ffffff',
      animation: 'spin 1s linear infinite',
      marginRight: '0.5rem',
    },
    contactInfo: {
      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
      padding: '2.5rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    contactInfoTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: darkMode ? '#f3f4f6' : '#111827',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1.5rem',
    },
    contactIcon: {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '1rem',
      color: '#3b82f6',
    },
    contactText: {
      fontSize: '1rem',
      color: darkMode ? '#d1d5db' : '#4b5563',
    },
    contactLink: {
      color: '#3b82f6',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    contactLinkHover: {
      color: '#2563eb',
      textDecoration: 'underline',
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
    },
    socialIcon: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      cursor: 'pointer',
    },
    socialIconHover: {
      backgroundColor: '#3b82f6',
      transform: 'translateY(-3px)',
      color: '#ffffff',
    },
    successMessage: {
      padding: '1rem',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
    },
    errorMessage: {
      padding: '1rem',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: '#ef4444',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
    },
    '@keyframes spin': {
      to: { transform: 'rotate(360deg)' }
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={styles.title}>Get In Touch</h2>
          <p style={styles.subtitle}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div style={styles.formContainer}>
          <motion.div
            style={styles.formSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ transform: 'translateY(-5px)', boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.15)' }}
          >
            <h3 style={styles.formHeading}>Message clacks</h3>
            
            {formStatus && (
              <div style={formStatus.type === 'success' ? styles.successMessage : styles.errorMessage}>
                {formStatus.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="name">Your Name</label>
                <input
                  id="name"
                  style={styles.input}
                  type="text"
                  name="name"
                  placeholder="clack ager"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="email">Your Email</label>
                <input
                  id="email"
                  style={styles.input}
                  type="email"
                  name="email"
                  placeholder="clacks@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  style={styles.textarea}
                  name="message"
                  placeholder="Hi there! I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                style={{
                  ...styles.button,
                  ...(isSubmitting ? styles.buttonDisabled : {})
                }}
                whileHover={!isSubmitting ? styles.buttonHover : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span style={styles.spinner}></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            style={styles.contactInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ transform: 'translateY(-5px)', boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.15)' }}
          >
            <h3 style={styles.contactInfoTitle}>Contact Information</h3>
            
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div style={styles.contactText}>
                <strong>Phone</strong><br />
                <a href="tel:+254112670912" style={styles.contactLink}>+254 112 670 912</a>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div style={styles.contactText}>
                <strong>Email</strong><br />
                <a href="mailto:agerclackson44@gmail.com" style={styles.contactLink}>agerclacksonn44@gmail.com</a>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div style={styles.contactText}>
                <strong>Location</strong><br />
                Nairobi, Kenya
              </div>
            </div>
            
            <div style={styles.socialIcons}>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.socialIcon}
                whileHover={styles.socialIconHover}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.socialIcon}
                whileHover={styles.socialIconHover}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </motion.a>
              
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.socialIcon}
                whileHover={styles.socialIconHover}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;