import { Box, VStack, HStack, Text, Button, Link, Image } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { WHATSAPP_LINK, SOCIAL_LINKS, SITE_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";
import NextLink from "next/link";

export default function PageLayout({ children }) {
  return (
    <Box as="main" bgColor="#ffffff" w="100%" minH="100vh" fontFamily="var(--font-poppins), Poppins, sans-serif">
      {/* Header */}
      <Box as="header" p="3" w="100%" position="sticky" top="0" zIndex="999" bg="white" boxShadow="xs">
        <HStack justifyContent="space-between" w="100%" maxW="1200px" mx="auto">
          <NextLink href="/" passHref legacyBehavior>
            <Link _hover={{ textDecoration: "none" }}>
              <Image h="40px" src="/logonutr.webp" alt="Logo Nutricionista Ludiana Campos" loading="eager" />
            </Link>
          </NextLink>
          <HStack gap="4" display={{ base: "none", md: "flex" }}>
            <NextLink href="/" passHref legacyBehavior>
              <Link fontSize="sm" color="#5C637C" _hover={{ color: "#93B2BD" }}>Início</Link>
            </NextLink>
            <NextLink href="/emagrecimento-chapeco" passHref legacyBehavior>
              <Link fontSize="sm" color="#5C637C" _hover={{ color: "#93B2BD" }}>Emagrecimento</Link>
            </NextLink>
            <NextLink href="/diabetes-chapeco" passHref legacyBehavior>
              <Link fontSize="sm" color="#5C637C" _hover={{ color: "#93B2BD" }}>Diabetes</Link>
            </NextLink>
            <NextLink href="/saude-feminina-chapeco" passHref legacyBehavior>
              <Link fontSize="sm" color="#5C637C" _hover={{ color: "#93B2BD" }}>Saúde Feminina</Link>
            </NextLink>
            <NextLink href="/blog" passHref legacyBehavior>
              <Link fontSize="sm" color="#5C637C" _hover={{ color: "#93B2BD" }}>Blog</Link>
            </NextLink>
          </HStack>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick}>
            <Button
              variant="outline"
              color="#93B2BD"
              borderColor="#93B2BD"
              borderRadius="50px"
              size="sm"
              _hover={{ bgColor: "#93B2BD", color: "white", transition: "0.3s all" }}
            >
              Agende sua Consulta
            </Button>
          </Link>
        </HStack>
      </Box>

      {/* Content */}
      <Box maxW="900px" mx="auto" px={{ base: "4", md: "6" }} py="8">
        {children}
      </Box>

      {/* CTA Section */}
      <Box bg="#E9EEF2" py="12" textAlign="center">
        <VStack gap="4" maxW="600px" mx="auto" px="4">
          <Text fontFamily="Poppins" fontSize={{ base: "22px", md: "28px" }} fontWeight="700" color="cyan.900">
            Agende sua Consulta Nutricional
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" color="#5C637C">
            Atendimento presencial em Chapecó/SC ou on-line para todo o Brasil. Plano alimentar 100% personalizado.
          </Text>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} onClick={trackWhatsAppClick}>
            <Button
              size="lg"
              bgColor="#93B2BD"
              color="white"
              borderRadius="50px"
              px="8"
              fontWeight="bold"
              _hover={{ bgColor: "#3F4971", transform: "scale(1.05)" }}
              transition="all 0.3s"
            >
              <FaWhatsapp size="1.2em" /> &nbsp; Falar pelo WhatsApp
            </Button>
          </Link>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="cyan.900" color="white" py="10" px="4">
        <VStack maxW="1000px" mx="auto" gap="6">
          <HStack gap="8" flexWrap="wrap" justifyContent="center">
            <VStack align="start" gap="2">
              <Text fontWeight="700" fontSize="lg">Especialidades</Text>
              <NextLink href="/emagrecimento-chapeco" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Emagrecimento Saudável</Link>
              </NextLink>
              <NextLink href="/diabetes-chapeco" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Controle de Diabetes</Link>
              </NextLink>
              <NextLink href="/saude-feminina-chapeco" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Saúde Feminina</Link>
              </NextLink>
              <NextLink href="/consulta-online" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Consulta On-line</Link>
              </NextLink>
            </VStack>
            <VStack align="start" gap="2">
              <Text fontWeight="700" fontSize="lg">Blog</Text>
              <NextLink href="/blog/como-emagrecer-de-forma-saudavel" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Como Emagrecer</Link>
              </NextLink>
              <NextLink href="/blog/alimentacao-para-diabetes-tipo-2" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Alimentação e Diabetes</Link>
              </NextLink>
              <NextLink href="/blog/nutricao-saude-feminina" passHref legacyBehavior>
                <Link fontSize="sm" color="gray.300" _hover={{ color: "white" }}>Nutrição Feminina</Link>
              </NextLink>
            </VStack>
            <VStack align="start" gap="2">
              <Text fontWeight="700" fontSize="lg">Contato</Text>
              <Text fontSize="sm" color="gray.300">(49) 99823-5398</Text>
              <Text fontSize="sm" color="gray.300">Chapecó, Santa Catarina</Text>
              <HStack gap="3" mt="1">
                <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size="1.3em" /></Link>
                <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size="1.3em" /></Link>
                <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size="1.3em" /></Link>
              </HStack>
            </VStack>
          </HStack>
          <Box w="100%" h="1px" bg="cyan.700" />
          <Text fontSize="xs" color="gray.400" textAlign="center">
            © {new Date().getFullYear()} Nutricionista Ludiana Campos – CRN 10 9645 – Chapecó, SC. Todos os direitos reservados.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
