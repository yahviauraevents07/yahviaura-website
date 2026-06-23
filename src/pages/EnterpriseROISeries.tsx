import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faCalendar, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import './EnterpriseROISeries.css';

const EnterpriseROISeries = () => {
  const articles = [
    {
      title: "The Enterprise Guide to Forecasting Budgets and Eliminating Hidden Costs in Global MICE",
      preview: "In high-stakes Corporate MICE procurement, catastrophic budget overruns are rarely caused by massive, obvious line items. Instead, they are the result of a silent, invisible operational bleed. Learn how to protect your corporate capital.",
      url: "/blog/the-enterprise-roi-series/the-enterprise-guide-to-forecasting-budgets-and-eliminating-hidden-costs-in-global-mice",
      date: "June 23, 2026",
      readTime: "4 min read",
      keywords: ["Corporate MICE", "Event Budget Forecasting", "Hidden Costs in Event Planning", "The Aura Resonance Framework", "Corporate event overheads", "Event compliance liability", "Global event logistics"]
    },
    {
      title: "Blending the 5 P's and 7 P's into The Aura Resonance Framework",
      preview: "In the global enterprise landscape, executing a corporate event is a multi-million dollar variable. Learn how traditional frameworks fall short in modern, high-stakes global execution, and discover our unified delivery system: The Aura Resonance Framework.",
      url: "/blog/the-enterprise-roi-series/blending-5ps-7ps-into-aura-resonance-framework",
      date: "June 19, 2026",
      readTime: "3 min read",
      keywords: ["Corporate MICE", "Event Planning Frameworks", "Event ROI", "The Aura Resonance Framework"]
    }
  ];

  return (
    <div className="roi-series">
      {/* Hero Section */}
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
            The Enterprise <span className="text-gradient">ROI & Framework Series</span>
          </motion.h1>
          <motion.p 
            className="roi-series__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Data-backed planning metrics, cost optimization structures, and proprietary methodologies that align procurement compliance with unforgettable human resonance.
          </motion.p>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="roi-series__list-section">
        <div className="container roi-series__container">
          <div className="roi-series__grid">
            {articles.map((article, index) => (
              <motion.div 
                key={index}
                className="article-preview-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="article-preview-card__header">
                  <div className="article-preview-card__meta">
                    <span>
                      <FontAwesomeIcon icon={faUser} /> By Yahvi Aura Team
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCalendar} /> {article.date}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} /> {article.readTime}
                    </span>
                  </div>
                  <div className="article-preview-card__keywords">
                    {article.keywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="keyword-pill">{kw}</span>
                    ))}
                  </div>
                </div>

                <h2 className="article-preview-card__title">{article.title}</h2>
                <p className="article-preview-card__excerpt">{article.preview}</p>

                <Link to={article.url} className="article-preview-card__btn">
                  <FontAwesomeIcon icon={faBookOpen} /> Read Full Article
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseROISeries;
