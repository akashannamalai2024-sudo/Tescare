import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './BookHero.css';
import bookVideo from '../Video/Book Your Free Pest Inspection video .mp4';

const BookHero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="book-hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background Video Container */}
      <motion.div 
        className="book-video-container" 
        style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <video 
          className="book-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline 
          src={bookVideo}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="book-video-overlay"></div>
      </motion.div>

      <motion.div className="book-glow-left" style={{ y: yGlow }}></motion.div>
      <motion.div className="book-glow-right" style={{ y: yGlow }}></motion.div>
      
      <motion.div className="book-hero-content" style={{ y: yText, opacity: opacityText, position: 'relative', zIndex: 1 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Book Your Free Pest Inspection
        </motion.h1>
        <motion.p
          className="book-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Schedule a professional pest inspection or bird net installation with PROCARE
          experts. Our technicians will assess the problem and recommend the best solution.
        </motion.p>
        
        <motion.div 
          className="book-benefits"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="benefit-item">
            <CheckCircle2 className="benefit-icon" size={24} strokeWidth={2} />
            <span>Free Inspection</span>
          </div>
          <div className="benefit-item">
            <CheckCircle2 className="benefit-icon" size={24} strokeWidth={2} />
            <span>Same Day Service</span>
          </div>
          <div className="benefit-item">
            <CheckCircle2 className="benefit-icon" size={24} strokeWidth={2} />
            <span>Certified Technicians</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookHero;
