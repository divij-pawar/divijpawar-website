import { Link } from 'react-router-dom';
import { experience } from '../data/portfolioData';
import { renderBoldMarkup, getExperienceSlug } from '../utils';
import { Reveal } from './Reveal';

/* Same palette-cycling approach as Projects, offset by one hue so the two
   gallery sections don't feel like copies of each other. */
const ACCENT_COLORS = ['var(--blueberry-ink)','var(--rose-ink)','var(--lemon-ink)','var(--lilac-ink)'];
const ACCENT_BGS    = ['var(--blueberry-soft)','var(--rose-soft)','var(--lemon-soft)','var(--lilac-soft)'];

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">03 — Experience</p>
          <h2 className="heading">Professional History</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.4rem' }}>
          {experience.map((e, i) => {
            const ac = ACCENT_COLORS[i % ACCENT_COLORS.length];
            const bg = ACCENT_BGS[i % ACCENT_BGS.length];
            const previewBullets = e.groups.flatMap(g => g.bullets).slice(0, 2);
            const previewImpact = e.impact?.slice(0, 3);

            return (
              <Reveal key={e.id} delay={i * 65}>
                <Link
                  to={`/experience/${getExperienceSlug(e)}`}
                  className="card"
                  style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: 3, background: ac }} />

                  <div style={{ padding: '1.2rem 1.3rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                      {e.startDate} – {e.endDate} · {e.location}
                    </p>

                    <h3 className="font-display" style={{ fontSize: '1.15rem', lineHeight: 1.2, marginBottom: '0.3rem' }}>{e.title}</h3>
                    <p style={{ fontSize: '0.86rem', color: ac, fontWeight: 500, marginBottom: '0.7rem' }}>{e.company}</p>

                    <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{e.context}</p>

                    {/* IMPACT preview */}
                    {previewImpact && previewImpact.length > 0 && (
                      <div style={{ marginBottom: '1rem' }}>
                        <p className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: ac, marginBottom: '0.5rem' }}>
                          Impact
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {previewImpact.map(stat => (
                            <div key={stat.label} style={{ background: bg, border: '1px solid var(--border)', borderRadius: 4, padding: '0.35rem 0.7rem' }}>
                              <span className="font-display" style={{ display: 'block', fontSize: '0.95rem', color: ac, lineHeight: 1.1 }}>{stat.value}</span>
                              <span className="font-mono" style={{ display: 'block', fontSize: '0.52rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Preview bullets */}
                    <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
                      {previewBullets.map((b, bi) => (
                        <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: ac, flexShrink: 0, marginTop: '0.38rem' }} />
                          <span>{renderBoldMarkup(b)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                      <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)' }}>
                        {e.technologies.length} technologies
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: ac, textTransform: 'uppercase' }}>
                        Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
