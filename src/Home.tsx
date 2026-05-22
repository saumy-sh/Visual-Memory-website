import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { VideoSection } from './components/VideoSection'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Feedback } from './components/Feedback'
import { Footer } from './components/Footer'

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <Feedback />
      </main>
      <Footer />
    </>
  )
}
