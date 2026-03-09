import { Box, VStack, HStack, Text, Button, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { IoWomanOutline } from "react-icons/io5";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { WHATSAPP_LINK, SITE_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Nutricionista para Saúde Feminina em Chapecó SC – Ludiana Campos",
  description: "Nutrição especializada em saúde da mulher: SOP, endometriose, TPM, menopausa e gestação em Chapecó, SC.",
  url: `${SITE_URL}/saude-feminina-chapeco`,
  mainEntity: {
    "@type": "MedicalCondition",
    name: "Condições de Saúde Feminina",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Nutrição para Saúde Feminina",
      description: "Plano alimentar especializado para SOP, endometriose, TPM, menopausa e gestação",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Saúde Feminina em Chapecó", item: `${SITE_URL}/saude-feminina-chapeco` },
    ],
  },
};

export default function SaudeFemininaChapeco() {
  return (
    <PageLayout>
      <SEO
        title="Nutricionista para Saúde Feminina em Chapecó SC – Ludiana Campos | SOP, Endometriose, Menopausa"
        description="Nutrição especializada em saúde da mulher em Chapecó, SC. Acompanhamento para SOP, endometriose, TPM, menopausa e gestação. Plano alimentar personalizado. CRN 10 9645."
        keywords="nutricionista saúde feminina chapecó, nutricionista sop chapecó, nutricionista endometriose, nutrição feminina chapecó, dieta menopausa, alimentação tpm, nutricionista gestante chapecó, nutri para mulher chapecó, hormônios alimentação"
        canonical={`${SITE_URL}/saude-feminina-chapeco`}
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <Text>Saúde Feminina em Chapecó</Text>
      </HStack>

      <VStack gap="4" textAlign="center" mb="10">
        <Box w="80px" h="80px" borderRadius="50%" bg="#93B2BD" display="flex" justifyContent="center" alignItems="center">
          <IoWomanOutline color="white" size="2.5em" />
        </Box>
        <Text as="h1" fontFamily="Poppins" fontSize={{ base: "28px", md: "40px" }} fontWeight="700" color="cyan.900" lineHeight="1.2">
          Nutricionista para Saúde Feminina em Chapecó – SC
        </Text>
        <Text fontFamily="Poppins" fontSize={{ base: "16px", md: "18px" }} color="#5C637C" maxW="700px">
          Nutrição especializada para as necessidades únicas da mulher em cada fase da vida.
          SOP, endometriose, TPM, menopausa e gestação.
        </Text>
      </VStack>

      <VStack gap="8" align="start">
        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Por que a mulher precisa de nutrição especializada?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            O corpo feminino passa por variações hormonais constantes ao longo do ciclo menstrual e das diferentes
            fases da vida. Essas variações afetam o metabolismo, o humor, o apetite e as necessidades nutricionais.
            Uma nutrição direcionada para saúde feminina leva em conta essas particularidades para promover
            equilíbrio hormonal e bem-estar.
          </Text>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Condições que atendo
          </Text>
          <VStack align="start" gap="4">
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Síndrome dos Ovários Policísticos (SOP)
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                A SOP afeta até 10% das mulheres e está relacionada à resistência insulínica. A nutrição adequada ajuda
                a controlar a insulina, reduzir a inflamação, regular o ciclo menstrual e facilitar a perda de peso.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Endometriose
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                A alimentação anti-inflamatória pode ajudar a reduzir as dores e a inflamação associadas à endometriose.
                Alimentos ricos em ômega-3, antioxidantes e fibras são aliados importantes no manejo da condição.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                TPM e Ciclo Menstrual
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Inchaço, irritabilidade, compulsão por doces — a alimentação certa em cada fase do ciclo pode reduzir
                significativamente esses sintomas e melhorar sua qualidade de vida.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Menopausa e Climatério
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Na menopausa, a nutrição adequada ajuda a manter a saúde óssea, controlar o peso, reduzir fogachos
                e proteger a saúde cardiovascular. Cálcio, vitamina D e fitoestrógenos são fundamentais.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Gestação e Amamentação
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                A nutrição na gestação impacta diretamente a saúde da mãe e do bebê. O plano alimentar garante todos
                os nutrientes essenciais, controle de ganho de peso adequado e prevenção de diabetes gestacional.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Benefícios do acompanhamento
          </Text>
          <VStack align="start" gap="3" pl="2">
            {[
              "Equilíbrio hormonal através da alimentação",
              "Redução de sintomas de TPM e menopausa",
              "Melhora da fertilidade",
              "Controle de peso respeitando o ciclo menstrual",
              "Nutrição adequada na gestação e amamentação",
              "Prevenção de osteoporose e doenças cardiovasculares",
            ].map((item) => (
              <HStack key={item} gap="2">
                <FaCheckCircle color="#93B2BD" />
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">{item}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
