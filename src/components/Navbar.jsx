import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-contact">
            <a href="tel:+905411564904" className="contact-item">
              <span className="contact-icon">📞</span> 0541 156 49 04
            </a>
            <a href="https://wa.me/905411564904" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-icon">💬</span> WhatsApp
            </a>
            <a href="https://www.instagram.com/yalova_parilti_temizlik?igsh=MXViaW4xbjhmMmJzdw==" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-icon">📸</span> Instagram
            </a>
            <span className="contact-item d-none-mobile">
              <span className="contact-icon">📍</span> Yalova, Merkez
            </span>
          </div>
        </div>
      </div>

      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#" className="logo-link">
            <img src="/logo.png" alt="Yalova Parıltı Temizlik Logo" className="brand-logo-img" />
          </a>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Ana Sayfa</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Hizmetlerimiz</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Kurumsal</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Yorumlar</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>İletişim</a>
        </div>

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
