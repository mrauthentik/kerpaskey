import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Side - Photo with Decorative Elements */}
        <div className={styles.photoContainer}>
          <div className={styles.photoWrapper}>
            {/* Main circular photo placeholder */}
            <div className={styles.photoCircle}>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uche%20potrait.jpg-bx840Ymck544BqChHf4CgKD7qiau6W.jpeg" 
                alt="Profile"
              />
            </div>

            {/* Decorative Text Elements Around Circle */}
            <div className={`${styles.trait} ${styles.traitCreative}`}>
              creative
              <span className={styles.star}>✦</span>
            </div>

            <div className={`${styles.trait} ${styles.traitDetailOriented}`}>
              <span className={styles.star}>✦</span>
              detail-oriented
            </div>

            <div className={`${styles.trait} ${styles.traitSociable}`}>
              sociable
            </div>

            <div className={`${styles.trait} ${styles.traitEmpathic}`}>
              empathic
            </div>

            <div className={`${styles.trait} ${styles.traitMotivated}`}>
              motivated
              <span className={styles.star}>✦</span>
            </div>

            <div className={`${styles.trait} ${styles.traitFastLearner}`}>
              <span className={styles.star}>✦</span>
              fast learner
              <span className={styles.starSmall}>✦</span>
            </div>

            {/* Decorative Curved Lines */}
            <svg 
              className={styles.decorativeSvg}
              viewBox="0 0 400 400"
            >
              <path 
                d="M 50 150 Q 30 200, 50 250" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
              <path 
                d="M 350 180 Q 380 220, 350 260" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
              <path 
                d="M 150 30 Q 200 10, 250 30" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Right Side - About Text */}
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Hello,
          </h2>
          
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              I'm a Full-Stack Engineer who builds scalable, production-ready web applications 
              using modern frontend frameworks and backend technologies. I've delivered reliable 
              systems across education and SaaS platforms, with a focus on clean architecture, 
              pixel-perfect interfaces, and smooth user experiences.
            </p>
            
            <p className={styles.paragraph}>
              I take ownership of problems end-to-end—from understanding requirements to 
              implementing, refining, and maintaining solutions. My background in teaching 
              programming has strengthened my engineering approach: I write clear, maintainable 
              code and think carefully about both developer and user experience.
            </p>
            
            <p className={styles.paragraph}>
              I thrive in remote, distributed teams and enjoy collaborating with people who 
              value quality, continuous improvement, and practical, well-engineered solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
