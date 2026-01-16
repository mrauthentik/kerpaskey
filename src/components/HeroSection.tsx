import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navItem}>2026</div>
          <a 
            href="/Uchenna-Umoke-CV-Resume.pdf" 
            download 
            className={styles.navItem}
          >
            Curriculum Vitae
          </a>
          <div className={styles.navItem}>Uchenna Umoke</div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          {/* Handwritten Name with Decorative Curve */}
          <div className={styles.nameContainer}>
            <svg 
              className={styles.curveSvg}
              viewBox="0 0 250 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 20 100 Q 125 20, 230 100" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
            <div className={styles.handwrittenName}>
              Uchenna Umoke
            </div>
          </div>

          {/* Portfolio Text with Decorative Elements */}
          <div className={styles.portfolioContainer}>
            <h1 className={styles.portfolioText}>
              P
              <span className={styles.letterO}>
                o
                <span className={`${styles.decoration} ${styles.decoration23}`}>
                  26
                </span>
              </span>
              rtf
              <span className={styles.letterO}>
                o
                <span className={`${styles.decoration} ${styles.decorationStar}`}>
                  ✦
                </span>
              </span>
              li
              <span className={styles.letterO}>
                o
                <span className={`${styles.decoration} ${styles.decorationCV}`}>
                  CV
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={styles.subtitle}>
            <span className={styles.subtitleBadge}>
              Full Stack Developer
            </span>
          </div>

          {/* Download CV Button */}
          <div className={styles.cvButtonContainer}>
            <a 
              href="/Uchenna-Umoke-CV-Resume.pdf" 
              download 
              className={styles.cvButton}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className={styles.bottomBorder}></div>
    </section>
  );
};

export default HeroSection;
