import { Box, VStack, HStack, Text, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { SITE_URL } from "@/lib/constants";
import NextLink from "next/link";

const BLOG_POSTS = [
  {
    slug: "como-emagrecer-de-forma-saudavel",
    title: "Como Emagrecer de Forma Saudável: Guia Completo da Nutricionista",
    excerpt: "Descubra como perder peso de forma sustentável, sem dietas restritivas. Dicas práticas de uma nutricionista clínica para emagrecimento real.",
    date: "2026-03-09",
    readTime: "8 min",
  },
  {
    slug: "alimentacao-para-diabetes-tipo-2",
    title: "Alimentação para Diabetes Tipo 2: O Que Comer e O Que Evitar",
    excerpt: "Guia completo sobre alimentação para diabéticos tipo 2. Aprenda quais alimentos ajudam a controlar a glicemia e quais devem ser evitados.",
    date: "2026-03-09",
    readTime: "10 min",
  },
  {
    slug: "nutricao-saude-feminina",
    title: "Nutrição e Saúde Feminina: Como a Alimentação Afeta Seus Hormônios",
    excerpt: "Entenda como a alimentação influencia o ciclo menstrual, SOP, TPM e menopausa. Dicas de nutrição para cada fase da vida da mulher.",
    date: "2026-03-09",
    readTime: "9 min",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog da Nutricionista Ludiana Campos",
  description: "Artigos sobre nutrição, emagrecimento, diabetes e saúde feminina por Ludiana Campos, nutricionista clínica em Chapecó SC.",
  url: `${SITE_URL}/blog`,
  author: {
    "@type": "Person",
    name: "Ludiana Campos",
    jobTitle: "Nutricionista Clínica",
    url: SITE_URL,
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    author: { "@type": "Person", name: "Ludiana Campos" },
  })),
};

export default function Blog() {
  return (
    <PageLayout>
      <SEO
        title="Blog de Nutrição – Ludiana Campos | Dicas de Emagrecimento, Diabetes e Saúde"
        description="Artigos sobre nutrição, emagrecimento saudável, controle de diabetes e saúde feminina. Conteúdo confiável por nutricionista clínica CRN 10 9645."
        keywords="blog nutrição, dicas nutricionista, artigos emagrecimento, alimentação diabetes, nutrição feminina, blog nutricionista chapecó, dicas alimentação saudável"
        canonical={`${SITE_URL}/blog`}
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <Text>Blog</Text>
      </HStack>

      <VStack gap="4" mb="10">
        <Text as="h1" fontFamily="Poppins" fontSize={{ base: "30px", md: "42px" }} fontWeight="700" color="cyan.900" textAlign="center">
          Blog de Nutrição
        </Text>
        <Text fontFamily="Poppins" fontSize="17px" color="#5C637C" textAlign="center" maxW="600px">
          Artigos com informações confiáveis sobre nutrição, emagrecimento, diabetes e saúde feminina.
          Conteúdo escrito por nutricionista clínica.
        </Text>
        <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
      </VStack>

      <VStack gap="6" align="stretch">
        {BLOG_POSTS.map((post) => (
          <NextLink href={`/blog/${post.slug}`} key={post.slug} passHref legacyBehavior>
            <Link _hover={{ textDecoration: "none" }}>
              <Box
                p="6"
                borderRadius="xl"
                bg="white"
                borderWidth="1px"
                borderColor="gray.100"
                boxShadow="0 2px 12px rgba(147, 178, 189, 0.12)"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-3px)", boxShadow: "0 6px 24px rgba(147, 178, 189, 0.25)" }}
              >
                <Text as="h2" fontFamily="Poppins" fontSize={{ base: "18px", md: "22px" }} fontWeight="600" color="cyan.900" mb="2">
                  {post.title}
                </Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7" mb="3">
                  {post.excerpt}
                </Text>
                <HStack gap="4" fontSize="xs" color="gray.500">
                  <HStack gap="1">
                    <FaCalendarAlt />
                    <Text>{new Date(post.date).toLocaleDateString("pt-BR")}</Text>
                  </HStack>
                  <HStack gap="1">
                    <FaClock />
                    <Text>{post.readTime} de leitura</Text>
                  </HStack>
                </HStack>
              </Box>
            </Link>
          </NextLink>
        ))}
      </VStack>
    </PageLayout>
  );
}
