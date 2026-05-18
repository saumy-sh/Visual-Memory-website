import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function VideoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="video-section" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            borderRadius: 32,
            background: 'rgba(13,10,26,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            aspectRatio: '16/9',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 80px rgba(139,92,246,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Subtle background glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)', pointerEvents: 'none' }} />
          
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px', cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s, background 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 600, color: '#fff', marginBottom: 8 }}>See it in action</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>A quick 45-second tour of Visual Memory</p>
          </div>

          {/* Video Placeholder (actually would be a <video> tag) */}
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(45deg, rgba(139,92,246,0.05), rgba(59,130,246,0.05))',
            zIndex: 0 
          }} />
        </motion.div>
      </div>
    </section>
  )
}
