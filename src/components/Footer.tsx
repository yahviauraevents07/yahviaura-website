import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isRevealed) {
        // Get current scroll position
        const scrollY = window.scrollY;
        
        // Get document height and window height
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate how much user can actually scroll
        const maxScroll = documentHeight - windowHeight;
        
        // Trigger when user is within 250px of the bottom (very close to actual footer)
        const triggerPoint = maxScroll - 250;
        
        console.log(`ScrollY: ${scrollY}, TriggerPoint: ${triggerPoint}, MaxScroll: ${maxScroll}, Distance: ${triggerPoint - scrollY}`);
        
        if (scrollY >= triggerPoint) {
          console.log('ANIMATION TRIGGERED!');
          setIsRevealed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRevealed]);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        {/* YAHVI AURA Calligraphy */}
        <div className="footer-brand">
          <svg viewBox="0 0 1200 280" className="footer-calligraphy" preserveAspectRatio="xMidYMid meet">
            {/* Y - Left diagonal */}
            <motion.path
              d="M 30 50 Q 50 90 65 130 L 65 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
            />
            {/* Y - Right diagonal */}
            <motion.path
              d="M 100 50 Q 80 90 65 130"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.05 }}
            />
            
            {/* A */}
            <motion.path
              d="M 138 200 L 175 40 L 220 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            />
            <motion.path
              d="M 165 130 L 215 130"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
            />
            
            {/* H */}
            <motion.path
              d="M 260 40 L 260 200 M 260 120 L 330 120 M 330 40 L 330 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
            
            {/* V */}
            <motion.path
              d="M 370 40 L 420 200 L 470 40"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
            />
            
            {/* I */}
            <motion.path
              d="M 510 40 L 560 40 M 535 40 L 535 200 M 510 200 L 560 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            />
            
            {/* A (AURA) */}
            <motion.path
              d="M 650 200 L 690 40 L 730 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.35 }}
            />
            <motion.path
              d="M 665 130 L 715 130"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            />
            
            {/* U */}
            <motion.path
              d="M 770 40 L 770 160 Q 770 200, 810 200 Q 850 200, 850 160 L 850 40"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.45 }}
            />
            
            {/* R */}
            <motion.path
              d="M 890 200 L 890 40 L 950 40 Q 970 40, 970 70 Q 970 100, 950 100 L 890 100 M 940 100 L 970 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* A */}
            <motion.path
              d="M 1010 200 L 1050 40 L 1090 200"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.55 }}
            />
            <motion.path
              d="M 1025 130 L 1075 130"
              fill="transparent"
              strokeWidth="5"
              stroke="url(#yahviGradient)"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isRevealed ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            />
            
            <defs>
              <linearGradient id="yahviGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fe00dd" />
                <stop offset="50%" stopColor="#FF1493" />
                <stop offset="100%" stopColor="#f8ef16" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
