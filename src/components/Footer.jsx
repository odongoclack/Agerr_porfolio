import React from "react";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  console.log(motion);
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: darkMode ? "#111827" : "#f9fafb",
      padding: "4rem 1.5rem 2rem",
      borderTop: `1px solid ${darkMode ? "#1f2937" : "#e5e7eb"}`,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    topSection: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      marginBottom: "2rem",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "1rem",
      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    },
    description: {
      color: darkMode ? "#d1d5db" : "#4b5563",
      lineHeight: "1.7",
      marginBottom: "1.5rem",
      maxWidth: "300px",
    },
    sectionTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: darkMode ? "#f3f4f6" : "#111827",
    },
    navLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    navLink: {
      color: darkMode ? "#d1d5db" : "#4b5563",
      textDecoration: "none",
      transition: "color 0.2s ease",
      display: "inline-block",
    },
    navLinkHover: {
      color: "#3b82f6",
      transform: "translateX(5px)",
    },
    socialLinks: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
    },
    socialIcon: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      backgroundColor: darkMode ? "#1f2937" : "#f3f4f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      color: darkMode ? "#d1d5db" : "#4b5563",
    },
    socialIconHover: {
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      transform: "translateY(-5px)",
    },
    divider: {
      height: "1px",
      backgroundColor: darkMode ? "#374151" : "#e5e7eb",
      margin: "1rem 0 2rem",
    },
    bottomSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    },
    copyright: {
      color: darkMode ? "#9ca3af" : "#6b7280",
      fontSize: "0.875rem",
    },
    bottomLinks: {
      display: "flex",
      gap: "1.5rem",
    },
    bottomLink: {
      color: darkMode ? "#9ca3af" : "#6b7280",
      fontSize: "0.875rem",
      textDecoration: "none",
      transition: "color 0.2s ease",
    },
    bottomLinkHover: {
      color: "#3b82f6",
    },
    scrollToTop: {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.5)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      zIndex: 100,
    },
    scrollToTopHover: {
      backgroundColor: "#2563eb",
      transform: "translateY(-5px)",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={styles.logo}>Clackson Ager</h3>
            <p style={styles.description}>
              A passionate software developer specializing in building
              exceptional digital experiences.
            </p>
            <div style={styles.socialLinks}>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                whileHover={styles.socialIconHover}
                aria-label="GitHub"
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
                aria-label="LinkedIn"
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
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={styles.sectionTitle}>Navigation</h4>
            <nav style={styles.navLinks}>
              <motion.a 
                href="#home" 
                style={styles.navLink}
                whileHover={styles.navLinkHover}
              >
                Home
              </motion.a>
              <motion.a 
                href="#about" 
                style={styles.navLink}
                whileHover={styles.navLinkHover}
              >
                About
              </motion.a>
              <motion.a 
                href="#experience" 
                style={styles.navLink}
                whileHover={styles.navLinkHover}
              >
                Experience
              </motion.a>
              <motion.a 
                href="#projects" 
                style={styles.navLink}
                whileHover={styles.navLinkHover}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                style={styles.navLink}
                whileHover={styles.navLinkHover}
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 style={styles.sectionTitle}>Contact</h4>
            <div style={styles.navLinks}>
              <p style={styles.navLink}>Nairobi, Kenya</p>
              <a 
                href="mailto:agerclackson44@gmail.com" 
                style={styles.navLink}
                onMouseOver={(e) => {
                  e.target.style.color = "#3b82f6";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = darkMode ? "#d1d5db" : "#4b5563";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                agerclacksonn44@gmail.com
              </a>
              <a 
                href="tel:+254112670912" 
                style={styles.navLink}
                onMouseOver={(e) => {
                  e.target.style.color = "#3b82f6";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = darkMode ? "#d1d5db" : "#4b5563";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                +254 112 670 912
              </a>
            </div>
          </motion.div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottomSection}>
          <motion.p 
            style={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {currentYear} Clackson Ager. All rights reserved.
          </motion.p>

          <motion.div 
            style={styles.bottomLinks}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a 
              href="#privacy" 
              style={styles.bottomLink}
              onMouseOver={(e) => e.target.style.color = "#3b82f6"}
              onMouseOut={(e) => e.target.style.color = darkMode ? "#9ca3af" : "#6b7280"}
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              style={styles.bottomLink}
              onMouseOver={(e) => e.target.style.color = "#3b82f6"}
              onMouseOut={(e) => e.target.style.color = darkMode ? "#9ca3af" : "#6b7280"}
            >
              Terms of Service
            </a>
            <a 
              href="#sitemap" 
              style={styles.bottomLink}
              onMouseOver={(e) => e.target.style.color = "#3b82f6"}
              onMouseOut={(e) => e.target.style.color = darkMode ? "#9ca3af" : "#6b7280"}
            >
              CLACKS
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={styles.scrollToTop}
        whileHover={styles.scrollToTopHover}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.div>
    </footer>
  );
};

export default Footer;