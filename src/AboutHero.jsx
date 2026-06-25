import React from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import './AboutHero.css';
import aboutHeroBg from './assets/AHS.png';

const AboutHero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-500, 500], [5, -5]);
  const rotateY = useTransform(x, [-500, 500], [-5, 5]);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1.05, 1.25]);

  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <section 
      className="about-hero-section" 
      id="about" 
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ perspective: 1000, overflow: 'hidden' }}
    >
      <motion.div 
        className="about-hero-bg"
        style={{ rotateX, rotateY, y: yBg, scale: scaleBg }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ scale: { duration: 1.5, ease: "easeOut" }, rotateX: { type: "spring", stiffness: 300, damping: 30 }, rotateY: { type: "spring", stiffness: 300, damping: 30 } }}
      >
        <img src={aboutHeroBg} alt="PROCARE Pest Control Team" />
        <div className="about-hero-overlay"></div>
      </motion.div>
      
      <motion.div className="about-hero-content" style={{ y: yText, opacity: opacityText }}>
        <motion.h1 
          className="about-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Protecting Homes & Businesses with <br /> Smart Pest Solutions
        </motion.h1>
        <motion.p 
          className="about-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          PROCARE delivers safe, reliable, and eco-friendly pest control and bird netting services across residential and commercial spaces.
        </motion.p>
        <motion.div 
          className="about-hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <button className="btn-book-inspection" onClick={() => window.location.hash = '#book'}>Book Inspection</button>
          <button className="btn-contact-us" onClick={() => window.location.hash = '#contact'}>Contact Us</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
