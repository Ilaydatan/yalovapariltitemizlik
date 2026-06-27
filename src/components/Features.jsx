import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="about" className="section features-section">
      <div className="container features-container">
        <div className="features-content">
          <div className="badge">Neden Biz?</div>
          <h2 className="section-title text-left">
            Temizlikte <br/> <span className="highlight-gradient">Mükemmellik</span> Standardı
          </h2>
          <p className="features-desc">
            Yalova Parıltı Temizlik olarak mekanlarınızı sadece temizlemiyor, aynı zamanda değer katıyoruz. Müşteri memnuniyetine olan sarsılmaz inancımız ve kurumsal yaklaşımımızla Yalova'nın en çok tercih edilen temizlik markasıyız.
          </p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🛡️</span>
              </div>
              <div className="feature-text">
                <h4>Güvenilir ve Uzman Kadro</h4>
                <p>Ekibimizin her bir üyesi özenle seçilmiş, eğitimli ve yüksek kalite standartlarımıza uygun profesyonellerden oluşur.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🌿</span>
              </div>
              <div className="feature-text">
                <h4>Çevre Dostu Ürünler</h4>
                <p>Ailenize, evcil hayvanlarınıza ve doğaya zarar vermeyen, sağlığınızı koruyan etkili formüller kullanıyoruz.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">⏱️</span>
              </div>
              <div className="feature-text">
                <h4>Esnek Planlama</h4>
                <p>Zamanınızın değerini biliyoruz. Size en uygun gün ve saatte, tam vaktinde hizmet sunuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="features-image-wrapper">
          <div className="image-mesh-bg"></div>
          <div className="image-card top-image">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" alt="Profesyonel Temizlik Ekibi" />
          </div>
          <div className="image-card bottom-image">
            <img src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=2070&auto=format&fit=crop" alt="Detaylı Temizlik Hizmeti" />
          </div>
          <div className="experience-badge premium-badge">
            <div className="badge-ring"></div>
            <span className="years">5+</span>
            <span className="text">Yıllık<br/>Tecrübe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
