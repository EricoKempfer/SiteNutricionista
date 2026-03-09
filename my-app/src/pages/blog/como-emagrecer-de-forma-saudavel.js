import { Box, VStack, HStack, Text, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { SITE_URL } from "@/lib/constants";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Como Emagrecer de Forma Saudável: Guia Completo da Nutricionista",
  description: "Guia completo para emagrecer de forma saudável e sustentável. Dicas práticas de nutricionista clínica sobre alimentação, hábitos e plano alimentar.",
  url: `${SITE_URL}/blog/como-emagrecer-de-forma-saudavel`,
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  author: { "@type": "Person", name: "Ludiana Campos", jobTitle: "Nutricionista Clínica – CRN 10 9645", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Nutricionista Ludiana Campos", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/como-emagrecer-de-forma-saudavel` },
};

export default function ComoEmagrecer() {
  return (
    <PageLayout>
      <SEO
        title="Como Emagrecer de Forma Saudável: Guia Completo | Nutricionista Ludiana Campos"
        description="Aprenda como emagrecer de forma saudável e duradoura. Dicas de nutricionista para perder peso sem dietas restritivas. Guia completo com plano alimentar."
        keywords="como emagrecer de forma saudável, emagrecer sem dieta, dicas para perder peso, emagrecimento sustentável, reeducação alimentar, plano alimentar emagrecer, nutricionista emagrecimento"
        canonical={`${SITE_URL}/blog/como-emagrecer-de-forma-saudavel`}
        ogType="article"
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <NextLink href="/blog" passHref legacyBehavior><Link color="#93B2BD">Blog</Link></NextLink>
        <Text>/</Text>
        <Text>Como Emagrecer</Text>
      </HStack>

      <Box as="article">
        <VStack gap="2" mb="8">
          <Text as="h1" fontFamily="Poppins" fontSize={{ base: "26px", md: "36px" }} fontWeight="700" color="cyan.900" lineHeight="1.2" textAlign="center">
            Como Emagrecer de Forma Saudável: Guia Completo da Nutricionista
          </Text>
          <HStack gap="4" fontSize="sm" color="gray.500" mt="2">
            <HStack gap="1"><FaCalendarAlt /><Text>09/03/2026</Text></HStack>
            <HStack gap="1"><FaClock /><Text>8 min de leitura</Text></HStack>
          </HStack>
          <Text fontFamily="Poppins" fontSize="14px" color="#93B2BD" fontWeight="500">
            Por Ludiana Campos – Nutricionista Clínica CRN 10 9645
          </Text>
        </VStack>

        <VStack gap="6" align="start">
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            Emagrecer de forma saudável é o desejo de muitas pessoas, mas a quantidade de informações conflitantes na
            internet pode tornar esse objetivo confuso. Dietas da moda, chás milagrosos, jejuns radicais — nada disso
            funciona a longo prazo. Neste guia, vou compartilhar o que realmente funciona com base na ciência da nutrição
            e na minha experiência clínica.
          </Text>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              1. Entenda o déficit calórico (sem obsessão)
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              Para emagrecer, é preciso gastar mais energia do que se consome. Mas isso não significa comer pouco —
              significa comer de forma inteligente. Um déficit leve de 300 a 500 calorias por dia é suficiente para
              uma perda de 0,5 a 1 kg por semana, sem fome, sem frustração e sem perder massa muscular.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              2. Priorize proteínas em todas as refeições
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              As proteínas são suas melhores aliadas no emagrecimento. Elas aumentam a saciedade (você fica satisfeito
              com menos comida), preservam a massa muscular durante a perda de peso e aceleram o metabolismo. Inclua
              fontes de proteína em todas as refeições: ovos, frango, peixe, carne magra, queijos, leguminosas.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              3. Não elimine carboidratos — escolha os certos
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              Carboidratos não são vilões. Eles são a principal fonte de energia do corpo e do cérebro. O problema
              está no excesso de carboidratos refinados (pão branco, doces, refrigerantes). Prefira carboidratos
              integrais e complexos: arroz integral, batata-doce, aveia, frutas. Eles fornecem energia de forma
              gradual e mantêm a saciedade por mais tempo.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              4. Coma comida de verdade
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              A melhor estratégia para emagrecer é simples: coma comida de verdade. Reduza ultraprocessados (biscoitos
              recheados, salgadinhos, congelados prontos, refrigerantes) e aumente alimentos in natura: frutas,
              legumes, verduras, grãos, carnes, ovos. Quanto mais natural o alimento, melhor para o seu corpo
              e para o emagrecimento.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              5. Hidrate-se adequadamente
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              A água é fundamental no processo de emagrecimento. Muitas vezes confundimos sede com fome. A recomendação
              geral é de 35 ml de água por kg de peso corporal. Uma pessoa de 70 kg deve beber em torno de 2,5 litros
              por dia. Comece o dia com um copo de água e leve uma garrafa para onde for.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              6. Durma bem — o sono emagrece
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              Dormir pouco ou mal aumenta a produção de grelina (hormônio da fome) e reduz a leptina (hormônio da
              saciedade). Resultado: mais fome, mais vontade de doces e menos disposição para se exercitar. Priorize
              7 a 9 horas de sono por noite — é tão importante quanto a alimentação.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              7. Busque acompanhamento profissional
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              Cada pessoa tem necessidades nutricionais diferentes. O que funciona para o seu amigo pode não funcionar
              para você. Um nutricionista avalia seus exames, sua composição corporal, seus hábitos e cria um plano
              alimentar exclusivo. Isso evita deficiências nutricionais, efeito sanfona e frustração.
            </Text>
          </Box>

          <Box bg="#E9EEF2" p="6" borderRadius="xl" w="100%">
            <Text fontFamily="Poppins" fontSize="16px" color="cyan.900" fontWeight="600" mb="2">
              Resumo: 7 pilares do emagrecimento saudável
            </Text>
            <VStack align="start" gap="1">
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ Déficit calórico moderado (sem passar fome)</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ Proteínas em todas as refeições</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ Carboidratos integrais em vez de refinados</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ Alimentos in natura no lugar de ultraprocessados</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ Hidratação adequada (35 ml/kg/dia)</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ 7 a 9 horas de sono por noite</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">✓ Acompanhamento com nutricionista</Text>
            </VStack>
          </Box>

          {/* Related links */}
          <Box mt="4">
            <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900" mb="2">
              Leia também:
            </Text>
            <VStack align="start" gap="1">
              <NextLink href="/emagrecimento-chapeco" passHref legacyBehavior>
                <Link color="#93B2BD" fontSize="15px">→ Programa de Emagrecimento em Chapecó</Link>
              </NextLink>
              <NextLink href="/blog/alimentacao-para-diabetes-tipo-2" passHref legacyBehavior>
                <Link color="#93B2BD" fontSize="15px">→ Alimentação para Diabetes Tipo 2</Link>
              </NextLink>
              <NextLink href="/consulta-online" passHref legacyBehavior>
                <Link color="#93B2BD" fontSize="15px">→ Consulta On-line com Nutricionista</Link>
              </NextLink>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </PageLayout>
  );
}
