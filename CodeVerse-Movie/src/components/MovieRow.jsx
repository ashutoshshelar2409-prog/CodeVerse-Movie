import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

export default function MovieRow({
  title,
  icon: Icon,
  movies,
  onPlayTrailer,
  onOpenDetails,
  watchlist,
  onToggleWatchlist
}) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  if (!movies || movies.length === 0) return null;

  return (
    <section className="movie-row-section">
      <div className="row-header">
        <div className="row-title-group">
          {Icon && <Icon className="row-title-icon" size={22} />}
          <h2 className="row-title">{title}</h2>
          <span className="row-count">({movies.length})</span>
        </div>
        <div className="row-scroll-controls">
          <button
            className="row-scroll-btn"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="row-scroll-btn"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="row-cards-container" ref={scrollRef}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onPlayTrailer={onPlayTrailer}
            onOpenDetails={onOpenDetails}
            isInWatchlist={watchlist.includes(movie.id)}
            onToggleWatchlist={onToggleWatchlist}
          />
        ))}
      </div>
    </section>
  );
}
