import {
  Box, HStack, Text, Separator, Float, Image, Button, VStack,
  Avatar, RatingGroup, Stack, AspectRatio, Flex, Link, Accordion, Span,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaCheckCircle, FaUserMd, FaClipboardList, FaCalendarCheck } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import { IoWomanOutline } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { WHATSAPP_LINK, FAQ_DATA, TESTIMONIALS, BENEFICIOS_DATA } from "@/lib/constants";
import { trackEbookDownload } from "@/lib/analytics";

export default function DesktopLayout() {
  const handleScroll = (sectionId) => {
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box as="main" bgColor="#ffffff" w="100%" minH="100vh">
      {/* Skip to content - Acessibilidade WCAG 2.4.1 */}
      <Link
        href="#conteudo-principal"
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
      {/* ===== BOTÃO FLUTUANTE WHATSAPP ===== */}
      <Float
        offsetX="9%"
        offsetY="10"
        zIndex={100}
        position={"fixed"}
        placement={"bottom-end"}
        style={{ animation: "pulse 5s infinite ease-in-out" }}
      >
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: "none" }}
          aria-label="Agende sua consulta pelo WhatsApp"
        >
          <HStack
            _hover={{ bgColor: "#3F4971", scale: 1.1 }}
            style={{ transition: "0.8s all" }}
            justifyContent={"space-between"}
            bgColor="#93B2BD"
            p="3"
            borderRadius="50px"
          >
            <FaWhatsapp size="1.5em" color="white" />
            <Text fontWeight={"bold"} color="white">
              Agendar Consulta
            </Text>
          </HStack>
        </Link>
      </Float>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {/* ===== HEADER / NAVEGAÇÃO ===== */}
      <Box
        as="header"
        p="3"
        w="100%"
        position="sticky"
        top="0"
        zIndex="999"
        bg="white"
        boxShadow="xs"
      >
        <HStack justifyContent={"space-between"} w="100%">
          <HStack display="flex" alignItems={"center"} justifyContent={"center"}>
            <Image
              ml="2%"
              h="40px"
              src="/logonutr.jpg"
              alt="Logo Nutricionista Ludiana Campos - Chapecó SC"
              loading="eager"
            />
          </HStack>
          <HStack as="nav" aria-label="Navegação principal">
            <Text cursor="pointer" onClick={() => handleScroll("inicio")} _hover={{ color: "#93B2BD" }}>
              Início
            </Text>
            <Separator orientation="vertical" height="4" />
            <Text cursor="pointer" onClick={() => handleScroll("sobre-mim")} _hover={{ color: "#93B2BD" }}>
              Sobre Mim
            </Text>
            <Separator orientation="vertical" height="4" />
            <Text cursor="pointer" onClick={() => handleScroll("como-funciona")} _hover={{ color: "#93B2BD" }}>
              Como Funciona
            </Text>
            <Separator orientation="vertical" height="4" />
            <Text cursor="pointer" onClick={() => handleScroll("especialidades")} _hover={{ color: "#93B2BD" }}>
              Especialidades
            </Text>
            <Separator orientation="vertical" height="4" />
            <Text cursor="pointer" onClick={() => handleScroll("depoimentos")} _hover={{ color: "#93B2BD" }}>
              Depoimentos
            </Text>
            <Separator orientation="vertical" height="4" />
            <Text cursor="pointer" onClick={() => handleScroll("faq")} _hover={{ color: "#93B2BD" }}>
              FAQ
            </Text>
            <Separator orientation="vertical" height="4" />
            <Text cursor="pointer" onClick={() => handleScroll("local")} _hover={{ color: "#93B2BD" }}>
              Local
            </Text>
          </HStack>
          <HStack>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
              <Button
                variant={"subtle"}
                color={"#93B2BD"}
                borderRadius="50px"
                bgColor={"transparent"}
                borderColor={"#93B2BD"}
                _hover={{ bgColor: "#93B2BD", color: "white", transition: "0.3s all" }}
              >
                Agende sua Consulta
              </Button>
            </Link>
          </HStack>
        </HStack>
      </Box>

      {/* ===== HERO SECTION ===== */}
      <Box
        as="section"
        id="conteudo-principal"
        w="100%"
        h="500px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={"#e4e4e4"}
        bgImage={"url(/BannerNutricionista.jpg)"}
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 100%)"
        />
        <VStack
          w="60%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          gap="0px"
          position="relative"
          zIndex="1"
        >
          <Text
            as="h1"
            fontFamily="Poppins"
            fontSize="48px"
            fontWeight="700"
            color="cyan.900"
            textShadow="2px 2px 4px rgba(0,0,0,0.15)"
            textAlign="center"
            lineHeight="1.2"
          >
            Nutricionista em Chapecó – SC
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="28px"
            fontWeight="400"
            color="cyan.800"
            mt="2"
            textAlign="center"
          >
            Ludiana Campos | CRN 10 9645
          </Text>
          <Text
            mt="3%"
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="500"
            color="cyan.800"
            textAlign="center"
            maxW="600px"
          >
            Especialista em <strong>Emagrecimento Saudável</strong>, <strong>Controle de Diabetes</strong> e{" "}
            <strong>Saúde Feminina</strong>. Transforme sua relação com a alimentação e conquiste mais qualidade de vida.
          </Text>
          <HStack mt="5%" gap="4">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
              <Button
                size="lg"
                bgColor="#93B2BD"
                color="white"
                borderRadius="50px"
                px="8"
                py="6"
                fontSize="lg"
                fontWeight="bold"
                _hover={{ bgColor: "#3F4971", transform: "scale(1.05)" }}
                transition="all 0.3s"
                boxShadow="0 4px 15px rgba(147, 178, 189, 0.4)"
              >
                <FaWhatsapp size="1.2em" />
                &nbsp; Agendar Consulta pelo WhatsApp
              </Button>
            </Link>
          </HStack>
          <HStack mt="3%" gap="6" color="cyan.700" fontSize="sm">
            <HStack>
              <FaCheckCircle color="#93B2BD" />
              <Text fontFamily="Poppins">Atendimento humanizado</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="#93B2BD" />
              <Text fontFamily="Poppins">Plano alimentar personalizado</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="#93B2BD" />
              <Text fontFamily="Poppins">Resultados comprovados</Text>
            </HStack>
          </HStack>
        </VStack>
      </Box>

      {/* ===== SOBRE MIM ===== */}
      <Box as="section" id="sobre-mim" py="5%" w="100%">
        <HStack w="100%" display="flex" alignItems="center" justifyContent="center" gap="5%">
          <Image
            h="450px"
            src="/nutriciSobreMim3.jpg"
            borderRadius="35% 65% 35% 65% / 35% 65% 35% 65%"
            alt="Ludiana Campos - Nutricionista clínica especializada em emagrecimento e diabetes em Chapecó SC"
            loading="lazy"
            boxShadow="0 8px 24px rgba(147, 178, 189, 0.5), 0 12px 48px rgba(147, 178, 189, 0.3)"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 12px 32px rgba(147, 178, 189, 0.5), 0 16px 64px rgba(147, 178, 189, 0.3)",
            }}
          />
          <Box w="45%" display="flex" flexDirection="column" gap="3">
            <Text as="h2" fontFamily="Poppins" fontSize="42px" fontWeight="600" color="#93b2bd" textShadow="2px 2px 4px rgba(0,0,0,0.1)">
              Sobre Mim
            </Text>
            <Box w="30%" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="17px" fontWeight="500" color="#5C637C" lineHeight="1.8" mt="2">
              Sou <strong>Ludiana Campos</strong>, nutricionista clínica registrada no <strong>CRN 10 9645</strong>, atuando em{" "}
              <strong>Chapecó, Santa Catarina</strong>. Com formação sólida e atualização constante nas mais recentes evidências
              científicas, dedico-me a promover saúde e qualidade de vida por meio de uma alimentação equilibrada e personalizada.
            </Text>
            <Text fontFamily="Poppins" fontSize="17px" fontWeight="500" color="#5C637C" lineHeight="1.8">
              Minha abordagem é centrada no paciente: escuto suas necessidades, respeito suas preferências alimentares e considero
              sua rotina para criar planos nutricionais que realmente funcionem no dia a dia. Atuo especialmente nas áreas de{" "}
              <strong>emagrecimento saudável</strong>, <strong>controle de diabetes</strong> e <strong>saúde feminina</strong>,
              ajudando pacientes a alcançarem seus objetivos de saúde de forma sustentável.
            </Text>
            <Text fontFamily="Poppins" fontSize="17px" fontWeight="500" color="#5C637C" lineHeight="1.8">
              Acredito que a nutrição é a base para uma vida mais saudável e que cada pessoa merece um acompanhamento profissional
              que respeite sua individualidade. Se você busca uma nutricionista comprometida com seus
              resultados, agende sua consulta e dê o primeiro passo rumo a uma vida mais saudável.
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* ===== COMO FUNCIONA A CONSULTA ===== */}
      <Box as="section" id="como-funciona" py="5%" w="100%" bgGradient="to-r" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack w="100%" gap="8">
          <VStack gap="2">
            <Text as="h2" fontFamily="Poppins" fontSize="42px" fontWeight="700" color="#93b2bd" textShadow="2px 2px 4px rgba(0,0,0,0.1)" textAlign="center">
              Como Funciona a Consulta Nutricional
            </Text>
            <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="18px" color="#5C637C" textAlign="center" maxW="700px" mt="2">
              Conheça o passo a passo do atendimento nutricional com a nutricionista Ludiana Campos.
              Um processo simples, acolhedor e focado nos seus resultados.
            </Text>
          </VStack>
          <HStack w="80%" justifyContent="space-between" gap="8" mt="4">
            {/* Passo 1 */}
            <VStack
              flex="1"
              p="8"
              borderRadius="xl"
              bg="white"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.2)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.35)" }}
              textAlign="center"
              gap="4"
            >
              <Box
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#93B2BD"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FaClipboardList color="white" size="2em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                1. Avaliação Completa
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Na primeira consulta, realizo uma avaliação nutricional detalhada: análise de composição corporal, histórico
                alimentar, análise de exames laboratoriais e entendimento dos seus objetivos e estilo de vida em Chapecó.
              </Text>
            </VStack>
            {/* Passo 2 */}
            <VStack
              flex="1"
              p="8"
              borderRadius="xl"
              bg="white"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.2)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.35)" }}
              textAlign="center"
              gap="4"
            >
              <Box
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#93B2BD"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FaUserMd color="white" size="2em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                2. Plano Alimentar Personalizado
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Com base na avaliação, elaboro um plano alimentar 100% personalizado, respeitando seus gostos, sua rotina e
                suas necessidades nutricionais. Nada de dietas genéricas — cada plano é único como você.
              </Text>
            </VStack>
            {/* Passo 3 */}
            <VStack
              flex="1"
              p="8"
              borderRadius="xl"
              bg="white"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.2)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.35)" }}
              textAlign="center"
              gap="4"
            >
              <Box
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#93B2BD"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FaCalendarCheck color="white" size="2em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                3. Acompanhamento Contínuo <br></br>(presencial ou on-line)
              </Text>
              <Text fontFamily="Poppins" fontSize="15px" color="#5C637C" lineHeight="1.7">
                Realizo consultas de retorno para monitorar sua evolução, ajustar o plano alimentar conforme necessário e
                garantir que você alcance seus objetivos de saúde com segurança e sustentabilidade.
              </Text>
            </VStack>
          </HStack>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button
              mt="4"
              size="lg"
              bgColor="#93B2BD"
              color="white"
              borderRadius="50px"
              px="10"
              py="6"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ bgColor: "#3F4971", transform: "scale(1.05)" }}
              transition="all 0.3s"
            >
              <FaWhatsapp size="1.2em" />
              &nbsp; Agendar Minha Primeira Consulta
            </Button>
          </Link>
        </VStack>
      </Box>

      {/* ===== ESPECIALIDADES ===== */}
      <Box as="section" id="especialidades" py="5%" w="100%">
        <VStack w="100%" gap="8">
          <VStack gap="2">
            <Text as="h2" fontFamily="Poppins" fontSize="42px" fontWeight="700" color="#93b2bd" textAlign="center">
              Especialidades em Nutrição Clínica
            </Text>
            <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="18px" color="#5C637C" textAlign="center" maxW="700px" mt="2">
              Atendimento especializado para transformar sua saúde através da alimentação adequada.
            </Text>
          </VStack>

          {/* Cards de Especialidades */}
          <HStack w="85%" justifyContent="center" gap="6" flexWrap="wrap">
            {/* Controle de Diabetes */}
            <VStack
              w="280px"
              p="8"
              borderRadius="xl"
              bg="white"
              borderWidth="1px"
              borderColor="gray.100"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.3)" }}
              textAlign="center"
              gap="3"
            >
              <Box
                w="80px"
                h="80px"
                borderRadius="50%"
                bg="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
              >
                <MdOutlineBloodtype color="#93B2BD" size="3em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                Controle de Diabetes
              </Text>
              <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
                Tratamento nutricional para diabetes tipo 1 e tipo 2 e diabetes gestacional. Controle glicêmico através de alimentação
                adequada, contagem de carboidratos e educação nutricional, reduzindo complicações a longo prazo.
              </Text>
            </VStack>

            {/* Emagrecimento Saudável */}
            <VStack
              w="280px"
              p="8"
              borderRadius="xl"
              bg="white"
              borderWidth="1px"
              borderColor="gray.100"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.3)" }}
              textAlign="center"
              gap="3"
            >
              <Box
                w="80px"
                h="80px"
                borderRadius="50%"
                bg="#93B2BD"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
              >
                <FaHeartPulse color="white" size="3em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                Emagrecimento Saudável
              </Text>
              <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
                Programa de emagrecimento sem dietas restritivas. Planos alimentares equilibrados que promovem
                perda de peso sustentável, preservando massa muscular e promovendo bem-estar duradouro.
              </Text>
            </VStack>

            {/* Saúde Feminina */}
            <VStack
              w="280px"
              p="8"
              borderRadius="xl"
              bg="white"
              borderWidth="1px"
              borderColor="gray.100"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.3)" }}
              textAlign="center"
              gap="3"
            >
              <Box
                w="80px"
                h="80px"
                borderRadius="50%"
                bg="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
              >
                <IoWomanOutline color="#93B2BD" size="3em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                Saúde Feminina
              </Text>
              <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
                Nutrição especializada para mulheres: SOP, endometriose, TPM, menopausa e gestação. Alimentação
                estratégica para equilíbrio hormonal, fertilidade e bem-estar em todas as fases da vida.
              </Text>
            </VStack>

            {/* Saúde Gastrointestinal */}
            <VStack
              w="280px"
              p="8"
              borderRadius="xl"
              bg="white"
              borderWidth="1px"
              borderColor="gray.100"
              boxShadow="0 4px 20px rgba(147, 178, 189, 0.15)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(147, 178, 189, 0.3)" }}
              textAlign="center"
              gap="3"
            >
              <Box
                w="80px"
                h="80px"
                borderRadius="50%"
                bg="#93B2BD"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="0 8px 24px rgba(147, 178, 189, 0.3)"
              >
                <GiFruitBowl color="white" size="3em" />
              </Box>
              <Text as="h3" fontFamily="Poppins" fontSize="20px" fontWeight="700" color="cyan.900">
                Saúde Gastrointestinal
              </Text>
              <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.7">
                Tratamento nutricional para distúrbios gastrointestinais: gastrite, refluxo, síndrome do intestino irritável
                e intolerâncias alimentares. Melhore sua digestão e qualidade de vida.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>

      {/* ===== BENEFÍCIOS DO ACOMPANHAMENTO ===== */}
      <Box as="section" py="5%" w="100%" bgGradient="to-r" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack w="100%" gap="8">
          <VStack gap="2">
            <Text as="h2" fontFamily="Poppins" fontSize="42px" fontWeight="700" color="#93b2bd" textAlign="center">
              Benefícios do Acompanhamento Nutricional
            </Text>
            <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="18px" color="#5C637C" textAlign="center" maxW="700px" mt="2">
              Investir em acompanhamento nutricional profissional em Chapecó traz resultados que impactam todas as áreas da sua vida.
            </Text>
          </VStack>
          <HStack w="80%" justifyContent="center" gap="6" flexWrap="wrap">
            {BENEFICIOS_DATA.map((item, i) => (
              <HStack
                key={i}
                w="380px"
                p="5"
                borderRadius="lg"
                bg="white"
                boxShadow="0 2px 12px rgba(147, 178, 189, 0.15)"
                gap="4"
                transition="all 0.3s"
                _hover={{ transform: "translateX(5px)", boxShadow: "0 4px 20px rgba(147, 178, 189, 0.25)" }}
              >
                <Box minW="40px">
                  <FaCheckCircle color="#93B2BD" size="1.5em" />
                </Box>
                <VStack align="start" gap="1">
                  <Text fontFamily="Poppins" fontWeight="600" color="cyan.900" fontSize="16px">
                    {item.title}
                  </Text>
                  <Text fontFamily="Poppins" fontSize="14px" color="#5C637C" lineHeight="1.6">
                    {item.desc}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </HStack>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button
              mt="4"
              size="lg"
              bgColor="#93B2BD"
              color="white"
              borderRadius="50px"
              px="10"
              py="6"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ bgColor: "#3F4971", transform: "scale(1.05)" }}
              transition="all 0.3s"
            >
              <FaWhatsapp size="1.2em" />
              &nbsp; Quero Começar Meu Acompanhamento
            </Button>
          </Link>
        </VStack>
      </Box>

      {/* ===== DEPOIMENTOS ===== */}
      <Box as="section" py="5%" w="100%">
        <VStack gap="6">
          <Text as="h2" textAlign="center" fontFamily="Poppins" fontSize="42px" fontWeight="700" textShadow="2px 2px 4px rgba(0,0,0,0.1)" color="#93b2bd">
            Depoimentos
          </Text>
          <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
          
        </VStack>

        <Box
          id="depoimentos"
          mt="4"
          w="100%"
          py={8}
          display="flex"
          justifyContent="center"
          bgColor="white"
          bgImage="url(/grid2.jpg)"
        >
          <HStack gap={4} w="100%" maxW="1200px" flexWrap="wrap" justifyContent="center" px={4}>
            {/* Card de Classificação */}
            <VStack
              w="23%"
              minH="40vh"
              p={4}
              borderRadius="md"
              transition="0.3s"
              justifyContent="center"
              textAlign="center"
              gap="3"
            >
              <Text fontSize="20px" fontWeight="bold" color="gray.800">
                EXCELENTE
              </Text>
              <RatingGroup.Root colorPalette="yellow" readOnly count={5} defaultValue={5} size="lg">
                <RatingGroup.HiddenInput />
                <RatingGroup.Control />
              </RatingGroup.Root>
              <VStack gap="0">
                <Text fontSize="14px" fontWeight="600" color="gray.500">
                  Nutricionista em Chapecó,
                </Text>
                <Text fontSize="14px" fontWeight="600" color="gray.500">
                  Santa Catarina
                </Text>
              </VStack>
              <Image src="/googleIcon.png" alt="Avaliações Google - Nutricionista Ludiana Campos Chapecó" w="35%" loading="lazy" />
            </VStack>

            {/* Cards de Depoimentos */}
            {TESTIMONIALS.map((testimonial, index) => (
              <VStack
                key={index}
                w="23%"
                minH="40vh"
                maxH="40vh"
                p={4}
                borderWidth="1.5px"
                borderColor="gray.200"
                borderRadius="md"
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                bg="gray.100"
                _hover={{ bg: "gray.200" }}
                transition="0.3s"
                justifyContent="space-between"
              >
                <Box w="100%">
                  <HStack gap={4}>
                    <Avatar.Root size="md">
                      <Avatar.Fallback name={testimonial.name} />
                      <Avatar.Image src={testimonial.avatar} />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontSize="16px" fontWeight="medium">
                        {testimonial.name}
                      </Text>
                      <Text fontSize="14px" color="fg.muted">
                        {testimonial.date}
                      </Text>
                    </Stack>
                  </HStack>
                  <HStack mt={2} gap={1}>
                    <RatingGroup.Root justifyContent="start" colorPalette="yellow" readOnly count={5} defaultValue={5} size="md">
                      <RatingGroup.HiddenInput />
                      <RatingGroup.Control />
                    </RatingGroup.Root>
                    <VscVerifiedFilled fontSize="16px" color="#2563eb" />
                  </HStack>
                  <Text fontSize="16px" noOfLines={4} mt={3}>
                    {testimonial.text}
                  </Text>
                </Box>
              </VStack>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* ===== LOCALIZAÇÃO ===== */}
      <Box as="section" py="5%" w="100%">
        <VStack gap="6">
          <VStack gap="2">
            <Text as="h2" textAlign="center" fontFamily="Poppins" fontSize="42px" fontWeight="700" textShadow="2px 2px 4px rgba(0,0,0,0.1)" color="#93b2bd">
              Localização em Chapecó – SC
            </Text>
            <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="18px" color="#5C637C" textAlign="center" maxW="600px" mt="2">
              Consultório de nutrição localizado em Chapecó, Santa Catarina. Fácil acesso e estacionamento próximo.
            </Text>
          </VStack>
          <Box id="local" display="flex" alignItems="center" justifyContent="center" w="100%">
            <AspectRatio maxH="460px" w="80%" ratio={16 / 9}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.732945534991!2d-52.61751729999999!3d-27.101715199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b42079a39e0d%3A0xedd01f5bcc6c3d69!2sNutricionista%20Ludiana%20Campos!5e0!3m2!1spt-BR!2sbr!4v1746400402989!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Nutricionista Ludiana Campos em Chapecó SC"
                style={{ borderRadius: "12px" }}
              />
            </AspectRatio>
          </Box>
        </VStack>
      </Box>

      {/* ===== REDES SOCIAIS ===== */}
      <Box as="section" py="5%" w="100%" bgGradient="to-r" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack gap="6">
          <Text as="h2" textAlign="center" fontFamily="Poppins" fontSize="42px" fontWeight="700" color="#93b2bd" textShadow="2px 2px 4px rgba(0,0,0,0.2)">
            Redes Sociais
          </Text>
          <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
        </VStack>
        <Flex justifyContent="center" alignItems="center" mt="8" gap={6}>
          <Link href="https://www.instagram.com/nutriludiana" target="_blank" _hover={{ textDecoration: "none" }} aria-label="Instagram da Nutricionista Ludiana Campos">
            <Flex
              direction="column"
              alignItems="center"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              width="375px"
              height="200px"
              justifyContent="center"
            >
              <FaInstagram color="#93B2BD" size="2.5em" />
              <Text mt={4} fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="xl">
                Instagram
              </Text>
              <Text mt={2} fontFamily="Poppins" color="#93b2bd" opacity="0.8" textAlign="center" fontSize="sm">
                Dicas de nutrição, receitas saudáveis e novidades
              </Text>
            </Flex>
          </Link>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} aria-label="WhatsApp da Nutricionista Ludiana Campos">
            <Flex
              direction="column"
              alignItems="center"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              width="375px"
              height="200px"
              justifyContent="center"
            >
              <FaWhatsapp color="#93B2BD" size="2.5em" />
              <Text mt={4} fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="xl">
                WhatsApp
              </Text>
              <Text mt={2} fontFamily="Poppins" color="#93b2bd" opacity="0.8" textAlign="center" fontSize="sm">
                Agende sua consulta ou tire suas dúvidas
              </Text>
            </Flex>
          </Link>
          <Link href="https://www.facebook.com/share/1GRdgdEPzt/" target="_blank" _hover={{ textDecoration: "none" }} aria-label="Facebook da Nutricionista Ludiana Campos">
            <Flex
              direction="column"
              alignItems="center"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ backgroundColor: "cyan.50" }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              width="375px"
              height="200px"
              justifyContent="center"
            >
              <FaFacebook color="#93B2BD" size="2.5em" />
              <Text mt={4} fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="xl">
                Facebook
              </Text>
              <Text mt={2} fontFamily="Poppins" color="#93b2bd" opacity="0.8" textAlign="center" fontSize="sm">
                Conteúdos sobre nutrição e saúde
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Box>

      {/* ===== FAQ ===== */}
      <Box as="section" id="faq" py="5%" w="100%" bgGradient="to-r" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack w="100%" gap="8">
          <VStack gap="2">
            <Text as="h2" fontFamily="Poppins" fontSize="42px" fontWeight="700" color="#93b2bd" textAlign="center">
              Perguntas Frequentes
            </Text>
            <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="18px" color="#5C637C" textAlign="center" maxW="700px" mt="2">
              Tire suas dúvidas sobre consulta nutricional em Chapecó com a nutricionista Ludiana Campos.
            </Text>
          </VStack>
          <Accordion.Root collapsible w="70%" variant="enclosed">
            {FAQ_DATA.map((faq, index) => (
              <Accordion.Item key={index} value={String(index)}>
                <Accordion.ItemTrigger
                  px="6"
                  py="5"
                  bg="white"
                  _hover={{ bg: "gray.50" }}
                  cursor="pointer"
                >
                  <Span
                    flex="1"
                    textAlign="start"
                    fontFamily="Poppins"
                    fontSize="17px"
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
                    fontSize="15px"
                    color="#5C637C"
                    lineHeight="1.7"
                    px="6"
                    pb="5"
                    bg="white"
                  >
                    {faq.answer}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </VStack>
      </Box>

      {/* ===== EBOOK ===== */}
      <Box as="section" py="5%" w="100%" bg="white">
        <VStack w="100%" gap="8" alignItems="center">
          <VStack gap="2">
            <Text as="h2" fontFamily="Poppins" fontSize="42px" fontWeight="700" color="#93b2bd" textAlign="center">
              Presente para Você! 🎉
            </Text>
            <Box w="200px" h="3px" bg="#93b2bd" borderRadius="md" />
            <Text fontFamily="Poppins" fontSize="18px" color="#5C637C" textAlign="center" maxW="600px" mt="2">
              Baixe gratuitamente o e-book com receitas saudáveis para aproveitar o momento!
            </Text>
          </VStack>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="12"
            p="10"
            borderRadius="2xl"
            bg="linear-gradient(135deg, #E9EEF2 0%, #F8F9FB 100%)"
            boxShadow="0 8px 32px rgba(147, 178, 189, 0.25)"
            w="70%"
          >
            <Box
              h="280px"
              w="200px"
              borderRadius="xl"
              bgGradient="to-b"
              gradientFrom="#93B2BD"
              gradientTo="#3F4971"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="4"
              boxShadow="0 8px 24px rgba(63,73,113,0.3)"
              p="6"
            >
              <Text fontSize="52px">🥗</Text>
              <Box w="40px" h="2px" bg="whiteAlpha.600" borderRadius="full" />
              <Text fontFamily="Poppins" fontWeight="800" color="white" textAlign="center" fontSize="15px" lineHeight="1.4">
                Receitas para Aproveitar o Momento!
              </Text>
              <Text fontFamily="Poppins" color="whiteAlpha.800" textAlign="center" fontSize="11px">
                Nutri Ludiana
              </Text>
              <Box
                mt="2"
                px="4"
                py="1"
                borderRadius="full"
                bg="whiteAlpha.300"
                border="1px solid"
                borderColor="whiteAlpha.500"
              >
                <Text fontFamily="Poppins" color="white" fontSize="11px" fontWeight="600">
                  E-BOOK GRATUITO
                </Text>
              </Box>
            </Box>
            <VStack align="start" gap="5" flex="1">
              <Text fontFamily="Poppins" fontSize="28px" fontWeight="700" color="cyan.900" lineHeight="1.3">
                Receitas para Aproveitar o Momento!
              </Text>
              <Text fontFamily="Poppins" fontSize="16px" color="#5C637C" lineHeight="1.8">
                Um e-book especial da nutricionista Ludiana Campos com receitas saudáveis, saborosas e fáceis de preparar.
                Cuide da sua alimentação sem abrir mão do prazer de comer bem!
              </Text>
              <VStack align="start" gap="2">
                <HStack><FaCheckCircle color="#93B2BD" /><Text fontFamily="Poppins" fontSize="15px" color="#5C637C">Receitas práticas e saborosas</Text></HStack>
                <HStack><FaCheckCircle color="#93B2BD" /><Text fontFamily="Poppins" fontSize="15px" color="#5C637C">100% gratuito</Text></HStack>
              </VStack>
              <Link
                href="/Receitas%20aproveitar%20o%20momento!%20Nutri%20Ludiana.pdf"
                download
                _hover={{ textDecoration: "none" }}
                onClick={trackEbookDownload}
              >
                <Button
                  size="lg"
                  bgColor="#93B2BD"
                  color="white"
                  borderRadius="50px"
                  px="10"
                  py="6"
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{ bgColor: "#3F4971", transform: "scale(1.05)" }}
                  transition="all 0.3s"
                  boxShadow="0 4px 15px rgba(147, 178, 189, 0.4)"
                >
                  📥&nbsp; Baixar E-book Gratuito
                </Button>
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Box>

      {/* ===== FOOTER COM NAP (Name, Address, Phone) ===== */}
      <Box as="footer" py="8" px="8" bg="cyan.900" color="white">
        <Flex justifyContent="space-between" maxW="1200px" mx="auto" flexWrap="wrap" gap="8">
          <VStack align="start" gap="3" flex="1" minW="250px">
            <Text fontFamily="Poppins" fontSize="20px" fontWeight="700">
              Nutricionista Ludiana Campos
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">
              CRN 10 9645
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">
              Nutricionista Clínica em Chapecó – SC
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">
              Especialista em Emagrecimento, Diabetes e Saúde Feminina
            </Text>
          </VStack>
          <VStack align="start" gap="3" flex="1" minW="250px">
            <Text fontFamily="Poppins" fontSize="18px" fontWeight="600">
              Contato
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">
              Chapecó, Santa Catarina – Brasil
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">
              WhatsApp: (49) 99823-5398
            </Text>
            <HStack gap="4" mt="2">
              <Link href="https://www.instagram.com/nutriludiana" target="_blank" aria-label="Instagram">
                <FaInstagram color="white" size="1.5em" />
              </Link>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp color="white" size="1.5em" />
              </Link>
              <Link href="https://www.facebook.com/share/1GRdgdEPzt/" target="_blank" aria-label="Facebook">
                <FaFacebook color="white" size="1.5em" />
              </Link>
            </HStack>
          </VStack>
          <VStack align="start" gap="3" flex="1" minW="250px">
            <Text fontFamily="Poppins" fontSize="18px" fontWeight="600">
              Áreas de Atuação
            </Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">Emagrecimento Saudável</Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">Controle de Diabetes</Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">Saúde Feminina</Text>
            <Text fontFamily="Poppins" fontSize="14px" opacity="0.8">Saúde Gastrointestinal</Text>
          </VStack>
        </Flex>
        <Box mt="8" pt="6" borderTopWidth="1px" borderColor="whiteAlpha.300" textAlign="center">
          <Text fontFamily="Poppins" fontSize="13px" opacity="0.6">
            © {new Date().getFullYear()} Nutricionista Ludiana Campos – CRN 10 9645 | Chapecó, SC – Todos os direitos reservados.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
