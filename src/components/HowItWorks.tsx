import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Install the extension',
    description: 'Add Visual Memory to Chrome in one click. No account needed, no sign-up, completely free.',
    visual: (
      <div style={{
        padding: '20px 24px',
        borderRadius: 14,
        background: 'rgba(139,92,246,0.08)',
        border: '1px solid rgba(139,92,246,0.2)',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, flexShrink: 0,
          boxShadow: '0 0 20px rgba(139,92,246,0.4)',
        }}>✂️</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>Visual Memory</div>
          <div style={{ fontSize: 11, color: 'rgba(237,233,254,0.4)' }}>Added to Chrome</div>
        </div>
        <div style={{
          marginLeft: 'auto', padding: '4px 12px', borderRadius: 100,
          background: 'rgba(34,197,94,0.15)',
          border: '1px solid rgba(34,197,94,0.3)',
          fontSize: 11, color: '#86efac',
        }}>✓ Active</div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Click the scissors',
    description: 'Hit the ✂️ button in the floating dock to enter capture mode. Your cursor becomes a precision crosshair.',
    visual: (
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, alignItems: 'center' }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, boxShadow: '0 0 24px rgba(139,92,246,0.5)',
        }}>✂️</div>
        <div style={{ color: 'rgba(237,233,254,0.3)', fontSize: 12 }}>→</div>
        <div style={{
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: 13, color: 'rgba(237,233,254,0.6)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 16 }}>＋</span> Capture mode
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Drag to select',
    description: 'Draw a rectangle around any part of the page. An overlay shows exactly what you\'re capturing.',
    visual: (
      <div style={{
        position: 'relative', height: 80, borderRadius: 10,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        {[100,72,88,60].map((w, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: 12, top: 8 + i * 16,
            width: `${w * 0.7}%`, height: 8, borderRadius: 3,
            background: 'rgba(255,255,255,0.07)',
          }} />
        ))}
        <div style={{
          position: 'absolute', top: 12, left: 12, right: 12, height: 40,
          border: '2px solid rgba(99,102,241,0.9)',
          borderRadius: 4,
          background: 'rgba(99,102,241,0.08)',
        }}>
          {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', width: 7, height: 7,
              background: 'white', borderRadius: 2,
              boxShadow: '0 0 0 1px rgba(99,102,241,0.8)', ...p,
            }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Browse the carousel',
    description: 'Click your dock stack to fan out an arched carousel. Hover to brighten. Scroll when you have many.',
    visual: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, paddingRight: 8 }}>
        {/* Carousel cards */}
        {[
          { rotate: -12, x: -24, opacity: 0.35 },
          { rotate: -4, x: -12, opacity: 0.6 },
          { rotate: 0, x: 0, opacity: 1 },
          { rotate: 4, x: -12, opacity: 0.6 },
          { rotate: 12, x: -24, opacity: 0.35 },
        ].map((s, i) => (
          <div key={i} style={{
            width: 48, height: 36, borderRadius: 6,
            background: `linear-gradient(135deg, rgba(139,92,246,${0.3 + i * 0.05}), rgba(59,130,246,${0.2 + i * 0.05}))`,
            border: '1.5px solid rgba(255,255,255,0.15)',
            transform: `rotate(${s.rotate}deg) translateX(${s.x}px)`,
            opacity: s.opacity,
            boxShadow: i === 2 ? '0 0 0 2px rgba(99,102,241,0.8), 0 8px 20px rgba(0,0,0,0.4)' : 'none',
          }} />
        ))}
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '120px 24px',
      position: 'relative',
      background: 'linear-gradient(180deg, transparent 0%, rgba(13,10,26,0.5) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '5px 14px', borderRadius: 100,
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.2)',
            fontSize: 12, color: '#93c5fd',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            fontWeight: 500, marginBottom: 20,
          }}>How it works</div>

          <h2 style={{
            fontSize: 'clamp(34px, 5vw, 52px)',
            lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em',
          }}>
            Four steps to<br />
            <span style={{ color: '#60a5fa' }}>never lose context.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((step, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-80px' })
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={step.num}
                ref={ref}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                  padding: '48px 0',
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                }}
              >
                {/* Text */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div style={{
                    fontSize: 56, lineHeight: 1,
                    color: 'rgba(139,92,246,0.15)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    marginBottom: 12,
                  }}>{step.num}</div>
                  <h3 style={{
                    fontSize: 28, fontWeight: 700, marginBottom: 12,
                    letterSpacing: '-0.02em', color: '#fff',
                  }}>{step.title}</h3>
                  <p style={{
                    fontSize: 16, color: 'rgba(237,233,254,0.6)',
                    lineHeight: 1.6, fontWeight: 400,
                  }}>{step.description}</p>
                </div>

                {/* Visual */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div style={{
                    padding: '28px 24px',
                    borderRadius: 18,
                    background: 'rgba(13,10,26,0.7)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(12px)',
                  }}>
                    {step.visual}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
