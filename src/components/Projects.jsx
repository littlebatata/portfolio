import { useState } from 'react'
import './Projects.css'

// 🔧 TODO: Replace with your real projects.
// Move items between ONGOING and COMPLETED as they progress.
// Fields:
//   emoji     — placeholder thumbnail (replace with image path once you have screenshots)
//   title     — project name
//   tags      — engine / tech / genre chips
//   description — one or two sentences
//   image     — optional: '/your-screenshot.png' (place file in /public)
//   link      — optional: 'https://yourusername.itch.io/game-name'
//   role      — your role on the project (useful for collaborations)

const ONGOING = [
  {
    emoji: '🏡',
    title: 'Cozy Cabin Demo',
    tags: ['Godot', 'GDScript', 'Pixel Art', 'Top-down'],
    description:
      'A relaxing exploration demo set in a snowy mountain cabin. Collect items, tend to plants, and chat with friendly neighbours. First complete slice currently in development.',
    role: 'Solo Developer',
    link: null,
  },
  {
    emoji: '🐾',
    title: 'Pet Companion Prototype',
    tags: ['Unity', 'C#', '2D'],
    description:
      'A virtual-pet prototype where a small critter follows you through a hand-drawn world and reacts dynamically to weather and time of day.',
    role: 'Solo Developer',
    link: null,
  },
]

const COMPLETED = [
  {
    emoji: '🌾',
    title: 'Veilbound',
    tags: ['Unity', 'C#', 'Visual Novel'],
    description:
      'A supernatural coming‑of‑age story about a teen who can see spirits and finds herself caught between three very different forces: a handsome ghost devoted to her, a reckless classmate who shares her gift, and a lonely reaper tired of his job. As danger closes in and loyalties blur, she must navigate love, betrayal, and the thin line between life and death.',
    role: 'Solo Developer',
    link: null, // 🔧 Add your itch.io link here
  },
]

// ── Project card ──────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <article
      className="card project-card fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail */}
      <div
        className="project-card__thumb"
        style={project.image ? { backgroundImage: `url(${project.image})` } : {}}
      >
        {!project.image && <span aria-hidden>{project.emoji}</span>}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>

        {project.role && (
          <span className="project-card__role">{project.role}</span>
        )}

        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        <p className="project-card__desc">{project.description}</p>

        {project.link ? (
          <a
            href={project.link}
            className="project-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play / View →
          </a>
        ) : (
          <span className="project-card__soon">🔗 Link coming soon</span>
        )}
      </div>
    </article>
  )
}

// ── Section ───────────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing')

  const list = activeTab === 'ongoing' ? ONGOING : COMPLETED

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Game <span>Projects</span></h2>
        <div className="divider" />
        <p className="section-subtitle">What I've been building</p>

        {/* Tab switcher */}
        <div className="projects__tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'ongoing'}
            className={`projects__tab ${activeTab === 'ongoing' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            In Progress
            <span className="projects__tab-count">{ONGOING.length}</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'completed'}
            className={`projects__tab ${activeTab === 'completed' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
            <span className="projects__tab-count">{COMPLETED.length}</span>
          </button>
        </div>

        {/* Cards grid */}
        <div className="projects__grid" key={activeTab}>
          {list.length > 0 ? (
            list.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))
          ) : (
            <p className="projects__empty">
              Coming soon! 
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
