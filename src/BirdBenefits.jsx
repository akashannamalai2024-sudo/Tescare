import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './BirdBenefits.css';

const benefits = [
  {
    title: "Prevent Pigeons",
    desc: "100% bird protection"
  },
  {
    title: "Protect Property",
    desc: "No damage or mess"
  },
  {
    title: "Long Lasting Nets",
    desc: "Durable materials"
  },
  {
    title: "Safe & Eco Friendly",
    desc: "Humane solution"
  }
];

const BirdBenefits = () => {
  return (
    <section className="bird-benefits-section">
      <div className="bben-container">
        
        <motion.div 
          className="bben-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Benefits of Bird Netting</h2>
        </motion.div>

        <div className="bben-grid">
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              className="bben-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bben-icon-wrapper">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <h3 className="bben-title">{item.title}</h3>
              <p className="bben-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BirdBenefits;
