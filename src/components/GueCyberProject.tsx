import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectDetailSection.module.css';

const GueCyberProject: React.FC = () => {
  return (
    <section className={`${styles.projectDetailSection} ${styles.lightBg}`}>
      <div className={styles.container}>
        {/* Left Side - Phone Mockups */}
        <div className={styles.mockupsContainer}>
          {/* Decorative Flowers */}
          <motion.svg
            className={styles.decorativeFlower}
            style={{ top: '10%', left: '5%' }}
            width="80"
            height="80"
            viewBox="0 0 80 80"
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <path
              d="M40 20 Q 35 25, 40 30 Q 45 25, 40 20 M40 50 Q 35 55, 40 60 Q 45 55, 40 50 M20 40 Q 25 35, 30 40 Q 25 45, 20 40 M50 40 Q 55 35, 60 40 Q 55 45, 50 40 M40 40 Q 40 35, 40 40"
              stroke="#8b9dc3"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="40" r="5" fill="#8b9dc3" />
          </motion.svg>

          <motion.svg
            className={styles.decorativeFlower}
            style={{ bottom: '15%', right: '10%' }}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            initial={{ opacity: 0, rotate: 20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <path
              d="M30 15 Q 27 18, 30 21 Q 33 18, 30 15 M30 39 Q 27 42, 30 45 Q 33 42, 30 39 M15 30 Q 18 27, 21 30 Q 18 33, 15 30 M39 30 Q 42 27, 45 30 Q 42 33, 39 30"
              stroke="#8b9dc3"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="30" cy="30" r="4" fill="#8b9dc3" />
          </motion.svg>

          {/* Phone Mockups Grid */}
          <div className={styles.phoneMockupsGrid}>
            <motion.div
              className={styles.phoneMockupAngled}
              style={{ transform: 'rotate(-8deg)' }}
              initial={{ opacity: 0, y: 50, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -5 }}
            >
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreenContent}>Dashboard</div>
              </div>
            </motion.div>

            <motion.div
              className={styles.phoneMockupAngled}
              style={{ transform: 'rotate(5deg)' }}
              initial={{ opacity: 0, y: 50, rotate: 12 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, rotate: 8 }}
            >
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreenContent}>Courses</div>
              </div>
            </motion.div>

            <motion.div
              className={styles.phoneMockupAngled}
              style={{ transform: 'rotate(-3deg)' }}
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreenContent}>Progress</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Content */}
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

          {/* Handwritten Annotations with Circles */}
          <motion.div
            className={styles.annotationCircle}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <svg width="200" height="120" viewBox="0 0 200 120">
              <ellipse
                cx="100"
                cy="60"
                rx="90"
                ry="50"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className={styles.annotationText}>
              Implemented 4 different<br />screens in 2 days
            </div>
          </motion.div>

          <motion.div
            className={styles.handwrittenNote}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            My goal is to create scalable,<br />
            production-ready systems that<br />
            prioritize user experience
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
