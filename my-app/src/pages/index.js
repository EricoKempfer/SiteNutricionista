import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SEO from "../components/SEO";
import DesktopLayout from "../components/layouts/DesktopLayout";

// Mobile layout loaded only when needed (code splitting)
const MobileLayout = dynamic(() => import("../components/layouts/MobileLayout"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  // Default to false (desktop) so SSR always renders full content for Googlebot
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Set initial width on client
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box>
      <SEO />
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </Box>
  );
}
