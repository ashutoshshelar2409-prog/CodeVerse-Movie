import React from 'react';
import { Bookmark, Trash2, Film } from 'lucide-react';
import MovieCard from './MovieCard';

export default function WatchlistView({
  watchlistIds,
  movies,
  onPlayTrailer,
  onOpenDetails,
  onToggleWatchlist,
  onClearWatchlist,
  onNavigateExplore
}) {
  const watchlistMovies = movies.filter((m) => watchlistIds.includes(m.id));

  return (
    <div className="watchlist-view-container">
      <div className="watchlist-header">
        <div className="watchlist-title-group">
          <Bookmark className="watchlist-title-icon" size={28} />
          <div>
            <h1 className="watchlist-title">My Watchlist</h1>
            <p className="watchlist-subtitle">
              {watchlistMovies.length} {watchlistMovies.length === 1 ? 'saved movie' : 'saved movies'} ready to watch
            </p>
          </div>
        </div>

        {watchlistMovies.length > 0 && (
          <button 
            className="btn btn-outline-danger clear-watchlist-btn"
            onClick={onClearWatchlist}
          >
            <Trash2 size={16} />
            <span>Clear Watchlist</span>
          </button>
        )}
      </div>

      {watchlistMovies.length === 0 ? (
        <div className="watchlist-empty-state">
          <div className="empty-icon-wrapper">
            <Film size={48} />
          </div>
          <h2>Your Watchlist is Empty</h2>
          <p>Explore our cinematic collection and bookmark your favorite titles to watch later.</p>
          <button className="btn btn-primary" onClick={onNavigateExplore}>
            Browse Movies Now
          </button>
        </div>
      ) : (
        <div className="watchlist-grid">
          {watchlistMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlayTrailer={onPlayTrailer}
              onOpenDetails={onOpenDetails}
              isInWatchlist={true}
              onToggleWatchlist={onToggleWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
}
