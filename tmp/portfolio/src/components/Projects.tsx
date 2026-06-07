import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  emoji: string
  github: string
  live: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DevFlow',
    description:
      'A real-time collaborative code editor with syntax highlighting, live cursors, and built-in video chat. Built for remote pair programming.',
    tags: ['React', 'Node.js', 'WebSockets', 'Monaco'],
    emoji: '💻',
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#6c63ff',
  },
  {
    id: 2,
    title: 'SnapMetrics',
    description:
      'An analytics dashboard that visualizes app telemetry in real time. Features customizable charts, alerts, and team-based access control.',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL', 'Docker'],
    emoji: '📊',
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#f97316',
  },
  {
    id: 3,
    title: 'NoteWave',
    description:
      'A markdown note-taking PWA with offline support, full-text search, and seamless cross-device sync using CRDT conflict resolution.',
    tags: ['Next.js', 'IndexedDB', 'PWA', 'Tailwind'],
    emoji: '📝',
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#10b981',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of personal and professional projects I'm proud of.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" style={{ '--card-accent': project.color } as React.CSSProperties}>
      <div className="project-card__top">
        <div className="project-card__emoji" aria-hidden="true">{project.emoji}</div>
        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <ul className="project-card__tags">
        {project.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}
