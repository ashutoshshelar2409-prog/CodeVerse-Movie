import React, { useState, useEffect } from 'react';
import { X, Play, Plus, Check, Star, Users, MessageSquare, Film, ThumbsUp, Calendar, Clock, Award } from 'lucide-react';

export default function MovieDetailsModal({
  movie,
  onClose,
  onPlayTrailer,
  isInWatchlist,
  onToggleWatchlist,
  onAddReview
}) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, cast, reviews
  const [userRating, setUserRating] = useState(5);
  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');
  const [reviewsList, setReviewsList] = useState(movie ? movie.reviews || [] : []);

  useEffect(() => {
    if (movie) {
      setReviewsList(movie.reviews || []);
    }
  }, [movie]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!userName.trim() || !userComment.trim()) return;

    const newReview = {
      id: `rev_${Date.now()}`,
      user: userName.trim(),
      rating: userRating,
      date: 'Just now',
      comment: userComment.trim(),
      helpful: 0
    };

    const updated = [newReview, ...reviewsList];
    setReviewsList(updated);
    if (onAddReview) {
      onAddReview(movie.id, newReview);
    }
    setUserName('');
    setUserComment('');
    setUserRating(5);
  };

  const handleHelpfulVote = (reviewId) => {
    setReviewsList(prev => prev.map(r => 
      r.id === reviewId ? { ...r, helpful: r.helpful + 1 } : r
    ));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="details-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Backdrop */}
        <div 
          className="details-hero-backdrop"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        >
          <div className="details-hero-overlay" />
          <button className="details-close-btn" onClick={onClose}>
            <X size={22} />
          </button>

          <div className="details-hero-content">
            <img src={movie.poster} alt={movie.title} className="details-poster-img" />
            
            <div className="details-hero-text">
              <h1 className="details-title">{movie.title}</h1>
              <p className="details-tagline">"{movie.tagline}"</p>
              
              <div className="details-meta-row">
                <span className="details-rating-badge">
                  <Star size={15} fill="#F59E0B" color="#F59E0B" />
                  <strong>{movie.rating}</strong> / 10 ({movie.voteCount ? movie.voteCount.toLocaleString() : '12,000'} votes)
                </span>
                <span className="details-meta-item"><Calendar size={14} />{movie.year}</span>
                <span className="details-meta-item"><Clock size={14} />{movie.runtime}</span>
                <span className="details-meta-item age-tag">{movie.ageRating}</span>
              </div>

              <div className="details-action-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => onPlayTrailer(movie)}
                >
                  <Play size={18} fill="currentColor" />
                  <span>Watch Trailer</span>
                </button>

                <button 
                  className={`btn btn-secondary ${isInWatchlist ? 'in-watchlist' : ''}`}
                  onClick={() => onToggleWatchlist(movie.id)}
                >
                  {isInWatchlist ? <Check size={18} /> : <Plus size={18} />}
                  <span>{isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Navigation Tabs */}
        <div className="details-tabs">
          <button 
            className={`details-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Film size={16} />
            <span>Overview</span>
          </button>

          <button 
            className={`details-tab-btn ${activeTab === 'cast' ? 'active' : ''}`}
            onClick={() => setActiveTab('cast')}
          >
            <Users size={16} />
            <span>Cast & Crew</span>
          </button>

          <button 
            className={`details-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <MessageSquare size={16} />
            <span>User Reviews ({reviewsList.length})</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="details-tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="overview-section">
              <h3 className="section-subtitle">Synopsis</h3>
              <p className="synopsis-text">{movie.synopsis}</p>

              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Director</span>
                  <span className="info-val">{movie.director}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Screenplay / Writers</span>
                  <span className="info-val">{movie.writers ? movie.writers.join(', ') : movie.director}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Genres</span>
                  <div className="genre-pills">
                    {movie.genre.map((g) => (
                      <span key={g} className="genre-pill">{g}</span>
                    ))}
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-label">Target Audience</span>
                  <span className="info-val">{movie.ageRating} Rated</span>
                </div>
              </div>
            </div>
          )}

          {/* Cast & Crew Tab */}
          {activeTab === 'cast' && (
            <div className="cast-section">
              <h3 className="section-subtitle">Top Billed Cast</h3>
              <div className="cast-grid">
                {movie.cast && movie.cast.map((c, i) => (
                  <div key={i} className="cast-card">
                    <img src={c.avatar} alt={c.name} className="cast-avatar" />
                    <div className="cast-info">
                      <h4 className="cast-name">{c.name}</h4>
                      <p className="cast-role">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="reviews-section">
              {/* Add Review Form */}
              <div className="add-review-card">
                <h3><Award size={18} /> Write a Review</h3>
                <form onSubmit={handleSubmitReview} className="review-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. CinemaLover"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Rating</label>
                      <div className="star-rating-select">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`star-select-btn ${star <= userRating ? 'selected' : ''}`}
                            onClick={() => setUserRating(star)}
                          >
                            <Star size={20} fill={star <= userRating ? "#F59E0B" : "none"} color="#F59E0B" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Review Comment</label>
                    <textarea 
                      placeholder="Share your thoughts about the movie..."
                      rows="3"
                      value={userComment}
                      onChange={(e) => setUserComment(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-review-btn">
                    Post Community Review
                  </button>
                </form>
              </div>

              {/* Reviews List */}
              <div className="reviews-list">
                <h3>Community Feedback ({reviewsList.length})</h3>
                {reviewsList.length === 0 ? (
                  <p className="no-reviews">No reviews yet. Be the first to leave a review!</p>
                ) : (
                  reviewsList.map((rev) => (
                    <div key={rev.id} className="review-card">
                      <div className="review-card-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            {rev.user.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="reviewer-name">{rev.user}</h4>
                            <span className="review-date">{rev.date}</span>
                          </div>
                        </div>

                        <div className="review-rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < rev.rating ? "#F59E0B" : "none"} 
                              color="#F59E0B" 
                            />
                          ))}
                        </div>
                      </div>

                      <p className="review-comment">{rev.comment}</p>

                      <div className="review-card-footer">
                        <button 
                          className="helpful-btn"
                          onClick={() => handleHelpfulVote(rev.id)}
                        >
                          <ThumbsUp size={14} />
                          <span>Helpful ({rev.helpful})</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
