import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, BookOpen, Users } from 'lucide-react';
import styles from './ProjectDetailSection.module.css';

const TeachingProject: React.FC = () => {
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
            Teaching & Training
          </motion.h2>

          <motion.div 
            className={styles.projectMeta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.role}>Software Instructor & Licensed Instructor</p>
            <p className={styles.location}>Clique Software • Cisco Netacad • Nigeria</p>
          </motion.div>

          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              <strong>Clique Software and More (10/2024 – 09/2025)</strong><br />
              Delivered end-to-end full-stack web development training, covering HTML, CSS, 
              JavaScript, Node.js, and SQL, with an emphasis on hands-on projects, clean code 
              practices, and real-world application development.
            </p>
            <p>
              <strong>Cisco Netacad (06/2022 – 06/2024)</strong><br />
              Delivered hands-on training in Web Development, Cybersecurity, and Internet of 
              Things (IoT), equipping students with practical, industry-relevant technical skills 
              and foundational knowledge aligned with global standards.
            </p>
            <p>
              My teaching experience has strengthened my engineering approach: I write clear, 
              maintainable code and communicate technical concepts effectively.
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
              teaching expertise
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <Code size={20} />
                <span>Full-stack development</span>
              </div>
              <div className={styles.feature}>
                <GraduationCap size={20} />
                <span>Industry-aligned curriculum</span>
              </div>
              <div className={styles.feature}>
                <BookOpen size={20} />
                <span>Hands-on projects</span>
              </div>
              <div className={styles.feature}>
                <Users size={20} />
                <span>Mentorship & guidance</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Illustrations */}
        <div className={styles.rightContent}>
          <motion.div 
            className={styles.screenshotsContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.screenshotsGrid}>
              {[
                'HTML/CSS/JS',
                'Node.js & SQL',
                'Cybersecurity',
                'IoT Development'
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  className={styles.screenshot}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.screenshotPlaceholder}>
                    {topic}
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

export default TeachingProject;
