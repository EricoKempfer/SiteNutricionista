const SITE_URL = "https://nutriludiana.com.br";

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const lastmod = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SITE_URL}/BannerNutricionista.jpg</image:loc>
      <image:title>Nutricionista Ludiana Campos em Chapecó SC - Banner Principal</image:title>
      <image:caption>Nutricionista clínica especializada em emagrecimento saudável, controle de diabetes e saúde feminina em Chapecó, Santa Catarina</image:caption>
      <image:geo_location>Chapecó, Santa Catarina, Brasil</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/logonutr.jpg</image:loc>
      <image:title>Logo Nutricionista Ludiana Campos - CRN 10 9645</image:title>
      <image:caption>Logotipo oficial da nutricionista Ludiana Campos em Chapecó SC</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/nutriciSobreMim3.jpg</image:loc>
      <image:title>Ludiana Campos - Nutricionista Clínica em Chapecó SC</image:title>
      <image:caption>Ludiana Campos, nutricionista clínica CRN 10 9645, especialista em emagrecimento, diabetes e saúde feminina em Chapecó</image:caption>
      <image:geo_location>Chapecó, Santa Catarina, Brasil</image:geo_location>
    </image:image>
  </url>

</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
