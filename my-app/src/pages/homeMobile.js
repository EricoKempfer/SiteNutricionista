import { Box, HStack, Text, Separator, Float, Image, Button, VStack, Center } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaBars } from "react-icons/fa";
import "@fontsource/poppins";
import { TbTreadmill } from "react-icons/tb";
import { Avatar, RatingGroup, Stack } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { FaHeartPulse } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import { IoWomanOutline } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { AspectRatio } from "@chakra-ui/react"
import { Flex, Link } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (sectionId) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsMenuOpen(false); // Fecha o menu após navegar
  };

  return (
    <Box bgColor="#ffffff" w='100%' minH="100vh" >


      {/* Header Mobile */}
      <Box
        p="3"
        w="100%"
        position="sticky"
        top="0"
        zIndex="999"
        bg="white"
        boxShadow="xs"
      >
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          {/* Ícone hambúrguer na esquerda */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="sm"
          >
            <FaBars color="#93B2BD" />
          </Button>

          {/* Logo no centro */}
          <Image
            h="35px"
            src="/logonutr.jpg"
            alt="Ludiana Campos Nutricionista"
          />

          {/* Botão Agendar na direita */}
          <Link 
            href="https://wa.me/5549998235398?text=Olá%20Ludiana,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional."
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              variant="outline"
              color="#93B2BD"
              borderColor="#93B2BD"
              size="sm"
              fontSize="xs"
              borderRadius={"50px"}
              px="3"
              _hover={{
                bgColor: "#93B2BD",
                color: "white",
              }}
            >
              Consultar
            </Button>
          </Link>
        </HStack>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <VStack
            mt="3"
            spacing="3"
            align="stretch"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p="4"
          >
            <Text cursor="pointer" onClick={() => handleScroll('inicio')} textAlign="center">Início</Text>
            <Text cursor="pointer" onClick={() => handleScroll('sobre-mim')} textAlign="center">Sobre Mim</Text>
            <Text cursor="pointer" onClick={() => handleScroll('especialidades')} textAlign="center">Especialidades</Text>
            <Text cursor="pointer" onClick={() => handleScroll('depoimentos')} textAlign="center">Depoimentos</Text>
            <Text cursor="pointer" onClick={() => handleScroll('local')} textAlign="center">Local</Text>
            <Link 
              href="https://wa.me/5549998235398?text=Olá%20Ludiana,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional."
              target="_blank"
              _hover={{ textDecoration: "none" }}
              w="100%"
            >
              <Button
                variant="outline"
                color="#93B2BD"
                borderColor="#93B2BD"
                size="sm"
                w="100%"
                _hover={{
                  bgColor: "#93B2BD",
                  color: "white",
                }}
              >
                Agende sua Consulta
              </Button>
            </Link>
          </VStack>
        )}
      </Box>

      {/* Banner Principal */}
      <VStack
        w="100%"
        h="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={"#e4e4e4"}
        bgImage={"url(/BannerNutricionista.jpg)"}
        bgSize="cover"
        px="4"

      >
        <VStack
          w="100%"
          mr={{ base: "0", md: "10%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          gap={"0px"}
          textAlign="center"
        >
          <Text fontFamily={"Poppins"} fontSize={"28px"} mb="0" fontWeight={"300"} color={"cyan.900"} textShadow="2px 2px 4px rgba(0,0,0,0.3)">Nutricionista</Text>
          <Text fontFamily={"Poppins"} fontSize={"32px"} fontWeight={"700"} color={"cyan.900"} textShadow="2px 2px 4px rgba(0,0,0,0.3)">Ludiana Campos</Text>
          <Text mt="3%" fontFamily={"Poppins"} fontSize={"16px"} mb="0" fontWeight={"500"} color={"cyan.800"} textAlign="center" px="2">
            Conquiste mais saúde através da alimentação!
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"14px"} mb="0" fontWeight={"500"} color={"cyan.800"} textAlign="center" px="2">
            Foco em: Emagrecimento, Diabetes e Saúde Feminina
          </Text>
          <Text mt="3%" color={"cyan.800"} fontSize={"16px"}>CRN: 10 9645</Text>
        </VStack>
      </VStack>

      {/* Seção Sobre Mim */}
      <VStack id="sobre-mim" mt="6" mb="6" w="100%" spacing="6" px="4">
        <VStack spacing="4" w="100%">
          <Text fontFamily={"Poppins"} fontSize={"32px"} fontWeight={"600"} textShadow="2px 2px 4px rgba(0,0,0,0.1)" color={"#93b2bd"} textAlign="center">
            Sobre Mim
          </Text>
          <Box
            w="30%"
            h="2px"
            bg="#93b2bd"
            boxShadow="0 4px 10px rgba(147, 178, 189, 0.2)"
            borderRadius="md"
          />
        </VStack>

        <Image
          mt='2'
          w="80%"
          maxW="300px"
          src="/nutriciSobreMim3.jpg"
          borderRadius="35% 65% 35% 65% / 35% 65% 35% 65%"
          alt="Loading..."
          boxShadow={`
            0 8px 24px rgba(147, 178, 189, 0.5),
            0 12px 48px rgba(147, 178, 189, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.2)
          `}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: `
              0 12px 32px rgba(147, 178, 189, 0.5),
              0 16px 64px rgba(147, 178, 189, 0.3),
              inset 0 4px 8px rgba(255, 255, 255, 0.2)
            `
          }}
        />

        <VStack spacing="3" w="100%" pt="5" px="2" textAlign="center">
          <Text fontFamily={"Poppins"} fontSize={"16px"} fontWeight={"500"} color={"#5C637C"}>
            Como nutricionista clínica trabalho com a prevenção e promoção à saúde por meio da alimentação saudável, com foco no controle do diabetes, emagrecimento saudável e saúde feminina.
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"16px"} fontWeight={"500"} color={"#5C637C"}>
            Vamos encontrar juntos a melhor maneira para você conquistar mais saúde através da alimentação, de uma forma simples e prática, atingindo seus objetivos e respeitando seus gostos alimentares!
          </Text>
        </VStack>
      </VStack>

      {/* Seção Especialidades */}
      <Box id="especialidades" w="100%" py="8" bgGradient="to-r" gradientFrom="#E9EEF2" gradientTo="#F8F9FB">
        <VStack spacing="8" w="100%" px="4">
          <Text fontFamily={"Poppins"} fontSize={"32px"} fontWeight={"700"} textShadow="2px 2px 4px rgba(0,0,0,0.1)" color={"#93b2bd"} textAlign="center">
            Especialidades
          </Text>

          {/* Grid responsivo de especialidades */}
          <Box w="100%" maxW="400px" mx="auto">
            <VStack spacing="6">
              {/* Primeira linha */}
              <HStack spacing="8" justifyContent="space-evenly" w="100%">
                <VStack spacing="3" flex="1" maxW="140px">
                  <Box
                    boxShadow={`0 8px 24px rgba(147, 178, 189, 0.3), 0 12px 48px rgba(147, 178, 189, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)`}
                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: "scale(1.1)" }}
                    h="70px" w="70px"
                    borderRadius="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="white"
                    mx="auto"
                  >
                    <IoWomanOutline color="#93B2BD" size="2.5em" />
                  </Box>
                  <Text fontSize="sm" textAlign="center" fontWeight="500" fontFamily="Poppins" lineHeight="1.3">
                    Saúde Feminina
                  </Text>
                </VStack>

                <VStack spacing="3" flex="1" maxW="140px">
                  <Box
                    boxShadow={`0 8px 24px rgba(147, 178, 189, 0.3), 0 12px 48px rgba(147, 178, 189, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)`}
                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: "scale(1.1)" }}
                    h="70px" w="70px"
                    borderRadius="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="white"
                    mx="auto"
                  >
                    <MdOutlineBloodtype color="#93B2BD" size="2.5em" />
                  </Box>
                  <Text fontSize="sm" textAlign="center" fontWeight="500" fontFamily="Poppins" lineHeight="1.3">
                    Diabetes
                  </Text>
                </VStack>
              </HStack>
              {/* Segunda linha */}
              <HStack mt="2" spacing="8" justifyContent="space-evenly" w="100%">

                <VStack spacing="3" flex="1" maxW="140px">
                  <Box
                    boxShadow={`0 8px 24px rgba(147, 178, 189, 0.3), 0 12px 48px rgba(147, 178, 189, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)`}
                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: "scale(1.1)" }}
                    h="70px" w="70px"
                    borderRadius="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="#93B2BD"
                    mx="auto"
                  >
                    <FaHeartPulse color="white" size="2.5em" />
                  </Box>
                  <Text fontSize="sm" textAlign="center" fontWeight="500" fontFamily="Poppins" lineHeight="1.3">
                    Emagrecimento Saudável
                  </Text>
                </VStack>

                <VStack spacing="3" flex="1" maxW="140px">
                  <Box
                    boxShadow={`0 8px 24px rgba(147, 178, 189, 0.3), 0 12px 48px rgba(147, 178, 189, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)`}
                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: "scale(1.1)" }}
                    h="70px" w="70px"
                    borderRadius="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="#93B2BD"
                    mx="auto"
                  >
                    <GiFruitBowl color="white" size="2.5em" />
                  </Box>
                  <Text fontSize="sm" textAlign="center" fontWeight="500" fontFamily="Poppins" lineHeight="1.3">
                    Saúde Gastrointestinal
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>

      {/* Seção Depoimentos */}
      <VStack  spacing="6" py="8">
        <Text textAlign="center" fontFamily="Poppins" fontSize="32px" fontWeight="700" textShadow="2px 2px 4px rgba(0,0,0,0.1)" color="#93b2bd">
          Depoimentos
        </Text>

        <Box
          id="depoimentos"
          w="100%"
          display="flex"
          justifyContent="center"
          bgColor="white"
          bgImage="url(/grid2.jpg)"
          px="4"
        >
          <VStack spacing="4" w="100%" maxW="400px">
            {/* Card de Classificação */}
            <VStack
              w="100%"
              p="4"
              borderRadius="md"
              justifyContent="center"
              textAlign="center"
              spacing={3}
            >
              <Text fontSize="18px" fontWeight="bold" color="gray.800">
                EXCELENTE
              </Text>

              <RatingGroup.Root
                colorPalette="yellow"
                readOnly
                count={5}
                defaultValue={5}
                size="md"
              >
                <RatingGroup.HiddenInput />
                <RatingGroup.Control />
              </RatingGroup.Root>

              <VStack spacing={0}>
                <Text fontSize="13px" fontWeight="600" color="gray.500">
                  Nutricionista em Chapecó,
                </Text>
                <Text fontSize="13px" fontWeight="600" color="gray.500">
                  Santa Catarina
                </Text>
              </VStack>

              <Image
                src="/googleIcon.png"
                alt="Google Ícone"
                w="30%"
                cursor="pointer"
              />
            </VStack>

            {/* Cards de Depoimentos */}
            {[
              {
                name: "Simone Pinheiro Soares",
                date: "2024-04-03",
                avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX4eB7AuqDIg4KaU4hkSET8RjUO1Y3NXYfw_eJRAGZUVUEzTq0=s64-c-rp-mo-br100",
                text: "Maravilhosa, excelente profissional, acolhedora, ética, com uma bagagem teórica e prática impecável, que faz toda a diferença seus manejos clínicos..."
              },
              {
                name: "Camila de Assis Galan",
                date: "2024-04-03",
                avatar: "https://lh3.googleusercontent.com/a/ACg8ocLUtE1VNnaRT8oMf_h-yq_-8VvZ4KQoTc6h97SSj5dKKhjqKw=s64-c-rp-mo-br100",
                text: "Nutri excelente! Super indico! 🥰🫶🏼"
              }
            ].map((testimonial, index) => (
              <VStack
                marginBottom="10px"
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
                spacing="3"
              >
                <HStack w="100%" spacing="3">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback name={testimonial.name} />
                    <Avatar.Image src={testimonial.avatar} />
                  </Avatar.Root>

                  <Stack spacing={0} flex="1">
                    <Text fontSize="14px" fontWeight="medium">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="12px" color="fg.muted">
                      {testimonial.date}
                    </Text>
                  </Stack>
                </HStack>

                <HStack w="100%" gap={1}>
                  <RatingGroup.Root
                    colorPalette="yellow"
                    readOnly
                    count={5}
                    defaultValue={5}
                    size="sm"
                  >
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                  </RatingGroup.Root>
                  <VscVerifiedFilled fontSize="14px" color="#2563eb" />
                </HStack>

                <Text fontSize="14px" textAlign="left" w="100%">
                  {testimonial.text}
                </Text>
              </VStack>
            ))}
          </VStack>
        </Box>
      </VStack>

      {/* Seção Localização */}
      <VStack spacing="6" py="8" px="4">
        <Text textAlign="center" fontFamily="Poppins" fontSize="32px" fontWeight="700" textShadow="2px 2px 4px rgba(0,0,0,0.1)" color="#93b2bd">
          Localização
        </Text>

        <Box id="local" w="100%" display="flex" alignItems="center" justifyContent="center">
          <AspectRatio w="95%" ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.732945534991!2d-52.61751729999999!3d-27.101715199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b42079a39e0d%3A0xedd01f5bcc6c3d69!2sNutricionista%20Ludiana%20Campos!5e0!3m2!1spt-BR!2sbr!4v1746400402989!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "8px" }}
            />
          </AspectRatio>
        </Box>
      </VStack>

      {/* Seção Redes Sociais */}
      <VStack spacing="6" py="8" px="4">
        <Text
          textAlign="center"
          fontFamily="Poppins"
          fontSize="32px"
          fontWeight="700"
          color="#93b2bd"
          textShadow="2px 2px 4px rgba(0,0,0,0.2)"
        >
          Redes Sociais
        </Text>

        <VStack spacing="4" w="100%">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/nutriludiana?igsh=MWQ0Zmg2cTV4M2lrZg=="
            target="_blank"
            _hover={{ textDecoration: "none" }}
            aria-label="Instagram"
            w="100%"
          >
            <Flex
              direction="row"
              alignItems="center"
              p="6"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              w="100%"
              justifyContent="flex-start"
              gap="4"
            >
              <FaInstagram color="#93B2BD" size="2em" />
              <VStack align="start" spacing="1">
                <Text fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="lg">
                  Instagram
                </Text>
                <Text fontFamily="Poppins" color="#93b2bd" opacity="0.8" fontSize="sm">
                  Siga nosso perfil e acompanhe as novidades
                </Text>
              </VStack>
            </Flex>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/5549998235398?text=Olá%20Ludiana,%20gostaria%20de%20conversar%20sobre%20nutrição."
            target="_blank"
            _hover={{ textDecoration: "none" }}
            aria-label="WhatsApp"
            w="100%"
          >
            <Flex
              direction="row"
              alignItems="center"
              p="6"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              w="100%"
              justifyContent="flex-start"
              gap="4"
            >
              <FaWhatsapp color="#93B2BD" size="2em" />
              <VStack align="start" spacing="1">
                <Text fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="lg">
                  WhatsApp
                </Text>
                <Text fontFamily="Poppins" color="#93b2bd" opacity="0.8" fontSize="sm">
                  Fale diretamente comigo e tire suas dúvidas
                </Text>
              </VStack>
            </Flex>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/share/1GRdgdEPzt/"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            aria-label="Facebook"
            w="100%"
          >
            <Flex
              direction="row"
              alignItems="center"
              p="6"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.02)",
                backgroundColor: "cyan.50",
              }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              w="100%"
              justifyContent="flex-start"
              gap="4"
            >
              <FaFacebook color="#93B2BD" size="2em" />
              <VStack align="start" spacing="1">
                <Text fontFamily="Poppins" fontWeight="600" color="#93b2bd" fontSize="lg">
                  Facebook
                </Text>
                <Text fontFamily="Poppins" color="#93b2bd" opacity="0.8" fontSize="sm">
                  Curta minha página e fique por dentro das dicas
                </Text>
              </VStack>
            </Flex>
          </Link>
        </VStack>
      </VStack>

      {/* Botão flutuante WhatsApp */}
      <Float
        offsetX="5%"
        offsetY="10"
        zIndex={100}
        position={"fixed"}
        placement={"bottom-end"}
        style={{
          animation: "pulse 5s infinite ease-in-out",
        }}
      >
        <Link 
          href="https://wa.me/5549998235398?text=Olá%20Ludiana,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional."
          target="_blank"
          _hover={{ textDecoration: "none" }}
        >
          <HStack
            _hover={{
              bgColor: "#3F4971",
              scale: 1.05,
            }}
            style={{
              transition: "0.8s all",
            }}
            justifyContent={"center"}
            bgColor="#93B2BD"
            p="2"
            borderRadius="50px"
            fontSize="sm"
          >
            <FaWhatsapp size="1.2em" color="white" />
            <Text
              fontWeight={"bold"}
              color="white"
              fontSize="sm"
            >
              Consulta
            </Text>
          </HStack>
        </Link>
      </Float>

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
}