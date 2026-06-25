import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './MosquitoFAQ.css';

const faqs = [
  {
    question: "Are the mosquito treatments safe for children and pets?",
    answer: "Yes, absolutely. We use EPA-approved products, and once the treatment has dried (usually within 30 minutes), your yard is completely safe for children and pets to enjoy."
  },
  {
    question: "How long does the mosquito control treatment last?",
    answer: "Our standard barrier treatments are highly effective and typically provide robust protection against mosquitoes for 21 to 30 days, depending on local weather conditions."
  },
  {
    question: "Do I need to be home during the service?",
    answer: "No, as long as we have clear access to your exterior property and any gates are unlocked, you do not need to be home while our technicians perform the treatment."
  },
  {
    question: "What if it rains after my treatment?",
    answer: "Our products are specially formulated to withstand normal rainfall once they have fully dried. If heavy rain occurs immediately after application, we will assess and re-treat if necessary."
  }
];

const MosquitoFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mfaq-section">
      <div className="mfaq-container">
        <motion.h2 
          className="mfaq-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mfaq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="mfaq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="mfaq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`mfaq-icon ${openIndex === index ? 'mfaq-icon-open' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="mfaq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mfaq-answer">
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

export default MosquitoFAQ;
