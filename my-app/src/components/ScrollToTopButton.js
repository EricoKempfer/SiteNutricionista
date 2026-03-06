import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const MotionBox = motion.create(Box);

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          as="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex={998}
          w="50px"
          h="50px"
          borderRadius="50%"
          bg="#93B2BD"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 4px 15px rgba(147, 178, 189, 0.5)"
          cursor="pointer"
          border="none"
          _hover={{ bg: "#3F4971", transform: "scale(1.1)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <FaArrowUp size="1.2em" />
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
