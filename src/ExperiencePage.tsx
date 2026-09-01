import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { experience } from '../data/portfolioData';
import { renderBoldMarkup, getExperienceSlug } from '../utils';

export default function ExperiencePage() {
  const { slug } = useParams<{ slug: string }>();
  const exp = experience.find(e => getExperienceSlug(e) === slug);

  useEffect(() => {
    document.title = exp ? `${exp.title} at ${exp.company} — Divij Pawar` : 'Experience not found — Divij Pawar';
  }, [exp]);

  if (!exp) {
    return (
      <div className="max-w-6xl mx-auto px-6" style={{ padding: '9rem 1.5rem', textAlign: 'center' }}>
        <p className="label" style={{ display: 'inline-block' }}>Not found</p>
        <h2 className="heading">This role doesn't exist</h2>
        <Link to="/#experience" className="btn-primary">Back to experience</Link>
      </div>
    );
  }

  return (
    <article className="section-pad" style={{ minHeight: '70vh' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/#experience" className="btn-ghost" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          ← All Experience
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="font-mono" style={{ fontSize: '0.75rem', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '0.6rem' }}>
            {exp.startDate} – {exp.endDate} · {exp.location}
          </p>
          <h1 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '0.4rem' }}>{exp.title}</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--accent)', fontWeight: 500 }}>{exp.company}</p>
        </div>

        <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.8, fontSize: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--border)' }}>
            {exp.context}
          </p>

          {/* IMPACT */}
          {exp.impact && exp.impact.length > 0 && (
            <div>
              <p className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem' }}>
                Impact
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
                {exp.impact.map(stat => (
                  <div key={stat.label} style={{ background: 'var(--accent-bg)', border: '1px solid var(--border)', borderRadius: 4, padding: '0.6rem 1rem' }}>
                    <span className="font-display" style={{ display: 'block', fontSize: '1.3rem', color: 'var(--accent)', lineHeight: 1.1 }}>{stat.value}</span>
                    <span className="font-mono" style={{ display: 'block', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grouped bullets */}
          {exp.groups.map(group => (
            <div key={group.groupLabel}>
              <p className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                {group.groupLabel}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.bullets.map((bullet, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    <span style={{ flexShrink: 0, color: 'var(--muted)', fontFamily: 'monospace', fontSize: '0.85rem', marginTop: '0.15rem' }}>—</span>
                    <span>{renderBoldMarkup(bullet)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Technology tags */}
          {exp.technologies.length > 0 && (
            <div>
              <p className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                Technologies
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.technologies.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}