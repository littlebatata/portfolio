import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">🌸 DWatson.dev</span>
        <p className="footer__copy">
          Made with lots of ☕ and cozy game vibes · © {year}
        </p>
        <a href="#hero" className="footer__back-top">Back to top ↑</a>
      </div>
    </footer>
  )
}
