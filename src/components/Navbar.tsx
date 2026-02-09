import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLightbulb, faHeart, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

interface SubItem {
  name: string;
  path: string;
}

interface PortfolioCategory {
  id: string;
  title: string;
  icon: any; // FontAwesome icon
  items: SubItem[];
  path: string;
}

const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'corporate',
    title: 'Corporate Events',
    icon: faBuilding,
    path: '/corporate-events',
    items: [
      { name: 'Conferences & Seminars', path: '/portfolio/corporate/conferences' },
      { name: 'Product Launches', path: '/portfolio/corporate/product-launches' },
      { name: 'Corporate retreats & team building', path: '/portfolio/corporate/retreats' },
      { name: 'Award ceremonies', path: '/portfolio/corporate/awards' },
      { name: 'Gala dinners', path: '/portfolio/corporate/gala' },
      { name: 'Hybrid & virtual events', path: '/portfolio/corporate/virtual' },
      { name: 'Networking events', path: '/portfolio/corporate/networking' },
      { name: 'Political meets', path: '/portfolio/corporate/political' },
      { name: 'CSR & Charity events', path: '/portfolio/corporate/csr' },
      { name: 'Exhibitions & trade shows', path: '/portfolio/corporate/exhibitions' }
    ]
  },
  {
    id: 'experiential',
    title: 'Experiential Events',
    icon: faLightbulb,
    path: '/experiential-events',
    items: [
      { name: 'Brand activations', path: '/portfolio/experiential/brand-activations' },
      { name: 'Influencer events', path: '/portfolio/experiential/influencer' },
      { name: 'Travel odyssey', path: '/portfolio/experiential/travel' }
    ]
  },
  {
    id: 'weddings',
    title: 'Weddings',
    icon: faHeart,
    path: '/weddings-events',
    items: [
      { name: 'Pre-wedding functions', path: '/portfolio/weddings/pre-wedding' },
      { name: 'Décor & theme design', path: '/portfolio/weddings/decor' },
      { name: 'Heaven Hunt', path: '/portfolio/weddings/heaven-hunt' },
      { name: 'Destination weddings', path: '/portfolio/weddings/destination' }
    ]
  },
  {
    id: 'social',
    title: 'Social Events',
    icon: faChampagneGlasses,
    path: '/social-events',
    items: [
      { name: 'Parties', path: '/portfolio/social/parties' },
      { name: 'Birthdays', path: '/portfolio/social/birthdays' },
      { name: 'Anniversaries', path: '/portfolio/social/anniversaries' },
      { name: 'Baby showers', path: '/portfolio/social/baby-showers' },
      { name: 'Milestone events', path: '/portfolio/social/milestones' },
      { name: 'Clicks & Flicks', path: '/portfolio/social/clicks-flicks' },
      { name: 'Healthfit memories', path: '/portfolio/social/healthfit' }
    ]
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discover Us', path: '/discover' },
    { name: 'Our Diverse Portfolio', path: '/portfolio', hasMegaMenu: true, isPlaceholder: true },
    { name: 'Gallery', path: '/gallery' }
  ];

  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img 
            src="/logo.png" 
            alt="Yahvi Aura Events" 
            className={`navbar__logo-image ${isScrolled ? 'navbar__logo-image--colored' : 'navbar__logo-image--white'}`}
          />
        </Link>

        {/* Navigation Links */}
        <div className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="navbar__link-wrapper"
              onMouseEnter={() => link.hasMegaMenu && !isMobileMenuOpen && setShowPortfolioMenu(true)}
              onMouseLeave={() => link.hasMegaMenu && !isMobileMenuOpen && setShowPortfolioMenu(false)}
            >
              {link.isPlaceholder ? (
                <>
                  <div
                    className={`navbar__link navbar__link--placeholder ${isScrolled ? 'navbar__link--scrolled' : 'navbar__link--transparent'} ${
                      isActiveLink(link.path) ? 'navbar__link--active' : ''
                    } ${isMobileMenuOpen ? 'navbar__link--mobile' : ''}`}
                    onClick={() => {
                      if (isMobileMenuOpen) {
                        setMobilePortfolioOpen(!mobilePortfolioOpen);
                      }
                    }}
                  >
                    {link.name}
                    {link.hasMegaMenu && (
                      <svg 
                        className={`navbar__link-arrow ${mobilePortfolioOpen && isMobileMenuOpen ? 'navbar__link-arrow--open' : ''}`}
                        width="12" 
                        height="8" 
                        viewBox="0 0 12 8" 
                        fill="none"
                      >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <motion.span
                      className="navbar__link-glow"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  {/* Mobile Portfolio Accordion */}
                  {isMobileMenuOpen && link.hasMegaMenu && (
                    <AnimatePresence>
                      {mobilePortfolioOpen && (
                        <motion.div
                          className="navbar__mobile-portfolio"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          {portfolioCategories.map((category) => (
                            <div key={category.id} className="navbar__mobile-category">
                              <div 
                                className="navbar__mobile-category-header"
                                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                              >
                                <span className="navbar__mobile-category-icon">
                                  <FontAwesomeIcon icon={category.icon} />
                                </span>
                                <span className="navbar__mobile-category-title">{category.title}</span>
                                <Link
                                  to={category.path}
                                  className="navbar__mobile-explore-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMobileMenuOpen(false);
                                    setMobilePortfolioOpen(false);
                                  }}
                                >
                                  <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 16 16" 
                                    fill="none"
                                  >
                                    <path 
                                      d="M6 12L10 8L6 4" 
                                      stroke="currentColor" 
                                      strokeWidth="2" 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Link>
                                {category.id !== 'social' && (
                                  <svg 
                                    className={`navbar__mobile-category-arrow ${expandedCategory === category.id ? 'navbar__mobile-category-arrow--open' : ''}`}
                                    width="12" 
                                    height="8" 
                                    viewBox="0 0 12 8" 
                                    fill="none"
                                  >
                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                )}
                              </div>
                              
                              <AnimatePresence>
                                {expandedCategory === category.id && (
                                  <motion.ul
                                    className="navbar__mobile-category-list"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {category.items.map((item) => (
                                      <li key={item.path}>
                                        <div className="navbar__mobile-category-item">
                                          {item.name}
                                        </div>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`navbar__link ${isScrolled ? 'navbar__link--scrolled' : 'navbar__link--transparent'} ${
                    isActiveLink(link.path) ? 'navbar__link--active' : ''
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobilePortfolioOpen(false);
                  }}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <svg 
                      className="navbar__link-arrow" 
                      width="12" 
                      height="8" 
                      viewBox="0 0 12 8" 
                      fill="none"
                    >
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <motion.span
                    className="navbar__link-glow"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )}

              {/* Mega Menu for Portfolio - Desktop Only */}
              {link.hasMegaMenu && !isMobileMenuOpen && (
                <AnimatePresence>
                  {showPortfolioMenu && (
                    <motion.div
                      className="navbar__mega-menu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="navbar__mega-menu-columns">
                        {portfolioCategories.map((category, index) => (
                          <div key={category.id} className="navbar__mega-menu-column">
                            <div className="navbar__mega-menu-column-header">
                              <span className="navbar__mega-menu-column-icon">
                                <FontAwesomeIcon icon={category.icon} />
                              </span>
                              <h3>{category.title}</h3>
                              <Link 
                                to={category.path} 
                                className="navbar__mega-menu-explore-btn"
                                onClick={() => setShowPortfolioMenu(false)}
                              >
                                <svg 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 16 16" 
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path 
                                    d="M6 12L10 8L6 4" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <ul className="navbar__mega-menu-column-list">
                              {category.items.map((item) => (
                                <li key={item.path}>
                                  <div 
                                    className="navbar__mega-menu-link navbar__mega-menu-link--placeholder"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    {item.name}
                                  </div>
                                </li>
                              ))}
                            </ul>
                            {index < portfolioCategories.length - 1 && (
                              <div className="navbar__mega-menu-divider" />
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="navbar__cta">
          <motion.button
            className={`navbar__cta-button ${isScrolled ? 'navbar__cta-button--scrolled' : 'navbar__cta-button--transparent'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
