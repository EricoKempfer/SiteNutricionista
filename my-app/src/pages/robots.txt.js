export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://nutricionista-ludiana-campos.vercel.app/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Specific directives for search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}
