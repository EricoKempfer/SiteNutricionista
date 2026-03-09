import { Box, VStack, HStack, Text, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { SITE_URL } from "@/lib/constants";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Nutrição e Saúde Feminina: Como a Alimentação Afeta Seus Hormônios",
  description: "Entenda como a alimentação influencia o ciclo menstrual, SOP, TPM e menopausa. Dicas de nutrição para cada fase da vida da mulher.",
  url: `${SITE_URL}/blog/nutricao-saude-feminina`,
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  author: { "@type": "Person", name: "Ludiana Campos", jobTitle: "Nutricionista Clínica – CRN 10 9645", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Nutricionista Ludiana Campos", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/nutricao-saude-feminina` },
};

export default function NutricaoSaudeFeminina() {
  return (
    <PageLayout>
      <SEO
        title="Nutrição e Saúde Feminina: Como a Alimentação Afeta Seus Hormônios | Nutricionista Ludiana Campos"
        description="Entenda como a alimentação influencia o ciclo menstrual, SOP, TPM e menopausa. Dicas de nutricionista para equilibrar hormônios através da dieta."
        keywords="nutrição saúde feminina, alimentação e hormônios, dieta sop, alimentação tpm, nutrição menopausa, alimentos equilibrar hormônios, nutricionista mulher, ciclo menstrual alimentação, endometriose dieta"
        canonical={`${SITE_URL}/blog/nutricao-saude-feminina`}
        ogType="article"
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <NextLink href="/blog" passHref legacyBehavior><Link color="#93B2BD">Blog</Link></NextLink>
        <Text>/</Text>
        <Text>Nutrição e Saúde Feminina</Text>
      </HStack>

      <Box as="article">
        <VStack gap="2" mb="8">
          <Text as="h1" fontFamily="Poppins" fontSize={{ base: "26px", md: "36px" }} fontWeight="700" color="cyan.900" lineHeight="1.2" textAlign="center">
            Nutrição e Saúde Feminina: Como a Alimentação Afeta Seus Hormônios
          </Text>
          <HStack gap="4" fontSize="sm" color="gray.500" mt="2">
            <HStack gap="1"><FaCalendarAlt /><Text>09/03/2026</Text></HStack>
            <HStack gap="1"><FaClock /><Text>9 min de leitura</Text></HStack>
          </HStack>
          <Text fontFamily="Poppins" fontSize="14px" color="#93B2BD" fontWeight="500">
            Por Ludiana Campos – Nutricionista Clínica CRN 10 9645
          </Text>
        </VStack>

        <VStack gap="6" align="start">
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            A relação entre alimentação e hormônios femininos vai muito além do que a maioria das pessoas imagina.
            O que você come influencia diretamente o estrogênio, a progesterona, a testosterona, a insulina e a tireoide.
            Neste artigo, vou explicar como a nutrição pode ser sua maior aliada em cada fase da vida.
          </Text>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Alimentação e o ciclo menstrual
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8" mb="3">
              O ciclo menstrual tem quatro fases, e as necessidades nutricionais mudam em cada uma delas:
            </Text>
            <VStack align="start" gap="3">
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Fase Menstrual (dia 1-5)</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Priorize alimentos ricos em ferro (carnes vermelhas magras, feijão, folhas verde-escuras) para
                  repor o que se perde na menstruação. Alimentos anti-inflamatórios como peixes ricos em ômega-3
                  ajudam a reduzir as cólicas.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Fase Folicular (dia 6-13)</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  O estrogênio está subindo e a energia aumenta. É o momento ideal para aumentar levemente a ingestão
                  calórica, consumir carboidratos complexos e investir em alimentos que apoiam o estrogênio: sementes
                  de linhaça, soja fermentada, brócolis.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Fase Ovulatória (dia 14-16)</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  O pico de energia e disposição pede alimentos leves e nutritivos. Fibras, vegetais crucíferos
                  (brócolis, couve-flor) e alimentos ricos em zinco ajudam o corpo a metabolizar o excesso de estrogênio.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Fase Lútea (dia 17-28) — A fase da TPM</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  É quando surgem inchaço, irritabilidade e vontade de doces. Aumente o magnésio (chocolate amargo,
                  castanhas, banana), consumo de vitamina B6 (frango, salmão, batata) e mantenha carboidratos
                  complexos para estabilizar o humor. Reduzir sal e cafeína ajuda com o inchaço.
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Nutrição e SOP (Síndrome dos Ovários Policísticos)
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              A SOP está ligada à resistência insulínica em até 70% dos casos. Isso significa que o corpo produz
              insulina em excesso, o que aumenta a testosterona e causa os sintomas: acne, queda de cabelo,
              dificuldade para emagrecer, ciclos irregulares.
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8" mt="2">
              A nutrição para SOP foca em:
            </Text>
            <VStack align="start" gap="1" mt="2" pl="4">
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">• Controlar a insulina com baixo índice glicêmico</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">• Incluir proteínas e gorduras boas em todas as refeições</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">• Reduzir açúcar e carboidratos refinados</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">• Aumentar fibras e alimentos anti-inflamatórios</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">• Incluir especiarias como canela e cúrcuma</Text>
            </VStack>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Nutrição na menopausa
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              Com a queda do estrogênio na menopausa, o corpo feminino passa por mudanças importantes: tendência a
              ganhar gordura abdominal, perda de massa óssea, ressecamento da pele e mucosas, ondas de calor.
              A nutrição pode amenizar todos esses sintomas.
            </Text>
            <VStack align="start" gap="1" mt="3" pl="4">
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>Cálcio e Vitamina D:</strong> essenciais para a saúde óssea. Leite, iogurte, sardinha, exposição solar.</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>Fitoestrógenos:</strong> presentes na soja, linhaça e grão-de-bico. Podem ajudar a reduzir ondas de calor.</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>Ômega-3:</strong> sardinha, salmão, chia. Protege o coração e reduz inflamação.</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>Proteínas:</strong> fundamentais para preservar a massa muscular, que tende a diminuir nessa fase.</Text>
            </VStack>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Nutrientes-chave para a saúde feminina
            </Text>
            <VStack align="start" gap="2">
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                <strong>Ferro:</strong> mulheres em idade fértil perdem ferro na menstruação. Fontes: carnes, feijão, folhas verdes.
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                <strong>Magnésio:</strong> reduz TPM, cólicas e ansiedade. Fontes: castanhas, chocolate amargo, sementes.
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                <strong>Ômega-3:</strong> anti-inflamatório. Fontes: peixes gordos, linhaça, chia.
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                <strong>Vitamina D:</strong> regula hormônios e imunidade. Fonte: exposição solar, suplementação quando necessário.
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                <strong>Ácido Fólico:</strong> essencial na gestação. Fontes: folhas verdes, feijão, lentilha.
              </Text>
            </VStack>
          </Box>

          <Box bg="#E9EEF2" p="6" borderRadius="xl" w="100%">
            <Text fontFamily="Poppins" fontSize="16px" color="cyan.900" fontWeight="600" mb="2">
              Cada mulher é única
            </Text>
            <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
              As informações deste artigo são educativas. Cada mulher tem necessidades específicas que dependem
              da idade, fase da vida, condições de saúde e objetivos. O acompanhamento com um nutricionista
              permite uma avaliação completa e um plano alimentar verdadeiramente personalizado para você.
            </Text>
          </Box>

          <Box mt="4">
            <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900" mb="2">
              Leia também:
            </Text>
            <VStack align="start" gap="1">
              <NextLink href="/saude-feminina-chapeco" passHref legacyBehavior>
                <Link color="#93B2BD" fontSize="15px">→ Nutrição para Saúde Feminina em Chapecó</Link>
              </NextLink>
              <NextLink href="/blog/como-emagrecer-de-forma-saudavel" passHref legacyBehavior>
                <Link color="#93B2BD" fontSize="15px">→ Como Emagrecer de Forma Saudável</Link>
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
