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
  FaPassport,
  FaCalendarAlt,
  FaWhatsapp,
  FaSuitcase,
  FaTshirt,
  FaToilet,
  FaPills,
  FaMobileAlt,
  FaWater,
  FaClock,
  FaUsers,
  FaGlobe,
  FaBaby,
  FaBed,
  FaShieldAlt,
  FaLeaf,
  FaCamera,
  FaPhoneAlt,
  FaHeart,
  FaEnvelope,
  FaWhatsapp as FaWhatsappIcon,
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
  lightBg: '#F5EDD8', // using cream as main background
};

// ─── Font Families ──────────────────────────────────────────────
const fonts = {
  primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
  secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif",
};

const Page: React.FC = () => {
  // Section data (unchanged)
  const sections = [
    {
      id: 1,
      title: 'Before You Travel',
      icon: FaPassport,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={3}>
            Preparation is the first step towards a stress-free journey.
          </Text>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Verify Your Documents
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Please ensure you carry all the required documents before departure. These may include:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Government-issued Photo ID</ListItem>
              <ListItem>Flight or Train Tickets (if applicable)</ListItem>
              <ListItem>Required Permits</ListItem>
              <ListItem>Passport (for international trips)</ListItem>
              <ListItem>Visa (if applicable)</ListItem>
              <ListItem>Travel Insurance (if applicable)</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              Always keep both digital and printed copies of important documents.
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Read Your Itinerary
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Take some time to carefully review your itinerary before travelling. You'll receive details regarding:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Departure timings</ListItem>
              <ListItem>Accommodation</ListItem>
              <ListItem>Daily schedule</ListItem>
              <ListItem>Meeting points</ListItem>
              <ListItem>Contact details</ListItem>
              <ListItem>Emergency information</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              Being familiar with your itinerary helps you enjoy the trip with confidence.
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Stay Connected
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              A few days before departure, you'll be invited to your dedicated SHEscapes WhatsApp group. This group is used for:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Trip updates</ListItem>
              <ListItem>Important announcements</ListItem>
              <ListItem>Meeting fellow travellers</ListItem>
              <ListItem>Last-minute reminders</ListItem>
              <ListItem>Emergency communication</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              Please keep notifications enabled throughout the journey.
            </Text>
          </Box>

          <Box>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Packing Essentials
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Packing smart makes travelling more enjoyable. We recommend carrying:
            </Text>

            <Text fontFamily={fonts.secondary} fontWeight={500} mt={2}>
              Clothing
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Comfortable casual wear</ListItem>
              <ListItem>Weather-appropriate jackets</ListItem>
              <ListItem>Walking shoes</ListItem>
              <ListItem>Flip-flops or sandals</ListItem>
              <ListItem>Nightwear</ListItem>
              <ListItem>Extra socks</ListItem>
            </UnorderedList>

            <Text fontFamily={fonts.secondary} fontWeight={500} mt={2}>
              Personal Care
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Toiletries</ListItem>
              <ListItem>Sunscreen</ListItem>
              <ListItem>Lip balm</ListItem>
              <ListItem>Moisturiser</ListItem>
              <ListItem>Sanitary products</ListItem>
              <ListItem>Hand sanitiser</ListItem>
              <ListItem>Wet wipes</ListItem>
              <ListItem>Tissues</ListItem>
            </UnorderedList>

            <Text fontFamily={fonts.secondary} fontWeight={500} mt={2}>
              Health Essentials
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Carry your personal medications along with:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Basic first-aid kit</ListItem>
              <ListItem>Pain relief medicine</ListItem>
              <ListItem>Motion sickness tablets (if required)</ListItem>
              <ListItem>Personal prescriptions</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              If you have any medical conditions, please inform our team before departure.
            </Text>

            <Text fontFamily={fonts.secondary} fontWeight={500} mt={2}>
              Electronics
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Mobile Phone</ListItem>
              <ListItem>Charger</ListItem>
              <ListItem>Power Bank</ListItem>
              <ListItem>Camera</ListItem>
              <ListItem>Earphones</ListItem>
              <ListItem>Universal Adapter (for international trips)</ListItem>
            </UnorderedList>

            <Text fontFamily={fonts.secondary} fontWeight={500} mt={2}>
              Extras
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Water Bottle</ListItem>
              <ListItem>Sunglasses</ListItem>
              <ListItem>Backpack</ListItem>
              <ListItem>Small Day Bag</ListItem>
              <ListItem>Notebook or Journal</ListItem>
              <ListItem>Snacks</ListItem>
            </UnorderedList>
          </Box>
        </>
      ),
    },
    {
      id: 2,
      title: 'During Your Journey',
      icon: FaCalendarAlt,
      content: (
        <>
          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Be Punctual
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300}>
              Please report to meeting points on time. Our itineraries are designed for the entire group, and punctuality helps everyone enjoy a smooth experience.
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Respect Fellow Travellers
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              SHEscapes is built on kindness, inclusivity, and mutual respect. We encourage everyone to:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Support one another</ListItem>
              <ListItem>Respect personal boundaries</ListItem>
              <ListItem>Celebrate differences</ListItem>
              <ListItem>Create a welcoming environment</ListItem>
            </UnorderedList>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Respect Local Culture
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Every destination has its own traditions and customs. Please:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Dress appropriately where required</ListItem>
              <ListItem>Respect religious places</ListItem>
              <ListItem>Seek permission before photographing locals</ListItem>
              <ListItem>Support local businesses whenever possible</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              Responsible travel helps preserve destinations for future generations.
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Stay Hydrated
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300}>
              Travel often involves long drives and outdoor activities. Drink plenty of water and take regular breaks to stay comfortable throughout the journey.
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Follow Your Experience Lead
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Your SHEscapes Experience Lead is there to ensure everything runs smoothly. Please follow instructions regarding:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Timings</ListItem>
              <ListItem>Safety</ListItem>
              <ListItem>Activities</ListItem>
              <ListItem>Transportation</ListItem>
              <ListItem>Local regulations</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              They are always available to assist you during the trip.
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Accommodation Guidelines
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              We carefully select accommodations that prioritise comfort, cleanliness, and a welcoming atmosphere. To ensure a pleasant stay for everyone:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Respect property rules</ListItem>
              <ListItem>Keep shared spaces clean</ListItem>
              <ListItem>Avoid unnecessary noise during late hours</ListItem>
              <ListItem>Report any issues immediately to your Experience Lead</ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text fontFamily={fonts.secondary} fontWeight={600} mb={1}>
              Safety Guidelines
            </Text>
            <Text fontFamily={fonts.secondary} fontWeight={300} mb={1}>
              Your safety remains our highest priority. Please remember to:
            </Text>
            <UnorderedList spacing={1} pl={4}>
              <ListItem>Keep your valuables secure</ListItem>
              <ListItem>Share your concerns with your Experience Lead</ListItem>
              <ListItem>Avoid leaving the group without informing someone</ListItem>
              <ListItem>Save emergency contact numbers</ListItem>
              <ListItem>Follow local safety regulations</ListItem>
            </UnorderedList>
            <Text fontFamily={fonts.secondary} fontWeight={300} mt={1}>
              If you ever need assistance, our team is available throughout the journey.
            </Text>
          </Box>
        </>
      ),
    },
    {
      id: 3,
      title: 'Responsible Travel',
      icon: FaLeaf,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            At SHEscapes, we believe travel should leave a positive impact. We encourage every traveller to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Carry reusable water bottles</ListItem>
            <ListItem>Avoid single-use plastics</ListItem>
            <ListItem>Dispose of waste responsibly</ListItem>
            <ListItem>Respect wildlife</ListItem>
            <ListItem>Support local artisans and businesses</ListItem>
            <ListItem>Leave every destination better than you found it</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Small actions make a meaningful difference.
          </Text>
        </>
      ),
    },
    {
      id: 4,
      title: 'Photography & Social Media',
      icon: FaCamera,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            Capture memories, but also be present. We encourage you to:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Respect others' privacy before posting group photos</ListItem>
            <ListItem>Be mindful when photographing local communities</ListItem>
            <ListItem>Enjoy moments beyond the camera lens</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Some of the best memories are the ones you truly experience.
          </Text>
        </>
      ),
    },
    {
      id: 5,
      title: 'In Case of an Emergency',
      icon: FaPhoneAlt,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            If you require immediate assistance:
          </Text>
          <UnorderedList spacing={1} pl={4}>
            <ListItem>Contact your Experience Lead</ListItem>
            <ListItem>Reach out through the trip WhatsApp group</ListItem>
            <ListItem>Use the emergency contact details shared before departure</ListItem>
          </UnorderedList>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Our team will always do its best to assist you promptly.
          </Text>
        </>
      ),
    },
    {
      id: 6,
      title: 'Our Promise',
      icon: FaHeart,
      content: (
        <>
          <Text fontFamily={fonts.secondary} fontWeight={300} mb={2}>
            At SHEscapes, every journey is more than a destination. We strive to create experiences that are safe, meaningful, and unforgettable—where strangers become friends, memories become stories, and every traveller feels at home.
          </Text>
          <Text fontFamily={fonts.secondary} fontWeight={300} mt={2}>
            Thank you for choosing SHEscapes.
          </Text>
          <Text fontFamily={fonts.primary} color={colors.primary} fontWeight={400} fontSize="lg" mt={2}>
            Come Solo. Leave Connected. 💜
          </Text>
        </>
      ),
    },
  ];

  return (
    <Box bg={colors.bg}>
      {/* HERO – Bottom-anchored image */}
      <Box
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        pb={{ base: 12, md: 20 }}
        pt={{ base: '6rem', md: '8rem' }}
        bgImage="url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80')"
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
            ✦ Travel Smart ✦
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
            Travel Guidelines
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
            Travel Smart. Travel Comfortably. Travel with Confidence.
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
              Every SHEscapes journey is thoughtfully designed to ensure you enjoy a safe, comfortable, and memorable experience. These guidelines will help you prepare for your trip and make the most of your adventure.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* MAIN CONTENT – Card-based sections */}
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
            <Icon as={FaHeart} color={colors.accent} boxSize={{ base: 8, md: 10 }} mb={3} />
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
              If you need help preparing for your journey, our team is here for you.
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
                leftIcon={<Icon as={FaWhatsappIcon} boxSize={5} />}
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

      {/* BACK TO TOP BUTTON */}
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