"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
  Image,
  Icon,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaUsers,
  FaSuitcase,
  FaHeart,
  FaCrown,
  FaArrowRight,
  FaHandHoldingHeart,
} from "react-icons/fa6";

// ─── Color Palette (exact match from your specification) ──────────────
const colors = {
  bg: "#F5EDD8",           // Cream background
  primary: "#7B1035",      // Deep maroon/burgundy
  primaryHover: "#66102D", // Darker maroon for hovers
  accent: "#D4A843",       // Gold for accents (icons, badges)
  accentLight: "#E8D5A8",  // Lighter gold for subtle backgrounds
  textGray: "#6B6B6B",     // Gray text
  textDark: "#2D2D2D",     // Dark text
  white: "#FFFFFF",
  footerBg: "#FFFFFF",      // Footer banner bg (white)
  borderLight: "rgba(123,16,53,0.12)", // Subtle maroon border
};

// ─── Font Families ────────────────────────────────────────────────────
const fonts = {
  primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif",    // ALESHA fallback
  secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif",   // AVENIR fallback
};

// ─── Data ─────────────────────────────────────────────────────────────
const steps = [
  {
    id: 1,
    title: "Discover Us",
    description:
      "You discover SHEscapes on Instagram and feel that instant connect.",
    icon: FaInstagram,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Join the Community",
    description:
      "You join our WhatsApp community & start connecting with like-minded women.",
    icon: FaWhatsapp,
    image:
      "https://media.istockphoto.com/id/2129024596/photo/diverse-multiethnic-partners-hands-together-teamwork-group-of-multiracial-people-meeting-join.jpg?s=612x612&w=0&k=20&c=sdGTS7JPbqP-3_DCnL9SFmA4tgfTbf07wM4XwHCT8-s=",
  },
  {
    id: 3,
    title: "Attend Community Meet",
    description:
      "You attend offline/online meets, events and experiences that build real connections.",
    icon: FaUsers,
    image:
      "https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926677/Travel_5_dukiur.png",
  },
  {
    id: 4,
    title: "Book Your First Trip",
    description:
      "You take the leap and book your first SHEscapes journey.",
    icon: FaSuitcase,
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Create Unforgettable Memories",
    description:
      "You travel, explore, laugh, heal and create memories that stay with you forever.",
    icon: FaHeart,
    image:
      "https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926677/Travel_6_ybqtjc.png",
  },
  {
    id: 6,
    title: "Be Part of the Tribe",
    description:
      "You give back, inspire others and become a SHEscapes host or ambassador.",
    icon: FaCrown,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
  },
];

// ─── Animation Variants ─────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// ─── Components ────────────────────────────────────────────────────────

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  return (
    <VStack
      as={motion.div}
      variants={itemVariants}
      align="center"
      spacing={0}
      position="relative"
      flex="1"
      minW={{ base: "160px", sm: "180px", md: "170px", lg: "150px" }}
      maxW={{ base: "200px", sm: "200px", md: "180px", lg: "160px" }}
    >
      {/* ── Icon Circle (gold accent) ── */}
      <Box position="relative" zIndex={3} mb="-22px">
        <Circle
          size="52px"
          bg={colors.accent} // gold background
          border="3px solid"
          borderColor={colors.bg} // cream border to blend
          boxShadow="0 4px 15px rgba(123,16,53,0.15)"
        >
          <Icon as={step.icon} color="white" boxSize={5} />
        </Circle>
      </Box>

      {/* ── Image with arch top ── */}
      <Box
        w="full"
        h={{ base: "170px", md: "190px", lg: "200px" }}
        overflow="hidden"
        borderRadius="50% 50% 16px 16px / 30% 30% 16px 16px"
        position="relative"
        boxShadow="0 8px 30px rgba(123,16,53,0.1)"
        border="1px solid"
        borderColor={colors.borderLight}
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

      {/* ── Number Badge (maroon) ── */}
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
        boxShadow="0 2px 10px rgba(123,16,53,0.2)"
      >
        {step.id}
      </Circle>

      {/* ── Title (ALESHA) ── */}
      <Text
        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
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

      {/* ── Description (AVENIR) ── */}
      <Text
        fontSize={{ base: "11px", md: "12px" }}
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
};

