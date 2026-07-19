import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import { useRouter } from 'next/navigation';

const BookCallComponentBlog = ({ }) => {
  const router = useRouter();

  return (
    <Box
      bg="#FFFFFF" // white background
      position="relative"
      overflow="hidden"
      border="1px solid #D4A843" // brand gold border
      borderRadius="16px" // softer rounded corners
      p={["1.5rem", "2rem", "2.5rem"]}
      fontFamily="'ALESHA', 'Georgia', serif"
      boxShadow="0 4px 20px rgba(123,16,53,0.06)" // subtle maroon shadow
      transition="all 0.3s"
      _hover={{ boxShadow: "0 8px 30px rgba(123,16,53,0.12)" }}
    >
      <Box py={["1rem", "1.5rem"]}>
        <CustomSmallTitle textAlign={{ base: "center" }}>
          Have Questions?
        </CustomSmallTitle>

        <Text
          fontSize={["24px", "32px", "34px"]}
          textAlign={"center"}
          lineHeight={["32px", "40px", "56px"]}
          color="#7B1035" // brand maroon
          fontWeight={400}
          mb={4}
        >
          Need details about an event or anything else?{" "}
          <Text as={"span"} fontWeight={700} color="#D4A843">
            We’re here to help.
          </Text>
        </Text>

        <Center>
          <CustomButton
            px={8}
            py={4}
            onClick={() => router.push('/contact-us')}
            bg="#D4A843"
            color="#7B1035"
            _hover={{ bg: "#c9a03a", transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(212,168,67,0.3)" }}
            borderRadius="full"
            fontWeight="700"
            fontSize="md"
          >
            Contact Us
          </CustomButton>
        </Center>
      </Box>

      <Image
        src="images/shape1.png"
        w={["5rem", "10rem", "12rem"]}
        h={["4rem", "8rem", "11rem"]}
        position={"absolute"}
        left={"0"}
        bottom={"0"}
        display="none" // kept as per original
      />
    </Box>
  );
};

export default BookCallComponentBlog;