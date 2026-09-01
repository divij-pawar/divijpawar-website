import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';
import Nav              from './components/Nav';
import HomePage         from './components/HomePage';
import ProjectPage      from './components/ProjectPage';
import ExperiencePage   from './components/ExperiencePage';
import SpotifyNowPlaying from './components/SpotifyNowPlaying';

/* Jumps to the top of a fresh route. Skipped when the URL carries a hash
   (e.g. /#projects) since that means we're deliberately scrolling to a
   section instead of landing on a new page. */
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6" style={{ padding: '9rem 1.5rem', textAlign: 'center' }}>
      <p className="label" style={{ display: 'inline-block' }}>404</p>
      <h2 className="heading">Page not found</h2>
      <Link to="/" className="btn-primary">Back to home</Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/experience/:slug" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '1.2rem 1.5rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>
          © 2026 Divij Pawar
        </span>

        <SpotifyNowPlaying />

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
