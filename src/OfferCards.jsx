import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Home, Shield, Droplets, CheckCircle2 } from 'lucide-react';
import './OfferCards.css';

const offers = [
  {
    tag: "LIMITED TIME",
    title: "50% OFF",
    subtitle: "Cockroach Control",
    topBg: "#ff1122",
    oldPrice: "₹3,999",
    newPrice: "₹1,999",
    icon: Bug,
    features: [
      "Complete cockroach elimination",
      "Gel baiting & spray treatment",
      "3 months warranty"
    ],
    btnText: "Claim Offer",
    footerText: "Offer valid till March 31, 2026"
  },
  {
    tag: "BEST DEAL",
    title: "30% OFF",
    subtitle: "Bird Net Installation",
    topBg: "#ff5e00",
    oldPrice: "₹4,999",
    newPrice: "₹3,499",
    icon: Home,
    features: [
      "UV resistant netting",
      "Professional installation",
      "3 year warranty"
    ],
    btnText: "Claim Offer",
    footerText: "Offer valid till April 15, 2026"
  },
  {
    tag: "FREE SERVICE",
    title: "100% FREE",
    subtitle: "Termite Inspection",
    topBg: "#2b70ff",
    oldPrice: "₹1,500",
    newPrice: "FREE",
    icon: Shield,
    features: [
      "Professional inspection",
      "Detailed assessment report",
      "Treatment recommendations"
    ],
    btnText: "Book Free Inspection",
    footerText: "Limited slots available"
  }
];

const OfferCards = () => {
  return (
    <section className="oc-section">
      <div className="oc-container">
        <div className="oc-grid">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div 
                key={index}
                className="oc-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Top Section */}
                <div className="oc-card-top" style={{ backgroundColor: offer.topBg }}>
                  <div className="oc-tag">{offer.tag}</div>
                  <h3 className="oc-title">{offer.title}</h3>
                  <p className="oc-subtitle">{offer.subtitle}</p>
                </div>

                {/* Bottom Section */}
                <div className="oc-card-bottom">
                  <div className="oc-price-row">
                    <Icon className="oc-main-icon" size={32} strokeWidth={1.5} />
                    <div className="oc-price-details">
                      <span className="oc-old-price">{offer.oldPrice}</span>
                      <span className="oc-new-price">{offer.newPrice}</span>
                    </div>
                  </div>

                  <ul className="oc-features">
                    {offer.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="oc-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="oc-btn" onClick={() => window.location.hash = '#book'}>{offer.btnText}</button>
                  <p className="oc-footer">{offer.footerText}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferCards;
