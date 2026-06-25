import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './BirdFAQ.css';

const faqs = [
  {
    question: "How long does bird net last?",
    answer: "Our high-quality bird nets are UV stabilized and highly durable, typically lasting between 3 to 5 years depending on weather conditions and maintenance."
  },
  {
    question: "Is bird net visible from outside?",
    answer: "We use fine, transparent or appropriately colored netting that blends seamlessly with your building's exterior, making it virtually invisible from a distance."
  },
  {
    question: "Is installation safe?",
    answer: "Yes, our professional technicians follow strict safety protocols and use specialized equipment to ensure safe and secure installation without damaging your property."
  },
  {
    question: "Does the net affect ventilation?",
    answer: "Not at all. The mesh design allows for completely unrestricted airflow and natural light to pass through, maintaining perfect ventilation for your space."
  }
];

const BirdFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bird-faq-section">
      <div className="bfaq-container">
        
        <motion.h2 
          className="bfaq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="bfaq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={index}
                className={`bfaq-item ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="bfaq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="bfaq-icon"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      className="bfaq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="bfaq-answer">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BirdFAQ;
