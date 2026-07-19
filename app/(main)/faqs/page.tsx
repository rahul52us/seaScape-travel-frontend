'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Icon,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';
import {
  FaQuestion,
  FaEnvelope,
  FaWhatsapp,
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
  // FAQ data grouped by category
  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is SHEscapes?',
          a: 'SHEscapes is a women-first travel community that creates thoughtfully curated travel experiences designed to help women explore new destinations, build meaningful connections, and travel with confidence. We focus on small group journeys that go beyond sightseeing to create lasting memories and friendships.',
        },
        {
          q: 'Who can join SHEscapes trips?',
          a: 'Our journeys are open to women aged 18 and above who share a love for travel, adventure, and meaningful experiences. Whether you\'re travelling solo or with a friend, you\'ll always be welcomed into our community.',
        },
        {
          q: 'Do I need prior travel experience?',
          a: 'Not at all. Many of our travellers join us on their very first solo or group trip. Our team is here to guide you before, during, and after your journey to ensure you feel comfortable every step of the way.',
        },
      ],
    },
    {
      category: 'Bookings & Payments',
      questions: [
        {
          q: 'How do I book a trip?',
          a: 'Booking is simple. Choose your preferred destination, submit your booking request, and complete the advance payment to confirm your seat. Once confirmed, you\'ll receive all the necessary travel information and next steps.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept secure online payments through UPI, bank transfers, debit cards, credit cards, and other digital payment methods available on our website.',
        },
        {
          q: 'Can I pay in instalments?',
          a: 'Depending on the departure date, we may offer flexible payment options for selected trips. Please contact our team to learn about available payment plans.',
        },
        {
          q: 'Will I receive a booking confirmation?',
          a: 'Yes. As soon as your booking is confirmed, you\'ll receive a confirmation email or WhatsApp message containing your itinerary, payment details, and travel instructions.',
        },
      ],
    },
    {
      category: 'Solo Travel',
      questions: [
        {
          q: 'I\'ve never travelled solo before. Will I feel comfortable?',
          a: 'Absolutely. Many women join SHEscapes without knowing anyone in the group. Before the trip, you\'ll be added to a private WhatsApp group where you can meet your fellow travellers and your Experience Lead, making it easier to connect before the journey begins.',
        },
        {
          q: 'Can I join if I\'m travelling alone?',
          a: 'Yes. In fact, many of our travellers join solo. Our small group format makes it easy to build friendships and enjoy the experience together.',
        },
        {
          q: 'Can I travel with my friend or sister?',
          a: 'Of course. You can book together while still enjoying the community atmosphere that makes every SHEscapes journey special.',
        },
      ],
    },
    {
      category: 'Accommodation',
      questions: [
        {
          q: 'What type of accommodation do you provide?',
          a: 'We carefully select boutique hotels, homestays, and unique properties that offer comfort, cleanliness, safety, and an authentic local experience.',
        },
        {
          q: 'Will I have to share my room?',
          a: 'Most trips are offered on twin-sharing accommodation. If private rooms are available, they may be booked at an additional cost, subject to availability.',
        },
        {
          q: 'Are accommodations verified?',
          a: 'Yes. Every stay is personally reviewed or carefully selected to meet our quality, comfort, and safety standards.',
        },
      ],
    },
    {
      category: 'During the Trip',
      questions: [
        {
          q: 'Who will accompany the group?',
          a: 'Every journey is led by a dedicated SHEscapes Experience Lead who coordinates logistics, supports the group, and ensures a smooth travel experience from start to finish.',
        },
        {
          q: 'What meals are included?',
          a: 'Meal inclusions vary by destination and itinerary. Details for each trip are clearly mentioned on the destination page before booking.',
        },
        {
          q: 'Can I customise the itinerary?',
          a: 'Our itineraries are thoughtfully designed for the entire group. While individual customisation may not be possible, our Experience Lead will always try to accommodate reasonable requests wherever feasible.',
        },
      ],
    },
    {
      category: 'Safety',
      questions: [
        {
          q: 'Is SHEscapes only for women?',
          a: 'Yes. Our journeys are designed exclusively for women to create a comfortable, supportive, and community-focused travel experience.',
        },
        {
          q: 'What happens in case of an emergency?',
          a: 'Our Experience Lead remains available throughout the journey to assist travellers. We also maintain emergency contacts, coordinate with local authorities when required, and ensure every traveller receives prompt support.',
        },
        {
          q: 'Do you provide travel insurance?',
          a: 'Travel insurance may be included for selected departures or can be arranged as an optional add-on. Please check the trip details for specific information.',
        },
      ],
    },
    {
      category: 'Cancellations & Refunds',
      questions: [
        {
          q: 'What is your cancellation policy?',
          a: 'Cancellation and refund policies vary depending on the destination and booking timeline. Please refer to our Terms & Conditions or contact our team before making your booking.',
        },
        {
          q: 'Can I transfer my booking to another person?',
          a: 'Booking transfers may be possible in certain situations, subject to availability and applicable terms. Please reach out to our support team for assistance.',
        },
        {
          q: 'Can I change my travel dates?',
          a: 'Date changes depend on seat availability and the applicable booking policy. Our team will always try to help you find the best possible solution.',
        },
      ],
    },
    {
      category: 'Community',
      questions: [
        {
          q: 'Will I be added to a WhatsApp group?',
          a: 'Yes. Before departure, every confirmed traveller is invited to a private WhatsApp group to receive updates, meet fellow travellers, and stay connected before the journey begins.',
        },
        {
          q: 'What happens after the trip?',
          a: 'The SHEscapes experience doesn\'t end when you return home. You\'ll continue to be part of our growing community, receive updates about future journeys, attend community meet-ups, and stay connected with fellow travellers.',
        },
      ],
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
        bgImage="url('https://www.anubhavvacations.in/blog/wp-content/uploads/2024/12/hill-stations-north-india-short-vacation.webp')"
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
            ✦ Got Questions? ✦
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
            Frequently Asked Questions
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
            Everything You Need to Know Before You Travel
          </Text>
          <Box
            bg="rgba(255,255,255,0.15)"
            backdropFilter="blur(8px)"
            p={4}
            borderRadius="xl"
            maxW="650px"
            mx="auto"
            mt={6}
            border="1px solid rgba(255,255,255,0.2)"
            boxShadow="0 8px 32px rgba(0,0,0,0.2)"
          >
            <Text
              fontSize="md"
              fontWeight={300}
              fontFamily={fonts.secondary}
              color="white"
              lineHeight="1.7"
            >
              Planning your first trip with SHEscapes? We've answered the questions we hear most often. If you can't find what you're looking for, our team is always happy to help.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* ========== MAIN CONTENT – Card-based categories ========== */}
      <Container maxW="1100px" py={{ base: '4rem', md: '6rem' }} px={{ base: 4, md: 6 }}>
        <VStack spacing={12} align="stretch">
          {faqCategories.map((category, idx) => (
            <Card
              key={idx}
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
                <Heading
                  as="h2"
                  size="lg"
                  color="white"
                  fontFamily={fonts.primary}
                  fontWeight={600}
                >
                  {category.category}
                </Heading>
              </CardHeader>
              <CardBody px={6} py={6}>
                <Accordion allowToggle>
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      border="none"
                      mb={3}
                      bg="white"
                      borderRadius="lg"
                      boxShadow="sm"
                      _hover={{ boxShadow: 'md' }}
                      transition="box-shadow 0.2s"
                    >
                      {({ isExpanded }) => (
                        <>
                          <AccordionButton
                            _hover={{ bg: colors.bg }}
                            borderRadius="lg"
                            px={5}
                            py={4}
                            bg={isExpanded ? colors.bg : 'white'}
                          >
                            <HStack flex="1" spacing={3}>
                              <Icon as={FaQuestion} color={colors.accent} boxSize={4} />
                              <Text
                                fontSize="md"
                                fontWeight={600}
                                fontFamily={fonts.secondary}
                                color={colors.primary}
                                textAlign="left"
                              >
                                {item.q}
                              </Text>
                            </HStack>
                            <AccordionIcon color={colors.primary} />
                          </AccordionButton>
                          <AccordionPanel
                            pb={4}
                            px={5}
                            fontFamily={fonts.secondary}
                            fontWeight={300}
                            color={colors.textGray}
                            lineHeight="1.8"
                            borderBottomRadius="lg"
                          >
                            {item.a}
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardBody>
            </Card>
          ))}
        </VStack>

        {/* ========== CONTACT SECTION ========== */}
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
            <Icon as={FaQuestion} color={colors.accent} boxSize={{ base: 8, md: 10 }} mb={3} />
            <Heading
              as="h2"
              size="lg"
              color={colors.primary}
              fontFamily={fonts.primary}
              fontWeight={700}
              mb={3}
              fontSize={{ base: '2xl', md: '3xl' }}
            >
              Still Have Questions?
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontFamily={fonts.secondary}
              fontWeight={300}
              color={colors.textGray}
              maxW="500px"
              mx="auto"
              mb={8}
            >
              If your question isn't answered here, we'd love to hear from you.
            </Text>

            <VStack spacing={4} align="center">
              <Button
                as="a"
                href="mailto:support@shescapesindia.com"
                leftIcon={<Icon as={FaEnvelope} boxSize={5} />}
                bg={colors.primary}
                color="white"
                size="lg"
                px={{ base: 4, md: 8 }}
                py={{ base: 6, md: 7 }}
                borderRadius="full"
                fontFamily={fonts.secondary}
                fontWeight={600}
                width={{ base: '100%', md: 'auto' }}
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{
                  bg: colors.primaryHover,
                  transform: 'translateY(-3px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
                whiteSpace="normal"
                wordBreak="break-word"
              >
                support@shescapesindia.com
              </Button>

              <Button
                as="a"
                href="https://wa.me/91XXXXXXXXX"
                target="_blank"
                leftIcon={<Icon as={FaWhatsapp} boxSize={5} />}
                bg="#25D366"
                color="white"
                size="lg"
                px={{ base: 4, md: 8 }}
                py={{ base: 6, md: 7 }}
                borderRadius="full"
                fontFamily={fonts.secondary}
                fontWeight={600}
                width={{ base: '100%', md: 'auto' }}
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{
                  bg: '#1da851',
                  transform: 'translateY(-3px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
                whiteSpace="normal"
                wordBreak="break-word"
              >
                WhatsApp: +91 XXXXX XXXXX
              </Button>
            </VStack>

            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              fontFamily={fonts.secondary}
              fontWeight={300}
              color={colors.textGray}
              mt={6}
              opacity={0.7}
            >
              ✦ Our team is happy to help you plan your next journey ✦
            </Text>
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