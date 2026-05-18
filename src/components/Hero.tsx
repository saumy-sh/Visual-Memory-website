import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse-glow 6s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse-glow 8s ease-in-out infinite reverse', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px 6px 8px', borderRadius: 100, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', fontSize: 12, fontWeight: 500, color: '#c4b5fd', marginBottom: 28, letterSpacing: '0.02em' }}>
        <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', padding: '2px 8px', borderRadius: 100, fontSize: 11, color: '#fff' }}>NEW</span>
        Chrome Extension — Free to use
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }} style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.04em', maxWidth: 900, marginBottom: 24, fontWeight: 800 }}>
        Visual Memory
        <br />
        <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for the web.</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }} style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(237,233,254,0.65)', maxWidth: 540, marginBottom: 44, fontWeight: 400, lineHeight: 1.6 }}>
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

      {/* Browser mockup */}
      <motion.div initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease }} style={{ marginTop: 72, width: '100%', maxWidth: 860, borderRadius: 20, background: 'rgba(13,10,26,0.8)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(139,92,246,0.15)', overflow: 'hidden', backdropFilter: 'blur(20px)' }}>
        <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['#ef4444','#f59e0b','#22c55e'] as const).map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />)}
          </div>
          <div style={{ flex: 1, height: 26, borderRadius: 6, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', paddingLeft: 10, fontSize: 11, color: 'rgba(237,233,254,0.3)' }}>🔒 &nbsp;example.com/article</div>
        </div>
        <div style={{ position: 'relative', padding: 28, minHeight: 320 }}>
          {[100, 85, 92, 70, 88, 60, 78, 90, 65].map((w, i) => (
            <div key={i} style={{ height: i === 0 ? 20 : 11, width: `${w}%`, borderRadius: 4, background: i === 0 ? 'rgba(167,139,250,0.25)' : 'rgba(255,255,255,0.07)', marginBottom: i === 0 ? 16 : 8 }} />
          ))}
          <div style={{ position: 'absolute', top: 56, left: 28, right: 28, height: 72, border: '2px solid rgba(99,102,241,0.8)', borderRadius: 6, background: 'rgba(99,102,241,0.08)', boxSizing: 'border-box' }}>
            {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((pos, i) => (
              <div key={i} style={{ position: 'absolute', width: 8, height: 8, background: 'white', borderRadius: 2, boxShadow: '0 0 0 1px rgba(99,102,241,0.8)', ...pos as React.CSSProperties }} />
            ))}
          </div>
          <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '8px 6px', borderRadius: 14, background: 'rgba(13,10,26,0.85)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 24px rgba(0,0,0,0.5)', animation: 'float 4s ease-in-out infinite' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>✂️</div>
            <div style={{ position: 'relative', width: 32, height: 26 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ position: 'absolute', bottom: 0, width: 32, height: 22, borderRadius: 4, background: `rgba(139,92,246,${0.5 - i * 0.12})`, border: '1px solid rgba(255,255,255,0.15)', transform: `rotate(${(i-1)*4}deg) translateY(${i*-2}px)`, zIndex: 3-i }} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} style={{ marginTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(237,233,254,0.25)', fontSize: 12 }}>
        <div style={{ width: 24, height: 36, borderRadius: 12, border: '1.5px solid rgba(237,233,254,0.15)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4px 0' }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(139,92,246,0.5)' }} />
        </div>
        scroll
      </motion.div>
    </section>
  )
}
