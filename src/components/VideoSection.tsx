import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function VideoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="video-section" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', marginBottom: 32 }}>
        <h3 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>This can be you!</h3>
        <p style={{ fontSize: 18, color: 'rgba(237,233,254,0.5)', maxWidth: 540, margin: '0 auto', fontWeight: 400 }}>
          Avoid this.
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
        </motion.div>
      </div>
    </section>
  )
}
