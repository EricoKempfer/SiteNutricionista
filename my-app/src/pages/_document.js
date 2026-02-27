import { Html, Head, Main, NextScript } from "next/document";
import { SITE_URL } from "@/lib/constants";

export default function Document() {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head>
        {/* Charset */}
        <meta charSet="utf-8" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* ===== SCHEMA.ORG JSON-LD: LocalBusiness ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#localbusiness`,
              name: "Nutricionista Ludiana Campos",
              alternateName: "Ludiana Campos Nutricionista Clínica",
              description:
                "Nutricionista clínica em Chapecó, Santa Catarina, especializada em emagrecimento saudável, controle de diabetes e saúde feminina. Atendimento personalizado com planos alimentares individualizados. CRN 10 9645.",
              url: SITE_URL,
              telephone: "+5549998235398",
              image: [
                `${SITE_URL}/logonutr.jpg`,
                `${SITE_URL}/BannerNutricionista.jpg`,
                `${SITE_URL}/nutriciSobreMim3.jpg`,
              ],
              logo: `${SITE_URL}/logonutr.jpg`,
              priceRange: "$$",
              currenciesAccepted: "BRL",
              paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chapecó",
                addressLocality: "Chapecó",
                addressRegion: "SC",
                addressCountry: "BR",
                postalCode: "89800-000",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -27.101715,
                longitude: -52.617517,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Chapecó",
                  "@id": "https://www.wikidata.org/wiki/Q170789",
                },
                {
                  "@type": "State",
                  name: "Santa Catarina",
                },
              ],
              serviceType: [
                "Nutrição Clínica",
                "Emagrecimento Saudável",
                "Controle de Diabetes",
                "Saúde Feminina",
                "Saúde Gastrointestinal",
                "Plano Alimentar Personalizado",
                "Avaliação Nutricional",
                "Acompanhamento Nutricional",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Nutrição",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consulta Nutricional para Emagrecimento",
                      description:
                        "Avaliação nutricional completa e plano alimentar personalizado para emagrecimento saudável em Chapecó",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Acompanhamento Nutricional para Diabetes",
                      description:
                        "Tratamento nutricional especializado para controle de diabetes tipo 1 e tipo 2 em Chapecó",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nutrição para Saúde Feminina",
                      description:
                        "Acompanhamento nutricional para SOP, endometriose, TPM, menopausa e gestação em Chapecó",
                    },
                  },
                ],
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/nutriludiana",
                "https://www.facebook.com/share/1GRdgdEPzt/",
                "https://wa.me/5549998235398",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "15",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Simone Pinheiro Soares",
                  },
                  reviewBody:
                    "Maravilhosa, excelente profissional, acolhedora, ética, com uma bagagem teórica e prática impecável, que faz toda a diferença seus manejos clínicos.",
                  datePublished: "2025-01-15",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Camila de Assis Galan",
                  },
                  reviewBody: "Nutri excelente! Super indico!",
                  datePublished: "2024-06-10",
                },
              ],
            }),
          }}
        />

        {/* ===== SCHEMA.ORG JSON-LD: Person (Profissional) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: "Ludiana Campos",
              givenName: "Ludiana",
              familyName: "Campos",
              jobTitle: "Nutricionista Clínica",
              description:
                "Nutricionista clínica em Chapecó, SC, especializada em emagrecimento saudável, controle de diabetes e saúde feminina. CRN 10 9645.",
              url: SITE_URL,
              image: `${SITE_URL}/nutriciSobreMim3.jpg`,
              telephone: "+5549998235398",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chapecó",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Registro Profissional",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Conselho Regional de Nutricionistas - 10ª Região",
                },
                identifier: "CRN 10 9645",
              },
              hasOccupation: {
                "@type": "Occupation",
                name: "Nutricionista",
                occupationLocation: {
                  "@type": "City",
                  name: "Chapecó, Santa Catarina",
                },
              },
              knowsAbout: [
                "Nutrição Clínica",
                "Emagrecimento Saudável",
                "Diabetes",
                "Saúde Feminina",
                "Saúde Gastrointestinal",
                "Plano Alimentar",
                "Avaliação Nutricional",
              ],
              worksFor: {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}/#localbusiness`,
              },
              sameAs: [
                "https://www.instagram.com/nutriludiana",
                "https://www.facebook.com/share/1GRdgdEPzt/",
              ],
            }),
          }}
        />

        {/* ===== SCHEMA.ORG JSON-LD: WebSite ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Nutricionista Ludiana Campos – Chapecó SC",
              description:
                "Site oficial da nutricionista Ludiana Campos em Chapecó, Santa Catarina. Especialista em emagrecimento, diabetes e saúde feminina.",
              publisher: {
                "@type": "Person",
                "@id": `${SITE_URL}/#person`,
              },
              inLanguage: "pt-BR",
            }),
          }}
        />

        {/* ===== SCHEMA.ORG JSON-LD: BreadcrumbList ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Início",
                  item: SITE_URL,
                },
              ],
            }),
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
