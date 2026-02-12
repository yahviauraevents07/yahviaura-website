import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({
          type: 'success',
          message: 'Thank you for reaching out! We\'ll get back to you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          query: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay" />
        <div className="contact-hero__content">
          <motion.h1
            className="contact-hero__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            className="contact-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Let's Create Something Extraordinary Together
          </motion.p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side - Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-form-card">
                <h2 className="contact-form-card__title">Send Us a Message</h2>
                <p className="contact-form-card__subtitle">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      Full Name <span className="contact-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-form__input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address <span className="contact-form__required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-form__input"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="phone" className="contact-form__label">
                      Phone Number <span className="contact-form__required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10,15}"
                      className="contact-form__input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="query" className="contact-form__label">
                      Your Query <span className="contact-form__required">*</span>
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact-form__textarea"
                      placeholder="Tell us about your event or query..."
                    />
                  </div>

                  {formStatus.type && (
                    <div className={`contact-form__message contact-form__message--${formStatus.type}`}>
                      {formStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-form__submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact-form__submit-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="contact-form__submit-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Contact Details */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-info-card">
                <h2 className="contact-form-card__title">Contact Information</h2>
                  {/* Email Section */}
                  <div className="office-section">
                    <a href="mailto:info@yahviaura.com" className="contact-info-item contact-info-item--email">
                      <div className="contact-info-item__icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="contact-info-item__content">
                        <h4 className="contact-info-item__label">Email</h4>
                        <p className="contact-info-item__value">info@yahviaura.com</p>
                      </div>
                    </a>
                  </div>
                  
                <p className="contact-form-card__subtitle">
                </p>

                <div className="contact-info-list">
                  {/* Ghaziabad Office */}
                  <div className="office-section">
                    <h3 className="office-section__title">Ghaziabad Office</h3>
                    
                    <a href="tel:+919315547880" className="contact-info-item">
                      <div className="contact-info-item__icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="contact-info-item__content">
                        <h4 className="contact-info-item__label">Phone</h4>
                        <p className="contact-info-item__value">+91 93155 47880</p>
                        <p className="contact-info-item__person">Yashu Subhra</p>
                      </div>
                    </a>

                    <div className="contact-info-item">
                      <div className="contact-info-item__icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="contact-info-item__content">
                        <h4 className="contact-info-item__label">Address</h4>
                        <p className="contact-info-item__value">
                          Corporate Suites (CS) - 22, 3rd floor, Ansal Plaza Complex,<br />
                          Sector 1, Vaishali, Ghaziabad, UP-201010
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dehradun Office */}
                  <div className="office-section">
                    <h3 className="office-section__title">Dehradun Office</h3>
                    
                    <a href="tel:+919760848556" className="contact-info-item">
                      <div className="contact-info-item__icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="contact-info-item__content">
                        <h4 className="contact-info-item__label">Phone</h4>
                        <p className="contact-info-item__value">+91 97608 48556</p>
                        <p className="contact-info-item__person">Piyush Mathur</p>
                      </div>
                    </a>

                    <div className="contact-info-item">
                      <div className="contact-info-item__icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="contact-info-item__content">
                        <h4 className="contact-info-item__label">Address</h4>
                        <p className="contact-info-item__value">
                          163A, 3rd Floor, Brother's Tower, Rajpur Rd.,<br />
                          Jakhan, Dehradun-248001 (Above Turtle store)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links - Horizontal */}
                <div className="contact-info-social">
                  <h4 className="contact-info-social__title">Follow Us</h4>
                  <div className="contact-info-social__links">
                    <a
                      href="https://www.instagram.com/yahviauraevent/profilecard/?igsh=Nnptd25pNW5ld3N3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-social__link"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://www.facebook.com/yahviauraevents?mibextid=qi2Omg&rdid=XhdgoYKtNT80HsYH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FFf7gbU9qbHf6pHG6%2F%3Fmibextid%3Dqi2Omg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-social__link"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=919315547880&text=Hello%0D%0Alike+to+know+more+infomation&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-social__link"
                      aria-label="WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/yahviauraevents/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-social__link"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
