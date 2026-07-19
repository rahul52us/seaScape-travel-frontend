"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import BookingInfoModal from "../../../../component/BookingInfoModal/BookingInfoModal";
import PerkIcon from "../../../../component/common/TravelPackageCard/element/PerkIcon";
import { formatTitle } from "../../../../config/utils/function";

const softBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const TravelPackageCard = ({ pkg }: { pkg: any }) => {
  const [openBookingModal, setOpenBookingModal] = useState({ open: false, data: pkg });
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const sentences =
    pkg?.description
      ?.split(".")
      .filter((s: string) => s.trim().length > 0)
      .map((s: string) => s.trim()) || [];

  if (sentences.length === 0) return null;

  const originalPrice = pkg.discount
    ? Math.round(pkg.price / (1 - pkg.discount / 100))
    : null;

  const fullStars = Math.floor(pkg.rating);
  const hasHalfStar = pkg.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Card
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0 4px 20px rgba(0,0,0,0.04)"
      transition="all 0.3s cubic-bezier(0.2,0,0,1)"
      _hover={{ transform: "translateY(-6px)", boxShadow: "0 20px 35px -12px rgba(107,26,42,0.15)" }}
      bg="white"
      border="1px solid #f0e6d8"
      w="100%"
    >
      {/* Discount Tag – Maroon */}
      {pkg.discount && (
        <Tag
          position="absolute"
          top={3}
          right={3}
          bg="#6b1a2a"
          color="white"
          size="sm"
          borderRadius="full"
          px={3}
          py={1}
          zIndex={2}
          fontWeight="bold"
          boxShadow="0 2px 6px rgba(107,26,42,0.2)"
        >
          🔥 {pkg.discount}% OFF
        </Tag>
      )}

      {/* Responsive Grid: Image + Content */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1.6fr" }}
        gap={{ base: 0, md: 4 }}
      >
        {/* Image Section */}
        <GridItem w="100%">
          <Box
            w="100%"
            h={{ base: "220px", sm: "260px", md: "100%" }}
            bgImage={`url(${pkg?.image?.url})`}
            bgSize="cover"
            bgPosition="center"
            position="relative"
            transition="transform 0.4s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, rgba(107,26,42,0.7), rgba(107,26,42,0.2))"
            />
            <Flex
              position="absolute"
              bottom={3}
              left={3}
              color="white"
              zIndex={1}
              align="center"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              <Icon as={FaMapMarkerAlt} color="#e8b86b" boxSize={4} />
              <Heading
                fontSize={{ base: "md", md: "lg" }}
                ml={2}
                fontWeight="700"
                textShadow="0 1px 3px rgba(0,0,0,0.3)"
              >
                {formatTitle(pkg?.name)}
              </Heading>
            </Flex>
          </Box>
        </GridItem>

        {/* Content Section */}
        <GridItem>
          <CardBody p={{ base: 4, md: 5 }}>
            <Flex justify="space-between" align="center" mb={3} flexWrap="wrap" gap={2}>
              <Tag
                bg="#fdf8f0"
                color="#5a2a2a"
                borderRadius="full"
                px={4}
                py={1}
                fontSize="sm"
                fontWeight="500"
                border="1px solid #f0e6d8"
              >
                {pkg.days} Days / {pkg.days - 1} Nights
              </Tag>

              <Flex align="center" fontSize={{ base: "xs", sm: "sm" }}>
                {[...Array(fullStars)].map((_, i) => (
                  <Icon key={`full-${i}`} as={FaStar} color="#e8b86b" boxSize={4} />
                ))}
                {hasHalfStar && <Icon as={FaStarHalfAlt} color="#e8b86b" boxSize={4} />}
                {[...Array(emptyStars)].map((_, i) => (
                  <Icon key={`empty-${i}`} as={FaRegStar} color="#e8b86b" boxSize={4} />
                ))}
                <Text ml={2} fontWeight="bold" color="#5a2a2a">
                  {pkg.rating}
                </Text>
              </Flex>
            </Flex>

            {/* Destination name */}
            <Heading
              as="h4"
              size="sm"
              fontWeight="600"
              color="#8a6a6a"
              mb={3}
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {formatTitle(pkg.destination)}
            </Heading>

            {/* Description with Read More */}
            {pkg?.description && (
              <Box mb={4}>
                <Text fontSize="sm" color="#5a2a2a" lineHeight="1.7">
                  {sentences
                    .slice(0, showMoreDesc ? sentences.length : 3)
                    .map((sentence, index) => (
                      <span key={index}>{sentence}. </span>
                    ))}
                </Text>
                {sentences.length > 3 && (
                  <Button
                    variant="link"
                    color="#e8b86b"
                    size="sm"
                    mt={2}
                    onClick={() => setShowMoreDesc(!showMoreDesc)}
                    rightIcon={showMoreDesc ? <FaChevronUp /> : <FaChevronDown />}
                    _hover={{ color: "#d4a35a" }}
                  >
                    {showMoreDesc ? "Show Less" : "Read More"}
                  </Button>
                )}
              </Box>
            )}

            {/* Itinerary – scrollable on mobile */}
            <Box mb={4}>
              <Text fontSize="xs" fontWeight="600" color="#8a6a6a" mb={2} letterSpacing="wide">
                QUICK ITINERARY
              </Text>
              <Flex
                overflowX="auto"
                align="center"
                pb={2}
                sx={{
                  "::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {pkg?.itinerary.map((stop: any, index: number) => (
                  <Flex key={index} align="center" mr={4} whiteSpace="nowrap">
                    <Box textAlign="center" minW="70px">
                      <Box
                        w={8}
                        h={8}
                        mx="auto"
                        bg="#fdf8f0"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mb={1}
                        border="1px solid #f0e6d8"
                      >
                        <Text fontSize="xs" fontWeight="bold" color="#e8b86b">
                          D{index + 1}
                        </Text>
                      </Box>
                      <Text fontSize="xs" fontWeight="500" color="#5a2a2a" noOfLines={1}>
                        {stop?.place}
                      </Text>
                      <Text fontSize="10px" color="#8a6a6a">
                        {stop?.nights}N
                      </Text>
                    </Box>
                    {index < pkg.itinerary.length - 1 && (
                      <Text mx={2} color="#e8b86b" fontWeight="bold" opacity={0.5}>
                        →
                      </Text>
                    )}
                  </Flex>
                ))}
              </Flex>
            </Box>

            {/* Perks / Highlights */}
            <Text fontSize="sm" fontWeight="700" color="#5a2a2a" mb={3}>
              ✨ Highlights:
            </Text>
            <SimpleGrid columns={{ base: 2, sm: 2, md: 2 }} spacing={3} mb={2}>
              {pkg.perks.slice(0, 6).map((perk: string, index: number) => (
                <Flex
                  key={index}
                  align="center"
                  gap={2}
                  transition="0.2s"
                  _hover={{ transform: "translateX(3px)" }}
                >
                  <PerkIcon type={perk} />
                  <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="500" color="#5a2a2a">
                    {perk}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </CardBody>
        </GridItem>
      </Grid>

      {/* Footer – Price + Buttons */}
      <CardFooter
        bg="#fdf8f0"
        borderTop="1px solid #f0e6d8"
        py={4}
        px={{ base: 4, md: 5 }}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", sm: "row" }}
        gap={{ base: 3, sm: 0 }}
      >
        <Box textAlign={{ base: "center", sm: "left" }}>
          <Text fontSize="xs" color="#8a6a6a" letterSpacing="wide">
            STARTING FROM
          </Text>
          <Flex align="baseline" wrap="wrap" justify={{ base: "center", sm: "flex-start" }}>
            {originalPrice && (
              <Text fontSize="lg" color="#8a6a6a" textDecoration="line-through" mr={2}>
                ₹{originalPrice.toLocaleString()}
              </Text>
            )}
            <Heading fontSize={{ base: "2xl", md: "3xl" }} color="#6b1a2a" fontWeight="800">
              ₹{pkg.price.toLocaleString()}
            </Heading>
            <Text as="span" fontSize="sm" color="#8a6a6a" ml={1}>
              /person
            </Text>
          </Flex>
          <Text fontSize="10px" color="#8a6a6a">
            *excl. taxes
          </Text>
        </Box>

        <Flex gap={3} align="center">
          {/* WhatsApp Button */}
          <Button
            leftIcon={<FaWhatsapp size={18} />}
            bg="#25D366"
            color="white"
            _hover={{ bg: "#128C7E", transform: "translateY(-2px)" }}
            _active={{ transform: "translateY(0)" }}
            borderRadius="full"
            size="md"
            px={4}
            fontWeight="600"
            transition="all 0.2s"
            onClick={() => {
              (window as any).dataLayer = (window as any).dataLayer || [];
              (window as any).dataLayer.push({
                event: "whatsapp_click",
                click_text: "WhatsApp Button",
                package_name: pkg?.name || pkg?.destination || "Unknown Package",
              });
              const phone = "9958805754";
              const message = `Hi, I am interested in the ${
                pkg?.name || pkg?.destination
              } travel package. Please share more details.`;
              const encodedMsg = encodeURIComponent(message);
              const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
              const url = isMobile
                ? `https://wa.me/91${phone}?text=${encodedMsg}`
                : `https://api.whatsapp.com/send?phone=91${phone}&text=${encodedMsg}`;
              window.open(url, "_blank");
            }}
          >
            {!isMobile && "WhatsApp"}
          </Button>

          {/* Enquire Now Button – Maroon / Gold */}
          <Button
            leftIcon={<FaPaperPlane size={16} />}
            bg="#6b1a2a"
            color="white"
            _hover={{ bg: "#8b2a3a", transform: "translateY(-2px)", boxShadow: "0 6px 14px rgba(107,26,42,0.3)" }}
            _active={{ transform: "translateY(0)" }}
            borderRadius="full"
            size="md"
            px={{ base: 5, md: 6 }}
            fontWeight="700"
            animation={`${softBounce} 2s infinite`}
            transition="all 0.25s"
            onClick={() => setOpenBookingModal({ open: true, data: pkg })}
          >
            Enquire Now
          </Button>
        </Flex>
      </CardFooter>

      <BookingInfoModal
        isOpen={openBookingModal.open}
        onClose={() => setOpenBookingModal({ data: null, open: false })}
        data={{
          id: openBookingModal?.data?._id,
          type: "destination",
          title: openBookingModal.data?.destination,
        }}
      />
    </Card>
  );
};

export default TravelPackageCard;