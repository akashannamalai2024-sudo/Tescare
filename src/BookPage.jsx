import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import BookHero from './BookHero.jsx';
import BookForm from './BookForm.jsx';
import BookProcess from './BookProcess.jsx';
import BookFAQ from './BookFAQ.jsx';
import BookCTA from './BookCTA.jsx';
import Footer from './Footer.jsx';

const BookPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="book-page-wrapper">
      <Navbar />
      <BookHero />
      <BookForm />
      <BookProcess />
      <BookFAQ />
      <BookCTA />
      <Footer />
    </div>
  );
};

export default BookPage;
