import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Calendar, Search, Wrench, ShieldCheck } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { number: '1', icon: <Calendar   size={28} />, title: 'Book Inspection',          desc: 'Schedule a free inspection online.',          color: '#4caa17' },
  { number: '2', icon: <Search     size={28} />, title: 'Site Assessment',           desc: 'Technician visits your location.',             color: '#27ae60' },
  { number: '3', icon: <Wrench     size={28} />, title: 'Treatment / Installation',  desc: 'Pest treatment or bird net installation.',     color: '#1abc9c' },
  { number: '4', icon: <ShieldCheck size={28}/>, title: 'Pest-Free Protection',      desc: 'Enjoy a safe and clean environment.',          color: '#3498db' },
];

/* ═══════════════════════════════════════════════════════════
   REALISTIC COCKROACH
═══════════════════════════════════════════════════════════ */
const CockroachSVG = ({ act }) => (
  <svg viewBox="0 0 210 82" width="84" height="33"
       xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
    <defs>
      <linearGradient id="crAbd" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#C07828"/>
        <stop offset="55%"  stopColor="#8B4513"/>
        <stop offset="100%" stopColor="#5A2D0C"/>
      </linearGradient>
      <linearGradient id="crEly" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#CA8030"/>
        <stop offset="55%"  stopColor="#8B4513"/>
        <stop offset="100%" stopColor="#5A2D0C"/>
      </linearGradient>
      <linearGradient id="crPro" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#D48838"/>
        <stop offset="100%" stopColor="#6A3010"/>
      </linearGradient>
      <radialGradient id="crGls" cx="36%" cy="26%" r="52%">
        <stop offset="0%"   stopColor="rgba(255,225,160,0.55)"/>
        <stop offset="100%" stopColor="rgba(255,180,80,0)"/>
      </radialGradient>
    </defs>

    <g className={`cr-master act-${act}`} style={{ transformOrigin: '105px 41px' }}>
      {/* ── CERCI ── */}
      <g className="cr-ce" style={{ transformOrigin: '24px 52px' }}>
        <line x1="24" y1="49" x2="5"  y2="40" stroke="#5A2D0C" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="24" y1="55" x2="5"  y2="59" stroke="#5A2D0C" strokeWidth="1.7" strokeLinecap="round"/>
      </g>

      {/* ── LEGS ── */}
      <g className="cr-la" style={{ transformOrigin: '58px 58px' }}>
        <polyline points="58,58 44,75 32,72" fill="none" stroke="#5A2D0C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g className="cr-lb" style={{ transformOrigin: '58px 51px' }}>
        <polyline points="58,51 46,64 36,59" fill="none" stroke="#7A3D18" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g className="cr-lb" style={{ transformOrigin: '98px 58px' }}>
        <polyline points="98,58 84,75 72,72" fill="none" stroke="#5A2D0C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g className="cr-la" style={{ transformOrigin: '98px 51px' }}>
        <polyline points="98,51 86,64 76,59" fill="none" stroke="#7A3D18" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g className="cr-la" style={{ transformOrigin: '136px 58px' }}>
        <polyline points="136,58 123,75 111,71" fill="none" stroke="#5A2D0C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g className="cr-lb" style={{ transformOrigin: '136px 51px' }}>
        <polyline points="136,51 125,64 116,59" fill="none" stroke="#7A3D18" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* ── ABDOMEN ── */}
      <ellipse cx="62" cy="54" rx="38" ry="19" fill="url(#crAbd)"/>
      {[40, 52, 64, 76].map(x => (
        <path key={x} d={`M${x} 37 Q${x+1} 54 ${x} 71`} fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1.1"/>
      ))}
      <path d="M28 54 Q62 50 96 54" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.2"/>

      {/* ── ELYTRA ── */}
      <ellipse cx="110" cy="52" rx="46" ry="17" fill="url(#crEly)"/>
      <ellipse cx="110" cy="52" rx="46" ry="17" fill="url(#crGls)"/>
      <line x1="110" y1="35" x2="110" y2="69" stroke="rgba(0,0,0,0.28)" strokeWidth="1.3"/>
      <path d="M92 36 Q94 52 92 68"  fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
      <path d="M126 36 Q128 52 126 68" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>

      {/* ── PRONOTUM ── */}
      <ellipse cx="152" cy="51" rx="20" ry="16" fill="url(#crPro)"/>
      <ellipse cx="148" cy="46" rx="12" ry="7" fill="rgba(255,215,140,0.22)" transform="rotate(-10 148 46)"/>

      {/* ── HEAD ── */}
      <ellipse cx="170" cy="52" rx="14" ry="12" fill="#AA6422"/>
      <ellipse cx="179" cy="54" rx="6" ry="8" fill="#9B5523"/>

      {/* ── EYES ── */}
      <g className="cr-eyes">
        <circle cx="170" cy="44" r="9"   fill="#0d0d0d"/>
        <circle cx="170" cy="44" r="7"   fill="#1a1a1a"/>
        <circle cx="167" cy="41" r="2.8" fill="#fff" opacity="0.95"/>
        <circle cx="172" cy="47" r="1.4" fill="#fff" opacity="0.4"/>
        <circle cx="166.5" cy="40.5" r="1.2" fill="#88E8FF" opacity="0.85"/>
      </g>

      {/* ── ANTENNAE ── */}
      <g className="cr-a1" style={{ transformOrigin: '175px 43px' }}>
        <path d="M175 43 Q192 28 208 12" fill="none" stroke="#4A2008" strokeWidth="2.1" strokeLinecap="round"/>
      </g>
      <g className="cr-a2" style={{ transformOrigin: '176px 43px' }}>
        <path d="M176 43 Q190 31 202 18" fill="none" stroke="#5C2E0A" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </g>
  </svg>
);


