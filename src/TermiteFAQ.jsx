import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './TermiteFAQ.css';

const faqs = [
  {
    question: "How do I know if I have termites?",
    answer: "Signs of a termite infestation include mud tubes on exterior walls, hollow-sounding wood, discarded wings near windows or doors, and frass (termite droppings)."
  },
  {
    question: "How long does termite treatment last?",
    answer: "A professional termite treatment can last anywhere from 3 to 5 years, depending on the type of treatment used and the environmental conditions around your property."
  },
  {
    question: "Is termite treatment safe for my home?",
    answer: "Yes, we use eco-friendly and approved chemicals that are safe for your family and pets when applied by our certified professionals."
  },
  {
    question: "Can termites come back after treatment?",
    answer: "While treatments are highly effective, termites can return if environmental conditions favor them. We recommend annual inspections to ensure your home remains protected."
  }
];

const TermiteFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="tfaq-section">
      <div className="tfaq-container">
        <motion.h2 
          className="tfaq-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="tfaq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="tfaq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="tfaq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`tfaq-icon ${openIndex === index ? 'tfaq-icon-open' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="tfaq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="tfaq-answer">
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

export default TermiteFAQ;
