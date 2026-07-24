"use client";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { BiChevronRight, BiGroup } from "react-icons/bi";

const HeroNavButton = ({ onClick }: any) => {
  const handleWhatsAppClick = () => {
    // 🔥 Send WhatsApp click event to Google Tag Manager
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "whatsapp_click",
      click_text: "WhatsApp Button",
    });

    const phone = "9217490094";
    const message =
      "Hi, I am interested in your travel packages. Please share more details.";
    const encodedMsg = encodeURIComponent(message);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://wa.me/91${phone}?text=${encodedMsg}`
      : `https://api.whatsapp.com/send?phone=91${phone}&text=${encodedMsg}`;

    window.open(url, "_blank");
  };

  return (
    <Flex gap={3} align="center">
      {/* WhatsApp Button - Enhanced Design */}
      <Button
        bg="#25D366"
        color="white"
        _hover={{ 
          bg: "#128C7E", 
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
        }}
        _active={{ transform: "translateY(0)" }}
        size="lg"
        fontWeight={600}
        borderRadius="full"
        onClick={handleWhatsAppClick}
        p={3}
        aria-label="WhatsApp Button"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <FaWhatsapp size={24} />
      </Button>

      {/* Enquire Button - Maroon Theme */}
      <Button
        bg="#6b1a2a"
        _hover={{ 
          bg: "#8b2a3a", 
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(107, 26, 42, 0.3)",
        }}
        _active={{ transform: "translateY(0)" }}
        color="white"
        size="lg"
        fontWeight={600}
        fontSize="sm"
        px={6}
        py={6}
        borderRadius="full"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        onClick={() => window.open("https://wa.me/919217490094", "_blank")}
        rightIcon={<BiGroup size={20} />}
      >
        <Text as="span" letterSpacing="wide">
          Join community
        </Text>
      </Button>
    </Flex>
  );
};

export default HeroNavButton;

