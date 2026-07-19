'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  SimpleGrid,
  Divider,
  Icon,
  VStack,
  HStack,
  Badge,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';
import {
  FaCompass,
  FaPhoneAlt,
  FaTicketAlt,
  FaUsers,
  FaSuitcase,
  FaMountain,
  FaHeart,
  FaArrowRight,
  FaChevronUp,
} from 'react-icons/fa';

// ─── Color Palette ──────────────────────────────────────────────
const colors = {
  primary: '#7B1035',
  primaryHover: '#66102D',
  accent: '#D4A843',
  accentHover: '#C99E3A',
  bg: '#F5EDD8',
  white: '#FFFFFF',
  textDark: '#2D2D2D',
  textGray: '#6B6B6B',
  lightBg: '#FDF9F2',
};

// ─── Font Families ──────────────────────────────────────────────
const fonts = {
  primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
  secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif",
};

const Page: React.FC = () => {
  const steps = [
    {
      title: 'Explore Your Destination',
      icon: FaCompass,
      description:
        'Every journey begins with choosing an experience that speaks to you. Browse our carefully curated destinations, explore detailed itineraries, understand what\'s included, and find the trip that matches your travel style.',
      list: [
        'Complete day-wise itinerary',
        'Accommodation details',
        'Trip highlights',
        'Difficulty level',
        'Best time to travel',
        'Group size',
        'Inclusions & exclusions',
        'Pricing information',
      ],
      footer:
        "Our focus isn't just on sightseeing—it's on creating experiences that help you connect with the destination and the people travelling alongside you.",
    },
    {
      title: 'Connect With Us',
      icon: FaPhoneAlt,
      description:
        'Have questions before booking? Our team is just a message or call away. We\'ll help you understand:',
      list: [
        'Whether the trip is right for you',
        'Fitness requirements',
        'Accommodation details',
        'Payment options',
        'Travel essentials',
        'Any special requests you may have',
      ],
      footer: 'We believe every traveller should feel confident before making a booking.',
    },
    {
      title: 'Reserve Your Seat',
      icon: FaTicketAlt,
      description:
        'Once you\'ve decided, booking your journey is simple. Complete your booking by paying the required advance amount. After confirmation, you\'ll receive:',
      list: [
        'Booking confirmation',
        'Payment receipt',
        'Trip information',
        'Important travel dates',
        'Next steps',
      ],
      footer: 'Your seat is officially reserved.',
    },
    {
      title: 'Welcome to the SHEscapes Community',
      icon: FaUsers,
      description:
        'This is where the journey truly begins. A few weeks before departure, you\'ll be invited to a private WhatsApp group exclusively for your batch. Here you\'ll:',
      list: [
        'Meet your fellow travellers',
        'Get introduced to your Experience Lead',
        'Receive important travel updates',
        'Ask questions',
        'Coordinate travel plans',
        'Start building connections even before the trip begins',
      ],
      footer: 'Many lifelong friendships begin right here.',
    },
    {
      title: 'Get Trip Ready',
      icon: FaSuitcase,
      description:
        'As your departure date approaches, we\'ll ensure you\'re fully prepared. You\'ll receive:',
      list: [
        'Detailed packing checklist',
        'Weather updates',
        'Meeting point details',
        'Travel guidelines',
        'Emergency contact information',
        'Destination tips',
        'What to carry and what to avoid',
      ],
      footer: 'We want you to focus on the excitement—not the planning.',
    },
    {
      title: 'Experience the Journey',
      icon: FaMountain,
      description:
        'Once the trip begins, all you need to do is enjoy the experience. Your journey includes thoughtfully selected accommodations, carefully planned itineraries, authentic local experiences, and the support of your Experience Lead throughout the trip.',
      list: [],
      footer:
        "You'll discover beautiful destinations, meaningful conversations, hidden gems, local culture, and moments you'll remember long after the journey ends. Because at SHEscapes, we believe travel is about much more than checking destinations off a list.",
    },
    {
      title: 'Stay Connected',
      icon: FaHeart,
      description:
        'For us, the journey doesn\'t end when you return home. As part of the SHEscapes community, you\'ll continue to enjoy:',
      list: [
        'Community updates',
        'Future trip announcements',
        'Meet-ups and events',
        'Travel inspiration',
        'Priority access to upcoming journeys',
        'A growing network of women who share your love for travel',
      ],
      footer: 'The memories last long after the trip is over—and so do the connections.',
    },
  ];

  const promises = [
    {
      title: 'Thoughtfully Curated Experiences',
      description:
        'Every destination, stay, and activity is selected with care to create meaningful experiences.',
    },
    {
      title: 'Small Group Travel',
      description:
        'Smaller groups mean better conversations, stronger friendships, and more personalized experiences.',
    },
    {
      title: 'Women-First Approach',
      description:
        'Every journey is designed with women\'s comfort, confidence, and overall experience at its core.',
    },
    {
      title: 'Community Beyond Travel',
      description:
        'You\'re not just booking a trip—you become part of a growing community that celebrates exploration, connection, and personal growth.',
    },
  ];

  return (
    <Box bg={colors.bg}>
      {/* ========== HERO – Bottom-anchored image ========== */}
      <Box
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        pb={{ base: 12, md: 20 }}
        pt={{ base: '6rem', md: '8rem' }}
        bgImage="url('https://www.holidaymonk.com/wp-content/uploads/2022/03/himachal-mountains-snow-winter.jpg')"
        bgSize="cover"
        bgPosition="bottom"
        bgAttachment="fixed"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: `linear-gradient(to top, ${colors.primary}E6 0%, ${colors.accent}99 70%, ${colors.primary}33 100%)`,
          zIndex: 1,
        }}
      >
        <Container
          maxW="1100px"
          position="relative"
          zIndex={2}
          textAlign="center"
          color="white"
          px={{ base: 4, md: 6 }}
        >
          <Badge
            bg={colors.accent}
            color="white"
            px={6}
            py={2}
            borderRadius="full"
            fontSize="md"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={6}
            boxShadow="lg"
            fontFamily={fonts.secondary}
          >
            ✦ Welcome to SHEscapes ✦
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontFamily={fonts.primary}
            fontWeight={700}
            mb={4}
            textShadow="0 4px 30px rgba(0,0,0,0.4)"
            letterSpacing="tight"
          >
            Your Journey Starts Here
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight={300}
            fontFamily={fonts.secondary}
            maxW="700px"
            mx="auto"
            textShadow="0 2px 12px rgba(0,0,0,0.3)"
            lineHeight="1.8"
            opacity={0.95}
          >
            Whether this is your first solo trip or your fiftieth adventure, we've designed every step to be simple,
            transparent, and stress-free. From discovering your destination to returning home with lifelong memories,
            our team is with you throughout the journey.
          </Text>
        </Container>
      </Box>

      {/* ========== MAIN CONTENT – Card-based steps ========== */}
      <Container maxW="1100px" py={{ base: '4rem', md: '6rem' }} px={{ base: 4, md: 6 }}>
        <VStack spacing={12} align="stretch">
          {steps.map((step, index) => (
            <Card
              key={index}
              bg={colors.white}
              boxShadow="0 4px 20px rgba(123,16,53,0.08)"
              borderRadius="2xl"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(123,16,53,0.12)',
              }}
            >
              <CardHeader
                bg={`linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`}
                py={4}
                px={6}
              >
                <HStack spacing={4}>
                  <Icon as={step.icon} color="white" boxSize={6} />
                  <Heading
                    as="h2"
                    size="lg"
                    color="white"
                    fontFamily={fonts.primary}
                    fontWeight={600}
                  >
                    Step {index + 1}: {step.title}
                  </Heading>
                </HStack>
              </CardHeader>
              <CardBody px={6} py={6}>
                <Text fontSize="md" color={colors.textGray} fontWeight={300} fontFamily={fonts.secondary} mb={4}>
                  {step.description}
                </Text>

                {step.list.length > 0 && (
                  <Box bg={colors.bg} p={5} borderRadius="md" mb={4}>
                    <Text fontWeight={600} fontFamily={fonts.secondary} color={colors.primary} mb={2}>
                      Includes:
                    </Text>
                    <UnorderedList
                      spacing={2}
                      pl={4}
                      fontFamily={fonts.secondary}
                      fontWeight={300}
                      color={colors.textGray}
                      sx={{
                        listStyleType: 'disc',
                        '& li::marker': {
                          color: colors.accent,
                        },
                      }}
                    >
                      {step.list.map((item, idx) => (
                        <ListItem key={idx} _hover={{ color: colors.primary }} transition="color 0.2s">
                          {item}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                )}

                {step.footer && (
                  <Box
                    borderLeft={`6px solid ${colors.accent}`}
                    pl={4}
                    fontFamily={fonts.secondary}
                    fontWeight={300}
                    color={colors.textGray}
                    fontSize="md"
                    py={1}
                  >
                    {step.footer}
                  </Box>
                )}
              </CardBody>
            </Card>
          ))}
        </VStack>

        {/* ========== OUR PROMISE ========== */}
        <Box mt={16}>
          <Heading
            as="h2"
            size="xl"
            color={colors.primary}
            fontFamily={fonts.primary}
            fontWeight={700}
            textAlign="center"
            mb={2}
          >
            Our Promise to Every Traveller
          </Heading>
          <Divider
            borderColor={colors.accent}
            opacity={0.5}
            width="80px"
            mx="auto"
            borderWidth="3px"
            borderRadius="full"
            mb={8}
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {promises.map((promise, idx) => (
              <Box
                key={idx}
                bg={colors.white}
                p={6}
                borderRadius="2xl"
                borderLeft={`6px solid ${colors.accent}`}
                boxShadow="0 4px 20px rgba(123,16,53,0.08)"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(123,16,53,0.12)' }}
                transition="all 0.3s"
              >
                <Heading as="h3" size="md" color={colors.primary} fontFamily={fonts.primary} fontWeight={600} mb={2}>
                  {promise.title}
                </Heading>
                <Text fontFamily={fonts.secondary} fontWeight={300} color={colors.textGray}>
                  {promise.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* ========== CTA SECTION ========== */}
        <Divider
          borderColor={colors.accent}
          opacity={0.4}
          my={16}
          borderStyle="dashed"
          borderWidth="2px"
        />

        <Box
          position="relative"
          bg={colors.bg}
          p={{ base: 6, md: 12 }}
          borderRadius="3xl"
          boxShadow="xl"
          textAlign="center"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: { base: '200px', md: '300px' },
            height: { base: '200px', md: '300px' },
            bg: 'rgba(212,168,67,0.08)',
            borderRadius: 'full',
            zIndex: 0,
          }}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: { base: '150px', md: '200px' },
            height: { base: '150px', md: '200px' },
            bg: 'rgba(123,16,53,0.05)',
            borderRadius: 'full',
            zIndex: 0,
          }}
        >
          <Box position="relative" zIndex={1}>
            <Icon as={FaCompass} color={colors.accent} boxSize={{ base: 8, md: 10 }} mb={3} />
            <Heading
              as="h2"
              size="lg"
              color={colors.primary}
              fontFamily={fonts.primary}
              fontWeight={700}
              mb={3}
              fontSize={{ base: '2xl', md: '3xl' }}
            >
              Ready to Begin?
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontFamily={fonts.secondary}
              fontWeight={300}
              color={colors.textGray}
              maxW="500px"
              mx="auto"
              mb={4}
            >
              Your next journey is just one decision away.
            </Text>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontFamily={fonts.primary}
              color={colors.accent}
              fontWeight={400}
              fontStyle="italic"
              mb={6}
            >
              Come Solo. Leave Connected.
            </Text>
            <Button
              bg={colors.primary}
              color="white"
              size="lg"
              px={{ base: 8, md: 12 }}
              py={{ base: 6, md: 7 }}
              borderRadius="full"
              fontFamily={fonts.secondary}
              fontWeight={700}
              _hover={{ bg: colors.primaryHover, transform: 'translateY(-4px)', boxShadow: 'lg' }}
              transition="all 0.3s"
              rightIcon={<Icon as={FaArrowRight} />}
              boxShadow="md"
              width={{ base: '100%', md: 'auto' }}
            >
              Explore Destinations
            </Button>
          </Box>
        </Box>
      </Container>

      {/* ========== BACK TO TOP BUTTON ========== */}
      <Box
        position="fixed"
        bottom={8}
        right={8}
        zIndex={999}
        display={{ base: 'none', md: 'block' }}
      >
        <Button
          as="a"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          bg={colors.primary}
          color="white"
          borderRadius="full"
          boxShadow="lg"
          _hover={{ bg: colors.primaryHover, transform: 'scale(1.05)' }}
          transition="all 0.3s"
          p={3}
          minW="auto"
        >
          <Icon as={FaChevronUp} boxSize={5} />
        </Button>
      </Box>
    </Box>
  );
};

export default Page;