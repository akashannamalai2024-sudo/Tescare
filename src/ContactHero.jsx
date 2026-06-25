import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ContactHero.css';
import contactVideo from '../Video/contact page video.mp4';

const ContactHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="contact-hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="contact-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="contact-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline 
          src={contactVideo}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="contact-video-overlay"></div>
      </motion.div>
      
      <motion.div className="contact-hero-content" style={{ y: yText, opacity: opacityText, position: 'relative', zIndex: 1 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch with PROCARE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Need pest control or bird netting? Contact our experts today.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
