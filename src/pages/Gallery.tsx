import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  // Define image extensions (some are png, some are jpg)
  const imageExtensions: { [key: number]: string } = {
    1: 'png', 2: 'png', 3: 'png', 4: 'png', 5: 'png', 6: 'png',
    7: 'png', 8: 'png', 9: 'png', 10: 'png', 11: 'png', 12: 'png',
    13: 'png', 14: 'png', 15: 'png', 16: 'png', 17: 'png', 18: 'png',
    19: 'jpg', 20: 'jpg', 21: 'jpg', 22: 'jpg', 23: 'jpg', 24: 'jpg',
    25: 'jpg', 26: 'jpg', 27: 'jpg', 28: 'jpg', 29: 'jpg', 30: 'jpg',
    31: 'jpg', 32: 'jpg', 33: 'jpg', 34: 'jpg', 35: 'jpg', 36: 'jpg',
    37: 'jpg', 38: 'jpg', 39: 'jpg', 40: 'jpg', 41: 'jpg', 42: 'jpg', 43: 'jpg'
  };

  // Gallery rows configuration
  const galleryRows = [
    { start: 1, end: 6, direction: 'left' },
    { start: 7, end: 12, direction: 'right' },
    { start: 13, end: 18, direction: 'left' },
    { start: 19, end: 24, direction: 'right' },
    { start: 25, end: 30, direction: 'left' },
    { start: 31, end: 36, direction: 'right' },
    { start: 37, end: 43, direction: 'left' }
  ];

  const getImagePath = (num: number) => {
    const ext = imageExtensions[num] || 'jpg';
    return `/gallery/${num}.${ext}`;
  };

  const renderGalleryRow = (start: number, end: number, direction: string, index: number) => {
    const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    // Duplicate images for infinite scroll
    const duplicatedImages = [...images, ...images];

    return (
      <div key={index} className={`gallery-row gallery-row--${direction}`}>
        <div className="gallery-row__scroll-container">
          <div className="gallery-row__track">
            {duplicatedImages.map((num, idx) => (
              <div key={`${num}-${idx}`} className="gallery-row__item">
                <img
                  src={getImagePath(num)}
                  alt={`Gallery moment ${num}`}
                  className="gallery-row__image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero__video-container">
          <video
            className="gallery-hero__video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/gallery/galleryvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-hero__overlay" />
        </div>

        <div className="gallery-hero__content">
          <motion.h1
            className="gallery-hero__heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A Legacy of Masterpieces: <span className="text-gradient">Our Visual Journey</span>
          </motion.h1>
        </div>
      </section>

      {/* Gallery Content Section */}
      <section className="gallery-content">
        <div className="container">
          {/* Section Header */}
          <motion.div
            className="gallery-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gallery-header__title">Moments of Excellence</h2>
            <p className="gallery-header__subtitle">
              Explore our curated collection of unforgettable events, celebrations, and experiences crafted with precision and passion
            </p>
          </motion.div>

          {/* Gallery Card with Infinite Scroll Rows */}
          <motion.div
            className="gallery-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {galleryRows.map((row, index) =>
              renderGalleryRow(row.start, row.end, row.direction, index)
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <motion.div
            className="gallery-cta__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gallery-cta__title">Ready to Create Your Own Masterpiece?</h2>
            <p className="gallery-cta__text">
              Let us transform your vision into an unforgettable experience. Connect with us today and let's bring your event dreams to life.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-cta__button"
            >
              <svg
                className="gallery-cta__button-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="gallery-cta__button-text">Connect on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
