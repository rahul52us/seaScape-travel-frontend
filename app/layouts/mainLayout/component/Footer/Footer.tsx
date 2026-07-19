import {
    Box,
    Container,
    Flex,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    HStack,
    Divider,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import stores from "../../../../store/stores";
import { formatTitle } from "../../../../config/utils/function";

// ─── SVG Icons ───────────────────────────────────────────────────
// All icons now use stroke="#D4A843" where appropriate
const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const YouTubeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h4l2-7 4 14 2-7h4" />
    </svg>
);

const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const LocationIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIconSmall = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

// ─── Feature Icons – stroke now uses #D4A843 ────────────────
const WomenFirstIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" stroke="#D4A843" strokeWidth="1.5" />
    </svg>
);

const SmallGroupsIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const HandpickedIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const SupportIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.2">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
);

const ResponsibleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.2">
        <path d="M2 22h20" />
        <path d="M12 2v20" />
        <path d="M12 2L7 7" />
        <path d="M12 2l5 5" />
        <path d="M7 12h10" />
        <path d="M7 7h10v10H7z" />
    </svg>
);

// ─── Mountain illustration – fill now uses #D4A843 ─────────
const MountainIllustration = () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
        <path d="M0 60 L20 30 L35 45 L50 15 L70 40 L85 20 L100 50 L120 35 L120 60 Z" fill="#D4A843" opacity="0.15" />
        <path d="M0 60 L25 35 L40 50 L55 20 L75 45 L90 25 L105 55 L120 40 L120 60 Z" fill="#D4A843" opacity="0.25" />
        <path d="M10 60 L15 45 L20 60" fill="#D4A843" opacity="0.3" />
        <path d="M18 60 L23 48 L28 60" fill="#D4A843" opacity="0.3" />
        <path d="M95 60 L100 42 L105 60" fill="#D4A843" opacity="0.3" />
        <path d="M55 8 L56 11 L59 11 L56.5 13 L57.5 16 L55 14 L52.5 16 L53.5 13 L51 11 L54 11 Z" fill="#D4A843" opacity="0.6" />
        <circle cx="75" cy="10" r="1" fill="#D4A843" opacity="0.5" />
        <circle cx="85" cy="6" r="0.8" fill="#D4A843" opacity="0.4" />
    </svg>
);

// ─── Social Button ────────────────────────────────────────────
const SocialButton = ({ icon: Icon, href }: { icon: React.FC; href: string }) => (
    <Link
        href={href}
        target="_blank"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="36px"
        h="36px"
        border="1px solid"
        borderColor="rgba(212,168,67,0.5)" // #D4A843 with opacity
        borderRadius="full"
        color="#D4A843"
        fontSize="14px"
        _hover={{
            borderColor: "#D4A843",
            bg: "rgba(212,168,67,0.1)",
            transform: "translateY(-2px)",
        }}
        transition="all 0.3s ease"
    >
        <Icon />
    </Link>
);

// ─── Section Heading ──────────────────────────────────────────
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <Box mb={4}>
        <Text
            fontSize="12px"
            fontWeight="400"
            color="#D4A843"
            letterSpacing="2px"
            textTransform="uppercase"
            fontFamily="'ALESHA', 'Georgia', serif" // title font
        >
            {children}
        </Text>
        <Box w="24px" h="1px" bg="#D4A843" mt={2} />
    </Box>
);

// ─── Feature Item ─────────────────────────────────────────────
const FeatureItem = ({
    icon: Icon,
    title,
    desc,
}: {
    icon: React.FC;
    title: string;
    desc: string;
}) => (
    <Flex align="flex-start" gap={3} flex="1 1 160px" minW="120px">
        <Box flexShrink={0} mt="2px">
            <Icon />
        </Box>
        <VStack align="flex-start" spacing={1}>
            <Text
                fontSize="13px"
                fontWeight="400"
                color="#D4A843"
                letterSpacing="0.3px"
                fontFamily="'ALESHA', 'Georgia', serif" // title font
            >
                {title}
            </Text>
            <Text
                fontSize="12px"
                fontWeight="300"
                color="rgba(245,237,216,0.65)" // cream with opacity
                lineHeight="1.5"
                fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
            >
                {desc}
            </Text>
        </VStack>
    </Flex>
);

// ─── Contact Line ─────────────────────────────────────────────
const ContactLine = ({
    icon: Icon,
    children,
}: {
    icon: React.FC;
    children: React.ReactNode;
}) => (
    <Flex align="flex-start" gap={2.5}>
        <Box flexShrink={0} mt="2px" color="#D4A843">
            <Icon />
        </Box>
        <Text
            fontSize="14px"
            fontWeight="300"
            color="rgba(245,237,216,0.75)" // cream with opacity
            lineHeight="1.6"
            fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
        >
            {children}
        </Text>
    </Flex>
);

