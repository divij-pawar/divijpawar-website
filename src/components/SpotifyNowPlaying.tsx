import { useEffect, useState } from 'react';

interface SpotifyTrack {
  title: string | null;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/spotify')
      .then(r => r.json())
      .then(json => { if (!cancelled) setTrack(json); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, []);

  // This is a small personal-flare widget, not core content — fail silently
  // rather than showing an error if the endpoint isn't set up yet or Spotify
  // has no listening history to return.
  if (failed || !track || !track.title) return null;

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
        padding: '0.4rem 0.9rem 0.4rem 0.4rem',
        border: '1px solid var(--border)', borderRadius: 4,
        background: 'var(--surface)', textDecoration: 'none',
        maxWidth: '100%',
      }}
    >
      {track.albumArt && (
        <img src={track.albumArt} alt="" style={{ width: 32, height: 32, borderRadius: 3, objectFit: 'cover', flexShrink: 0 }} />
      )}
      <div style={{ minWidth: 0 }}>
        <p className="font-mono" style={{ fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 2 }}>
          Last Played
        </p>
        <p className="font-display" style={{ fontSize: '0.8rem', color: 'var(--text)', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 200 }}>
          {track.title}
        </p>
        <p className="font-mono" style={{ fontSize: '0.63rem', color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 200 }}>
          {track.artist}
        </p>
      </div>
    </a>
  );
}