const TimelineConnector = () => {
  return (
    <Box
      position="absolute"
      top={{ base: "215px", md: "235px", lg: "245px" }}
      left="0"
      right="0"
      h="2px"
      display={{ base: "none", lg: "block" }}
      zIndex={0}
    >
      {/* Dotted line in gold */}
      <Box
        position="absolute"
        top="0"
        left="8%"
        right="8%"
        h="2px"
        borderTop="2px dashed"
        borderColor={`${colors.accent}60`} // gold with opacity
      />
      {/* Arrow at end - gold */}
      <Box
        position="absolute"
        top="-5px"
        right="6%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon
          as={FaArrowRight}
          color={colors.accent}
          boxSize={3}
          opacity={0.6}
        />
      </Box>
    </Box>
  );
};

const FooterBanner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <Flex
        bg={colors.white}
        borderRadius="20px"
        p={{ base: 5, md: 6, lg: 7 }}
        align="center"
        justify="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
        mt={{ base: 12, md: 16, lg: 20 }}
        border="1px solid"
        borderColor={colors.borderLight}
        boxShadow="0 4px 20px rgba(123,16,53,0.06)"
      >
        <HStack spacing={{ base: 3, md: 4 }} flex="1">
          <Circle
            size="56px"
            bg={`${colors.accent}20`} // light gold background
            flexShrink={0}
          >
            <Icon
              as={FaHandHoldingHeart}
              color={colors.primary}
              boxSize={6}
            />
          </Circle>
          <VStack align="start" spacing={1}>
            <Text
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              fontWeight="600"
              color={colors.primary}
              fontFamily={fonts.primary}
            >
              Come solo, leave connected.
            </Text>
            <Text
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              color={colors.textGray}
              fontFamily={fonts.secondary}
              fontWeight="300"
            >
              At SHEscapes, every step brings you closer to a community that
              feels like home.
            </Text>
          </VStack>
        </HStack>

        <Button
          bg="#6B1E3A"
          color="white"
          borderRadius="full"
          px={{ base: 5, md: 7 }}
          py={{ base: 5, md: 6 }}
          fontSize={{ base: "13px", md: "14px" }}
          fontWeight={600}
          fontFamily="'Lato', 'Avenir', sans-serif"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            bg: "#8B2A3A",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(107,26,42,0.3)",
          }}
          _active={{
            bg: "#8B2A3A",
            transform: "translateY(0)",
          }}
          rightIcon={<Text fontSize="16px">→</Text>}
        >
          Join the Community
        </Button>
      </Flex>
    </motion.div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────

const TourPackageSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={colors.bg} py={{ base: 12, md: 16, lg: 20 }} overflow="hidden">
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
        {/* ── Header ── */}
        <VStack
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          spacing={{ base: 3, md: 4 }}
          textAlign="center"
          mb={{ base: 10, md: 14, lg: 16 }}
        >
          {/* Label (gold) */}
          <Text
            fontSize={{ base: "11px", md: "12px", lg: "13px" }}
            fontWeight="400"
            letterSpacing="3px"
            textTransform="uppercase"
            color={colors.accent}
            fontFamily={fonts.secondary}
          >
            Your Journey with SHEscapes
          </Text>

          {/* Main Title (ALESHA) */}
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "38px", lg: "46px" }}
            fontWeight="400"
            color={colors.primary}
            fontFamily={fonts.primary}
            lineHeight="1.2"
          >
            From Connection to Community
          </Heading>

          {/* Subtitle (AVENIR) */}
          <Text
            fontSize={{ base: "13px", md: "15px", lg: "16px" }}
            color={colors.textGray}
            maxW="600px"
            lineHeight="1.7"
            mt={1}
            fontFamily={fonts.secondary}
            fontWeight="300"
          >
            SHEscapes is more than a trip. It&apos;s a journey of connection,
            belonging and a community that grows with you.
          </Text>
        </VStack>

        {/* ── Steps Grid ── */}
        <Box position="relative">
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
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </Flex>
        </Box>

        {/* ── Footer Banner ── */}
        <FooterBanner />
      </Container>
    </Box>
  );
};

export default TourPackageSection;




// old code

// ***********************************


// import { Box, Flex, Heading, Text, VStack, Icon, Divider, HStack, Container, SimpleGrid, Image, Center, Stack } from "@chakra-ui/react";
// import TravelpackagesCard from "../../component/common/TravelPackageCard/TravelPackageList";
// import CustomSubHeading from "../common/CustomSubHeading/CustomSubHeading";
// import { observer } from "mobx-react-lite";
// import { FaHeart, FaClock, FaGlobe, FaUserFriends, FaHome, FaUserTie, FaLeaf, FaCamera, FaCompass } from "react-icons/fa";

