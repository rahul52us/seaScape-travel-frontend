"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Image,
  Container,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function HeroJourney() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="#F5EDD8"
      fontFamily="'ALESHA', 'Georgia', serif"
      py={{ base: 8, md: 0 }}
      overflow="hidden"
    >
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="-15%"
        right="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="rgba(212,168,67,0.05)"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="rgba(123,16,53,0.03)"
        pointerEvents="none"
        zIndex={0}
      />

      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 12 }}
        >
          {/* Left Content - Text and Buttons */}
          <VStack align="flex-start" spacing={5} flex="1" maxW="lg">
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="800"
                color="#7B1035"
                letterSpacing="tight"
                lineHeight="1.05"
              >
                Ready For Your
                <br />
                Next Journey?
              </Heading>
            </Box>

            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color="#7B1035"
              fontWeight="500"
              letterSpacing="0.5px"
              mt={1}
              mb={2}
            >
              Come Solo. Leave Connected.
            </Text>

            {/* Button Group */}
            <HStack spacing={4} pt={2} flexWrap="wrap" gap={3}>
              <Button
                as="a"
                href="#"
                bg="#D4A843"
                color="white"
                px={{ base: 6, md: 8 }}
                py={{ base: 6, md: 7 }}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="600"
                borderRadius="full"
                _hover={{ bg: "#C49A3A", transform: "translateY(-2px)" }}
                transition="all 0.25s ease"
                boxShadow="0 8px 24px rgba(212,168,67,0.35)"
                letterSpacing="0.3px"
                rightIcon={<ArrowForwardIcon />}
                iconSpacing={2}
                height="auto"
              >
                Explore Journeys
              </Button>

              <Button
                as="a"
                href="#"
                variant="outline"
                border="2px solid #7B1035"
                color="#7B1035"
                px={{ base: 6, md: 8 }}
                py={{ base: 6, md: 7 }}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="600"
                borderRadius="full"
                _hover={{ bg: "#7B1035", color: "white", borderColor: "#7B1035" }}
                transition="all 0.25s ease"
                bg="transparent"
                height="auto"
                rightIcon={<ArrowForwardIcon />}
                iconSpacing={2}
              >
                Join Community
              </Button>
            </HStack>

            {/* Decorative line */}
            <Box
              w="60px"
              h="3px"
              bg="#D4A843"
              borderRadius="full"
              mt={6}
              opacity={0.6}
            />
          </VStack>

          {/* Right: Image Card with Maroon Background */}
          <Box
            flex="1"
            maxW={{ base: "100%", md: "480px" }}
            w="100%"
            position="relative"
            borderRadius="3xl"
            overflow="hidden"
            bg="#7B1035"
            boxShadow="0 25px 50px -12px rgba(123,16,53,0.3)"
            aspectRatio={{ base: "4/3", md: "4/3" }}
            minH={{ base: "280px", md: "400px" }}
          >
            {/* Decorative elements inside the card */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w="200px"
              h="200px"
              borderRadius="full"
              bg="rgba(212,168,67,0.08)"
              pointerEvents="none"
              zIndex={1}
            />
            <Box
              position="absolute"
              bottom={0}
              right={0}
              w="150px"
              h="150px"
              borderRadius="full"
              bg="rgba(212,168,67,0.06)"
              pointerEvents="none"
              zIndex={1}
            />

            {/* Main Image */}
            <Image
              src="/images/travel/whyChoose.jpg"
              alt="Travel journey"
              w="100%"
              h="100%"
              objectFit="cover"
              transition="all 0.6s"
              _hover={{ transform: "scale(1.03)" }}
              fallbackSrc="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=450&fit=crop"
              opacity={0.85}
            />

            {/* Maroon Mask Overlay */}
            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(135deg, rgba(123,16,53,0.8) 0%, rgba(123,16,53,0.3) 50%, rgba(123,16,53,0.05) 100%)"
              pointerEvents="none"
              zIndex={2}
            />

            {/* Bottom gradient for depth */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="50%"
              bg="linear-gradient(to top, rgba(123,16,53,0.6), transparent)"
              pointerEvents="none"
              zIndex={2}
            />

            {/* Gold corner accent */}
            <Box
              position="absolute"
              top={6}
              right={6}
              w="50px"
              h="50px"
              borderTop="3px solid rgba(212,168,67,0.4)"
              borderRight="3px solid rgba(212,168,67,0.4)"
              pointerEvents="none"
              zIndex={3}
            />

            {/* Bottom text overlay */}
            <Box
              position="absolute"
              bottom={6}
              left={6}
              right={6}
              pointerEvents="none"
              zIndex={3}
            >
              <Text
                color="white"
                fontSize="sm"
                fontWeight="300"
                letterSpacing="1px"
                opacity={0.7}
                textTransform="uppercase"
                fontFamily="'ALESHA', 'Georgia', serif"
              >
                — Your Journey Awaits
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}