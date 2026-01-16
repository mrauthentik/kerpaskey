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
              problem solver
              <span className={styles.star}>✦</span>
            </div>

            <div className={`${styles.trait} ${styles.traitDetailOriented}`}>
              <span className={styles.star}>✦</span>
              detail-oriented
            </div>

            <div className={`${styles.trait} ${styles.traitSociable}`}>
              collaborative
            </div>

            <div className={`${styles.trait} ${styles.traitEmpathic}`}>
              quality-driven
            </div>

            <div className={`${styles.trait} ${styles.traitMotivated}`}>
              continuous learner
              <span className={styles.star}>✦</span>
            </div>

            <div className={`${styles.trait} ${styles.traitFastLearner}`}>
              <span className={styles.star}>✦</span>
              full-stack engineer
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
              As a junior UX/UI Designer based in Paris, I get to combine my love for 
              technology with my passion for art and design. I enjoy using my 
              creativity and problem-solving skills to create digital experiences 
              that not only look great but also work seamlessly for the user. When 
              I'm not designing, you can usually find me exploring the city's many 
              museums and galleries for inspiration.
            </p>
            
            <p className={styles.paragraph}>
              I believe that continuous learning is the key to success, and I'm always on the 
              lookout for fresh challenges to keep me motivated and engaged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