/* ═══════════════════════════════════════════════════════════
   EXTERMINATOR
═══════════════════════════════════════════════════════════ */
const ExterminatorSVG = ({ act }) => (
  <svg viewBox="0 0 160 145" width="105" height="96"
       xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
    <defs>
      <linearGradient id="exUni" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2878C8"/>
        <stop offset="100%" stopColor="#0D3C78"/>
      </linearGradient>
      <linearGradient id="exHelm" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD740"/>
        <stop offset="100%" stopColor="#C8A000"/>
      </linearGradient>
      <radialGradient id="exFace" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#F8CA9A"/>
        <stop offset="100%" stopColor="#D49050"/>
      </radialGradient>
      <linearGradient id="exTk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A0A0A0"/>
        <stop offset="100%" stopColor="#484848"/>
      </linearGradient>
    </defs>

    <g className={`ex-master act-${act}`}>
      
      {/* ── GREEN SPRAY MIST / PARTICLES ── */}
      <g className="ex-mist">
        <path d="M95 62 Q120 40 150 55 Q130 80 95 65 Z" fill="#4caa17" className="mist-cloud"/>
        <circle cx="110" cy="55" r="4" fill="#a8f569" className="mist-p1"/>
        <circle cx="130" cy="50" r="3" fill="#a8f569" className="mist-p2"/>
        <circle cx="140" cy="65" r="5" fill="#7ed957" className="mist-p3"/>
        <circle cx="120" cy="70" r="3" fill="#7ed957" className="mist-p4"/>
        <circle cx="105" cy="50" r="2" fill="#fff" className="mist-p5"/>
      </g>

      {/* ── TANK ── */}
      <rect x="16" y="52" width="20" height="33" rx="6" fill="url(#exTk)"/>
      <rect x="18" y="54" width="16" height="29" rx="4" fill="rgba(255,255,255,0.06)"/>
      <rect x="18" y="55" width="5" height="25" rx="2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="31" cy="64" r="4" fill="#222"/>
      <circle cx="31" cy="64" r="2.5" fill="#444"/>
      <line x1="31" y1="64" x2="32.5" y2="62" stroke="#0f0" strokeWidth="1"/>
      <rect x="20" y="47" width="12" height="7" rx="3" fill="#666"/>
      <path d="M28 52 Q34 44 42 42" fill="none" stroke="#555" strokeWidth="3.8" strokeLinecap="round"/>
      <path d="M28 52 Q34 44 42 42" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>

      {/* ── TORSO ── */}
      <rect x="29" y="50" width="30" height="40" rx="5" fill="url(#exUni)"/>
      <rect x="29" y="60" width="30" height="3.5" rx="1" fill="rgba(255,255,200,0.2)"/>
      <rect x="29" y="70" width="30" height="3.5" rx="1" fill="rgba(255,255,200,0.15)"/>
      <rect x="50" y="55" width="9" height="7" rx="2" fill="rgba(255,255,255,0.22)"/>
      <text x="51" y="61" fontSize="5" fill="rgba(0,0,0,0.55)" fontFamily="'Inter',sans-serif" fontWeight="bold">PC</text>

      {/* ── LEFT ARM + WAND ── */}
      <g className="ex-la" style={{ transformOrigin: '57px 56px' }}>
        <rect x="56" y="52" width="9" height="20" rx="4" fill="#1E5CA8" transform="rotate(32 60 55)"/>
        <rect x="66" y="63" width="8" height="15" rx="3" fill="#F6C898" transform="rotate(20 70 70)"/>
        <line x1="73" y1="74" x2="90" y2="65" stroke="#777" strokeWidth="4" strokeLinecap="round"/>
        <ellipse cx="91" cy="64" rx="3.5" ry="2.5" fill="#555" transform="rotate(-10 91 64)"/>
        <rect x="77" y="72" width="5" height="7" rx="2" fill="#444"/>
      </g>

      {/* ── RIGHT ARM ── */}
      <g className="ex-ra" style={{ transformOrigin: '31px 56px' }}>
        <rect x="21" y="52" width="9" height="20" rx="4" fill="#1E5CA8" transform="rotate(-24 25 55)"/>
        <rect x="14" y="65" width="8" height="14" rx="3" fill="#F6C898" transform="rotate(-16 18 72)"/>
      </g>

      {/* ── LEFT LEG ── */}
      <g className="ex-ll" style={{ transformOrigin: '46px 90px' }}>
        <rect x="41" y="88" width="12" height="24" rx="5" fill="url(#exUni)"/>
        <rect x="43" y="110" width="11" height="19" rx="4" fill="#0D3A72"/>
        <rect x="40" y="124" width="18" height="9" rx="3" fill="#1a1a1a"/>
        <rect x="41" y="125" width="14" height="4" rx="2" fill="#282828"/>
      </g>

      {/* ── RIGHT LEG ── */}
      <g className="ex-rl" style={{ transformOrigin: '33px 90px' }}>
        <rect x="28" y="88" width="12" height="24" rx="5" fill="#2060B0"/>
        <rect x="27" y="110" width="11" height="19" rx="4" fill="#0D3A72"/>
        <rect x="24" y="124" width="18" height="9" rx="3" fill="#1a1a1a"/>
        <rect x="25" y="125" width="14" height="4" rx="2" fill="#282828"/>
      </g>

      {/* ── HEAD ── */}
      <rect x="37" y="43" width="11" height="10" rx="3" fill="#E8B880"/>
      <ellipse cx="44" cy="34" rx="16" ry="15" fill="url(#exFace)"/>
      <ellipse cx="50" cy="31" rx="4" ry="4.5" fill="#fff"/>
      <circle cx="51" cy="32" r="2.8" fill="#1a0808"/>
      <circle cx="50" cy="30.5" r="1" fill="#fff" opacity="0.9"/>
      <path d="M46 26 Q50 23 54 26" fill="none" stroke="#7B4010" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M45 40 Q49 37 53 40" fill="none" stroke="#7B4010" strokeWidth="1.6" strokeLinecap="round"/>
      <ellipse cx="44" cy="21" rx="20" ry="11" fill="url(#exHelm)"/>
      <ellipse cx="44" cy="26" rx="23" ry="5" fill="#C8A000"/>
      <ellipse cx="44" cy="25" rx="18" ry="3.5" fill="#D8B010" opacity="0.5"/>
      <ellipse cx="37" cy="17" rx="8" ry="4.5" fill="rgba(255,255,190,0.38)" transform="rotate(-18 37 17)"/>
      <rect x="42" y="14" width="2" height="5" rx="1" fill="rgba(0,0,0,0.15)"/>
      <rect x="46" y="14" width="2" height="5" rx="1" fill="rgba(0,0,0,0.15)"/>
    </g>
  </svg>
);

