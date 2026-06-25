import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './RodentFAQ.css';

const faqs = [
  {
    question: "How do I know if I have a rodent problem?",
    answer: "Common signs include droppings, gnaw marks on furniture or wires, scratching noises in walls or ceilings, and nesting materials like shredded paper or fabric."
  },
  {
    question: "Are the rodent control methods safe for pets?",
    answer: "Yes, our technicians strategically place traps and use tamper-resistant bait stations in areas that are inaccessible to pets and children, ensuring their safety."
  },
  {
    question: "How long does it take to eliminate rodents?",
    answer: "The timeframe depends on the severity of the infestation. You may see a significant reduction within a few days, but complete elimination typically takes 1 to 3 weeks."
  },
  {
    question: "Do you offer ongoing rodent prevention?",
    answer: "Absolutely. Along with treatment, we seal entry points, provide sanitation recommendations, and offer ongoing monitoring plans to keep rodents from returning."
  }
];

const RodentFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="rfaq-section">
      <div className="rfaq-container">
        <h2 className="rfaq-title">Frequently Asked Questions</h2>
        
        <div className="rfaq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rfaq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="rfaq-question" 
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`rfaq-icon ${openIndex === index ? 'rotate' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="rfaq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="rfaq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RodentFAQ;
