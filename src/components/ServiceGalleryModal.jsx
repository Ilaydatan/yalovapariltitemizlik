import React, { useEffect, useState } from 'react';
import './ServiceGalleryModal.css';

const ServiceGalleryModal = ({ service, onClose }) => {
  const [fullscreenMedia, setFullscreenMedia] = React.useState(null);

  React.useEffect(() => {
    if (service || fullscreenMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [service, fullscreenMedia]);

  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Kapat">&times;</button>
        
        <div className="modal-header">
          <div className="modal-icon">{service.icon}</div>
          <div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>

        <div className="modal-gallery">
          {service.gallery && service.gallery.length > 0 ? (
            service.gallery.map((media, index) => (
              <div 
                key={index} 
                className="gallery-item" 
                onClick={() => setFullscreenMedia(media)}
                style={{ cursor: 'pointer' }}
              >
                {media.type === 'video' ? (
                  <video 
                    src={media.url} 
                    controls 
                    playsInline 
                    className="gallery-media"
                  />
                ) : (
                  <img src={media.url} alt={`${service.title} Görsel ${index + 1}`} className="gallery-media" />
                )}
              </div>
            ))
          ) : (
            <div className="no-media">
              <p>Bu hizmet için henüz görsel eklenmemiş.</p>
            </div>
          )}
        </div>
      </div>

      {/* Tam Ekran (Fullscreen) Görünüm */}
      {fullscreenMedia && (
        <div className="fullscreen-overlay" onClick={(e) => { e.stopPropagation(); setFullscreenMedia(null); }}>
          <button className="fullscreen-close" onClick={(e) => { e.stopPropagation(); setFullscreenMedia(null); }}>&times;</button>
          <div className="fullscreen-content-wrapper" onClick={(e) => e.stopPropagation()}>
            {fullscreenMedia.type === 'video' ? (
              <video 
                src={fullscreenMedia.url} 
                controls 
                autoPlay
                playsInline 
                className="fullscreen-media"
              />
            ) : (
              <img 
                src={fullscreenMedia.url} 
                alt="Tam Ekran Görsel" 
                className="fullscreen-media" 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceGalleryModal;
