import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faHandshake, faCreditCard, faTags, faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Full Screen Video */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Home/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <h1 className="hero-heading">
              Where Creativity Meets Precision
              <br />
              Where Moments Become{' '}
              <span className="text-gradient">Masterpieces</span>
            </h1>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span>Scroll to explore</span>
            <FontAwesomeIcon icon={faChevronDown} className="scroll-arrow" />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="intro-decoration">
              <div className="intro-decoration__line"></div>
              <div className="intro-decoration__dot"></div>
              <div className="intro-decoration__line"></div>
            </div>
            <h2 className="intro-heading">
              Crafting Experiences That <span className="text-gradient">Inspire & Transform</span>
            </h2>
            <p className="intro-text">
              At Yahvi Aura Events, we design experiences that inspire and transform. From high-profile corporate summits to luxury weddings, our team blends precision with creativity— delivering events that are strategically impactful, flawlessly executed, and emotionally unforgettable. Whether it's a conference, product launch, leadership retreat, gala dinner, or a milestone celebration, we craft powerful brand statements and timeless memories that truly resonate with your audience.
            </p>
            <div className="intro-signature">
              <div className="intro-signature__line"></div>
              <span className="intro-signature__text">— Yahvi Aura Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Yahvi Aura Events Section */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-accent-line"></div>
            <h2 className="section-heading">
              What <span className="text-gradient">All Do We Do?</span>
            </h2>
          </motion.div>

          <div className="why-choose-grid">
            {/* Feature 1 */}
            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="why-choose-card__icon-wrapper">
                <FontAwesomeIcon icon={faUserTie} className="why-choose-card__icon" />
              </div>
              <h3 className="why-choose-card__title">Expert Event Managers</h3>
              <p className="why-choose-card__description">
                Expert event managers at Yahvi Aura Events ensure flawless execution and unparalleled attention to detail for every event.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="why-choose-card__icon-wrapper">
                <FontAwesomeIcon icon={faHandshake} className="why-choose-card__icon" />
              </div>
              <h3 className="why-choose-card__title">Verified Vendors</h3>
              <p className="why-choose-card__description">
                Yahvi Aura Events collaborates with verified vendors to guarantee high-quality services and seamless coordination for every occasion.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="why-choose-card__icon-wrapper">
                <FontAwesomeIcon icon={faCreditCard} className="why-choose-card__icon" />
              </div>
              <h3 className="why-choose-card__title">Pay as you Go</h3>
              <p className="why-choose-card__description">
                Yahvi Aura Events offers a flexible 'Pay as you Go' option, allowing clients to manage their event budgets efficiently and transparently.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="why-choose-card__icon-wrapper">
                <FontAwesomeIcon icon={faTags} className="why-choose-card__icon" />
              </div>
              <h3 className="why-choose-card__title">Affordable Prices</h3>
              <p className="why-choose-card__description">
                Yahvi Aura Events delivers exceptional quality at affordable prices, ensuring each event is both cost-effective and memorable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="services-teaser-section">
        {/* Decorative Background Elements */}
        <div className="section-decorative-bg">
          <div className="decorative-circle decorative-circle--1"></div>
          <div className="decorative-circle decorative-circle--2"></div>
          <div className="decorative-circle decorative-circle--3"></div>
        </div>

        <div className="container">
          {/* Section Title with Accent Line */}
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-accent-line"></div>
            <h2 className="section-heading">
              Our <span className="text-gradient">Diverse Portfolio</span>
            </h2>
          </motion.div>

          {/* Corporate Events - Row 1: Image LEFT, Text RIGHT */}
          <motion.div 
            className="service-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flexDirection: 'row' }}
          >
            <motion.div 
              className="service-block__image-wrapper"
              initial={false}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(entry) => entry?.target.classList.add('in-view')}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/Home/corporate.jpg" alt="Corporate Events" className="service-block__image" />
            </motion.div>
            <div className="service-block__content">
              <h3 className="service-block__title">Corporate Events</h3>
              <p className="service-block__description">
                From high-profile conferences and product launches to team-building retreats and award ceremonies, 
                we create powerful brand statements that drive business success and inspire your audience.
              </p>
            </div>
          </motion.div>

          {/* Experiential Events - Row 2: Image RIGHT, Text LEFT */}
          <motion.div 
            className="service-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flexDirection: 'row-reverse' }}
          >
            <motion.div 
              className="service-block__image-wrapper"
              initial={false}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(entry) => entry?.target.classList.add('in-view')}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/Home/experiential.jpg" alt="Experiential Events" className="service-block__image" />
            </motion.div>
            <div className="service-block__content">
              <h3 className="service-block__title">Experiential Events</h3>
              <p className="service-block__description">
                Create unforgettable brand activations, influencer events, and immersive experiences that 
                captivate your audience and leave lasting impressions that truly resonate.
              </p>
            </div>
          </motion.div>

          {/* Weddings - Row 3: Image LEFT, Text RIGHT */}
          <motion.div 
            className="service-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flexDirection: 'row' }}
          >
            <motion.div 
              className="service-block__image-wrapper"
              initial={false}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(entry) => entry?.target.classList.add('in-view')}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/Home/wedding.jpg" alt="Weddings" className="service-block__image" />
            </motion.div>
            <div className="service-block__content">
              <h3 className="service-block__title">Weddings</h3>
              <p className="service-block__description">
                From intimate pre-wedding functions to grand destination weddings, we craft magical moments 
                that celebrate your love story with elegance, creativity, and flawless execution.
              </p>
            </div>
          </motion.div>

          {/* Social Events - Row 4: Image RIGHT, Text LEFT */}
          <motion.div 
            className="service-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flexDirection: 'row-reverse' }}
          >
            <motion.div 
              className="service-block__image-wrapper"
              initial={false}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(entry) => entry?.target.classList.add('in-view')}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/Home/socialevent.jpg" alt="Social Events" className="service-block__image" />
            </motion.div>
            <div className="service-block__content">
              <h3 className="service-block__title">Social Events</h3>
              <p className="service-block__description">
                Celebrate life's milestones with events that bring joy and create cherished memories - 
                from birthday parties and anniversaries to baby showers and special celebrations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Moments of Excellence - Infinite Gallery Section */}
      <section className="moments-gallery-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-accent-line"></div>
            <h2 className="section-heading">
              <span className="text-gradient">Moments of Excellence</span>
            </h2>
            <p className="section-subtitle">A Glimpse Into Our Spectacular Creations</p>
          </motion.div>

          {/* Infinite Scrolling Gallery */}
          <div className="gallery-scroll-container">
            <div className="gallery-scroll-track">
              {/* First set of images */}
              <div className="gallery-item">
                <img src="/Home/1.jpg" alt="Event 1" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/2.jpg" alt="Event 2" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/3.jpg" alt="Event 3" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/4.jpg" alt="Event 4" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/5.jpg" alt="Event 5" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/6.jpg" alt="Event 6" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/7.jpg" alt="Event 7" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/8.jpg" alt="Event 8" className="gallery-image" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="gallery-item">
                <img src="/Home/1.jpg" alt="Event 1" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/2.jpg" alt="Event 2" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/3.jpg" alt="Event 3" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/4.jpg" alt="Event 4" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/5.jpg" alt="Event 5" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/6.jpg" alt="Event 6" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/7.jpg" alt="Event 7" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src="/Home/8.jpg" alt="Event 8" className="gallery-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Majesty Mentions - Client Reviews Section */}
      <section className="majesty-mentions-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-accent-line"></div>
            <h2 className="section-heading">
              <span className="text-gradient">Majesty Mentions</span>
            </h2>
            <p className="section-subtitle">What Our Clients Say About Us</p>
          </motion.div>

          <div className="reviews-grid">
            {/* Review 1 */}
            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="review-card__stars">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="review-card__text">
                "Yahvi Aura Events made our wedding a dream come true! From the vibrant Haldi and Mehndi ceremonies to the grand Sangeet night and the elegant wedding and reception, every detail was perfect. A big thanks to Yashu and her team for their impeccable planning and execution."
              </p>
              <div className="review-card__author">
                <div className="review-card__avatar">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="review-card__author-info">
                  <h4 className="review-card__author-name">Priya and Aarav Kapoor</h4>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="review-card__stars">
                {'★'.repeat(5)}{'☆'.repeat(0)}
              </div>
              <p className="review-card__text">
                "Our daughter's wedding was a fairytale, thanks to Yahvi Aura Events. Yashu and her team went above and beyond to ensure everything was flawless. The decor, the food, and the overall ambiance were simply magical. We couldn't have asked for more."
              </p>
              <div className="review-card__author">
                <div className="review-card__avatar">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="review-card__author-info">
                  <h4 className="review-card__author-name">Anjali and Vikram Mehra</h4>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="review-card__stars">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="review-card__text">
                "From the initial consultation to the final event, working with Yahvi Aura Events was a delight. Yashu and the team were professional, attentive, and incredibly creative. They truly made our vision come to life, and we received countless compliments from our guests."
              </p>
              <div className="review-card__author">
                <div className="review-card__avatar">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="review-card__author-info">
                  <h4 className="review-card__author-name">Neha and Rohan Sharma</h4>
                </div>
              </div>
            </motion.div>

            {/* Review 4 */}
            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="review-card__stars">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="review-card__text">
                "Planning a wedding can be stressful, but with Yahvi Aura Events, it was a breeze. Yashu and her team were always available to answer our questions and provided fantastic suggestions. The entire celebration was a huge success, and we couldn't be happier."
              </p>
              <div className="review-card__author">
                <div className="review-card__avatar">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="review-card__author-info">
                  <h4 className="review-card__author-name">Kavita and Raj Patel</h4>
                </div>
              </div>
            </motion.div>

            {/* Review 5 */}
            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="review-card__stars">
                {'★'.repeat(5)}{'☆'.repeat(0)}
              </div>
              <p className="review-card__text">
                "Yahvi Aura Events transformed our wedding into a beautiful and memorable occasion. The attention to detail and the personal touches added by Yashu and his team made all the difference. We highly recommend them for any event planning needs."
              </p>
              <div className="review-card__author">
                <div className="review-card__avatar">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="review-card__author-info">
                  <h4 className="review-card__author-name">Aisha and Siddharth Verma</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-background__gradient"></div>
          <div className="cta-background__pattern"></div>
        </div>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-heading">
              Let's Create Something <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="cta-text">
              At Yahvi Aura, we don't just manage events—we create platforms that inspire, connect, and celebrate. Whether you're planning a high-profile corporate summit or a luxury destination wedding, our team is ready to bring your vision to life.
            </p>
            <p className="cta-subtext">
              Let's design your next experience together.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=919315547880&text=Hello%0D%0Alike+to+know+more+infomation&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="cta-button__icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </span>
              <span className="cta-button__text">Start a Conversation</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
