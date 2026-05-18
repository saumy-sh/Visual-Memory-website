import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 32px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(7,5,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, boxShadow: '0 0 16px rgba(139,92,246,0.5)' }}>
          <img src="/icons/icon48.png" alt="Visual Memory" style={{ width: 18, height: 18 }} />
        </div>
        <span style={{ fontSize: 19, letterSpacing: '-0.025em', color: '#fff', fontWeight: 700 }}>Visual Memory</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {['Features', 'Pricing', 'How it works', 'Feedback'].map(link => (
          <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ fontSize: 14, color: 'rgba(237,233,254,0.6)', transition: 'color 0.2s', fontWeight: 400, textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ede9fe')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.6)')}
          >{link}</a>
        ))}
        <a href="https://chromewebstore.google.com" target="_blank" rel="noopener noreferrer"
          style={{ padding: '8px 18px', borderRadius: 100, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: '#fff', fontSize: 13, fontWeight: 500, boxShadow: '0 0 20px rgba(139,92,246,0.35)', transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(139,92,246,0.55)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.35)' }}
        >Add to Chrome</a>
      </div>
    </motion.nav>
  )
}
