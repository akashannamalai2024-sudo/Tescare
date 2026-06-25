import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './BookFAQ.css';

const faqs = [
  {
    question: "Is inspection really free?",
    answer: "Yes, our initial pest inspection and consultation is completely free of charge. Our expert technician will assess your property, identify pest issues, and provide a detailed treatment plan without any obligation."
  },
  {
    question: "How soon can a technician visit?",
    answer: "We offer same-day or next-day service depending on availability in your area. For emergency situations, we also have a 24/7 rapid response team."
  },
  {
    question: "How long does pest treatment take?",
    answer: "The duration depends on the type of pest, the size of your property, and the severity of the infestation. A standard treatment usually takes between 1 to 3 hours."
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes, we provide a service warranty on most of our pest control treatments. If pests return during the warranty period, we will re-treat the affected areas at no additional cost."
  }
];

const BookFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="book-faq-section">
      <div className="bfaq-container">
        <motion.div 
          className="bfaq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
        </motion.div>

        <div className="bfaq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bfaq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="bfaq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <ChevronDown 
                  className={`bfaq-icon ${activeIndex === index ? 'active' : ''}`} 
                  size={20} 
                />
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="bfaq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
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

export default BookFAQ;
