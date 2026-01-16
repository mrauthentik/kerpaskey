import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    { id: 1, name: '1. NEXA EDU', placeholder: 'Educational Platform' },
    { id: 2, name: '2. GueCyber LMS', placeholder: 'GueCyber LMS Platform' },
    { id: 3, name: '3. Styleit Padi Backend', placeholder: 'Backend Architecture' },
    { id: 4, name: '4. Teaching & Training', placeholder: 'Education Programs' },
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects.
          </motion.h2>
          
          <motion.div 
            className={styles.smiley}
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ☺
          </motion.div>

          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My full case studies are<br />available on Behance!
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.projectImage}>
                {project.placeholder}
              </div>
              <motion.div 
                className={styles.projectName}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {project.name}
              </motion.div>
            </motion.div>
          ))}

          {/* My Journey Card */}
          <motion.div
            className={`${styles.projectCard} ${styles.funFactsCard}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className={styles.journeyIcon}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              🚀
            </motion.div>
            <div className={styles.funFactsText}>
              My Journey<br />2020 → 2026
            </div>
          </motion.div>
        </div>

        {/* Bottom Notes */}
        <div className={styles.bottomNotes}>
          <motion.p 
            className={styles.note}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Production-ready applications
          </motion.p>
          
          <motion.p 
            className={styles.noteRight}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            From education platforms to SaaS,<br />
            I build scalable solutions with<br />
            clean architecture and exceptional<br />
            user experiences.
          </motion.p>
          
          <motion.p 
            className={styles.noteRight2}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Full-Stack Engineer
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
