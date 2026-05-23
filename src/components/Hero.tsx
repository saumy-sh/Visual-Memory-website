import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const CARD_W = 80;
const CARD_H = 56;
const GAP = 12;
const MAX_VISIBLE = 4;
const TOTAL_SCREENSHOTS = 5;

function getCardTransform(index: number, total: number) {
  const mid = (total - 1) / 2;
  const offset = index - mid;
  const normalised = total > 1 ? offset / mid : 0;
  const translateY = offset * (CARD_H + GAP);
  const bowX = -(1 - normalised * normalised) * 32;
  const rotate = normalised * -10;
  return { translateY, bowX, rotate };
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const [phase, setPhase] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    let active = true;
    const run = async () => {
      setPhase(0);
      setScrollOffset(0);
      await new Promise(r => setTimeout(r, 800));
      if (!active) return;
      
      setPhase(1); // Select/Drag
      await new Promise(r => setTimeout(r, 2000));
      if (!active) return;
      
      setPhase(2); // Flash
      await new Promise(r => setTimeout(r, 150));
      if (!active) return;
      
      setPhase(3); // Fly
      await new Promise(r => setTimeout(r, 800));
      if (!active) return;
      
      setPhase(4); // Dock Rest
      await new Promise(r => setTimeout(r, 500));
      if (!active) return;
      
      setPhase(5); // Carousel Open
      await new Promise(r => setTimeout(r, 800));
      if (!active) return;

      // Scroll automated
      const maxScroll = Math.max(0, TOTAL_SCREENSHOTS - MAX_VISIBLE);
      for (let i = 0; i <= maxScroll; i++) {
        if (!active) return;
        setScrollOffset(i);
        await new Promise(r => setTimeout(r, 700));
      }
      await new Promise(r => setTimeout(r, 1500)); // pause at end
      if (!active) return;
      
      // Close carousel, go back to dock
      setPhase(4);
      setScrollOffset(0);
      await new Promise(r => setTimeout(r, 500));
      if (!active) return;
      
      setIsInteractive(true);
      setShowPointer(true);
    };
    run();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.5 + 0.3, alpha: Math.random() * 0.4 + 0.1 })
    }
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`; ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const showCarousel = isInteractive ? isCarouselOpen : phase === 5;

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (!isInteractive || !isCarouselOpen) return;
      setShowPointer(false);
      e.preventDefault();
      e.stopPropagation();
      const dir = e.deltaY > 0 ? 1 : -1;
      const maxScroll = Math.max(0, TOTAL_SCREENSHOTS - MAX_VISIBLE);
      setScrollOffset(prev => Math.max(0, Math.min(maxScroll, prev + dir)));
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [isInteractive, isCarouselOpen, showCarousel]);

  const handleDockInteraction = () => {
    if (!isInteractive) return;
    setShowPointer(false);
    setIsCarouselOpen(!isCarouselOpen);
  };

  const screenshots = Array.from({ length: TOTAL_SCREENSHOTS }); 

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse-glow 6s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse-glow 8s ease-in-out infinite reverse', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px 6px 8px', borderRadius: 100, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', fontSize: 12, fontWeight: 500, color: '#c4b5fd', marginBottom: 28, letterSpacing: '0.02em', position: 'relative', zIndex: 2 }}>
        <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', padding: '2px 8px', borderRadius: 100, fontSize: 11, color: '#fff' }}>NEW</span>
        Chrome Extension — Free to use
      </motion.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: 900, zIndex: 2 }}>
        
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }} style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 24, fontWeight: 800 }}>
          Visual Memory
          <br />
          <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for the web.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }} style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(237,233,254,0.65)', maxWidth: 540, margin: '0 auto 44px', fontWeight: 400, lineHeight: 1.6 }}>
         Capture insights faster. Recall them instantly. 
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://chromewebstore.google.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 100, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: '#fff', fontSize: 15, fontWeight: 500, boxShadow: '0 0 40px rgba(139,92,246,0.45), 0 8px 32px rgba(0,0,0,0.3)', transition: 'transform 0.25s, box-shadow 0.25s', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(139,92,246,0.6), 0 12px 40px rgba(0,0,0,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(139,92,246,0.45), 0 8px 32px rgba(0,0,0,0.3)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Add to Chrome — It's free
          </a>
          <a href="#how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 100, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(237,233,254,0.75)', fontSize: 15, fontWeight: 400, transition: 'background 0.2s, color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = '#ede9fe' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(237,233,254,0.75)' }}>
            See how it works ↓
          </a>
        </motion.div>

        <div style={{ position: 'absolute', top: -80, left: -40, right: -40, bottom: -100, pointerEvents: 'none' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -100, y: -40 }}
            animate={{
              opacity: phase === 1 ? [0, 1, 1] : 0,
              x: phase === 1 ? [-100, -20, 880] : (phase > 1 ? 880 : -100),
              y: phase === 1 ? [-40, -40, 500] : (phase > 1 ? 500 : -40),
            }}
            transition={{ duration: 2, times: [0, 0.2, 1], ease: "easeOut" }}
            style={{ position: 'absolute', zIndex: 100, width: 24, height: 24, pointerEvents: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: -40, width: 0, height: 0 }}
            animate={{
              opacity: phase === 1 ? [0, 0, 1, 1] : (phase === 2 ? 1 : (phase === 3 ? [1, 1, 0] : 0)),
              x: phase >= 3 ? 900 : -20,
              y: phase >= 3 ? 120 : -40,
              width: phase === 1 ? [0, 0, 0, 900] : (phase >= 3 ? 40 : 900),
              height: phase === 1 ? [0, 0, 0, 540] : (phase >= 3 ? 30 : 540),
              borderRadius: phase >= 3 ? 5 : 4,
              border: phase >= 3 ? '1.5px solid rgba(255,255,255,0.2)' : '2px solid rgba(99,102,241,0.8)',
              background: phase >= 3 ? 'rgba(13,10,26,1)' : 'rgba(99,102,241,0.08)',
            }}
            transition={{ 
              duration: phase === 1 ? 2 : (phase === 3 ? 0.8 : 0), 
              times: phase === 1 ? [0, 0.15, 0.2, 1] : undefined,
              ease: "easeOut" 
            }}
            style={{ position: 'absolute', zIndex: 90, overflow: 'hidden', pointerEvents: 'none', transformOrigin: 'top left' }}
          >
            <motion.div 
              animate={{ opacity: phase >= 3 ? 1 : 0 }} 
              style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)', backgroundImage: 'url(/assets/static_ss.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}
            />
            {phase < 3 && [{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((pos, i) => (
              <div key={i} style={{ position: 'absolute', width: 8, height: 8, background: 'white', borderRadius: 2, boxShadow: '0 0 0 1px rgba(99,102,241,0.8)', ...pos as React.CSSProperties }} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Interactive Draggable Dock Wrapper */}
      <div 
        style={{ 
          position: isInteractive ? 'fixed' : 'absolute', 
          right: isInteractive ? 40 : 0, 
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
          pointerEvents: isInteractive ? 'auto' : 'none',
        }}
      >
        <motion.div 
          drag={isInteractive}
          dragMomentum={false}
          dragElastic={0}
          animate={{ opacity: phase >= 4 ? 1 : 0 }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
        >
          
          <AnimatePresence>
            {showPointer && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  right: 'calc(100% + 10px)',
                  top: '-40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  pointerEvents: 'none',
                  zIndex: 10000
                }}
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  style={{
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    marginBottom: 4,
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                    fontStyle: 'italic',
                    background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Interact with the product right here
                </motion.div>
                <motion.svg 
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  width="40" height="40" viewBox="0 0 60 60" fill="none" style={{ transform: 'rotate(-10deg)', marginRight: 20 }}
                >
                  <path d="M10 20 Q 30 40 45 35" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M35 25 L 45 35 L 35 45" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="10" y1="20" x2="45" y2="35" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa" />
                      <stop offset="1" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showCarousel && (
              <motion.div
                ref={carouselRef}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  right: "calc(100% + 10px)",
                  width: `${CARD_W + 60}px`,
                  height: `${MAX_VISIBLE * (CARD_H + GAP) + CARD_H + 40}px`,
                  pointerEvents: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ position: "relative", width: `${CARD_W + 40}px`, height: `${MAX_VISIBLE * (CARD_H + GAP)}px` }}>
                  {screenshots.slice(scrollOffset, scrollOffset + MAX_VISIBLE).map((_, i) => {
                    const { translateY, bowX, rotate } = getCardTransform(i, MAX_VISIBLE);
                    const globalIndex = scrollOffset + i;
                    const isMainSite = globalIndex === 2; 
                    return (
                      <motion.div
                        key={globalIndex}
                        animate={{ x: bowX, y: translateY, rotate }}
                        initial={false}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: 0,
                          marginTop: `-${CARD_H / 2}px`,
                          width: CARD_W,
                          height: CARD_H,
                          cursor: "pointer",
                          borderRadius: "8px",
                          transformOrigin: "right center",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.45)",
                          zIndex: 1,
                          background: isMainSite 
                            ? '#0d0a1a' 
                            : `linear-gradient(135deg, rgba(139,92,246,${0.3 + (i%3)*0.1}), rgba(59,130,246,${0.2 + (i%3)*0.1}))`,
                          backgroundImage: isMainSite ? 'url(/assets/static_ss.png)' : 'none',
                          backgroundSize: 'cover',
                          backgroundPosition: 'top center',
                          border: isMainSite ? '1.5px solid rgba(167,139,250,0.6)' : '1.5px solid rgba(255,255,255,0.15)',
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            onClick={handleDockInteraction}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              cursor: isInteractive ? "pointer" : "default",
              padding: "6px",
              paddingTop: "22px",
              borderRadius: "16px",
              background: "rgba(15,15,20,0.65)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)",
                width: 28, height: 12, cursor: isInteractive ? "grab" : "default",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 3, padding: "2px 4px", borderRadius: 4, opacity: 0.4,
              }}
            >
              {[0, 1].map(row => (
                <div key={row} style={{ display: "flex", gap: 3 }}>
                  {[0, 1, 2].map(dot => (
                    <div key={dot} style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.9)" }} />
                  ))}
                </div>
              ))}
            </div>

            <div style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(99,102,241,0.5)", fontSize: "18px",
            }}>✂️</div>

            <div style={{ position: "relative", width: "40px", height: "34px" }}>
              {[0, 1, 2].map((i) => {
                const depth = 2 - i;
                const isTop = i === 2;
                return (
                  <div key={i}
                    style={{
                      position: "absolute", width: "40px", height: "30px",
                      borderRadius: "5px", border: "1.5px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                      top: `${depth * -2}px`, left: `${depth * 2}px`,
                      zIndex: i, transform: `rotate(${(depth - 1) * 4}deg)`,
                      background: isTop ? '#0d0a1a' : `linear-gradient(135deg, rgba(139,92,246,0.4), rgba(59,130,246,0.3))`,
                      backgroundImage: isTop ? 'url(/assets/static_ss.png)' : 'none',
                      backgroundSize: 'cover', backgroundPosition: 'top center',
                    }}
                  />
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 2 ? [0, 1, 0] : 0 }}
        transition={{ duration: 0.15, times: [0, 0.5, 1] }}
        style={{ position: 'fixed', inset: 0, background: 'white', zIndex: 9999, pointerEvents: 'none' }}
      />
    </section>
  )
}
