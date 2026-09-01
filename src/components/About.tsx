import { personalInfo } from '../data/portfolioData';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">01 — About</p>
          <h2 className="heading">Engineer. Builder. Systems Thinker.</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(200px,22%,260px) 1fr', gap: '3.5rem', alignItems: 'start' }}>
          {/* Photo */}
          <Reveal delay={80}>
            <img
              src={personalInfo.photo}
              alt="Divij Pawar"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 4, border: '1.5px solid var(--border)' }}
            />
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal delay={120}>
              <p style={{ color: 'var(--muted)', marginBottom: '0.9rem', lineHeight: 1.8, fontSize: '0.97rem' }}>
                I'm a <strong style={{ color: 'var(--text)' }}>software engineer with an MS in Computer Science from UMass Lowell</strong>,
                and a background in Electronics & Telecommunication Engineering from the University of Mumbai. My work centers on
                distributed systems, data infrastructure, and increasingly, agentic AI.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.97rem' }}>
                I like systems that hold up under real load — re-architecting a monolithic risk engine into
                six microservices serving hundreds of live trading clients, or building autonomous pipelines
                that run unattended for months. I've published research on
                {' '}<strong style={{ color: 'var(--text)' }}>Generative Adversarial Networks</strong> in IJARESM.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          #about .max-w-6xl > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
