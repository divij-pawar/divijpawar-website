import { Github } from 'lucide-react';
import Nav          from './components/Nav';
import Hero         from './components/Hero';
import About        from './components/About';
import Projects     from './components/Projects';
import Skills       from './components/Skills';
import Gallery      from './components/Gallery';
import Blog         from './components/Blog';
import Experience   from './components/Experience';
import Education    from './components/Education';
import Publications from './components/Publications';
import Contact      from './components/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Gallery />
        <Blog />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '1.2rem 1.5rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>
          © 2026 Divij Pawar
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>
            React + Vite + Tailwind
          </span>
          <a
            href="https://github.com/divij-pawar/divijpawar-website"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center' }}
            aria-label="GitHub Repository"
          >
            <Github size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
