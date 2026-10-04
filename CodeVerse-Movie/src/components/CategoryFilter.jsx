import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

const GENRES = ["All", "Sci-Fi", "Action", "Fantasy", "Crime", "Thriller", "Animation", "Drama", "Adventure"];

export default function CategoryFilter({
  selectedGenre,
  setSelectedGenre,
  sortBy,
  setSortBy,
  totalResults
}) {
  return (
    <div className="filter-bar-container">
      <div className="filter-genre-section">
        <div className="filter-label">
          <Filter size={16} />
          <span>Genres:</span>
        </div>
        <div className="genre-scroll-wrapper">
          {GENRES.map((genre) => (
            <button
              key={genre}
              className={`genre-chip ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-sort-section">
        <span className="results-count">
          <strong>{totalResults}</strong> {totalResults === 1 ? 'Movie' : 'Movies'}
        </span>
        <div className="sort-dropdown-wrapper">
          <ArrowUpDown size={15} className="sort-icon" />
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Top Rated</option>
            <option value="newest">Release Year (Newest)</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
