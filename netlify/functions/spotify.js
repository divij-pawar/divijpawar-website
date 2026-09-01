// Netlify function — reachable at /.netlify/functions/spotify, which the
// /api/spotify redirect rule in public/_redirects maps to /api/spotify so
// the frontend code doesn't need to know which host it's on.
// Delete this file (and keep only api/spotify.ts) if you're deploying to
// Vercel instead.

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

async function getAccessToken() {
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
  if (!res.ok) throw new Error('Failed to refresh Spotify token');
  const data = await res.json();
  return data.access_token;
}

exports.handler = async function () {
  try {
    const token = await getAccessToken();

    const r = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await r.json();
    const item = data?.items?.[0]?.track;

    if (!item) {
      return { statusCode: 200, body: JSON.stringify({ title: null }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        title: item.name,
        artist: item.artists.map(a => a.name).join(', '),
        albumArt: item.album?.images?.[0]?.url,
        songUrl: item.external_urls?.spotify,
        playedAt: data.items[0].played_at,
      }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Spotify fetch failed' }) };
  }
};
