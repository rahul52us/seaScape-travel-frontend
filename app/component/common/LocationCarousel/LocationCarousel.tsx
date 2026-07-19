import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaPlane, FaArrowRight } from "react-icons/fa";

import CustomSubHeading from "../../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import { formatTitle } from "../../../config/utils/function";

// Animation variants (unchanged)
const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const thumbnailVariants = {
  idle: { scale: 1, borderColor: "transparent" },
  active: { scale: 1.05, borderColor: "#D4A843", transition: { type: "spring", stiffness: 300 } }, // gold
};

const getRandomLocations = (locations: any[], count: number) => {
  if (!locations?.length) return [];
  const shuffled = [...locations];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

const LocationCarousel = observer(({ locations }: { locations: any[] }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [randomLocations, setRandomLocations] = useState<any[]>([]);

  // Responsive values
  const headingSize = useBreakpointValue({ base: "3xl", md: "5xl", lg: "6xl" });
  const containerHeight = useBreakpointValue({ base: "480px", md: "580px", lg: "650px" });
  const thumbnailWidth = useBreakpointValue({ base: "100px", md: "130px", lg: "150px" });
  const thumbnailHeight = useBreakpointValue({ base: "70px", md: "90px", lg: "100px" });

  useEffect(() => {
    if (locations?.length) {
      setRandomLocations(getRandomLocations(locations, 5));
    }
  }, [locations]);

  useEffect(() => {
    if (!randomLocations.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % randomLocations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [randomLocations]);

  if (!randomLocations.length) {
    return (
      <Box py={20} textAlign="center">
        <Text color="#7B1035" opacity={0.7}>No destinations available</Text>
      </Box>
    );
  }

  const activeLocation = randomLocations[activeIndex];

  return (
    <Box
      py={{ base: 12, md: 20 }}
      bg="linear-gradient(180deg, #F5EDD8 0%, #E8DDCC 100%)" // brand cream gradient
      fontFamily="'ALESHA', 'Georgia', serif" // brand font
    >
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 6, lg: 8 }}>
        <CustomSubHeading highlightText="Destinations">
          Explore Beyond Limits
        </CustomSubHeading>

        <Text
          textAlign="center"
          maxW="700px"
          mx="auto"
          color="#7B1035" // maroon
          opacity={0.85}
          mt={4}
          mb={{ base: 8, md: 12 }}
          fontSize={{ base: "sm", md: "md" }}
          px={{ base: 2, md: 0 }}
        >
          Discover handpicked destinations crafted for unforgettable adventures,
          breathtaking landscapes and meaningful experiences.
        </Text>

        {/* Main featured destination card */}
        <Box
          position="relative"
          h={containerHeight}
          borderRadius="32px"
          overflow="hidden"
          boxShadow="0 20px 40px -12px rgba(123,16,53,0.25)" // maroon shadow
          _hover={{ "& img": { transform: "scale(1.05)" } }}
        >
          <Image
            src={activeLocation?.image?.url}
            alt={activeLocation?.name}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 0.7s cubic-bezier(0.2, 0, 0, 1)"
          />

          {/* Overlay – maroon gradient */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-r, rgba(123,16,53,0.85), rgba(123,16,53,0.5), rgba(0,0,0,0.2))"
          />

          {/* Content */}
          <Flex
            position="absolute"
            left={{ base: 4, md: 8, lg: 12 }}
            bottom={{ base: 4, md: 8, lg: 12 }}
            direction="column"
            maxW={{ base: "calc(100% - 32px)", md: "520px", lg: "580px" }}
            zIndex={2}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={fadeSlideUp}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Text
                  color="#D4A843" // gold
                  fontWeight="700"
                  letterSpacing="3px"
                  mb={2}
                  textTransform="uppercase"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  ✨ Featured Destination
                </Text>

                <Heading
                  color="white"
                  lineHeight="1.2"
                  mb={{ base: 2, md: 4 }}
                  fontSize={headingSize}
                  textShadow="0 2px 10px rgba(0,0,0,0.2)"
                  fontFamily="'ALESHA', 'Georgia', serif"
                >
                  {formatTitle(activeLocation?.name)}
                </Heading>

                <Text
                  color="whiteAlpha.900"
                  mb={{ base: 4, md: 6 }}
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="1.6"
                  noOfLines={{ base: 3, md: 4 }}
                >
                  {activeLocation?.description || "Experience the magic of this incredible destination with curated itineraries and local insights."}
                </Text>
              </motion.div>
            </AnimatePresence>

            {/* Info badges – gold icons */}
            <HStack gap={3} wrap="wrap" mb={{ base: 4, md: 6 }}>
              <Flex align="center" gap={2} px={4} py={2} bg="rgba(255,255,255,0.12)" backdropFilter="blur(8px)" borderRadius="full">
                <Icon as={FaCalendarAlt} color="#D4A843" boxSize={3} />
                <Text color="white" fontSize="sm">{activeLocation?.days || 7} Days</Text>
              </Flex>
              <Flex align="center" gap={2} px={4} py={2} bg="rgba(255,255,255,0.12)" backdropFilter="blur(8px)" borderRadius="full">
                <Icon as={FaPlane} color="#D4A843" boxSize={3} />
                <Text color="white" fontSize="sm">{activeLocation?.trips || "Multiple Trips"}</Text>
              </Flex>
            </HStack>

            {/* CTA Button – gold background, maroon text */}
            <Box
              as="button"
              bg="#D4A843"
              color="#7B1035"
              px={{ base: 6, md: 8 }}
              py={{ base: 2.5, md: 3 }}
              borderRadius="full"
              fontWeight="700"
              w="fit-content"
              transition="all 0.25s ease"
              _hover={{
                bg: "#c9a03a",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px -5px rgba(212,168,67,0.4)",
              }}
              _active={{ transform: "translateY(0)" }}
              onClick={() => router.push(`/destinations/${activeLocation?.name}`)}
            >
              <Flex align="center" gap={2}>
                <Text>Explore Journey</Text>
                <Icon as={FaArrowRight} boxSize={3.5} transition="transform 0.2s" _hover={{ transform: "translateX(4px)" }} />
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Thumbnail strip – gold active border */}
        <Flex
          mt={{ base: 6, md: 8 }}
          gap={3}
          overflowX="auto"
          pb={3}
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          {randomLocations.map((location, idx) => (
            <motion.div
              key={location._id}
              variants={thumbnailVariants}
              animate={activeIndex === idx ? "active" : "idle"}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveIndex(idx)}
            >
              <Box
                position="relative"
                w={thumbnailWidth}
                h={thumbnailHeight}
                borderRadius="20px"
                overflow="hidden"
                border={activeIndex === idx ? "2px solid #D4A843" : "2px solid transparent"}
                transition="all 0.2s"
                boxShadow={activeIndex === idx ? "0 4px 15px rgba(212,168,67,0.3)" : "none"}
              >
                <Image
                  src={location?.image?.url}
                  alt={location?.name}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bg="linear-gradient(to top, rgba(123,16,53,0.5), transparent)" // maroon overlay
                />
                <Text
                  position="absolute"
                  bottom="6px"
                  left="8px"
                  right="8px"
                  color="white"
                  fontWeight="bold"
                  fontSize="10px"
                  textTransform="uppercase"
                  letterSpacing="0.5px"
                  noOfLines={1}
                  textShadow="0 1px 2px rgba(0,0,0,0.5)"
                >
                  {formatTitle(location.name)}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </Box>
  );
});

export default LocationCarousel;