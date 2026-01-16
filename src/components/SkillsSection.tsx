import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FileCode, Server, Database, Zap, GitBranch } from 'lucide-react';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  const skillIcons = [
    { name: 'React', Icon: Code2 },
    { name: 'TypeScript', Icon: FileCode },
    { name: 'Node.js', Icon: Server },
    { name: 'Database', Icon: Database },
    { name: 'API', Icon: Zap },
    { name: 'Git', Icon: GitBranch },
  ];

  const skillsCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React, TypeScript, JavaScript (ES6+)',
        'Component-driven architecture',
        'Responsive & mobile-first design',
        'Pixel-perfect UI implementation',
        'Framer Motion (animations & transitions)',
        'GSAP',
        'Material UI, Tailwind CSS, Emotion Styled, ShadCN UI',
        'Accessibility (semantic HTML, ARIA basics)',
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js, Express.js',
        'RESTful API design & integration',
        'Backend-as-a-Service (BaaS)',
        'Supabase (Auth, Database, Edge Functions)',
        'Firebase (Authentication, Firestore)',
        'SQL (relational data modelling & queries)',
      ],
    },
    {
      title: 'State, Data & Performance',
      skills: [
        'TanStack Query (React Query)',
        'Asynchronous data handling',
        'Caching & performance optimisation',
        'Error handling & loading states',
      ],
    },
    {
      title: 'DevOps & Tooling',
      skills: [
        'Git, GitHub (version control & collaboration)',
        'GitHub Actions (CI/CD pipelines)',
        'Docker (fundamentals & deployment workflows)',
      ],
    },
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

          {/* Technology Icons Grid */}
          <motion.div 
            className={styles.techIconsGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skillIcons.map((skill, index) => {
              const IconComponent = skill.Icon;
              return (
                <motion.div
                  key={index}
                  className={styles.techIcon}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <IconComponent size={32} strokeWidth={1.5} />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Description */}
          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>• Building scalable, production-ready applications with modern frontend and backend technologies</p>
            <p>• Delivering pixel-perfect UIs with clean architecture, performance optimization, and exceptional UX</p>
          </motion.div>

          {/* Skills Categories */}
          <div className={styles.skillsCategories}>
            {skillsCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className={styles.categorySection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + catIndex * 0.1 }}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <ul className={styles.skillsList}>
                  {category.skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5, color: '#8b9dc3' }}
                      transition={{ duration: 0.2 }}
                    >
                      • {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              my learning<br />resources &<br />tech books
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
