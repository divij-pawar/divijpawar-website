// Vercel serverless function — lives at /api/spotify automatically.
// Delete this file (and keep only netlify/functions/spotify.js) if you're
// deploying to Netlify instead.

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

async function getAccessToken(): Promise<string> {
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN as string,
    }),
  });
  if (!res.ok) throw new Error('Failed to refresh Spotify token');
  const data = await res.json();
  return data.access_token as string;
}

export default async function handler(_req: any, res: any) {
  try {
    const token = await getAccessToken();

    const r = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await r.json();
    const item = data?.items?.[0]?.track;

    if (!item) {
      return res.status(200).json({ title: null });
    }

    return res.status(200).json({
      title: item.name,
      artist: item.artists.map((a: any) => a.name).join(', '),
      albumArt: item.album?.images?.[0]?.url,
      songUrl: item.external_urls?.spotify,
      playedAt: data.items[0].played_at,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Spotify fetch failed' });
  }
}
