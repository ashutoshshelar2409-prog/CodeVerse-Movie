import React from 'react';
import { Film, Search, Bookmark, Compass, Flame, Star, X } from 'lucide-react';

export default function Navbar({
  searchQuery,
  setSearchQuery,
  watchlistCount,
  activeTab,
  setActiveTab
}) {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Brand Logo */}
        <div 
          className="navbar-brand"
          onClick={() => setActiveTab('explore')}
        >
          <div className="logo-icon-wrapper">
            <Film className="logo-icon" />
          </div>
          <div className="logo-text">
            <span className="brand-code">CodeVerse</span>
            <span className="brand-movies">MOVIES</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Search movies, directors, actors, genres..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="search-clear-btn" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Navigation Tabs */}
        <nav className="navbar-nav">
          <button
            className={`nav-link ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveTab('explore')}
          >
            <Compass size={18} />
            <span>Explore</span>
          </button>

          <button
            className={`nav-link ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            <Flame size={18} />
            <span>Trending</span>
          </button>

          <button
            className={`nav-link ${activeTab === 'topRated' ? 'active' : ''}`}
            onClick={() => setActiveTab('topRated')}
          >
            <Star size={18} />
            <span>Top Rated</span>
          </button>

          <button
            className={`nav-link watchlist-btn ${activeTab === 'watchlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('watchlist')}
          >
            <Bookmark size={18} />
            <span>Watchlist</span>
            {watchlistCount > 0 && (
              <span className="watchlist-badge">{watchlistCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
