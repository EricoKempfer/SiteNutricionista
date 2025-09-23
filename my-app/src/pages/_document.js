import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Charset básico */}
        <meta charSet="utf-8" />
        
        {/* Meta tags para SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Preconnect para fontes e recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-92GX47LHHY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-92GX47LHHY');
            `,
          }}
        />
        
        {/* Schema.org JSON-LD para dados estruturados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NutritionPractitioner",
              "name": "Ludiana Campos",
              "alternateName": "Nutricionista Ludiana Campos",
              "description": "Nutricionista clínica especializada em emagrecimento saudável, diabetes e saúde feminina em Chapecó, Santa Catarina.",
              "url": "https://nutricionista-ludiana-campos.vercel.app",
              "telephone": "+55-49-99823-5398",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chapecó",
                "addressRegion": "Santa Catarina",
                "addressCountry": "Brasil"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-27.101715",
                "longitude": "-52.617517"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Chapecó, Santa Catarina"
              },
              "serviceType": [
                "Nutrição Clínica",
                "Emagrecimento Saudável",
                "Controle de Diabetes",
                "Saúde Feminina",
                "Saúde Gastrointestinal"
              ],
              "image": "/logonutr.jpg",
              "priceRange": "$$",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "CRN 10 9645"
              },
              "sameAs": [
                "https://www.instagram.com/nutriludiana",
                "https://www.facebook.com/share/1GRdgdEPzt/",
                "https://wa.me/5549998235398"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}