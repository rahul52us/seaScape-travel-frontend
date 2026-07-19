'use client';

import { Box, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      minHeight="100vh"
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      bg="#F5EDD8"
      p={{ base: 4, md: 6 }}
    >
      {/* Left Section - Background Image */}
      {!isMobile && (
        <Box
          position="relative"
          bgImage="url('/images/auth-hero.png')"
          height={{ md: '90vh', xl: '94vh' }}
          width={{ md: '50%', lg: '45%' }}
          bgSize="cover"
          bgPosition="center"
          rounded="2xl"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-end"
          alignSelf="center"
          shadow="2xl"
          overflow="hidden"
        >
          {/* Dark gradient overlay */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(123,16,53,0.92) 0%, rgba(123,16,53,0.4) 40%, transparent 70%)"
            borderRadius="2xl"
          />

          {/* Quote text */}
          <VStack
            position="relative"
            zIndex={1}
            align="flex-start"
            spacing={3}
            p={8}
            pb={10}
          >
            <Text
              fontSize="2xl"
              fontWeight="300"
              color="#D4A843"
              fontFamily="'Playfair Display', Georgia, serif"
              fontStyle="italic"
              lineHeight="1.4"
            >
              "Not all those who wander
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="700"
              color="white"
              fontFamily="'Playfair Display', Georgia, serif"
              fontStyle="italic"
              lineHeight="1.4"
            >
              are lost."
            </Text>
            <Box w="40px" h="2px" bg="#D4A843" mt={1} />
            <Text
              fontSize="sm"
              color="rgba(245,237,216,0.75)"
              fontFamily="'Inter', sans-serif"
              fontWeight="300"
              letterSpacing="2px"
              textTransform="uppercase"
            >
              Your journey begins here
            </Text>
          </VStack>
        </Box>
      )}

      {/* Right Section - Form Content */}
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        width={{ base: '100%', md: '45%', lg: '40%' }}
        maxW="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        shadow={{ base: 'none', md: 'xl' }}
        minHeight={{ md: 'auto' }}
        ml={{ md: 6 }}
        border="1px solid rgba(212,168,67,0.15)"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AuthenticationLayout;