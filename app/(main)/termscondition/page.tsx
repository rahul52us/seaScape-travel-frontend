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
  Badge,
  Icon,
  UnorderedList,
  ListItem,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';
import {
  FaGavel,
  FaUserCheck,
  FaFileInvoice,
  FaMoneyBillWave,
  FaUndo,
  FaExchangeAlt,
  FaUserFriends,
  FaHeartbeat,
  FaHome,
  FaBus,
  FaExclamationTriangle,
  FaCamera,
  FaLock,
  FaCopyright,
  FaShieldAlt,
  FaHandshake,
  FaEnvelope,
  FaPhone,
  FaGlobe,
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
  // ─── Section data (content unchanged) ────────────────────────
  const sections = [
    {
      id: 1,
      title: 'Eligibility',
      icon: FaUserCheck,
      content: (
        <UnorderedList spacing={2} pl={4}>
          <ListItem>SHEscapes journeys are exclusively designed for women.</ListItem>
          <ListItem>Travellers must be at least 18 years of age at the time of travel.</ListItem>
          <ListItem>A valid government-issued photo ID is mandatory for all bookings.</ListItem>
          <ListItem>By booking with SHEscapes, you confirm that all information provided is accurate and complete.</ListItem>
        </UnorderedList>
      ),
    },
    {
      id: 2,
      title: 'Booking & Confirmation',
      icon: FaFileInvoice,
      content: (
        <UnorderedList spacing={2} pl={4}>
          <ListItem>A booking is confirmed only after the required advance payment has been successfully received.</ListItem>
          <ListItem>Remaining payment must be completed within the timeline communicated by SHEscapes.</ListItem>
          <ListItem>
            Failure to complete payment before the due date may result in cancellation of your booking without guarantee of
            seat availability.
          </ListItem>
        </UnorderedList>
      ),
    },
    {
      id: 3,
      title: 'Pricing',
      icon: FaMoneyBillWave,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Our trip prices include only the services specifically mentioned under the "Inclusions" section of each itinerary.
            Unless explicitly stated, prices do not include:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Flights or train tickets</ListItem>
            <ListItem>Visa fees</ListItem>
            <ListItem>Personal expenses</ListItem>
            <ListItem>Travel insurance</ListItem>
            <ListItem>Meals not mentioned</ListItem>
            <ListItem>Adventure activities not listed</ListItem>
            <ListItem>Shopping expenses</ListItem>
            <ListItem>Medical expenses</ListItem>
            <ListItem>Any services not mentioned under inclusions</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            All prices are subject to change before booking confirmation.
          </Text>
        </>
      ),
    },
    {
      id: 4,
      title: 'Cancellation & Refund Policy',
      icon: FaUndo,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Cancellation requests must be submitted in writing via email. Refund eligibility depends on:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Time remaining before departure</ListItem>
            <ListItem>Vendor cancellation policies</ListItem>
            <ListItem>Non-refundable reservations already made</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Certain expenses such as permits, hotel reservations, transportation bookings, and third-party services may be
            non-refundable. Refunds, where applicable, will be processed within the specified timeline after approval.
            Detailed cancellation policies for individual trips may differ and will be shared before booking confirmation.
          </Text>
        </>
      ),
    },
    {
      id: 5,
      title: 'Trip Changes',
      icon: FaExchangeAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            SHEscapes reserves the right to modify:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Itineraries</ListItem>
            <ListItem>Accommodation</ListItem>
            <ListItem>Transportation</ListItem>
            <ListItem>Activities</ListItem>
            <ListItem>Trip timings</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            when required due to weather conditions, safety concerns, government regulations, operational requirements, or
            circumstances beyond our control. Any changes will always prioritize traveller safety and overall experience.
          </Text>
        </>
      ),
    },
    {
      id: 6,
      title: 'Traveller Responsibilities',
      icon: FaUserFriends,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Every traveller is expected to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Respect fellow travellers.</ListItem>
            <ListItem>Follow instructions given by the Experience Lead.</ListItem>
            <ListItem>Respect local customs and cultures.</ListItem>
            <ListItem>Maintain appropriate behaviour throughout the journey.</ListItem>
            <ListItem>Take responsibility for personal belongings.</ListItem>
            <ListItem>Inform SHEscapes about any relevant medical conditions before departure.</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            SHEscapes reserves the right to remove any participant whose behaviour negatively impacts the safety or
            experience of the group.
          </Text>
        </>
      ),
    },
    {
      id: 7,
      title: 'Health & Medical Information',
      icon: FaHeartbeat,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Travellers are responsible for ensuring they are physically fit for the chosen journey. Please inform SHEscapes
            in advance about:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Medical conditions</ListItem>
            <ListItem>Allergies</ListItem>
            <ListItem>Dietary restrictions</ListItem>
            <ListItem>Medications</ListItem>
            <ListItem>Emergency contacts</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            SHEscapes is not responsible for medical expenses incurred during the trip.
          </Text>
        </>
      ),
    },
    {
      id: 8,
      title: 'Accommodation',
      icon: FaHome,
      content: (
        <UnorderedList spacing={2} pl={4}>
          <ListItem>Accommodation is provided as mentioned in the itinerary.</ListItem>
          <ListItem>Room allocation is generally on a twin-sharing basis unless otherwise specified.</ListItem>
          <ListItem>Room upgrades or private rooms may be available at an additional cost, subject to availability.</ListItem>
        </UnorderedList>
      ),
    },
    {
      id: 9,
      title: 'Transportation',
      icon: FaBus,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Transportation arrangements are made through trusted service providers. SHEscapes is not responsible for
            delays or disruptions caused by:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Weather</ListItem>
            <ListItem>Road conditions</ListItem>
            <ListItem>Government restrictions</ListItem>
            <ListItem>Mechanical failures</ListItem>
            <ListItem>Airline or transport operator decisions</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Reasonable efforts will always be made to minimize inconvenience.
          </Text>
        </>
      ),
    },
    {
      id: 10,
      title: 'Force Majeure',
      icon: FaExclamationTriangle,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            SHEscapes shall not be held liable for delays, cancellations, or changes caused by events beyond reasonable
            control, including but not limited to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Natural disasters</ListItem>
            <ListItem>Political unrest</ListItem>
            <ListItem>Epidemics or pandemics</ListItem>
            <ListItem>Government restrictions</ListItem>
            <ListItem>Strikes</ListItem>
            <ListItem>War</ListItem>
            <ListItem>Terrorism</ListItem>
            <ListItem>Extreme weather conditions</ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      id: 11,
      title: 'Photography & Media',
      icon: FaCamera,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            During trips, photographs and videos may be captured for promotional and community purposes. By participating,
            you consent to the use of such content on:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Website</ListItem>
            <ListItem>Social media platforms</ListItem>
            <ListItem>Marketing materials</ListItem>
            <ListItem>Promotional campaigns</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            If you do not wish to appear in promotional content, please notify our team before the journey begins.
          </Text>
        </>
      ),
    },
    {
      id: 12,
      title: 'Privacy',
      icon: FaLock,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Your personal information is collected only for booking, communication, and operational purposes. SHEscapes
            is committed to protecting your privacy and does not sell personal information to third parties.
          </Text>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            For more information, please refer to our Privacy Policy.
          </Text>
        </>
      ),
    },
    {
      id: 13,
      title: 'Intellectual Property',
      icon: FaCopyright,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            All website content including:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Logos</ListItem>
            <ListItem>Images</ListItem>
            <ListItem>Graphics</ListItem>
            <ListItem>Text</ListItem>
            <ListItem>Videos</ListItem>
            <ListItem>Designs</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            are the intellectual property of SHEscapes India unless otherwise stated. Unauthorized use or reproduction is
            prohibited.
          </Text>
        </>
      ),
    },
    {
      id: 14,
      title: 'Limitation of Liability',
      icon: FaShieldAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            While every effort is made to provide safe and enjoyable experiences, SHEscapes shall not be held liable for:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Personal injury</ListItem>
            <ListItem>Loss of belongings</ListItem>
            <ListItem>Delays</ListItem>
            <ListItem>Missed connections</ListItem>
            <ListItem>Third-party service failures</ListItem>
            <ListItem>Events beyond reasonable control</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Participation in adventure or outdoor activities is voluntary and undertaken at the traveller's own risk.
          </Text>
        </>
      ),
    },
    {
      id: 15,
      title: 'Governing Law',
      icon: FaGavel,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300}>
            These Terms &amp; Conditions shall be governed by the laws of India. Any disputes arising shall be subject to
            the jurisdiction of the competent courts in Jaipur, Rajasthan (or your registered office location, if different).
          </Text>
        </>
      ),
    },
    {
      id: 16,
      title: 'Contact Us',
      icon: FaHandshake,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            If you have any questions regarding these Terms &amp; Conditions, please contact us:
          </Text>
          <Box fontFamily={fonts.secondary} fontWeight={300} lineHeight="2">
            <HStack spacing={2}>
              <Icon as={FaEnvelope} color={colors.accent} />
              <Text>Email: support@shescapesindia.com</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaPhone} color={colors.accent} />
              <Text>Phone: +91 XXXXX XXXXX</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaGlobe} color={colors.accent} />
              <Text>Website: www.shescapesindia.com</Text>
            </HStack>
          </Box>
        </>
      ),
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
        bgImage="url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')"
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
            ✦ Know Before You Go ✦
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
            Terms &amp; Conditions
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
            Welcome to SHEscapes India
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
              Thank you for choosing SHEscapes India. By accessing our website, making a booking, or participating in any
              of our travel experiences, you agree to the following Terms &amp; Conditions. These terms are designed to
              ensure transparency, safety, and a smooth experience for all travellers.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* ========== MAIN CONTENT – Card-based sections ========== */}
      <Container maxW="1100px" py={{ base: '4rem', md: '6rem' }} px={{ base: 4, md: 6 }}>
        <VStack spacing={12} align="stretch">
          {sections.map((section) => (
            <Card
              key={section.id}
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
                  <Icon as={section.icon} color="white" boxSize={6} />
                  <Heading
                    as="h2"
                    size="lg"
                    color="white"
                    fontFamily={fonts.primary}
                    fontWeight={600}
                  >
                    {section.id}. {section.title}
                  </Heading>
                </HStack>
              </CardHeader>
              <CardBody px={6} py={6}>
                {section.content}
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
            <Icon as={FaHandshake} color={colors.accent} boxSize={{ base: 8, md: 10 }} mb={3} />
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
              If you need further clarification on our Terms &amp; Conditions, our team is here to help.
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
              ✦ We typically respond within 24 hours ✦
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