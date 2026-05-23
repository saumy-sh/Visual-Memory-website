import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '✂️',
    title: 'Drag to capture',
    description: 'Draw any rectangle on a webpage. The selected region is instantly captured as a crisp screenshot.',
    color: '#8b5cf6',
    video: '/assets/drag-capture.mp4'
  },
  {
    icon: '🃏',
    title: 'Floating dock',
    description: 'Captures stack up in an elegant deck of cards on the side. Drag the dock anywhere on screen.',
    color: '#6366f1',
    video: '/assets/drag-drop.mp4'
  },
  {
    icon: '🎠',
    title: 'Arched carousel',
    description: 'Click the stack to fan out a beautifully arched vertical carousel. Scroll through all your captures.',
    color: '#3b82f6',
    video: '/assets/carousel.mp4'
  },
  {
    icon: '↩',
    title: 'Navigate to source',
    description: 'One click scrolls the page back to the exact location where the screenshot was taken. Centered perfectly.',
    color: '#8b5cf6',
    video: '/assets/source.mp4'
  },
  {
    icon: '🔍',
    title: 'Expandable preview',
    description: 'Click any capture to open a resizable, draggable preview window — without blurring the page behind it.',
    color: '#6366f1',
    video: '/assets/preview.mp4'
  },
  {
    icon: '💾',
    title: 'Persists across sessions',
    description: 'Captures are saved per-page. Come back to any tab and your screenshots are exactly where you left them.',
    color: '#3b82f6',
    video: '/assets/memory.mp4'
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleMouseEnter = () => videoRef.current?.play()
  const handleMouseLeave = () => videoRef.current?.pause()
  const handleFocus = () => videoRef.current?.play()
  const handleBlur = () => videoRef.current?.pause()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '32px',
        borderRadius: 24,
        background: 'rgba(13,10,26,0.6)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(255,255,255,0.15)',
        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${feature.color}30`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: `${feature.color}18`,
          border: `1px solid ${feature.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, marginBottom: 20,
        }}>
          {feature.icon}
        </div>
        <h3 style={{
          fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em',
          marginBottom: 10, color: '#fff',
        }}>{feature.title}</h3>
        <p style={{
          fontSize: 15, color: 'rgba(237,233,254,0.6)',
          lineHeight: 1.6, fontWeight: 400,
        }}>{feature.description}</p>
      </div>

      {/* Video Display */}
      <div style={{
        marginTop: 'auto',
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${feature.color}10, transparent 70%)`,
          zIndex: 0
        }} />
        <video
          ref={videoRef}
          src={feature.video}
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 1,
            borderRadius: 11
          }}
        />
      </div>
    </motion.div>
  )
}

export function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(59,130,246,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '6px 14px', borderRadius: 100,
            background: 'rgba(139,92,246,0.12)',
            border: '1px solid rgba(139,92,246,0.25)',
            fontSize: 13, color: '#c4b5fd',
            letterSpacing: '0.05em', textTransform: 'uppercase',
            fontWeight: 600, marginBottom: 24,
          }}>The Solution</div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: 20, color: '#fff',
          }}>
            Tools that fit the way<br />
            <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>modern professionals learn and research.</span>
          </h2>
          <p style={{
            fontSize: 18, color: 'rgba(237,233,254,0.5)',
            maxWidth: 540, margin: '0 auto', fontWeight: 400,
          }}>
            Drag to capture any region of a webpage. Screenshots float in a sleek dock — always there, never in the way. Navigate back to the exact spot with one click.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
          gap: 24,
        }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
