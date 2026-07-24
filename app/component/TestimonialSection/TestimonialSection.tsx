import { Box, Heading, Text, Flex, Icon, Container, VStack, HStack, Button, Avatar, SimpleGrid, Image, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { FaQuoteLeft, FaHeart, FaWhatsapp, FaUsers, FaComments, FaUserPlus, FaRocket, FaGift, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import { useState, useEffect, useRef } from "react";

// ─── Color Palette ──────────────────────────────────────────────
const colors = {
  bg: "#F5EDD8",
  primary: "#7B1035",
  primaryHover: "#66102D",
  accent: "#D4A843",
  accentHover: "#C99E3A",
  white: "#FFFFFF",
  textDark: "#2D2D2D",
  textGray: "#6B6B6B",
  border: "rgba(123,16,53,0.12)",
  cardBg: "#FFFFFF",
  lightBg: "rgba(123,16,53,0.06)",
};

// ─── Font Families ──────────────────────────────────────────────
const fonts = {
  primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
  secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif",
};

// ─── Team Data ──────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Anurag",
    role: "Founder",
    bio: "Passionate about creating experiences that go beyond sightseeing, Anurag founded SHEscapes with a vision to build a women-first travel.community centred around connection, confidence, and meaningful journeys.",
    avatar: "https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315639/Anurag_wmiw5y.jpg",
  },
  {
    name: "Dr. Somya",
    role: "Experience Curator",
    bio: "With years of experience in leading women-only tours and a Ph.D. in Travel & Tourism Management, Dr. Somya believes the best journeys are those that inspire confidence, foster meaningful connections, and leave a positive impact on both travelers and the destinations they visit.",
    avatar: "https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315639/Somya_ghsvdl.png",
  },
  {
    name: "Juhi Yadav",
    role: "Experience Host",
    bio: "With a Master's in Tourism Management and experience in leading international women-only tours, Juhi believes travel is about confidence, connection, and discovery. She is passionate about creating safe, memorable journeys that inspire women to explore the world with confidence.",
    avatar: "https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315637/Juhi_ydlcoq.jpg",
  },
  {
    name: "Nandini Kriplani",
    role: "Experience Host",
    bio: "With expertise in journalism and business administration, Nandini brings a strategic mindset and exceptional communication skills to every trip. She excels at planning, coordinating, and solving challenges on the go, ensuring travellers enjoy smooth, memorable, and confidence-building experiences from start to finish.",
    avatar: "https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315638/Nandini_kqbmgp.jpg",
  },
  {
    name: "Dr. Nimisha",
    role: "Community Host",
    bio: "A dental doctor by profession and a passionate traveler at heart, Nimisha discovered her love for travel after her transformative trip to Spiti with her cousins. She believes meaningful journeys build confidence, foster lasting connections, and inspire more women to embrace new experiences.",
    avatar: "https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315639/Nimisha_saisuy.jpg",
  },
  
];

