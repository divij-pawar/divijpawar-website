import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { renderBoldMarkup } from '../utils';
import ProjectModal from './ProjectModal';
import { Reveal } from './Reveal';

/* Cards cycle the four palette hues. These read as CSS variables so the set
   flips automatically in dark mode: the -ink tokens collapse back to the raw
   pastels there, where they clear 6:1 unaided. */
const ACCENT_COLORS = ['var(--rose-ink)','var(--blueberry-ink)','var(--lilac-ink)','var(--lemon-ink)'];
const ACCENT_BGS    = ['var(--rose-soft)','var(--blueberry-soft)','var(--lilac-soft)','var(--lemon-soft)'];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad section-alt" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">02 — Projects</p>
          <h2 className="heading">Selected Work</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.4rem' }}>
          {projects.map((p, i) => {
            const ac = ACCENT_COLORS[i % ACCENT_COLORS.length];
            const bg = ACCENT_BGS[i % ACCENT_BGS.length];
            const hasImages = p.images && p.images.length > 0;
            const previewBullets = p.groups.flatMap(g => g.bullets).slice(0, 2);
            const footerNote = p.link ? '↗ Live' : p.github ? '↗ GitHub available' : p.status === 'in-progress' ? 'In progress' : '✓ Completed';

            return (
              <Reveal key={p.id} delay={i * 55}>
                <div
                  className="card"
                  style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
                  onClick={() => setActive(p)}
                >
                  {/* Top accent bar */}
                  <div style={{ height: 3, background: ac }} />

                  {/* Image strip */}
                  {hasImages && (
                    <div style={{ display: 'flex', gap: 2, overflow: 'hidden', maxHeight: 160, background: 'var(--bg)' }}>
                      {p.images!.slice(0, 3).map((src, idx) => (
                        <div key={idx} style={{ flex: idx === 0 ? '2 1 0' : '1 1 0', overflow: 'hidden', minWidth: 0 }}>
                          <img
                            src={src}
                            alt={`${p.title} photo ${idx + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s ease' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ padding: '1.2rem 1.3rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Category tag */}
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span className="tag" style={{ background: bg, borderColor: `color-mix(in srgb, ${ac} 35%, transparent)`, color: ac, fontWeight: 500 }}>{p.category}</span>
                    </div>

                    <h3 className="font-display" style={{ fontSize: '1.15rem', lineHeight: 1.15, marginBottom: '0.55rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{p.context}</p>

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
                        {footerNote}
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: ac, textTransform: 'uppercase' }}>
                        Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
