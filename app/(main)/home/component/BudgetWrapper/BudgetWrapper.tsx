"use client";

import {
  Box,
  Flex,
  Text,
  Icon,
  Container,
  useBreakpointValue,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  FaStar,
  FaGift,
  FaGem,
  FaCrown,
  FaUsers,
  FaArrowRight,
  FaChevronDown,
  FaHotel,
  FaUtensils,
  FaCar,
  FaSpa,
  FaConciergeBell,
  FaHelicopter,
  FaCamera,
  FaUserFriends,
  FaCheck,
  FaPlane,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const tiers = [
  {
    price: "44,999",
    label: "Standard",
    icon: FaStar,
    accent: "#D4A843", // brand gold
    shortDesc: "Essential travel",
    description: "Quality travel without compromise. Perfect for first-timers.",
    features: [
      { icon: FaHotel, text: "3-Star Hotels" },
      { icon: FaUtensils, text: "Daily Breakfast" },
      { icon: FaCar, text: "Airport Pickup" },
      { icon: FaCamera, text: "City Tour" },
    ],
  },
  {
    price: "54,999",
    label: "Superior",
    icon: FaGift,
    accent: "#D4A843",
    shortDesc: "Enhanced comfort",
    description: "Step up with better amenities and curated local experiences.",
    features: [
      { icon: FaHotel, text: "4-Star Hotels" },
      { icon: FaUtensils, text: "All Meals" },
      { icon: FaCar, text: "Private Transfers" },
      { icon: FaCamera, text: "Guided Tours" },
      { icon: FaSpa, text: "Welcome Drink" },
    ],
  },
  {
    price: "69,999",
    label: "Premium",
    icon: FaGem,
    accent: "#D4A843",
    shortDesc: "Most Popular",
    description: "The perfect sweet spot of luxury and value. Guest favorite.",
    features: [
      { icon: FaHotel, text: "5-Star Hotels" },
      { icon: FaUtensils, text: "Gourmet Dining" },
      { icon: FaCar, text: "Luxury Vehicle" },
      { icon: FaConciergeBell, text: "Private Guide" },
      { icon: FaSpa, text: "Spa Access" },
      { icon: FaUserFriends, text: "Priority Support" },
    ],
    popular: true,
  },
  {
    price: "84,999",
    label: "Luxury",
    icon: FaCrown,
    accent: "#D4A843",
    shortDesc: "World-class",
    description: "Indulge in the finest with personalized concierge service.",
    features: [
      { icon: FaHotel, text: "Boutique Resorts" },
      { icon: FaUtensils, text: "Michelin Dining" },
      { icon: FaCar, text: "Chauffeur Drive" },
      { icon: FaConciergeBell, text: "Personal Concierge" },
      { icon: FaHelicopter, text: "Helicopter Tour" },
      { icon: FaSpa, text: "Butler Service" },
    ],
    popular: true,
  },
  {
    price: "99,999",
    label: "Group",
    icon: FaUsers,
    accent: "#D4A843",
    shortDesc: "6+ travelers",
    description: "Exclusive group deals with custom itineraries and coordination.",
    features: [
      { icon: FaUserFriends, text: "Group Discounts" },
      { icon: FaHotel, text: "Private Villa" },
      { icon: FaCamera, text: "Custom Itinerary" },
      { icon: FaConciergeBell, text: "Coordinator" },
      { icon: FaUsers, text: "Team Activities" },
      { icon: FaCamera, text: "Group Photos" },
    ],
  },
];

const BudgetWrapper = () => {
  const [activeIdx, setActiveIdx] = useState(2);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (isMobile) {
    return (
      <Box bg="#F5EDD8" py={12} px={4} fontFamily="'ALESHA', 'Georgia', serif">
        <VStack spacing={4} maxW="420px" mx="auto">
          {tiers.map((tier, idx) => (
            <MobileCard key={idx} tier={tier} idx={idx} loaded={loaded} />
          ))}
        </VStack>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="#F5EDD8" // brand cream
      py={{ base: 10, md: 16, lg: 20 }}
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {/* Soft ambient glow – gold */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="1000px"
        h="400px"
        bg="radial-gradient(ellipse, rgba(212,168,67,0.08) 0%, transparent 70%)"
        filter="blur(80px)"
        pointerEvents="none"
      />

      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2}>
        {/* Header */}
        <Flex justify="space-between" align="flex-end" mb={10}>
          <VStack align="start" spacing={3}>
            <HStack spacing={3}>
              <Box
                p={1.5}
                borderRadius="lg"
                bg="rgba(212,168,67,0.12)"
                color="#D4A843"
              >
                <Icon as={FaPlane} boxSize={3} />
              </Box>
              <Text
                fontSize="xs"
                fontWeight="700"
                color="#7B1035"
                opacity={0.7}
                letterSpacing="0.15em"
                textTransform="uppercase"
              >
                Travel Packages
              </Text>
            </HStack>
            <Text
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="800"
              color="#7B1035"
              lineHeight="1.1"
              letterSpacing="-0.02em"
            >
              Holiday For{" "}
              <Text as="span" color="#D4A843">
                Every Budget
              </Text>
            </Text>
          </VStack>

          <HStack
            spacing={2}
            color="#7B1035"
            opacity={0.6}
            fontSize="sm"
            fontWeight="600"
            cursor="pointer"
            _hover={{ color: "#D4A843", opacity: 1 }}
            transition="all 0.3s"
            display={{ base: "none", md: "flex" }}
          >
            <Text>Compare All</Text>
            <Icon as={FaArrowRight} boxSize={3} />
          </HStack>
        </Flex>

        {/* Smooth Expandable Row */}
        <Flex
          gap={3}
          justifyContent="center"
          alignItems="stretch"
          minH="480px"
          onMouseLeave={() => setActiveIdx(2)}
        >
          {tiers.map((tier, idx) => {
            const isActive = activeIdx === idx;
            const isNeighbor = Math.abs(activeIdx - idx) === 1;

            return (
              <Box
                key={idx}
                position="relative"
                flex={isActive ? 3.5 : isNeighbor ? 1.2 : 0.8}
                opacity={loaded ? 1 : 0}
                transform={loaded ? "translateY(0)" : "translateY(40px)"}
                transition={`
                  flex 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  opacity 0.5s ease ${idx * 0.08}s,
                  transform 0.5s ease ${idx * 0.08}s
                `}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <Box
                    position="absolute"
                    top="-12px"
                    right="16px"
                    zIndex={10}
                    bg="#D4A843"
                    color="#7B1035"
                    fontSize="10px"
                    fontWeight="800"
                    px={3}
                    py={1}
                    borderRadius="full"
                    textTransform="uppercase"
                    letterSpacing="0.1em"
                    boxShadow={`0 4px 15px rgba(212,168,67,0.4)`}
                    transform={isActive ? "scale(1)" : "scale(0.9)"}
                    opacity={isActive ? 1 : 0.7}
                    transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  >
                    {idx === 2 ? "Most Popular" : "Best Value"}
                  </Box>
                )}

                <Box
                  h="100%"
                  bg={isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)"}
                  backdropFilter="blur(20px)"
                  border="1.5px solid"
                  borderColor={isActive ? tier.accent : "rgba(212,168,67,0.1)"}
                  borderRadius="2xl"
                  overflow="hidden"
                  position="relative"
                  transition="all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  boxShadow={
                    isActive
                      ? `0 30px 60px -15px rgba(123,16,53,0.15), 0 0 0 1px ${tier.accent}20`
                      : "0 4px 12px rgba(123,16,53,0.04)"
                  }
                  cursor="pointer"
                  _hover={{
                    boxShadow: isActive
                      ? `0 30px 60px -15px rgba(123,16,53,0.15), 0 0 0 1px ${tier.accent}20`
                      : `0 12px 30px -8px rgba(123,16,53,0.08)`,
                  }}
                >
                  {/* Animated left accent */}
                  <Box
                    position="absolute"
                    left={0}
                    top={0}
                    bottom={0}
                    w={isActive ? "5px" : "3px"}
                    bg="#D4A843"
                    opacity={isActive ? 1 : 0.3}
                    transition="all 0.5s ease"
                  />

                  {/* Content */}
                  <Box
                    p={isActive ? 7 : 5}
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    transition="padding 0.5s ease"
                  >
                    {/* Icon with breathing animation */}
                    <Box
                      mb={isActive ? 5 : 4}
                      p={isActive ? 3.5 : 2.5}
                      borderRadius={isActive ? "2xl" : "xl"}
                      bg="rgba(212,168,67,0.1)"
                      color="#D4A843"
                      w="fit-content"
                      transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      transform={isActive ? "scale(1.15)" : "scale(1)"}
                      animation={isActive ? "breathe 3s ease-in-out infinite" : "none"}
                    >
                      <Icon as={tier.icon} boxSize={isActive ? 7 : 5} />
                    </Box>

                    {/* Label */}
                    <Text
                      fontSize={isActive ? "md" : "xs"}
                      fontWeight="800"
                      color="#D4A843"
                      letterSpacing="0.1em"
                      textTransform="uppercase"
                      mb={isActive ? 2 : 1}
                      transition="all 0.4s ease"
                    >
                      {tier.label}
                    </Text>

                    {/* Short desc when collapsed */}
                    {!isActive && (
                      <Text
                        fontSize="10px"
                        color="#7B1035"
                        opacity={0.6}
                        mb={3}
                        noOfLines={2}
                        lineHeight="1.5"
                        transition="opacity 0.3s"
                      >
                        {tier.shortDesc}
                      </Text>
                    )}

                    {/* Price */}
                    <HStack align="baseline" spacing={1} mb={isActive ? 6 : 3}>
                      <Text
                        fontSize={isActive ? "sm" : "xs"}
                        color="#7B1035"
                        opacity={0.6}
                        fontWeight="600"
                        transition="font-size 0.4s"
                      >
                        ₹
                      </Text>
                      <Text
                        fontSize={isActive ? "4xl" : "xl"}
                        fontWeight="900"
                        color="#7B1035"
                        lineHeight="1"
                        letterSpacing="-0.03em"
                        transition="font-size 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      >
                        {tier.price}
                      </Text>
                    </HStack>

                    {/* Collapsed hint */}
                    {!isActive && (
                      <Flex align="center" gap={1.5} mt="auto" color="#D4A843" opacity={0.6}>
                        <Box w="1.5px" h="1.5px" borderRadius="full" bg="#D4A843" />
                        <Box w="1.5px" h="1.5px" borderRadius="full" bg="#D4A843" />
                        <Box w="1.5px" h="1.5px" borderRadius="full" bg="#D4A843" />
                      </Flex>
                    )}

                    {/* Expanded Content */}
                    <Box
                      flex={1}
                      opacity={isActive ? 1 : 0}
                      maxH={isActive ? "500px" : "0px"}
                      overflow="hidden"
                      transition="all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    >
                      {/* Description */}
                      <Text
                        fontSize="sm"
                        color="#7B1035"
                        opacity={0.85}
                        lineHeight="1.7"
                        mb={6}
                        fontWeight="500"
                      >
                        {tier.description}
                      </Text>

                      {/* Elegant divider */}
                      <Box
                        h="1px"
                        bg="linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)"
                        mb={6}
                      />

                      {/* Features - staggered fade in */}
                      <Flex gap={2} flexWrap="wrap" mb={8}>
                        {tier.features.map((feat, fIdx) => (
                          <HStack
                            key={fIdx}
                            spacing={2}
                            bg="rgba(212,168,67,0.06)"
                            px={3}
                            py={2}
                            borderRadius="xl"
                            border="1px solid rgba(212,168,67,0.12)"
                            opacity={isActive ? 1 : 0}
                            transform={isActive ? "translateY(0)" : "translateY(10px)"}
                            transition={`
                              opacity 0.4s ease ${0.1 + fIdx * 0.05}s,
                              transform 0.4s ease ${0.1 + fIdx * 0.05}s
                            `}
                          >
                            <Icon as={feat.icon} color="#D4A843" boxSize={3} />
                            <Text fontSize="11px" color="#7B1035" fontWeight="600">
                              {feat.text}
                            </Text>
                          </HStack>
                        ))}
                      </Flex>

                      {/* CTA Button – gold bg, maroon text */}
                      <Box
                        as="button"
                        w="100%"
                        py={4}
                        px={6}
                        borderRadius="xl"
                        bg="#D4A843"
                        color="#7B1035"
                        fontSize="sm"
                        fontWeight="800"
                        letterSpacing="0.05em"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: `0 12px 30px -8px rgba(212,168,67,0.4)`,
                          bg: "#c9a03a",
                        }}
                        _active={{
                          transform: "translateY(0)",
                        }}
                      >
                        <Text>Choose {tier.label}</Text>
                        <Icon as={FaArrowRight} boxSize={4} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>

        {/* Trust bar */}
        <Flex
          justify="center"
          gap={{ base: 6, md: 12 }}
          mt={10}
          pt={6}
          borderTop="1px solid rgba(212,168,67,0.12)"
        >
          {[
            { text: "Best Price Guarantee", icon: FaCheck },
            { text: "Flexible Cancellation", icon: FaCheck },
            { text: "24/7 Expert Support", icon: FaCheck },
          ].map((item, i) => (
            <HStack
              key={i}
              spacing={2.5}
              opacity={loaded ? 1 : 0}
              transform={loaded ? "translateY(0)" : "translateY(10px)"}
              transition={`all 0.4s ease ${0.5 + i * 0.1}s`}
            >
              <Box
                p={1}
                borderRadius="full"
                bg="rgba(212,168,67,0.1)"
                color="#D4A843"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={item.icon} boxSize={2.5} />
              </Box>
              <Text fontSize="xs" color="#7B1035" opacity={0.7} fontWeight="600">
                {item.text}
              </Text>
            </HStack>
          ))}
        </Flex>
      </Container>

      {/* Breathing animation */}
      <style jsx global>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1.15); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </Box>
  );
};

