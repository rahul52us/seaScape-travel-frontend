"use client";
import { Box, Heading, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";

const BlogFeatureCard = () => {
  const [tabChange, setTabChange] = useState("blogs");
  const handleTabChange = (tab: string) => {
    setTabChange(tab);
  };

  return (
    <Box
      position="relative"
      maxW={"95%"}
      mt={2}
      mx={"auto"}
      borderRadius="lg"
      overflow="hidden"
      width="full"
      height={{ base: "50vh", md: "60vh", lg: "75vh" }}
      backgroundImage="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="end"
      p={{ base: 4, md: 6 }}
      color="white"
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {/* Tab Navigation – brand colors */}
      <Tabs
        position="absolute"
        top={6}
        left={12}
        variant={"soft-rounded"}
        size={"sm"}
      >
        <TabList
          borderRadius="full"
          bg="rgba(255,255,255,0.15)"
          backdropFilter="blur(8px)"
          color="white"
          w={"fit-content"}
          border={"1px solid rgba(212,168,67,0.3)"}
          p={1}
        >
          <Tab
            onClick={() => handleTabChange("blogs")}
            _selected={{
              bg: "#D4A843", // brand gold
              color: "#7B1035", // brand maroon
              boxShadow: "0 4px 12px rgba(212,168,67,0.3)",
            }}
            color="whiteAlpha.900"
            fontWeight="600"
            borderRadius="full"
            px={4}
            py={1}
            transition="all 0.2s"
            _hover={{ bg: "rgba(255,255,255,0.2)" }}
          >
            Blogs
          </Tab>
        </TabList>
      </Tabs>

      {/* Content – always shows the featured blog, with brand colors on white text */}
      <Box
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        maxW={{ base: "100%", lg: "95%" }}
        mx={"auto"}
        bg="rgba(123,16,53,0.3)" // subtle maroon overlay for readability
        backdropFilter="blur(4px)"
        borderLeft="4px solid #D4A843"
      >
        <CustomSmallTitle textAlign={{ base: "start", md: "start" }} color="#D4A843">
          FEATURED
        </CustomSmallTitle>
        <Heading
          color="white"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          mt={1}
          fontWeight={600}
          fontFamily="'ALESHA', 'Georgia', serif"
        >
          Top Tips for Planning Your Next Adventure
        </Heading>

        <Text
          color="whiteAlpha.900"
          fontSize={{ base: "sm", lg: "lg" }}
          mt={2}
          w={{ base: "100%", lg: "80%" }}
          fontWeight={400}
          noOfLines={{ base: 2, md: 3 }}
        >
          {`Traveling is all about discovering new places, cultures, and
          experiences. Whether you're planning a weekend getaway or a long
          vacation, choosing the right destination, setting a budget, and
          preparing in advance can make your trip hassle-free. Don't forget to
          embrace spontaneity—sometimes the best memories come from unplanned
          adventures!`}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogFeatureCard;