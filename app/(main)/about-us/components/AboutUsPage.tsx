import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Button,
  Icon,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaGlobe,
  FaCheck,
  FaHeart,
  FaSuitcase,
  FaArrowRight,
  FaFemale,
  FaCampground,
} from 'react-icons/fa';
import { FaGroupArrowsRotate, FaHandHoldingDroplet, FaUserGroup } from 'react-icons/fa6';

// ─── Motion Components ──────────────────────────────────────────────
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

// ─── Exact Color Palette ────────────────────────────────────────────
const colors = {
  bg: "#F5EDD8",
  primary: "#7B1035",
  primaryHover: "#66102D",
  accent: "#D4A843",
  accentLight: "#E5C27A",
  textGray: "#6B6B6B",
  white: "#FFFFFF",
};

// ─── Exact Font Families ────────────────────────────────────────────
const fonts = {
  primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif", // ALESHA fallback
  secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif", // AVENIR fallback
};

// ─── Animation Variants ─────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Steps Data ─────────────────────────────────────────────────────
const steps = [
  {
    id: 1,
    title: "Women First",
    description:
      "Every experience is thoughtfully designed with women's comfort and confidence at its heart.",
    icon: FaFemale,
    image:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-sitting-on-a-hill-and-watching-nature-free-photo.jpg?w=2210&quality=70",
  },
  {
    id: 2,
    title: "Community Before Trips",
    description:
      "We believe friendships should begin before the journey starts.",
    icon: FaUserGroup,
    image:
      "https://media.istockphoto.com/id/1146671677/photo/four-young-female-friends-meeting-sit-at-table-in-coffee-shop-and-talk.jpg?s=612x612&w=0&k=20&c=U-rnUtiTONk9xk-W4Rjted94p0lI6XrDMrjBxch6taM=",
  },
  {
    id: 3,
    title: "Live Like a Local",
    description:
      "We choose experiences that help you connect with destinations—not just visit them.",
    icon: FaCampground,
    image:
      "https://c.ndtvimg.com/gws/ms/where-to-go-on-a-girls-trip-in-india/assets/16.jpeg?1742279081",
  },
  {
    id: 4,
    title: "Book Your First Trip",
    description:
      "You take the leap and book your first SHEscapes journey.",
    icon: FaSuitcase,
    image:
      "https://www.livelikeitstheweekend.com/wp-content/uploads/2020/01/The-Best-Girls-Trip-Destinations_-32.jpg",
  },
  {
    id: 5,
    title: "Small Groups",
    description:
      "Smaller groups create stronger conversations and unforgettable memories.",
    icon: FaGroupArrowsRotate,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGy77tadgx9WBfNRQM8LDIpVQJNNgTYQtcA8IWWLuAQavnHu9goJGArU&s=10",
  },
  {
    id: 6,
    title: "Meaningful Travel",
    description:
      "Every trip should leave you with stories, confidence and lasting friendships.",
    icon: FaHandHoldingDroplet,
    image:
      "https://thumbs.dreamstime.com/b/pretty-caucasian-teenager-girl-curly-hair-standing-hill-hands-up-wild-flowers-sun-light-blue-sky-background-449348232.jpg",
  },
];

// ─── Timeline Connector ────────────────────────────────────────────
const TimelineConnector = () => (
  <Box
    position="absolute"
    top={{ base: "215px", md: "235px", lg: "245px" }}
    left="0"
    right="0"
    h="2px"
    display={{ base: "none", lg: "block" }}
    zIndex={0}
  >
    <Box
      position="absolute"
      top="0"
      left="8%"
      right="8%"
      h="2px"
      borderTop="2px dashed"
      borderColor={`${colors.accent}60`}
    />
    <Box
      position="absolute"
      top="-5px"
      right="6%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={FaArrowRight} color={colors.accent} boxSize={3} opacity={0.6} />
    </Box>
  </Box>
);

