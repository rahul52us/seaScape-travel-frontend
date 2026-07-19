// Slide1.jsx (updated)
import React from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Image,
} from '@chakra-ui/react';

const Slide1 = () => {
  return (
    <Box
      position="relative"
      height={{ base: '100svh', md: '100vh' }}
      width="100%"
      minHeight={{ base: '100svh', md: '100vh' }}
      overflow="hidden"
      bg="#7B1035"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage={`url('https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926677/Travel_7_dtkwvr.png')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        transform="scale(1.02)"
        filter="brightness(0.75) saturate(1.05)"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, rgba(30,30,30,0.65) 0%, rgba(20,20,20,0.40) 50%, rgba(0,0,0,0.70) 100%)"
        zIndex="1"
      />

      {/* Content Container */}
      <Container
        position="relative"
        zIndex="2"
        height="100%"
        maxW="container.xl"
        px={{ base: 6, md: 12 }}
        // Added bottom padding to keep content above the "Scroll" text
        pb={{ base: 16, md: 0 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        textAlign="left"
      >
        <VStack
          spacing={{ base: 1, md: 2 }}
          align="flex-start"
          w="100%"
          maxW="lg"
          // Extra top padding on mobile to prevent content from being too close to the top
          pt={{ base: 8, md: 0 }}
        >
          {/* Logo */}
          {/* <Image
            src="/images/logo1.png"
            alt="SHEscapes Logo"
            h={{ base: "70px", md: "90px", lg: "110px" }}
            w="auto"
            objectFit="contain"
            mb={{ base: 4, md: 6 }}
          /> */}
          {/* First line: Come Solo. */}
          <Text
            as="h1"
            fontFamily="'ALESHA', 'Georgia', serif"
            fontSize={{ base: '2.5rem', sm: '3.2rem', md: '4rem', lg: '4.8rem' }}
            fontWeight="400"
            lineHeight="1.1"
            color="#FFFFFF"
            letterSpacing="0.04em"
            textShadow="0 4px 40px rgba(0,0,0,0.25)"
          >
            Come Solo.
          </Text>

          {/* Second line: Leave Connected. – adjusted margin for mobile */}
          <Text
            as="h2"
            fontFamily="'ALESHA', 'Georgia', serif"
            fontSize={{ base: '1.8rem', sm: '2.4rem', md: '3rem', lg: '3.6rem' }}
            fontWeight="400"
            lineHeight="1.1"
            color="#7B1035"
            letterSpacing="0.02em"
            mt={{ base: '-0.1rem', md: '-0.3rem' }} // less negative on mobile to avoid overlap
            textShadow="0 2px 30px rgba(0,0,0,0.20)"
          >
            Leave Connected.
          </Text>

          {/* Description */}
          <Text
            fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
            fontWeight="300"
            fontSize={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}
            color="#FFFFFF"
            maxW={{ base: '280px', sm: '380px', md: '460px' }}
            mt={{ base: 2, md: 3 }}
            letterSpacing="0.06em"
            lineHeight="1.6"
            textShadow="0 2px 20px rgba(0,0,0,0.30)"
            opacity="0.92"
          >
            Travel experiences designed for women
            <br />
            who seek confidence, connection and
            <br />
            stories worth remembering.
          </Text>

          {/* Buttons – stacked on mobile, side‑by‑side on larger screens */}
          <HStack
            spacing={{ base: 3, sm: 4 }}
            mt={{ base: 5, md: 8 }}
            flexWrap="wrap"
            width="100%"
            // On mobile, stack vertically and keep left alignment
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems="flex-start"
          >
            <Button
              as="a"
              href="#"
              bg="#7B1035"
              color="#FFFFFF"
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="400"
              fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
              letterSpacing="0.08em"
              px={{ base: 6, sm: 8, md: 10 }}
              py={{ base: 3, md: 4 }}
              height="auto"
              borderRadius="md"
              border="1.5px solid transparent"
              transition="all 0.25s ease"
              // Make buttons full width on mobile, but keep them from stretching too much
              width={{ base: '100%', sm: 'auto' }}
              maxW={{ base: '280px', sm: 'none' }}
              _hover={{
                bg: '#6A0E2D',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(123, 16, 53, 0.35)',
              }}
              _active={{
                transform: 'translateY(0px)',
                boxShadow: '0 4px 12px rgba(123, 16, 53, 0.25)',
              }}
              textShadow="0 1px 8px rgba(0,0,0,0.10)"
            >
              Join the Community
            </Button>

            <Button
              as="a"
              href="#"
              bg="transparent"
              color="#FFFFFF"
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="400"
              fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
              letterSpacing="0.08em"
              px={{ base: 6, sm: 8, md: 10 }}
              py={{ base: 3, md: 4 }}
              height="auto"
              borderRadius="md"
              border="1.5px solid rgba(255,255,255,0.60)"
              transition="all 0.25s ease"
              width={{ base: '100%', sm: 'auto' }}
              maxW={{ base: '280px', sm: 'none' }}
              _hover={{
                bg: 'rgba(255,255,255,0.12)',
                borderColor: '#FFFFFF',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
              _active={{
                transform: 'translateY(0px)',
                bg: 'rgba(255,255,255,0.05)',
              }}
              backdropFilter="blur(2px)"
              textShadow="0 1px 8px rgba(0,0,0,0.10)"
            >
              Explore Experiences
            </Button>
          </HStack>
        </VStack>

        {/* "Scroll to explore" – left‑aligned at bottom */}
        <Text
          position="absolute"
          bottom="30px"
          left={{ base: 6, md: 12 }}
          right="auto"
          textAlign="left"
          fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
          fontWeight="300"
          fontSize="xs"
          color="#FFFFFF"
          letterSpacing="0.1em"
          opacity="0.6"
          textShadow="0 2px 10px rgba(0,0,0,0.25)"
        >
          Scroll to explore
        </Text>
      </Container>
    </Box>
  );
};

export default Slide1;