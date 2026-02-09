import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Corporate.css';

const Corporate = () => {
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
      title: "Conferences and seminars",
      description: "program design, speaker management, registration, AV and staging.",
      image: "/corporate/CS.jpg"
    },
    {
      title: "Product launches and press events",
      description: "creative concept, media coordination, demo logistics.",
      image: "/corporate/productlaunch.jpg"
    },
    {
      title: "Award nights and galas",
      description: "script and run‑of‑show, hospitality, stage production.",
      image: "/corporate/awardnights.jpg"
    },
    {
      title: "Employee engagement and team building",
      description: "curated activities, vendor management, measurement.",
      image: "/corporate/employeeengagement.jpg"
    },
    {
      title: "Hybrid and virtual events",
      description: "streaming, platform integration, audience interaction.",
      image: "/corporate/hybridvirtualevent.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🎯",
      title: "Business aligned planning",
      description: "events designed to deliver measurable KPIs."
    },
    {
      icon: "🤝",
      title: "Reliable local network",
      description: "vetted vendors across Vaishali and Ghaziabad for consistent delivery."
    },
    {
      icon: "⚡",
      title: "Integrated production",
      description: "technical and logistical coordination under one management team."
    },
    {
      icon: "💎",
      title: "Transparent pricing",
      description: "clear proposals and flexible payment options."
    }
  ];

  return (
    <div className="corporate">
      {/* Hero Section with Video Background */}
      <section className="corporate-hero">
        <div className="corporate-hero__video-container">
          <video
            ref={videoRef}
            className="corporate-hero__video"
            autoPlay
            loop 
            muted
            playsInline
          >
            <source src="/corporate/coporate.mp4" type="video/mp4" />
          </video>
          <div className="corporate-hero__overlay" />
        </div>

        <div className="corporate-hero__content">
          <motion.div
            className="corporate-hero__text-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="corporate-hero__title">
              Corporate Event <span className="text-gradient">Management</span>
            </h1>
            <p className="corporate-hero__description">
              Yahvi Aura Events delivers corporate events that align with business objectives and run with precision. 
              We manage strategy, venue sourcing, technical production, guest logistics, and on‑site execution to ensure 
              every event meets its goals and reflects your brand.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="corporate-hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="corporate-services">
        <div className="corporate-services__container">
          <motion.div
            className="corporate-services__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="corporate-services__title">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="corporate-services__subtitle">
              Comprehensive event management tailored to your business needs
            </p>
          </motion.div>

          <div className="corporate-services__grid">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="corporate-service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="corporate-service-card__image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="corporate-service-card__image"
                  />
                  <div className="corporate-service-card__overlay" />
                </div>
                <div className="corporate-service-card__content">
                  <h3 className="corporate-service-card__title">{service.title}</h3>
                  <p className="corporate-service-card__description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="corporate-why">
        <div className="corporate-why__container">
          <motion.div
            className="corporate-why__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="corporate-why__title">
              Why Choose <span className="text-gradient">Yahvi Aura Events</span>
            </h2>
          </motion.div>

          <div className="corporate-why__strip">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="corporate-why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="corporate-why-card__icon">{item.icon}</div>
                <h3 className="corporate-why-card__title">{item.title}</h3>
                <p className="corporate-why-card__description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Section */}
      <section className="corporate-cta">
        <div className="corporate-cta__overlay" />
        <div className="corporate-cta__content">
          <motion.div
            className="corporate-cta__text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="corporate-cta__title">Ready to Elevate Your Corporate Events?</h2>
          </motion.div>
          <motion.div
            className="corporate-cta__buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="tel:+919315547880" className="corporate-cta__button corporate-cta__button--primary">
              Request a Tailored Plan
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
