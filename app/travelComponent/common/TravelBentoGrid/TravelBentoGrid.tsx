"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Container,
  Heading,
  VStack,
  HStack,
  SimpleGrid,
  IconButton,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";

// ═══════════════════════════════════════════════════════════════
//  SVG ICONS (all inlined, no emojis, no external deps)
//  Colours updated to maroon (#7B1035) and gold (#D4A843)
// ═══════════════════════════════════════════════════════════════

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIconSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const UsersIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);

// ── Tag Icons (maroon line style) ──
const BoutiqueStayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const WomenOnlyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SlowTravelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const LocalExpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
);

const StreetFoodIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const HalongBayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20" /><path d="M12 2v20" /><path d="M12 2L7 7" /><path d="M12 2l5 5" /><path d="M7 12h10" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const MarketIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const WaterfallIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" /><path d="M8 6c0 4 2 6 4 10" /><path d="M16 6c0 4-2 6-4 10" /><path d="M2 22h20" />
  </svg>
);

const BridgeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16" /><path d="M2 18h20" /><path d="M6 18v-6a6 6 0 0 1 12 0v6" /><path d="M12 12v6" />
  </svg>
);

const VillageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 21v-6h6v6" />
  </svg>
);

const ForestIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" /><path d="M7 18h10" /><path d="M12 2L4 18h16L12 2z" />
  </svg>
);

const ParaglidingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v8" /><path d="M8 12h8" />
  </svg>
);

const CafeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const BonfireIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072 0-2.2 1.2-2.5 2.5" /><path d="M12 14.5a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.072 0-2.2 1.2-2.5 2.5" /><path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9 4.5-9 9z" /><path d="M12 22c-4.97 0-9-4.03-9-9 4.5 0 9 4.5 9 9z" />
  </svg>
);

const MusicIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
  </svg>
);

const MountainIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const AltitudeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" /><path d="M2 12h20" /><path d="M12 2l-4 4" /><path d="M12 2l4 4" />
  </svg>
);

const MonasteryIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /><path d="M10 9h4" /><path d="M10 13h4" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B1035" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════
//  ICON MAP
// ═══════════════════════════════════════════════════════════════
const tagIconMap: Record<string, React.FC> = {
  "Boutique Stay": BoutiqueStayIcon,
  "Women Only": WomenOnlyIcon,
  "Slow Travel": SlowTravelIcon,
  "Local Experiences": LocalExpIcon,
  "Street Food": StreetFoodIcon,
  "Halong Bay": HalongBayIcon,
  "Instagram Moments": InstagramIcon,
  "Local Markets": MarketIcon,
  "Waterfalls": WaterfallIcon,
  "Living Root Bridge": BridgeIcon,
  "Local Villages": VillageIcon,
  "Rain Forest": ForestIcon,
  "Paragliding": ParaglidingIcon,
  "Mountain Cafés": CafeIcon,
  "Bonfire Evenings": BonfireIcon,
  "Live Music": MusicIcon,
  "Offbeat Villages": MountainIcon,
  "High Altitude": AltitudeIcon,
  "Monasteries": MonasteryIcon,
  "Stargazing": StarIcon,
};

// ═══════════════════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════════════════
const tabs = ["All Experiences","Weekend Escapes","International","Wellness","Adventure","Corporate","Content Creator"];

