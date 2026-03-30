import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">

        {/* Avatar / illustration placeholder */}
        <div className="about__avatar-wrap fade-up">
          <div className="about__avatar">
                
            <span aria-hidden><img src="./luffy-the-floof.png" alt="Luffy" /></span>
          </div>
        </div>

        {/* Text content */}
        <div className="about__text fade-up" style={{ animationDelay: '0.15s' }}>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="divider" />
          <p className="section-subtitle">A little about my journey </p>

          <p>
            I’m a software developer whose heart has always belonged to the stories we play. Whether it’s the tactical depth of RPGs or the cozy charm of Harvest Moon, I’m driven by the same magic that first drew me to games: the feeling of stepping into a world that feels lived‑in and full of possibility.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Currently, I’m diving deep into <strong>Unity</strong> and digital art , bringing together my technical background and my love of narrative design to craft experiences where atmosphere meets mechanics.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Games my favorite way to explore new places, connect with characters, and step into worlds that feel alive. My goal is to create stories and experiences that stay with players long after the screen fades.
          </p>


        </div>

      </div>
    </section>
  )
}
