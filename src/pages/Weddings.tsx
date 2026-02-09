import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Weddings.css';

const Weddings = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  const coreServices = [
    {
      title: "Full planning and coordination",
      description: "concept to execution.",
      image: "/weddings/1.jpg"
    },
    {
      title: "Partial planning and day‑of coordination",
      description: "for couples who need expert support.",
      image: "/weddings/2.jpg"
    },
    {
      title: "Decor and styling",
      description: "bespoke themes, floral design, lighting.",
      image: "/weddings/3.jpg"
    },
    {
      title: "Vendor management",
      description: "vetted caterers, photographers, decorators, and entertainers.",
      image: "/weddings/4.jpg"
    },
    {
      title: "Budget planning and packages",
      description: "transparent pricing and pay‑as‑you‑go options.",
      image: "/weddings/5.jpg"
    }
  ];

  const trustReasons = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5C15.64 5 4 16.64 4 31C4 45.36 15.64 57 30 57C44.36 57 56 45.36 56 31C56 16.64 44.36 5 30 5ZM30 50C19.51 50 11 41.49 11 31C11 20.51 19.51 12 30 12C40.49 12 49 20.51 49 31C49 41.49 40.49 50 30 50Z" fill="#fa8559"/>
          <path d="M30 20C24.48 20 20 24.48 20 30C20 35.52 24.48 40 30 40C35.52 40 40 35.52 40 30C40 24.48 35.52 20 30 20ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z" fill="#fa8559"/>
        </svg>
      ),
      title: "Personalized approach",
      description: "we listen, advise, and translate your vision into reality."
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15L22.5 42.5L10 30" stroke="#fa8559" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="30" cy="30" r="25" stroke="#fa8559" strokeWidth="3"/>
        </svg>
      ),
      title: "Vendor verification",
      description: "we work only with trusted partners to protect quality and timelines."
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L38 23H57L42 35L48 53L30 42L12 53L18 35L3 23H22L30 5Z" fill="#fa8559"/>
        </svg>
      ),
      title: "Stress‑free execution",
      description: "detailed timelines and experienced on‑site teams keep the day calm."
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H50M10 30H50M10 40H50" stroke="#fa8559" strokeWidth="4" strokeLinecap="round"/>
          <rect x="5" y="10" width="50" height="40" rx="5" stroke="#fa8559" strokeWidth="3"/>
        </svg>
      ),
      title: "Flexible packages",
      description: "options for every budget without compromising style."
    }
  ];

  return (
    <div className="weddings">
      {/* Hero Section with Video Background */}
      <section className="weddings-hero">
        <div className="weddings-hero__video-container">
          <video
            ref={videoRef}
            className="weddings-hero__video"
            autoPlay
            loop 
            muted
            playsInline
          >
            <source src="/weddings/weddings.mp4" type="video/mp4" />
          </video>
          <div className="weddings-hero__overlay" />
        </div>

        <div className="weddings-hero__content">
          <motion.div
            className="weddings-hero__text-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="weddings-hero__title">
              Weddings Designed Around Your <span className="text-gradient-salmon">Story</span>
            </h1>
            <p className="weddings-hero__description">
              We craft weddings that feel personal, effortless, and beautifully executed. From intimate ceremonies 
              in Vaishali to grand receptions across Ghaziabad and Uttar Pradesh, our wedding planners manage every 
              detail; creative direction, vendor coordination, timelines, and on‑site management.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="weddings-hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="weddings-services">
        <div className="weddings-services__container">
          <motion.div
            className="weddings-services__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="weddings-services__title">
              Core <span className="text-gradient-pink">Services</span>
            </h2>
            <p className="weddings-services__subtitle">
              Luxury wedding planning tailored to your love story
            </p>
          </motion.div>

          <div className="weddings-services__grid">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="weddings-service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="weddings-service-card__image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="weddings-service-card__image"
                  />
                  <div className="weddings-service-card__overlay" />
                </div>
                <div className="weddings-service-card__content">
                  <h3 className="weddings-service-card__title">{service.title}</h3>
                  <p className="weddings-service-card__description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Couples Trust Us Section */}
      <section className="weddings-trust">
        <div className="weddings-trust__container">
          <motion.div
            className="weddings-trust__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="weddings-trust__title">
              Why Couples Trust <span className="text-gradient-pink">Yahvi Aura Events</span>
            </h2>
          </motion.div>

          <div className="weddings-trust__grid">
            {trustReasons.map((item, index) => (
              <motion.div
                key={index}
                className="weddings-trust-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="weddings-trust-card__icon">{item.icon}</div>
                <h3 className="weddings-trust-card__title">{item.title}</h3>
                <p className="weddings-trust-card__description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="weddings-cta">
        <div className="weddings-cta__overlay" />
        <div className="weddings-cta__content">
          <motion.div
            className="weddings-cta__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="weddings-cta__title">Start planning your wedding today</h2>
          </motion.div>
          <motion.div
            className="weddings-cta__buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="tel:+919315547880" className="weddings-cta__button weddings-cta__button--primary">
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
