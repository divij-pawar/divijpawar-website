import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { BlogPost } from '../types';
import { Reveal } from './Reveal';

type FetchState = 'loading' | 'ready' | 'error';

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent?.trim() ?? '';
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [state, setState] = useState<FetchState>('loading');

  useEffect(() => {
    let cancelled = false;

    // Substack's RSS feed doesn't allow direct browser fetches (no CORS
    // headers), so this routes through rss2json's free proxy — works on any
    // static host, no backend required.
    const feedUrl = `${personalInfo.substack}/feed`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    fetch(apiUrl)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        if (data.status !== 'ok' || !Array.isArray(data.items) || data.items.length === 0) {
          setState('error');
          return;
        }
        const parsed: BlogPost[] = data.items.map((item: Record<string, string>) => ({
          title: item.title,
          link: item.link,
          date: item.pubDate,
          excerpt: truncate(stripHtml(item.description || ''), 140),
          image: item.thumbnail || undefined,
        }));
        setPosts(parsed);
        setState('ready');
      })
      .catch(() => {
        if (!cancelled) setState('error');
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <section id="blog" className="section-pad section-alt" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="label">03.6 — Blog</p>
              <h2 className="heading" style={{ marginBottom: 0 }}>Writing</h2>
            </div>
            <a href={personalInfo.substack} target="_blank" rel="noreferrer" className="btn-ghost">
              View all on Substack ↗
            </a>
          </div>
        </Reveal>

        {state === 'loading' && (
          <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Loading latest posts…</p>
        )}

        {state === 'error' && (
          <div style={{ border: '1.5px dashed var(--border)', borderRadius: 4, padding: '2.5rem 2rem', textAlign: 'center' }}>
            <p className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '1rem' }}>
              Couldn't load the latest posts right now.
            </p>
            <a href={personalInfo.substack} target="_blank" rel="noreferrer" className="btn-primary">
              Read on Substack ↗
            </a>
          </div>
        )}

        {state === 'ready' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.4rem' }}>
            {posts.map((post, i) => (
              <Reveal key={post.link} delay={i * 60}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', overflow: 'hidden' }}
                >
                  {post.image && (
                    <div className="gallery-tile" style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg)' }}>
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s ease' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '1.4rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {post.date && (
                      <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.6rem' }}>
                        {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </p>
                    )}
                    <h3 className="font-display" style={{ fontSize: '1.1rem', lineHeight: 1.25, marginBottom: '0.6rem', color: 'var(--text)' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0.9rem', flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                      Read on Substack →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
