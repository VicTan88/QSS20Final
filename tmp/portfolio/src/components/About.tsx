import './About.css'

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'Docker', 'AWS', 'Figma',
  'GraphQL', 'Tailwind CSS', 'Next.js', 'Git',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">A little about who I am</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a full-stack developer with 5+ years of experience building scalable web
              applications. I love working at the intersection of design and engineering —
              creating products that are both functional and delightful to use.
            </p>
            <p>
              When I'm not coding, you'll find me hiking mountain trails, experimenting
              with mechanical keyboards, or diving into the latest research in AI and
              human-computer interaction.
            </p>
            <a
              href="/resume.pdf"
              className="btn btn-primary"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <div className="about__skills">
            <h3>Tech Stack</h3>
            <ul className="skills-list">
              {skills.map(skill => (
                <li key={skill} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
