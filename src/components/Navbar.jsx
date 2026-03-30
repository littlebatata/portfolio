import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo / wordmark */}
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-icon">🌸</span>
          <span className="navbar__logo-text">DW Portfolio</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__link">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="navbar__mobile-menu">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__mobile-link" onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
