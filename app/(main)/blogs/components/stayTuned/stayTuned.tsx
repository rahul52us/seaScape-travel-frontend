import { Box, Flex, Grid, Heading, Image, Input, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import { INSTRAGRAM_LINK } from "../../../../config/utils/variables";

const StayTune = () => {
    const buttonHeight = useBreakpointValue({ base: "40px", md: "50px" });

    return (
        <Box
            p={{ base: 4, md: 8 }}
            fontFamily="'ALESHA', 'Georgia', serif"
            bg="#F5EDD8" // brand cream background
            borderRadius="2xl"
        >
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                alignItems="center"
                gap={{ base: 6, md: 4 }}
            >
                {/* Left Side - Text & Input */}
                <VStack align="flex-start" spacing={2}>
                    <CustomSmallTitle>Stay Adventurous</CustomSmallTitle>

                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        fontWeight="600"
                        color="#7B1035" // brand maroon
                    >
                        Subscribe for Travel Tips & Deals
                    </Heading>

                    <Text fontSize={{ base: "sm", md: "md" }} color="#7B1035" opacity={0.8}>
                        Get exclusive travel guides, destination inspirations,{" "}
                        <Box as="br" display={{ base: "none", md: "block" }} />
                        and the best deals delivered to your inbox.
                    </Text>

                    {/* Input Box and Button */}
                    <Flex gap={2} direction={{ base: "column", md: "row" }} w="100%" mt={6}>
                        <Input
                            placeholder="Enter Your Email"
                            bg="white"
                            border="1px solid #D4A843"
                            _focus={{ borderColor: "#D4A843", boxShadow: "0 0 0 2px rgba(212,168,67,0.3)" }}
                            _hover={{ borderColor: "#D4A843" }}
                            h={{ base: "40px", md: "50px" }}
                            borderRadius="8px"
                            color="#7B1035"
                            _placeholder={{ color: "#7B1035", opacity: 0.5 }}
                        />
                        <CustomButton
                            height={buttonHeight}
                            borderRadius="8px"
                            onClick={() => window.open(INSTRAGRAM_LINK, "_blank")}
                            px={8}
                            bg="#D4A843"
                            color="#7B1035"
                            _hover={{
                                bg: "#c9a03a",
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 20px rgba(212,168,67,0.4)",
                            }}
                            fontWeight="700"
                        >
                            Subscribe Now
                        </CustomButton>
                    </Flex>
                </VStack>

                {/* Right Side - Image */}
                <Flex justify={{ base: "center", md: "end" }} mt={{ base: 6, md: 0 }}>
                    <Image
                        src="https://st4.depositphotos.com/4640111/41072/i/450/depositphotos_410721236-stock-photo-planning-vacation-travel-plan-trip.jpg"
                        alt="Travel Planning"
                        h={{ base: "200px", md: "300px" }}
                        objectFit="cover"
                        borderRadius="xl"
                        border="2px solid #D4A843"
                        boxShadow="0 8px 24px rgba(123,16,53,0.1)"
                    />
                </Flex>
            </Grid>
        </Box>
    );
};

export default StayTune;