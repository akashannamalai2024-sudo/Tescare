import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../Video/woodborer HV.mp4';
import './WoodBorerHero.css';
import ServiceBookingCard from './ServiceBookingCard.jsx';

const WoodBorerHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="wb-hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="wb-hero-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="wb-hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="wb-hero-overlay"></div>
      </motion.div>

      <motion.div className="wb-hero-glow-left" style={{ y: yGlow }}></motion.div>
      <motion.div className="wb-hero-glow-right" style={{ y: yGlow }}></motion.div>
      <div className="service-hero-container">
        <motion.div className="service-hero-left" style={{ y: yText, opacity: opacityText }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Wood Borer Control Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Protect your wooden furniture, doors, and structures from damaging wood borers with safe and effective treatment solutions.
          </motion.p>
          <ul className="hero-benefits">
            <li>✓ Specialized Injection & Wood Preservation Treatment</li>
            <li>✓ Complete Larvae & Beetle Eradication</li>
            <li>✓ Multi-Year Anti-Borer Protection Shield</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="service-hero-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ServiceBookingCard defaultPest="woodborer" />
        </motion.div>
      </div>
    </section>
  );
};

export default WoodBorerHero;