// ─── Step Card ──────────────────────────────────────────────────────
const StepCard = ({ step }: { step: typeof steps[0] }) => (
  <VStack
    as={motion.div}
    variants={itemVariants}
    align="center"
    spacing={0}
    position="relative"
    flex="1"
    minW={{ base: "140px", sm: "160px", md: "170px", lg: "150px" }}
    maxW={{ base: "180px", sm: "200px", md: "180px", lg: "160px" }}
  >
    <Box position="relative" zIndex={3} mb="-22px">
      <Circle
        size="52px"
        bg={colors.accent}
        border="3px solid"
        borderColor={colors.bg}
        boxShadow={`0 4px 15px ${colors.primary}26`}
      >
        <Icon as={step.icon} color="white" boxSize={5} />
      </Circle>
    </Box>

    <Box
      w="full"
      h={{ base: "160px", md: "190px", lg: "200px" }}
      overflow="hidden"
      borderRadius="50% 50% 16px 16px / 30% 30% 16px 16px"
      position="relative"
      boxShadow={`0 8px 30px ${colors.primary}1A`}
    >
      <Image
        src={step.image}
        alt={step.title}
        w="full"
        h="full"
        objectFit="cover"
        transition="transform 0.5s ease"
        _hover={{ transform: "scale(1.08)" }}
      />
    </Box>

    <Circle
      size="32px"
      bg={colors.primary}
      color="white"
      fontWeight="bold"
      fontSize="sm"
      mt="-16px"
      zIndex={2}
      border="3px solid"
      borderColor={colors.bg}
      boxShadow={`0 2px 10px ${colors.primary}33`}
    >
      {step.id}
    </Circle>

    <Text
      fontSize={{ base: "12px", md: "14px", lg: "15px" }}
      fontWeight="700"
      color={colors.primary}
      textAlign="center"
      mt={3}
      lineHeight="1.3"
      px={1}
      fontFamily={fonts.primary}
    >
      {step.title}
    </Text>

    <Text
      fontSize={{ base: "10px", md: "12px" }}
      color={colors.textGray}
      textAlign="center"
      mt={1.5}
      lineHeight="1.6"
      px={{ base: 1, md: 2 }}
      fontFamily={fonts.secondary}
      fontWeight="300"
    >
      {step.description}
    </Text>
  </VStack>
);

