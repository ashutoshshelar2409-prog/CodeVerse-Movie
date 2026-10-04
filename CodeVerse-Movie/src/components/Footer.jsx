import React, { useState } from 'react';
import { Film, Heart, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <Film className="footer-logo-icon" size={26} />
            <span className="brand-code">CodeVerse</span>
            <span className="brand-movies">MOVIES</span>
          </div>
          <p className="footer-desc">
            Your premium destination for movie discovery, high-definition trailers, cast insight, and film community reviews.
          </p>
        </div>

        <div className="footer-nav-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#trending">Trending Now</a></li>
            <li><a href="#top-rated">Top Rated</a></li>
            <li><a href="#sci-fi">Sci-Fi Blockbusters</a></li>
            <li><a href="#action">Action & Thrillers</a></li>
          </ul>
        </div>

        <div className="footer-newsletter-col">
          <h4>Stay Updated</h4>
          <p>Subscribe to receive weekly trailer drop alerts and movie news.</p>
          {subscribed ? (
            <div className="subscribed-success">
              <Check size={18} />
              <span>Subscribed! Check your inbox for updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CodeVerse Movies. Built with React & Vite.</p>
        <p className="made-with">Crafted with <Heart size={14} className="heart-icon" /> for cinephiles everywhere.</p>
      </div>
    </footer>
  );
}
