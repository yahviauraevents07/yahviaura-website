import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faClock, faUser, faChevronRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './AuraResonanceArticle.css';

const FullServiceEventPlannerArticle = () => {
  const keywords = [
    "Full-service event planner",
    "Day-of event coordinator",
    "Corporate MICE execution",
    "Experiential event management",
    "The Aura Resonance Framework",
    "Event risk mitigation"
  ];

  useEffect(() => {
    // Add Calendly popup stylesheet
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add Calendly popup script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/yahviauraevents/30min'
      });
    } else {
      window.open('https://calendly.com/yahviauraevents/30min', '_blank');
    }
  };

  return (
    <div className="blog-article">
      {/* Article Header / Hero */}
      <header className="blog-article__hero">
        <div className="blog-article__hero-bg" />
        <div className="blog-article__hero-overlay" />
        
        <div className="container blog-article__hero-content">
          {/* Breadcrumb */}
          <div className="blog-article__breadcrumb">
            <Link to="/blogs">Blogs</Link>
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            <Link to="/blog/the-enterprise-ROI-series">Enterprise ROI & Frameworks</Link>
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Full-Service vs Day-Of Coordinator</span>
          </div>

          <Link to="/blog/the-enterprise-ROI-series" className="blog-article__back">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Series
          </Link>

          {/* Keyword Badges */}
          <div className="blog-article__keywords">
            {keywords.slice(0, 4).map((kw, index) => (
              <span key={index} className="keyword-badge">{kw}</span>
            ))}
          </div>

          {/* H1 Title */}
          <motion.h1 
            className="blog-article__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Full-Service Event Planner vs. Day-Of Coordinator: <span className="text-gradient">Which One Do You Need?</span>
          </motion.h1>

          {/* Meta Info */}
          <div className="blog-article__meta">
            <span>
              <FontAwesomeIcon icon={faUser} /> By Yahvi Aura Team
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendar} /> June 25, 2026
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} /> 3 min read
            </span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="blog-article__body-section">
        <div className="container blog-article__container">
          <div className="blog-article__content">
            <p className="blog-article__lead">
              There is a terrifying operational illusion quietly built into modern corporate event procurement.
              On paper, it looks like a brilliant fiscal compromise: let your internal marketing team handle
              the heavy lifting of planning a major activation for six months, then hire a low-cost,
              short-term day-of coordinator at the final hour to run the timeline. You think you have
              optimized your budget.
            </p>

            <p>
              In reality, you have just signed off on a high-stakes operational gamble.
            </p>

            <p>
              At an enterprise scale, a pure day-of coordinator is a complete industry myth. When a
              million-dollar corporate deployment begins to fray behind the scenes, the damage isn't
              happening on the day of the execution. The true crisis was silently locked into your blueprint
              months ago — hidden inside misaligned vendor contracts, unvetted audio-visual rigging parameters,
              and unmapped municipal compliance liabilities.
            </p>

            <p>
              An outside coordinator stepping onto a live, high-pressure production set cannot magically
              patch up deep, structural flaws in a fragmented project architecture. They are a tactical asset
              trained to check boxes and watch the clock; they do not possess the strategic leverage or
              systemic depth to fix foundational planning errors.
            </p>

            <p>
              At Yahvi Aura Events, we look at execution through a completely different lens. Through{' '}
              <strong className="text-highlight">‘The Aura Resonance Framework’</strong>, we demonstrate that
              a flawless activation is never the result of frantic, reactive firefighting during the final
              24 hours. It requires long-term, structural engineering where human psychology, logistics,
              and brand strategy are woven together from day one.
            </p>

            <h2>The Operational Mirage of Day-Of Coordination</h2>
            <p>
              When the stakes carry a heavy professional, financial, or reputational cost, relying on a
              short-term coordinator leaves three massive variables completely exposed:
            </p>

            <h3>1. Fragmented Vendor Integration and Contractual Grey Areas</h3>
            <p>
              When multiple independent suppliers (AV, structural fabrication, catering, talent) are booked
              directly by an internal corporate team over six months, their individual service-level
              agreements (SLAs) rarely align perfectly. A full-service event planner spends months
              cross-referencing these documents to eliminate gaps. A day-of coordinator simply inherits the
              chaos, leaving your company vulnerable to sudden mid-event billing arguments and service drops.
            </p>

            <h3>2. The Dilution of Brand Intent and Emotional Resonance</h3>
            <p>
              High-ticket activations are designed to trigger a specific emotional frequency—whether that is
              building deep employee trust at an annual summit or driving client retention at a luxury brand
              launch. This requires hyper-intentional sensory curation. A short-term coordinator has no
              relationship with your brand strategy; they are focused entirely on the clock, treating your
              million-dollar corporate asset like a clinical logistical puzzle.
            </p>

            <h3>3. Reactive Crisis Management vs. Structural Proactive SOPs</h3>
            <p>
              When a technical failure occurs on the main stage or a cross-border customs delay holds back
              vital display materials, a day-of coordinator reacts to the crisis in real-time, often making
              frantic compromises that visibly degrade production value. A full-service strategy partner uses
              standardized operational procedures (SOPs) to map out these risks months in advance, embedding
              pre-allocated data-driven cushions directly into the layout.
            </p>

            <h2>Deconstructing the Models</h2>
            <p>
              Choosing between these two structural models depends entirely on the commercial stakes of your
              upcoming event:
            </p>

            <h3>The Day-Of Coordinator Model</h3>
            <p>
              Best suited for low-stakes, highly commoditised gatherings with minimal moving parts and zero
              brand-positioning risk. It offers isolated timeline management but zero creative engineering,
              zero financial risk mitigation, and zero systemic accountability.
            </p>

            <h3>The Yahvi Aura Full-Service Standard</h3>
            <p>
              Required for high-stakes corporate MICE, multi-city brand deployments, and premium luxury
              experiences. We provide end-to-end operational staging, complete asset protection, vendor
              opacity elimination, and deep alignment with audience psychology from inception to final strike.
            </p>

            <h2>The Takeaway: Strategic Architecture Dictates Outcome</h2>
            <p>
              True financial efficiency and brand authority are achieved when you stop treating corporate
              events as temporary assemblies and start treating them as vital business assets.
            </p>
            <p>
              If your event's failure carries a professional, financial, or reputational cost, counting on a
              day-of coordinator to salvage an unvetted blueprint is an expensive mistake. Partnering with a
              full-service strategic team ensures your capital is optimized, your logistics are ironclad, and
              your final execution hits the precise emotional resonance your audience demands.
            </p>

            <h2>Secure Your Strategic Execution Blueprint</h2>
            <p>
              Stop leaving your organization's highest-stakes brand moments to chance.{' '}
              <Link to="/contact" className="text-highlight" style={{ textDecoration: 'underline' }}>
                Contact Yahvi Aura Events today
              </Link>{' '}
              to partner with our strategy team, access our full-service engineering framework, and guarantee
              a flawless corporate deployment.
            </p>

            <p>
              To submit your event specifications directly to our strategy team, please fill in our{' '}
              <a 
                href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__61vdzFUMVY0UTdVMExCVjdVV1RCMFFRR1MxRlRMQi4u&route=shorturl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-highlight"
                style={{ textDecoration: 'underline' }}
              >
                Requirement Form
              </a>{' '}
              or if you would like to schedule a direct discovery consultation, reserve a{' '}
              <a 
                href="#" 
                onClick={handleCalendlyClick} 
                className="text-highlight"
                style={{ textDecoration: 'underline' }}
              >
                calendar slot here
              </a>{' '}
              or simply{' '}
              <Link to="/contact" className="text-highlight" style={{ textDecoration: 'underline' }}>
                get in touch
              </Link>{' '}
              to reach our inbox.
            </p>

            {/* In-Article CTA */}
            <div className="article-cta">
              <h3>Secure Your Strategic Execution Blueprint</h3>
              <p>
                Partner with our team today, access our engineering framework, and secure a flawless corporate deployment.
              </p>
              <Link to="/contact" className="article-cta__btn">
                <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} /> Consult Our Planners
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FullServiceEventPlannerArticle;
