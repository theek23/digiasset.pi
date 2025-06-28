import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

type PageType = 'home' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle URL routing
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/terms') {
      setCurrentPage('terms');
    } else if (path === '/privacy-policy') {
      setCurrentPage('privacy');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const navigateToPage = (page: PageType, url: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', url);
    window.scrollTo(0, 0);
  };

  const showTerms = () => navigateToPage('terms', '/terms');
  const showPrivacy = () => navigateToPage('privacy', '/privacy-policy');
  const showHome = () => navigateToPage('home', '/');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/terms') {
        setCurrentPage('terms');
      } else if (path === '/privacy-policy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPage === 'terms') {
    return <TermsOfService onBack={showHome} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={showHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <ComingSoon />
      <Footer onTermsClick={showTerms} onPrivacyClick={showPrivacy} />
    </div>
  );
}

export default App;