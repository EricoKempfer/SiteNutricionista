export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /
Disallow: /api/

# Sitemap
Sitemap: https://nutricionista-ludiana-campos.vercel.app/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Googlebot-Image
Allow: /

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Yahoo
User-agent: Slurp
Allow: /
Crawl-delay: 2`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}
