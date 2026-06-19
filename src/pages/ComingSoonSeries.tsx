import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ComingSoonSeries.css';

interface ComingSoonSeriesProps {
  title: string;
}

const ComingSoonSeries = ({ title }: ComingSoonSeriesProps) => {
  // Map subtitles dynamically based on titles for a richer look
  const getSubtitle = (t: string) => {
    switch (t) {
      case "Borderless Logistics & Scale":
        return "Strategies for global event mobility, international vendor management, and cross-border delivery pipelines.";
      case "Risk Mitigation":
        return "Strategic contingency design, vulnerability assessments, and incident response structures for enterprise events.";
      case "Enterprise Procurement & Budget Optimization":
        return "Strategic financial metrics, localized vendor optimization, and procurement compliance pipelines.";
      default:
        return "Expert insights and framework guides compiled by Yahvi Aura Events.";
    }
  };

  return (
    <div className="roi-series coming-soon-series">
      {/* Hero Section - Identical to EnterpriseROISeries */}
      <section className="roi-series__hero">
        <div className="roi-series__hero-bg" />
        <div className="roi-series__hero-overlay" />
        
        <div className="container roi-series__hero-content">
          <Link to="/blogs" className="roi-series__back">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Blogs
          </Link>
          <motion.h1 
            className="roi-series__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title === "Enterprise Procurement & Budget Optimization" ? (
              <>Enterprise <span className="text-gradient">Procurement & Budget Optimization</span></>
            ) : title === "Borderless Logistics & Scale" ? (
              <>Borderless <span className="text-gradient">Logistics & Scale</span></>
            ) : (
              <><span className="text-gradient">{title}</span></>
            )}
          </motion.h1>
          <motion.p 
            className="roi-series__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {getSubtitle(title)}
          </motion.p>
        </div>
      </section>

      {/* Articles Listing Area - Replaced with a small Coming Soon banner */}
      <section className="roi-series__list-section">
        <div className="container roi-series__container">
          <motion.div 
            className="coming-soon-block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="coming-soon-block__badge">Articles Coming Soon</div>
            <p className="coming-soon-block__text">
              Our editorial and operational teams are currently compiling strategic case studies, 
              procurement checklists, and research papers for this series. Subscribe to get notified.
            </p>
            <div className="coming-soon-block__action">
              <Link to="/contact" className="coming-soon-block__btn">
                <FontAwesomeIcon icon={faEnvelope} /> Notify Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonSeries;
