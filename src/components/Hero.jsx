import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-mesh-bg"></div>
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Yalova'nın Lider Temizlik Firması
          </div>
          <h1 className="hero-title">
            Mekanlarınıza <br />
            <span className="highlight-gradient">Gerçek Parıltıyı</span> <br />
            Geri Kazandırın
          </h1>
          <p className="hero-description">
            Yalova Parıltı Temizlik olarak, ev ve ofisleriniz için en yüksek standartlarda, güvenilir ve profesyonel temizlik hizmeti sunuyoruz. Yaşam alanlarınızı uzman ellere teslim edin, farkı hissedin.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-secondary">Hizmetlerimiz</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-text">Mutlu Müşteri</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">%100</span>
              <span className="stat-text">Memnuniyet Garantisi</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-backdrop"></div>
          <div className="image-wrapper main-image">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Yalova Parıltı Modern Temiz Ev" 
            />
          </div>
          <div className="image-wrapper secondary-image">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
              alt="Profesyonel Temizlik Detayı" 
            />
          </div>
          
          <div className="floating-card trust-card">
            <div className="trust-icon">🛡️</div>
            <div className="trust-content">
              <span className="trust-title">Güvenilir</span>
              <span className="trust-desc">Uzman Kadro</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
