import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left Side - Heading */}
        <div className={styles.leftContent}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's work<br />together
          </motion.h2>

          <motion.div
            className={styles.handwrittenText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm always open to<br />
            new opportunities and<br />
            collaborations
          </motion.div>

          {/* Decorative Stars */}
          <motion.div 
            className={styles.star}
            style={{ top: '20%', left: '10%' }}
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
            className={styles.starSmall}
            style={{ bottom: '30%', left: '5%' }}
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
        </div>

        {/* Right Side - Contact Info */}
        <div className={styles.rightContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Email</h3>
              <a href="mailto:umokeuchennaofficial@gmail.com">
                umokeuchennaofficial@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>WhatsApp</h3>
              <a href="https://wa.me/2348141602733" target="_blank" rel="noopener noreferrer">
                +234 814 160 2733
              </a>
            </motion.div>

            <motion.div 
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>GitHub</h3>
              <a href="https://github.com/mrauthentik" target="_blank" rel="noopener noreferrer">
                github.com/mrauthentik
              </a>
            </motion.div>

            <motion.div 
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3>X (Twitter)</h3>
              <a href="https://x.com/umokeuchenna" target="_blank" rel="noopener noreferrer">
                x.com/umokeuchenna
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
