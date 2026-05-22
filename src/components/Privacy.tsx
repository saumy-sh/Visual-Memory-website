import { Nav } from './Nav'
import { Footer } from './Footer'

export function Privacy() {
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
          <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px', background: 'linear-gradient(135deg, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Privacy Policy — Visual Memory</h1>
          <p style={{ color: 'rgba(237,233,254,0.5)', fontSize: '14px', marginBottom: '40px' }}>Last Updated: May 2026</p>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Introduction</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Visual Memory is a browser extension designed to help users capture, organize, and recall visual information from webpages and online PDFs for research, learning, and productivity purposes.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>This Privacy Policy explains what information the extension accesses, how it is used, and how user privacy is protected.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Information We Collect</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Visual Memory only accesses content and screenshots when explicitly initiated by the user.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>The extension may process:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>User-selected screenshots from webpages or PDFs</li>
              <li style={{ marginBottom: '8px' }}>Notes or annotations created by the user</li>
              <li style={{ marginBottom: '8px' }}>Feedback messages voluntarily submitted by the user</li>
              <li style={{ marginBottom: '8px' }}>Basic extension usage information required for core functionality</li>
            </ul>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>Visual Memory does not collect personal information such as passwords, payment information, or browsing history unrelated to the extension's functionality.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>How Information Is Used</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>The information processed by Visual Memory is used solely to provide the extension's core features, including:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Capturing visual content from webpages and PDFs</li>
              <li style={{ marginBottom: '8px' }}>Organizing saved visual memories</li>
              <li style={{ marginBottom: '8px' }}>Displaying stored screenshots and notes</li>
              <li style={{ marginBottom: '8px' }}>Improving user experience and extension functionality</li>
              <li style={{ marginBottom: '8px' }}>Responding to user feedback or support requests</li>
            </ul>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Data Storage</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>By default, user data is stored locally within the user's browser storage.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Visual Memory does not sell, rent, or share user data with third parties.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>If future cloud synchronization features are introduced, this Privacy Policy will be updated accordingly.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Feedback and Communication</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>If a user submits feedback through the extension or website, the submitted information (such as email address and message content) may be processed through trusted third-party communication services including:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>EmailJS</li>
            </ul>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>This information is used only for:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Customer support</li>
              <li style={{ marginBottom: '8px' }}>Bug reports</li>
              <li style={{ marginBottom: '8px' }}>Feature requests</li>
              <li style={{ marginBottom: '8px' }}>Product improvement</li>
            </ul>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Permissions Usage</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Visual Memory may request browser permissions necessary for its functionality, including:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Active tab access</li>
              <li style={{ marginBottom: '8px' }}>Screenshot capture</li>
              <li style={{ marginBottom: '8px' }}>Storage access</li>
            </ul>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>These permissions are used exclusively to enable user-requested functionality.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>The extension does not access webpage or PDF content unless the user actively interacts with the extension.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Third-Party Services</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Visual Memory may use trusted third-party services for limited operational purposes, including:</p>
            <ul style={{ color: 'rgba(237,233,254,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>EmailJS for feedback delivery</li>
              <li style={{ marginBottom: '8px' }}>Vercel for website hosting</li>
            </ul>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>These services may process limited technical information necessary for functionality.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Data Security</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Reasonable measures are taken to protect user information and minimize unnecessary data access.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>However, no method of electronic storage or transmission is completely secure, and absolute security cannot be guaranteed.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Children's Privacy</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>Visual Memory is not intended for children under the age of 13.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>The extension does not knowingly collect personal information from children.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Changes to This Privacy Policy</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '16px' }}>This Privacy Policy may be updated periodically to reflect product improvements, legal requirements, or feature changes.</p>
            <p style={{ color: 'rgba(237,233,254,0.8)' }}>Updated versions will be posted with a revised "Last Updated" date.</p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Contact</h2>
            <p style={{ color: 'rgba(237,233,254,0.8)', marginBottom: '8px' }}>For questions, feedback, or privacy-related concerns, contact:</p>
            <a href="mailto:zoomershredder@gmail.com" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 500 }}>zoomershredder@gmail.com</a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
