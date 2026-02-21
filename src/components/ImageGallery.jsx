import React from 'react';

const ImageGallery = () => {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `/images/Frame ${i + 1}.png`,
    alt: `Frame ${i + 1}`
  }));

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Premium Image Collection</h2>
        <p>A curated selection of pixel-perfect square images.</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="gallery-item"
            style={{ "--animation-order": idx }}
          >
            <div className="image-wrapper">
              <img src={img.url} alt={img.alt} loading="lazy" />
              <div className="image-overlay">
                <span className="overlay-text">View details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
