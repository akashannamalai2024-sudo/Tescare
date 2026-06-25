import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../Video/Termite HV.mp4';
import './TermiteHero.css';
import ServiceBookingCard from './ServiceBookingCard.jsx';

const TermiteHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="termite-hero" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="tc-hero-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="tc-hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="tc-hero-overlay"></div>
      </motion.div>

      {/* Background radial glows */}
      <motion.div className="tc-glow-left" style={{ y: yGlow }}></motion.div>
      <motion.div className="tc-glow-right" style={{ y: yGlow }}></motion.div>
      
      <div className="service-hero-container">
        <motion.div className="service-hero-left" style={{ y: yText, opacity: opacityText }}>
          <motion.h1 
            className="tc-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Termite Control Service
          </motion.h1>
          
          <motion.p 
            className="tc-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Protect your property from hidden termite damage before it spreads.
          </motion.p>
          <ul className="hero-benefits">
            <li>✓ Advanced Soil & Wood Treatment Technology</li>
            <li>✓ Multi-Year Protection & Warranty</li>
            <li>✓ 100% Eco-Friendly & Family Safe Methods</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="service-hero-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ServiceBookingCard defaultPest="termite" />
        </motion.div>
      </div>
    </section>
  );
};

export default TermiteHero;
