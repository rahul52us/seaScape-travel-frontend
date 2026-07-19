// Slide3.jsx – fixed mobile header and layout overlapping issues
import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Container,
  HStack,
  Icon,
  Flex,
  IconButton,
} from "@chakra-ui/react";

// ─── Icons ─────────────────────────────────────────────────
const HeartIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Icon>
);

const GrowIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
    <path d="M12 6a6 6 0 0 1 6 6" />
    <path d="M12 8a4 4 0 0 1 4 4" />
    <path d="M12 10a2 2 0 0 1 2 2" />
  </Icon>
);

const GlobeIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Icon>
);

const MenuIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </Icon>
);

// ─── Component ────────────────────────────────────────────
const Slide3 = () => {
  const maroonColor = "#7B1035";

  const features = [
    { icon: HeartIcon, label: "Connect", subtitle: "Meet inspiring women." },
    { icon: GrowIcon, label: "Grow", subtitle: "Travel with purpose." },
    { icon: GlobeIcon, label: "Explore", subtitle: "Discover destinations differently." },
  ];

  return (
    <Box
      position="relative"
      height={{ base: "100svh", md: "100vh" }}
      minHeight={{ base: "100svh", md: "100vh" }}
      w="100%"
      bg="#F5F1EC"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      {/* Background Image & Overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="url('https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926678/Travel_4_r3dqby.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.8)"
        zIndex={0}
      />
      <Box
  position="absolute"
  inset={0}
  bgGradient="linear(to-r, rgba(158, 147, 147, 0.95) 0%, rgba(209, 213, 219, 0.7) 45%, rgba(107, 114, 128, 0.35) 100%)"
  zIndex={1}
/>

      {/* ─── NEW FIXED HEADER LAYER ─────────────────────────── */}
      <Box position="relative" zIndex={4} w="100%">
        {/* Top Announcement Ribbon */}
        <Box bg={maroonColor} py={2} textTransform="uppercase" textAlign="center">
          <Text
            fontFamily="'Inter', sans-serif"
            fontWeight="600"
            fontSize="0.65rem"
            color="#FFFFFF"
            letterSpacing="0.2em"
          >
            ✦ Travel. Connect. Grow ✦
          </Text>
        </Box>

        {/* Navigation Bar */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px={{ base: 6, md: 12, lg: 16 }}
          py={4}
        >

          {/* Hamburger Menu Icon */}
          {/* <IconButton
            aria-label="Open Menu"
            icon={<MenuIcon w="24px" h="24px" />}
            variant="unstyled"
            color="#1a1a1a"
            display="flex"
            alignItems="center"
            justifyContent="center"
            minW="auto"
            _hover={{ color: maroonColor }}
          /> */}
        </Flex>
      </Box>

      {/* Main Content – dynamically layouted below header */}
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={2}
        px={{ base: 6, md: 12, lg: 16 }}
        py={{ base: 2, md: 6 }}
      >
        <Container maxW="container.xl" px={0}>
          <Box
            maxW={{ base: "100%", lg: "480px" }}
            bg={{ base: "rgba(245, 241, 236, 0.92)", lg: "transparent" }}
            backdropFilter={{ base: "blur(10px)", lg: "none" }}
            p={{ base: 6, md: 8, lg: 0 }}
            borderRadius={{ base: "xl", lg: "none" }}
            boxShadow={{ base: "0 20px 70px rgba(0,0,0,0.12)", lg: "none" }}
            mb={{ base: 4, md: 0 }}
          >
            <VStack align="flex-start" spacing={0} maxW="480px">
              {/* Desktop-only secondary tag line (Hidden on mobile to avoid duplication) */}
              <Text
                display={{ base: "none", lg: "block" }}
                fontFamily="'Inter', sans-serif"
                fontWeight="400"
                fontSize="0.7rem"
                color={maroonColor}
                letterSpacing="0.15em"
                textTransform="uppercase"
                mb="16px"
              >
                Travel. Connect. Grow.
              </Text>

              <Text
                fontFamily="'Playfair Display', serif"
                fontWeight="400"
                fontSize={{ base: "2rem", sm: "2.5rem", md: "3.2rem", lg: "3.4rem" }}
                lineHeight="1.15"
                color="#1a1a1a"
              >
                Travel{" "}
                <Text as="span" fontStyle="italic" color={maroonColor}>
                  Beyond
                </Text>
                <br />
                Destinations.
              </Text>

              <Text
                fontFamily="'Inter', sans-serif"
                fontWeight="400"
                fontSize={{ base: "0.88rem", md: "0.95rem" }}
                color="#444444"
                lineHeight="1.6"
                mt={{ base: 4, md: 6 }}
                maxW="420px"
                letterSpacing="0.01em"
              >
                We believe every journey should leave you with more than photographs. It should leave you with confidence, friendships and memories that stay for life.
              </Text>

              <HStack spacing="14px" mt={{ base: 5, md: 7 }} flexWrap="wrap">
                <Button
                  as="a"
                  href="#"
                  bg={maroonColor}
                  color="#FFFFFF"
                  fontSize="0.82rem"
                  fontWeight="400"
                  fontFamily="'Inter', sans-serif"
                  letterSpacing="0.04em"
                  px={7}
                  py={3}
                  height="auto"
                  borderRadius="6px"
                  transition="all 0.25s ease"
                  _hover={{
                    bg: "#6A0E2D",
                    transform: "translateY(-1px)",
                    boxShadow: "0 6px 20px rgba(123, 16, 53, 0.25)",
                  }}
                >
                  Join SHEscapes
                </Button>
                <Button
                  as="a"
                  href="#"
                  bg="transparent"
                  color="#333333"
                  fontSize="0.82rem"
                  fontWeight="400"
                  fontFamily="'Inter', sans-serif"
                  letterSpacing="0.04em"
                  px={7}
                  py={3}
                  height="auto"
                  borderRadius="6px"
                  border="1.5px solid"
                  borderColor="rgba(0,0,0,0.15)"
                  transition="all 0.25s ease"
                  _hover={{
                    borderColor: maroonColor,
                    color: maroonColor,
                  }}
                >
                  Explore Experiences
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* Bottom Feature Bar */}
      <Box
        position="relative"
        zIndex={3}
        px={{ base: 4, md: 8, lg: 20 }}
        pb={{ base: 6, md: 8 }}          // ← more bottom padding so cards aren't cut
        pt={{ base: 2, md: 4 }}          // ← small top padding for breathing room
        flexShrink={0}
      >
        <Flex
          gap={{ base: "12px", md: "16px" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          {features.map(({ icon: IconComponent, label, subtitle }) => (
            <HStack
              key={label}
              flex={{ base: "1 1 45%", md: "1" }}   // ← slightly wider on mobile
              minW={{ base: "130px", md: "auto" }}
              maxW={{ base: "100%", md: "none" }}
              spacing="12px"
              align="flex-start"
              bg="rgba(255, 255, 255, 0.98)"
              backdropFilter="blur(16px)"
              borderRadius="12px"                    // ← rounded on ALL corners (not just top)
              px={{ base: 4, md: 6 }}
              py={{ base: 4, md: 5 }}               // ← slightly more vertical padding
              border="1px solid"
              borderColor="rgba(0,0,0,0.06)"
              boxShadow="0 4px 24px rgba(0,0,0,0.08)" // ← softer shadow all around
            >
              <Box
                width="32px"
                height="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                color={maroonColor}
                opacity={0.8}
              >
                <IconComponent w="24px" h="24px" />
              </Box>
              <Box>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontWeight="500"
                  fontSize="0.88rem"
                  color="#1a1a1a"
                  mb="2px"
                  letterSpacing="0.01em"
                >
                  {label}
                </Text>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontWeight="400"
                  fontSize="0.74rem"
                  color="#666666"
                  letterSpacing="0.01em"
                  lineHeight="1.2"
                >
                  {subtitle}
                </Text>
              </Box>
            </HStack>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Slide3;