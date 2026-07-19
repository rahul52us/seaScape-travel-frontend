import { Box, SimpleGrid, Text, VStack, Icon, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaHeart, FaGlobe, FaPlane, FaHotel } from 'react-icons/fa';

const statsData = [
  { value: 500, label: "Happy Travellers", icon: "https://cdn-icons-png.flaticon.com/128/10529/10529754.png", iconColor: "#e8b86b" },
  { value: 20, label: "Destinations", icon: "https://cdn-icons-png.flaticon.com/128/3125/3125931.png", iconColor: "#d4a35a" },
  { value: 300, label: "Trips", icon: "https://cdn-icons-png.flaticon.com/128/2743/2743956.png", iconColor: "#c9a96e" },
  { value: 100, label: "Luxury Hotels", icon: "https://cdn-icons-png.flaticon.com/128/5503/5503812.png", iconColor: "#e8b86b" },
];

const StatsSection = () => {
  const columns = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box
      maxW={{ base: "95%", lg: "1200px" }}
      mx="auto"
      mt={{ base: 6, md: 10 }}
      mb={{ base: 4, md: 6 }}
      px={{ base: 2, md: 4 }}
    >
      <SimpleGrid columns={columns} spacing={{ base: 4, md: 6 }}>
        {statsData.map((stat, idx) => (
          <Box
            key={idx}
            bg="white"
            p={{ base: 4, md: 6 }}
            borderRadius="2xl"
            boxShadow="0 4px 20px rgba(0,0,0,0.04)"
            transition="all 0.25s ease"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "0 12px 28px -8px rgba(107,26,42,0.15)",
              borderColor: "#e8b86b",
            }}
            border="1px solid #f0e6d8"
            textAlign="center"
          >
            <VStack spacing={3}>
              {/* Custom icon wrapper with gold background */}
              <Box
                w="60px"
                h="60px"
                borderRadius="full"
                bg="rgba(232,184,107,0.1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.2s"
                _groupHover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  w="32px"
                  h="32px"
                  opacity="0.8"
                />
              </Box>

              {/* Value */}
              <Text
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="800"
                color="#6b1a2a"
                letterSpacing="tight"
              >
                {stat.value.toLocaleString()}+
              </Text>

              {/* Label */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="500"
                color="#5a2a2a"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                {stat.label}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;