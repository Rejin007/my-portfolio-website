import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRef } from 'react';
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

  const mobileMenuRef = useRef(null);

  const closeMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.removeAttribute("open");
    }
  };

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

          <details className='nav-mobile' ref={mobileMenuRef}>
            <summary>Menu</summary>
            <nav>
              <Link to="/" onClick={closeMenu}>Home </Link>
              <Link to="/skills" onClick={closeMenu}> Skills</Link>
              <Link to="/projects" onClick={closeMenu}> Projects</Link>
              <Link to="/education" onClick={closeMenu}> Education</Link>
              <Link to="/contact" onClick={closeMenu}> Contact</Link>
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
          <a target="_blank" href="tel:+918590471041"><img src={phone} alt="phone" /></a>
          <a target="_blank" href="mailto:rejinrjr144@gmail.com"><img src={envelope_mail} alt="envelope_mail" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/rejin-r-j-a88066377/"><img src={linkedin} alt="linkedin" /></a>
          <a target="_blank" href="https://www.instagram.com/spidy_00070/"><img src={instagram} alt="instagram" /></a>
          <a target="_blank" href="https://wa.me/+918590471041"><img src={whatsapp} alt="whatsapp" /></a>
          <a target="_blank" href="https://youtube.com/@trenting625?si=b2b84buj3MvouoCH"><img src={youtube} alt="youtube_logo" /></a>
        </div>

        <h3>Elevating the Digital Experience !</h3>
      </section>
    </>
  )
}

export default App
