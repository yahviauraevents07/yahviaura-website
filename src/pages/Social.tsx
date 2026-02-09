import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Social.css';

const Social = () => {
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
      title: "Birthday parties",
      description: "creative themes, entertainment, catering, and coordination.",
      image: "/socialevents/1.jpg"
    },
    {
      title: "Anniversaries",
      description: "intimate dinners to grand celebrations with personalized touches.",
      image: "/socialevents/2.jpg"
    },
    {
      title: "Private celebrations",
      description: "milestone events, graduation parties, and family gatherings.",
      image: "/socialevents/3.jpg"
    },
    {
      title: "Themed events",
      description: "custom décor, entertainment, and activity coordination.",
      image: "/socialevents/4.jpg"
    },
    {
      title: "Kids' parties",
      description: "age‑appropriate entertainment, safety management, and parent coordination.",
      image: "/socialevents/5.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🎨",
      title: "Creative concepts",
      description: "fresh ideas that match your personality and celebration style."
    },
    {
      icon: "⏱️",
      title: "Stress‑free planning",
      description: "we handle logistics so you enjoy the day with your guests."
    },
    {
      icon: "💰",
      title: "Budget‑friendly packages",
      description: "transparent pricing and flexible options for every celebration."
    },
    {
      icon: "🎭",
      title: "Reliable execution",
      description: "experienced team ensures smooth coordination and timely delivery."
    }
  ];

  return (
    <div className="social">
      {/* Hero Section with Video Background */}
      <section className="social-hero">
        <div className="social-hero__video-container">
          <video
            ref={videoRef}
            className="social-hero__video"
            autoPlay
            loop 
            muted
            playsInline
          >
            <source src="/socialevents/socialevents.mp4" type="video/mp4" />
          </video>
          <div className="social-hero__overlay" />
        </div>

        <div className="social-hero__content">
          <motion.div
            className="social-hero__text-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="social-hero__title">
              Social Events That <span className="text-gradient-vibrant">Celebrate You</span>
            </h1>
            <p className="social-hero__description">
              From intimate birthday dinners in Vaishali to grand anniversary celebrations across Ghaziabad, 
              we plan social events that reflect your personality and bring joy to every guest. Whether it's 
              a themed party, milestone celebration, or family gathering, we manage creative planning, vendor 
              coordination, and on‑site execution.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="social-hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="social-services">
        <div className="social-services__container">
          <motion.div
            className="social-services__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="social-services__title">
              Core <span className="text-gradient-vibrant">Services</span>
            </h2>
            <p className="social-services__subtitle">
              Celebrations designed to create unforgettable memories
            </p>
          </motion.div>

          <div className="social-services__grid">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="social-service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="social-service-card__image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="social-service-card__image"
                  />
                  <div className="social-service-card__overlay" />
                </div>
                <div className="social-service-card__content">
                  <h3 className="social-service-card__title">{service.title}</h3>
                  <p className="social-service-card__description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="social-why">
        <div className="social-why__container">
          <motion.div
            className="social-why__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="social-why__title">
              Why Choose <span className="text-gradient-vibrant">Yahvi Aura Events</span>
            </h2>
            <p className="social-why__subtitle">
              Professional planning with a personal touch
            </p>
          </motion.div>

          <div className="social-why__grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="social-why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="social-why-card__icon">{item.icon}</div>
                <h3 className="social-why-card__title">{item.title}</h3>
                <p className="social-why-card__description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="social-cta">
        <div className="social-cta__overlay" />
        <div className="social-cta__content">
          <motion.div
            className="social-cta__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="social-cta__title">Let's celebrate your special moment.</h2>
          </motion.div>
          <motion.div
            className="social-cta__buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="tel:+919315547880" className="social-cta__button social-cta__button--primary">
              Plan Your Event
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Social;
