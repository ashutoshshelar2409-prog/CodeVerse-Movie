import React, { useState } from "react";
import moviesData from "./data/movies.json";
import "./App.css";

function App() {
  // 1. React State Variables
  const [darkMode, setDarkMode] = useState(false); // Dark / Light Mode state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Modal details
  const [tonightPick, setTonightPick] = useState(null); // Tonight's recommended movie
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false);

  // Extract unique genres & languages for dropdown filters
  const allGenres = [
    "All",
    ...Array.from(new Set(moviesData.flatMap((m) => m.genres || []))).sort(),
  ];
  const allLanguages = [
    "All",
    ...Array.from(
      new Set(moviesData.map((m) => m.language).filter(Boolean)),
    ).sort(),
  ];

  // 2. Add or Remove Movie from Watchlist
  const toggleWatchlist = (movieId) => {
    if (watchlist.includes(movieId)) {
      setWatchlist(watchlist.filter((id) => id !== movieId));
    } else {
      setWatchlist([...watchlist, movieId]);
    }
  };

  // 3. Tonight's Pick Feature: Randomly recommend a top movie!
  const pickTonightMovie = () => {
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    const chosenMovie = moviesData[randomIndex];
    setTonightPick(chosenMovie);
    setSelectedMovie(chosenMovie); // Open modal for tonight's pick
  };

  // 4. Search and Filter Logic
  let displayedMovies = moviesData.filter((movie) => {
    // Filter by Watchlist tab if active
    if (showWatchlistOnly && !watchlist.includes(movie.id)) {
      return false;
    }

    // Search by title OR genre
    const query = searchTerm.toLowerCase().trim();
    const matchesTitle = movie.title.toLowerCase().includes(query);
    const matchesGenreQuery =
      movie.genres && movie.genres.some((g) => g.toLowerCase().includes(query));
    const matchesSearch = matchesTitle || matchesGenreQuery;

    // Filter by Genre dropdown
    const matchesGenreSelect =
      selectedGenre === "All" ||
      (movie.genres && movie.genres.includes(selectedGenre));

    // Filter by Language dropdown
    const matchesLanguageSelect =
      selectedLanguage === "All" || movie.language === selectedLanguage;

    return matchesSearch && matchesGenreSelect && matchesLanguageSelect;
  });

  // 5. Sort Movies by Rating or Release Year
  if (sortBy === "rating") {
    displayedMovies.sort((a, b) => b.rating - a.rating); // Highest rating first
  } else if (sortBy === "year") {
    displayedMovies.sort((a, b) => b.year - a.year); // Newest release year first
  }

  // Image error handler for broken poster URLs
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/";
  };

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : ""}`}>
      <div className="app">
        {/* Header Navigation */}
        <header className="header">
          <div className="logo-section">
            <h1> Movie Night</h1>
            <p>Explore {moviesData.length} movies from our dataset!</p>
          </div>

          {/* Header Action Buttons: Dark Mode, Tonight's Pick & Watchlist */}
          <div className="header-buttons">
            <button
              className="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <button className="tonight-pick-btn" onClick={pickTonightMovie}>
              🎲 Pick a Movie for Tonight!
            </button>

            <button
              className={`watchlist-tab-btn ${showWatchlistOnly ? "active" : ""}`}
              onClick={() => setShowWatchlistOnly(!showWatchlistOnly)}
            >
              ❤️ My Watchlist ({watchlist.length})
            </button>
          </div>
        </header>

        {/* Tonight's Pick Recommended Banner */}
        {tonightPick && (
          <div className="tonight-banner">
            <div className="banner-info">
              <span>
                🎉 <strong>Tonight's Pick:</strong> {tonightPick.title} (
                {tonightPick.year}) - ⭐ {tonightPick.rating}
              </span>
            </div>
            <button
              className="banner-view-btn"
              onClick={() => setSelectedMovie(tonightPick)}
            >
              View Details
            </button>
          </div>
        )}

        {/* Controls Bar: Search, Genre Filter, Language Filter, Sort Dropdown */}
        <div className="controls">
          {/* Search by Title or Genre */}
          <div className="control-group">
            <label>Search Movie:</label>
            <input
              type="text"
              placeholder="Search title or genre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-box"
            />
          </div>

          {/* Genre Filter */}
          <div className="control-group">
            <label>Genre:</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="select-box"
            >
              {allGenres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="control-group">
            <label>Language:</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="select-box"
            >
              {allLanguages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="control-group">
            <label>Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select-box"
            >
              <option value="none">Default Sort</option>
              <option value="rating">Rating (High to Low)</option>
              <option value="year">Release Year (Newest First)</option>
            </select>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="section-title">
          {showWatchlistOnly ? "My Saved Watchlist" : "Browse Movies"} (
          {displayedMovies.length})
        </h2>

        {/* Movie Cards Display Grid */}
        <div className="movie-grid">
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => {
              const isSaved = watchlist.includes(movie.id);

              return (
                <div key={movie.id} className="movie-card">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                    onError={handleImageError}
                  />

                  <div className="card-body">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-tag">
                      <strong>Genre:</strong>{" "}
                      {movie.genres ? movie.genres.join(", ") : "N/A"}
                    </p>
                    <p className="movie-tag">
                      <strong>Year:</strong> {movie.year}
                    </p>
                    <p className="movie-rating">
                      ⭐ <strong>{movie.rating}</strong> / 10
                    </p>

                    <div className="card-actions">
                      <button
                        className="details-btn"
                        onClick={() => setSelectedMovie(movie)}
                      >
                        View Details
                      </button>

                      <button
                        className={`watchlist-btn ${isSaved ? "remove" : "add"}`}
                        onClick={() => toggleWatchlist(movie.id)}
                      >
                        {isSaved ? "Remove ❤️" : "Add to Watchlist 🤍"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-movies">
              <p>No movies found matching your search!</p>
              {showWatchlistOnly && (
                <p>
                  Your watchlist is currently empty. Click "Add to Watchlist" on
                  any movie card!
                </p>
              )}
            </div>
          )}
        </div>

        {/* Movie Details Modal */}
        {selectedMovie && (
          <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-btn"
                onClick={() => setSelectedMovie(null)}
              >
                ✖ Close
              </button>

              <div className="modal-header-flex">
                <img
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  className="modal-poster"
                  onError={handleImageError}
                />
                <div className="modal-header-text">
                  <h2>{selectedMovie.title}</h2>
                  <p className="director-name">
                    <strong>Director:</strong> {selectedMovie.director || "N/A"}
                  </p>
                  {selectedMovie.industry && (
                    <p className="industry-name">
                      <strong>Industry:</strong> {selectedMovie.industry}
                    </p>
                  )}

                  {/* Feature 4: Display duration, language, rating, year, genre */}
                  <div className="detail-tags">
                    <span className="badge">🗓 Year: {selectedMovie.year}</span>
                    <span className="badge">
                      ⏱ Duration:{" "}
                      {selectedMovie.duration
                        ? `${selectedMovie.duration} mins`
                        : "N/A"}
                    </span>
                    <span className="badge">
                      🗣 Language: {selectedMovie.language || "N/A"}
                    </span>
                    <span className="badge">
                      🎭 Genre:{" "}
                      {selectedMovie.genres
                        ? selectedMovie.genres.join(", ")
                        : "N/A"}
                    </span>
                    <span className="badge rating-badge">
                      ⭐ Rating: {selectedMovie.rating}/10
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-body-section">
                <h4>Overview:</h4>
                <p className="description">
                  {selectedMovie.overview ||
                    "No overview available for this movie."}
                </p>

                {selectedMovie.cast && selectedMovie.cast.length > 0 && (
                  <div className="cast-box">
                    <h4>Starring Cast:</h4>
                    <p className="cast-list">{selectedMovie.cast.join(", ")}</p>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  className={`watchlist-btn ${watchlist.includes(selectedMovie.id) ? "remove" : "add"}`}
                  onClick={() => toggleWatchlist(selectedMovie.id)}
                >
                  {watchlist.includes(selectedMovie.id)
                    ? "Remove from Watchlist ❤️"
                    : "Add to Watchlist 🤍"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Movie Night Web App. Connected to
            provided movies.json dataset.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