// Mobile version
const MobileCard = ({ tier, idx, loaded }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      w="100%"
      opacity={loaded ? 1 : 0}
      transform={loaded ? "translateY(0)" : "translateY(20px)"}
      transition={`all 0.5s ease ${idx * 0.1}s`}
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      <Box
        bg="rgba(255,255,255,0.9)"
        border="1.5px solid"
        borderColor={isOpen ? "#D4A843" : "rgba(212,168,67,0.12)"}
        borderRadius="2xl"
        overflow="hidden"
        transition="all 0.4s ease"
        boxShadow={isOpen ? `0 12px 30px rgba(123,16,53,0.08)` : "0 2px 8px rgba(123,16,53,0.03)"}
      >
        <Flex
          p={5}
          align="center"
          gap={4}
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Box
            p={2.5}
            borderRadius="xl"
            bg="rgba(212,168,67,0.1)"
            color="#D4A843"
            flexShrink={0}
            transition="transform 0.3s"
            transform={isOpen ? "scale(1.1)" : "scale(1)"}
          >
            <Icon as={tier.icon} boxSize={5} />
          </Box>

          <Box flex={1}>
            <Flex justify="space-between" align="center" mb={1}>
              <Text fontSize="sm" fontWeight="800" color="#D4A843" textTransform="uppercase" letterSpacing="wide">
                {tier.label}
              </Text>
              {tier.popular && (
                <Box
                  bg="#D4A843"
                  color="#7B1035"
                  fontSize="9px"
                  fontWeight="800"
                  px={2.5}
                  py={0.5}
                  borderRadius="full"
                >
                  {idx === 2 ? "Popular" : "Best"}
                </Box>
              )}
            </Flex>
            <HStack align="baseline" spacing={0.5}>
              <Text fontSize="xs" color="#7B1035" opacity={0.6}>₹</Text>
              <Text fontSize="2xl" fontWeight="900" color="#7B1035" lineHeight="1">
                {tier.price}
              </Text>
            </HStack>
          </Box>

          <Box
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
          >
            <Icon as={FaChevronDown} color="#D4A843" boxSize={4} />
          </Box>
        </Flex>

        <Box
          maxH={isOpen ? "500px" : "0px"}
          overflow="hidden"
          transition="max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        >
          <Box px={5} pb={6}>
            <Text fontSize="sm" color="#7B1035" opacity={0.85} lineHeight="1.7" mb={5}>
              {tier.description}
            </Text>

            <VStack align="stretch" spacing={2.5} mb={6}>
              {tier.features.map((feat, fIdx) => (
                <HStack key={fIdx} spacing={3} opacity={isOpen ? 1 : 0} transform={isOpen ? "translateX(0)" : "translateX(-10px)"} transition={`all 0.3s ease ${fIdx * 0.05}s`}>
                  <Box p={1} borderRadius="md" bg="rgba(212,168,67,0.1)" color="#D4A843">
                    <Icon as={feat.icon} boxSize={3} />
                  </Box>
                  <Text fontSize="sm" color="#7B1035" fontWeight="500">
                    {feat.text}
                  </Text>
                </HStack>
              ))}
            </VStack>

            <Box
              as="button"
              w="100%"
              py={3.5}
              bg="#D4A843"
              color="#7B1035"
              borderRadius="xl"
              fontWeight="700"
              fontSize="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              transition="all 0.3s"
              _active={{ transform: "scale(0.98)" }}
              _hover={{ bg: "#c9a03a" }}
            >
              <Text>Choose {tier.label}</Text>
              <Icon as={FaArrowRight} boxSize={3} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BudgetWrapper;