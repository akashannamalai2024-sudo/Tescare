import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import workerImg   from './assets/trusted_expert.png';
import bird1Img    from './assets/trusted/bird1.png';
import bird2Img    from './assets/trusted/bird2.png';
import bird3Img    from './assets/trusted/bird3.png';
import bird4Img    from './assets/trusted/bird4.png';
import './TrustedExperts.css';

const pestFeatures  = ['Certified Professionals', 'Eco Friendly Solutions', 'Affordable Pricing', 'Fast Service'];
const birdFeatures  = ['Durable nets', 'Invisible mesh', 'Long-lasting installation'];
const birdGridImgs  = [bird1Img, bird2Img, bird3Img, bird4Img];

/* ── reusable green check list ── */
const CheckList = ({ items }) => (
  <ul className="te-checklist">
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <CheckCircle2 size={18} className="te-check-icon" />
        <span>{item}</span>
      </motion.li>
    ))}
  </ul>
);

/* ── 3-D tilt image card ── */
const TiltImg = ({ src, alt, className }) => {
  const ref = useRef(null);
  const rx = useSpring(0, { stiffness: 260, damping: 22 });
  const ry = useSpring(0, { stiffness: 260, damping: 22 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rx.set(-(e.clientY - r.top  - r.height / 2) / (r.height / 2) * 12);
    ry.set( (e.clientX - r.left - r.width  / 2) / (r.width  / 2) * 12);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      className={`te-tilt-wrap ${className || ''}`}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <img src={src} alt={alt} />
      <div className="te-tilt-gloss" />
    </motion.div>
  );
};

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
const TrustedExperts = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const glowY1 = useTransform(scrollYProgress, [0, 1], [-100, 160]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [160, -100]);

  return (
    <section className="te-section" ref={sectionRef}>
      {/* Ambient glows */}
      <motion.div className="te-glow te-glow--left"  style={{ y: glowY1 }} aria-hidden="true" />
      <motion.div className="te-glow te-glow--right" style={{ y: glowY2 }} aria-hidden="true" />

      <div className="te-container">

        {/* ════════════════════════════════
            BLOCK 1 – Trusted Pest Control Experts
        ════════════════════════════════ */}
        <motion.div
          className="te-block te-block--pest"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left – image */}
          <div className="te-media" style={{ perspective: '900px' }}>
            <TiltImg src={workerImg} alt="Pest control technician" className="te-pest-img" />
            {/* Floating badge */}
            <motion.div
              className="te-floating-badge"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="te-badge-num">10+</span>
              <span className="te-badge-label">Years Experience</span>
            </motion.div>
          </div>

          {/* Right – content */}
          <div className="te-content">
            <motion.div
              className="te-eyebrow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              TRUSTED EXPERTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Trusted Pest Control <span className="te-green">Experts</span>
            </motion.h2>

            <motion.p
              className="te-desc"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              PROCARE provides reliable pest control and bird netting solutions
              using safe chemicals and modern equipment.
            </motion.p>

            <CheckList items={pestFeatures} />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="te-divider" aria-hidden="true">
          <span />
        </div>

        {/* ════════════════════════════════
            BLOCK 2 – Professional Bird Net Installation
        ════════════════════════════════ */}
        <motion.div
          className="te-block te-block--bird"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left – content */}
          <div className="te-content te-content--left">
            <motion.div
              className="te-eyebrow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              BIRD NETTING
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Professional Bird Net <span className="te-green">Installation</span>
            </motion.h2>

            <motion.p
              className="te-desc"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Protect balconies, windows, and buildings from pigeons and birds
              with high-quality bird netting solutions.
            </motion.p>

            <CheckList items={birdFeatures} />


          </div>

          {/* Right – 2×2 image grid */}
          <div className="te-bird-grid" style={{ perspective: '1000px' }}>
            {birdGridImgs.map((img, i) => (
              <motion.div
                key={i}
                className="te-bird-cell"
                initial={{ opacity: 0, scale: 0.85, rotateY: i % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, rotateY: i % 2 === 0 ? -5 : 5, zIndex: 2 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img src={img} alt={`Bird netting ${i + 1}`} />
                <div className="te-bird-cell-overlay" />
              </motion.div>
            ))}

            {/* Corner dot accent */}
            <div className="te-grid-dot te-grid-dot--tl" />
            <div className="te-grid-dot te-grid-dot--br" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustedExperts;
