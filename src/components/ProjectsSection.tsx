import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    { id: 1, name: '1.Danc.r', placeholder: 'Project 1 Image' },
    { id: 2, name: '2. V-care', placeholder: 'Project 2 Image' },
    { id: 3, name: '3. Redesign', placeholder: 'Project 3 Image' },
    { id: 4, name: '4. Slowe', placeholder: 'Project 4 Image' },
    { id: 5, name: '5. Inspiration', placeholder: 'Project 5 Image' },
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

          {/* Fun Facts Card */}
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
              className={styles.funFactsSmiley}
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              ☺
            </motion.div>
            <div className={styles.funFactsText}>
              Fun facts<br />about me!
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
            During Ironhack
          </motion.p>
          
          <motion.p 
            className={styles.noteRight}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            "Just apps? You are boring!"<br />
            Don't worry, I'm creating also<br />
            websites I just was more pleased<br />
            by my app projects.
          </motion.p>
          
          <motion.p 
            className={styles.noteRight2}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Self-taught
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
