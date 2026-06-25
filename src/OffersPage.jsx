import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import OfferHero from './OfferHero.jsx';
import OfferCards from './OfferCards.jsx';
import ComboPackages from './ComboPackages.jsx';
import PestCTA from './PestCTA.jsx';
import Footer from './Footer.jsx';

const OffersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="offers-page-wrapper">
      <Navbar />
      <OfferHero />
      <OfferCards />
      <ComboPackages />
      <PestCTA />
      <Footer />
    </div>
  );
};

export default OffersPage;