const cardData = [
  { id:"bhutan", location:"BHUTAN", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxleXUcPKuEnvNG65x83IwzFVCeumfjQbFUXlAqp7QTTfqy3k1cc8EHGmL&s=10", title:"Find Peace in the Land of Happiness", description:"Ancient monasteries, peaceful valleys and meaningful conversations.", tags:["Boutique Stay","Women Only","Slow Travel","Local Experiences"], meta:{date:"Nov - Mar", duration:"6 Nights", group:"8 seats left"} },
  { id:"vietnam", location:"VIETNAM", image:"https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=300&fit=crop", title:"Adventure Meets Culture", description:"From lantern-lit streets to breathtaking landscapes, Vietnam blends adventure, local culture and unforgettable memories.", tags:["Street Food","Halong Bay","Instagram Moments","Local Markets"], meta:{date:"Oct - Mar", duration:"6 Nights", group:"2 seats left"} },
  { id:"meghalaya", location:"MEGHALAYA", image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop", title:"Nature's Hidden Paradise", description:"Waterfalls, living root bridges, misty mornings and untouched beauty—perfect for women who love slow adventures.", tags:["Waterfalls","Living Root Bridge","Local Villages","Rain Forest"], meta:{date:"Jun - Sep", duration:"4 Nights", group:"15 seats left"} },
  { id:"bir", location:"BIR", image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", title:"Your Perfect Weekend Reset", description:"Paragliding, cafés, sunsets and mountain air—your perfect two-night reset.", tags:["Paragliding","Mountain Cafés","Bonfire Evenings","Live Music"], meta:{date:"All Year", duration:"2 Nights", group:"18 seats left"} },
  { id:"spiti", location:"SPITI", image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop", title:"Into the Heart of the Himalayas", description:"Raw landscapes, ancient villages and starry skies—an offbeat escape for the soul.", tags:["Offbeat Villages","High Altitude","Monasteries","Stargazing"], meta:{date:"May - Oct", duration:"5 Nights", group:"30 seats left"} },
];

// ═══════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════
const TravelDestinationsWithDetails = observer(() => {
  const router = useRouter();
  const {
    locationStore: { getLocations, location },
  } = stores;

  useEffect(() => {
    getLocations({ page: 1, limit: 10 });
  }, [getLocations]);

  const handleCardClick = (destId: string) => {
    router.push(`/journeys/${destId}`);
  };

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [viewportWidth, setViewportWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Determine how many cards to show per view (responsive)
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount());
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Measure card width
  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        setCardWidth(width);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Measure viewport width
  useEffect(() => {
    const updateViewportWidth = () => {
      if (viewportRef.current) {
        const width = viewportRef.current.offsetWidth;
        setViewportWidth(width);
      }
    };
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const locationData = location?.data || [];
  
  // Map the backend data exactly to the original cardData structure so the UI code doesn't need to change
  const mappedCardData = locationData.map((dest: any) => ({
    id: dest.slug || dest._id,
    location: dest.name,
    image: dest?.image?.url || "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=300&fit=crop",
    title: dest.title || dest.tagline || dest.name,
    description: dest.description,
    tags: dest.cardHighlights || [],
    meta: {
      date: dest.months || "",
      duration: dest.nights || "",
      group: dest.seatsLeft ? `${dest.seatsLeft} seats left` : "",
    }
  }));

  const totalCards = mappedCardData.length;
  const maxIndex = Math.max(0, totalCards - visibleCount);

  // Clamp currentIndex when visibleCount changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  // ─── AUTO-SCROLL ───
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  // Calculate total content width and maximum offset
  const gap = 24; // matches gap={6} (6 * 4px = 24px)
  const totalContentWidth = totalCards * cardWidth + (totalCards - 1) * gap;
  const maxOffset = Math.max(0, totalContentWidth - viewportWidth);

  // Calculate the actual offset – clamp to maxOffset to avoid empty space
  const offset = Math.min(currentIndex * (cardWidth + gap), maxOffset);

  return (
    <Box bg="#F5EDD8" py={{ base: 12, md: 16 }} fontFamily="'AVENIR', 'Inter', sans-serif">
      <Container maxW="1280px" px={{ base: 4, md: 6, lg: 8 }} overflow="visible">

        {/* ─── HEADER ─── */}
        <VStack spacing={0} align="center" mb={8}>
          <Text fontSize="13px" fontWeight="600" color="#D4A843" letterSpacing="4px" textTransform="uppercase" mb={3}>
            OUR DESTINATIONS
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "42px" }}
            fontWeight="400"
            color="#7B1035"
            textAlign="center"
            lineHeight="1.2"
            fontFamily="'ALESHA', 'Playfair Display', serif"
            mb={4}
          >
            Curated Journeys, Just for Women
          </Heading>
          <Text fontSize="15px" color="#7A6B5D" textAlign="center" maxW="600px" lineHeight="1.6" fontWeight="300">
            Thoughtfully designed getaways across India and beyond.<br />
            Small groups. Meaningful experiences. Lifelong memories.
          </Text>
        </VStack>

        {/* ─── TABS ─── */}
        {/* <HStack spacing={2} justify="center" flexWrap="wrap" mb={10} gap={2}>
          {tabs.map((tab, idx) => (
            <Button
              key={tab}
              px={5} py={2.5} borderRadius="full" fontSize="13px" fontWeight="500" letterSpacing="0.5px"
              transition="all 0.3s ease"
              bg={idx === 0 ? "#7B1035" : "transparent"}
              color={idx === 0 ? "white" : "#7B1035"}
              border={idx === 0 ? "none" : "1px solid #D4C8B0"}
              _hover={{ bg: idx === 0 ? "#66102D" : "rgba(123,16,53,0.06)" }}
            >
              {tab}
            </Button>
          ))}
        </HStack> */}

        {/* ─── CAROUSEL ─── */}
        <Box position="relative" px={{ base: 0, md: 6 }} overflow="visible">
          {/* Viewport */}
          <Box ref={viewportRef} overflow="hidden" position="relative">
            <Flex
              gap={6}
              transition="transform 0.4s ease"
              transform={`translateX(-${offset}px)`}
              willChange="transform"
              minWidth="max-content"
            >
              {location.loading ? (
                <Center w="full" py={10}>
                  <Spinner size="xl" color="#7B1035" />
                </Center>
              ) : mappedCardData.map((dest: any, index: number) => (
                <Box
                  key={dest.id}
                  ref={index === 0 ? cardRef : null}
                  bg="#FFFFFF"
                  border="1px solid"
                  borderColor="#EDE6DE"
                  borderRadius="20px"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  w={{ base: "100%", md: "320px" }}
                  maxW="320px"
                  flexShrink={0}
                  transition="all 0.3s ease"
                  cursor="pointer"
                  onClick={() => handleCardClick(dest.id)}
                  _hover={{ transform: "translateY(-6px)", boxShadow: "0 16px 40px rgba(123,16,53,0.12)" }}
                >
                  {/* Image */}
                  <Box position="relative" h={{ base: "180px", md: "220px", lg: "240px" }} overflow="hidden">
                    <Image src={dest.image} alt={dest.title} w="100%" h="100%" objectFit="cover" transition="transform 0.5s ease" _hover={{ transform: "scale(1.05)" }} />
                    {/* Location Badge */}
                    <Flex position="absolute" top="16px" left="16px" align="center" gap={1.5} bg="rgba(255,255,255,0.92)" backdropFilter="blur(4px)" px={3} py={1.5} borderRadius="full">
                      <PinIcon />
                      <Text fontSize="11px" fontWeight="700" color="#7B1035" letterSpacing="1px" textTransform="uppercase">{dest.location}</Text>
                    </Flex>
                    {/* Heart */}
                    <Flex position="absolute" top="16px" right="16px" w="38px" h="38px" borderRadius="full" bg="rgba(255,255,255,0.92)" backdropFilter="blur(4px)" align="center" justify="center" cursor="pointer" transition="all 0.2s" border="1px solid rgba(123,16,53,0.06)" _hover={{ bg: "white", transform: "scale(1.08)" }}>
                      <HeartIcon />
                    </Flex>
                  </Box>

                  {/* Content */}
                  <Box p={5} display="flex" flexDirection="column" justifyContent="space-between" flex="1">
                    <Text fontSize="18px" fontWeight="600" color="#7B1035" lineHeight="1.3" fontFamily="'ALESHA', 'Playfair Display', serif" mb={2}>
                      {dest.title}
                    </Text>
                    <Text fontSize="14px" color="#7A6B5D" lineHeight="1.6" fontWeight="300" mb={4} noOfLines={3}>
                      {dest.description}
                    </Text>

                    {/* Tags */}
                    <SimpleGrid columns={{ base: 2, md: 2 }} spacingX={4} spacingY={3} mb={4}>
                      {dest.tags.map((tag: string, idx: number) => {
                        const fallbackIcons = [StarIcon, SlowTravelIcon, LocalExpIcon, MountainIcon, ForestIcon, StreetFoodIcon, MarketIcon];
                        const getFallbackIcon = (str: string) => fallbackIcons[str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % fallbackIcons.length];
                        const TagIcon = tagIconMap[tag] || getFallbackIcon(tag);
                        return (
                          <Flex key={idx} align="center" gap={3}>
                            <Box flexShrink={0} bg="#FFF6F4" borderRadius="10px" p={2}><TagIcon /></Box>
                            <Text fontSize="13px" color="#7B1035" fontWeight="500" noOfLines={1}>{tag}</Text>
                          </Flex>
                        );
                      })}
                    </SimpleGrid>

                    {/* Meta */}
                    <Flex gap={3} mb={4} flexWrap="wrap" align="center">
                      <Box bg="#F6EEE7" px={3} py={1.5} borderRadius="10px" display="inline-flex" alignItems="center" gap={2}>
                        <CalendarIcon /><Text fontSize="13px" color="#D4A843" fontWeight="600">{dest.meta.date}</Text>
                      </Box>
                      <Box bg="#F6EEE7" px={3} py={1.5} borderRadius="10px" display="inline-flex" alignItems="center" gap={2}>
                        <ClockIconSmall /><Text fontSize="13px" color="#D4A843" fontWeight="600">{dest.meta.duration}</Text>
                      </Box>
                      <Box bg="#F6EEE7" px={3} py={1.5} borderRadius="10px" display="inline-flex" alignItems="center" gap={2}>
                        <UsersIcon /><Text fontSize="13px" color="#D4A843" fontWeight="600">{dest.meta.group}</Text>
                      </Box>
                    </Flex>

                    {/* Button */}
                    <Flex justify="center" pt={2}>
                      <Button variant="ghost" color="#7B1035" fontSize="15px" fontWeight="600" letterSpacing="0.5px" rightIcon={<ArrowRightIcon />} _hover={{ color: "#66102D", bg: "transparent" }} p={0} h="auto">
                        Explore Journey
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* ─── ARROWS (placed outside the viewport) ─── */}
          <IconButton
            aria-label="Previous"
            icon={<ArrowLeftIcon />}
            position="absolute"
            left={{ base: "-12px", md: "-20px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bg="white"
            color="#7B1035"
            borderRadius="full"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            size={{ base: "xs", md: "lg" }}
            isDisabled={currentIndex === 0}
            onClick={goPrev}
            _hover={{ bg: "#F5EDD8", color: "#66102D" }}
            _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
          />

          <IconButton
            aria-label="Next"
            icon={<ArrowRightIcon />}
            position="absolute"
            right={{ base: "-12px", md: "-20px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bg="white"
            color="#7B1035"
            borderRadius="full"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            size={{ base: "xs", md: "lg" }}
            isDisabled={currentIndex >= maxIndex}
            onClick={goNext}
            _hover={{ bg: "#F5EDD8", color: "#66102D" }}
            _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
          />
        </Box>

        {/* ─── PAGINATION DOTS ─── */}
        <HStack justify="center" mt={6} spacing={2}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <Box
              key={idx}
              w="8px"
              h="8px"
              borderRadius="full"
              bg={idx === currentIndex ? "#D4A843" : "#D4C8B0"}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </HStack>

      </Container>
    </Box>
  );
});

export default TravelDestinationsWithDetails;