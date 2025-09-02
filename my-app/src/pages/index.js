import { Box, HStack, Text, Separator, Float, Image, Button, VStack, Center } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
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

export default function Home() {
  const router = useRouter()


  const handleScroll = (sectionId) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box bgColor="#ffffff" w='100%' minH="100vh" >
      <Float
        offsetX="8%"
        offsetY="10"
        zIndex={100}
        position={"fixed"}
        placement={"bottom-end"}
        style={{
          animation: "pulse 5s infinite ease-in-out",
        }}
      >
        <HStack
          _hover={{
            bgColor: "#3F4971",
            scale: 1.10,
          }}
          style={{
            transition: "0.8s all",
          }}
          justifyContent={"space-between"}
          bgColor="#93B2BD"
          p="3"
          borderRadius="50px"
        >
          <FaWhatsapp size="1.5em" color="white" mr="10%" />
          <Text
            fontWeight={"bold"}
            color="white"
          >
            Agende sua Consulta
          </Text>
        </HStack>
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
      <HStack
        p="3"
        w="100%"
        justifyContent={"space-between"}
        position="sticky"
        top="0"
        zIndex="999"
        bg="white"
        boxShadow="xs"
      >

        <HStack display="flex" alignItems={"center"} justifyContent={"center"} >
          <Image
            ml="2%"
            h="40px"
            src="/logonutr.jpg"
            alt="Loading..."
          />
          {/* <FaInstagram color="#93B2BD" size="1.5em" />
          <FaWhatsapp color="#93B2BD" size="1.5em" />
          <FaFacebook color="#93B2BD" size="1.5em" /> */}
        </HStack>
        <HStack>
          <Text cursor="pointer" onClick={() => handleScroll('inicio')}>Início</Text>
          <Separator orientation="vertical" height="4" />
          <Text cursor="pointer" onClick={() => handleScroll('sobre-mim')}>Sobre Mim</Text>
          <Separator orientation="vertical" height="4" />
          <Text cursor="pointer" onClick={() => handleScroll('especialidades')}>Especialidades</Text>
          <Separator orientation="vertical" height="4" />
          <Text cursor="pointer" onClick={() => handleScroll('depoimentos')}>Depoimentos</Text>
          <Separator orientation="vertical" height="4" />
          <Text cursor="pointer" onClick={() => handleScroll('local')}>Local</Text>
        </HStack>
        <HStack>
          {/* <FaInstagram color="#93B2BD" size="1.5em" />
            <FaWhatsapp color="#93B2BD" size="1.5em" />
            <FaFacebook color="#93B2BD" size="1.5em" /> */}
          <Button variant={"subtle"} color={"#93B2BD"} borderRadius="50px" bgColor={"transparent"} borderColor={"#93B2BD"}
            _hover={{
              bgColor: "#93B2BD",
              color: "white",
              transition: "0.3s all"
            }}
          >
            Agende sua Consulta
          </Button>
        </HStack>
      </HStack>
      <VStack
        w="100%" h="460px" display="flex" justifyContent="center" alignItems="start" bgColor={"#e4e4e4"}
        bgImage={"url(/BannerNutricionista.jpg)"}
        bgSize="100% 100%"
      >
        <VStack
          w="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          gap={"0px"}
        >
          <Text fontFamily={"Poppins"} fontSize={"52px"} mb="0" fontWeight={"300"} color={"cyan.900"} textShadow="2px 2px 4px rgba(0,0,0,0.2)">Nutricionista</Text>
          <Text fontFamily={"Poppins"} fontSize={"52px"} fontWeight={"700"} color={"cyan.900"} textShadow="2px 2px 4px rgba(0,0,0,0.2)">Ludiana Campos</Text>
          <Text mt="3%" fontFamily={"Poppins"} fontSize={"20px"} mb="0" fontWeight={"500"} color={"cyan.800"}>
            Conquiste mais saúde através da alimentação!
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"20px"} mb="0" fontWeight={"500"} color={"cyan.800"}>
            Foco em: Emagrecimento, Diabetes e Saúde Feminina </Text>
          <Text mt="3%" color={"cyan.800"} fontSize={"20px"}>CRN: 10 9645</Text>
        </VStack>
      </VStack>
      <HStack id="sobre-mim" mt="2%" mb="2%" w="100%" h="60vh" display="flex" alignItems={"center"} justifyContent={"center"} >
        <Image
          h="100%"
          src="/nutriciSobreMim3.jpg"
          borderRadius="35% 65% 35% 65% / 35% 65% 35% 65% "
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

        <Box
          w="50%"
          ml="5%"
          display="flex"
          justifyContent="center"
          alignItems="end"
          h="100%"
          gap={"0px"}>
          <VStack
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="start"
            h="100%"
            gap={"0px"}>
            <Text fontFamily={"Poppins"} fontSize={"52px"} mb="0" fontWeight={"600"} textShadow="2px 2px 4px rgba(0,0,0,0.1)" color={"#93b2bd"}>Sobre Mim</Text>
            <Box
              w="45%"
              h="2px"
              mt="0" mb="3%"
              bg="#93b2bd"
              boxShadow="0 4px 10px rgba(147, 178, 189 0.2)"
              borderRadius="md"

            />
            <Text fontFamily={"Poppins"} fontSize={"18px"} mb="0" fontWeight={"500"} color={"#5C637C"} >
              Como nutricionista clínica trabalho com a prevenção
            </Text>
            <Text fontFamily={"Poppins"} fontSize={"18px"} mb="0" fontWeight={"500"} color={"#5C637C"} >
              e promoção à saúde por meio da alimentação saudável,
            </Text>
            <Text fontFamily={"Poppins"} fontSize={"18px"} mb="0" fontWeight={"500"} color={"#5C637C"} >
              com foco no controle do diabetes, emagrecimento saudável e saúde feminina.
            </Text>
            <Text mt="2%" fontFamily={"Poppins"} fontSize={"18px"} mb="0" fontWeight={"500"} color={"#5C637C"} >
              Vamos encontrar juntos a melhor maneira para você conquistar mais saúde através da alimentação, de uma forma simples e prática, atingindo seus objetivos e respeitando seus gostos alimentares!            </Text>
          </VStack>
        </Box>
      </HStack>
      <Box id="especialidades" w="100%" h="40vh" display="flex" justifyContent={"center"} bgGradient="to-r" gradientFrom="#E9EEF2" gradientTo="#F8F9FB" >
        <VStack display="flex" w="100%" justifyContent={"center"} alignItems={"center"} >
          <Box h="10vh" display="flex" justifyContent={"center"} alignItems={"center"} w="100%" >
            <Text fontFamily={"Poppins"} fontSize={"42px"} fontWeight={"700"} textShadow="2px 2px 4px rgba(0,0,0,0.1)" color={"#93b2bd"}>Especialidades</Text>
          </Box>
          <HStack h="30vh" w="80%" justifyContent={"space-between"}>
            {/* <VStack display="flex" justifyContent={"center"} alignItems={"center"} >
              <Box boxShadow={`
        0 8px 24px rgba(147, 178, 189, 0.3),
        0 12px 48px rgba(147, 178, 189, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.1)
        `}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "scale(1.1)",
                }} h="80px" w="80px" borderRadius={"50px"} display="flex" justifyContent={"center"} alignItems={"center"} bgColor="#93B2BD">
                <LuSalad color="white" size="3em" />
              </Box>
              <Text>Alimentação Saudável</Text>
            </VStack> */}
            <VStack display="flex" justifyContent={"center"} alignItems={"center"} >
              <Box boxShadow={`
        0 8px 24px rgba(147, 178, 189, 0.3),
        0 12px 48px rgba(147, 178, 189, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.1)
        `}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "scale(1.1)",
                }} h="80px" w="80px" borderRadius={"50px"} display="flex" justifyContent={"center"} alignItems={"center"} bgColor="white">
                <MdOutlineBloodtype color="#93B2BD" size="3em" />
              </Box>
              <Text >Diabetes</Text>
            </VStack>
            <VStack display="flex" justifyContent={"center"} alignItems={"center"} >
              <Box boxShadow={`
        0 8px 24px rgba(147, 178, 189, 0.3),
        0 12px 48px rgba(147, 178, 189, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.1)
        `}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                pt="2%"
                _hover={{
                  transform: "scale(1.1)",
                }} h="80px" w="80px" borderRadius={"50px"} display="flex" justifyContent={"center"} alignItems={"center"} bgColor="#93B2BD">
                <FaHeartPulse color="white" size="3em" />
              </Box>
              <Text>Emagrecimento Saudável</Text>
            </VStack>
            <VStack display="flex" justifyContent={"center"} alignItems={"center"} >
              <Box boxShadow={`
        0 8px 24px rgba(147, 178, 189, 0.3),
        0 12px 48px rgba(147, 178, 189, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.1)
        `}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "scale(1.1)",
                }} h="80px" w="80px" borderRadius={"50px"} display="flex" justifyContent={"center"} alignItems={"center"} bgColor="white">
                <IoWomanOutline color="#93B2BD" size="3em" />
              </Box>
              <Text>Saúde Feminina</Text>
            </VStack>
            <VStack display="flex" justifyContent={"center"} alignItems={"center"} >
              <Box boxShadow={`
        0 8px 24px rgba(147, 178, 189, 0.3),
        0 12px 48px rgba(147, 178, 189, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.1)
        `}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "scale(1.1)",
                }} h="80px" w="80px" borderRadius={"50px"} display="flex" justifyContent={"center"} alignItems={"center"} bgColor="#93B2BD">
                <GiFruitBowl color="white" size="3em" />
              </Box>
              <Text>Saúde Gastrointestinal</Text>
            </VStack>
            {/* <VStack display="flex" justifyContent={"center"} alignItems={"center"} >
              <Box boxShadow={`
        0 8px 24px rgba(147, 178, 189, 0.3),
        0 12px 48px rgba(147, 178, 189, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.1)
        `}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "scale(1.1)",
                }} h="80px" w="80px" borderRadius={"50px"} display="flex" justifyContent={"center"} alignItems={"center"} bgColor="white">
                <MdOutlineBloodtype color="#93B2BD" size="3em" />
              </Box>
              <Text >Diabetes</Text>
            </VStack> */}
            
          </HStack>
        </VStack>
      </Box>
      <Text textAlign={"center"} mt="2%" fontFamily={"Poppins"} fontSize={"42px"} fontWeight={"700"} textShadow="2px 2px 4px rgba(0,0,0,0.1)" color={"#93b2bd"}>Depoimentos</Text>

      <Box
        id="depoimentos"
        mt="0.5%"
        w="100%"
        py={8}
        display="flex"
        justifyContent="center"
        bgColor="white"
        bgImage="url(
