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
              src="https://media.istockphoto.com/id/1768459570/photo/multicultural-group-of-women-stacking-hands-together-female-community-concept-with-different.jpg?s=612x612&w=0&k=20&c=DiL_Z2_OJUB9-7bhxwW7t5vuB6XMvYZNPiQLFlCy4Wo="
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
            Join the Shescapes community—a travel space created exclusively for women who love to explore, connect, and create unforgettable memories. Whether you're a solo traveler, a first-time adventurer, or someone looking for like-minded companions, Shescapes offers safe, fun, and thoughtfully curated girls-only tours. Discover new destinations, build lasting friendships, and experience the joy of traveling with a supportive community of inspiring women.
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
              Join the Shescapes community—a travel space created exclusively for women who love to explore, connect, and create unforgettable memories. Whether you're a solo traveler, a first-time adventurer, or someone looking for like-minded companions, Shescapes offers safe, fun, and thoughtfully curated girls-only tours. Discover new destinations, build lasting friendships, and experience the joy of traveling with a supportive community of inspiring women.
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
              src="https://media.istockphoto.com/id/1768459570/photo/multicultural-group-of-women-stacking-hands-together-female-community-concept-with-different.jpg?s=612x612&w=0&k=20&c=DiL_Z2_OJUB9-7bhxwW7t5vuB6XMvYZNPiQLFlCy4Wo="
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