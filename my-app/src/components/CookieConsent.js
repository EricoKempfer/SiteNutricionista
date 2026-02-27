import { useState, useEffect } from "react";
import { Box, HStack, Text, Button, Link } from "@chakra-ui/react";

const CONSENT_KEY = "lgpd_cookie_consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already gave consent
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay to not block initial render
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setShowBanner(false);
    // Disable GA tracking
    if (typeof window !== "undefined") {
      window["ga-disable-G-92GX47LHHY"] = true;
    }
  };

  if (!showBanner) return null;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white"
      borderTopWidth="1px"
      borderColor="gray.200"
      boxShadow="0 -4px 20px rgba(0,0,0,0.1)"
      zIndex={9999}
      px={{ base: "4", md: "8" }}
      py="4"
    >
      <HStack
        maxW="1200px"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap="4"
      >
        <Text fontFamily="var(--font-poppins), Poppins, sans-serif" fontSize="14px" color="gray.700" maxW="700px">
          Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência e analisar o tráfego do site.
          Ao continuar navegando, você concorda com nossa{" "}
          <Link href="/politica-de-privacidade" color="#93B2BD" fontWeight="600" textDecoration="underline">
            Política de Privacidade
          </Link>{" "}
          conforme a LGPD (Lei 13.709/2018).
        </Text>
        <HStack gap="3" flexShrink={0}>
          <Button
            size="sm"
            variant="outline"
            borderColor="gray.300"
            color="gray.600"
            fontFamily="var(--font-poppins), Poppins, sans-serif"
            fontWeight="600"
            borderRadius="full"
            px="5"
            onClick={handleReject}
            _hover={{ bg: "gray.50" }}
          >
            Recusar
          </Button>
          <Button
            size="sm"
            bgColor="#93B2BD"
            color="white"
            fontFamily="var(--font-poppins), Poppins, sans-serif"
            fontWeight="600"
            borderRadius="full"
            px="5"
            onClick={handleAccept}
            _hover={{ bgColor: "#3F4971" }}
          >
            Aceitar Cookies
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
