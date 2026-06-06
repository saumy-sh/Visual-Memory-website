import { Link } from 'react-router-dom'

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
        }}>
          <img src="/icons/icon48.png" alt="Visual Memory" style={{ width: 14, height: 14 }} />
        </div>
        <span style={{
          fontSize: 16, color: 'rgba(237,233,254,0.6)', fontWeight: 600
        }}>Visual Memory</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <p style={{ fontSize: 13, color: 'rgba(237,233,254,0.25)', margin: 0 }}>
          Built with ✦ for deep web readers
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'rgba(237,233,254,0.6)', fontWeight: 700 }}>Connect with me:</span>
          <a href="https://discord.com/users/798370608558768150" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(237,233,254,0.6)', textDecoration: 'none' }}>Discord</a>
          <a href="https://www.linkedin.com/in/saumysharan25" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(237,233,254,0.6)', textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://github.com/saumy-sh" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(237,233,254,0.6)', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {['Features', 'How it works', 'Feedback'].map(link => (
          <a
            key={link}
            href={`/#${link.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ fontSize: 13, color: 'rgba(237,233,254,0.3)', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.3)')}
          >{link}</a>
        ))}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link
            to="/terms"
            style={{ fontSize: 13, color: 'rgba(237,233,254,0.3)', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.3)')}
          >Terms of Service</Link>
          <Link
            to="/privacy"
            style={{ fontSize: 13, color: 'rgba(237,233,254,0.3)', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,233,254,0.3)')}
          >Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
