import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faCalendar, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import './EnterpriseROISeries.css';

const EnterpriseProcurementSeries = () => {
  const articles = [
    {
      title: "The Enterprise Guide to Forecasting Budgets and Eliminating Hidden Costs in Global MICE",
      preview: "In high-stakes Corporate MICE procurement, catastrophic budget overruns are rarely caused by massive, obvious line items. Instead, they are the result of a silent, invisible operational bleed. Learn how to protect your corporate capital.",
      url: "/blog/enterprise-procurement-&-budget-optimization/the-enterprise-guide-to-forecasting-budgets-and-eliminating-hidden-costs-in-global-mice",
      date: "June 23, 2026",
      readTime: "4 min read",
      keywords: ["Corporate MICE", "Event Budget Forecasting", "Hidden Costs in Event Planning", "The Aura Resonance Framework", "Corporate event overheads", "Event compliance liability", "Global event logistics"]
    }
  ];

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
            Enterprise <span className="text-gradient">Procurement & Budget Optimization</span>
          </motion.h1>
          <motion.p 
            className="roi-series__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Strategic financial metrics, localized vendor optimization, and procurement compliance pipelines.
          </motion.p>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="roi-series__list-section">
        <div className="container roi-series__container">
          <div className="roi-series__grid">
            {sortedArticles.map((article, index) => (
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

export default EnterpriseProcurementSeries;
