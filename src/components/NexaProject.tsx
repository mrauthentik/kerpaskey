import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectDetailSection.module.css';

const NexaProject: React.FC = () => {
  return (
    <section className={`${styles.projectDetailSection} ${styles.lightBg}`}>
      <div className={styles.container}>
        {/* Left Side - Phone Mockup */}
        <div className={styles.mockupsContainer}>
          {/* Decorative Curved Lines */}
          <motion.svg
            className={styles.decorativeCurve}
            style={{ bottom: '10%', left: '5%' }}
            width="150"
            height="150"
            viewBox="0 0 150 150"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <path
              d="M 20 80 Q 60 40, 100 80 Q 140 120, 180 80"
              stroke="#8b9dc3"
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>

          {/* Laptop Mockup with iframe */}
          <motion.div
            className={styles.laptopMockup}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.laptopFrame}>
              <div className={styles.laptopScreen}>
                <iframe
                  src="https://nexaedu.ng"
                  className={styles.laptopIframe}
                  title="NEXA EDU Platform"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <div className={styles.laptopBase}></div>
            </div>
          </motion.div>

          {/* Statistics Circles */}
          <motion.div
            className={styles.statCircle}
            style={{ top: '5%', right: '15%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r="60"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className={styles.statText}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>
                students using<br />NEXA daily
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCircle}
            style={{ bottom: '20%', left: '8%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120">
              <ellipse
                cx="60"
                cy="60"
                rx="50"
                ry="45"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
                transform="rotate(15 60 60)"
              />
            </svg>
            <div className={styles.statText}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>
                improved their<br />exam scores
              </div>
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
            NEXA
          </motion.h2>

          <motion.div 
            className={styles.projectMeta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.role}>Full-Stack Developer</p>
            <p className={styles.location}>
              <a 
                href="https://nexaedu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#8b9dc3', textDecoration: 'none' }}
              >
                nexaedu.ng ↗
              </a>
            </p>
          </motion.div>

          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              An educational platform built specially for <strong>NOUN (National Open University of Nigeria)</strong> students, 
              designed to revolutionize how students prepare for their exams and engage with course materials.
            </p>
            <p>
              The platform features <strong>CBT practice with past questions</strong>, allowing students to simulate 
              real exam conditions. Students can also <strong>convert PDF materials to audio</strong> for learning 
              on the go, making education more accessible.
            </p>
            <p>
              Integrated with <strong>NEXA AI</strong>, an intelligent assistant that explains answers and options 
              to students, providing personalized feedback and helping them understand concepts better for 
              improved study outcomes.
            </p>
            <p>
              Built with <strong>React, TypeScript, Node.js, and AI integration</strong>, NEXA serves over 
              1000+ students daily, helping them achieve better exam results.
            </p>
          </motion.div>

          <motion.div
            className={styles.handwrittenNote}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            "My passion is making education<br />
            accessible and effective for<br />
            every student"
          </motion.div>

          <motion.div
            className={styles.annotationCircle}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <svg width="180" height="100" viewBox="0 0 180 100">
              <ellipse
                cx="90"
                cy="50"
                rx="80"
                ry="40"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className={styles.annotationText}>
              from our interview with<br />NOUN students...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NexaProject;
