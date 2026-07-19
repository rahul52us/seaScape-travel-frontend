"use client";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import NextLink from "next/link";

const Header = observer(({} : any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoTransparent = "/images/logo1.png";
  const logoSolid = "/images/logo2.png";

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      w="full"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      bg={isScrolled ? "rgba(245, 237, 216, 0.92)" : "transparent"}
      backdropFilter={isScrolled ? "blur(8px)" : "none"}
      shadow={isScrolled ? "0 4px 20px rgba(123,16,53,0.08)" : "none"}
      borderBottom={isScrolled ? "1px solid rgba(212,168,67,0.2)" : "none"}
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {/* Top Bar */}
      <Box
        h={isScrolled ? "0px" : { base: "2.2rem", md: "2rem" }}
        opacity={isScrolled ? 0 : 1}
        overflow="hidden"
        bg="#7B1035"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight="500"
        letterSpacing="widest"
        textTransform="uppercase"
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <Box>✦ Travel.Connect.Grow ✦</Box>
      </Box>

      {/* ========== MOBILE HEADER ========== */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={{ base: 3, md: 6 }}
        py={1.5}
        display={{ base: "flex", md: "none" }}
        h={isScrolled ? "5.5rem" : "4.5rem"}   // more space for bigger logo
        transition="height 0.3s ease"
      >
        <Image
          src={isScrolled ? logoSolid : logoTransparent}
          alt="SheScapes – Curated journeys for the modern woman"
          h={{ 
            base: isScrolled ? "75px" : "60px",
            sm: isScrolled ? "80px" : "65px"
          }}
          cursor="pointer"
          onClick={() => router.push("/")}
          mr="auto"
          transition="height 0.3s ease"
        />
        <IconButton
          icon={<HamburgerIcon fontSize={"26px"} color={isScrolled ? "#7B1035" : "white"} />}
          onClick={onOpen}
          aria-label="Open menu"
          variant="ghost"
          size="lg"
          _hover={{ bg: isScrolled ? "rgba(212,168,67,0.15)" : "whiteAlpha.200" }}
          transition="all 0.3s ease"
        />
      </Flex>

      {/* ========== MOBILE DRAWER ========== */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="#F5EDD8">
          <DrawerCloseButton color="#7B1035" />
          <DrawerBody>
            <Center mt={6} mb={4}>
              <Image
                src={logoSolid}
                alt="SheScapes"
                h="65px"
                onClick={() => {
                  router.push("/");
                  onClose();
                }}
                cursor="pointer"
              />
            </Center>
            <Box px={4}>
              <NavItemsLayout onClose={onClose} isScrolled={true} />
            </Box>
            <Box mt={8} pt={4} borderTop="2px solid rgba(212,168,67,0.3)">
              <HStack spacing={4} justify="center" wrap="wrap">
                <Link
                  as={NextLink}
                  href="/privacy-policy"
                  fontSize="xs"
                  color="#7B1035"
                  _hover={{ color: "#D4A843", textDecoration: "none" }}
                  onClick={onClose}
                >
                  Privacy Policy
                </Link>
                <Text color="rgba(123,16,53,0.2)">|</Text>
                <Link
                  as={NextLink}
                  href="/terms-conditions"
                  fontSize="xs"
                  color="#7B1035"
                  _hover={{ color: "#D4A843", textDecoration: "none" }}
                  onClick={onClose}
                >
                  Terms & Conditions
                </Link>
                <Text color="rgba(123,16,53,0.2)">|</Text>
                <Link
                  as={NextLink}
                  href="/faq"
                  fontSize="xs"
                  color="#7B1035"
                  _hover={{ color: "#D4A843", textDecoration: "none" }}
                  onClick={onClose}
                >
                  FAQ
                </Link>
              </HStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* ========== DESKTOP HEADER ========== */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={{ lg: 8, xl: 12 }}
        py={isScrolled ? 2.5 : 3}
        display={{ base: "none", md: "flex" }}
        maxW="1400px"
        mx="auto"
        w="full"
        transition="padding 0.3s ease"
      >
        <Box cursor="pointer" onClick={() => router.push("/")}>
          <Image
            src={isScrolled ? logoSolid : logoTransparent}
            alt="SheScapes – curated journeys"
            h={{ 
              base: isScrolled ? "75px" : "55px",
              xl: isScrolled ? "85px" : "65px"
            }}
            transition="height 0.3s ease, transform 0.3s ease"
            _hover={{ transform: "scale(1.05) rotate(-1deg)" }}
          />
        </Box>

        <Flex flex={1} justify="center" pr={4}>
          <NavItemsLayout isScrolled={isScrolled} />
        </Flex>

        <HeroNavButton 
          isScrolled={isScrolled}
          onClick={() => {router.push("/contact-us")}}
        />
      </Flex>
    </Box>
  );
});

export default Header;