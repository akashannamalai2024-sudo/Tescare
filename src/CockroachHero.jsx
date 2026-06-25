import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../Video/Cockroach HV.mp4';
import './CockroachHero.css';
import ServiceBookingCard from './ServiceBookingCard.jsx';

const CockroachHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="croach-hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="croach-hero-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="croach-hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="croach-hero-overlay"></div>
      </motion.div>

      <motion.div className="croach-hero-glow" style={{ y: yGlow }}></motion.div>
      <div className="service-hero-container">
        <motion.div className="service-hero-left" style={{ y: yText, opacity: opacityText }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cockroach Control Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get rid of stubborn cockroaches using advanced pest control solutions.
          </motion.p>
          <ul className="hero-benefits">
            <li>✓ Eco-Friendly & Kids/Pets Safe Chemicals</li>
            <li>✓ Highly Trained & Background Verified Experts</li>
            <li>✓ 100% Satisfaction & 30-Day Service Warranty</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="service-hero-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ServiceBookingCard defaultPest="cockroach" />
        </motion.div>
      </div>
    </section>
  );
};

export default CockroachHero;