/* ═══════════════════════════════════════════════
   3-D STEP CARD
═══════════════════════════════════════════════ */
const StepCard = ({ step, index, act }) => {
  const cardRef = useRef(null);
  const rotX = useSpring(0, { stiffness: 280, damping: 22 });
  const rotY = useSpring(0, { stiffness: 280, damping: 22 });
  const [hov, setHov] = useState(false);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rotX.set(-(e.clientY - r.top - r.height / 2) / (r.height / 2) * 14);
    rotY.set((e.clientX - r.left - r.width / 2) / (r.width / 2) * 14);
  };
  const onLeave = () => { rotX.set(0); rotY.set(0); setHov(false); };

  // Cards subtly brighten when their respective act is reached
  const isActive = act >= index + 1;

  return (
    <motion.div
      ref={cardRef}
      className={`hiw-card ${isActive ? 'is-active' : ''}`}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', '--step-color': step.color }}
      initial={{ opacity: 0, y: 60, rotateX: -25 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setHov(true)}
    >
      <div className="hiw-card-face">
        {hov && <div className="hiw-shimmer" />}
        <motion.div
          className="hiw-icon-ring"
          animate={hov ? { scale: 1.12, rotate: 10 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          {step.icon}
        </motion.div>
        <h3 className="hiw-card-title">{step.title}</h3>
        <p className="hiw-card-desc">{step.desc}</p>
        <motion.div
          className="hiw-card-line"
          initial={{ scaleX: 0 }}
          animate={hov || isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.35 }}
        />
      </div>
    </motion.div>
  );
};


/* ═══════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════ */
const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [act, setAct] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 70%'],
  });

  // Track acts based on scroll progress to trigger discrete CSS animations
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currentAct = 0;
    if (latest > 0.05) currentAct = 1; // Step 1 glow
    if (latest > 0.20) currentAct = 2; // Exterminator walks
    if (latest > 0.45) currentAct = 3; // Spray attack
    if (latest > 0.52) currentAct = 4; // Roach dies
    if (latest > 0.75) currentAct = 5; // Step 4 shield

    if (currentAct !== act) setAct(currentAct);
  });

  /* ── PROGRESS LINE ── */
  const lineScaleX = useSpring(
    useTransform(scrollYProgress, [0, 0.85], [0, 1]),
    { stiffness: 90, damping: 20 }
  );

  /* ── KINEMATICS (Positions based on progress) ── */
  // Ext starts at step 2 (~30%), walks to step 3 (~65%)
  const extXRaw = useTransform(scrollYProgress, [0, 0.20, 0.45, 1], ['29%', '29%', '55%', '55%']);
  const extX = useSpring(extXRaw, { stiffness: 60, damping: 18 });

  // Roach waits at step 3 (~70%), backs away in fear (~75%), stops
  const cockXRaw = useTransform(scrollYProgress, [0, 0.35, 0.45, 1], ['70%', '70%', '75%', '75%']);
  const cockX = useSpring(cockXRaw, { stiffness: 70, damping: 15 });

  /* ── CAMERA TRACKING ── */
  // Zooms in and pans to keep action centered
  const trackScaleRaw = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.65, 0.8], [1, 1, 1.08, 1.08, 1]);
  const trackScale = useSpring(trackScaleRaw, { stiffness: 50, damping: 15 });

  const trackXRaw = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.65, 0.8], ['0%', '0%', '-8%', '-8%', '0%']);
  const trackX = useSpring(trackXRaw, { stiffness: 50, damping: 15 });

  return (
    <section className={`hiw-section act-mode-${act}`} ref={sectionRef}>
      
      {/* Volumetric Fog Overlays */}
      <div className="hiw-fog-container" aria-hidden="true">
        <div className="hiw-fog hiw-fog-1" />
        <div className="hiw-fog hiw-fog-2" />
      </div>

      <div className="hiw-container">

        {/* Heading */}
        <motion.div
          className="hiw-heading"
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ transformPerspective: 900 }}
        >
          <span className="hiw-badge">PROCESS</span>
          <h2 className="hiw-title">How Our Service Works</h2>
          <p className="hiw-subtitle">Four simple steps to a cleaner, pest-free home or business.</p>
        </motion.div>

        {/* Timeline */}
        <div className="hiw-timeline-wrapper">
          <motion.div 
            className="hiw-timeline-track"
            style={{ scale: trackScale, x: trackX }}
          >
            {/* Background Line */}
            <div className="hiw-line-bg" />
            {/* Animated Progress Line */}
            <motion.div 
              className="hiw-line-fill"
              style={{ scaleX: lineScaleX }} 
            />
            {/* Trail Behind Line */}
            <motion.div 
              className="hiw-line-trail"
              style={{ scaleX: lineScaleX }} 
            />

            {/* ── COCKROACH ── */}
            <motion.div className="hiw-roach-wrapper" style={{ left: cockX }}>
              <CockroachSVG act={act} />
              <div className={`hiw-roach-shadow act-${act}`} />
              <div className={`hiw-dust-particles act-${act}`} />
            </motion.div>

            {/* ── EXTERMINATOR ── */}
            <motion.div className="hiw-ext-wrapper" style={{ left: extX }}>
              <ExterminatorSVG act={act} />
              <div className={`hiw-ext-shadow act-${act}`} />
            </motion.div>

            {/* Step bubbles */}
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`hiw-step-bubble step-circle-${i + 1} ${act >= i + 1 ? 'is-active' : ''}`}
                style={{ '--step-color': step.color }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <span>{step.number}</span>
                {/* Shield pulse on step 4 */}
                {i === 3 && act >= 5 && <div className="shield-pulse" />}
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Cards */}
          <div className="hiw-cards-row" style={{ perspective: '1000px' }}>
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} act={act} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
