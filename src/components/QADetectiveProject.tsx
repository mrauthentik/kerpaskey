import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Accessibility, MousePointerClick, Link2, Activity, Bot } from 'lucide-react';
import styles from './ProjectDetailSection.module.css';

const QADetectiveProject: React.FC = () => {
  return (
    <section className={styles.projectDetailSection}>
      <div className={styles.container}>
        {/* Left Side - Terminal Mockup */}
        <div className={styles.mockupsContainer}>
          {/* Decorative Curved Lines */}
          <motion.svg
            className={styles.decorativeCurve}
            style={{ top: '5%', right: '10%' }}
            width="120"
            height="120"
            viewBox="0 0 120 120"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <path
              d="M 10 60 Q 40 20, 70 60 Q 100 100, 130 60"
              stroke="#8b9dc3"
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>

          {/* Terminal/CLI Mockup */}
          <motion.div
            className={styles.terminalContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Terminal Window */}
            <div className={styles.terminalWindow}>
              {/* Terminal Header */}
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <div className={styles.dot} style={{ background: '#ff5f56' }} />
                  <div className={styles.dot} style={{ background: '#ffbd2e' }} />
                  <div className={styles.dot} style={{ background: '#27c93f' }} />
                </div>
                <span className={styles.terminalTitle}>qa-detective — run</span>
              </div>

              {/* Terminal Content */}
              <div className={styles.terminalContent}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span style={{ color: '#27c93f' }}>$</span> <span style={{ color: '#79c0ff' }}>npx qa-detective</span> https://mysite.com
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  style={{ marginTop: '12px' }}
                >
                  <span style={{ color: '#8b9dc3' }}>🔍 Crawling...</span> <span style={{ color: '#27c93f' }}>10 pages found</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <span style={{ color: '#8b9dc3' }}>🧠 Generating test cases...</span> <span style={{ color: '#ffbd2e' }}>AI → 42 tests</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  <span style={{ color: '#8b9dc3' }}>🧪 Running tests...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  style={{ marginTop: '8px' }}
                >
                  <span style={{ color: '#27c93f' }}>  ✓</span> Security headers <span style={{ color: '#6e7681' }}>— CSP, HSTS, XSS</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.7 }}
                >
                  <span style={{ color: '#27c93f' }}>  ✓</span> Performance <span style={{ color: '#6e7681' }}>— FCP 1.2s, LCP 2.1s</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.9 }}
                >
                  <span style={{ color: '#ffbd2e' }}>  ⚠</span> Accessibility <span style={{ color: '#6e7681' }}>— 3 WCAG violations</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.1 }}
                >
                  <span style={{ color: '#27c93f' }}>  ✓</span> Forms <span style={{ color: '#6e7681' }}>— validation, CSRF</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.3 }}
                >
                  <span style={{ color: '#ff7b72' }}>  ✗</span> Navigation <span style={{ color: '#6e7681' }}>— 2 broken links</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.5 }}
                >
                  <span style={{ color: '#27c93f' }}>  ✓</span> Load testing <span style={{ color: '#6e7681' }}>— 20 VUs, p95 340ms</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.8 }}
                  style={{ marginTop: '12px', borderTop: '1px solid #2a2a4a', paddingTop: '12px' }}
                >
                  <span style={{ color: '#d2a8ff' }}>📊 Score:</span>{' '}
                  <span style={{ color: '#27c93f', fontSize: '18px', fontWeight: 'bold' }}>78/100</span>{' '}
                  <span style={{ color: '#ffbd2e', fontSize: '16px' }}>Grade: B+</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 3.0 }}
                  style={{ marginTop: '4px' }}
                >
                  <span style={{ color: '#8b9dc3' }}>📄 Report saved → </span>
                  <span style={{ color: '#79c0ff' }}>qa-report-2026-03-30.html</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Circles */}
          <motion.div
            className={styles.statCircle}
            style={{ bottom: '5%', left: '5%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle
                cx="65"
                cy="65"
                r="55"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className={styles.statText}>
              <div className={styles.statNumber}>7</div>
              <div className={styles.statLabel}>
                test categories<br />automated
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCircle}
            style={{ top: '0%', right: '5%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <svg width="110" height="110" viewBox="0 0 110 110">
              <ellipse
                cx="55"
                cy="55"
                rx="48"
                ry="42"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
                transform="rotate(-10 55 55)"
              />
            </svg>
            <div className={styles.statText}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>
                config files<br />needed
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.leftContent}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            QA Detective
          </motion.h2>

          <motion.div
            className={styles.projectMeta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.role}>Full-Stack Developer & Creator</p>
            <p className={styles.location}>Personal Project • 2026</p>
          </motion.div>

          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              An <strong>autonomous AI-powered QA testing platform</strong> that crawls your
              web application, generates test cases using a large language model, executes
              them in a real browser, and produces a detective-style report with actionable findings.
            </p>
            <p>
              Provide a URL — it <strong>crawls up to 10 pages</strong> with Playwright,
              sends data to <strong>Groq (LLaMA 3.3 70B)</strong> to generate targeted tests,
              then executes across 7 categories including security, performance,
              accessibility, and load testing.
            </p>
            <p>
              Built as a <strong>Turborepo monorepo with 7 packages</strong>, using
              Next.js 15, Express, BullMQ, Redis, PostgreSQL, and TypeScript end-to-end.
              Every package shares types via a common <strong>@qa-detective/shared</strong> package.
            </p>
          </motion.div>

          {/* Feature Grid */}
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
              what it tests
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <Shield size={20} />
                <span>Security headers & CORS</span>
              </div>
              <div className={styles.feature}>
                <Zap size={20} />
                <span>Performance & FCP</span>
              </div>
              <div className={styles.feature}>
                <Accessibility size={20} />
                <span>WCAG 2.1 AA (axe-core)</span>
              </div>
              <div className={styles.feature}>
                <MousePointerClick size={20} />
                <span>Form validation & CSRF</span>
              </div>
              <div className={styles.feature}>
                <Link2 size={20} />
                <span>Broken links & redirects</span>
              </div>
              <div className={styles.feature}>
                <Activity size={20} />
                <span>Load testing (k6, 20 VUs)</span>
              </div>
              <div className={styles.feature}>
                <Bot size={20} />
                <span>AI-generated reports</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.handwrittenNote}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            "No config files, no test scripts,<br />
            no QA engineer required —<br />
            just provide a URL"
          </motion.div>

          <motion.div
            className={styles.annotationCircle}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <svg width="200" height="100" viewBox="0 0 200 100">
              <ellipse
                cx="100"
                cy="50"
                rx="90"
                ry="40"
                stroke="#8b9dc3"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className={styles.annotationText}>
              Turborepo • 7 packages<br />TypeScript end-to-end
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QADetectiveProject;
