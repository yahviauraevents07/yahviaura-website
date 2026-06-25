import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faGlobe, 
  faShieldHalved, 
  faFileInvoiceDollar, 
  faArrowRight, 
  faChevronDown 
} from '@fortawesome/free-solid-svg-icons';
import './Blogs.css';

const Blogs = () => {
  const blogList = [
    {
      title: "The Enterprise ROI & Framework Series",
      description: "Discover strategic framework models and return on investment benchmarks that justify and optimize enterprise event allocations.",
      url: "/blog/the-enterprise-ROI-series",
      icon: faChartLine
    },
    {
      title: "Borderless Logistics & Scale",
      description: "Navigate global operations and cross-border vendor ecosystems with flawless execution, ensuring scale without friction.",
      url: "/blog/borderless-logistics",
      icon: faGlobe
    },
    {
      title: "Risk Mitigation",
      description: "Analyze event vulnerabilities, build bulletproof fallback architectures, and secure logistics to maintain operational integrity.",
      url: "/blog/risk-mitigation",
      icon: faShieldHalved
    },
    {
      title: "Enterprise Procurement & Budget Optimization",
      description: "Optimize corporate event budgets using targeted vendor negotiations, clear metrics, and robust procurement alignments.",
      url: "/blog/enterprise-procurement-&-budget-optimization",
      icon: faFileInvoiceDollar
    }
  ];

  return (
    <div className="blogs">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="blogs-hero__bg-container">
          <div className="blogs-hero__bg" />
          <div className="blogs-hero__overlay" />
        </div>

        <div className="blogs-hero__content">
          <motion.div
            className="blogs-hero__text-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="blogs-hero__title">
              Our <span className="text-gradient">Insights & Strategies</span>
            </h1>
            <p className="blogs-hero__description">
              Explore our comprehensive series of insights, industry frameworks, logistics strategies, 
              and optimization guidelines, curated by the expert team at Yahvi Aura Events to keep you ahead.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="blogs-hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => {
            document.getElementById('blogs-list')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </motion.div>
      </section>

      {/* Blog Cards Section */}
      <section className="blogs-section" id="blogs-list">
        <div className="blogs-section__container">
          <div className="blogs-grid">
            {blogList.map((blog, index) => (
              <Link
                key={index}
                to={blog.url}
                className="blog-card-link"
              >
                <motion.div
                  className="blog-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="blog-card__icon-wrapper">
                    <FontAwesomeIcon icon={blog.icon} className="blog-card__icon" />
                  </div>
                  <h3 className="blog-card__title">{blog.title}</h3>
                  <p className="blog-card__description">{blog.description}</p>
                  <div className="blog-card__link">
                    Read Series
                    <FontAwesomeIcon icon={faArrowRight} className="blog-card__arrow" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Section */}
      <section className="blogs-cta">
        <div className="blogs-cta__overlay" />
        <div className="blogs-cta__content">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="blogs-cta__title">Ready to Craft an Impactful Event?</h2>
            <p className="blogs-cta__text">
              Transform your strategic goals into an exceptional physical experience. Let our teams guide you 
              through ROI modeling, global logistics, and budget optimization.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=919258207515&text=Hello%0D%0Alike+to+know+more+infomation&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blogs-cta__button"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
