import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero         from './Hero';
import About        from './About';
import Projects     from './Projects';
import Skills       from './Skills';
import Gallery      from './Gallery';
import Blog         from './Blog';
import Experience   from './Experience';
import Education    from './Education';
import Publications from './Publications';
import Contact      from './Contact';

export default function HomePage() {
  const location = useLocation();

  // Supports deep links like /#projects — Nav sends people here when they
  // click a section link while on a project/experience detail page.
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
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
  );
}