// // Travel Differently features – exactly 3 as per reference image
// const travelFeatures = [
//   {
//     title: "Community First",
//     description: "Meet women who share your passion for exploration.",
//     icon: FaUserFriends,
//     color: "#D4A843",
//   },
//   {
//     title: "Local Living",
//     description: "Stay in beautiful community homes and experience like a local.",
//     icon: FaHome,
//     color: "#D4A843",
//   },
//   {
//     title: "Dedicated Trip Captain",
//     description: "Every journey includes a dedicated host to support and guide you.",
//     icon: FaUserTie,
//     color: "#D4A843",
//   },
// ];

// // Journey cards data (not used anymore, but kept for reference)
// const journeyCards = [
//   {
//     title: "SHEscapes Connect",
//     description: "Women-only journeys for solo travelers",
//     icon: FaCompass,
//     color: "#7B1035",
//     image: "https://travelbezzie.com/wp-content/uploads/2023/05/Indonesia-Bali-Trip-7-1024x683.jpg",
//   },
//   {
//     title: "SHEscapes Escape",
//     description: "Short weekend getaways to pause and recharge.",
//     icon: FaLeaf,
//     color: "#7B1035",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
//   },
//   {
//     title: "SHEscapes Impact",
//     description: "Travel combined with wellness and purpose.",
//     icon: FaHeart,
//     color: "#7B1035",
//     image: "https://static.toiimg.com/photo/109978062.cms",
//   },
//   {
//     title: "SHEscapes Unfiltered",
//     description: "Photography and content-focused experiences.",
//     icon: FaCamera,
//     color: "#7B1035",
//     image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
//   },
// ];

// const TourPackageSection = observer(() => {
//   return (
//     <Box
//       m={0}
//       p={0}
//       margin={0}
//       padding={0}
//       bg="#F5EDD8"
//       position="relative"
//       overflow="hidden"
//       fontFamily="'ALESHA', 'Georgia', serif"
//     >
//       <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 4, md: 6, lg: 8 }}>
//         {/* Decorative floating icons – gold with low opacity */}
//         <Icon
//           as={FaClock}
//           position="absolute"
//           top="10%"
//           left="2%"
//           color="#D4A843"
//           opacity={0.08}
//           w={{ base: "30px", md: "80px" }}
//           h={{ base: "30px", md: "80px" }}
//           transform="rotate(-15deg)"
//           zIndex={0}
//           display={{ base: "none", lg: "block" }}
//         />
//         <Icon
//           as={FaGlobe}
//           position="absolute"
//           bottom="15%"
//           right="2%"
//           color="#D4A843"
//           opacity={0.06}
//           w={{ base: "40px", md: "100px" }}
//           h={{ base: "40px", md: "100px" }}
//           zIndex={0}
//           display={{ base: "none", lg: "block" }}
//         />

//         {/* Travel Differently Section – Fully responsive as per reference image */}
//         <Box
//           mb={{ base: 10, md: 16 }}
//           position="relative"
//           zIndex={1}
//           bg="#F5EDD8"
//           borderRadius="2xl"
//           py={{ base: 4, md: 8, lg: 10 }}
//         >
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             gap={{ base: 6, lg: 8 }}
//             align={{ base: "center", lg: "flex-start" }}
//           >
//             {/* Left Side: Heading + Description */}
//             <Box
//               flex={{ base: "1", lg: "0 0 35%" }}
//               maxW={{ base: "100%", lg: "35%" }}
//               w="100%"
//             >
//               <Heading
//                 as="h2"
//                 fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
//                 color="#7B1035"
//                 fontWeight="700"
//                 letterSpacing="tight"
//                 fontFamily="'ALESHA', 'Georgia', serif"
//                 lineHeight="1.2"
//                 textAlign={{ base: "center", lg: "left" }}
//                 mb={{ base: 2, lg: 4 }}
//               >
//                 Travel <span style={{ color: "#D4A843" }}>Differently</span>
//               </Heading>

//               <Text
//                 fontSize={{ base: "sm", sm: "md", md: "lg" }}
//                 color="#7B1035"
//                 opacity={0.85}
//                 lineHeight={{ base: "1.6", md: "1.8" }}
//                 textAlign={{ base: "center", lg: "left" }}
//                 px={{ base: 2, sm: 4, lg: 0 }}
//                 maxW={{ base: "100%", lg: "90%" }}
//               >
//                 We believe travel is not just about destinations. It's about people,
//                 stories and experiences.
//               </Text>
//             </Box>

