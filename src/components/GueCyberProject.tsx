import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Gauge, Users, Shield } from 'lucide-react';
import styles from './ProjectDetailSection.module.css';

const GueCyberProject: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className={styles.projectDetailSection}>
      <div className={styles.container}>
        {/* Left Side - Content */}
        <div className={styles.leftContent}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GueCyber LMS
          </motion.h2>

          <motion.div 
            className={styles.projectMeta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.role}>Fullstack Developer</p>
            <p className={styles.location}>Belgium • 2023 – 2025</p>
          </motion.div>

          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              Designed and built scalable, pixel-perfect web applications and learning management 
              systems (LMS) for educational institutions and corporate training programs.
            </p>
            <p>
              The platform serves thousands of students and instructors across multiple organizations, 
              delivering seamless learning experiences with real-time collaboration and progress tracking.
            </p>
            <p>
              Built with <strong>React, TypeScript, Node.js, and modern BaaS platforms</strong>, the system 
              emphasizes performance optimization, clean architecture, and exceptional user experience.
            </p>
          </motion.div>

          <motion.div 
            className={styles.challengeBox}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.arrow}>→</div>
            <div className={styles.challengeText}>
              key achievements
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <Layout size={20} />
                <span>Pixel-perfect UI implementation</span>
              </div>
              <div className={styles.feature}>
                <Gauge size={20} />
                <span>Performance optimization</span>
              </div>
              <div className={styles.feature}>
                <Users size={20} />
                <span>Multi-user collaboration</span>
              </div>
              <div className={styles.feature}>
                <Shield size={20} />
                <span>Clean architecture</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Screenshots */}
        <div className={styles.rightContent}>
          <motion.div 
            className={styles.screenshotsContainer}
            style={{ y: imageY }}
          >
            <div className={styles.screenshotsGrid}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={item}
                  className={styles.screenshot}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.screenshotPlaceholder}>
                    LMS Screenshot {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GueCyberProject;
