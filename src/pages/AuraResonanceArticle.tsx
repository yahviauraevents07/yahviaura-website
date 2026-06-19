import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faClock, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './AuraResonanceArticle.css';

const AuraResonanceArticle = () => {
  const keywords = ["Corporate MICE", "Event Planning Frameworks", "Event ROI", "The Aura Resonance Framework"];

  return (
    <div className="blog-article">
      {/* Article Header / Hero */}
      <header className="blog-article__hero">
        <div className="blog-article__hero-bg" />
        <div className="blog-article__hero-overlay" />
        
        <div className="container blog-article__hero-content">
          {/* Breadcrumb */}
          <div className="blog-article__breadcrumb">
            <Link to="/blogs">Blogs</Link>
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            <Link to="/blog/the_enterprise_ROI_series">Enterprise ROI & Frameworks</Link>
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            <span className="breadcrumb-current">The Aura Resonance Framework</span>
          </div>

          <Link to="/blog/the_enterprise_ROI_series" className="blog-article__back">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Series
          </Link>

          {/* Keyword Badges */}
          <div className="blog-article__keywords">
            {keywords.map((kw, index) => (
              <span key={index} className="keyword-badge">{kw}</span>
            ))}
          </div>

          {/* H1 Title */}
          <motion.h1 
            className="blog-article__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blending the 5 P's and 7 P's into <span className="text-gradient">The Aura Resonance Framework™</span>
          </motion.h1>

          {/* Meta Info */}
          <div className="blog-article__meta">
            <span>
              <FontAwesomeIcon icon={faUser} /> By Yahvi Aura Team
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendar} /> June 19, 2026
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} /> 3 min read
            </span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="blog-article__body-section">
        <div className="container blog-article__container">
          <div className="blog-article__content">
            <p className="blog-article__lead">
              In the global enterprise landscape, executing a corporate event is a multi-million dollar variable. For decades, traditional event management text has relied on rigid academic structures to guide execution: the 5 P’s of Event Planning (People, Purpose, Place, Promotion, Positioning) and the 7 P’s of Event Management (Planning, Promotion, Pricing, Place, Product, People, Process).
            </p>

            <p>
              While these classic frameworks offer a solid operational foundation, they frequently fall short in modern, high-stakes global execution. They view events as a series of clinical, logistical boxes to be checked.
            </p>

            <p>
              At <strong>Yahvi Aura Events</strong>, we have evolved these traditional industry standards into a unified, high-ticket delivery system: <strong className="text-highlight">The Aura Resonance Framework™</strong>. This proprietary methodology ensures that global scale, rigorous procurement compliance, and deep human emotional connection operate in perfect alignment.
            </p>

            {/* In-Article CTA */}
            <div className="article-cta">
              <h3>Elevate Your Next Corporate Summit</h3>
              <p>
                Let our corporate management experts implement the Aura Resonance Framework for your next high-stakes corporate event.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=919258207515&text=Hello%0D%0Alike+to+know+more+about+Aura+Resonance+Framework&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="article-cta__btn"
              >
                Consult Our Planners
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AuraResonanceArticle;
