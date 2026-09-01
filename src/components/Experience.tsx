import { experience } from '../data/portfolioData';
import { renderBoldMarkup } from '../utils';
import { Reveal } from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">03 — Experience</p>
          <h2 className="heading">Professional History</h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experience.map((e, i) => (
            <Reveal key={e.id} delay={i * 80}>
              <div style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: '2.5rem',
                padding: '2rem 0', borderBottom: '1px solid var(--border)',
              }}>
                {/* Left */}
                <div>
                  <p className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: 'var(--muted)', lineHeight: 1.6 }}>
                    {e.startDate} – {e.endDate}
                  </p>
                  <p className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: 2, letterSpacing: '0.04em' }}>
                    {e.location}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.3rem', letterSpacing: '0.03em', marginBottom: '0.2rem' }}>{e.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.6rem' }}>{e.company}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem', paddingLeft: '0.75rem', borderLeft: '2px solid var(--border)' }}>
                    {e.context}
                  </p>

                  {/* Impact chips */}
                  {e.impact && e.impact.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.1rem' }}>
                      {e.impact.map(stat => (
                        <div key={stat.label} style={{ background: 'var(--accent-bg)', border: '1px solid var(--border)', borderRadius: 4, padding: '0.4rem 0.8rem' }}>
                          <span className="font-display" style={{ display: 'block', fontSize: '1.05rem', color: 'var(--accent)', lineHeight: 1.1 }}>{stat.value}</span>
                          <span className="font-mono" style={{ display: 'block', fontSize: '0.56rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Grouped bullets */}
                  {e.groups.map(group => (
                    <div key={group.groupLabel} style={{ marginBottom: '1rem' }}>
                      <p className="font-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                        {group.groupLabel}
                      </p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {group.bullets.map((bullet, bi) => (
                          <li key={bi} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                            <span style={{ flexShrink: 0, color: 'var(--muted)', fontFamily: 'monospace', fontSize: '0.8rem', marginTop: '0.12rem' }}>—</span>
                            <span>{renderBoldMarkup(bullet)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.6rem' }}>
                    {e.technologies.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #experience .max-w-6xl div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
