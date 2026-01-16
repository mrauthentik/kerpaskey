import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ProjectDetailSection.module.css';

const ProjectDetailSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

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
            LMS Platform
          </motion.h2>

          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Designed and built a comprehensive Learning Management System for educational institutions.
            </p>
            <p>
              The platform serves thousands of students and instructors, delivering seamless learning experiences.
            </p>
            <p>
              Built with <strong>React, TypeScript, Node.js, and Supabase, the system features real-time collaboration, progress tracking, and scalable architecture.</strong>
            </p>
            <p>
              This production-grade application emphasizes performance optimization, clean code, and exceptional user experience.
            </p>
          </motion.div>

          <motion.div 
            className={styles.challengeBox}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.arrow}>→</div>
            <div className={styles.challengeText}>
              key features!
            </div>
            <p className={styles.challengeDescription}>
              Course management, real-time progress tracking, interactive assessments, and analytics dashboard.
            </p>
          </motion.div>

          {/* Bottom decorative curve */}
          <motion.svg 
            className={styles.bottomCurve}
            viewBox="0 0 300 100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <path 
              d="M 0 50 Q 150 10, 300 50" 
              stroke="#8b9dc3" 
              strokeWidth="2" 
              fill="none"
            />
          </motion.svg>
        </div>

        {/* Right Side - Phone Mockups */}
        <div className={styles.rightContent}>
          <motion.div 
            className={styles.phonesContainer}
            style={{ y: phoneY, rotate: phoneRotate }}
          >
            {/* Decorative Music Notes */}
            <motion.div 
              className={styles.musicNote}
              style={{ top: '5%', right: '10%' }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              ♪
            </motion.div>
            <motion.div 
              className={styles.musicNote}
              style={{ top: '15%', right: '5%' }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              ♫
            </motion.div>
            <motion.div 
              className={styles.musicNote}
              style={{ bottom: '30%', right: '8%' }}
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1,
              }}
            >
              ♪
            </motion.div>
            <motion.div 
              className={styles.musicNote}
              style={{ bottom: '15%', right: '15%' }}
              animate={{
                y: [0, -18, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 1.5,
              }}
            >
              ♫
            </motion.div>

            {/* Handwritten annotations */}
            <motion.div 
              className={styles.annotation}
              style={{ top: '8%', left: '5%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              Welcome
            </motion.div>

            <motion.div 
              className={styles.annotation}
              style={{ top: '25%', right: '5%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              Login
            </motion.div>

            <motion.div 
              className={styles.annotation}
              style={{ bottom: '35%', left: '8%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              Choose your choreography
            </motion.div>

            <motion.div 
              className={styles.annotation}
              style={{ bottom: '15%', right: '10%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              Statistics
            </motion.div>

            {/* Phone Mockups */}
            <div className={styles.phonesGrid}>
              {[1, 2, 3, 4].map((phone, index) => (
                <motion.div
                  key={phone}
                  className={styles.phoneMockup}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.phoneScreen}>
                    Phone {phone} Screen
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

export default ProjectDetailSection;
