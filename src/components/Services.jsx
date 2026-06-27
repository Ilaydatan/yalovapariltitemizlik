import React, { useState } from 'react';
import './Services.css';
import ServiceGalleryModal from './ServiceGalleryModal';

const servicesData = [
  {
    id: 1,
    title: 'Ev Temizliği',
    description: 'Yaşam alanlarınızı baştan aşağıya arındırıyor, size ve ailenize tertemiz bir ortam sunuyoruz.',
    icon: '🏠',
    size: 'large',
    bgImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    gallery: [
      { type: 'video', url: '/ev_video.mp4' },
      { type: 'video', url: '/galeri/ev_video2.mp4' },
      { type: 'video', url: '/galeri/ev_video3.mp4' },
      { type: 'video', url: '/galeri/ev_video4.mp4' },
      { type: 'video', url: '/galeri/ev_video5.mp4' },
      { type: 'image', url: '/galeri/ev.jpeg' },
      { type: 'image', url: '/galeri/ev2.jpeg' },
      { type: 'image', url: '/galeri/ev3.jpeg' },
      { type: 'image', url: '/galeri/ev4.jpeg' },
      { type: 'image', url: '/galeri/ev5.jpeg' },
      { type: 'video', url: '/galeri/villa_video.mp4' },
      { type: 'image', url: '/galeri/villa.jpeg' }
    ]
  },
  {
    id: 2,
    title: 'Ofis ve İş Yeri',
    description: 'Çalışma alanlarınızda maksimum verimlilik için hijyenik ve profesyonel temizlik.',
    icon: '🏢',
    size: 'normal',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      { type: 'video', url: '/galeri/ofis_video.mp4' }
    ]
  },
  {
    id: 3,
    title: 'Detaylı Temizlik (Buharlı)',
    description: 'En ince ayrıntısına kadar derinlemesine temizlik ile gizli kirlere veda edin.',
    icon: '✨',
    size: 'normal',
    bgImage: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80',
    gallery: [
      { type: 'video', url: '/galeri/buhar_video.mp4' },
      { type: 'video', url: '/galeri/buhar_video2.mp4' },
      { type: 'image', url: '/galeri/buhar.jpeg' }
    ]
  },
  {
    id: 5,
    title: 'Dış Cephe & Cam',
    description: 'Işıltılı, iz bırakmayan profesyonel cam ve dış cephe temizliği.',
    icon: '🪟',
    size: 'normal',
    bgImage: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=800&q=80',
    gallery: [
      { type: 'image', url: '/galeri/cam.jpeg' }
    ]
  },
  {
    id: 6,
    title: 'İnşaat Sonrası',
    description: 'Zorlu moloz, toz ve kalıntıları ustalıkla temizleyerek mekanı kullanıma hazır hale getiriyoruz.',
    icon: '🛠️',
    size: 'normal',
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=800&q=80',
    gallery: [
      { type: 'image', url: '/galeri/inşaat.jpeg' },
      { type: 'image', url: '/galeri/inşaat2.jpeg' },
      { type: 'image', url: '/galeri/inşaat3.jpeg' },
      { type: 'image', url: '/galeri/inşaat4.jpeg' },
      { type: 'image', url: '/galeri/inşaat5.jpeg' }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="services" className="section services-section">
        <div className="container">
          <div className="text-center mx-auto">
            <div className="badge">Uzmanlık Alanlarımız</div>
            <h2 className="section-title">Ayrıcalıklı <span className="highlight-gradient">Hizmetlerimiz</span></h2>
            <p className="section-subtitle mx-auto">
              İhtiyacınıza özel, profesyonel ekipmanlar ve çevre dostu ürünlerle sunduğumuz kusursuz temizlik çözümlerimizi keşfedin.
            </p>
          </div>

          <div className="services-bento-grid">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`service-bento-card ${service.size}`}
              >
                <div className="bento-bg-glow"></div>
                <div className="bento-watermark">{service.icon}</div>
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <button 
                    onClick={() => setSelectedService(service)} 
                    className="service-link"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  >
                    Detaylı İncele <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGalleryModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </>
  );
};

export default Services;
