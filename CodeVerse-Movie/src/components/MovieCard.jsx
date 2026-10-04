import React from 'react';
import { Play, Info, Bookmark, Check, Star } from 'lucide-react';

export default function MovieCard({
  movie,
  onPlayTrailer,
  onOpenDetails,
  isInWatchlist,
  onToggleWatchlist
}) {
  return (
    <div className="movie-card">
      <div className="card-poster-wrapper">
        <img
          src={movie.poster}
          alt={movie.title}
          className="card-poster-img"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="card-top-badges">
          <span className="card-age-tag">{movie.ageRating}</span>
          <div className="card-rating-tag">
            <Star size={13} fill="#F59E0B" color="#F59E0B" />
            <span>{movie.rating}</span>
          </div>
        </div>

        {/* Bookmark Quick Action Button */}
        <button
          className={`card-bookmark-btn ${isInWatchlist ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist(movie.id);
          }}
          title={isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        >
          {isInWatchlist ? <Check size={16} /> : <Bookmark size={16} />}
        </button>

        {/* Hover Action Overlay */}
        <div className="card-hover-overlay" onClick={() => onOpenDetails(movie)}>
          <button
            className="play-overlay-btn"
            onClick={(e) => {
              e.stopPropagation();
              onPlayTrailer(movie);
            }}
            title="Watch Trailer"
          >
            <Play size={24} fill="currentColor" />
          </button>
          
          <button 
            className="info-overlay-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(movie);
            }}
            title="View Details"
          >
            <Info size={18} />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-details" onClick={() => onOpenDetails(movie)}>
        <h3 className="card-title" title={movie.title}>{movie.title}</h3>
        <div className="card-meta">
          <span className="card-year">{movie.year}</span>
          <span className="card-dot">•</span>
          <span className="card-director">{movie.director}</span>
        </div>
        <div className="card-genres">
          {movie.genre.slice(0, 2).map((g) => (
            <span key={g} className="card-genre-tag">{g}</span>
          ))}
          {movie.genre.length > 2 && (
            <span className="card-genre-more">+{movie.genre.length - 2}</span>
          )}
        </div>
      </div>
    </div>
  );
}
