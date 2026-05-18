import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export function VideoSection() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="video-section" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', marginBottom: 32 }}>
        <h3 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>This can be you</h3>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, maxWidth: 720, margin: '0 auto' }}>
          Watch how Visual Memory helps you capture, organize, and recall the web with a single extension.
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
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 80px rgba(139,92,246,0.1)',
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
            playsInline
            controls
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(13,10,26,0.2), rgba(13,10,26,0.2))', zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08), transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />
          <button
            onClick={togglePlayback}
            style={{
              position: 'absolute',
              zIndex: 3,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 72,
              height: 72,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              fontSize: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
              outline: 'none',
            }}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
