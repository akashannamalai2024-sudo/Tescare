import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import techImg from './assets/PCC.png';
import './PestCTA.css';

const BedbugCTA = () => {
  return (
    <section className="pest-cta-section">
      <div className="pcta-glow-left"></div>
      <div className="pcta-glow-right"></div>
      
      <div className="pcta-container">
        
        <div className="pcta-content">
          <motion.h2 
            className="pcta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Book Your Pest Inspection Today
          </motion.h2>
          
          <motion.p 
            className="pcta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get rid of bedbugs permanently with our proven <br/> treatment methods.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="pcta-btn" onClick={() => window.location.hash = '#book'}>
              <Phone size={18} className="pcta-btn-icon" />
              <span>Schedule Inspection</span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="pcta-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={techImg} alt="Pest Control Technician" className="pcta-tech-img" />
        </motion.div>

      </div>
    </section>
  );
};

export default BedbugCTA;
