import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, DollarSign, Star } from 'lucide-react';
import './BookProcess.css';

const steps = [
  {
    num: "1",
    title: "Book Inspection",
    desc: "Fill out the form and choose your preferred date and time"
  },
  {
    num: "2",
    title: "Technician Visit",
    desc: "Our certified expert arrives at your location on time"
  },
  {
    num: "3",
    title: "Problem Analysis",
    desc: "Thorough inspection to identify the root cause of the issue"
  },
  {
    num: "4",
    title: "Treatment Recommendation",
    desc: "Receive a detailed quote and treatment plan tailored to your needs"
  }
];

const features = [
  { text: "Certified Pest Experts", icon: Award },
  { text: "Safe Chemicals", icon: Leaf },
  { text: "Affordable Pricing", icon: DollarSign },
  { text: "100% Customer Satisfaction", icon: Star }
];

const BookProcess = () => {
  return (
    <section className="book-process-section">
      <div className="bprocess-container">
        
        <motion.div 
          className="bprocess-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>How Inspection Works</h2>
        </motion.div>

        <div className="bprocess-steps-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bprocess-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bp-step-num">{step.num}</div>
              <h3 className="bp-step-title">{step.title}</h3>
              <p className="bp-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bprocess-features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bprocess-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                <Icon size={24} className="bp-feature-icon" strokeWidth={1.5} />
                <span className="bp-feature-text">{feature.text}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BookProcess;
