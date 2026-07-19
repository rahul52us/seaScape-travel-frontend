import { Box, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const PageHero = ({
  title,
  subtitle,
  bgImage = "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
  lineColor = "#D4A843", // brand gold default
}) => {
  const floating = `${float} 3s ease-in-out infinite`;
  const headingSize = useBreakpointValue({ base: "3xl", md: "5xl", lg: "6xl" });

  return (
    <Box
      minHeight={{ base: "50vh", md: "65vh", xl: "70vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={`linear-gradient(160deg, rgba(123,16,53,0.75) 0%, rgba(90,42,42,0.85) 100%), ${bgImage}`}
      bgPosition="center"
      bgSize="cover"
      position="relative"
      overflow="hidden"
      px={4}
      py={16}
    >
      {/* Animated background element – gold-tinted */}
      <Box
        position="absolute"
        w="200%"
        h="40px"
        bg={`linear-gradient(90deg, transparent 0%, ${lineColor} 50%, transparent 100%)`}
        top="20%"
        left="-50%"
        opacity="0.15"
        transform="rotate(-5deg)"
        animation={`${floating} 4s ease-in-out infinite`}
      />

      <VStack
        spacing={6}
        textAlign="center"
        maxW="1200px"
        color="white"
        px={4}
        zIndex={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            fontWeight="800"
            letterSpacing="tight"
            lineHeight="1.2"
            textShadow="0 4px 12px rgba(123,16,53,0.3)"
            color="white"
            fontFamily="'ALESHA', 'Georgia', serif"
          >
            {title}
          </Heading>
        </motion.div>

        {/* Gold accent line */}
        <Box
          height="4px"
          width="80px"
          bg={lineColor}
          borderRadius="full"
          mb={2}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Text
            fontSize={{ base: "md", md: "xl" }}
            maxW="800px"
            lineHeight={{ base: "1.5", md: "1.7" }}
            fontWeight={{ base: "normal", md: "medium" }}
            textShadow="0 2px 6px rgba(0,0,0,0.25)"
            px={{ base: 2, md: 6 }}
            animation={floating}
            color="whiteAlpha.900"
          >
            {subtitle}
          </Text>
        </motion.div>

        {/* Scroll indicator – gold arrow */}
        <Box
          position="absolute"
          bottom="30px"
          left="50%"
          transform="translateX(-50%)"
          fontSize="2xl"
          animation={`${float} 2s ease-in-out infinite`}
          opacity={0.8}
          color="#D4A843" // brand gold
        >
          ↓
        </Box>
      </VStack>

      {/* Soft gradient at bottom – maroon */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="100px"
        bg="linear-gradient(transparent 0%, rgba(123,16,53,0.4) 100%)"
      />
    </Box>
  );
};

export default PageHero;