// ─── Team Carousel Component ────────────────────────────────────
const TeamCarousel = observer(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsPerView = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 4 }) || 1;
  const totalCards = teamMembers.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Calculate translateX
  const cardWidth = 100 / cardsPerView;
  const offset = -currentIndex * cardWidth;

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
      overflow="hidden"
      w="100%"
    >
      <Flex
        transition="transform 0.5s ease"
        transform={`translateX(${offset}%)`}
        willChange="transform"
        flexWrap="nowrap"
        gap={4}
        px={{ base: 2, md: 4 }}
      >
        {teamMembers.map((member, idx) => (
          <Box
            key={idx}
            flex={`0 0 ${cardWidth}%`}
            minW={`${cardWidth}%`}
            px={{ base: 1, md: 2 }}
          >
            <Box
              w="100%"
              h="340px"
              style={{ perspective: "1000px" }}
              sx={{
                "&:hover .flip-card-inner": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <Box
                className="flip-card-inner"
                position="relative"
                w="100%"
                h="100%"
                style={{ transformStyle: "preserve-3d" }}
                transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                {/* Front */}
                <Box
                  position="absolute"
                  inset="0"
                  style={{ backfaceVisibility: "hidden" }}
                  bg={colors.white}
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(123,16,53,0.06)"
                  border="1px solid rgba(212,168,67,0.1)"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Avatar
                    size="2xl"
                    name={member.name}
                    src={member.avatar}
                    bg={colors.accent}
                    color={colors.white}
                    mb={4}
                    border="3px solid"
                    borderColor={colors.accent}
                  />
                  <Heading
                    as="h4"
                    fontSize="lg"
                    fontWeight="700"
                    color={colors.primary}
                    mb={1}
                    fontFamily={fonts.primary}
                  >
                    {member.name}
                  </Heading>
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    color={colors.accent}
                    fontFamily={fonts.secondary}
                  >
                    {member.role}
                  </Text>
                </Box>

                {/* Back */}
                <Box
                  position="absolute"
                  inset="0"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  bg={colors.lightBg}
                  borderRadius="2xl"
                  boxShadow="0 12px 40px rgba(212,168,67,0.15)"
                  border="1px solid rgba(212,168,67,0.2)"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Heading
                    as="h5"
                    fontSize="md"
                    fontWeight="700"
                    color={colors.primary}
                    mb={1}
                    fontFamily={fonts.primary}
                  >
                    About {member.name.split(" ")[0]}
                  </Heading>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color={colors.accent}
                    mb={4}
                    fontFamily={fonts.secondary}
                  >
                    {member.role}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={colors.textGray}
                    lineHeight="1.6"
                    fontFamily={fonts.secondary}
                    fontWeight="300"
                  >
                    {member.bio}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Navigation arrows (only if more than cardsPerView) */}
      {maxIndex > 0 && (
        <>
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bg="rgba(255,255,255,0.8)"
            backdropFilter="blur(4px)"
            color={colors.primary}
            borderRadius="full"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            size="sm"
            onClick={prevSlide}
            _hover={{ bg: colors.white, color: colors.primaryHover }}
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight />}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bg="rgba(255,255,255,0.8)"
            backdropFilter="blur(4px)"
            color={colors.primary}
            borderRadius="full"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            size="sm"
            onClick={nextSlide}
            _hover={{ bg: colors.white, color: colors.primaryHover }}
          />
        </>
      )}

      {/* Pagination dots */}
      {maxIndex > 0 && (
        <HStack justify="center" mt={4} spacing={2}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <Box
              key={idx}
              w="8px"
              h="8px"
              borderRadius="full"
              bg={idx === currentIndex ? colors.accent : "rgba(212,168,67,0.3)"}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
});

// ─── Main Component ──────────────────────────────────────────────
const TestimonialSection = observer(() => {
  return (
    <Box
      as="section"
      position="relative"
      bg={colors.bg}
      py={{ base: 12, md: 20 }}
      overflow="hidden"
      fontFamily={fonts.primary}
    >
      {/* Decorative top bar */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="4px"
        bg={`linear-gradient(90deg, ${colors.accent}, ${colors.primary}, ${colors.accent})`}
        opacity="0.5"
      />

      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        {/* ========== MAIN HEADING ========== */}
        <Box textAlign="center" mb={{ base: 8, md: 12 }}>
          <Flex justify="center" mb={3}>
            <Icon as={FaQuoteLeft} color={colors.accent} boxSize={5} opacity={0.7} />
          </Flex>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="600"
            color={colors.primary}
            letterSpacing="tight"
            mb={3}
            fontFamily={fonts.primary}
          >
            Inspired Travelers Share{" "}
            <Text as="span" color={colors.accent} fontWeight="700">
              Their Stories
            </Text>
          </Heading>
          <Box
            w="80px"
            h="3px"
            bg={colors.accent}
            mx="auto"
            borderRadius="full"
            mb={4}
          />
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={colors.primary}
            opacity={0.85}
            maxW="600px"
            mx="auto"
            fontFamily={fonts.secondary}
            fontWeight="300"
          >
            Real experiences from women who travelled with us – and left with lifelong friendships.
          </Text>
        </Box>

        {/* ========== TWO CARDS ROW ========== */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={{ base: 12, md: 16 }}>
          {/* Card 1: Founder's Story */}
          <Box
            bg={colors.white}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 4px 20px rgba(123,16,53,0.06)"
            border="1px solid rgba(212,168,67,0.1)"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "0 12px 40px rgba(212,168,67,0.12)",
              transform: "translateY(-6px)",
            }}
          >
            <Flex direction={{ base: "column", md: "row" }} align="stretch" minH="320px">
              <Box flex="1" p={{ base: 6, md: 7 }} bg={colors.lightBg}>
                <Box
                  bg={colors.accent}
                  display="inline-block"
                  px={3}
                  py={1}
                  borderRadius="full"
                  mb={3}
                >
                  <Text color={colors.white} fontSize="xs" fontWeight="800" letterSpacing="1px" textTransform="uppercase" fontFamily={fonts.secondary}>
                    Founder's Story
                  </Text>
                </Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="700"
                  color={colors.primary}
                  mb={3}
                  fontFamily={fonts.primary}
                >
                  Why I Started{" "}
                  <Text as="span" color={colors.accent}>
                    SHEscapes
                  </Text>
                </Heading>
                <Text
                  fontSize="sm"
                  color={colors.textGray}
                  lineHeight="1.8"
                  mb={4}
                  fontFamily={fonts.secondary}
                  fontWeight="300"
                >
                  SHEscapes was born from a simple belief: every woman deserves the freedom to travel with confidence, connection, and purpose. While I founded this journey, it's being shaped every day by an incredible community -{" "}
                  <Text as="span" fontWeight="700" color={colors.primary} fontStyle="italic">
                    "of women whose voices, experiences, and ideas inspire everything we create."
                  </Text>{" "}
                  Welcome to a community built with women, for women.
                </Text>
                <Flex align="center" gap={3}>
                  <Avatar
                    size="md"
                    name="Anurag"
                    bg={colors.accent}
                    color={colors.white}
                    src="https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315639/Anurag_wmiw5y.jpg"
                    border="2px solid"
                    borderColor={colors.accent}
                  />
                  <Box>
                    <Text fontWeight="700" color={colors.primary} fontSize="sm" fontFamily={fonts.primary}>
                      Anurag
                    </Text>
                    <Text fontSize="xs" color={colors.textGray} fontFamily={fonts.secondary} fontWeight="300">
                      Founder, SHEscapes India
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box
                flex="1"
                minH={{ base: "200px", md: "auto" }}
                position="relative"
                overflow="hidden"
              >
                <Image
                  src="https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315639/Anurag_wmiw5y.jpg"
                  alt="Why I Started SHEscapes"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient={`linear(to-b, rgba(0,0,0,0) 30%, ${colors.primary}40 100%)`}
                />
              </Box>
            </Flex>
          </Box>

          {/* Card 2: Travel Tribe */}
          <Box
            bg={colors.white}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 4px 20px rgba(123,16,53,0.06)"
            border="1px solid rgba(212,168,67,0.1)"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "0 12px 40px rgba(212,168,67,0.12)",
              transform: "translateY(-6px)",
            }}
          >
            <Flex direction={{ base: "column", md: "row" }} align="stretch" minH="320px">
              <Box flex="1" p={{ base: 6, md: 7 }} bg={colors.white}>
                <Flex align="center" gap={2} mb={3}>
                  <Icon as={FaUsers} color={colors.accent} boxSize={5} />
                  <Heading
                    as="h4"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color={colors.primary}
                    fontFamily={fonts.primary}
                  >
                    Looking For Your Travel Tribe?
                  </Heading>
                </Flex>
                <Text
                  fontSize="sm"
                  color={colors.textGray}
                  mb={4}
                  lineHeight="1.6"
                  fontFamily={fonts.secondary}
                  fontWeight="300"
                >
                  Join our growing community of mission travellers.
                </Text>
                <VStack spacing={2.5} align="stretch" mb={4}>
                  {[
                    { icon: FaComments, label: "Travel Discussions" },
                    { icon: FaUserPlus, label: "Meet Like-Minded Women" },
                    { icon: FaRocket, label: "Early Access To Trips" },
                    { icon: FaUsers, label: "Community Meetings" },
                    { icon: FaGift, label: "Exclusive Offers" },
                  ].map((item, idx) => (
                    <HStack
                      key={idx}
                      spacing={3}
                      align="center"
                      bg={colors.lightBg}
                      px={3.5}
                      py={2}
                      borderRadius="lg"
                      border="1px solid rgba(212,168,67,0.06)"
                    >
                      <Icon as={item.icon} color={colors.accent} boxSize={3.5} flexShrink={0} />
                      <Text fontSize="xs" color={colors.primary} fontWeight="500" fontFamily={fonts.secondary}>
                        {item.label}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
                <Button
                  leftIcon={<Icon as={FaWhatsapp} boxSize={5} />}
                  bg={colors.accent}
                  color={colors.white}
                  size="md"
                  w="100%"
                  py={5}
                  borderRadius="xl"
                  fontWeight="700"
                  fontSize="sm"
                  letterSpacing="0.5px"
                  transition="all 0.3s ease"
                  onClick={() => window.open("https://wa.me/919217490094", "_blank")}
                  fontFamily={fonts.secondary}
                  _hover={{
                    bg: colors.accentHover,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 24px ${colors.accent}4D`,
                  }}
                >
                  Join WhatsApp Community
                </Button>
              </Box>
              <Box
                flex="1"
                minH={{ base: "200px", md: "auto" }}
                position="relative"
                overflow="hidden"
              >
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/063/100/small/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg"
                  alt="Looking For Your Travel Tribe"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient={`linear(to-b, rgba(0,0,0,0) 30%, ${colors.primary}40 100%)`}
                />
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>

        {/* ========== MEET THE TEAM (AUTO-SCROLL CAROUSEL) ========== */}
        <Box mt={{ base: 16, md: 20 }}>
          <Box textAlign="center" mb={{ base: 8, md: 10 }}>
            <Flex justify="center" mb={2}>
              <Icon as={FaUsers} color={colors.accent} boxSize={6} opacity={0.6} />
            </Flex>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="600"
              color={colors.primary}
              fontFamily={fonts.primary}
              mb={2}
            >
              Meet the{" "}
              <Text as="span" color={colors.accent}>
                Team
              </Text>
            </Heading>
            <Box
              w="60px"
              h="3px"
              bg={colors.accent}
              mx="auto"
              borderRadius="full"
              mb={3}
            />
            <Text
              fontSize="sm"
              color={colors.textGray}
              fontFamily={fonts.secondary}
              fontWeight="300"
              maxW="700px"
              mx="auto"
            >
              SHEscapes is being built by a small team with one shared belief: women deserve travel experiences that feel safe, meaningful, and deeply connected. While we're just getting started, we're committed to building this journey alongside our growing community.
            </Text>
          </Box>

          {/* Team Carousel with auto-scroll */}
          <TeamCarousel />
        </Box>

        {/* Decorative heart at bottom */}
        <Flex justify="center" mt={8}>
          <Icon as={FaHeart} color={colors.accent} boxSize={4} opacity={0.6} />
        </Flex>
      </Container>
    </Box>
  );
});

export default TestimonialSection;