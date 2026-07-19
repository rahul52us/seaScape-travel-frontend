import { Box, Button, Flex, Heading, Text, Icon, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FiArrowRight, FiMapPin, FiCalendar, FiUsers, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { formatTitle } from "../../config/utils/function";
import stores from "../../store/stores";

const FeaturedDestination = observer(() => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const {
    destinationStore: { getDestinations },
    locationStore: { location },
  } = stores;

  useEffect(() => {
    getDestinations({ page: 1 });
  }, [getDestinations]);

  const locationsData = location?.data ? toJS(location.data) : [];
  const totalSlides = locationsData.length;

  useEffect(() => {
    if (!totalSlides) return;
    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 6000);
    };
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 6000);
    }
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const currentLoc = totalSlides ? locationsData[currentIndex] : null;
  if (!currentLoc) return null;

  return (
    <Box
      position="relative"
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 6, md: 10 }}
      bg="#F5EDD8" // brand cream
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      <Box
        maxW="1400px"
        mx="auto"
        position="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Main featured card */}
        <Box
          position="relative"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="0 25px 40px -12px rgba(123,16,53,0.2)"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.01)" }}
        >
          {/* Background image */}
          <Box
            position="relative"
            h={{ base: "380px", md: "420px", lg: "460px" }}
            bgImage={`url(${currentLoc.image?.url})`}
            bgSize="cover"
            bgPosition="center"
            transition="all 0.5s"
          >
            {/* Overlay – maroon gradient */}
            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(135deg, rgba(123,16,53,0.85) 0%, rgba(0,0,0,0.5) 100%)"
            />

            {/* Content – compact glass card with gold borders */}
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify={{ base: "center", lg: "flex-start" }}
              px={{ base: 4, md: 8, lg: 12 }}
            >
              <Box
                maxW={{ base: "100%", lg: "480px" }}
                bg="rgba(255,255,255,0.1)"
                backdropFilter="blur(12px)"
                borderRadius="2xl"
                p={{ base: 4, md: 6 }}
                border="1px solid rgba(212,168,67,0.3)"
                boxShadow="0 8px 32px rgba(0,0,0,0.1)"
                animation="fadeSlideUp 0.6s ease-out"
              >
                <HStack spacing={2} mb={3}>
                  <Icon as={FiMapPin} color="#D4A843" boxSize={3.5} />
                  <Text fontSize="xs" fontWeight="600" textTransform="uppercase" letterSpacing="2px" color="#D4A843">
                    Featured Destination
                  </Text>
                </HStack>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="800"
                  color="white"
                  lineHeight="1.2"
                  mb={3}
                >
                  {formatTitle(currentLoc.name)}
                </Heading>
                <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900" mb={4} lineHeight="1.6" noOfLines={3}>
                  {currentLoc.description || "Discover the magic of this incredible destination, curated for women who seek connection, confidence, and meaningful journeys."}
                </Text>
                <HStack spacing={4} mb={5} wrap="wrap">
                  <HStack spacing={1.5}>
                    <Icon as={FiCalendar} color="#D4A843" boxSize={3} />
                    <Text fontSize="xs" color="whiteAlpha.900">{currentLoc.days || 7} Days</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Icon as={FiUsers} color="#D4A843" boxSize={3} />
                    <Text fontSize="xs" color="whiteAlpha.900">Women Only</Text>
                  </HStack>
                </HStack>
                <Button
                  rightIcon={<FiArrowRight />}
                  bg="#D4A843"
                  color="#7B1035"
                  size="md"
                  px={6}
                  borderRadius="full"
                  fontWeight="700"
                  fontSize="sm"
                  _hover={{ bg: "#c9a03a", transform: "translateY(-2px)", boxShadow: "0 8px 16px -5px rgba(212,168,67,0.4)" }}
                  transition="all 0.2s"
                  onClick={() => router.push(`/destinations/${currentLoc.name}`)}
                >
                  Explore Journey
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Thumbnail strip navigation */}
        {totalSlides > 1 && (
          <Box mt={5} position="relative">
            <Flex
              overflowX="auto"
              gap={2.5}
              justify="center"
              css={{
                "::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              {locationsData.map((loc, idx) => (
                <Box
                  key={loc._id || idx}
                  minW={{ base: "70px", md: "90px" }}
                  h={{ base: "50px", md: "65px" }}
                  borderRadius="lg"
                  overflow="hidden"
                  cursor="pointer"
                  position="relative"
                  border={idx === currentIndex ? "2px solid #D4A843" : "1px solid transparent"}
                  transition="all 0.2s"
                  _hover={{ transform: "translateY(-3px)" }}
                  onClick={() => {
                    setCurrentIndex(idx);
                    resetInterval();
                  }}
                >
                  <Image
                    src={loc.image?.url}
                    alt={loc.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bg={idx === currentIndex ? "rgba(123,16,53,0.3)" : "rgba(0,0,0,0.4)"}
                  />
                  <Text
                    position="absolute"
                    bottom="4px"
                    left="6px"
                    right="6px"
                    fontSize="9px"
                    fontWeight="bold"
                    color="white"
                    textShadow="0 1px 2px black"
                    noOfLines={1}
                  >
                    {formatTitle(loc.name)}
                  </Text>
                </Box>
              ))}
            </Flex>
            {/* Desktop navigation arrows */}
            {!isMobile && isHovering && (
              <>
                <Icon
                  as={FiChevronLeft}
                  position="absolute"
                  left="-20px"
                  top="50%"
                  transform="translateY(-50%)"
                  w={7}
                  h={7}
                  color="#D4A843"
                  cursor="pointer"
                  bg="rgba(255,255,255,0.8)"
                  borderRadius="full"
                  p={1}
                  _hover={{ bg: "white", transform: "translateY(-50%) scale(1.1)" }}
                  onClick={handlePrev}
                />
                <Icon
                  as={FiChevronRight}
                  position="absolute"
                  right="-20px"
                  top="50%"
                  transform="translateY(-50%)"
                  w={7}
                  h={7}
                  color="#D4A843"
                  cursor="pointer"
                  bg="rgba(255,255,255,0.8)"
                  borderRadius="full"
                  p={1}
                  _hover={{ bg: "white", transform: "translateY(-50%) scale(1.1)" }}
                  onClick={handleNext}
                />
              </>
            )}
          </Box>
        )}
      </Box>

      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
});

export default FeaturedDestination;