import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Experiential.css';

const Experiential = () => {
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
      title: "Brand activations and pop ups",
      description: "concept, site planning, execution.",
      image: "/experiential/BA.jpg"
    },
    {
      title: "Sampling and retail activations",
      description: "logistics, staffing, measurement.",
      image: "/experiential/SARA.jpg"
    },
    {
      title: "Immersive experiences",
      description: "interactive installations, AR/VR integrations, themed environments.",
      image: "/experiential/IMMERSIVE.jpg"
    },
    {
      title: "Roadshows and product demos",
      description: "turnkey logistics, local permits, and staffing.",
      image: "/experiential/roadshow.jpg"
    },
    {
      title: "Experiential production",
      description: "LED walls, lighting, sound, and technical direction.",
      image: "/experiential/production.jpg"
    }
  ];

  const whyItWorks = [
    {
      icon: "🎯",
      title: "Audience‑centric design",
      description: "experiences built from consumer insight to maximize engagement."
    },
    {
      icon: "📊",
      title: "Measurable outcomes",
      description: "footfall tracking, lead capture, and ROI reporting."
    },
    {
      icon: "⚡",
      title: "Seamless production",
      description: "experienced technical crew and vendor verification ensure smooth delivery."
    },
    {
      icon: "🚀",
      title: "Scalable solutions",
      description: "from single‑day activations to multi‑city rollouts."
    }
  ];

  return (
    <div className="experiential">
      {/* Hero Section with Video Background */}
      <section className="experiential-hero">
        <div className="experiential-hero__video-container">
          <video
            ref={videoRef}
            className="experiential-hero__video"
            autoPlay
            loop 
            muted
            playsInline
          >
            <source src="/experiential/experiential.mp4" type="video/mp4" />
          </video>
          <div className="experiential-hero__overlay" />
        </div>

        <div className="experiential-hero__content">
          {/* Floating Glassmorphism Card on Right */}
          <motion.div
            className="experiential-hero__text-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="experiential-hero__title">
              Experiential <span className="text-gradient-orange">Events</span>
            </h1>
            <p className="experiential-hero__description">
              We don't just host events; we create brand worlds. From high-tech activations to travel odysseys, 
              we bridge the gap between brands and their audiences.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="experiential-hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="experiential-services">
        <div className="experiential-services__container">
          <motion.div
            className="experiential-services__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="experiential-services__title">
              Core <span className="text-gradient-orange">Services</span>
            </h2>
            <p className="experiential-services__subtitle">
              Immersive brand experiences that drive engagement and ROI
            </p>
          </motion.div>

          <div className="experiential-services__grid">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="experiential-service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="experiential-service-card__image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="experiential-service-card__image"
                  />
                  <div className="experiential-service-card__overlay" />
                </div>
                <div className="experiential-service-card__content">
                  <h3 className="experiential-service-card__title">{service.title}</h3>
                  <p className="experiential-service-card__description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="experiential-why">
        <div className="experiential-why__overlay" />
        <div className="experiential-why__container">
          <motion.div
            className="experiential-why__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="experiential-why__title">
              Why It <span className="text-gradient-orange">Works</span>
            </h2>
            <p className="experiential-why__subtitle">
              Data-driven experiential marketing that delivers measurable results
            </p>
          </motion.div>

          <div className="experiential-why__grid">
            {whyItWorks.map((item, index) => (
              <motion.div
                key={index}
                className="experiential-why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="experiential-why-card__icon">{item.icon}</div>
                <h3 className="experiential-why-card__title">{item.title}</h3>
                <p className="experiential-why-card__description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="experiential-cta">
        <div className="experiential-cta__overlay" />
        <div className="experiential-cta__content">
          <div className="experiential-cta__text">
            <h2 className="experiential-cta__title">Launch an experience that moves people.</h2>
            <p className="experiential-cta__description">
              Contact us to discuss creative concepts and measurement plans.
            </p>
          </div>
          <div className="experiential-cta__buttons">
            <a href="tel:+919315547880" className="experiential-cta__button experiential-cta__button--primary">
              Request a Tailored Plan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiential;