// ─── Main Footer Component ────────────────────────────────────
export const Footer: React.FC = observer(() => {
    const {
        destinationStore: { destination },
        locationStore: { location },
    } = stores;

    const uniqueDestinations = Array.from(
          new Set(location.data?.map((dest: { name: string }) => dest.name))
        ).map((uniqueDest: any) => ({
          title: formatTitle(uniqueDest),
          link: `/journeys/${uniqueDest?.split(' ').join('-')}`,
        }));

    const [destinationData, setDestinationsData] = useState([]);

    useEffect(() => {
        if (destinationData.length === 0 && destination?.data?.length > 0) {
            setDestinationsData(destination.data.slice(0, 7));
        }
    }, [destination?.data]);

    const destinations = ["Bhutan", "Vietnam", "Meghalaya", "Bir", "Spiti"];

    const companyLinks = [
        { name: "About Us", href: "/about-us" },
        { name: "Why SHEscapes", href: "/" },
        { name: "The SHEscapes Blog", href: "/" },
        // { name: "In the Press", href: "/press" },
    ];

    const helpLinks = [
        { name: "How It Works", href: "/how_it_works" },
        { name: "FAQ's", href: "/faqs" },
        { name: "Terms & Conditions", href: "/termscondition" },
        { name: "Privacy Policy", href: "/privacypolicy" },
        { name: "Travel Guidelines", href: "/travelguidelines" },
        { name: "Login", href: "/login" },
    ];

    const features = [
        {
            icon: WomenFirstIcon,
            title: "Women-First",
            desc: "Every journey is designed with care and empathy.",
        },
        {
            icon: SmallGroupsIcon,
            title: "Small Groups",
            desc: "Intimate groups for real connections.",
        },
        {
            icon: HandpickedIcon,
            title: "Handpicked Experiences",
            desc: "Curated stays and local experiences you'll love.",
        },
        {
            icon: SupportIcon,
            title: "24/7 Support",
            desc: "We're with you every step.",
        },
        {
            icon: ResponsibleIcon,
            title: "Responsible Travel",
            desc: "Mindful journeys for a better tomorrow.",
        },
    ];

    return (
        <Box
            bg="#7B1035"
            color="white"
            fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', Arial, sans-serif" // body font
            borderTop="4px solid #D4A843"
            py={{ base: 10, md: 14 }}
        >
            <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
                {/* ─── TOP: Logo + Tagline ─── */}
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "center", md: "flex-start" }}
                    gap={{ base: 4, md: 8 }}
                    mb={6}
                >
                    <Box flexShrink={0}>
                        <Image
                            src="/images/logo1.png"
                            alt="SHEscapes Logo"
                            width={180}
                            height={60}
                            style={{ height: 'auto' }}
                        />
                        <Text
                            fontSize="11px"
                            color="#D4A843"
                            letterSpacing="1px"
                            mt={1}
                            textTransform="uppercase"
                            fontFamily="'AVENIR', 'Avenir', sans-serif"
                        >
                            Curated journeys, just for women.
                        </Text>
                    </Box>

                    {/* Heart divider */}
                    <Flex
                        align="center"
                        gap={2}
                        flex="1"
                        mt={{ base: 0, md: 4 }}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Box flex="1" h="1px" bg="rgba(212,168,67,0.4)" />
                        <Text color="#D4A843" fontSize="14px">
                            ♥
                        </Text>
                        <Box flex="1" h="1px" bg="rgba(212,168,67,0.4)" />
                    </Flex>
                </Flex>

                {/* Description */}
                <Text
                    fontSize="14px"
                    color="rgba(245,237,216,0.8)" // cream
                    maxW="400px"
                    lineHeight="1.6"
                    mb={8}
                    fontWeight="300"
                    textAlign={{ base: "center", md: "left" }}
                    fontFamily="'AVENIR', 'Avenir', sans-serif"
                >
                    We create soulful travel experiences where women feel safe,
                    celebrated and truly at home.
                </Text>

                {/* Social Icons */}
                <HStack gap={3} mb={10} justify={{ base: "center", md: "flex-start" }}>
                    <SocialButton icon={InstagramIcon} href="https://instagram.com/shescape" />
                    <SocialButton icon={WhatsAppIcon} href="https://wa.me/919876543210" />
                    <SocialButton icon={YouTubeIcon} href="https://youtube.com/shescape" />
                    <SocialButton icon={EmailIcon} href="mailto:hello@shescape.in" />
                </HStack>

                {/* ─── DIVIDER ─── */}
                <Box h="1px" bg="rgba(212,168,67,0.25)" mb={10} />

                {/* ─── MIDDLE: 4 Columns ─── */}
                <SimpleGrid
                    columns={{ base: 2, sm: 2, md: 4 }}
                    spacing={{ base: 8, md: 10 }}
                    mb={10}
                >
                    {/* Destinations */}
                    <VStack align={{ base: "center", md: "flex-start" }} spacing={0}>
                        <SectionHeading>DESTINATIONS</SectionHeading>
                        <VStack align={{ base: "center", md: "flex-start" }} spacing={2.5}>
                            {uniqueDestinations.map((item,index:any) => (
                                <Link
                                    key={index}
                                    as={NextLink}
                                    href={item.link}
                                    color="rgba(245,237,216,0.75)"
                                    fontSize="14px"
                                    fontWeight="300"
                                    fontFamily="'AVENIR', 'Avenir', sans-serif"
                                    _hover={{ color: "#D4A843", textDecoration: "none" }}
                                    transition="color 0.2s"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Company */}
                    <VStack align={{ base: "center", md: "flex-start" }} spacing={0}>
                        <SectionHeading>COMPANY</SectionHeading>
                        <VStack align={{ base: "center", md: "flex-start" }} spacing={2.5}>
                            {companyLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    as={NextLink}
                                    href={item.href}
                                    color="rgba(245,237,216,0.75)"
                                    fontSize="14px"
                                    fontWeight="300"
                                    fontFamily="'AVENIR', 'Avenir', sans-serif"
                                    _hover={{ color: "#D4A843", textDecoration: "none" }}
                                    transition="color 0.2s"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Help */}
                    <VStack align={{ base: "center", md: "flex-start" }} spacing={0}>
                        <SectionHeading>HELP</SectionHeading>
                        <VStack align={{ base: "center", md: "flex-start" }} spacing={2.5}>
                            {helpLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    as={NextLink}
                                    href={item.href}
                                    color="rgba(245,237,216,0.75)"
                                    fontSize="14px"
                                    fontWeight="300"
                                    fontFamily="'AVENIR', 'Avenir', sans-serif"
                                    _hover={{ color: "#D4A843", textDecoration: "none" }}
                                    transition="color 0.2s"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Get in Touch */}
                    <VStack align={{ base: "center", md: "flex-start" }} spacing={0}>
                        <SectionHeading>GET IN TOUCH</SectionHeading>
                        <VStack align={{ base: "center", md: "flex-start" }} spacing={2.5}>
                            <ContactLine icon={LocationIcon}>
                                Gurugram, Haryana<br />India
                            </ContactLine>
                            <ContactLine icon={PhoneIcon}>+91 98765 43210</ContactLine>
                            <ContactLine icon={MailIconSmall}>hello@shescape.in</ContactLine>
                            <ContactLine icon={ClockIcon}>Mon - Sat: 10 AM - 7 PM</ContactLine>
                        </VStack>
                    </VStack>
                </SimpleGrid>

                {/* ─── DIVIDER ─── */}
                <Box h="1px" bg="rgba(212,168,67,0.25)" mb={8} />

                {/* ─── FEATURES ROW ─── */}
                <Flex
                    wrap="wrap"
                    justify={{ base: "center", md: "space-between" }}
                    align="flex-start"
                    gap={{ base: 6, md: 4 }}
                    mb={8}
                >
                    {features.map((feature) => (
                        <FeatureItem
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                        />
                    ))}
                </Flex>

                {/* ─── DIVIDER ─── */}
                <Box h="1px" bg="rgba(212,168,67,0.25)" mb={6} />

                {/* ─── BOTTOM: Quote + Copyright ─── */}
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "center", md: "flex-end" }}
                    gap={4}
                >
                    {/* Left: Mountain + Quote */}
                    <Flex align="flex-end" gap={5}>
                        <Box flexShrink={0} display={{ base: "none", sm: "block" }}>
                            <MountainIllustration />
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: "14px", md: "16px" }}
                                color="#D4A843"
                                fontStyle="italic"
                                fontFamily="'ALESHA', 'Georgia', serif"
                                lineHeight="1.4"
                            >
                                More than a trip,
                            </Text>
                            <Text
                                fontSize={{ base: "14px", md: "16px" }}
                                color="#FFFFFF"
                                fontStyle="italic"
                                fontFamily="'ALESHA', 'Georgia', serif"
                                lineHeight="1.4"
                            >
                                it's a journey together.{" "}
                                <Text as="span" color="#D4A843">
                                    ♡
                                </Text>
                            </Text>
                        </Box>
                    </Flex>

                    {/* Right: Copyright */}
                    <VStack align={{ base: "center", md: "flex-end" }} spacing={1}>
                        <Text
                            fontSize="12px"
                            color="rgba(245,237,216,0.5)"
                            fontWeight="300"
                            fontFamily="'AVENIR', 'Avenir', sans-serif"
                        >
                            © {new Date().getFullYear()} SHEscape. All rights reserved.
                        </Text>
                        <Text
                            fontSize="12px"
                            color="rgba(245,237,216,0.4)"
                            fontWeight="300"
                            fontFamily="'AVENIR', 'Avenir', sans-serif"
                        >
                            Made with <Text as="span" color="#D4A843">♡</Text> for women who wander.
                        </Text>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
});