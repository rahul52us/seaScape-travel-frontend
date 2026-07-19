"use client";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  Text
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWhatsapp
} from "react-icons/fa";
import { formatTitle } from "../../../../config/utils/function";
import BookingInfoModal from "../../../BookingInfoModal/BookingInfoModal";
import PerkIcon from "./PerkIcon";

// Bounce animation (unchanged)
const bounce = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  `;

const TravelPackageCard = ({ pkg }: { pkg: any }) => {
  const [openBookingModal, setOpenBookingModal] = useState({
    open: false,
    data: pkg,
  });
  const [isOpen] = useState(false);

  return (
    <Card
      key={pkg.id}
      borderRadius="xl"
      overflow="hidden"
      minH={{ lg: "42rem" }}
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "0 20px 30px -12px rgba(123,16,53,0.2)", // maroon shadow
      }}
      position="relative"
      border="1px solid rgba(212,168,67,0.25)" // gold border
      bg="white"
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {/* Discount Tag – brand maroon */}
      {pkg.discount && (
        <Tag
          position="absolute"
          top={4}
          right={4}
          bg="#7B1035"
          color="white"
          size="sm"
          borderRadius="full"
          px={3}
        >
          {pkg.discount}% OFF
        </Tag>
      )}

      {/* Image Section – unchanged */}
      <AspectRatio ratio={16 / 9}>
        <Box
          bgImage={pkg?.image?.url}
          bgSize="cover"
          bgPosition="center"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            inset: 0,
            bgGradient: "linear(to-t, blackAlpha.600, blackAlpha.200)",
          }}
        >
          <Flex
            position="absolute"
            bottom={4}
            left={4}
            color="white"
            zIndex={1}
            align="center"
          >
            <FaMapMarkerAlt size={20} />
            <Heading
              fontSize="lg"
              ml={2}
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.4)"
              cursor="pointer"
              fontFamily="'ALESHA', 'Georgia', serif"
            >
              {pkg?.name || formatTitle(pkg?.destination)}
            </Heading>
          </Flex>
        </Box>
      </AspectRatio>

      {/* Card Body */}
      <CardBody bg="white">
        <Flex justify="space-between" align="center" mb={3}>
          <Tag
            bg="#7B1035" // brand maroon
            color="white"
            borderRadius="full"
            px={4}
            size={{ base: "sm", md: "md" }}
          >
            {pkg.days} Days / {pkg.days - 1} Nights
          </Tag>
          <Flex align="center">
            <FaStar color="#D4A843" /> {/* brand gold */}
            <Text ml={2} fontWeight="bold" color="#7B1035">
              {pkg.rating}
            </Text>
          </Flex>
        </Flex>

        {/* Perks Section */}
        <SimpleGrid columns={2} spacing={2} mb={4}>
          {pkg.perks.map((perk, index) => (
            <Flex key={index} align="center">
              <PerkIcon type={perk} />
              <Text
                ml={2}
                fontSize={{ base: "xs", lg: "sm" }}
                fontWeight="medium"
                color="#7B1035"
                opacity={0.85}
              >
                {perk}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

        {/* Itinerary Section */}
        <Box mt={4}>
          <Flex
            overflowX="auto"
            align="center"
            sx={{
              "::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            {pkg.itinerary.map((stop, index) => (
              <Flex key={index} align="center" mr={3} whiteSpace="nowrap">
                <Box textAlign="center">
                  <Text
                    fontSize="xs"
                    fontWeight="medium"
                    color="#7B1035"
                    opacity={0.85}
                    noOfLines={1}
                  >
                    {stop.place}
                  </Text>
                  <Text fontSize="xs" color="#7B1035" opacity={0.6} noOfLines={1}>
                    {stop.nights} nights
                  </Text>
                </Box>
                {index < pkg.itinerary.length - 1 && (
                  <Box flex="1" height="2px" bg="#D4A843" opacity={0.4} mx={2} />
                )}
              </Flex>
            ))}
          </Flex>
        </Box>

        {/* Highlights Section (unchanged visibility) */}
        {isOpen && (
          <Box mt={4}>
            <Text fontWeight="bold" mb={2} fontSize="sm" color="#7B1035">
              Highlights:
            </Text>
            <Flex wrap="wrap" gap={2}>
              {pkg.highlights.map((highlight, index) => (
                <Tag
                  key={index}
                  bg="#F5EDD8"
                  color="#7B1035"
                  borderRadius="full"
                  size="sm"
                  border="1px solid rgba(212,168,67,0.2)"
                >
                  {highlight}
                </Tag>
              ))}
            </Flex>
          </Box>
        )}
      </CardBody>

      {/* Card Footer – cream background, maroon price */}
      <CardFooter
        bg="#F5EDD8"
        borderTopWidth="1px"
        borderColor="rgba(212,168,67,0.2)"
        py={3}
        justifyContent="space-between"
        alignItems={{ base: "flex-end", lg: "center" }}
      >
        <Box>
          <Text fontSize={{ base: "xs", lg: "sm" }} color="#7B1035" opacity={0.7}>
            Starting from
          </Text>
          <Heading fontSize={{ base: "xl", lg: "2xl" }} color="#7B1035">
            ₹{pkg.price.toLocaleString()}
            <Text as="span" fontSize="sm" color="#7B1035" opacity={0.7}>
              /person
            </Text>
          </Heading>
        </Box>
        <Flex gap={2} align="center">
          {/* WhatsApp button (remains green) */}
          <Button
            bg="#25D366"
            color="white"
            _hover={{ bg: "#128C7E" }}
            borderRadius="full"
            size={{ base: "xs", lg: "sm" }}
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
            p={{ base: 2, lg: 3 }}
          >
            <FaWhatsapp size={20} />
          </Button>

          {/* Enquire button – brand maroon, gold hover */}
          <Button
            bg="#7B1035"
            color="white"
            _hover={{ bg: "#D4A843", color: "#7B1035" }}
            borderRadius="full"
            size={{ base: "xs", lg: "sm" }}
            animation={`${bounce} 2s infinite`}
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