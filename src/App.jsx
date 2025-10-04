import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Skill from './Skill'
import Contact from './Contact'
import Projects from './Projects'
import Education from './Education'

import phone from './assets/phone-logo.png'
import envelope_mail from './assets/envelope_mail-logo.png'
import linkedin from './assets/linkedin-logo.png'
import instagram from './assets/instagram-logo.png'
import whatsapp from './assets/whatsapp-logo.png'
import youtube from './assets/youtube_logo.png'

import portfolio from './assets/portfolio-logo.png'

function App() {


  return (
    <>
      <Router>
        <section id="header-section">
          <img src={portfolio} alt="portfolio-logo" />
          <nav className='nav-desktop'>
            <Link to="/">Home </Link>
            <Link to="/skills"> Skills</Link>
            <Link to="/projects"> Projects</Link>
            <Link to="/education"> Education</Link>
            <Link to="/contact"> Contact</Link>
          </nav>

          <details className='nav-mobile'>
            <summary>Menu</summary>
            <nav>
              <Link to="/">Home </Link>
              <Link to="/skills"> Skills</Link>
              <Link to="/projects"> Projects</Link>
              <Link to="/education"> Education</Link>
              <Link to="/contact"> Contact</Link>
            </nav>
          </details>

        </section>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <section id="footer-section">
        <h2>REJIN.R.J</h2>
        <div>
          <a href=""><img src={phone} alt="phone" /></a>
          <a href=""><img src={envelope_mail} alt="envelope_mail" /></a>
          <a href=""><img src={linkedin} alt="linkedin" /></a>
          <a href=""><img src={instagram} alt="instagram" /></a>
          <a href=""><img src={whatsapp} alt="whatsapp" /></a>
          <a href=""><img src={youtube} alt="youtube_logo" /></a>
        </div>
        <h3>Elevating the Digital Experience !</h3>
      </section>
    </>
  )
}

export default App
