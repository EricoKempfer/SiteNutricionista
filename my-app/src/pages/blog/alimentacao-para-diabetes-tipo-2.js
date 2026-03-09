import { Box, VStack, HStack, Text, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { SITE_URL } from "@/lib/constants";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Alimentação para Diabetes Tipo 2: O Que Comer e O Que Evitar",
  description: "Guia completo sobre alimentação para diabetes tipo 2. Quais alimentos controlar a glicemia e quais evitar. Dicas de nutricionista clínica.",
  url: `${SITE_URL}/blog/alimentacao-para-diabetes-tipo-2`,
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  author: { "@type": "Person", name: "Ludiana Campos", jobTitle: "Nutricionista Clínica – CRN 10 9645", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Nutricionista Ludiana Campos", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/alimentacao-para-diabetes-tipo-2` },
};

export default function AlimentacaoDiabetes() {
  return (
    <PageLayout>
      <SEO
        title="Alimentação para Diabetes Tipo 2: O Que Comer e Evitar | Nutricionista Ludiana Campos"
        description="Guia completo de alimentação para diabetes tipo 2. Saiba quais alimentos ajudam a controlar a glicemia, o que evitar e como montar seu prato. Por nutricionista CRN 10 9645."
        keywords="alimentação diabetes tipo 2, o que comer diabetes, dieta para diabético, alimentos para controlar glicemia, alimentos proibidos diabetes, cardápio diabético, nutrição diabetes, índice glicêmico alimentos"
        canonical={`${SITE_URL}/blog/alimentacao-para-diabetes-tipo-2`}
        ogType="article"
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <NextLink href="/blog" passHref legacyBehavior><Link color="#93B2BD">Blog</Link></NextLink>
        <Text>/</Text>
        <Text>Alimentação e Diabetes</Text>
      </HStack>

      <Box as="article">
        <VStack gap="2" mb="8">
          <Text as="h1" fontFamily="Poppins" fontSize={{ base: "26px", md: "36px" }} fontWeight="700" color="cyan.900" lineHeight="1.2" textAlign="center">
            Alimentação para Diabetes Tipo 2: O Que Comer e O Que Evitar
          </Text>
          <HStack gap="4" fontSize="sm" color="gray.500" mt="2">
            <HStack gap="1"><FaCalendarAlt /><Text>09/03/2026</Text></HStack>
            <HStack gap="1"><FaClock /><Text>10 min de leitura</Text></HStack>
          </HStack>
          <Text fontFamily="Poppins" fontSize="14px" color="#93B2BD" fontWeight="500">
            Por Ludiana Campos – Nutricionista Clínica CRN 10 9645
          </Text>
        </VStack>

        <VStack gap="6" align="start">
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            O diabetes tipo 2 é uma condição que afeta milhões de brasileiros e está diretamente ligada à alimentação.
            A boa notícia é que, com as escolhas alimentares certas, é possível controlar a glicemia, reduzir a
            hemoglobina glicada e ter uma vida completamente normal. Neste artigo, vou explicar de forma clara e
            prática o que comer e o que evitar.
          </Text>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Entendendo o índice glicêmico
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              O índice glicêmico (IG) mede a velocidade com que um alimento eleva o açúcar no sangue. Alimentos de
              alto IG (pão branco, arroz branco, açúcar) elevam a glicemia rapidamente. Alimentos de baixo IG
              (aveia, leguminosas, vegetais) liberam glicose de forma gradual. Para quem tem diabetes tipo 2,
              priorizar alimentos de baixo e médio IG é fundamental para manter a glicemia estável.
            </Text>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Alimentos que ajudam a controlar a glicemia
            </Text>
            <VStack align="start" gap="3">
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Vegetais não-amiláceos</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Brócolis, espinafre, couve, pepino, tomate, abobrinha. Ricos em fibras e nutrientes, baixo impacto
                  na glicemia. Devem ocupar metade do seu prato.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Proteínas magras</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Frango, peixe, ovos, carne magra. As proteínas não elevam a glicemia e aumentam a saciedade.
                  Devem estar presentes em todas as refeições.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Gorduras saudáveis</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Azeite de oliva, abacate, castanhas, sementes. Ajudam a retardar a absorção de carboidratos e
                  melhoram a sensibilidade à insulina.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Fibras</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Aveia, linhaça, chia, feijão, lentilha. As fibras reduzem a velocidade de absorção do açúcar,
                  melhoram o intestino e ajudam no controle do colesterol.
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Alimentos que devem ser limitados
            </Text>
            <VStack align="start" gap="3">
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Açúcar e doces</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Refrigerantes, sucos industrializados, bolos, biscoitos recheados, sorvetes. Elevam a glicemia
                  rapidamente. Devem ser consumidos raramente e em pequenas quantidades.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Carboidratos refinados</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Pão branco, arroz branco, macarrão comum. Prefira as versões integrais — elas têm mais fibras e
                  menor impacto na glicemia.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900">Processados e ultraprocessados</Text>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  Embutidos (salsicha, presunto), salgadinhos, molhos prontos. Além de elevarem a glicemia, são ricos
                  em sódio e gorduras ruins.
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              O método do prato saudável para diabéticos
            </Text>
            <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
              Uma forma prática de montar suas refeições é o método do prato:
            </Text>
            <VStack align="start" gap="1" mt="2" pl="4">
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>Metade do prato:</strong> vegetais e salada (folhas, tomate, pepino, brócolis)</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>1/4 do prato:</strong> proteína (frango, peixe, ovo, carne)</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>1/4 do prato:</strong> carboidrato complexo (arroz integral, batata-doce, mandioca)</Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C"><strong>Tempero:</strong> azeite de oliva extra virgem</Text>
            </VStack>
          </Box>

          <Box>
            <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="600" color="#93b2bd" mb="3">
              Mitos sobre alimentação e diabetes
            </Text>
            <VStack align="start" gap="3">
              <Box>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  <strong>"Diabético não pode comer frutas."</strong> — Mito! Frutas são saudáveis. O segredo é a
                  quantidade e combinação (comer com proteína ou gordura reduz o pico glicêmico).
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  <strong>"Produtos diet sempre são melhores."</strong> — Nem sempre. Muitos produtos diet têm outros
                  ingredientes prejudiciais. Leia os rótulos ou, melhor ainda, prefira alimentos naturais.
                </Text>
              </Box>
              <Box>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                  <strong>"Preciso cortar todos os carboidratos."</strong> — Não! Carboidratos são necessários. O
                  importante é escolher os certos (integrais) e controlar a porção.
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box bg="#E9EEF2" p="6" borderRadius="xl" w="100%">
            <Text fontFamily="Poppins" fontSize="16px" color="cyan.900" fontWeight="600" mb="2">
              Importante
            </Text>
            <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
              Este artigo é informativo e não substitui o acompanhamento profissional. Cada pessoa com diabetes tem
              necessidades específicas. O plano alimentar deve ser personalizado por um nutricionista, em conjunto
              com o médico endocrinologista, considerando seus exames, medicamentos em uso e estilo de vida.
            </Text>
          </Box>

          <Box mt="4">
            <Text fontFamily="Poppins" fontSize="16px" fontWeight="600" color="cyan.900" mb="2">
              Leia também:
            </Text>
            <VStack align="start" gap="1">
              <NextLink href="/diabetes-chapeco" passHref legacyBehavior>
                <Link color="#93B2BD" fontSize="15px">→ Acompanhamento Nutricional para Diabetes em Chapecó</Link>
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