//             {/* Right Side: 3 Feature Cards in a row */}
//             <Flex
//               flex="1"
//               direction={{ base: "column", sm: "row" }}
//               gap={{ base: 3, md: 4 }}
//               w="100%"
//             >
//               {travelFeatures.map((feature, index) => (
//                 <Flex
//                   key={index}
//                   p={{ base: 4, sm: 4, md: 5 }}
//                   bg="white"
//                   borderRadius="xl"
//                   boxShadow="0 2px 12px rgba(123,16,53,0.04)"
//                   transition="all 0.3s cubic-bezier(0.2, 0, 0, 1)"
//                   _hover={{
//                     transform: { base: "none", md: "translateY(-4px)" },
//                     boxShadow: { base: "none", md: "0 12px 32px rgba(123,16,53,0.10)" },
//                     borderColor: "#D4A843",
//                   }}
//                   border="1px solid rgba(212,168,67,0.15)"
//                   flex="1"
//                   direction="column"
//                   align="center"
//                   textAlign="center"
//                   minH={{ base: "auto", sm: "160px", md: "180px" }}
//                 >
//                   {/* Icon */}
//                   <Box
//                     p={{ base: 2, sm: 2.5 }}
//                     bg="rgba(212,168,67,0.12)"
//                     borderRadius="full"
//                     color="#D4A843"
//                     mb={{ base: 2, sm: 3 }}
//                   >
//                     <Icon as={feature.icon} w={{ base: 4, sm: 5 }} h={{ base: 4, sm: 5 }} />
//                   </Box>

//                   {/* Title */}
//                   <Text
//                     fontWeight="700"
//                     fontSize={{ base: "sm", sm: "md" }}
//                     color="#7B1035"
//                     fontFamily="'ALESHA', 'Georgia', serif"
//                     mb={{ base: 1, sm: 2 }}
//                   >
//                     {feature.title}
//                   </Text>

//                   {/* Description */}
//                   <Text
//                     fontSize={{ base: "xs", sm: "sm" }}
//                     color="#7B1035"
//                     opacity={0.75}
//                     lineHeight="1.5"
//                     px={{ base: 1, sm: 2 }}
//                   >
//                     {feature.description}
//                   </Text>
//                 </Flex>
//               ))}
//             </Flex>
//           </Flex>
//         </Box>

//         {/* Divider with gold accents and globe icon */}
//         <Flex justify="center" mb={{ base: 8, md: 12 }} align="center" gap={3}>
//           <Divider
//             w={{ base: "40px", md: "80px" }}
//             borderColor="#D4A843"
//             borderWidth="2px"
//             borderRadius="full"
//             opacity={0.5}
//           />
//           <Icon as={FaGlobe} color="#D4A843" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} opacity={0.6} />
//           <Divider
//             w={{ base: "40px", md: "80px" }}
//             borderColor="#D4A843"
//             borderWidth="2px"
//             borderRadius="full"
//             opacity={0.5}
//           />
//         </Flex>

//         {/*
//           ============================================================
//           ENTIRE "YOUR ESCAPE" SECTION – FULLY COMMENTED OUT
//           (Heading "Find Your Perfect Journey" + cards grid)
//           ============================================================
//         */}
//         {/*
//         <Box>
//           <Flex direction="column" align="center" mb={{ base: 6, md: 10 }}>
//             <Heading
//               as="h3"
//               fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
//               color="#7B1035"
//               fontWeight="700"
//               fontFamily="'ALESHA', 'Georgia', serif"
//               textAlign="center"
//               letterSpacing="tight"
//               px={{ base: 4, md: 0 }}
//             >
//               Find Your Perfect Journey
//             </Heading>
//           </Flex>

