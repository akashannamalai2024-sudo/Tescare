import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Droplet } from 'lucide-react';
import './SeasonalOffers.css';

const SeasonalOffers = () => {
  return (
    <section className="seasonal-section">
      <div className="seasonal-container">
        
        <motion.div 
          className="seasonal-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Seasonal Offers</h2>
          <p>Special discounts for different seasons</p>
        </motion.div>

        <div className="seasonal-grid">
          
          {/* Card 1: Festival */}
          <motion.div 
            className="seasonal-card festival-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="seasonal-icon-wrapper">
              <Gift size={32} className="seasonal-icon" strokeWidth={1.5} />
            </div>
            <h3 className="seasonal-title">Festival Pest Control</h3>
            <p className="seasonal-desc">
              Get your home pest-free before the festive season. Special discounts on all pest control services.
            </p>
            <div className="seasonal-actions">
              <button className="seasonal-btn primary-btn red-btn" onClick={() => window.location.hash = '#book'}>Up to 35% OFF</button>
              <button className="seasonal-btn outline-btn" onClick={() => window.location.hash = '#book'}>View Details</button>
            </div>
          </motion.div>

          {/* Card 2: Summer */}
          <motion.div 
            className="seasonal-card summer-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="seasonal-icon-wrapper">
              <Droplet size={32} className="seasonal-icon" strokeWidth={1.5} />
            </div>
            <h3 className="seasonal-title">Summer Mosquito Control</h3>
            <p className="seasonal-desc">
              Beat the heat and mosquitoes! Special summer packages for mosquito control with extended warranty.
            </p>
            <div className="seasonal-actions">
              <button className="seasonal-btn primary-btn blue-btn" onClick={() => window.location.hash = '#book'}>Up to 40% OFF</button>
              <button className="seasonal-btn outline-btn" onClick={() => window.location.hash = '#book'}>View Details</button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SeasonalOffers;
