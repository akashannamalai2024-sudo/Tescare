import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../Video/bird netting HV.mp4';
import './BirdNettingHero.css';
import ServiceBookingCard from './ServiceBookingCard.jsx';

const BirdNettingHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="bird-netting-hero" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="bn-hero-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="bn-hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="bn-hero-overlay"></div>
      </motion.div>

      {/* Background radial glows */}
      <motion.div className="bn-glow-left" style={{ y: yGlow }}></motion.div>
      <motion.div className="bn-glow-right" style={{ y: yGlow }}></motion.div>
      
      <div className="service-hero-container">
        <motion.div className="service-hero-left" style={{ y: yText, opacity: opacityText }}>
          <motion.h1 
            className="bn-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Professional Bird Netting<br/>Installation
          </motion.h1>
          
          <motion.p 
            className="bn-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Protect your balconies, windows, and buildings from pigeons and birds with durable bird netting solutions.
          </motion.p>
          <ul className="hero-benefits">
            <li>✓ Heavy-Duty HDPE UV Resistant Nets</li>
            <li>✓ Rust-Free Stainless Steel Wire Framing</li>
            <li>✓ 3-Year to 5-Year Performance Warranty</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="service-hero-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ServiceBookingCard defaultPest="birdnetting" />
        </motion.div>
      </div>
    </section>
  );
};

export default BirdNettingHero;
