import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Emine E.',
    role: 'Ev Temizliği',
    text: 'Yalova parıltıya teşekkür ederim evimi tertemiz ve mis gibi temizlediğiniz için işinizde başarılar dilerim. Güvenin ve kalitenin tam adresi, herkese tavsiye ederim.',
    initial: 'E',
    color: 'var(--color-primary)'
  },
  {
    id: 2,
    name: 'Nesrin S.',
    role: 'Ev Temizliği',
    text: 'Sıddı hanım çok güler yüzlü işini güzel temiz titizlikle yaptı temizliğini beğendim kendisine çok teşekkür ederim.',
    initial: 'N',
    color: 'var(--color-secondary)'
  },
  {
    id: 3,
    name: 'Tuğberk K.',
    role: 'Ev Temizliği',
    text: 'Harika. Annemlere iş beğendirmek çok zordur, onların testinden başarıyla geçti. Elinize sağlık.',
    initial: 'T',
    color: 'var(--color-accent)'
  },
  {
    id: 4,
    name: 'Nursah Y.',
    role: 'Ev Temizliği',
    text: 'Çok memnun kaldım. Sıddı hanım eli çabuk ve gayet detaylı temizliyor.',
    initial: 'N',
    color: 'var(--color-primary)'
  },
  {
    id: 5,
    name: 'Fatih S.',
    role: 'Ev Temizliği',
    text: 'Sıddı hanım işini titizlikle yapıyor. Detaylı ev temizliğinde anneme çok yardımcı oldu.',
    initial: 'F',
    color: 'var(--color-secondary)'
  },
  {
    id: 6,
    name: 'Demet K.',
    role: 'Ev Temizliği',
    text: 'Sıddı hanıma teşekkürler çok memnun kaldım.',
    initial: 'D',
    color: 'var(--color-accent)'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">Müşteri Yorumları</span>
          <h2 className="section-title">Hakkımızda Neler Söylediler?</h2>
          <p className="section-subtitle mx-auto">
            Yalova Parıltı Temizlik ailesi olarak en büyük gurur kaynağımız, mutlu müşterilerimizin paha biçilemez geri dönüşleridir.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <div className="stars">
                ★★★★★
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <div 
                  className="author-avatar" 
                  style={{ backgroundColor: item.color }}
                >
                  {item.initial}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
