import Head from "next/head";
import { FAQ_DATA, SITE_URL } from "@/lib/constants";

const SEO = ({
  title = "Nutricionista em Chapecó SC – Ludiana Campos | Emagrecimento, Diabetes e Saúde Feminina",
  description = "Nutricionista clínica em Chapecó, Santa Catarina. Especialista em emagrecimento saudável, controle de diabetes e saúde feminina. CRN 10 9645. Plano alimentar personalizado. Agende sua consulta!",
  keywords = "nutricionista em chapecó, nutricionista chapecó sc, nutricionista para emagrecimento chapecó, nutricionista para diabetes chapecó, nutricionista saúde feminina chapecó, consulta nutricionista chapecó, nutrição clínica chapecó, ludiana campos nutricionista, CRN 10 9645, dieta para emagrecer chapecó, controle diabetes alimentação, plano alimentar personalizado chapecó, acompanhamento nutricional chapecó, nutricionista santa catarina",
  canonical = SITE_URL,
  ogImage = `${SITE_URL}/BannerNutricionista.jpg`,
  ogType = "website",
}) => {
  // Build FAQ schema from single source of truth
  const structuredFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Head>
      {/* Title Tag - Primary keyword first */}
      <title>{title}</title>

      {/* Meta Description - 150-160 chars */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nutricionista Ludiana Campos - Chapecó SC" />
      <meta property="og:site_name" content="Nutricionista Ludiana Campos – Chapecó SC" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Nutricionista Ludiana Campos - Chapecó SC" />

      {/* Author & Classification */}
      <meta name="author" content="Ludiana Campos – Nutricionista CRN 10 9645" />
      <meta name="classification" content="Nutricionista, Saúde, Nutrição Clínica, Chapecó SC" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />

      {/* Google Site Verification */}
      <meta name="google-site-verification" content="vO3xBDukAEKKJtesPCusU52j2v1Mfcwbz_B3m4gFSZ8" />

      {/* Geo Location - Critical for Local SEO */}
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Chapecó, Santa Catarina" />
      <meta name="geo.position" content="-27.101715;-52.617517" />
      <meta name="ICBM" content="-27.101715, -52.617517" />

      {/* Business Location Meta */}
      <meta name="business:contact_data:locality" content="Chapecó" />
      <meta name="business:contact_data:region" content="Santa Catarina" />
      <meta name="business:contact_data:country_name" content="Brasil" />
      <meta name="business:contact_data:phone_number" content="+55-49-99823-5398" />

      {/* Theme Color */}
      <meta name="theme-color" content="#93B2BD" />
      <meta name="msapplication-navbutton-color" content="#93B2BD" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#93B2BD" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Favicon */}
      <link rel="icon" type="image/jpg" href="/logonutr.jpg" />
      <link rel="apple-touch-icon" href="/logonutr.jpg" />

      {/* Preload LCP image (hero banner) */}
      <link
        rel="preload"
        as="image"
        href="/BannerNutricionista.jpg"
        fetchPriority="high"
      />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredFAQ) }}
      />
    </Head>
  );
};

export default SEO;
