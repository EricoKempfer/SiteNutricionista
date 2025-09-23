import Head from 'next/head';

const SEO = ({
  title = "Nutricionista Ludiana Campos - Chapecó SC | Emagrecimento, Diabetes e Saúde Feminina",
  description = "Nutricionista clínica em Chapecó SC especializada em emagrecimento saudável, controle de diabetes e saúde feminina. CRN 10 9645. Agende sua consulta!",
  keywords = "nutricionista chapecó, emagrecimento saudável, diabetes, saúde feminina, nutrição clínica, CRN 10 9645, ludiana campos",
  canonical = "https://nutricionista-ludiana-campos.vercel.app",
  ogImage = "/BannerNutricionista.jpg",
  ogType = "website"
}) => {
  return (
    <Head>
      {/* Title Tag */}
      <title>{title}</title>
      
      {/* Meta Description */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nutricionista Ludiana Campos" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Ludiana Campos" />
      <meta name="classification" content="Nutricionista, Saúde, Alimentação" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Google Site Verification - Adicione seu código aqui */}
      <meta name="google-site-verification" content="vO3xBDukAEKKJtesPCusU52j2v1Mfcwbz_B3m4gFSZ8" />
      
      {/* Geo Location */}
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Chapecó" />
      <meta name="geo.position" content="-27.101715;-52.617517" />
      <meta name="ICBM" content="-27.101715, -52.617517" />
      
      {/* Business Information */}
      <meta name="business:contact_data:locality" content="Chapecó" />
      <meta name="business:contact_data:region" content="Santa Catarina" />
      <meta name="business:contact_data:country_name" content="Brasil" />
      <meta name="business:contact_data:phone_number" content="+55-49-99823-5398" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#93B2BD" />
      <meta name="msapplication-navbutton-color" content="#93B2BD" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#93B2BD" />
      
      {/* Favicon */}
      <link rel="icon" type="image/jpg" href="/logonutr.jpg" />
      <link rel="apple-touch-icon" href="/logonutr.jpg" />
    </Head>
  );
};

export default SEO;
