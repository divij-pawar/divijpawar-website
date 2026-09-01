import { useState } from 'react';
import { Project } from '../types';
import { renderBoldMarkup } from '../utils';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>

          {/* Header */}
          <div style={{ padding: '1.6rem 1.8rem 1.2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>{project.category}</span>
              <h3 className="font-display" style={{ fontSize: '1.6rem', lineHeight: 1.1 }}>{project.title}</h3>
              <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.4rem', letterSpacing: '0.04em' }}>{project.subtitle}</p>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', flexShrink: 0, padding: '0.2rem' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8"/>
                <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.8"/>
              </svg>
            </button>
          </div>

          {/* Image gallery strip */}
          {hasImages && (
            <div style={{ padding: '1.2rem 1.8rem 0' }}>
              <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                Photos
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: project.images!.length === 1 ? '1fr' : project.images!.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
                gap: '0.5rem',
              }}>
                {project.images!.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxSrc(src)}
                    style={{ borderRadius: 3, overflow: 'hidden', border: '1px solid var(--border)', cursor: 'zoom-in', aspectRatio: '4/3' }}
                    className="gallery-tile"
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
          <div style={{ padding: '1.4rem 1.8rem 1.8rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.93rem' }}>{project.context}</p>

            {/* Impact chips */}
            {project.impact && project.impact.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {project.impact.map(stat => (
                  <div key={stat.label} style={{ background: 'var(--accent-bg)', border: '1px solid var(--border)', borderRadius: 4, padding: '0.5rem 0.9rem' }}>
                    <span className="font-display" style={{ display: 'block', fontSize: '1.15rem', color: 'var(--accent)', lineHeight: 1.1 }}>{stat.value}</span>
                    <span className="font-mono" style={{ display: 'block', fontSize: '0.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Grouped bullets */}
            {project.groups.map(group => (
              <div key={group.groupLabel}>
                <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  {group.groupLabel}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {group.bullets.map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '0.42rem' }} />
                      <span>{renderBoldMarkup(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Technology tags */}
            {project.technologies.length > 0 && (
              <div>
                <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  Technologies
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  View Live ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
                  View on GitHub ↗
                </a>
              )}
            </div>
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
    </>
  );
}
