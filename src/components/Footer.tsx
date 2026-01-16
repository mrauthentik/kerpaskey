import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Navigation */}
        <div className={styles.topNav}>
          <div className={styles.navItem}>Portfolio 2026</div>
          <a 
            href="/Uchenna-Umoke-CV-Resume.pdf" 
            download 
            className={styles.navItem}
          >
            Curriculum Vitae
          </a>
          <div className={styles.navItem}>Uchenna Umoke</div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Side - Profile & Contact */}
          <div className={styles.leftContent}>
            <motion.div 
              className={styles.profileContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative Ring */}
              <svg className={styles.decorativeRing} width="200" height="200" viewBox="0 0 200 200">
                <ellipse
                  cx="100"
                  cy="100"
                  rx="85"
                  ry="90"
                  stroke="#8b9dc3"
                  strokeWidth="2"
                  fill="none"
                  transform="rotate(-15 100 100)"
                />
              </svg>
              
              {/* Stars */}
              <motion.div 
                className={styles.star}
                style={{ top: '10%', left: '5%' }}
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
                style={{ bottom: '15%', right: '8%' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
              >
                ✦
              </motion.div>

              {/* Profile Image */}
              <div className={styles.profileImage}>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uche%20potrait.jpg-bx840Ymck544BqChHf4CgKD7qiau6W.jpeg" 
                  alt="Uchenna Umoke"
                />
              </div>
            </motion.div>

            <motion.h2 
              className={styles.thankYou}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thank you
            </motion.h2>

            <motion.div 
              className={styles.contactInfo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Get in touch:</h3>
              
              <div className={styles.contactItem}>
                <Mail size={20} strokeWidth={1.5} />
                <a href="mailto:umokeuchennaofficial@gmail.com">umokeuchennaofficial@gmail.com</a>
              </div>
              
              <div className={styles.contactItem}>
                <MessageCircle size={20} strokeWidth={1.5} />
                <a href="https://wa.me/2348141602733" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
              
              <div className={styles.contactItem}>
                <Github size={20} strokeWidth={1.5} />
                <a href="https://github.com/mrauthentik" target="_blank" rel="noopener noreferrer">github.com/mrauthentik</a>
              </div>
              
              <div className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
                <a href="https://x.com/umokeuchenna" target="_blank" rel="noopener noreferrer">x.com/umokeuchenna</a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Message */}
          <motion.div 
            className={styles.rightContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className={styles.message}>
              While I may be a developer with growing<br />
              experience, I'm overflowing with<br />
              passion for design and a drive to<br />
              learn and grow. I'm not afraid to<br />
              bring fresh perspectives and<br />
              creativity to the table, and I'm<br />
              committed to constantly improving<br />
              my skills.
            </p>
            
            <p className={styles.message}>
              I know it may be a challenge to<br />
              take a chance on me, but I believe<br />
              that with my potential and<br />
              dedication, I can become the best<br />
              developer you could hire.
            </p>

            <p className={styles.signature}>
              Uchenna Umoke
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
