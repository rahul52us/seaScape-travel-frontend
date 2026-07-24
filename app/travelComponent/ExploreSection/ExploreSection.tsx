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
    <svg
        width="40"
        height="40"
        viewBox="0 0 256 512"
        fill={colors.primary}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z" />
    </svg>
);

const BoutiqueStaysIcon = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 576 512"
        fill={colors.primary}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" />
    </svg>
);

const LiveLikeLocalIcon = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 512 512"
        fill={colors.primary}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M507.31 84.69L464 41.37c-6-6-14.14-9.37-22.63-9.37H288V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24h385.37c8.49 0 16.62-3.37 22.63-9.37l43.31-43.31c6.25-6.26 6.25-16.38 0-22.63zM224 496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-64v112zm232-272H288v-32h-64v32H70.63c-8.49 0-16.62 3.37-22.63 9.37L4.69 276.69c-6.25 6.25-6.25 16.38 0 22.63L48 342.63c6 6 14.14 9.37 22.63 9.37H456c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24z" />
    </svg>
);

const CommunityIcon = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 512 512"
        fill={colors.primary}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
);

const WellnessIcon = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 576 512"
        fill={colors.primary}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z" />
    </svg>
);

const SmallGroupsIcon = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 640 640"
        fill={colors.primary}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
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
                                onClick={() => window.open("https://chat.whatsapp.com/CHRW9rrfNyNAecpkreh0fZ", "_blank")}
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