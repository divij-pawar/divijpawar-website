import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { renderBoldMarkup, getProjectSlug } from '../utils';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => getProjectSlug(p) === slug);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    document.title = project ? `${project.title} — Divij Pawar` : 'Project not found — Divij Pawar';
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6" style={{ padding: '9rem 1.5rem', textAlign: 'center' }}>
        <p className="label" style={{ display: 'inline-block' }}>Not found</p>
        <h2 className="heading">This project doesn't exist</h2>
        <Link to="/#projects" className="btn-primary">Back to projects</Link>
      </div>
    );
  }

  const hasImages = project.images && project.images.length > 0;

  return (
    <article className="section-pad" style={{ minHeight: '70vh' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/#projects" className="btn-ghost" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          ← All Projects
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="tag tag-accent" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>{project.category}</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '0.5rem' }}>{project.title}</h1>
          <p className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>{project.subtitle}</p>
        </div>

        {/* Image gallery */}
        {hasImages && (
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.8rem' }}>
              Photos
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: project.images!.length === 1 ? '1fr' : project.images!.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
              gap: '0.7rem',
            }}>
              {project.images!.map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxSrc(src)}
                  className="gallery-tile"
                  style={{ borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)', cursor: 'zoom-in', aspectRatio: '4/3' }}
                >
                  <img
                    src={src}
                    alt={`${project.title} photo ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Body */}
        <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem' }}>{project.context}</p>

          {/* Impact chips */}
          {project.impact && project.impact.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              {project.impact.map(stat => (
                <div key={stat.label} style={{ background: 'var(--accent-bg)', border: '1px solid var(--border)', borderRadius: 4, padding: '0.6rem 1rem' }}>
                  <span className="font-display" style={{ display: 'block', fontSize: '1.3rem', color: 'var(--accent)', lineHeight: 1.1 }}>{stat.value}</span>
                  <span className="font-mono" style={{ display: 'block', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Grouped bullets */}
          {project.groups.map(group => (
            <div key={group.groupLabel}>
              <p className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                {group.groupLabel}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.bullets.map((bullet, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '0.5rem' }} />
                    <span>{renderBoldMarkup(bullet)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Technology tags */}
          {project.technologies.length > 0 && (
            <div>
              <p className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                Technologies
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.technologies.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">View Live ↗</a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">View on GitHub ↗</a>
            )}
          </div>
        </div>
      </div>

      {/* Image lightbox */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(22,18,26,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setLightboxSrc(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '0.3rem' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.8"/>
                  <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </button>
            </div>
            <img src={lightboxSrc} alt="" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 4, display: 'block' }} />
          </div>
        </div>
      )}
    </article>
  );
}
