import React from 'react';
import { motion } from 'framer-motion';
import styles from './JourneySection.module.css';

const JourneySection: React.FC = () => {
  const journeyMilestones = [
    { year: '2020', title: 'HTML & CSS', description: 'Started my coding journey with web fundamentals' },
    { year: '2021', title: 'JavaScript', description: 'Dove into interactive programming' },
    { year: '2022', title: 'React & Node.js', description: 'Became a full-stack developer' },
    { year: '2023', title: 'Teaching & Mentoring', description: 'Started teaching at Cisco Netacad' },
    { year: '2024', title: 'Production Apps', description: 'Built scalable LMS platforms' },
    { year: '2025', title: 'Backend Specialist', description: 'Mastered BaaS & Edge Functions' },
    { year: '2026', title: 'Full-Stack Engineer', description: 'Building production-ready systems' },
  ];

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        {/* Left Side - Phone Mockup */}
        <div className={styles.phoneContainer}>
          <motion.div
            className={styles.phoneMockup}
            initial={{ opacity: 0, rotate: -5, y: 50 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <div className={styles.profileIcon}>👨‍💻</div>
                  <div className={styles.profileName}>uchenna_umoke</div>
                </div>
                <div className={styles.timelineGrid}>
                  {journeyMilestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className={styles.timelineItem}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <div className={styles.yearBadge}>{milestone.year}</div>
                      <div className={styles.milestoneTitle}>{milestone.title}</div>
                    </motion.div>
                  ))}
                </div>
                <div className={styles.phoneFooter}>
                  <span>📷</span>
                  <span>♪</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Doodles */}
          <motion.svg
            className={styles.doodleArrow}
            style={{ top: '20%', left: '-10%' }}
            width="100"
            height="80"
            viewBox="0 0 100 80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <path
              d="M 10 40 Q 30 20, 60 40 L 55 35 M 60 40 L 55 45"
              stroke="#8b9dc3"
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>

          <motion.div
            className={styles.doodleText}
            style={{ top: '15%', left: '-15%' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            I painted my<br />new journey :D
          </motion.div>
        </div>

        {/* Right Side - Journey Content */}
        <div className={styles.contentContainer}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Journey
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From HTML to Full-Stack Engineer
          </motion.p>

          {/* Journey Timeline */}
          <div className={styles.timeline}>
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={styles.milestoneCard}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(139, 157, 195, 0.1)' }}
              >
                <div className={styles.milestoneYear}>{milestone.year}</div>
                <div className={styles.milestoneContent}>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hand-drawn Doodles */}
          <div className={styles.doodlesContainer}>
            {/* Code Icon */}
            <motion.svg
              className={styles.doodle}
              style={{ top: '10%', right: '5%' }}
              width="60"
              height="60"
              viewBox="0 0 60 60"
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <path
                d="M 15 30 L 25 20 M 15 30 L 25 40 M 45 30 L 35 20 M 45 30 L 35 40"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
              />
            </motion.svg>

            {/* Coffee Cup */}
            <motion.svg
              className={styles.doodle}
              style={{ top: '30%', right: '2%' }}
              width="50"
              height="60"
              viewBox="0 0 50 60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <rect x="10" y="20" width="30" height="30" rx="3" stroke="#8b9dc3" strokeWidth="2" fill="none" />
              <path d="M 15 20 Q 25 10, 35 20" stroke="#8b9dc3" strokeWidth="2" fill="none" />
              <line x1="40" y1="30" x2="45" y2="30" stroke="#8b9dc3" strokeWidth="2" />
              <line x1="40" y1="35" x2="45" y2="35" stroke="#8b9dc3" strokeWidth="2" />
            </motion.svg>

            <motion.div
              className={styles.doodleNote}
              style={{ top: '25%', right: '8%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              lots of coffee ☕
            </motion.div>

            {/* Laptop */}
            <motion.svg
              className={styles.doodle}
              style={{ bottom: '15%', right: '5%' }}
              width="80"
              height="60"
              viewBox="0 0 80 60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <rect x="15" y="10" width="50" height="30" rx="2" stroke="#8b9dc3" strokeWidth="2" fill="none" />
              <line x1="10" y1="40" x2="70" y2="40" stroke="#8b9dc3" strokeWidth="2" />
              <rect x="35" y="35" width="10" height="5" fill="#8b9dc3" />
            </motion.svg>

            <motion.div
              className={styles.doodleNote}
              style={{ bottom: '10%', right: '10%' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
            >
              I really love<br />to code
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
