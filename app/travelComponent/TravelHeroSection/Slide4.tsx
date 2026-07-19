import React from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';

/* -------------------------------------------------------
   Required Google Fonts:
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
--------------------------------------------------------*/

const HeartIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Icon>
);

const Slide4 = () => {
  const maroonColor = "#7B1035";
  const goldColor = "#C9A84C";

  return (
    <Box
      position="relative"
      height={{ base: '100svh', md: '100vh' }}
      width="100%"
      minHeight={{ base: '100svh', md: '100vh' }}
      overflow="hidden"
      bg="#1a1a1a"
    >
      {/* ─── Background Image ─── */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="url('https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926676/Trave_1_g1vwid.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.6)"
      />

      {/* Overlay darkening */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0,0,0,0.45)"
        zIndex="1"
      />

      {/* Main Content Box: Managed alignment & responsive horizontal paddings */}
      <Box
        position="relative"
        zIndex="2"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        px={{ base: 6, sm: 8, md: 16, lg: 24 }}
        maxW="1440px"
        mx="auto"
      >
        <VStack 
          spacing={0} 
          maxW={{ base: "600px", md: "680px", lg: "780px" }} 
          align={{ base: "center", md: "flex-start" }}
        >
          {/* Micro Label */}
          <Text
            fontFamily="'Inter', sans-serif"
            fontWeight="400"
            fontSize="0.65rem"
            color="rgba(255,255,255,0.5)"
            letterSpacing="0.2em"
            textTransform="uppercase"
            mb="20px"
          >
            Travel. Connect. Grow.
          </Text>

          {/* Headline Line 1 */}
          <Text
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3.5rem" }}
            lineHeight="1.2"
            color="#FFFFFF"
            letterSpacing="0.01em"
          >
            Some journeys change the places you visit.
          </Text>

          {/* Headline Line 2 — gold italic */}
          <Text
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontStyle="italic"
            fontSize={{ base: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3.5rem" }}
            lineHeight="1.2"
            color={goldColor}
            letterSpacing="0.01em"
            mt="4px"
          >
            Others change you.
          </Text>

          {/* Divider line + heart */}
          <HStack 
            spacing={3} 
            mt="24px" 
            mb="24px" 
            align="center" 
            justify={{ base: "center", md: "flex-start" }}
            w="100%"
          >
            <Box w="60px" h="1px" bg="rgba(255,255,255,0.3)" />
            <HeartIcon w="14px" h="14px" color="rgba(255,255,255,0.5)" />
            <Box w="60px" h="1px" bg="rgba(255,255,255,0.3)" />
          </HStack>

          {/* Tagline */}
          <Text
            fontFamily="'Inter', sans-serif"
            fontWeight="300"
            fontSize={{ base: "0.85rem", md: "0.95rem" }}
            color="rgba(255,255,255,0.7)"
            letterSpacing="0.03em"
            mb="32px"
          >
            Come Solo. Leave Connected.
          </Text>

          {/* Action Buttons */}
          <HStack 
            spacing="14px" 
            flexWrap="wrap" 
            justify={{ base: "center", md: "flex-start" }}
            w="100%"
          >
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
                boxShadow: "0 6px 20px rgba(123, 16, 53, 0.3)",
              }}
            >
              Watch Our Story
            </Button>
            <Button
              as="a"
              href="#"
              bg="transparent"
              color="#FFFFFF"
              fontSize="0.82rem"
              fontWeight="400"
              fontFamily="'Inter', sans-serif"
              letterSpacing="0.04em"
              px={7}
              py={3}
              height="auto"
              borderRadius="6px"
              border="1.5px solid"
              borderColor="rgba(255,255,255,0.3)"
              transition="all 0.25s ease"
              _hover={{
                borderColor: "#FFFFFF",
                bg: "rgba(255,255,255,0.08)",
              }}
            >
              Join the Community
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Slide4;