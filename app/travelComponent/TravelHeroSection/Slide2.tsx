// Slide2.jsx – Clean, streamlined text footprint with identical color choices
import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Container,
  HStack,
  Icon,
} from "@chakra-ui/react";

/* -------------------------------------------------------
   Google Fonts (add to _document.tsx or global CSS)
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Great+Vibes&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
--------------------------------------------------------*/

// ─── Icons ────────────────────────────────────────────────
const WomenFirstIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

const SmallGroupsIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

const BoutiqueStaysIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Icon>
);

const LocalExperiencesIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

const WellnessIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6a6 6 0 016 6" />
    <path d="M12 8a4 4 0 014 4" />
  </Icon>
);

// ─── Component ────────────────────────────────────────────

const Slide2 = () => {
  const maroonColor = "#7E1F3B";

  const features = [
    { icon: WomenFirstIcon, label: "Women-first" },
    { icon: SmallGroupsIcon, label: "Small Groups" },
    { icon: BoutiqueStaysIcon, label: "Boutique Stays" },
    { icon: LocalExperiencesIcon, label: "Local Experiences" },
    { icon: WellnessIcon, label: "Wellness" },
  ];

  return (
    <Box
      bg="#F5F1EC"
      minH={{ base: "100svh", md: "100vh" }}
      w="100%"
      position="relative"
      overflow="hidden"
    >
      {/* ─── Background Image ─── */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url('https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926677/Travel_3_iyfe3k.png')`}
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.72) saturate(1.05)"
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-r, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.6) 50%, rgba(20,20,20,0.7) 100%)"
        zIndex={1}
      />

      <Container
        maxW="container.xl"
        position="relative"
        zIndex={2}
        h="100%"
        minH={{ base: "100svh", md: "100vh" }}
        px={{ base: 6, md: 16, lg: 24 }}
        pt={{ base: 10, md: 6 }}
        /* Clean bottom boundaries so content never crashes into the absolute feature bar */
        pb={{ base: "130px", sm: "150px", md: 24 }}
        display="flex"
        alignItems="center"
      >
        <Box maxW={{ base: "100%", md: "540px" }} w="100%">
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={0}
            w="100%"
          >
            {/* Primary Main Question - Simplified lines and slightly scaled text sizes */}
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "1.45rem", sm: "1.7rem", md: "2.1rem", lg: "2.4rem" }}
              lineHeight="1.3"
              fontWeight="400"
              color="white"
              textAlign={{ base: "center", md: "left" }}
            >
              How many trips have you{" "}
              <Text as="span" color={maroonColor} fontStyle="italic">
                postponed
              </Text>{" "}
              because no one could come with you?
            </Text>

            {/* Streamlined Horizontal Accent Spacer */}
            <HStack mt={4} mb={4} spacing={2} w="100%" justify={{ base: "center", md: "flex-start" }}>
              <Box h="1px" w="35px" bg="rgba(255,255,255,0.3)" />
              <Icon
                viewBox="0 0 24 24"
                w={3}
                h={3}
                color="white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3C14.74 3 13.5 3.5 12 5c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5C2 10.8 3.5 12.55 5 14l7 7z" />
              </Icon>
              <Box h="1px" w={{ base: "35px", md: "100px" }} bg="rgba(255,255,255,0.15)" />
            </HStack>

            {/* Combined Welcoming Row to reduce row vertical height footprint */}
            <Box 
              mb={6} 
              textAlign={{ base: "center", md: "left" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={{ base: 1, sm: 2 }}
            >
              <Text
                fontFamily="'Inter', sans-serif"
                fontSize={{ base: "0.95rem", md: "1.05rem" }}
                fontWeight="300"
                color="white"
              >
                It's time to stop waiting.
              </Text>
              <Box>
                <Text
                  as="span"
                  fontFamily="'Great Vibes', cursive"
                  color="white"
                  fontSize={{ base: "1.6rem", md: "1.9rem" }}
                  verticalAlign="middle"
                >
                  Welcome to 
                </Text>
                <Text
                  as="span"
                  ml={1.5}
                  color={maroonColor}
                  fontFamily="'Playfair Display', serif"
                  fontStyle="italic"
                  fontWeight="600"
                  fontSize={{ base: "1.25rem", md: "1.45rem" }}
                  verticalAlign="middle"
                >
                  SHEescapes.
                </Text>
              </Box>
            </Box>

            {/* Action CTA Button */}
            <Button
              bg={maroonColor}
              color="white"
              fontSize={{ base: "0.82rem", md: "0.9rem" }}
              px={7}
              py={5}
              height="auto"
              borderRadius="4px"
              fontWeight="400"
              fontFamily="'Inter', sans-serif"
              letterSpacing="0.04em"
              _hover={{ bg: "#61162B", transform: "translateY(-1px)" }}
              transition="all 0.2s"
            >
              Find Your Community
            </Button>
          </VStack>
        </Box>
      </Container>

      {/* ─── Bottom feature bar (Clean wrapper footprint) ─── */}
      <Box position="absolute" left={0} right={0} bottom={0} zIndex={20}>
        <Container maxW="container.xl" px={{ base: 3, md: 8 }}>
          <HStack
            bg="white"
            justify={{ base: "center", md: "space-between" }}
            align="center"
            flexWrap="wrap"
            columnGap={{ base: 4, sm: 6, md: 8 }}
            rowGap={2}
            px={{ base: 4, md: 10, lg: 14 }}
            py={{ base: 3, md: 4 }}
            borderTopRadius="16px"
            boxShadow="0 -6px 24px rgba(0,0,0,0.05)"
          >
            {features.map(({ icon: IconComponent, label }) => (
              <HStack
                key={label}
                spacing={1.5}
                align="center"
                whiteSpace="nowrap"
              >
                <IconComponent
                  w={{ base: "14px", md: "16px" }}
                  h={{ base: "14px", md: "16px" }}
                  color={maroonColor}
                  opacity={0.9}
                />
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize={{ base: "0.72rem", md: "0.82rem" }}
                  fontWeight="400"
                  color="#2B2B2B"
                  letterSpacing="0.01em"
                >
                  {label}
                </Text>
              </HStack>
            ))}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Slide2;