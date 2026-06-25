import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../Video/mosquito HV.mp4';
import './MosquitoHero.css';
import ServiceBookingCard from './ServiceBookingCard.jsx';

const MosquitoHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="mosq-hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="mosq-hero-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="mosq-hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="mosq-hero-overlay"></div>
      </motion.div>

      <motion.div className="mosq-hero-glow" style={{ y: yGlow }}></motion.div>
      <div className="service-hero-container">
        <motion.div className="service-hero-left" style={{ y: yText, opacity: opacityText }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mosquito Control Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reduce mosquito breeding and protect your family from harmful bites and diseases.
          </motion.p>
          <ul className="hero-benefits">
            <li>✓ Larvicide Treatments to Stop Breeding</li>
            <li>✓ Indoor & Outdoor Safe Fogging / Spraying</li>
            <li>✓ Highly Effective Shielding & Long Protection</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="service-hero-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ServiceBookingCard defaultPest="mosquito" />
        </motion.div>
      </div>
    </section>
  );
};

export default MosquitoHero;
