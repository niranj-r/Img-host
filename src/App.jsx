import React from 'react';
import ImageGallery from './components/ImageGallery';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="glass-header">
        <div className="logo">
          <span className="logo-icon"></span>
          <h1>SquareFrame</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#" className="active">Gallery</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Visuals That Inspire</h1>
            <p className="hero-subtitle">Discover our stunning collection of perfectly proportioned square photography, designed to elevate your digital experience.</p>
            <button className="primary-btn">Explore Now</button>
          </div>
          <div className="hero-glow"></div>
        </div>

        <ImageGallery />
      </main>

      <footer className="footer">
        <p>&copy; 2026 SquareFrame. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
