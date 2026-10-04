import React, { useState, useEffect } from 'react';
import { Play, Info, Plus, Check, Star, Clock, Calendar, ShieldAlert } from 'lucide-react';

export default function HeroBanner({
  featuredMovies,
  onPlayTrailer,
  onOpenDetails,
  watchlist,
  onToggleWatchlist
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate hero slides every 7 seconds
  useEffect(() => {
    if (!featuredMovies || featuredMovies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [featuredMovies]);

  if (!featuredMovies || featuredMovies.length === 0) return null;

  const currentMovie = featuredMovies[currentIndex];
  const isInWatchlist = watchlist.includes(currentMovie.id);

  return (
    <div className="hero-banner">
      {/* Background Image with Overlay */}
      <div 
        className="hero-backdrop"
        style={{ backgroundImage: `url(${currentMovie.backdrop})` }}
      >
        <div className="hero-gradient-overlay" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-badge-row">
          <span className="featured-tag">🔥 FEATURED SPOTLIGHT</span>
          <div className="rating-pill">
            <Star size={14} className="star-icon" />
            <span>{currentMovie.rating}</span>
            <span className="rating-max">/ 10</span>
          </div>
        </div>

        <h1 className="hero-title">{currentMovie.title}</h1>
        <p className="hero-tagline">"{currentMovie.tagline}"</p>

        {/* Quick Meta */}
        <div className="hero-meta">
          <span className="meta-item">
            <Calendar size={15} />
            {currentMovie.year}
          </span>
          <span className="meta-item">
            <Clock size={15} />
            {currentMovie.runtime}
          </span>
          <span className="meta-item age-badge">
            <ShieldAlert size={14} />
            {currentMovie.ageRating}
          </span>
          <div className="genre-pills">
            {currentMovie.genre.map((g) => (
              <span key={g} className="genre-pill">{g}</span>
            ))}
          </div>
        </div>

        <p className="hero-synopsis">{currentMovie.synopsis}</p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => onPlayTrailer(currentMovie)}
          >
            <Play size={20} className="play-icon" />
            <span>Watch Trailer</span>
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => onOpenDetails(currentMovie)}
          >
            <Info size={19} />
            <span>More Info</span>
          </button>

          <button 
            className={`btn btn-icon ${isInWatchlist ? 'in-watchlist' : ''}`}
            onClick={() => onToggleWatchlist(currentMovie.id)}
            title={isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          >
            {isInWatchlist ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {featuredMovies.map((movie, idx) => (
          <button
            key={movie.id}
            className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}: ${movie.title}`}
          />
        ))}
      </div>
    </div>
  );
}
