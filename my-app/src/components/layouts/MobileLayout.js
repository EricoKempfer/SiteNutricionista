import {
  Box, HStack, Text, Image, Button, VStack,
  Avatar, RatingGroup, Stack, AspectRatio, Flex, Link, Accordion, Span,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaBars, FaCheckCircle, FaUserMd, FaClipboardList, FaCalendarCheck } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import { IoWomanOutline } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useState } from "react";
import { WHATSAPP_LINK, FAQ_DATA, TESTIMONIALS, BENEFICIOS_DATA_MOBILE, SOCIAL_LINKS } from "@/lib/constants";
import { trackEbookDownload, trackWhatsAppClick } from "@/lib/analytics";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function MobileLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <Box as="main" bgColor="#ffffff" w="100%" minH="100vh">
      {/* Skip to content - Acessibilidade WCAG 2.4.1 */}
      <Link
        href="#conteudo-principal-mobile"
        position="absolute"
        top="-100px"
        left="0"
        bg="#93B2BD"
        color="white"
        px="4"
        py="2"
        zIndex={9999}
        fontFamily="var(--font-poppins), Poppins, sans-serif"
        fontWeight="600"
        _focus={{ top: "0" }}
      >
        Pular para o conteúdo principal
      </Link>
      {/* ===== HEADER MOBILE ===== */}
      <Box as="header" p="3" w="100%" position="sticky" top="0" zIndex="999" bg="white" boxShadow="xs">
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="sm" aria-label="Abrir menu de navegação">
            <FaBars color="#93B2BD" />
          </Button>
          <Image h="35px" src="/logonutr.jpg" alt="Logo Nutricionista Ludiana Campos - Chapecó SC" loading="eager" />
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick}>
            <Button
              variant="outline"
              color="#93B2BD"
              borderColor="#93B2BD"
              size="sm"
              fontSize="xs"
              borderRadius="50px"
              px="3"
              _hover={{ bgColor: "#93B2BD", color: "white" }}
            >
              Consultar
            </Button>
          </Link>
        </HStack>
        {isMenuOpen && (
          <VStack
            as="nav"
            aria-label="Navegação principal"
            mt="3"
            gap="3"
            align="stretch"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p="4"
          >
            <Text cursor="pointer" onClick={() => handleScroll("inicio")} textAlign="center" role="menuitem">Início</Text>
            <Text cursor="pointer" onClick={() => handleScroll("sobre-mim")} textAlign="center" role="menuitem">Sobre Mim</Text>
            <Text cursor="pointer" onClick={() => handleScroll("como-funciona")} textAlign="center" role="menuitem">Como Funciona</Text>
            <Text cursor="pointer" onClick={() => handleScroll("especialidades")} textAlign="center" role="menuitem">Especialidades</Text>
            <Text cursor="pointer" onClick={() => handleScroll("depoimentos")} textAlign="center" role="menuitem">Depoimentos</Text>
            <Text cursor="pointer" onClick={() => handleScroll("faq")} textAlign="center" role="menuitem">FAQ</Text>
            <Text cursor="pointer" onClick={() => handleScroll("local")} textAlign="center" role="menuitem">Local</Text>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick} w="100%">
              <Button variant="outline" color="#93B2BD" borderColor="#93B2BD" size="sm" w="100%" _hover={{ bgColor: "#93B2BD", color: "white" }}>
                Agende sua Consulta
              </Button>
            </Link>
          </VStack>
        )}
      </Box>

      {/* ===== HERO SECTION ===== */}
      <Box
        as="section"
        id="conteudo-principal-mobile"
        w="100%"
        minH="55vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="#e4e4e4"
        bgImage="url(/BannerNutricionista.jpg)"
        bgSize="cover"
        bgPosition="center"
        position="relative"
        px="4"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.3) 100%)"
        />
        <VStack
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          gap="0px"
          textAlign="center"
          position="relative"
          zIndex="1"
          py="8"
        >
          <Text
            as="h1"
            fontFamily="Poppins"
            fontSize="28px"
            fontWeight="700"
            color="cyan.900"
            textShadow="2px 2px 4px rgba(0,0,0,0.2)"
            lineHeight="1.3"
          >
            Nutricionista em Chapecó – SC
          </Text>
          <Text fontFamily="Poppins" fontSize="20px" fontWeight="400" color="cyan.800" mt="1">
            Ludiana Campos | CRN 10 9645
          </Text>
          <Text mt="3%" fontFamily="Poppins" fontSize="15px" fontWeight="500" color="cyan.800" textAlign="center" px="2" lineHeight="1.6">
            Especialista em <strong>Emagrecimento Saudável</strong>, <strong>Controle de Diabetes</strong> e{" "}
            <strong>Saúde Feminina</strong>. Transforme sua saúde através da alimentação.
          </Text>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick} mt="4">
            <Button
              size="md"
              bgColor="#93B2BD"
              color="white"
              borderRadius="50px"
              px="6"
              py="5"
              fontSize="md"
              fontWeight="bold"
              _hover={{ bgColor: "#3F4971" }}
              boxShadow="0 4px 15px rgba(147, 178, 189, 0.4)"
            >
              <FaWhatsapp size="1.2em" />
              &nbsp; Agendar Consulta
            </Button>
          </Link>
          <VStack mt="3%" gap="2" color="cyan.700" fontSize="xs">
            <HStack>
              <FaCheckCircle color="#93B2BD" size="0.8em" />
              <Text fontFamily="Poppins">Atendimento humanizado</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="#93B2BD" size="0.8em" />
              <Text fontFamily="Poppins">Plano alimentar personalizado</Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>

      {/* ===== SOBRE MIM ===== */}
      <AnimatedSection as="section" id="sobre-mim" py="8" px="4" gap="6">
        <VStack gap="2">
          <Text as="h2" fontFamily="Poppins" fontSize="28px" fontWeight="600" textShadow="2px 2px 4px rgba(0,0,0,0.1)" color="#93b2bd" textAlign="center">
            Sobre Mim
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
        </VStack>
        <Image
          w="75%"
          maxW="280px"
          src="/nutriciSobreMim3.jpg"
          borderRadius="35% 65% 35% 65% / 35% 65% 35% 65%"
          alt="Ludiana Campos - Nutricionista clínica especializada em emagrecimento e diabetes em Chapecó SC"
          loading="lazy"
          boxShadow="0 8px 24px rgba(147, 178, 189, 0.5), 0 12px 48px rgba(147, 178, 189, 0.3)"
        />
        <VStack gap="3" textAlign="center">
          <Text fontFamily="Poppins" fontSize="15px" fontWeight="500" color="#5C637C" lineHeight="1.8">
            Sou <strong>Ludiana Campos</strong>, nutricionista clínica registrada no <strong>CRN 10 9645</strong>, atuando em{" "}
            <strong>Chapecó, Santa Catarina</strong>. Com formação sólida e atualização constante nas mais recentes evidências
            científicas, dedico-me a promover saúde e qualidade de vida por meio de uma alimentação equilibrada e personalizada.
          </Text>
          <Text fontFamily="Poppins" fontSize="15px" fontWeight="500" color="#5C637C" lineHeight="1.8">
            Minha abordagem é centrada no paciente: escuto suas necessidades, respeito suas preferências alimentares e considero
            sua rotina para criar planos nutricionais que realmente funcionem. Atuo especialmente nas áreas de{" "}
            <strong>emagrecimento saudável</strong>, <strong>controle de diabetes</strong> e <strong>saúde feminina</strong>,
            ajudando pacientes a alcançarem seus objetivos de saúde.
          </Text>
          <Text fontFamily="Poppins" fontSize="15px" fontWeight="500" color="#5C637C" lineHeight="1.8">
            Se você busca uma nutricionista comprometida com seus resultados, agende sua consulta
            e dê o primeiro passo rumo a uma vida mais saudável.
          </Text>
        </VStack>
      </AnimatedSection>

      {/* ===== COMO FUNCIONA A CONSULTA ===== */}
      <AnimatedSection as="section" id="como-funciona" py="8" px="4" gap="6" bgGradient="to-b" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack gap="2">
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd" textAlign="center">
            Como Funciona a Consulta
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
          <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" textAlign="center" px="2" mt="2">
            Passo a passo do atendimento nutricional.
          </Text>
        </VStack>
        <VStack gap="4" w="100%">
          {/* Passo 1 */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.2)"
            textAlign="center"
            gap="3"
          >
            <Box w="60px" h="60px" borderRadius="50%" bg="#93B2BD" display="flex" justifyContent="center" alignItems="center">
              <FaClipboardList color="white" size="1.8em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              1. Avaliação Completa
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Na primeira consulta, realizo uma avaliação nutricional detalhada: composição corporal, histórico alimentar,
              análise de exames e entendimento dos seus objetivos.
            </Text>
          </VStack>
          {/* Passo 2 */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.2)"
            textAlign="center"
            gap="3"
          >
            <Box w="60px" h="60px" borderRadius="50%" bg="#93B2BD" display="flex" justifyContent="center" alignItems="center">
              <FaUserMd color="white" size="1.8em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              2. Plano Alimentar Personalizado
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Elaboro um plano alimentar 100% personalizado, respeitando seus gostos, sua rotina e suas necessidades
              nutricionais. Nada de dietas genéricas.
            </Text>
          </VStack>
          {/* Passo 3 */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.2)"
            textAlign="center"
            gap="3"
          >
            <Box w="60px" h="60px" borderRadius="50%" bg="#93B2BD" display="flex" justifyContent="center" alignItems="center">
              <FaCalendarCheck color="white" size="1.8em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              3. Acompanhamento Contínuo <br></br>(presencial ou on-line)
            </Text>
            
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Consultas de retorno para monitorar sua evolução, ajustar o plano alimentar e garantir que você alcance
              seus objetivos com segurança.
            </Text>
          </VStack>
        </VStack>
        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick}>
          <Button
            size="md"
            bgColor="#93B2BD"
            color="white"
            borderRadius="50px"
            px="6"
            fontSize="md"
            fontWeight="bold"
            _hover={{ bgColor: "#3F4971" }}
          >
            <FaWhatsapp size="1.2em" />
            &nbsp; Agendar Minha Consulta
          </Button>
        </Link>
      </AnimatedSection>

      {/* ===== ESPECIALIDADES ===== */}
      <AnimatedSection as="section" id="especialidades" py="8" px="4" gap="6">
        <VStack gap="2">
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd" textAlign="center">
            Especialidades em Nutrição
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
          <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" textAlign="center" px="2" mt="2">
            Atendimento especializado em nutrição clínica
          </Text>
        </VStack>

        <VStack gap="4" w="100%">
          {/* Diabetes */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
            textAlign="center"
            gap="3"
          >
            <Box
              w="70px"
              h="70px"
              borderRadius="50%"
              bg="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
            >
              <MdOutlineBloodtype color="#93B2BD" size="2.5em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              Controle de Diabetes
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Tratamento nutricional para diabetes tipo 1 e tipo 2 e diabetes gestacional. Controle glicêmico através de alimentação
              adequada, contagem de carboidratos e educação nutricional.
            </Text>
          </VStack>

          {/* Emagrecimento */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
            textAlign="center"
            gap="3"
          >
            <Box
              w="70px"
              h="70px"
              borderRadius="50%"
              bg="#93B2BD"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
            >
              <FaHeartPulse color="white" size="2.5em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              Emagrecimento Saudável
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Programa de emagrecimento sem dietas restritivas. Planos alimentares equilibrados para perda de
              peso sustentável, preservando massa muscular.
            </Text>
          </VStack>

          {/* Saúde Feminina */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
            textAlign="center"
            gap="3"
          >
            <Box
              w="70px"
              h="70px"
              borderRadius="50%"
              bg="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
            >
              <IoWomanOutline color="#93B2BD" size="2.5em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              Saúde Feminina
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Nutrição especializada para mulheres: SOP, endometriose, TPM, menopausa e gestação. Alimentação
              estratégica para equilíbrio hormonal e bem-estar.
            </Text>
          </VStack>

          {/* Saúde Gastrointestinal */}
          <VStack
            w="100%"
            p="6"
            borderRadius="xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
            textAlign="center"
            gap="3"
          >
            <Box
              w="70px"
              h="70px"
              borderRadius="50%"
              bg="#93B2BD"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
            >
              <GiFruitBowl color="white" size="2.5em" />
            </Box>
            <Text as="h3" fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900">
              Saúde Gastrointestinal
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
              Tratamento nutricional para distúrbios gastrointestinais: gastrite, refluxo, síndrome do intestino irritável
              e intolerâncias alimentares.
            </Text>
          </VStack>
        </VStack>
      </AnimatedSection>

      {/* ===== BENEFÍCIOS ===== */}
      <AnimatedSection as="section" py="8" px="4" gap="6" bgGradient="to-b" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack gap="2">
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd" textAlign="center">
            Benefícios do Acompanhamento
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
        </VStack>
        <VStack gap="3" w="100%">
          {BENEFICIOS_DATA_MOBILE.map((item, i) => (
            <HStack
              key={i}
              w="100%"
              p="4"
              borderRadius="lg"
              bg="white"
              boxShadow="0 2px 12px rgba(147, 178, 189, 0.15)"
              gap="3"
            >
              <Box minW="30px">
                <FaCheckCircle color="#93B2BD" size="1.2em" />
              </Box>
              <VStack align="start" gap="0">
                <Text fontFamily="Poppins" fontWeight="600" color="cyan.900" fontSize="15px">
                  {item.title}
                </Text>
                <Text fontFamily="Poppins" fontSize="13px" color="#5C637C" lineHeight="1.5">
                  {item.desc}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick}>
          <Button
            size="md"
            bgColor="#93B2BD"
            color="white"
            borderRadius="50px"
            px="6"
            fontSize="md"
            fontWeight="bold"
            _hover={{ bgColor: "#3F4971" }}
          >
            <FaWhatsapp size="1.2em" />
            &nbsp; Começar Meu Acompanhamento
          </Button>
        </Link>
      </AnimatedSection>

      {/* ===== DEPOIMENTOS ===== */}
      <AnimatedSection as="section" py="8" px="4" gap="6">
        <VStack gap="2">
          <Text as="h2" textAlign="center" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd">
            Depoimentos
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
        </VStack>

        <Box id="depoimentos" w="100%" display="flex" justifyContent="center" bgColor="white" bgImage="url(/grid2.jpg)">
          <VStack gap="4" w="100%" maxW="400px">
            {/* Card de Classificação */}
            <VStack w="100%" p="4" borderRadius="md" justifyContent="center" textAlign="center" gap="3">
              <Text fontSize="18px" fontWeight="bold" color="gray.800">EXCELENTE</Text>
              <RatingGroup.Root colorPalette="yellow" readOnly count={5} defaultValue={5} size="md">
                <RatingGroup.HiddenInput />
                <RatingGroup.Control />
              </RatingGroup.Root>
              <VStack gap="0">
                <Text fontSize="13px" fontWeight="600" color="gray.500">Nutricionista em Chapecó,</Text>
                <Text fontSize="13px" fontWeight="600" color="gray.500">Santa Catarina</Text>
              </VStack>
              <Image src="/googleIcon.png" alt="Avaliações Google - Nutricionista Ludiana Campos Chapecó" w="30%" loading="lazy" />
            </VStack>

            {/* Cards de Depoimentos */}
            {TESTIMONIALS.map((testimonial, index) => (
              <VStack
                key={index}
                w="100%"
                p="4"
                borderWidth="1.5px"
                borderColor="gray.200"
                borderRadius="md"
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                bg="gray.100"
                _hover={{ bg: "gray.200" }}
                transition="0.3s"
                gap="3"
                mb="2"
              >
                <HStack w="100%" gap="3">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback name={testimonial.name} />
                    <Avatar.Image src={testimonial.avatar} />
                  </Avatar.Root>
                  <Stack gap="0" flex="1">
                    <Text fontSize="14px" fontWeight="medium">{testimonial.name}</Text>
                    <Text fontSize="12px" color="fg.muted">{testimonial.date}</Text>
                  </Stack>
                </HStack>
                <HStack w="100%" gap={1}>
                  <RatingGroup.Root colorPalette="yellow" readOnly count={5} defaultValue={5} size="sm">
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                  </RatingGroup.Root>
                  <VscVerifiedFilled fontSize="14px" color="#2563eb" />
                </HStack>
                <Text fontSize="14px" textAlign="left" w="100%">{testimonial.text}</Text>
              </VStack>
            ))}
          </VStack>
        </Box>
      </AnimatedSection>

      {/* ===== LOCALIZAÇÃO ===== */}
      <AnimatedSection as="section" py="8" px="4" gap="6">
        <VStack gap="2">
          <Text as="h2" textAlign="center" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd">
            Localização em Chapecó – SC
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
          <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" textAlign="center">
            Consultório de nutrição em Chapecó, Santa Catarina.
          </Text>
        </VStack>
        <Box id="local" w="100%" display="flex" alignItems="center" justifyContent="center">
          <AspectRatio w="95%" ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.732945534991!2d-52.61751729999999!3d-27.101715199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b42079a39e0d%3A0xedd01f5bcc6c3d69!2sNutricionista%20Ludiana%20Campos!5e0!3m2!1spt-BR!2sbr!4v1746400402989!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Nutricionista Ludiana Campos em Chapecó SC"
              style={{ borderRadius: "8px" }}
            />
          </AspectRatio>
        </Box>
      </AnimatedSection>

      {/* ===== REDES SOCIAIS ===== */}
      <AnimatedSection as="section" py="8" px="4" gap="6" bgGradient="to-b" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack gap="2">
          <Text as="h2" textAlign="center" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd">
            Redes Sociais
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
        </VStack>
        <VStack gap="4" w="100%">
          <Link href={SOCIAL_LINKS.instagram} target="_blank" _hover={{ textDecoration: "none" }} aria-label="Instagram" w="100%">
            <Flex direction="row" alignItems="center" p="5" borderRadius="lg" boxShadow="lg" bg="white" w="100%" gap="4">
              <FaInstagram color="#93B2BD" size="2em" />
              <VStack align="start" gap="1">
                <Text fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="lg">Instagram</Text>
                <Text fontFamily="Poppins" color="#93b2bd" opacity="0.8" fontSize="sm">Dicas de nutrição e receitas saudáveis</Text>
              </VStack>
            </Flex>
          </Link>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick} aria-label="WhatsApp" w="100%">
            <Flex direction="row" alignItems="center" p="5" borderRadius="lg" boxShadow="lg" bg="white" w="100%" gap="4">
              <FaWhatsapp color="#93B2BD" size="2em" />
              <VStack align="start" gap="1">
                <Text fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="lg">WhatsApp</Text>
                <Text fontFamily="Poppins" color="#93b2bd" opacity="0.8" fontSize="sm">Agende sua consulta ou tire dúvidas</Text>
              </VStack>
            </Flex>
          </Link>
          <Link href={SOCIAL_LINKS.facebook} target="_blank" _hover={{ textDecoration: "none" }} aria-label="Facebook" w="100%">
            <Flex direction="row" alignItems="center" p="5" borderRadius="lg" boxShadow="lg" bg="white" w="100%" gap="4">
              <FaFacebook color="#93B2BD" size="2em" />
              <VStack align="start" gap="1">
                <Text fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="lg">Facebook</Text>
                <Text fontFamily="Poppins" color="#93b2bd" opacity="0.8" fontSize="sm">Conteúdos sobre nutrição e saúde</Text>
              </VStack>
            </Flex>
          </Link>
        </VStack>
      </AnimatedSection>

      {/* ===== FAQ ===== */}
      <AnimatedSection as="section" id="faq" py="8" px="4" gap="6" bgGradient="to-b" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack gap="2">
          <Text as="h2" fontFamily="Poppins" fontSize="26px" fontWeight="700" color="#93b2bd" textAlign="center">
            Perguntas Frequentes
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
          <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" textAlign="center" px="2">
            Dúvidas sobre consulta nutricional em Chapecó.
          </Text>
        </VStack>
        <Accordion.Root collapsible w="100%" variant="enclosed">
          {FAQ_DATA.map((faq, index) => (
            <Accordion.Item key={index} value={String(index)}>
              <Accordion.ItemTrigger
                px="5"
                py="4"
                bg="white"
                _hover={{ bg: "gray.50" }}
                cursor="pointer"
              >
                <Span
                  flex="1"
                  textAlign="start"
                  fontFamily="Poppins"
                  fontSize="15px"
                  fontWeight="700"
                  color="cyan.900"
                >
                  {faq.question}
                </Span>
                <Accordion.ItemIndicator color="#93B2BD" />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody
                  fontFamily="Poppins"
                  fontSize="14px"
                  color="#5C637C"
                  lineHeight="1.7"
                  px="5"
                  pb="4"
                  bg="white"
                >
                  {faq.answer}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </AnimatedSection>

      {/* ===== EBOOK ===== */}
      <AnimatedSection as="section" py="8" px="4" gap="6" bg="white">
        <VStack gap="2">
          <Text as="h2" fontFamily="Poppins" fontSize="24px" fontWeight="700" color="#93b2bd" textAlign="center">
            Presente para Você! 🎉
          </Text>
          <Box w="80px" h="3px" bg="#93b2bd" borderRadius="md" />
          <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" textAlign="center">
            Baixe gratuitamente o e-book com receitas saudáveis!
          </Text>
        </VStack>
        <VStack
          gap="5"
          p="6"
          borderRadius="2xl"
          bg="linear-gradient(135deg, #E9EEF2 0%, #F8F9FB 100%)"
          boxShadow="0 8px 32px rgba(147, 178, 189, 0.25)"
          w="100%"
          alignItems="center"
        >
          <Image
            src="/capaEbook.jpeg"
            alt="E-book Receitas para Aproveitar o Momento - Nutri Ludiana"
            h="180px"
            borderRadius="xl"
            boxShadow="0 8px 24px rgba(63,73,113,0.3)"
            objectFit="cover"
          />
          <VStack align="start" gap="3" w="100%">
            <Text fontFamily="Poppins" fontSize="18px" fontWeight="700" color="cyan.900" textAlign="center" w="100%">
              Receitas para Aproveitar o Momento!
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7" textAlign="center">
              Receitas saudáveis, saborosas e fáceis de preparar pela nutricionista Ludiana Campos.
            </Text>
            <VStack align="start" gap="2" w="100%">
              <HStack><FaCheckCircle color="#93B2BD" /><Text fontFamily="Poppins" fontSize="14px" color="#5C637C">Receitas práticas e saborosas</Text></HStack>
              <HStack><FaCheckCircle color="#93B2BD" /><Text fontFamily="Poppins" fontSize="14px" color="#5C637C">100% gratuito</Text></HStack>
            </VStack>
            <Link
              href="/Receitas%20aproveitar%20o%20momento!%20Nutri%20Ludiana.pdf"
              download
              _hover={{ textDecoration: "none" }}
              onClick={trackEbookDownload}
              w="100%"
            >
              <Button
                w="100%"
                size="md"
                bgColor="#93B2BD"
                color="white"
                borderRadius="50px"
                fontWeight="bold"
                _hover={{ bgColor: "#3F4971" }}
                transition="all 0.3s"
              >
                📥&nbsp; Baixar E-book Gratuito
              </Button>
            </Link>
          </VStack>
        </VStack>
      </AnimatedSection>

      <ScrollToTopButton />

      {/* ===== FOOTER COM NAP ===== */}
      <Box as="footer" py="6" px="4" bg="cyan.900" color="white">
        <VStack gap="4" textAlign="center">
          <Text fontFamily="Poppins" fontSize="18px" fontWeight="700">
            Nutricionista Ludiana Campos
          </Text>
          <Text fontFamily="Poppins" fontSize="13px" opacity="0.8">
            CRN 10 9645 | Nutricionista Clínica
          </Text>
          <Text fontFamily="Poppins" fontSize="13px" opacity="0.8">
            Chapecó, Santa Catarina – Brasil
          </Text>
          <Text fontFamily="Poppins" fontSize="13px" opacity="0.8">
            WhatsApp: (49) 99823-5398
          </Text>
          <Text fontFamily="Poppins" fontSize="13px" opacity="0.8">
            Emagrecimento | Diabetes | Saúde Feminina
          </Text>
          <HStack gap="4" mt="2">
            <Link href={SOCIAL_LINKS.instagram} target="_blank" aria-label="Instagram">
              <FaInstagram color="white" size="1.5em" />
            </Link>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} aria-label="WhatsApp">
              <FaWhatsapp color="white" size="1.5em" />
            </Link>
            <Link href={SOCIAL_LINKS.facebook} target="_blank" aria-label="Facebook">
              <FaFacebook color="white" size="1.5em" />
            </Link>
          </HStack>
          <Box mt="4" pt="4" borderTopWidth="1px" borderColor="whiteAlpha.300" w="100%">
            <Text fontFamily="Poppins" fontSize="12px" opacity="0.6">
              © {new Date().getFullYear()} Nutricionista Ludiana Campos – CRN 10 9645 | Chapecó, SC
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
