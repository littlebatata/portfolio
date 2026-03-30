import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <div className="divider" />

        <p className="contact__blurb">
          Whether you’re interested in discussing game development, exploring a potential collaboration, or simply reaching out, I’m always happy to connect.
        </p>


        {/* Social links */}
        <div className="contact__socials">
          <a
            href="mailto:dani.dw@outlook.com"
            className="contact__social-email"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://yourusername.itch.io"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            itch.io
          </a>
          <a
            href="https://linkedin.com/in/danieladwatson"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
