import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { VideoSection } from './components/VideoSection'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Feedback } from './components/Feedback'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <HowItWorks />
        <Feedback />
      </main>
      <Footer />
    </>
  )
}
