import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../Video/bedbug HV.mp4';
import './BedbugHero.css';
import ServiceBookingCard from './ServiceBookingCard.jsx';

const BedbugHero = () => {
  return (
    <section className="bedbug-hero-section">
      {/* Background Video */}
      <video 
        className="bedbug-hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="bedbug-hero-overlay"></div>

      <div className="bedbug-hero-glow-left"></div>
      <div className="bedbug-hero-glow-right"></div>
      <div className="service-hero-container">
        <motion.div className="service-hero-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bedbug Control Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Eliminate hidden bedbugs quickly with safe and effective pest control treatments.
          </motion.p>
          <ul className="hero-benefits">
            <li>✓ Multi-Stage Residual Treatment</li>
            <li>✓ Complete Egg Elimination Technology</li>
            <li>✓ 100% Odorless & Safe Chemicals</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="service-hero-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ServiceBookingCard defaultPest="bedbug" />
        </motion.div>
      </div>
    </section>
  );
};

export default BedbugHero;
