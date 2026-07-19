import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomSmallTitle from "../../common/CustomSmallTitle/CustomSmallTitle";

const JoinCommunitySection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Allowed palette
  const maroon = "#7B1035";
  const gold = "#D4A843";
  const cream = "#F5EDD8";
  const white = "#FFFFFF";

  return (
    <Box
      my={{ lg: "6rem" }}
      maxW={{ base: "95%", md: "90%", xl: "85%" }}
      mx={"auto"}
      // Base font for body – all text will inherit AVENIR unless overridden
      fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
    >
      {isMobile ? (
        // Mobile View – layout unchanged
        <Flex direction="column" align="center" p={4}>
          <Box textAlign="center">
            {/* CustomSmallTitle – we assume it uses the primary font; if not, we can add a prop */}
            <CustomSmallTitle>Join Our Community</CustomSmallTitle>
            <Heading
              mt={1}
              as={"h2"}
              fontSize={{ base: "24px", md: "44px", xl: "46px" }}
              color={maroon}
              fontFamily="'ALESHA', 'Georgia', serif" // Primary font for titles
              fontWeight="400"
            >
              Join our community
            </Heading>
          </Box>

          <Box mt={6} ml={{ lg: -4 }}>
            <Image
              src="https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=2048x2048&w=is&k=20&c=5ruD84xHuW8x0d8W1uJK63UEbe4f-gGhgcY0RXp5Y-c="
              alt="Community Image"
              borderRadius="2xl"
              border={`2px solid ${gold}`}
              boxShadow={`0 8px 24px ${maroon}15`} // using maroon with alpha
            />
          </Box>

          <Text
            mt={4}
            color={maroon}
            opacity={0.85}
            textAlign="center"
            lineHeight="1.7"
            maxW="500px"
            fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif" // Body font
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim a a tr veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Text>

          {/* Button placeholder – gold bg, maroon text, AVENIR font */}
          <Box mt={6}>
            {/* 
              <CustomButton 
                bg={gold} 
                color={maroon} 
                fontFamily="'AVENIR', 'Avenir', sans-serif"
                _hover={{ bg: maroon, color: cream }} 
              >
                Subscribe Now
              </CustomButton> 
            */}
          </Box>
        </Flex>
      ) : (
        // Desktop / Tablet View – layout unchanged
        <Grid templateColumns={"1fr 1fr"} gap={2}>
          {/* Text Content */}
          <Box p={4} pt={"4rem"}>
            <CustomSmallTitle textAlign={"start"}>
              Join Our Community
            </CustomSmallTitle>
            <Heading
              mt={1}
              as={"h2"}
              fontSize={{ base: "24px", md: "44px", xl: "46px" }}
              color={maroon}
              fontFamily="'ALESHA', 'Georgia', serif"
              fontWeight="400"
            >
              Join our community
            </Heading>
            <Text
              mt={6}
              w={"90%"}
              color={maroon}
              opacity={0.85}
              lineHeight="1.7"
              fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim a a tr veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Box mt={6}>
              {/* 
                <CustomButton 
                  bg={gold} 
                  color={maroon} 
                  fontFamily="'AVENIR', 'Avenir', sans-serif"
                  _hover={{ bg: maroon, color: cream }} 
                >
                  Subscribe Now
                </CustomButton> 
              */}
            </Box>
          </Box>

          {/* Image */}
          <Box mt={4}>
            <Image
              src="https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=2048x2048&w=is&k=20&c=5ruD84xHuW8x0d8W1uJK63UEbe4f-gGhgcY0RXp5Y-c="
              alt="Community Image"
              w={"80%"}
              mx={"auto"}
              h={"90%"}
              objectFit={"cover"}
              rounded={"2xl"}
              border={`2px solid ${gold}`}
              boxShadow={`0 8px 24px ${maroon}15`}
            />
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default JoinCommunitySection;