import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectDetailSection.module.css';

const StyleitPadiProject: React.FC = () => {
  return (
    <section className={`${styles.projectDetailSection} ${styles.lightBg}`}>
      <div className={styles.container}>
        {/* Left Side - Phone Mockups */}
        <div className={styles.mockupsContainer}>
          <motion.div 
            className={styles.screenshotsContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.screenshotsGrid}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={item}
                  className={styles.screenshot}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.screenshotPlaceholder}>
                    Backend Architecture {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.leftContent}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Styleit Padi
          </motion.h2>

          <motion.div 
            className={styles.projectMeta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.role}>Backend Developer</p>
            <p className={styles.location}>Dubai • 08/2025 – 12/2025</p>
          </motion.div>

          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              Integrated backend services using Backend-as-a-Service platforms, including 
              <strong> Supabase</strong>, leveraging Edge Functions to deliver scalable, secure 
              solutions across multiple production-grade projects.
            </p>
            <p>
              Focused on building robust, performant backend architectures with emphasis on 
              security, scalability, speed, and optimization for high-traffic applications.
            </p>
            <p>
              Implemented real-time features, authentication systems, and database optimization 
              strategies to ensure seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            className={styles.handwrittenNote}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Focus: Security, Scalability,<br />
            Speed & Optimization
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StyleitPadiProject;
