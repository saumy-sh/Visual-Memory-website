import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Privacy } from './components/Privacy'
import { TermsOfService } from './components/TermsOfService'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}
