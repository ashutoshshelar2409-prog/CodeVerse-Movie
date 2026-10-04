import React, { useEffect } from 'react';
import { X, Star, Calendar, Clock } from 'lucide-react';

export default function TrailerModal({ movie, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  // Use YouTube embed URL
  const embedUrl = `https://www.youtube-nocookie.com/embed/${movie.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="trailer-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <h2>{movie.title} - Official Trailer</h2>
            <div className="modal-meta-pills">
              <span className="modal-meta-pill">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                {movie.rating}
              </span>
              <span className="modal-meta-pill">
                <Calendar size={13} />
                {movie.year}
              </span>
              <span className="modal-meta-pill">
                <Clock size={13} />
                {movie.runtime}
              </span>
            </div>
          </div>

          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close trailer modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Video Player */}
        <div className="video-responsive-wrapper">
          <iframe
            src={embedUrl}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Footer Info */}
        <div className="modal-footer-info">
          <p className="modal-synopsis">{movie.synopsis}</p>
          <div className="modal-tags">
            {movie.genre.map((g) => (
              <span key={g} className="modal-genre-tag">{g}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
