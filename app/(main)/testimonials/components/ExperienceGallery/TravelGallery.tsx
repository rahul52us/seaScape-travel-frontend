import { Box, Grid, Heading, Text, Icon, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCamera, FaHeart } from "react-icons/fa";

const travelData = [
  { id: 1, name: "Travel Memory #1", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 2, name: "Travel Memory #3", imageUrl: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
  { id: 3, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 4, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" },
  { id: 5, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 6, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 7, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 8, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 9, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 10, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 11, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHRyYXZlbHxlbnwwfDB8MHx8fDI%3D" },
  { id: 12, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1518730518541-d0843268c287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 13, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1530616858450-99ba4525057d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 14, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 15, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0cmF2ZWx8ZW58MHwwfDB8fHwy" },
  { id: 16, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXN8ZW58MHwwfDB8fHwy" },
  { id: 17, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHwwfDB8fHwy" },
  { id: 18, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfDB8MHx8fDI%3D" },
  { id: 19, name: "Travel Memory #4", imageUrl: "https://images.unsplash.com/photo-1566999573217-25c859ec1450?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyaXB8ZW58MHwwfDB8fHwy" },
];

const TravelGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const columns = useBreakpointValue({ base: 2, md: 2 });
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % travelData.length);
        setOpacity(1);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative">
      {/* Header with camera icon and gold underline */}
      <Box mb={8}>
        <Icon as={FaCamera} color="#e8b86b" boxSize={6} mb={2} />
        <Heading
          fontSize={headingSize}
          fontWeight="800"
          color="#5a2a2a"
          letterSpacing="tight"
        >
          Travel Moments
        </Heading>
        <Box
          w="60px"
          h="3px"
          bg="#e8b86b"
          mt={3}
          borderRadius="full"
        />
        <Text fontSize="sm" color="#6a4a4a" mt={2}>
          Glimpses of joy from our community journeys
        </Text>
      </Box>

      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={4}
        transition="all 0.2s"
      >
        {travelData.slice(currentIndex, currentIndex + 4).map((item, idx) => (
          <Box
            key={idx}
            h={{ base: "180px", md: "220px", lg: "250px" }}
            bgImage={`url(${item.imageUrl})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
            opacity={opacity}
            transition="opacity 0.5s ease-in-out"
            _hover={{
              "& > div": { transform: "translateY(0)" },
              "& img": { transform: "scale(1.05)" },
            }}
          >
            {/* Inner overlay with gradient – maroon */}
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, rgba(107,26,42,0.7), rgba(107,26,42,0.2))"
              transition="transform 0.3s"
              transform="translateY(100%)"
            />
            {/* Bottom caption that slides up on hover */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              p={3}
              bg="rgba(107,26,42,0.8)"
              backdropFilter="blur(4px)"
              transform="translateY(100%)"
              transition="transform 0.3s ease"
              _groupHover={{ transform: "translateY(0)" }}
            >
              <Text color="white" fontSize="sm" fontWeight="500" noOfLines={1}>
                <Icon as={FaHeart} color="#e8b86b" boxSize={3} mr={1} />
                {item.name}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Subtle indicator dots */}
      <Flex justify="center" mt={6} gap={2}>
        {[...Array(Math.ceil(travelData.length / 4))].map((_, idx) => (
          <Box
            key={idx}
            w={2}
            h={2}
            borderRadius="full"
            bg={idx === Math.floor(currentIndex / 4) ? "#e8b86b" : "#f0e6d8"}
            transition="all 0.2s"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TravelGallery;