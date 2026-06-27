import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <a href="#" className="footer-logo">
            <img src="/logo.png" alt="Yalova Parıltı Temizlik Logo" className="brand-logo-img-footer" />
          </a>
          <p className="footer-desc">
            Profesyonel, güvenilir ve en yüksek kalitede temizlik hizmetlerini kapınıza getiriyoruz. Siz hayatın tadını çıkarın, mekanlarınızın parıltısını biz sağlayalım.
          </p>
        </div>
        
        <div className="footer-col links-col">
          <h4 className="footer-heading">Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#services">Hizmetlerimiz</a></li>
            <li><a href="#about">Kurumsal</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>
        
        <div className="footer-col services-col">
          <h4 className="footer-heading">Hizmetler</h4>
          <ul>
            <li><a href="#">Ev Temizliği</a></li>
            <li><a href="#">Ofis Temizliği</a></li>
            <li><a href="#">Detaylı Temizlik</a></li>
            <li><a href="#">İnşaat Sonrası</a></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Bize Ulaşın</h4>
          <ul className="contact-info">
            <li>
              <span className="icon">📍</span>
              <span>Yalova Merkez, Yalova, Türkiye</span>
            </li>
            <li>
              <span className="icon">📞</span>
              <span><a href="tel:+905411564904" style={{color: 'inherit', textDecoration: 'none'}}>0541 156 49 04</a></span>
            </li>
            <li>
              <span className="icon">💬</span>
              <span><a href="https://wa.me/905411564904" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>WhatsApp İletişim</a></span>
            </li>
            <li>
              <span className="icon">📸</span>
              <span><a href="https://www.instagram.com/yalova_parilti_temizlik?igsh=MXViaW4xbjhmMmJzdw==" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Instagram</a></span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Yalova Parıltı Temizlik. Tüm Hakları Saklıdır.</p>
          <div className="legal-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
