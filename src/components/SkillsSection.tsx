import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  const skillIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Database', icon: '🗄️' },
    { name: 'API', icon: '🔌' },
    { name: 'Git', icon: '🔀' },
  ];

  const skillsList1 = [
    'UX Research',
    'Competitor Analysis',
    'Personas',
    'Empathy Maps',
    'User Journey',
    'User Flow',
  ];

  const skillsList2 = [
    'Information Architecture',
    'Design System',
    'Moodboards',
    'Wireframe',
    'High Fidelity Prototypes',
    'Mock ups',
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        {/* Left Side - Skills */}
        <div className={styles.leftContent}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>

          {/* Skill Icons Circle */}
          <motion.div 
            className={styles.skillsCircle}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skillIcons.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skillIcon}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {skill.icon}
              </motion.div>
            ))}
            <motion.div 
              className={styles.circleText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I'm always<br />developing my<br />skills
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>• Understanding and implementation of visual and interaction design principles</p>
            <p>• Understanding of accessibility and inclusivity best practices for Digital Design</p>
          </motion.div>

          {/* Skills Lists */}
          <div className={styles.skillsLists}>
            <motion.ul 
              className={styles.skillsList}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {skillsList1.map((skill, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#8b9dc3' }}
                  transition={{ duration: 0.2 }}
                >
                  • {skill}
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul 
              className={styles.skillsList}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {skillsList2.map((skill, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#8b9dc3' }}
                  transition={{ duration: 0.2 }}
                >
                  • {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Right Side - Books */}
        <div className={styles.rightContent}>
          <motion.div 
            className={styles.booksContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Stars */}
            <motion.div 
              className={styles.star}
              style={{ top: '10%', right: '20%' }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              ✦
            </motion.div>
            <motion.div 
              className={styles.star}
              style={{ top: '5%', right: '5%' }}
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              ✦
            </motion.div>
            <motion.div 
              className={styles.starSmall}
              style={{ top: '15%', right: '2%' }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ✦
            </motion.div>
            <motion.div 
              className={styles.starSmall}
              style={{ bottom: '20%', right: '10%' }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              ✦
            </motion.div>

            <motion.div 
              className={styles.handwrittenText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              my books<br />about<br />Design
            </motion.div>

            {/* Books Stack Placeholder */}
            <motion.div 
              className={styles.booksStack}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.bookPlaceholder}>Books Image Placeholder</div>
            </motion.div>

            <motion.div 
              className={styles.wishlistText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              I have so many more<br />in my Amazon wishlist...
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
