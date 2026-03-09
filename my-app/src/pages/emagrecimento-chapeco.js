import { Box, VStack, HStack, Text, Button, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { WHATSAPP_LINK, SITE_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Nutricionista para Emagrecimento em Chapecó SC – Ludiana Campos",
  description: "Programa de emagrecimento saudável com nutricionista em Chapecó. Plano alimentar personalizado sem dietas restritivas. CRN 10 9645.",
  url: `${SITE_URL}/emagrecimento-chapeco`,
  mainEntity: {
    "@type": "MedicalCondition",
    name: "Obesidade e Sobrepeso",
    associatedAnatomy: { "@type": "AnatomicalStructure", name: "Corpo inteiro" },
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Acompanhamento Nutricional para Emagrecimento",
      description: "Plano alimentar personalizado para perda de peso saudável e sustentável",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Emagrecimento em Chapecó", item: `${SITE_URL}/emagrecimento-chapeco` },
    ],
  },
};

export default function EmagrecimentoChapeco() {
  return (
    <PageLayout>
      <SEO
        title="Nutricionista para Emagrecimento em Chapecó SC – Ludiana Campos | Perder Peso com Saúde"
        description="Programa de emagrecimento saudável com nutricionista em Chapecó, SC. Sem dietas restritivas. Plano alimentar personalizado para perda de peso sustentável. CRN 10 9645. Agende!"
        keywords="nutricionista para emagrecer chapecó, emagrecimento saudável chapecó, dieta para emagrecer chapecó, perder peso chapecó, nutricionista emagrecimento sc, plano alimentar emagrecimento, reeducação alimentar chapecó, nutricionista perder peso santa catarina"
        canonical={`${SITE_URL}/emagrecimento-chapeco`}
        schema={SCHEMA}
        noFaqSchema
      />

      {/* Breadcrumb */}
      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <Text>Emagrecimento em Chapecó</Text>
      </HStack>

      {/* Hero */}
      <VStack gap="4" textAlign="center" mb="10">
        <Box w="80px" h="80px" borderRadius="50%" bg="#93B2BD" display="flex" justifyContent="center" alignItems="center">
          <FaHeartPulse color="white" size="2.5em" />
        </Box>
        <Text as="h1" fontFamily="Poppins" fontSize={{ base: "28px", md: "40px" }} fontWeight="700" color="cyan.900" lineHeight="1.2">
          Nutricionista para Emagrecimento em Chapecó – SC
        </Text>
        <Text fontFamily="Poppins" fontSize={{ base: "16px", md: "18px" }} color="#5C637C" maxW="700px">
          Programa de emagrecimento saudável e personalizado, sem dietas restritivas. Perca peso de forma sustentável com acompanhamento profissional.
        </Text>
      </VStack>

      {/* Content */}
      <VStack gap="8" align="start">
        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Como funciona o programa de emagrecimento?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            O emagrecimento saudável começa com uma avaliação nutricional completa. Nela, analiso sua composição corporal,
            hábitos alimentares, rotina, exames laboratoriais e seus objetivos. A partir disso, elaboro um plano alimentar
            100% personalizado — não é uma dieta genérica copiada da internet, é um plano feito exclusivamente para você.
          </Text>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Por que emagrecer com acompanhamento nutricional?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8" mb="4">
            Muitas pessoas tentam emagrecer sozinhas com dietas da moda e acabam no efeito sanfona. O acompanhamento profissional garante:
          </Text>
          <VStack align="start" gap="3" pl="2">
            {[
              "Perda de gordura (não de massa muscular)",
              "Alimentação adaptada à sua rotina e gostos",
              "Sem restrições extremas que geram compulsão",
              "Resultados sustentáveis a longo prazo",
              "Prevenção de deficiências nutricionais",
              "Melhora da relação com a comida",
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
            Com que velocidade vou emagrecer?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            Uma perda de peso segura e sustentável gira em torno de 0,5 a 1 kg por semana. Parece pouco? Em 3 meses, isso
            representa de 6 a 12 kg — sem sofrimento, sem efeito sanfona e mantendo sua saúde. O ritmo varia de pessoa
            para pessoa, considerando metabolismo, nível de atividade física e condições de saúde.
          </Text>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Abordagem personalizada em Chapecó
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            Cada paciente é único. Por isso, meu atendimento em Chapecó leva em consideração seus exames, sua rotina de
            trabalho, suas preferências alimentares e até onde você costuma comer fora. O plano funciona porque é feito
            para a <strong>sua</strong> vida, não para uma realidade idealizada.
          </Text>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Perguntas frequentes sobre emagrecimento
          </Text>
          <VStack align="start" gap="4">
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Preciso cortar carboidratos para emagrecer?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Não. Carboidratos são fonte de energia essencial. O segredo está na quantidade, qualidade e no momento
                certo de consumir. Dietas que eliminam carboidratos não são sustentáveis a longo prazo.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Posso emagrecer sem passar fome?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Sim! Um plano alimentar bem elaborado garante saciedade. Você vai comer comida de verdade, em quantidade
                adequada, distribuída ao longo do dia.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Quanto tempo dura o acompanhamento?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Recomendo um mínimo de 3 meses para resultados consistentes. Os retornos costumam ser mensais ou quinzenais,
                dependendo da evolução e dos objetivos.
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
