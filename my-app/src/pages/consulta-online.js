import { Box, VStack, HStack, Text, Button, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaCheckCircle, FaLaptop } from "react-icons/fa";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { WHATSAPP_LINK, SITE_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";
import NextLink from "next/link";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Consulta com Nutricionista On-line – Ludiana Campos",
  description: "Consulta nutricional on-line com a nutricionista Ludiana Campos. Atendimento para todo o Brasil com a mesma qualidade do presencial.",
  url: `${SITE_URL}/consulta-online`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Consulta On-line", item: `${SITE_URL}/consulta-online` },
    ],
  },
};

export default function ConsultaOnline() {
  return (
    <PageLayout>
      <SEO
        title="Consulta com Nutricionista On-line – Ludiana Campos | Atendimento para Todo o Brasil"
        description="Consulta nutricional on-line com nutricionista especializada. Atendimento de qualidade para todo o Brasil. Emagrecimento, diabetes e saúde feminina. CRN 10 9645. Agende pelo WhatsApp!"
        keywords="nutricionista online, consulta nutricionista online, nutricionista a distância, atendimento nutricional online, nutricionista teleconsulta, consulta nutricional por vídeo, nutricionista brasil inteiro, acompanhamento nutricional online"
        canonical={`${SITE_URL}/consulta-online`}
        schema={SCHEMA}
        noFaqSchema
      />

      <HStack fontSize="sm" color="#5C637C" mb="6" flexWrap="wrap">
        <NextLink href="/" passHref legacyBehavior><Link color="#93B2BD">Início</Link></NextLink>
        <Text>/</Text>
        <Text>Consulta On-line</Text>
      </HStack>

      <VStack gap="4" textAlign="center" mb="10">
        <Box w="80px" h="80px" borderRadius="50%" bg="#93B2BD" display="flex" justifyContent="center" alignItems="center">
          <FaLaptop color="white" size="2em" />
        </Box>
        <Text as="h1" fontFamily="Poppins" fontSize={{ base: "28px", md: "40px" }} fontWeight="700" color="cyan.900" lineHeight="1.2">
          Consulta com Nutricionista On-line
        </Text>
        <Text fontFamily="Poppins" fontSize={{ base: "16px", md: "18px" }} color="#5C637C" maxW="700px">
          Atendimento nutricional de qualidade, onde você estiver. Mesma metodologia do atendimento presencial, com toda a comodidade do on-line.
        </Text>
      </VStack>

      <VStack gap="8" align="start">
        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Como funciona a consulta on-line?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8" mb="4">
            A consulta on-line é realizada por videochamada e segue o mesmo padrão de qualidade do atendimento presencial.
            Veja o passo a passo:
          </Text>
          <VStack align="start" gap="3" pl="2">
            {[
              "1. Agendamento pelo WhatsApp — você escolhe o melhor horário",
              "2. Envio de exames e informações prévias por mensagem",
              "3. Consulta por videochamada (50 a 60 minutos)",
              "4. Plano alimentar enviado por e-mail ou WhatsApp em até 48h",
              "5. Suporte por mensagem entre consultas para dúvidas do dia a dia",
            ].map((item) => (
              <HStack key={item} gap="2" align="start">
                <Box mt="1"><FaCheckCircle color="#93B2BD" /></Box>
                <Text fontFamily="Poppins" fontSize="15px" color="#5C637C">{item}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Vantagens do atendimento on-line
          </Text>
          <VStack align="start" gap="3" pl="2">
            {[
              "Sem deslocamento — atendimento do conforto da sua casa",
              "Ideal para quem mora fora de Chapecó",
              "Mesma qualidade e dedicação do atendimento presencial",
              "Flexibilidade de horários, inclusive à noite",
              "Plano alimentar digital fácil de acessar no celular",
              "Suporte contínuo via WhatsApp",
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
            Para quem é a consulta on-line?
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
            A consulta on-line é ideal para quem mora em outras cidades ou estados, tem uma agenda corrida, prefere a
            praticidade do atendimento à distância, ou simplesmente quer começar a cuidar da alimentação sem sair de casa.
            Atendo pacientes de todo o Brasil com as mesmas especialidades: <strong>emagrecimento saudável</strong>,{" "}
            <strong>controle de diabetes</strong> e <strong>saúde feminina</strong>.
          </Text>
        </Box>

        <Box>
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="600" color="#93b2bd" mb="3">
            Perguntas frequentes
          </Text>
          <VStack align="start" gap="4">
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                A consulta on-line é tão boa quanto a presencial?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Sim! A diferença é que a avaliação de composição corporal (bioimpedância) não pode ser realizada à distância.
                Entretanto, para a maioria dos casos, os exames laboratoriais e informações fornecidas são suficientes para
                um plano alimentar completo e eficaz.
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontFamily="Poppins" fontSize="17px" fontWeight="600" color="cyan.900" mb="1">
                Que ferramentas são usadas para a videochamada?
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Google Meet ou WhatsApp vídeo — o que for mais prático para você. Basta ter acesso à internet e uma
                câmera (celular, tablet ou computador).
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
