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
              d="M 50 50 Q 70 90 85 130 L 85 200"
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
              d="M 120 50 Q 100 90 85 130"
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
              d="M 170 200 L 210 40 L 250 200"
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
              d="M 185 130 L 235 130"
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
              d="M 310 40 L 310 200 M 310 120 L 380 120 M 380 40 L 380 200"
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
              d="M 420 40 L 470 200 L 520 40"
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
              d="M 550 40 L 600 40 M 575 40 L 575 200 M 550 200 L 600 200"
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
              d="M 670 200 L 710 40 L 750 200"
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
              d="M 685 130 L 735 130"
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
              d="M 790 40 L 790 160 Q 790 200, 830 200 Q 870 200, 870 160 L 870 40"
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
              d="M 910 200 L 910 40 L 970 40 Q 990 40, 990 70 Q 990 100, 970 100 L 910 100 M 960 100 L 990 200"
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
              d="M 1030 200 L 1070 40 L 1110 200"
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
              d="M 1045 130 L 1095 130"
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
