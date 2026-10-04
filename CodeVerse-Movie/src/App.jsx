import React, { useState } from 'react';
import './App.css';

// Movie Data Array
const moviesData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    duration: "2h 22m",
    language: "English",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailerUrl: "https://www.youtube.com/embed/PLl99D0A64c"
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    duration: "2h 32m",
    language: "English",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
    description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests.",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    duration: "2h 28m",
    language: "English",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into a CEO's mind.",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    duration: "2h 49m",
    language: "English",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
    description: "When Earth becomes uninhabitable, a team of astronauts travels through a wormhole in search of a new home for humanity.",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    duration: "2h 34m",
    language: "English",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife entwine in four tales of violence and redemption.",
    trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY"
  },
  {
    id: 6,
    title: "Spirited Away",
    year: 2001,
    genre: "Animation",
    rating: 8.6,
    duration: "2h 5m",
    language: "Japanese",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",
    description: "A 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    trailerUrl: "https://www.youtube.com/embed/ByXuk9QqQkk"
  },
  {
    id: 7,
    title: "Parasite",
    year: 2019,
    genre: "Drama",
    rating: 8.5,
    duration: "2h 12m",
    language: "Korean",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    trailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY"
  },
  {
    id: 8,
    title: "Cyber Nexus 2099",
    year: 2025,
    genre: "Sci-Fi",
    rating: 9.1,
    duration: "2h 20m",
    language: "English",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
    description: "In a neon futuristic city, a rogue hacker uncovers an AI code that threatens to alter human consciousness forever.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

function App() {
  // 1. React State Variables
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Modal details
  const [tonightPick, setTonightPick] = useState(null); // Tonight's Pick recommendation
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false);

  // 2. Add or Remove Movie from Watchlist
  const toggleWatchlist = (movieId) => {
    if (watchlist.includes(movieId)) {
      setWatchlist(watchlist.filter((id) => id !== movieId));
    } else {
      setWatchlist([...watchlist, movieId]);
    }
  };

  // 3. Tonight's Pick Feature: Randomly select a movie to watch tonight!
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
    const matchesGenreQuery = movie.genre.toLowerCase().includes(query);
    const matchesSearch = matchesTitle || matchesGenreQuery;

    // Filter by Genre dropdown
    const matchesGenreSelect = selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenreSelect;
  });

  // 5. Sort Movies by Rating or Release Year
  if (sortBy === "rating") {
    displayedMovies.sort((a, b) => b.rating - a.rating); // Highest rating first
  } else if (sortBy === "year") {
    displayedMovies.sort((a, b) => b.year - a.year); // Newest release year first
  }

  return (
    <div className="app">
      {/* Navbar Header */}
      <header className="header">
        <div className="logo-section">
          <h1>🍿 Movie Night</h1>
          <p>Find the perfect movie for your night in!</p>
        </div>

        {/* Tonight's Pick Button & Watchlist Toggle */}
        <div className="header-buttons">
          <button className="tonight-pick-btn" onClick={pickTonightMovie}>
            🎲 Pick a Movie for Tonight!
          </button>
          
          <button 
            className={`watchlist-tab-btn ${showWatchlistOnly ? 'active' : ''}`}
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
            <span>🎉 <strong>Tonight's Pick:</strong> {tonightPick.title} ({tonightPick.year}) - ⭐ {tonightPick.rating}</span>
          </div>
          <button className="banner-view-btn" onClick={() => setSelectedMovie(tonightPick)}>
            View Details
          </button>
        </div>
      )}

      {/* Controls Bar: Search, Genre Filter, Sort Dropdown */}
      <div className="controls">
        {/* Search by Title or Genre */}
        <div className="control-group">
          <label>Search Movie:</label>
          <input
            type="text"
            placeholder="Search by title or genre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-box"
          />
        </div>

        {/* Genre Filter */}
        <div className="control-group">
          <label>Filter Genre:</label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="select-box"
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Crime">Crime</option>
            <option value="Animation">Animation</option>
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
        {showWatchlistOnly ? "My Saved Watchlist" : "Browse Movies"} ({displayedMovies.length})
      </h2>

      {/* Movie Cards Display Grid */}
      <div className="movie-grid">
        {displayedMovies.length > 0 ? (
          displayedMovies.map((movie) => {
            const isSaved = watchlist.includes(movie.id);

            return (
              <div key={movie.id} className="movie-card">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                
                <div className="card-body">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-tag"><strong>Genre:</strong> {movie.genre}</p>
                  <p className="movie-tag"><strong>Year:</strong> {movie.year}</p>
                  <p className="movie-rating">⭐ <strong>{movie.rating}</strong> / 10</p>

                  <div className="card-actions">
                    <button 
                      className="details-btn"
                      onClick={() => setSelectedMovie(movie)}
                    >
                      View Details
                    </button>

                    <button 
                      className={`watchlist-btn ${isSaved ? 'remove' : 'add'}`}
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
            <p>No movies found!</p>
            {showWatchlistOnly && <p>Your watchlist is currently empty. Click "Add to Watchlist" on any movie card!</p>}
          </div>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMovie(null)}>✖ Close</button>
            
            <h2>{selectedMovie.title}</h2>

            {/* Feature 4: Display duration, language, rating, year, genre */}
            <div className="detail-tags">
              <span className="badge">🗓 Year: {selectedMovie.year}</span>
              <span className="badge">⏱ Duration: {selectedMovie.duration}</span>
              <span className="badge">🗣 Language: {selectedMovie.language}</span>
              <span className="badge">🎭 Genre: {selectedMovie.genre}</span>
              <span className="badge rating-badge">⭐ Rating: {selectedMovie.rating}/10</span>
            </div>

            <p className="description">{selectedMovie.description}</p>

            {/* Trailer Embed */}
            <div className="trailer-box">
              <h4>Watch Trailer:</h4>
              <iframe
                src={selectedMovie.trailerUrl}
                title={selectedMovie.title}
                allowFullScreen
              ></iframe>
            </div>

            <div className="modal-footer">
              <button 
                className={`watchlist-btn ${watchlist.includes(selectedMovie.id) ? 'remove' : 'add'}`}
                onClick={() => toggleWatchlist(selectedMovie.id)}
              >
                {watchlist.includes(selectedMovie.id) ? "Remove from Watchlist ❤️" : "Add to Watchlist 🤍"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Movie Night Web App. Simple & Easy First-Year Project.</p>
      </footer>
    </div>
  );
}

export default App;
