import { useEffect } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav />
      <main style={{
        padding: '120px 24px 60px',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#ede9fe',
        fontFamily: 'Inter, system-ui, sans-serif',
        lineHeight: '1.6'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '48px',
          backdropFilter: 'blur(20px)'
        }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px', background: 'linear-gradient(135deg, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Terms of Service — Visual Memory</h1>
          <p style={{ color: 'rgba(237,233,254,0.5)', fontSize: '14px', marginBottom: '40px' }}>Last Updated: June 2026</p>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>1. Acceptance of Terms</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>By installing and using the Visual Memory browser extension, you agree to be bound by these Terms of Service.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>If you do not agree to these terms, please do not use the extension.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>2. Use License</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Permission is granted to temporarily download one copy of Visual Memory for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Under this license you may not:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Modify or copy the materials</li>
              <li style={{ marginBottom: '8px' }}>Use the materials for any commercial purpose</li>
              <li style={{ marginBottom: '8px' }}>Attempt to decompile or reverse engineer any software contained in Visual Memory</li>
              <li style={{ marginBottom: '8px' }}>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>3. Disclaimer</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>The materials within Visual Memory are provided on an 'as is' basis. Visual Memory makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>4. Limitations</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>In no event shall Visual Memory or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Visual Memory, even if Visual Memory or a Visual Memory authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>5. Revisions and Errata</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>The materials appearing in Visual Memory could include technical, typographical, or photographic errors. Visual Memory does not warrant that any of the materials on its website are accurate, complete or current. Visual Memory may make changes to the materials contained on its website at any time without notice.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>6. Contact</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '8px' }}>If you have any questions about these Terms, please contact us at:</p>
            <a href="mailto:zoomershredder@gmail.com" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 500 }}>zoomershredder@gmail.com</a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
