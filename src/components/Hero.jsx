import { useState, useEffect } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { createFadeUp, createStaggerContainer } from '../animations/variants';
import { TextMorph } from 'torph/react';
import { skills } from '../data/projects';
import TextLoop from './TextLoop';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUpVariant = createFadeUp(reduceMotion);
  const staggerVariant = createStaggerContainer();
  
  const ROLES = ["UX Designer", "Design Generalist", "AI Designer", "Design Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }, 3000);

    return () => {
      clearInterval(roleInterval);
    };
  }, []);

  const scrollToWork = () => {
    document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="hero" aria-labelledby="hero-heading" onMouseMove={handleMouseMove}>
      <motion.div 
        className="hero-spotlight" 
        style={{
          left: spotlightX,
          top: spotlightY,
          transform: "translate(-50%, -50%)"
        }} 
        aria-hidden="true" 
      />

      <motion.div
        className="hero-inner"
        variants={staggerVariant}
        initial="hidden"
        animate="visible"
        layout
      >
        <motion.div layout className="hero-name" id="hero-heading" variants={fadeUpVariant} custom={0}>
          👋 I'm Sandeep
        </motion.div>
        
        <motion.div layout variants={fadeUpVariant} custom={0.08} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
          <div className="role-pill" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '8px 24px', 
            borderRadius: '999px', 
            background: 'var(--amber-muted)',
            border: '1px solid var(--amber-border)',
            color: 'var(--amber)',
            fontSize: '16px',
            fontWeight: 500,
            width: '240px',
            height: '48px',
            whiteSpace: 'nowrap'
          }}>
            <TextMorph ease="cubic-bezier(0.23, 1, 0.32, 1)">
              {ROLES[roleIndex]}
            </TextMorph>
          </div>
        </motion.div>

        <motion.p layout className="hero-desc" variants={fadeUpVariant} custom={0.16}>
          Researching, designing, and shipping as the <strong>sole designer</strong> on products
          with real users and real stakes — now looking for the{' '}
          <em>right team to build</em> judgment with.
        </motion.p>
        <motion.div layout className="hero-actions" variants={fadeUpVariant} custom={0.32}>
          <a
            href="#selected-work"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToWork();
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Download resume
          </a>
        </motion.div>
      </motion.div>
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        custom={0.5}
        style={{ width: '100%', left: 0, bottom: '-380px', zIndex: 10, position: 'absolute', pointerEvents: 'none' }}
      >
        <TextLoop
          text={skills.join(" ✦ ")}
          shape="wave"
          speed={90}
          direction="forward"
          separator="✦"
          curviness={75}
          fontSize={32}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#b48246"
          ribbonWidth={60}
          pauseOnHover={false}
        />
      </motion.div>
    </section>
  );
}
