export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <url>
    <loc>https://nutricionista-ludiana-campos.vercel.app</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://nutricionista-ludiana-campos.vercel.app/BannerNutricionista.jpg</image:loc>
      <image:title>Nutricionista Ludiana Campos</image:title>
      <image:caption>Nutricionista clínica especializada em emagrecimento, diabetes e saúde feminina</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://nutricionista-ludiana-campos.vercel.app/logonutr.jpg</image:loc>
      <image:title>Logo Nutricionista Ludiana Campos</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nutricionista-ludiana-campos.vercel.app/nutriciSobreMim3.jpg</image:loc>
      <image:title>Ludiana Campos - Sobre Mim</image:title>
    </image:image>
  </url>

</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
