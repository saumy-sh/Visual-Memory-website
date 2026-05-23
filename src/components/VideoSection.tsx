import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export function VideoSection() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="video-section" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.05) 0%, transparent 70%)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', marginBottom: 48 }}>
        <div style={{
            display: 'inline-block',
            padding: '6px 14px', borderRadius: 100,
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.2)',
            fontSize: 13, color: '#fca5a5',
            letterSpacing: '0.05em', textTransform: 'uppercase',
            fontWeight: 600, marginBottom: 20,
        }}>The Problem</div>
        <h3 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Stop losing track of your research.
        </h3>
        <p style={{ fontSize: 20, color: 'rgba(237,233,254,0.6)', maxWidth: 640, margin: '0 auto', fontWeight: 400, lineHeight: 1.5 }}>
          Traditional bookmarks lack context. Visual Memory brings order to your endless sea of tabs by capturing exactly what matters.
        </p>
      </div>

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
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 80px rgba(239,68,68,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            ref={videoRef}
            src="/assets/why_visual.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              transform: 'scale(1.12)',
            }}
          />
          
          {/* Mute Button Toggle */}
          <button 
            onClick={toggleMute}
            style={{
              position: 'absolute',
              bottom: 24, left: 24,
              width: 44, height: 44,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10,
              color: 'white',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
