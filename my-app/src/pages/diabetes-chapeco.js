import { Box, VStack, HStack, Text, Button, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { WHATSAPP_LINK, SITE_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Nutricionista para Diabetes em Chapecó SC – Ludiana Campos",
  description: "Acompanhamento nutricional especializado para diabetes tipo 1, tipo 2 e gestacional em Chapecó. Controle glicêmico através de alimentação.",
  url: `${SITE_URL}/diabetes-chapeco`,
  mainEntity: {
    "@type": "MedicalCondition",
    name: "Diabetes Mellitus",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Terapia Nutricional para Diabetes",
      description: "Plano alimentar personalizado para controle de glicemia e hemoglobina glicada",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diabetes em Chapecó", item: `${SITE_URL}/diabetes-chapeco` },
    ],
  },
};

export default function DiabetesChapeco() {
  return (
    <PageLayout>
      <SEO
        title="Nutricionista para Diabetes em Chapecó SC – Ludiana Campos | Controle Glicêmico"
        description="Acompanhamento nutricional especializado para diabetes tipo 1, tipo 2 e gestacional em Chapecó, SC. Controle glicêmico e redução de hemoglobina glicada. CRN 10 9645."
        keywords="nutricionista diabetes chapecó, controle diabetes alimentação, nutricionista diabetes tipo 2 chapecó, dieta para diabético chapecó, alimentação diabetes gestacional, hemoglobina glicada, nutricionista controle glicêmico, diabetes santa catarina"
        canonical={`${SITE_URL}/diabetes-chapeco`}
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <Text>Diabetes em Chapecó</Text>
      </HStack>

      <VStack gap="4" textAlign="center" mb="10">
        <Box w="80px" h="80px" borderRadius="50%" bg="white" display="flex" justifyContent="center" alignItems="center" boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)">
          <MdOutlineBloodtype color="#93B2BD" size="3em" />
        </Box>
        <Text as="h1" fontFamily="Poppins" fontSize={{ base: "28px", md: "40px" }} fontWeight="700" color="cyan.900" lineHeight="1.2">
          Nutricionista para Diabetes em Chapecó – SC
        </Text>
        <Text fontFamily="Poppins" fontSize={{ base: "16px", md: "18px" }} color="#5C637C" maxW="700px">
          Acompanhamento nutricional especializado para diabetes tipo 1, tipo 2 e gestacional. Controle sua glicemia através da alimentação.
        </Text>
      </VStack>

      <VStack gap="8" align="start">
        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Por que a nutrição é fundamental no diabetes?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            A alimentação é o pilar central no tratamento do diabetes. Com um plano alimentar adequado, é possível
            controlar os níveis de glicemia, reduzir a hemoglobina glicada (HbA1c) e, em muitos casos, diminuir a
            necessidade de medicamentos. O acompanhamento nutricional especializado faz toda a diferença nos resultados
            e na qualidade de vida do paciente diabético.
          </Text>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Como funciona o acompanhamento nutricional para diabetes?
          </Text>
          <VStack align="start" gap="3" pl="2">
            {[
              "Avaliação completa: exames, medicamentos em uso, histórico alimentar",
              "Contagem de carboidratos personalizada",
              "Plano alimentar adaptado à sua rotina e preferências",
              "Orientação sobre índice glicêmico dos alimentos",
              "Estratégias para evitar hipoglicemia e hiperglicemia",
              "Acompanhamento de exames: glicemia, HbA1c, colesterol",
              "Retornos frequentes para ajustes no plano",
            ].map((item) => (
              <HStack key={item} gap="2">
                <FaCheckCircle color="#93B2BD" />
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">{item}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Tipos de diabetes atendidos
          </Text>
          <VStack align="start" gap="4">
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Diabetes Tipo 2
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                O mais comum, diretamente relacionado à alimentação e estilo de vida. Com o plano alimentar correto,
                muitos pacientes conseguem reduzir significativamente a medicação e até reverter o quadro pré-diabético.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Diabetes Tipo 1
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                O acompanhamento nutricional é essencial para uma contagem de carboidratos precisa, sincronizada com
                a insulina, garantindo controle glicêmico e qualidade de vida.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Diabetes Gestacional
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Ocorre durante a gestação e requer cuidado nutricional especial para garantir a saúde da mãe e do
                bebê. O plano alimentar ajuda a controlar a glicemia sem comprometer a nutrição da gestante.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Perguntas frequentes sobre diabetes e nutrição
          </Text>
          <VStack align="start" gap="4">
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Diabético pode comer frutas?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Sim! Frutas são saudáveis e fazem parte do plano alimentar. O segredo está na quantidade, combinação
                e horário de consumo. No acompanhamento nutricional, orientamos exatamente como incluí-las.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                A dieta para diabetes é muito restritiva?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Não. O plano alimentar para diabetes é equilibrado e variado. Você vai comer de tudo com orientação
                sobre porções e combinações adequadas. O objetivo é controlar, não restringir.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Em quanto tempo os exames melhoram?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Com adesão ao plano alimentar, é comum ver melhora na glicemia de jejum nas primeiras semanas. A
                hemoglobina glicada (HbA1c) reflete os últimos 3 meses, então 90 dias é um bom marco para avaliar resultados.
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
