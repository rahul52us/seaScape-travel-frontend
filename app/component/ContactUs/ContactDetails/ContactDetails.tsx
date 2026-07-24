import {
  Box,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
  HStack,
  Container,
  Flex,
  Link,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiClock, FiMapPin, FiHeart, FiSend } from "react-icons/fi";
import { FaRegSmile, FaWhatsapp } from "react-icons/fa";

const ContactDetails = () => {
  // Allowed palette
  const maroon = "#7B1035";
  const gold = "#D4A843";
  const cream = "#F5EDD8";
  const white = "#FFFFFF";

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      content: "hello@shescapesindia.com",
      action: () => window.open("mailto:hello@shescapesindia.com"),
      link: "mailto:hello@shescapesindia.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "+91 9217490094",
      action: () => window.open("tel:9958805754"),
      link: "tel:9958805754",
    },
    {
      icon: FiClock,
      title: "Operating Hours",
      content: "Mon-Sat: 10 AM - 7 PM",
      action: null,
      link: null,
    },
    {
      icon: FiMapPin,
      title: "Address",
      content: "Khasra No. 328, Near Peer Baba, Main Sultanpur Market, Sultanpur, New Delhi- 110030",
      action: () => window.open("https://maps.app.goo.gl/c24UhLAr6uBwX2TGA"),
      link: "https://maps.app.goo.gl/c24UhLAr6uBwX2TGA",
    },
  ];

  return (
    <Box
      bg={cream}
      py={{ base: 12, md: 20 }}
      position="relative"
      fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif" // base font for body
    >
      {/* Decorative top line – gold only */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bg={gold}
        opacity={0.6}
      />

      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        {/* Header */}
        <VStack spacing={4} mb={{ base: 10, md: 14 }}>
          <HStack spacing={2}>
            <Icon as={FaRegSmile} color={gold} boxSize={6} />
            <Heading
              as="h2"
              fontFamily="'ALESHA', 'Georgia', serif" // title font
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="400"
              color={maroon}
              letterSpacing="tight"
              textAlign="center"
            >
              Contact Details
            </Heading>
          </HStack>
          <Box w="80px" h="3px" bg={gold} borderRadius="full" />
          <Text
            fontSize="md"
            color={maroon}
            opacity={0.85}
            textAlign="center"
            maxW="600px"
            fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
          >
            We’d love to hear from you – reach out any time, and let’s turn your travel dreams into reality.
          </Text>
        </VStack>

        {/* Two‑column layout */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 8, lg: 12 }}
          align="stretch"
        >
          {/* Left: Map */}
          <Box
            flex={1}
            bg={white}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="0 8px 24px rgba(123,16,53,0.08)"
            border={`1px solid ${gold}20`} // gold with low opacity
            transition="all 0.25s"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: `0 20px 30px -12px ${maroon}20`,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.891776987276!2d77.184186!3d28.572818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8c2a5b6f9d%3A0x3b7f2a5e8c4d9b2a!2sSultanpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1718456789123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: "320px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </Box>

          {/* Right: Contact Cards */}
          <Box flex={1}>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={5}
            >
              {contactInfo.map((info, idx) => (
                <Box
                  key={idx}
                  bg={white}
                  borderRadius="2xl"
                  p={5}
                  boxShadow="0 4px 16px rgba(123,16,53,0.04)"
                  border={`1px solid ${gold}20`}
                  transition="all 0.25s"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: `0 15px 25px -10px ${maroon}20`,
                    borderColor: gold,
                  }}
                  cursor={info.action ? "pointer" : "default"}
                  onClick={info.action || undefined}
                >
                  <VStack spacing={3} align="center" textAlign="center">
                    <Box
                      p={2.5}
                      borderRadius="full"
                      bg={`${gold}15`} // gold with alpha
                      color={gold}
                    >
                      <Icon as={info.icon} boxSize={6} />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="400"
                      color={maroon}
                      fontFamily="'ALESHA', 'Georgia', serif"
                    >
                      {info.title}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color={maroon}
                      opacity={0.85}
                      lineHeight="1.5"
                      fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
                    >
                      {info.content}
                    </Text>
                    {info.action && (
                      <HStack spacing={1} mt={2}>
                        <Icon as={FiSend} color={gold} boxSize={3} />
                        <Text fontSize="xs" color={gold} fontWeight="600" fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif">
                          {info.title === "Email" ? "Send email" : info.title === "Phone" ? "Call now" : "View on map"}
                        </Text>
                      </HStack>
                    )}
                  </VStack>
                </Box>
              ))}
            </Grid>

            {/* WhatsApp quick action – using gold instead of green */}
            <Box
              mt={6}
              p={4}
              bg={white}
              borderRadius="2xl"
              border={`1px solid ${gold}20`}
              textAlign="center"
              transition="all 0.2s"
              _hover={{ borderColor: gold, transform: "translateY(-3px)" }}
            >
              <HStack justify="center" spacing={3}>
                <Icon as={FaWhatsapp} color={gold} boxSize={6} />
                <Text fontSize="sm" fontWeight="600" color={maroon} fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif">
                  Prefer WhatsApp?{" "}
                  <Link
                    href="https://wa.me/919958805754"
                    isExternal
                    color={gold}
                    fontWeight="700"
                    _hover={{ color: maroon, textDecoration: "none" }}
                  >
                    Chat with us instantly
                  </Link>
                </Text>
              </HStack>
            </Box>
          </Box>
        </Flex>

        {/* Trust footer */}
        <Flex justify="center" mt={12}>
          <HStack spacing={2}>
            <Icon as={FiHeart} color={gold} boxSize={4} />
            <Text
              fontSize="xs"
              color={maroon}
              opacity={0.7}
              fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
            >
              We reply within 24 hours, 7 days a week
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactDetails;