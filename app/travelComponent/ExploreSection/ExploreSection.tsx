import React from "react";
import {
    Box,
    Container,
    Flex,
    Text,
    VStack,
    HStack,
    Link,
    Button,
    Image,
    SimpleGrid,
} from "@chakra-ui/react";

// ─── Color Palette ──────────────────────────────────────────────
const colors = {
    bg: "#F5EDD8",           // Cream background
    primary: "#7B1035",      // Deep maroon
    primaryHover: "#66102D", // Darker maroon for hover
    accent: "#D4A843",       // Gold for accents
    white: "#FFFFFF",
    border: "rgba(123,16,53,0.12)", // Maroon with opacity
    textGray: "#6B6B6B",
    textDark: "#2D2D2D",
    lightBg: "rgba(123,16,53,0.06)", // Very light maroon for card icon backgrounds
};

// ─── Font Families ──────────────────────────────────────────────
const fonts = {
    primary: "'Playfair Display', 'Georgia', 'Times New Roman', serif",    // ALESHA fallback
    secondary: "'Inter', 'Avenir', 'Helvetica Neue', Arial, sans-serif",   // AVENIR fallback
};

// ─── Custom SVG Icons (maroon stroke) ──────────────────────────

const WomenFirstIcon = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={colors.primary} strokeWidth="1.5">
        <path d="M28 8c0 0-4-2-8 0s-6 6-6 10c0 4 2 8 6 10" strokeLinecap="round" />
        <path d="M20 18c0 0 2 2 4 2s4-2 4-2" strokeLinecap="round" />
        <circle cx="22" cy="16" r="1" fill={colors.primary} stroke="none" />
        <path d="M14 12c-2 0-3 2-3 4s2 4 4 4" strokeLinecap="round" />
        <path d="M12 10c0-2 2-3 3-2" strokeLinecap="round" />
        <path d="M10 14c-1 0-2 1-1 2" strokeLinecap="round" />
        <path d="M28 28c-2 4-6 6-10 6s-8-2-10-6" strokeLinecap="round" />
        <path d="M18 34v6c0 2 2 4 4 4" strokeLinecap="round" />
    </svg>
);

const BoutiqueStaysIcon = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={colors.primary} strokeWidth="1.5">
        <rect x="10" y="16" width="28" height="26" rx="2" />
        <path d="M8 16 L24 6 L40 16" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="22" width="6" height="8" rx="1" />
        <rect x="26" y="22" width="6" height="8" rx="1" />
        <rect x="18" y="34" width="12" height="8" rx="1" />
        <circle cx="24" cy="38" r="1.5" fill={colors.primary} stroke="none" />
        <path d="M20 12 L24 9 L28 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LiveLikeLocalIcon = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={colors.primary} strokeWidth="1.5">
        <path d="M8 36 L8 20 L16 16 L24 20 L32 16 L40 20 L40 36" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 36 L16 32 L24 36 L32 32 L40 36" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16 L16 32" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M24 20 L24 36" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M32 16 L32 32" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M24 6c-3 0-5 2-5 5 0 4 5 9 5 9s5-5 5-9c0-3-2-5-5-5z" fill="none" />
        <path d="M22 9c0-1 1-2 2-2s2 1 2 2-2 3-2 3-2-2-2-3z" fill={colors.primary} stroke="none" />
    </svg>
);

const CommunityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={colors.primary} strokeWidth="1.5">
        <path d="M18 8c0 0-1-2-3-2s-3 2-3 4 1.5 4 3 4 3-2 3-4" strokeLinecap="round" />
        <path d="M24 6c0 0-1-2-3-2s-3 2-3 4 1.5 4 3 4 3-2 3-4" strokeLinecap="round" />
        <path d="M30 8c0 0-1-2-3-2s-3 2-3 4 1.5 4 3 4 3-2 3-4" strokeLinecap="round" />
        <path d="M12 18c-2 1-3 3-3 5v4" strokeLinecap="round" />
        <path d="M18 16c-2 1-3 3-3 5v6" strokeLinecap="round" />
        <path d="M24 14c-2 1-3 3-3 5v8" strokeLinecap="round" />
        <path d="M30 16c2 1 3 3 3 5v6" strokeLinecap="round" />
        <path d="M36 18c2 1 3 3 3 5v4" strokeLinecap="round" />
        <path d="M22 4c0-1 1-2 2-2s2 1 2 2-2 3-2 3-2-2-2-3z" fill={colors.primary} stroke="none" />
    </svg>
);

const WellnessIcon = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={colors.primary} strokeWidth="1.5">
        <ellipse cx="24" cy="34" rx="10" ry="4" strokeLinecap="round" />
        <path d="M18 30c-2-2-2-5 0-7" strokeLinecap="round" />
        <path d="M30 30c2-2 2-5 0-7" strokeLinecap="round" />
        <path d="M20 24c0-3 2-5 4-5s4 2 4 5" strokeLinecap="round" />
        <circle cx="24" cy="16" r="4" strokeLinecap="round" />
        <path d="M20 12c0-2 2-3 4-3s4 1 4 3" strokeLinecap="round" />
        <path d="M14 32c-2-2-2-6 0-8" strokeLinecap="round" />
        <path d="M34 32c2-2 2-6 0-8" strokeLinecap="round" />
        <path d="M16 30c-1-3 0-6 2-8" strokeLinecap="round" />
        <path d="M32 30c1-3 0-6-2-8" strokeLinecap="round" />
    </svg>
);

const SmallGroupsIcon = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={colors.primary} strokeWidth="1.5">
        <circle cx="16" cy="16" r="3" strokeLinecap="round" />
        <circle cx="32" cy="16" r="3" strokeLinecap="round" />
        <circle cx="24" cy="12" r="3" strokeLinecap="round" />
        <path d="M13 22c-2 1-3 3-3 5" strokeLinecap="round" />
        <path d="M19 20c-1 1-2 3-2 5" strokeLinecap="round" />
        <path d="M24 18c0 2-1 4-1 6" strokeLinecap="round" />
        <path d="M29 20c1 1 2 3 2 5" strokeLinecap="round" />
        <path d="M35 22c2 1 3 3 3 5" strokeLinecap="round" />
        <path d="M22 8c0-1 1-2 2-2s2 1 2 2-2 3-2 3-2-2-2-3z" fill={colors.primary} stroke="none" />
    </svg>
);

const SparkleIcon = ({ size = 12, opacity = 0.6 }: { size?: number; opacity?: number }) => (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={colors.accent} opacity={opacity}>
        <path d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5Z" />
    </svg>
);

// ─── Feature Card Component ──────────────────────────────────────

interface FeatureCardProps {
    icon: React.FC;
    titleLine1: string;
    titleLine2: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, titleLine1, titleLine2, description }: FeatureCardProps) => (
    <VStack
        spacing={0}
        align="center"
        py={7}
        px={3}
        bg={colors.white}
        border="1px solid"
        borderColor={colors.border}
        borderRadius="8px"
    >
        <Flex
            w="80px"
            h="80px"
            borderRadius="full"
            bg={colors.lightBg} // very light maroon
            align="center"
            justify="center"
            mb={4}
        >
            <Icon />
        </Flex>
        <Box w="24px" h="2px" bg={colors.accent} mb={3} /> {/* Gold divider */}
        <Text
            fontSize="15px"
            fontWeight="600"
            color={colors.primary}
            textAlign="center"
            lineHeight="1.4"
            fontFamily={fonts.primary} // ALESHA
            mb={2.5}
        >
            {titleLine1}
            <br />
            {titleLine2}
        </Text>
        <Text
            fontSize="11px"
            color={colors.textGray}
            textAlign="center"
            lineHeight="1.6"
            fontWeight="300"
            fontFamily={fonts.secondary} // AVENIR
        >
            {description}
        </Text>
    </VStack>
);

// ─── Main Component ──────────────────────────────────────────────

const ExploreSection = () => {
    const features = [
        {
            icon: WomenFirstIcon,
            titleLine1: "Women-First,",
            titleLine2: "Always",
            description:
                "Every journey is thoughtfully designed for women—by women, with care and empathy.",
        },
        {
            icon: BoutiqueStaysIcon,
            titleLine1: "Boutique",
            titleLine2: "Stays",
            description:
                "Handpicked stays that are safe, comfortable and full of local charm.",
        },
        {
            icon: LiveLikeLocalIcon,
            titleLine1: "Live Like",
            titleLine2: "a Local",
            description:
                "Go beyond tourist spots and experience the real culture, food and everyday life.",
        },
        {
            icon: CommunityIcon,
            titleLine1: "Community",
            titleLine2: "Before Trips",
            description:
                "It's not just about the destination, it's about the women you connect with.",
        },
        {
            icon: WellnessIcon,
            titleLine1: "Wellness &",
            titleLine2: "Mindfulness",
            description:
                "From sound healing to mindful moments, we nurture your mind, body and soul.",
        },
        {
            icon: SmallGroupsIcon,
            titleLine1: "Small Groups,",
            titleLine2: "Big Connections",
            description:
                "We keep our groups intimate so every woman feels seen, heard and included.",
        },
    ];

    return (
        <Box bg={colors.bg} py={{ base: 12, md: 16 }}>
            <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
                {/* ─── HEADER ─── */}
                <VStack spacing={0} align="center" mb={12}>
                    <Text
                        fontSize="13px"
                        fontWeight="600"
                        color={colors.accent}
                        letterSpacing="4px"
                        textTransform="uppercase"
                        mb={3}
                        fontFamily={fonts.secondary}
                    >
                        WHY SHESCAPE?
                    </Text>
                    <Text color={colors.accent} fontSize="18px" mb={5}>
                        ♥
                    </Text>
                    <Text
                        fontSize={{ base: "28px", md: "42px" }}
                        fontWeight="400"
                        color={colors.primary}
                        textAlign="center"
                        lineHeight="1.2"
                        fontFamily={fonts.primary}
                        mb={4}
                    >
                        Because You Deserve More Than Just a Trip
                    </Text>
                    <Text
                        fontSize="16px"
                        color={colors.textGray}
                        textAlign="center"
                        maxW="560px"
                        lineHeight="1.6"
                        fontWeight="300"
                        fontFamily={fonts.secondary}
                    >
                        At SHEscape, we don't just plan trips—we create soulful experiences
                        where women feel safe, celebrated, and truly at home.
                    </Text>
                </VStack>

                {/* ─── FEATURE CARDS ─── */}
                <SimpleGrid
                    columns={{ base: 2, sm: 3, lg: 6 }}
                    spacing={{ base: 3, md: 3 }}
                    mb={12}
                >
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.titleLine1}
                            icon={feature.icon}
                            titleLine1={feature.titleLine1}
                            titleLine2={feature.titleLine2}
                            description={feature.description}
                        />
                    ))}
                </SimpleGrid>

                {/* ─── CTA BANNER ─── */}
                <Flex
                    direction={{ base: "column", md: "row" }}
                    borderRadius="16px"
                    overflow="hidden"
                    bg={colors.white}
                    border="1px solid"
                    borderColor={colors.border}
                    minH="220px"
                >
                    {/* Left: Image with direct Unsplash link */}
                    <Box
                        flex={{ base: "0 0 100%", md: "0 0 42%" }}
                        position="relative"
                        minH={{ base: "200px", md: "auto" }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dygvzvd6p/image/upload/v1783926677/Travel_5_dukiur.png"
                            alt="Women together around campfire"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            fallback={
                                <Box
                                    w="100%"
                                    h="100%"
                                    minH="220px"
                                    bg="linear-gradient(135deg, #7B1035 0%, #A83A5C 100%)"
                                />
                            }
                        />
                    </Box>

                    {/* Right: Content */}
                    <Flex
                        flex="1"
                        direction="column"
                        justify="center"
                        py={{ base: 8, md: 10 }}
                        px={{ base: 6, md: 12 }}
                        position="relative"
                    >
                        <Text color={colors.accent} fontSize="16px" mb={3}>
                            ♥
                        </Text>
                        <Text
                            fontSize={{ base: "22px", md: "26px" }}
                            fontWeight="400"
                            color={colors.primary}
                            fontFamily={fonts.primary}
                            lineHeight="1.3"
                            mb={3}
                        >
                            Come solo. Leave connected.
                        </Text>
                        <Text
                            fontSize="14px"
                            color={colors.textGray}
                            lineHeight="1.6"
                            mb={6}
                            maxW="360px"
                            fontWeight="300"
                            fontFamily={fonts.secondary}
                        >
                            You may start your journey alone, but you'll never travel alone
                            with us.
                        </Text>
                        <Box>
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
                                onClick={() => window.open("https://wa.me/919217490094", "_blank")}
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
                        </Box>

                        {/* Sparkle decorations (gold) */}
                        <HStack
                            position="absolute"
                            bottom="20px"
                            right="24px"
                            spacing={2}
                            align="flex-end"
                            display={{ base: "none", md: "flex" }}
                        >
                            <SparkleIcon size={10} opacity={0.5} />
                            <SparkleIcon size={14} opacity={0.8} />
                            <SparkleIcon size={8} opacity={0.4} />
                        </HStack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default ExploreSection;