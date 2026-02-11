import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import './Discover.css';

const Discover = () => {
  const [activeApproach, setActiveApproach] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompletedApproach, setHasCompletedApproach] = useState(false);
  const approachRef = useRef<HTMLDivElement>(null);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const approaches = [
    {
      title: 'Thoughtful Design',
      image: '/discover/thoughtful.jpg',
      color: '#fe00dd'
    },
    {
      title: 'Transparent Processes',
      image: '/discover/transparent.jpg',
      color: '#FF1493'
    },
    {
      title: 'Strong Vendor Partnerships',
      image: '/discover/strongvendor.jpg',
      color: '#ffd700'
    },
    {
      title: 'On-Ground Coordination',
      image: '/discover/onground.jpg',
      color: '#fe00dd'
    },
    {
      title: 'Global Expertise',
      image: '/discover/global.jpg',
      color: '#FF1493'
    },
    {
      title: 'Founder-Led Quality Control',
      image: '/discover/founder.jpg',
      color: '#ffd700'
    },
    {
      title: 'Emotional & Brand Goals',
      image: '/discover/emotionalbrand.jpg',
      color: '#fe00dd'
    }
  ];

  // Check if approach card is fully in view
  useEffect(() => {
    const checkVisibility = () => {
      if (!approachRef.current) return;
      
      const card = approachRef.current.querySelector('.discover-approach__card');
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if the entire card is visible in viewport
      const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;
      // Also check if card takes most of the viewport (for smaller screens)
      const isMostlyVisible = rect.top >= -50 && rect.bottom <= windowHeight + 50;
      
      if ((isFullyVisible || isMostlyVisible) && !hasCompletedApproach) {
        setIsLocked(true);
      } else if (rect.top > windowHeight || rect.bottom < 0) {
        // Card is completely out of view
        if (hasCompletedApproach || activeApproach === 0) {
          setIsLocked(false);
        }
      }
    };

    // Initial check
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility, { passive: true });
    
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [hasCompletedApproach, activeApproach]);

  // Handle wheel events for locked scrolling
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isLocked) return;

    e.preventDefault();
    
    const now = Date.now();
    // Throttle scroll events
    if (now - lastScrollTime.current < 150) return;
    lastScrollTime.current = now;

    scrollAccumulator.current += e.deltaY;
    
    // Threshold for changing approach
    const threshold = 80;
    
    if (scrollAccumulator.current > threshold) {
      scrollAccumulator.current = 0;
      if (activeApproach < approaches.length - 1) {
        setActiveApproach(prev => prev + 1);
      } else {
        // Completed all approaches, unlock
        setHasCompletedApproach(true);
        setIsLocked(false);
      }
    } else if (scrollAccumulator.current < -threshold) {
      scrollAccumulator.current = 0;
      if (activeApproach > 0) {
        setActiveApproach(prev => prev - 1);
      } else {
        // At the beginning, going up, unlock
        setIsLocked(false);
      }
    }
  }, [isLocked, activeApproach, approaches.length]);

  // Handle touch events for mobile scrolling
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!isLocked) return;

    touchEndY.current = e.changedTouches[0].clientY;
    const difference = touchStartY.current - touchEndY.current;

    const now = Date.now();
    // Throttle scroll events
    if (now - lastScrollTime.current < 150) return;
    lastScrollTime.current = now;

    // Threshold for changing approach
    const threshold = 40;

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swiped up - next approach
        if (activeApproach < approaches.length - 1) {
          setActiveApproach(prev => prev + 1);
        } else {
          // Completed all approaches, unlock
          setHasCompletedApproach(true);
          setIsLocked(false);
        }
      } else {
        // Swiped down - previous approach
        if (activeApproach > 0) {
          setActiveApproach(prev => prev - 1);
        } else {
          // At the beginning, going up, unlock
          setIsLocked(false);
        }
      }
    }
  }, [isLocked, activeApproach, approaches.length]);

  // Attach wheel and touch listeners
  useEffect(() => {
    const section = approachRef.current;
    if (!section) return;

    if (isLocked) {
      // Prevent default scroll on the whole document when locked
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isLocked, handleWheel, handleTouchStart, handleTouchEnd]);

  // Reset when scrolling back to top
  useEffect(() => {
    const handleScroll = () => {
      if (approachRef.current) {
        const rect = approachRef.current.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          setHasCompletedApproach(false);
          setActiveApproach(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="discover">
      {/* Hero Section with Video */}
      <section className="discover-hero">
        <div className="discover-hero__video-container">
          <video
            className="discover-hero__video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/discover/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="discover-hero__overlay" />
        </div>

        <div className="discover-hero__content">
          <motion.h1
            className="discover-hero__heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Exceeding Expectations: Crafting Unique, Global Events with{' '}
            <span className="text-gradient">Creative Precision</span>
          </motion.h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="discover-about">
        <div className="container">
          <motion.div
            className="discover-about__content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="discover-about__header">
              <div className="discover-about__line"></div>
              <h2 className="discover-about__title">About Us</h2>
              <div className="discover-about__line"></div>
            </div>

            <div className="discover-about__text">
              <p className="discover-about__intro">
                <strong>Yahvi Aura Events</strong> is a premium event management company in Ghaziabad, India. We specialize in corporate events that drives business success and celebrations that honour life's milestones. By blending creativity, strategy, and seamless execution, we craft experiences that feel effortless, meaningful, and unforgettable.
              </p>

              <p>
                Our credibility lies in our distinctive style of working—an approach that combines innovation with precision. We deliver timely, customized solutions tailored to your needs, ensuring every engagement feels unique and deeply valued. Drawing upon decades of expertise in research, planning, and execution, our team brings unparalleled professionalism and cultural sensitivity to each event.
              </p>

              <p>
                At Yahvi Aura, we thrive on working with global clients across diverse cultures, countries, and industries. This enables us to design events in exotic destinations and historic venues across India, while also delivering world-class corporate experiences such as conferences, seminars, product launches, and leadership forums for both Indian and international organizations.
              </p>

              <p>
                We believe in building long-term partnerships with our clients—relationships founded on trust, creativity, and excellence. Whether it's a high-profile corporate summit or a luxury destination wedding, we constantly strive to exceed expectations and provide platforms that help our clients achieve their passions and dreams.
              </p>

              <p className="discover-about__closing">
                Let's design your next experience together—because at Yahvi Aura Events, every detail matters, and every event is an opportunity to inspire.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="discover-director">
        <motion.div
          className="discover-director__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="discover-director__heading">A Message From Our Director</h2>
        </motion.div>
        <div className="container">
          <div className="discover-director__content">
            {/* Left Column - Portrait */}
            <motion.div 
              className="discover-director__portrait"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="discover-director__image-wrapper">
                <img 
                  src="/discover/photo.png" 
                  alt="Director Portrait" 
                  className="discover-director__image"
                />
                <div className="discover-director__image-border"></div>
              </div>
            </motion.div>
            
            {/* Right Column - Message & Signature */}
            <motion.div 
              className="discover-director__message"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="discover-director__text">
                <p className="discover-director__intro">
                  Every event management company has its specialties. Yet, <strong>Yahvi Aura Events stands apart</strong> because of its <strong>uniqueness</strong>—uniqueness in the way we deliver exotic experiences, honour timelines, adapt seamlessly to your needs, and <strong>understand your vision</strong> even before you speak.
                </p>

                <div className="discover-director__body">
                  <p>
                    We are not here merely to manage events; we are here to build long-lasting relationships with every person who connects with us. For us, every event is an opportunity to strengthen your brand, celebrate your milestones, and create memories that endure. When you step into an event crafted by Yahvi Aura, you will feel the same Aura as our name suggests— "Heaven"—an experience that is effortless, meaningful, and unforgettable.
                  </p>
                  <p>
                    We value your time and ours, because the quality of our work reflects both your name and ours in the market.
                  </p>
                  <p>
                    With over more than a decade of multicultural experience, Yahvi Aura was founded to bring India's most valuable, yet inspiring destinations and cultural richness to life. Whether it's a corporate event that positions your brand as a leader, a conference that sparks dialogue, or a luxury wedding in a historic palace, we strive to create platforms that celebrate success, culture, and connection.
                  </p>
                  <p className="discover-director__closing">
                    At Yahvi Aura, you don't just attend an event—you step into an experience that adds value to your story, your brand, and your relationships.
                  </p>
                </div>
              </div>

              {/* Animated Signature */}
              <div className="discover-director__signature">
                <motion.div
                  className="discover-director__signature-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="discover-director__signature-image"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 6, ease: "easeInOut", delay: 0.3 }}
                  >
                    <img src="/discover/signature.png" alt="Director Signature" />
                  </motion.div>
                  
                  {/* Animated Pen */}
                  <motion.div
                    className="discover-director__signature-pen"
                    initial={{ left: "0%", opacity: 1 }}
                    whileInView={{ left: "100%", opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 6, ease: "easeInOut", delay: 0.3 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#fe00dd"/>
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="url(#penGradient)"/>
                      <defs>
                        <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fe00dd" />
                          <stop offset="100%" stopColor="#ffd700" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </motion.div>
                <p className="discover-director__signature-text">Founder & Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach - Scroll Lock Section */}
      <section className="discover-approach" ref={approachRef}>
        <div className="discover-approach__card">
          <div className="discover-approach__glow"></div>
          <div className="discover-approach__content">
            {/* Left - Text */}
            <div className="discover-approach__text">
              <div className="discover-approach__header">
                <span className="discover-approach__label">Our Philosophy</span>
                <h2 className="discover-approach__heading">
                  Our approach<br />is rooted in:
                </h2>
                <div className="discover-approach__progress">
                  <div 
                    className="discover-approach__progress-bar"
                    style={{ width: `${((activeApproach + 1) / approaches.length) * 100}%` }}
                  />
                </div>
                <span className="discover-approach__counter">
                  {String(activeApproach + 1).padStart(2, '0')} / {String(approaches.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="discover-approach__list">
                {approaches.map((approach, index) => (
                  <motion.li
                    key={index}
                    className={`discover-approach__item ${activeApproach === index ? 'active' : ''}`}
                    animate={{
                      opacity: activeApproach === index ? 1 : 0.35,
                      color: activeApproach === index ? approach.color : '#888',
                      scale: activeApproach === index ? 1.05 : 0.95,
                      x: activeApproach === index ? 15 : 0
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <span className="discover-approach__item-dot" />
                    {approach.title}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right - Images */}
            <div className="discover-approach__images">
              <AnimatePresence mode="wait">
                {approaches[activeApproach] && (
                  <motion.div
                    key={activeApproach}
                    className="discover-approach__image-box"
                    initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <img
                      src={approaches[activeApproach].image}
                      alt={approaches[activeApproach].title}
                      className="discover-approach__image"
                    />
                    <div 
                      className="discover-approach__image-gradient"
                      style={{
                        background: `linear-gradient(135deg, ${approaches[activeApproach].color}40 0%, transparent 60%)`
                      }}
                    />
                    <div className="discover-approach__image-label">
                      <span className="discover-approach__image-number">
                        {String(activeApproach + 1).padStart(2, '0')}
                      </span>
                      <span className="discover-approach__image-title">
                        {approaches[activeApproach].title}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {isLocked && (
                <div className="discover-approach__scroll-hint">
                  <span>Scroll to explore</span>
                  <motion.div 
                    className="discover-approach__scroll-icon"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="discover-vision-mission">
        <div className="container">
          {/* Vision Card */}
          <motion.div
            className="discover-card discover-card--vision"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="discover-card__icon">
              <svg viewBox="0 0 24 24" fill="none" width="60" height="60">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="url(#visionGradient)"/>
                <defs>
                  <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fe00dd" />
                    <stop offset="100%" stopColor="#ffd700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="discover-card__title">Our Vision</h3>
            <p className="discover-card__text">
              Our goal is to be North India's leading event partner, distinguished by our innovative approach, cultural sensitivity, and excellent operational performance.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="discover-card discover-card--mission"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="discover-card__icon">
              <svg viewBox="0 0 24 24" fill="none" width="60" height="60">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 2.83l5 12.87-5-2.54-5 2.54 5-12.87z" fill="url(#missionGradient)"/>
                <defs>
                  <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF1493" />
                    <stop offset="100%" stopColor="#ffd700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="discover-card__title">Our Mission</h3>
            <p className="discover-card__text">
              As a core mission, we strive to provide not only cost-effective solutions coupled with top-quality service, but also to empower businesses and individuals with events that are meant to inspire, engage, and further their success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Discover;