// ─── Main Component ─────────────────────────────────────────────────
const AboutUsPage = () => {
  return (
    <Box bg={colors.bg} minH="100vh" overflowX="hidden">

      {/* ============================================
          HERO SECTION – fully responsive
          ============================================ */}
      <Box position="relative" w="full">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <Box
            position="relative"
            h={{ base: '500px', md: '600px', lg: '650px' }}
            w="full"
            overflow="hidden"
          >
            <Image
              src="https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315297/Travel_9_nd7aq9.png"
              alt="Women travelers enjoying mountain view"
              objectFit="cover"
              w="full"
              h="full"
              objectPosition="right center"
            />

            {/* Darker overlay for readability */}
            <Box
              position="absolute"
              inset={0}
              bg={`linear-gradient(to right, ${colors.primary}CC 0%, ${colors.primary}99 35%, ${colors.primary}4D 55%, transparent 70%)`}
            />

            {/* Bottom fade to background */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="40%"
              bg={`linear-gradient(to top, ${colors.bg} 0%, ${colors.bg}D9 25%, ${colors.bg}66 60%, transparent 100%)`}
            />

            <Container maxW="1200px" position="absolute" inset={0}>
              <Flex
                direction="column"
                justify="center"
                h="full"
                maxW={{ base: '100%', md: '50%', lg: '45%' }}
                pl={{ base: 4, md: 0 }}
                pr={{ base: 4, md: 0 }}
              >
                <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Text
                    fontSize={{ base: '18px', md: '22px', lg: '26px' }}
                    color={colors.accent}
                    fontFamily={fonts.primary}
                    fontStyle="italic"
                    mb={6}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    textShadow="0 2px 20px rgba(0,0,0,0.5)"
                  >
                    More Than a Travel Company. A Community for Women Who Love to Explore.
                    <Icon as={FaHeart} boxSize={4} color={colors.accent} />
                  </Text>
                </MotionBox>

                <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Text
                    fontSize={{ base: '13px', md: '15px' }}
                    color={colors.bg}
                    lineHeight="1.8"
                    mb={4}
                    maxW="420px"
                    textShadow="0 2px 15px rgba(0,0,0,0.6)"
                    fontFamily={fonts.secondary}
                  >
                    SHEscapes was created with one belief—that travel should help women feel confident, connected, and inspired. Every journey we design is built around meaningful experiences, genuine connections, and unforgettable memories.
                  </Text>
                </MotionBox>

                <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Text
                    fontSize={{ base: '13px', md: '15px' }}
                    color={colors.bg}
                    lineHeight="1.8"
                    mb={6}
                    maxW="420px"
                    textShadow="0 2px 15px rgba(0,0,0,0.6)"
                    fontFamily={fonts.secondary}
                  >
                    Large emotional image of women laughing around a bonfire or enjoying tea with mountain views.
                  </Text>
                </MotionBox>

                <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Text
                    fontSize="15px"
                    fontWeight="600"
                    color={colors.accent}
                    letterSpacing="0.5px"
                    textShadow="0 2px 15px rgba(0,0,0,0.6)"
                    fontFamily={fonts.secondary}
                  >
                    Come Solo. Leave Connected.
                  </Text>
                </MotionBox>
              </Flex>
            </Container>
          </Box>
        </MotionBox>
      </Box>

      {/* ============================================
          OUR STORY SECTION
          ============================================ */}
      <Container maxW="1200px" py={{ base: 12, md: 16, lg: 20 }}>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          {/* Left: Photo Grid – fully responsive */}
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={4} position="relative">
              {[
                'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&q=80',
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
                'https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926677/Travel_2_jr3bvq.png',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
              ].map((src, i) => (
                <GridItem key={i}>
                  <MotionBox variants={fadeInUp}>
                    <Box
                      overflow="hidden"
                      borderRadius="8px"
                      boxShadow={`0 4px 20px ${colors.primary}26`}
                      transform={i % 2 === 0 ? 'rotate(-3deg)' : 'rotate(2deg)'}
                      transition="transform 0.3s"
                      _hover={{ transform: 'rotate(0deg) scale(1.02)' }}
                    >
                      <Image
                        src={src}
                        alt={`Travel ${i+1}`}
                        w="full"
                        h={{ base: '120px', md: '180px' }}
                        objectFit="cover"
                      />
                    </Box>
                  </MotionBox>
                </GridItem>
              ))}
            </Grid>
            <Box position="absolute" bottom="-20px" left="20px">
              <Icon as={FaHeart} boxSize={8} color={colors.accent} opacity={0.6} />
            </Box>
          </MotionBox>

          {/* Right: Story Content */}
          <MotionVStack
            align="flex-start"
            spacing={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <MotionBox variants={fadeInUp}>
              <Heading
                as="h2"
                fontSize={{ base: '28px', md: '32px' }}
                fontWeight="400"
                color={colors.primary}
                fontFamily={fonts.primary}
              >
                Our Story
              </Heading>
              <Flex align="center" gap={3} mt={2}>
                <Box w="40px" h="0.5px" bg={colors.accent} />
                <Icon as={FaHeart} boxSize={3} color={colors.accent} />
                <Box w="40px" h="0.5px" bg={colors.accent} />
              </Flex>
            </MotionBox>

            <MotionBox variants={fadeInUp}>
              <Text fontSize="15px" color={colors.primary} lineHeight="1.8" fontFamily={fonts.secondary}>
                SHEscapes began with a simple observation: many women wanted to travel more but often waited for the right companion, worried about safety, or looked for experiences that felt more personal than commercial.
              </Text>
            </MotionBox>

            <MotionBox variants={fadeInUp}>
              <Text fontSize="15px" color={colors.primary} lineHeight="1.8" fontFamily={fonts.secondary}>
                We wanted to create something different—not just another travel company, but a space where every journey feels like travelling with friends.
              </Text>
            </MotionBox>

            <MotionBox variants={fadeInUp}>
              <Text fontSize="15px" color={colors.primary} lineHeight="1.8" fontFamily={fonts.secondary}>
                Today, SHEscapes is building a community where women can explore new destinations, discover new perspectives, and return home with lifelong memories.
              </Text>
            </MotionBox>

            <MotionBox
              variants={fadeInUp}
              bg={colors.white}
              p={5}
              borderRadius="12px"
              boxShadow={`0 2px 15px ${colors.primary}14`}
              w="full"
            >
              <Flex gap={4} align="flex-start">
                <Box p={2} borderRadius="full" bg={colors.bg} flexShrink={0}>
                  <Icon as={FaGlobe} boxSize={6} color={colors.primary} />
                </Box>
                <VStack align="flex-start" spacing={1}>
                  <Text fontWeight="600" color={colors.primary} fontSize="15px" fontFamily={fonts.secondary}>
                    We're not just planning trips.
                  </Text>
                  <Text fontSize="14px" color={colors.primary} lineHeight="1.7" fontFamily={fonts.secondary}>
                    We're building a movement of women who explore, empower, and inspire.
                  </Text>
                </VStack>
              </Flex>
            </MotionBox>
          </MotionVStack>
        </Grid>
      </Container>

      {/* ============================================
          WHAT WE BELIEVE – responsive step cards
          ============================================ */}
      <Container maxW="1200px" py={{ base: 12, md: 16, lg: 20 }}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <Heading
            as="h2"
            fontSize={{ base: '28px', md: '32px' }}
            fontWeight="400"
            color={colors.primary}
            fontFamily={fonts.primary}
            textAlign="center"
            mb={2}
          >
            What We Believe
          </Heading>
          <Flex align="center" justify="center" gap={3} mb={8}>
            <Box w="40px" h="0.5px" bg={colors.accent} />
            <Icon as={FaHeart} boxSize={3} color={colors.accent} />
            <Box w="40px" h="0.5px" bg={colors.accent} />
          </Flex>
        </MotionBox>

        <Box position="relative" mt={4}>
          <TimelineConnector />
          <Flex
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            justify="center"
            align="flex-start"
            gap={{ base: 4, sm: 5, md: 5, lg: 4, xl: 6 }}
            flexWrap="wrap"
            position="relative"
            zIndex={1}
          >
            {steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </Flex>
        </Box>
      </Container>

      {/* ============================================
          FOUNDER NOTE & WHY CHOOSE
          ============================================ */}
      <Box bg={colors.white} py={{ base: 12, md: 16, lg: 20 }}>
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: '1fr', lg: '1.2fr 1fr' }}
            gap={{ base: 10, lg: 16 }}
            alignItems="start"
          >
            {/* Founder Note */}
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              <MotionBox variants={fadeInUp} mb={6}>
                <Heading
                  as="h2"
                  fontSize={{ base: '24px', md: '28px' }}
                  fontWeight="400"
                  color={colors.primary}
                  fontFamily={fonts.primary}
                  fontStyle="italic"
                >
                  A Note from Our Founder
                </Heading>
              </MotionBox>

              <Flex gap={6} direction={{ base: 'column', sm: 'row' }}>
                <MotionBox variants={fadeInUp} flexShrink={0}>
                  <Box
                    w={{ base: '120px', sm: '140px' }}
                    h={{ base: '120px', sm: '140px' }}
                    borderRadius="full"
                    overflow="hidden"
                    boxShadow={`0 4px 20px ${colors.primary}26`}
                    border="3px solid"
                    borderColor={colors.accent}
                  >
                    <Image
                      src="https://res.cloudinary.com/dygvzvd6p/image/upload/v1784315639/Anurag_wmiw5y.jpg"
                      alt="Anurag Agrawal - Founder"
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                </MotionBox>

                <MotionVStack align="flex-start" spacing={4} variants={staggerContainer}>
                  <MotionBox variants={fadeInUp}>
                    <Text fontSize="14px" color={colors.primary} lineHeight="1.8" fontFamily={fonts.secondary}>
                      I started SHEscapes because I believe travel changes more than just destinations—it changes you. It builds confidence, opens perspectives, and connects us to incredible people and stories.
                    </Text>
                  </MotionBox>
                  <MotionBox variants={fadeInUp}>
                    <Text fontSize="14px" color={colors.primary} lineHeight="1.8" fontFamily={fonts.secondary}>
                      SHEscapes is my way of creating a space where every woman feels free to explore the world, be herself, and know that she's never alone on her journey.
                    </Text>
                  </MotionBox>
                  <MotionBox variants={fadeInUp}>
                    <Text
                      fontSize="16px"
                      fontFamily={fonts.primary}
                      fontStyle="italic"
                      color={colors.primary}
                    >
                      Every journey begins with a single step. Take yours with us.
                      <Icon as={FaHeart} boxSize={3} ml={1} color={colors.accent} />
                    </Text>
                  </MotionBox>
                  <MotionBox variants={fadeInUp} pt={2}>
                    <Text fontWeight="600" color={colors.primary} fontSize="14px" fontFamily={fonts.secondary}>
                      — Anurag Agrawal
                    </Text>
                    <Text fontSize="12px" color={colors.primary} opacity={0.7} fontFamily={fonts.secondary}>
                      Founder, SHEscapes India
                    </Text>
                  </MotionBox>
                </MotionVStack>
              </Flex>
            </MotionBox>

            {/* Why Women Choose */}
            <MotionBox
              bg={colors.bg}
              p={{ base: 6, md: 8 }}
              borderRadius="16px"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              border="1px solid"
              borderColor={`${colors.accent}4D`}
            >
              <MotionBox variants={fadeInUp} mb={6}>
                <Heading
                  as="h3"
                  fontSize="18px"
                  fontWeight="600"
                  color={colors.primary}
                  fontFamily={fonts.primary}
                >
                  Why Women Choose SHEscapes
                </Heading>
              </MotionBox>

              <VStack align="flex-start" spacing={4}>
                {[
                  'Small Groups',
                  'Boutique Stays',
                  'Local Experiences',
                  'Women-Centric Planning',
                  'Community Support',
                  'Trusted Trip Leaders',
                ].map((item, index) => (
                  <MotionFlex key={index} variants={fadeInUp} align="center" gap={3}>
                    <Box
                      p={1}
                      borderRadius="full"
                      bg={colors.primary}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaCheck} boxSize={3} color={colors.white} />
                    </Box>
                    <Text fontSize="14px" color={colors.primary} fontFamily={fonts.secondary}>
                      {item}
                    </Text>
                  </MotionFlex>
                ))}
              </VStack>

              <MotionBox variants={fadeInUp} mt={8}>
                <Button
                  bg={colors.primary}
                  color={colors.white}
                  size="md"
                  borderRadius="8px"
                  px={6}
                  py={5}
                  fontSize="14px"
                  fontWeight="500"
                  leftIcon={<Icon as={FaHeart} boxSize={3} />}
                  _hover={{ bg: colors.primaryHover, transform: 'translateY(-2px)' }}
                  _active={{ bg: colors.primaryHover }}
                  transition="all 0.3s"
                  w={{ base: 'full', sm: 'auto' }}
                  fontFamily={fonts.secondary}
                >
                  Be a Part of Our Journey
                </Button>
              </MotionBox>
            </MotionBox>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsPage;