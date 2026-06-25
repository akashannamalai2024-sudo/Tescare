import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Droplet, Shield, Home } from 'lucide-react';
import './ComboPackages.css';

const combos = [
  {
    saveTag: "SAVE ₹3,000",
    title: "Home Protection Package",
    subtitle: "Complete pest control solution",
    oldPrice: "₹9,999",
    newPrice: "₹6,999",
    features: [
      { text: "Cockroach Control", icon: Bug },
      { text: "Mosquito Control", icon: Droplet },
      { text: "Ant Treatment", icon: Bug }
    ]
  },
  {
    saveTag: "SAVE ₹4,500",
    title: "Apartment Safety Package",
    subtitle: "Complete protection for your home",
    oldPrice: "₹12,999",
    newPrice: "₹8,499",
    features: [
      { text: "Bird Net Installation", icon: Home },
      { text: "Mosquito Mesh", icon: Shield },
      { text: "General Pest Control", icon: Bug }
    ]
  }
];

const ComboPackages = () => {
  return (
    <section className="combo-section">
      <div className="combo-container">
        
        <motion.div 
          className="combo-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Combo Packages</h2>
          <p>Save even more with our specially curated combo packages</p>
        </motion.div>

        <div className="combo-grid">
          {combos.map((combo, index) => (
            <motion.div 
              key={index}
              className="combo-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="combo-save-tag">{combo.saveTag}</div>
              
              <h3 className="combo-title">{combo.title}</h3>
              <p className="combo-subtitle">{combo.subtitle}</p>
              
              <div className="combo-price-row">
                <span className="combo-old-price">{combo.oldPrice}</span>
                <span className="combo-new-price">{combo.newPrice}</span>
              </div>

              <div className="combo-features">
                {combo.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="combo-feature-item">
                      <Icon className="combo-feature-icon" size={20} strokeWidth={1.5} />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              <button className="combo-btn" onClick={() => window.location.hash = '#book'}>Book Package</button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComboPackages;
