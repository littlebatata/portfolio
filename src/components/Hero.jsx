import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Decorative floating emojis */}
      <span className="hero__deco hero__deco--1" aria-hidden>🌸</span>
      <span className="hero__deco hero__deco--2" aria-hidden>🌸</span>
      <span className="hero__deco hero__deco--3" aria-hidden>🌸</span>

      <div className="container hero__content">
        <p className="hero__greeting fade-up">Hi there, I'm</p>

        {/* 🔧 TODO: Replace with your name */}
        <h1 className="hero__name fade-up" style={{ animationDelay: '0.1s' }}>
          Dani Watson
        </h1>

        <p className="hero__tagline fade-up" style={{ animationDelay: '0.2s' }}>
          Game Developer &amp; World Builder
        </p>

        <p className="hero__description fade-up" style={{ animationDelay: '0.3s' }}>
          From the high‑seas wit of Monkey Island to the rolling d20s of D&D, games have always been my favorite way to experience a story. I’m building worlds that feel lived‑in, heartfelt, and full of soul, bringing my imagination to life one project at a time.
        </p>

        <div className="hero__actions fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn--primary">See My Work</a>
          <a href="#contact"  className="btn btn--outline">Say Hello</a>
        </div>
      </div>
    </section>
  )
}
