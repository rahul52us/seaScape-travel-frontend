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
  FaShieldAlt,
  FaUserSecret,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaWhatsapp,
  FaLock,
  FaCookieBite,
  FaShareAlt,
  FaCamera,
  FaHandsHelping,
  FaFileAlt,
  FaExternalLinkAlt,
  FaChild,
  FaSyncAlt,
  FaHeart,
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
      title: 'Information We Collect',
      icon: FaUserSecret,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            To provide our services effectively, we may collect the following information:
          </Text>
          <Text fontFamily={fonts.secondary} fontWeight={600} mt={3}>
            Personal Information
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Full Name</ListItem>
            <ListItem>Email Address</ListItem>
            <ListItem>Mobile Number</ListItem>
            <ListItem>Date of Birth</ListItem>
            <ListItem>City of Residence</ListItem>
            <ListItem>Emergency Contact Details</ListItem>
            <ListItem>Government-issued ID (where required for travel)</ListItem>
            <ListItem>Gender (for women-only travel verification)</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={600} mt={3}>
            Booking Information
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Destination Selected</ListItem>
            <ListItem>Travel Dates</ListItem>
            <ListItem>Payment Details</ListItem>
            <ListItem>Accommodation Preferences</ListItem>
            <ListItem>Dietary Requirements</ListItem>
            <ListItem>Medical Information voluntarily shared by you</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={600} mt={3}>
            Technical Information
          </Text>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
            When you visit our website, we may automatically collect:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>IP Address</ListItem>
            <ListItem>Device Information</ListItem>
            <ListItem>Browser Type</ListItem>
            <ListItem>Pages Visited</ListItem>
            <ListItem>Time Spent on Website</ListItem>
            <ListItem>Cookies and Analytics Data</ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: FaHandsHelping,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Your information is used only to provide and improve our services. This includes:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Processing bookings</ListItem>
            <ListItem>Responding to enquiries</ListItem>
            <ListItem>Sending booking confirmations</ListItem>
            <ListItem>Managing your travel experience</ListItem>
            <ListItem>Creating WhatsApp travel groups</ListItem>
            <ListItem>Providing customer support</ListItem>
            <ListItem>Sending important travel updates</ListItem>
            <ListItem>Improving our website and services</ListItem>
            <ListItem>Sending newsletters and promotional offers (only if you choose to receive them)</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            We never use your information for purposes unrelated to SHEscapes without your consent.
          </Text>
        </>
      ),
    },
    {
      id: 3,
      title: 'Survey Responses',
      icon: FaFileAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            If you complete a SHEscapes survey, your responses help us better understand the travel preferences, expectations, and experiences of our community. Survey responses are used to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Improve future trips</ListItem>
            <ListItem>Design better travel experiences</ListItem>
            <ListItem>Understand customer preferences</ListItem>
            <ListItem>Build a stronger women-first travel community</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Survey responses are never sold to third parties.
          </Text>
        </>
      ),
    },
    {
      id: 4,
      title: 'Payment Information',
      icon: FaLock,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Payments made through our website are processed through secure third-party payment gateways. SHEscapes does not store:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Credit Card Numbers</ListItem>
            <ListItem>Debit Card Details</ListItem>
            <ListItem>UPI PINs</ListItem>
            <ListItem>Banking Passwords</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            All payment information is handled securely by authorised payment providers.
          </Text>
        </>
      ),
    },
    {
      id: 5,
      title: 'WhatsApp & Community Communication',
      icon: FaWhatsapp,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            When you book a trip or voluntarily join our community, you may be added to a WhatsApp group related to your journey. These groups are used for:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Trip updates</ListItem>
            <ListItem>Meeting fellow travellers</ListItem>
            <ListItem>Important announcements</ListItem>
            <ListItem>Emergency communication</ListItem>
            <ListItem>Community engagement</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Your phone number will only be visible to members of that specific group.
          </Text>
        </>
      ),
    },
    {
      id: 6,
      title: 'Cookies',
      icon: FaCookieBite,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Our website uses cookies to improve your browsing experience. Cookies help us:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Remember your preferences</ListItem>
            <ListItem>Understand website performance</ListItem>
            <ListItem>Improve user experience</ListItem>
            <ListItem>Analyse visitor behaviour</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            You may disable cookies through your browser settings at any time.
          </Text>
        </>
      ),
    },
    {
      id: 7,
      title: 'Sharing of Information',
      icon: FaShareAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            We only share your information when necessary to deliver our services. This may include:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Hotels</ListItem>
            <ListItem>Homestays</ListItem>
            <ListItem>Transportation providers</ListItem>
            <ListItem>Local experience partners</ListItem>
            <ListItem>Government authorities (where legally required)</ListItem>
            <ListItem>Payment service providers</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            We do not sell, rent, or trade your personal information to advertisers or unrelated third parties.
          </Text>
        </>
      ),
    },
    {
      id: 8,
      title: 'Data Security',
      icon: FaShieldAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            We take appropriate technical and organisational measures to protect your personal information from:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Unauthorised access</ListItem>
            <ListItem>Loss</ListItem>
            <ListItem>Misuse</ListItem>
            <ListItem>Alteration</ListItem>
            <ListItem>Disclosure</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            While we strive to use commercially acceptable methods to protect your information, no online platform can guarantee absolute security.
          </Text>
        </>
      ),
    },
    {
      id: 9,
      title: 'Photography & Media',
      icon: FaCamera,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            During our journeys, photographs and videos may be captured for community memories and promotional purposes. These may be used on:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Our Website</ListItem>
            <ListItem>Instagram</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>YouTube</ListItem>
            <ListItem>Marketing Materials</ListItem>
            <ListItem>Digital Campaigns</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            If you prefer not to appear in promotional content, simply let our team know before or during your trip, and we will respect your preference wherever reasonably possible.
          </Text>
        </>
      ),
    },
    {
      id: 10,
      title: 'Your Rights',
      icon: FaHandsHelping,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            You have the right to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Request access to your personal information</ListItem>
            <ListItem>Correct inaccurate information</ListItem>
            <ListItem>Request deletion of your personal data (subject to legal and operational requirements)</ListItem>
            <ListItem>Withdraw consent for marketing communications</ListItem>
            <ListItem>Opt out of promotional emails at any time</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            To exercise these rights, please contact us using the details below.
          </Text>
        </>
      ),
    },
    {
      id: 11,
      title: 'Data Retention',
      icon: FaSyncAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            We retain your personal information only for as long as necessary to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Complete your booking</ListItem>
            <ListItem>Fulfil legal obligations</ListItem>
            <ListItem>Resolve disputes</ListItem>
            <ListItem>Improve our services</ListItem>
            <ListItem>Maintain travel records</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            When your information is no longer required, it is securely deleted or anonymised where appropriate.
          </Text>
        </>
      ),
    },
    {
      id: 12,
      title: 'Third-Party Links',
      icon: FaExternalLinkAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Our website may contain links to third-party websites, including social media platforms and partner websites. SHEscapes is not responsible for the privacy practices or content of these external websites. We encourage you to review their privacy policies before sharing personal information.
          </Text>
        </>
      ),
    },
    {
      id: 13,
      title: "Children's Privacy",
      icon: FaChild,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300}>
            SHEscapes journeys are intended for adults aged 18 years and above. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that such information has been collected, we will take appropriate steps to remove it.
          </Text>
        </>
      ),
    },
    {
      id: 14,
      title: 'Updates to This Privacy Policy',
      icon: FaSyncAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300}>
            We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or operational practices. Any updates will be published on this page along with the revised effective date.
          </Text>
        </>
      ),
    },
    {
      id: 15,
      title: 'Contact Us',
      icon: FaEnvelope,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            If you have any questions, requests, or concerns regarding this Privacy Policy or how your information is handled, please contact us.
          </Text>
          <Box fontFamily={fonts.secondary} fontWeight={300} lineHeight="2">
            <HStack spacing={2}>
              <Icon as={FaEnvelope} color={colors.accent} />
              <Text>Email: support@shescapesindia.com</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaPhone} color={colors.accent} />
              <Text>Phone: +91 XXXXXXXXXX</Text>
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
        bgImage="url('https://static.toiimg.com/photo/50465195.cms')"
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
            ✦ Your Privacy Matters ✦
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
            Privacy Policy
          </Heading>
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
              At SHEscapes India, your privacy is important to us. We are committed to protecting your personal information
              and being transparent about how we collect, use, and safeguard your data. By accessing our website, submitting
              a booking enquiry, completing a survey, or participating in our travel experiences, you agree to the practices
              described in this Privacy Policy.
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

        {/* ========== OUR COMMITMENT ========== */}
        <Divider
          borderColor={colors.accent}
          opacity={0.4}
          my={16}
          borderStyle="dashed"
          borderWidth="2px"
        />

        <Box
          bg={colors.bg}
          p={{ base: 6, md: 10 }}
          borderRadius="3xl"
          boxShadow="xl"
          textAlign="center"
        >
          <Icon as={FaHeart} color={colors.accent} boxSize={10} mb={3} />
          <Heading
            as="h2"
            size="lg"
            color={colors.primary}
            fontFamily={fonts.primary}
            fontWeight={700}
            mb={3}
          >
            Our Commitment to You
          </Heading>
          <Text
            fontSize="lg"
            fontFamily={fonts.secondary}
            fontWeight={300}
            color={colors.textGray}
            maxW="700px"
            mx="auto"
            lineHeight="1.8"
          >
            At SHEscapes, trust is the foundation of every journey. We collect only the information we need, use it responsibly,
            and work to keep it secure. Our goal is to create a travel community where you can feel confident—not only in your
            travel experiences but also in how your personal information is handled.
          </Text>
          <Text
            fontSize="lg"
            fontFamily={fonts.primary}
            color={colors.primary}
            fontWeight={400}
            mt={4}
          >
            Thank you for being part of the SHEscapes community. 💜
          </Text>
        </Box>

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
            <Icon as={FaShieldAlt} color={colors.accent} boxSize={{ base: 8, md: 10 }} mb={3} />
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
              If you have any further questions about our Privacy Policy, our team is here to help.
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
    </Box>
  );
};

export default Page;