import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './CockroachFAQ.css';

const faqs = [
  {
    question: "How quickly will I see results?",
    answer: "You will typically start seeing a significant reduction in cockroach activity within 24 to 48 hours after our treatment. Complete elimination usually takes a few weeks depending on the severity of the infestation."
  },
  {
    question: "Is the treatment safe for my kitchen?",
    answer: "Yes, our treatments are specifically designed to be safe for kitchen environments. We use targeted gel baits and eco-friendly solutions that are placed safely out of reach and do not contaminate your food preparation areas."
  },
  {
    question: "Why do cockroaches keep coming back?",
    answer: "Cockroaches often return due to accessible food sources, hidden moisture leaks, or unsealed entry points. Our comprehensive treatment not only eliminates the current population but also helps identify and address these root causes."
  },
  {
    question: "Do I need to empty my kitchen cabinets?",
    answer: "For our standard gel bait treatments, you generally do not need to empty your cabinets. If a more extensive spray treatment is required for a severe infestation, our technicians will guide you beforehand on how to prepare."
  }
];

const CockroachFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="cfaq-section">
      <div className="cfaq-container">
        <motion.h2 
          className="cfaq-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="cfaq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="cfaq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="cfaq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`cfaq-icon ${openIndex === index ? 'cfaq-icon-open' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="cfaq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="cfaq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CockroachFAQ;
