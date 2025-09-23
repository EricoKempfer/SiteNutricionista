import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import HomeMobile from "./homeMobile";
import HomePc from "./homePc";
import SEO from "../components/SEO";

export default function Demo() {
  const router = useRouter()
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // If screen width is not available yet, return null to avoid hydration issues
  if (screenWidth === null) {
    return null
  }

  return (
    <Box>
      <SEO />
      {screenWidth < 1200 ? (
        <HomeMobile/>
      ) : (
        <HomePc />
      )}
    </Box>
  );
} 