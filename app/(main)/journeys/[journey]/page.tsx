"use client";

import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  Badge,
  Icon,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Container,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  useBreakpointValue,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { FaCheckCircle, FaMapMarkerAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { destinations } from "../../../travelComponent/common/TravelBentoGrid/travelData";
import { keyframes } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import stores from "../../../store/stores";
import { observer } from "mobx-react-lite";

// ─── Exact Color Palette ────────────────────────────────────────────
const colors = {
  bg: "#F5EDD8",
  primary: "#7B1035",
  primaryHover: "#66102D",
  accent: "#D4A843",
  accentHover: "#C99E3A",
  white: "#FFFFFF",
  textGray: "#6B6B6B",
  textDark: "#2D2D2D",
  borderLight: "rgba(212,168,67,0.15)",
  borderMedium: "rgba(212,168,67,0.2)",
};

// ─── Exact Font Families ────────────────────────────────────────────
const fonts = {
  primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif", // ALESHA fallback
  secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif", // AVENIR fallback
};

// ─── Keyframes ──────────────────────────────────────────────────────
const gradientShift = keyframes`
  0% { background-position: 50% 0%; }
  50% { background-position: 50% 100%; }
  100% { background-position: 50% 0%; }
`;

const floatPlaneLeft = keyframes`
  0% { transform: translateY(0px) rotate(-12deg); }
  50% { transform: translateY(-15px) rotate(-10deg) translateX(5px); }
  100% { transform: translateY(0px) rotate(-12deg); }
`;

const floatPlaneRight = keyframes`
  0% { transform: translateY(0px) rotate(20deg) scaleX(-1); }
  50% { transform: translateY(-20px) rotate(22deg) scaleX(-1) translateX(-5px); }
  100% { transform: translateY(0px) rotate(20deg) scaleX(-1); }
`;

const infiniteSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const JourneyDetailsPage = observer(() => {
  const { contactStore: { openModal } } = stores;
  const params = useParams();
  const router = useRouter();
  const journeyId = typeof params?.journey === "string" ? params.journey : undefined;
  
  const [destination, setDestination] = useState<any>(null);
  const [otherJourneys, setOtherJourneys] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const galleryImages = (destination?.galleryImages || []).map((img: any) => typeof img === 'string' ? img : img?.url).filter(Boolean);
  const totalSlides = galleryImages.length;
  const slidesPerView = useBreakpointValue({ base: 1, sm: 2, md: 3 }) || 1;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  useEffect(() => {
    if (!journeyId) return;

    const fetchJourney = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:9097/api";
        const res = await fetch(`${backendUrl}/journey-overview/slug/${journeyId}`);
        if (res.ok) {
          const data = await res.json();
          setDestination(data);
        } else {
          setDestination(null);
        }

        const allRes = await fetch(`${backendUrl}/journey-overview/get?page=1&limit=4`);
        if (allRes.ok) {
          const allData = await allRes.json();
          setOtherJourneys((allData.data?.data || []).filter((j: any) => j.locationId?.slug !== journeyId));
        }
      } catch (err) {
        console.error(err);
        setDestination(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJourney();
  }, [journeyId]);

  // Auto-play logic
  useEffect(() => {
    if (!isHovered && totalSlides > 0) {
      slideInterval.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          return next > maxIndex ? 0 : next;
        });
      }, 4000);
    } else if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [isHovered, maxIndex, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <Center minH="100vh" bg={colors.bg}>
        <Spinner size="xl" color={colors.primary} />
      </Center>
    );
  }

  if (!destination) {
    return (
      <Box minH="100vh" bg={colors.bg} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} textAlign="center" px={4}>
          <Heading color={colors.primary} fontFamily={fonts.primary}>
            Journey not found
          </Heading>
          <Text color={colors.textGray} fontFamily={fonts.secondary}>
            We couldn&apos;t find the journey you are looking for. Please return to the journeys list.
          </Text>
          <Button
            bg={colors.accent}
            color={colors.primary}
            fontFamily={fonts.secondary}
            _hover={{ bg: colors.accentHover }}
            onClick={() => router.push("/journeys")}
          >
            Browse Journeys
          </Button>
        </VStack>
      </Box>
    );
  }

  return (
    <Box
      bg={`linear-gradient(180deg, ${colors.bg} 0%, #E8DDCC 40%, #D4C8B0 100%)`}
      backgroundSize="100% 200%"
      animation={`${gradientShift} 15s ease infinite`}
      minH="100vh"
      position="relative"
      overflowX="hidden"
      fontFamily={fonts.secondary}
    >
      {/* Background decorations */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        bg="transparent"
        backgroundImage="url(https://solverwp.com/demo/html/travhub/assets/images/shapes/why-choose-one-bg.png)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.12}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="10%"
        left="40%"
        w="500px"
        h="500px"
        zIndex={0}
        opacity={0.06}
        pointerEvents="none"
        animation={`${infiniteSpin} 80s linear infinite`}
        backgroundImage="url('https://solverwp.com/demo/html/travhub/assets/images/shapes/about-two-shape-4.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      />
      <Box
        position="absolute"
        left={{ base: "-40px", md: "20px" }}
        top="12%"
        zIndex={1}
        pointerEvents="none"
        w={{ base: "120px", md: "180px" }}
        h="100px"
        backgroundImage="url(https://solverwp.com/demo/html/travhub/assets/images/shapes/plane.png)"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        animation={`${floatPlaneLeft} 6s ease-in-out infinite`}
        filter={`drop-shadow(0 10px 15px ${colors.accent}40)`}
      />
      <Box
        position="absolute"
        right={{ base: "-30px", md: "40px" }}
        bottom="15%"
        zIndex={1}
        pointerEvents="none"
        w={{ base: "100px", md: "150px" }}
        h="75px"
        backgroundImage="url(https://solverwp.com/demo/html/travhub/assets/images/shapes/plane.png)"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        animation={`${floatPlaneRight} 8s ease-in-out infinite`}
        filter={`drop-shadow(0 10px 15px ${colors.accent}33)`}
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex={2}
        pt={{ base: "100px", md: "120px" }}
        pb={{ base: 8, md: 12 }}
        px={{ base: 4, md: 6 }}
      >
        {/* Main Card */}
        <Box
          bg={colors.white}
          borderRadius="32px"
          boxShadow={`0 12px 40px ${colors.primary}14`}
          overflow="hidden"
          border={`1px solid ${colors.borderMedium}`}
          mb={12}
        >
          <Box position="relative" w="100%">
            <Box id="hero-image-box" w="100%">
              <Image
                src={galleryImages[currentIndex] || ""}
                alt={destination?.title || "Journey image"}
                w="100%"
                maxH={{ base: "350px", md: "500px" }}
                objectFit="cover"
                objectPosition="center"
                transition="all 0.5s ease-in-out"
              />
            </Box>
            <Button
              position="absolute"
              top={4}
              left={4}
              bg="rgba(255,255,255,0.85)"
              backdropFilter="blur(6px)"
              color={colors.primary}
              fontWeight="600"
              fontFamily={fonts.secondary}
              size={{ base: "sm", md: "md" }}
              leftIcon={<FaChevronRight transform="rotate(180deg)" />}
              onClick={() => router.back()}
              _hover={{ bg: colors.white, transform: "scale(1.02)" }}
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              border="1px solid rgba(255,255,255,0.3)"
              zIndex={3}
            >
              Back
            </Button>
          </Box>

          <Box p={{ base: 6, md: 8 }}>
            <Badge
              bg={colors.accent}
              color={colors.white}
              px={4}
              py={1.5}
              borderRadius="full"
              fontSize="xs"
              fontWeight="700"
              letterSpacing="1px"
              alignSelf="flex-start"
              mb={2}
              fontFamily={fonts.secondary}
            >
              Featured Journey
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="900"
              color={colors.primary}
              letterSpacing="1px"
              fontFamily={fonts.primary}
            >
              {destination.title}
            </Heading>
            <Text color={colors.textGray} mt={1} fontSize="sm" fontWeight="500" fontFamily={fonts.secondary}>
              <Icon as={FaMapMarkerAlt} color={colors.accent} mr={1} />
              {destination.locationId?.name || destination.locationId || "Location"}
            </Text>
            <Flex flexWrap="wrap" gap={3} mt={3}>
              <Badge variant="outline" borderColor={colors.accent} color={colors.primary} fontFamily={fonts.secondary}>
                {destination.duration}
              </Badge>
              <Badge variant="outline" borderColor={colors.accent} color={colors.primary} fontFamily={fonts.secondary}>
                Active Stay
              </Badge>
              <Badge variant="outline" borderColor={colors.accent} color={colors.primary} fontFamily={fonts.secondary}>
                {destination.price}
              </Badge>
            </Flex>
            <Text mt={4} color={colors.textGray} lineHeight="1.7" fontSize="sm" fontFamily={fonts.secondary}>
              {destination.description}
            </Text>
            <Flex mt={5} gap={4} flexWrap="wrap">
              <Button
                bg={colors.accent}
                color={colors.primary}
                fontWeight="800"
                fontFamily={fonts.secondary}
                px={8}
                onClick={openModal}
                _hover={{
                  bg: colors.accentHover,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 20px ${colors.accent}4D`,
                }}
              >
                Book Now
              </Button>
            </Flex>
          </Box>
        </Box>

        {/* ========== GALLERY SLIDER ========== */}
        {galleryImages.length > 0 && (
          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
            mb={10}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Flex align="center" justify="space-between" mb={4}>
              <Heading as="h2" fontSize="2xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary}>
                Gallery
              </Heading>
              <Flex gap={2}>
                <IconButton
                  aria-label="Previous"
                  icon={<FaChevronLeft />}
                  size="sm"
                  bg={colors.bg}
                  color={colors.primary}
                  _hover={{ bg: colors.accent, color: colors.white }}
                  onClick={goToPrev}
                  borderRadius="full"
                />
                <IconButton
                  aria-label="Next"
                  icon={<FaChevronRight />}
                  size="sm"
                  bg={colors.bg}
                  color={colors.primary}
                  _hover={{ bg: colors.accent, color: colors.white }}
                  onClick={goToNext}
                  borderRadius="full"
                />
              </Flex>
            </Flex>

            <Box overflow="hidden" borderRadius="16px">
              <Flex
                gap={4}
                transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                transform={`translateX(-${currentIndex * (100 / slidesPerView)}%)`}
                width="100%"
              >
                {galleryImages.map((url: string, idx: number) => (
                  <Box
                    key={idx}
                    flex={`0 0 calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 4 / slidesPerView}px)`}
                    borderRadius="16px"
                    overflow="hidden"
                    boxShadow="0 4px 12px rgba(0,0,0,0.06)"
                    transition="all 0.3s"
                    cursor="pointer"
                    onClick={() => {
                      const heroBox = document.getElementById('hero-image-box');
                      if (heroBox) {
                        heroBox.style.setProperty('background-image', `url('${url}')`, 'important');
                        // Pause slider behavior when manually selected
                        if (slideInterval.current) clearInterval(slideInterval.current);
                      }
                    }}
                    _hover={{ transform: "scale(1.02)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                  >
                    <Image
                      src={url}
                      alt={`Gallery image ${idx + 1}`}
                      w="100%"
                      h={{ base: "200px", md: "220px" }}
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </Box>
                ))}
              </Flex>
            </Box>

            <Flex justify="center" mt={4} gap={2}>
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <Box
                  key={idx}
                  as="button"
                  w={currentIndex === idx ? "20px" : "8px"}
                  h="8px"
                  borderRadius="full"
                  bg={currentIndex === idx ? colors.accent : "#D4C8B0"}
                  transition="all 0.3s"
                  onClick={() => goToSlide(idx)}
                  _hover={{ bg: colors.accent }}
                />
              ))}
            </Flex>
          </Box>
        )}

        {/* Available Dates */}
        {destination.availableDates && destination.availableDates.length > 0 && (
          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
            mb={10}
          >
            <Heading as="h2" fontSize="2xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary} mb={4}>
              Available Dates
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
              {destination.availableDates.map((date: string) => (
                <Box
                  key={date}
                  bg={colors.bg}
                  p={4}
                  borderRadius="16px"
                  textAlign="center"
                  border={`1px solid ${colors.borderMedium}`}
                >
                  <Text fontWeight="700" color={colors.primary} fontSize="lg" fontFamily={fonts.primary}>
                    {date}
                  </Text>
                  <Button
                    mt={2}
                    size="sm"
                    bg={colors.accent}
                    color={colors.primary}
                    fontWeight="700"
                    fontFamily={fonts.secondary}
                    onClick={openModal}
                    _hover={{ bg: colors.accentHover }}
                  >
                    Book Now
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
            <Flex justify="flex-end" mt={4}>
              <Button variant="link" color={colors.accent} fontWeight="600" fontFamily={fonts.secondary} rightIcon={<FaChevronRight />}>
                View all dates
              </Button>
            </Flex>
          </Box>
        )}

        {/* The Plan - Collapsible Accordion */}
        {destination.itinerary && destination.itinerary.length > 0 && (
          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
            mb={10}
          >
            <Heading as="h2" fontSize="2xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary} mb={6}>
              The Plan
            </Heading>
            <Accordion allowToggle>
              {destination.itinerary.map((item: any, idx: number) => (
                <AccordionItem
                  key={idx}
                  border="none"
                  mb={3}
                  bg={idx % 2 === 0 ? colors.bg : colors.white}
                  borderRadius="16px"
                >
                  <AccordionButton
                    px={4}
                    py={3}
                    borderRadius="16px"
                    _hover={{ bg: `${colors.accent}0D` }}
                  >
                    <Flex flex="1" align="center" gap={4}>
                      <Badge
                        bg={colors.accent}
                        color={colors.primary}
                        fontSize="sm"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="700"
                        fontFamily={fonts.secondary}
                      >
                        {item.day}
                      </Badge>
                      <Text
                        fontWeight="700"
                        color={colors.primary}
                        flex="1"
                        textAlign="left"
                        fontFamily={fonts.primary}
                      >
                        {item.title}
                      </Text>
                      <AccordionIcon color={colors.primary} />
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel pb={4} px={4}>
                    <Text fontSize="sm" color={colors.textGray} pl={{ base: 0, md: 20 }} fontFamily={fonts.secondary}>
                      {item.desc}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        )}

        {/* Booking Details & What to Expect */}
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} mb={10}>
          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
          >
            <Heading as="h3" fontSize="xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary} mb={4}>
              Booking Details
            </Heading>
            <VStack spacing={3} align="stretch">
              {(destination.availableDates || []).map((date: string) => (
                <Flex key={date} justify="space-between" align="center" borderBottom="1px solid #E2DCD0" pb={2}>
                  <Text fontWeight="600" color={colors.primary} fontFamily={fonts.secondary}>
                    {date}
                  </Text>
                  <Badge
                    bg={colors.accent}
                    color={colors.primary}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontFamily={fonts.secondary}
                  >
                    twin share
                  </Badge>
                </Flex>
              ))}
            </VStack>
            <Button
              mt={4}
              bg={colors.accent}
              color={colors.primary}
              fontWeight="700"
              fontFamily={fonts.secondary}
              w="full"
              onClick={openModal}
              _hover={{ bg: colors.accentHover }}
            >
              Book Now →
            </Button>
            <Text mt={2} fontSize="xs" color={colors.textGray} fontFamily={fonts.secondary}>
              Please review T&C and Cancellation Policy before completing your booking
            </Text>
          </Box>

          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
          >
            <Heading as="h3" fontSize="xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary} mb={4}>
              What to Expect
            </Heading>
            <VStack spacing={4} align="stretch">
              {(destination.whatToExpect || []).map((item: any, idx: number) => (
                <Box key={idx}>
                  <Text fontWeight="700" color={colors.primary} fontSize="md" fontFamily={fonts.primary}>
                    {item.title}
                  </Text>
                  <Text fontSize="sm" color={colors.textGray} fontFamily={fonts.secondary}>
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Grid>

        {/* Included & Not Included */}
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} mb={10}>
          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
          >
            <Heading as="h3" fontSize="xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary} mb={4}>
              Included
            </Heading>
            <List spacing={2}>
              {(destination.included || []).map((item: string, idx: number) => (
                <ListItem key={idx} fontSize="sm" color={colors.textGray} fontFamily={fonts.secondary}>
                  <ListIcon as={FaCheckCircle} color={colors.accent} /> {item}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            bg={colors.white}
            borderRadius="24px"
            p={{ base: 5, md: 7 }}
            border={`1px solid ${colors.borderLight}`}
          >
            <Heading as="h3" fontSize="xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary} mb={4}>
              Not Included
            </Heading>
            <List spacing={2}>
              {(destination.notIncluded || []).map((item: string, idx: number) => (
                <ListItem key={idx} fontSize="sm" color={colors.textGray} fontFamily={fonts.secondary}>
                  <ListIcon as={FaCheckCircle} color={colors.accent} /> {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Other Journeys */}
        <Box>
          <Flex align="center" justify="space-between" mb={6}>
            <Heading as="h2" fontSize="2xl" color={colors.primary} fontWeight="800" fontFamily={fonts.primary}>
              Other Journeys
            </Heading>
            <Button variant="link" color={colors.accent} fontWeight="600" fontFamily={fonts.secondary} rightIcon={<FaChevronRight />}>
              View all
            </Button>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {otherJourneys.slice(0, 3).map((journey: any) => (
              <Box
                key={journey._id}
                bg={colors.white}
                borderRadius="20px"
                overflow="hidden"
                border={`1px solid ${colors.borderLight}`}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: `0 12px 30px ${colors.primary}1A`,
                }}
                cursor="pointer"
                onClick={() => router.push(`/journeys/${journey.locationId?.slug}`)}
              >
                <Image src={journey.galleryImages?.[0]?.url || ""} alt={journey.title} h="180px" w="100%" objectFit="cover" />
                <Box p={4}>
                  <Text fontWeight="800" color={colors.primary} fontSize="lg" noOfLines={1} fontFamily={fonts.primary} textTransform="uppercase">
                    {journey.locationId?.name || journey.title}
                  </Text>
                  <Flex justify="space-between" mt={2} align="center">
                    <Badge
                      bg={colors.accent}
                      color={colors.primary}
                      px={2}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontFamily={fonts.secondary}
                    >
                      {journey.duration}
                    </Badge>
                    <Text fontWeight="700" color={colors.primary} fontSize="sm" fontFamily={fonts.secondary}>
                      {journey.price}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
});

export default JourneyDetailsPage;