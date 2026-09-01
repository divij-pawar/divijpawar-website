// Vercel serverless function. Runs server-side so it can fetch Substack's RSS
// feed without hitting the CORS wall a browser would (Substack doesn't send
// Access-Control-Allow-Origin on /feed).
const FEED_URL = 'https://divijpawar.substack.com/feed';
const MAX_POSTS = 6;
const EXCERPT_LENGTH = 220;

function extractTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  if (!match) return '';
  const raw = match[1];
  const cdata = raw.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return (cdata ? cdata[1] : raw).trim();
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export default async function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  try {
    const response = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBlogFetcher/1.0)' },
    });
    if (!response.ok) throw new Error(`Feed responded with ${response.status}`);
    const xml = await response.text();

    const posts = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, MAX_POSTS)
      .map(([, block]) => {
        const excerpt = stripHtml(extractTag(block, 'description')).slice(0, EXCERPT_LENGTH).trim();
        const pubDate = extractTag(block, 'pubDate');
        return {
          title: extractTag(block, 'title'),
          link: extractTag(block, 'link'),
          date: pubDate ? new Date(pubDate).toISOString() : '',
          excerpt: excerpt.length === EXCERPT_LENGTH ? `${excerpt}…` : excerpt,
        };
      });

    res.status(200).json({ posts });
  } catch {
    res.status(502).json({ posts: [], error: 'Could not load Substack feed' });
  }
}
