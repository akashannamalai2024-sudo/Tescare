import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './BedbugFAQ.css';

const faqs = [
  {
    question: "Is bedbug treatment safe for my family?",
    answer: "Yes, our treatments are completely safe for your family and pets. We use EPA-approved products and follow strict safety guidelines to ensure a risk-free environment during and after the treatment process."
  },
  {
    question: "How long does bedbug treatment take?",
    answer: "A typical bedbug treatment takes between 2 to 4 hours depending on the size of the area and the severity of the infestation. We also conduct follow-up visits to ensure complete elimination."
  },
  {
    question: "Will I need to leave my home during treatment?",
    answer: "Yes, for safety reasons, we require occupants and pets to vacate the premises during the chemical application and remain out for about 4 to 6 hours until the treated areas are completely dry."
  },
  {
    question: "How can I prevent bedbugs from coming back?",
    answer: "To prevent re-infestation, we recommend using protective mattress encasements, reducing clutter, vacuuming frequently, and carefully inspecting luggage and clothes after traveling."
  }
];

const BedbugFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bfaq-section">
      <div className="bfaq-container">
        <h2 className="bfaq-title">Frequently Asked Questions</h2>
        
        <div className="bfaq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bfaq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="bfaq-question" 
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`bfaq-icon ${openIndex === index ? 'rotate' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="bfaq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="bfaq-answer">
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

export default BedbugFAQ;