/grid2.jpg

)"
      >
        <HStack
          gap={{ base: 6, md: 4 }}
          w="100%"
          maxW="1200px"
          flexWrap="wrap"
          justifyContent="center"
          px={{ base: 4, md: 0 }}
        >
          {/* Card de Classificação */}
          <VStack
            w={{ base: "100%", md: "48%", lg: "23%" }}
            minH={{ base: "auto", md: "35vh", lg: "40vh" }}
            p={{ base: 4, md: 4 }}
            borderRadius="md"
            transition="0.3s"
            justifyContent="center"
            textAlign="center"
            spacing={3}
          >
            <Text
              fontSize={{ base: "18px", md: "20px" }}
              fontWeight="bold"
              color="gray.800"
            >
              EXCELENTE
            </Text>

            <RatingGroup.Root
              colorPalette="yellow"
              readOnly
              count={5}
              defaultValue={5}
              size={{ base: "md", md: "lg" }}
            >
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>

            <VStack spacing={0}>
              <Text
                fontSize={{ base: "13px", md: "14px" }}
                fontWeight="600"
                color="gray.500"
              >
                Nutricionista em Chapecó,
              </Text>
              <Text
                fontSize={{ base: "13px", md: "14px" }}
                fontWeight="600"
                color="gray.500"
              >
                Santa Catarina
              </Text>
            </VStack>

            <Image
              src="/googleIcon.png"
              alt="Google Ícone"
              w={{ base: "40%", md: "35%" }}
              cursor="pointer"
              onClick={() => router.push('https://www.google.com/...')}
            />
          </VStack>

          {/* Cards de Depoimentos */}
          {[
            {
              name: "Simone Pinheiro Soares",
              date: "2024-04-03",
              avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX4eB7AuqDIg4KaU4hkSET8RjUO1Y3NXYfw_eJRAGZUVUEzTq0=s64-c-rp-mo-br100",
              text: "Maravilhosa, excelente profissional, acolhedora, ética, com uma bagagem teórica e prática impecável, que faz toda a diferença seus manejos clínicos...",
              link: "https://maps.app.goo.gl/ZE2NeFxhj2q5w8Ad8"
            },
            {
              name: "Camila de Assis Galan",
              date: "2024-04-03",
              avatar: "https://lh3.googleusercontent.com/a/ACg8ocLUtE1VNnaRT8oMf_h-yq_-8VvZ4KQoTc6h97SSj5dKKhjqKw=s64-c-rp-mo-br100",
              text: "Nutri excelente! Super indico! 🥰🫶🏼"
            },
            {
              name: "Simone Pinheiro Soares",
              date: "2024-04-03",
              avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX4eB7AuqDIg4KaU4hkSET8RjUO1Y3NXYfw_eJRAGZUVUEzTq0=s64-c-rp-mo-br100",
              text: "Maravilhosa, excelente profissional, acolhedora, ética, com uma bagagem teórica e prática impecável, que faz toda a diferença seus manejos clínicos...",
              link: "https://maps.app.goo.gl/ZE2NeFxhj2q5w8Ad8"
            }
          ].map((testimonial, index) => (
            <VStack
              key={index}
              w={{ base: "100%", md: "48%", lg: "23%" }}
              minH={{ base: "auto", md: "35vh", lg: "40vh" }}
              maxH={{ base: "auto", md: "35vh", lg: "40vh" }}
              p={{ base: 4, md: 4 }}
              borderWidth={"1.5px"}
              borderColor="gray.200"
              borderRadius="md"
              boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"}
              bg="gray.100"
              _hover={{ bg: "gray.200" }}
              transition="0.3s"
              justifyContent="space-between"
            >
              <Box w="100%">
                <HStack gap={{ base: 3, md: 4 }}>
                  <Avatar.Root size={{ base: "sm", md: "md" }}>
                    <Avatar.Fallback name={testimonial.name} />
                    <Avatar.Image src={testimonial.avatar} />
                  </Avatar.Root>

                  <Stack spacing={0}>
                    <Text
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight="medium"
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize={{ base: "12px", md: "14px" }}
                      color="fg.muted"
                    >
                      {testimonial.date}
                    </Text>
                  </Stack>
                </HStack>

                <HStack mt={2} gap={1}>
                  <RatingGroup.Root
                    justifyContent="start"
                    colorPalette="yellow"
                    readOnly
                    count={5}
                    defaultValue={5}
                    size={{ base: "sm", md: "md" }}
                  >
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                  </RatingGroup.Root>
                  <VscVerifiedFilled fontSize={{ base: "14px", md: "16px" }} color="#2563eb" />
                </HStack>

                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  noOfLines={{ base: 3, md: 4 }}
                  mt={3}
                >
                  {testimonial.text}
                </Text>
              </Box>

              {testimonial.link && (
                <Text
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight="600"
                  color="gray.500"
                  cursor="pointer"
                  mt={{ base: 2, md: 3 }}
                  onClick={() => router.push(testimonial.link)}
                >
                  Consulte Mais Informações
                </Text>
              )}
            </VStack>
          ))}
        </HStack>
      </Box>
      <Text mt="1%" textAlign={"center"} fontFamily={"Poppins"} fontSize={"42px"} fontWeight={"700"} textShadow="2px 2px 4px rgba(0,0,0,0.1)" color={"#93b2bd"}>Localização</Text>
      <Box id="local" mt="1%" display="flex" alignItems={"center"} justifyContent={"center"} w="100%">
        <AspectRatio maxH="460px" display="flex" alignItems={"center"} justifyContent={"center"} w="80%" ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.732945534991!2d-52.61751729999999!3d-27.101715199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b42079a39e0d%3A0xedd01f5bcc6c3d69!2sNutricionista%20Ludiana%20Campos!5e0!3m2!1spt-BR!2sbr!4v1746400402989!5m2!1spt-BR!2sbr" size="sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </AspectRatio>
      </Box>
      <Text

        textAlign="center"
        fontFamily="Poppins"
        fontSize="42px"
        fontWeight="700"
        mt="1%"
        color="#93b2bd"
        textShadow="2px 2px 4px rgba(0,0,0,0.2)"
      >
        Redes Sociais
      </Text>
      <Box p="4" pb="8" >

        <Flex
          justifyContent="space-around"
          alignItems="center"

          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 0 }}
        >
          {/* Instagram Box */}
          <Link
            href="https://instagram.com"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            aria-label="Instagram"
          >
            <Flex
              direction="column"
              alignItems="center"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              width={{ base: "120vw", md: "375px" }}
              height="200px"
              justifyContent="center"
            >
              <FaInstagram color="#93B2BD" size="2.5em" />
              <Text
                mt={4}
                fontFamily="Poppins"
                fontWeight="600"
                color="#93b2bd"
                fontSize="xl"
              >
                Instagram
              </Text>
              <Text
                mt={2}
                fontFamily="Poppins"
                color="#93b2bd"
                opacity="0.8"
                textAlign="center"
                fontSize="sm"
              >
                Siga nosso perfil e acompanhe as novidades
              </Text>
            </Flex>
          </Link>

          {/* WhatsApp Box */}
          <Link
            href="https://wa.me"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            aria-label="WhatsApp"
          >
            <Flex
              direction="column"
              alignItems="center"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              width={{ base: "120vw", md: "375px" }}

              height="200px"
              justifyContent="center"
            >
              <FaWhatsapp color="#93B2BD" size="2.5em" />
              <Text
                mt={4}
                fontFamily="Poppins"
                fontWeight="600"
                color="#93b2bd"
                fontSize="xl"
              >
                WhatsApp
              </Text>
              <Text
                mt={2}
                fontFamily="Poppins"
                color="#93b2bd"
                opacity="0.8"
                textAlign="center"
                fontSize="sm"
              >
                Fale diretamente comigo e tire suas dúvidas
              </Text>
            </Flex>
          </Link>

          {/* Facebook Box */}
          <Link
            href="https://facebook.com"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            aria-label="Facebook"
          >
            <Flex
              direction="column"
              alignItems="center"
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{

                backgroundColor: "cyan.50",
              }}
              transition="all 0.3s ease"
              bg="white"
              cursor="pointer"
              width={{ base: "120vw", md: "375px" }}

              height="200px"
              justifyContent="center"
            >
              <FaFacebook color="#93B2BD" size="2.5em" />
              <Text
                mt={4}
                fontFamily="Poppins"
                fontWeight="600"
                color="#93b2bd"
                fontSize="xl"
              >
                Facebook
              </Text>
              <Text
                mt={2}
                fontFamily="Poppins"
                color="#93b2bd"
                opacity="0.8"
                textAlign="center"
                fontSize="sm"
              >
                Curta minha página e fique por dentro das dicas
              </Text>
            </Flex>
          </Link>
        </Flex>

      </Box>
    </Box>
  );
}