//           <SimpleGrid
//             columns={{ base: 1, sm: 2, lg: 4 }}
//             spacing={{ base: 4, sm: 5, md: 6 }}
//             mb={{ base: 6, md: 8 }}
//           >
//             {journeyCards.map((card, index) => (
//               <Flex
//                 key={index}
//                 direction="column"
//                 bg="white"
//                 borderRadius="xl"
//                 overflow="hidden"
//                 boxShadow="0 2px 16px rgba(123,16,53,0.06)"
//                 border="1px solid rgba(212,168,67,0.15)"
//                 transition="all 0.3s cubic-bezier(0.2, 0, 0, 1)"
//                 _hover={{
//                   transform: { base: "none", md: "translateY(-6px)" },
//                   boxShadow: { base: "none", md: "0 12px 40px rgba(123,16,53,0.12)" },
//                   borderColor: "#D4A843",
//                 }}
//               >
//                 {/* Card Image - Commented out * /}
//                 {/*
//                 <Box
//                   position="relative"
//                   h={{ base: "180px", sm: "200px", md: "220px" }}
//                   overflow="hidden"
//                 >
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     objectFit="cover"
//                     w="100%"
//                     h="100%"
//                     transition="transform 0.5s ease"
//                     _hover={{ transform: { base: "none", md: "scale(1.05)" } }}
//                   />
//                   <Box
//                     position="absolute"
//                     bottom={0}
//                     left={0}
//                     right={0}
//                     h="50%"
//                     bg="linear-gradient(to top, rgba(0,0,0,0.2), transparent)"
//                   />
//                 </Box>
//                 * /}

//                 {/* Content - Responsive * /}
//                 <Center flexDirection="column" p={{ base: 4, sm: 5 }} textAlign="center" flex="1">
//                   {/* Icon - Commented out * /}
//                   {/*
//                   <Box
//                     p={{ base: 1.5, sm: 2 }}
//                     bg="rgba(212,168,67,0.1)"
//                     borderRadius="full"
//                     color="#D4A843"
//                     w="fit-content"
//                     mb={{ base: 2, sm: 3 }}
//                     mx="auto"
//                   >
//                     <Icon as={card.icon} w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} />
//                   </Box>
//                   * /}

//                   {/* Title - Commented out * /}
//                   {/*
//                   <Text
//                     fontWeight="700"
//                     fontSize={{ base: "md", sm: "lg" }}
//                     color="#7B1035"
//                     fontFamily="'ALESHA', 'Georgia', serif"
//                     mb={{ base: 1, sm: 2 }}
//                   >
//                     {card.title}
//                   </Text>
//                   * /}

//                   {/* Description - Commented out * /}
//                   {/*
//                   <Text
//                     fontSize={{ base: "xs", sm: "sm" }}
//                     color="#7B1035"
//                     opacity={0.8}
//                     lineHeight="1.5"
//                     mb={{ base: 2, sm: 3 }}
//                     px={{ base: 1, sm: 2 }}
//                   >
//                     {card.description}
//                   </Text>
//                   * /}

//                   {/* "Learn More" link - Commented out * /}
//                   {/*
//                   <Text
//                     fontSize={{ base: "xs", sm: "sm" }}
//                     fontWeight="600"
//                     color="#D4A843"
//                     letterSpacing="wide"
//                     textTransform="uppercase"
//                     cursor="pointer"
//                     _hover={{ color: "#7B1035" }}
//                   >
//                     Learn More →
//                   </Text>
//                   * /}
//                 </Center>
//               </Flex>
//             ))}
//           </SimpleGrid>
//         </Box>
//         */}

//         {/* Original TravelpackagesCard component (already hidden) */}
//         <Box display="none">
//           <CustomSubHeading highlightText="Starts Here">
//             Your Escape
//           </CustomSubHeading>
//           <TravelpackagesCard />
//         </Box>

//         {/* Bottom Footer Text */}
//         <Flex
//           justify="center"
//           mt={{ base: 8, md: 12 }}
//           pt={{ base: 6, md: 8 }}
//           borderTop="1px solid rgba(212,168,67,0.25)"
//         >
//           <Stack
//             direction={{ base: "column", sm: "row" }}
//             spacing={{ base: 2, sm: 3 }}
//             align="center"
//           >
//             <HStack spacing={2}>
//               <Icon as={FaClock} color="#D4A843" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} opacity={0.6} />
//               <Icon as={FaHeart} color="#D4A843" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} />
//               <Icon as={FaGlobe} color="#D4A843" w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} opacity={0.6} />
//             </HStack>
//             <Text 
//               fontSize={{ base: "xs", sm: "sm" }} 
//               color="#7B1035" 
//               opacity={0.7} 
//               textAlign="center"
//               px={{ base: 2, sm: 0 }}
//             >
//               Join our growing community of modern travelers
//             </Text>
//           </Stack>
//         </Flex>
//       </Container>
//     </Box>
//   );
// });

// export default TourPackageSection;