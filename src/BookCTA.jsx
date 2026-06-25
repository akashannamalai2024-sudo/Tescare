import React from 'react';
import { motion } from 'framer-motion';
import techImg from './assets/PCC.png';
import './BookCTA.css';

const BookCTA = () => {
  return (
    <section className="book-cta-section">
      <div className="bcta-glow-left"></div>
      <div className="bcta-glow-right"></div>
      
      <div className="bcta-container">
        <div className="bcta-content">
          <motion.h2 
            className="bcta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Protect Your Home from Pests Today
          </motion.h2>
          
          <motion.p 
            className="bcta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get rid of cockroaches permanently with our proven <br/> treatment methods.
          </motion.p>

          <motion.div
            className="bcta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bcta-actions">
              <button className="bcta-btn-primary" onClick={() => window.location.hash = '#book'}>
                Book Service Now
              </button>
              <button className="bcta-btn-outline" onClick={() => window.location.hash = '#contact'}>
                Talk to an Expert
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bcta-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={techImg} alt="Pest Control Technician" className="bcta-tech-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default BookCTA;
