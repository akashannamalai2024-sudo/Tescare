import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './WoodBorerFAQ.css';

const faqs = [
  {
    question: "How do I know if I have wood borers?",
    answer: "The most common signs are tiny round exit holes in wooden surfaces, fine powdery dust (frass) collecting near furniture, or occasionally hearing a faint ticking or scratching sound from within the wood."
  },
  {
    question: "Are wood borer treatments safe for indoor furniture?",
    answer: "Yes, our specialized treatments are completely safe for indoor furniture and family members. We use targeted, low-toxicity formulations that effectively penetrate wood without posing health risks."
  },
  {
    question: "How long does the wood borer treatment take?",
    answer: "A standard treatment usually takes 2 to 4 hours depending on the severity of the infestation and the number of items being treated. Deep injection methods ensure long-lasting results."
  },
  {
    question: "Will the treatment damage my furniture's finish?",
    answer: "No, our professional technicians use advanced application methods designed to protect your furniture's polish, paint, and varnish while effectively treating the underlying wood."
  }
];

const WoodBorerFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wbfaq-section">
      <div className="wbfaq-container">
        <h2 className="wbfaq-title">Frequently Asked Questions</h2>
        
        <div className="wbfaq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`wbfaq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="wbfaq-question" 
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`wbfaq-icon ${openIndex === index ? 'rotate' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="wbfaq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="wbfaq-answer">
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

export default WoodBorerFAQ;
