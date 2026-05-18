export function Footer() {
  return (
    <footer style={{
      padding: '40px 24px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13,
        }}>✂️</div>
        <span style={{
          fontSize: 16, color: 'rgba(237,233,254,0.6)', fontWeight: 600
        }}>Visual Memory</span>
      </div>

      <p style={{ fontSize: 13, color: 'rgba(237,233,254,0.25)' }}>
        Built with ✦ for deep web readers
      </p>

      <div style={{ display: 'flex', gap: 24 }}>
        {['Features', 'How it works', 'Feedback'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ fontSize: 13, color: 'rgba(237,233,254,0.3)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.3)')}
          >{link}</a>
        ))}
      </div>
    </footer>
  )
}
