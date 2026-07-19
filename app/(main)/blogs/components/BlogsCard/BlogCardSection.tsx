import { Box, Center, Divider, FormControl, FormLabel, Grid, Heading, Input, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import BlogsCard from "./BlogsCard";
import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";
import { getStatusType } from "../../../../config/utils/function";

const BlogCardSection = observer(({ fromIndividualBlog }: any) => {
  const {
    auth: { openNotification },
    BlogStore: { getBlogs, blogs },
    themeStore: { themeConfig }
  } = stores;

  const [selectedTab, setSelectedTab] = useState(0);

  const blogTopics = ["Therapy", "Depression", "Anxiety"];
  const blogAudiences = ["Patients", "Therapists", "General Public"];
  const eventTopics = ["Workshops", "Webinars", "Seminars"];
  const eventAudiences = ["Students", "Professionals", "General Public"];

  const fetchBlogsDetails = useCallback(() => {
    getBlogs({ page: 1, limit: 10 })
      .catch((err: any) => {
        openNotification({
          title: "Failed to Retrieve Blogs",
          message: err?.data?.message,
          type: getStatusType(err.status),
        });
      });
  }, [openNotification, getBlogs]);

  useEffect(() => {
    fetchBlogsDetails();
  }, [fetchBlogsDetails]);

  const filterBlogs = () => {
    return blogs?.data || [];
  };

  return (
    <Box
      bg="#F5EDD8" // brand cream
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 6 }}
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {fromIndividualBlog && <Divider borderColor="rgba(212,168,67,0.2)" my={5} />}
      
      <CustomSmallTitle textAlign="center" color="#D4A843">
        Resources & Insights
      </CustomSmallTitle>
      
      <Heading
        mt={3}
        as="h2"
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="700"
        color="#7B1035" // brand maroon
        letterSpacing="tight"
      >
        {fromIndividualBlog
          ? "Discover More Related Blogs You Might Love"
          : "Explore Our Latest Blogs, Events, and More"}
      </Heading>

      <Tabs
        variant="soft-rounded"
        colorScheme="gold"
        size="md"
        mt={{ base: 6, lg: 10 }}
        onChange={(index) => {
          setSelectedTab(index);
        }}
      >
        <Center>
          <TabList
            gap={3}
            justifyContent="center"
            p={1}
            rounded="full"
            w="fit-content"
            bg="#F5EDD8"
            border="1px solid rgba(212,168,67,0.2)"
            display="none" // hidden as per original
          >
            <Tab
              fontWeight="500"
              _selected={{ color: "white", bg: "#7B1035" }} // brand maroon
              color="#7B1035"
              py={1.5}
              px={6}
              fontSize="md"
              borderRadius="full"
              transition="all 0.2s"
            >
              Blogs
            </Tab>
            <Tab
              fontWeight="500"
              _selected={{ color: "white", bg: "#7B1035" }}
              color="#7B1035"
              py={1.5}
              px={6}
              fontSize="md"
              borderRadius="full"
              transition="all 0.2s"
            >
              Events
            </Tab>
          </TabList>
        </Center>

        <Grid
          display="none" // hidden as per original
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          px={4}
          gap={6}
          mt={8}
        >
          <FormControl>
            <FormLabel fontWeight="600" color="#7B1035">
              Search
            </FormLabel>
            <Input
              size="sm"
              placeholder="I'm looking for"
              variant="flushed"
              borderColor="rgba(212,168,67,0.2)"
              focusBorderColor="#D4A843"
              _hover={{ borderColor: "#D4A843" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="600" color="#7B1035">
              Topic
            </FormLabel>
            <Select
              size="sm"
              placeholder="Select Topic"
              variant="flushed"
              borderColor="rgba(212,168,67,0.2)"
              focusBorderColor="#D4A843"
              _hover={{ borderColor: "#D4A843" }}
              iconColor="#D4A843"
            >
              {(selectedTab === 0 ? blogTopics : eventTopics).map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="600" color="#7B1035">
              Audience
            </FormLabel>
            <Select
              size="sm"
              placeholder="Select Audience"
              variant="flushed"
              borderColor="rgba(212,168,67,0.2)"
              focusBorderColor="#D4A843"
              _hover={{ borderColor: "#D4A843" }}
              iconColor="#D4A843"
            >
              {(selectedTab === 0 ? blogAudiences : eventAudiences).map((audience) => (
                <option key={audience} value={audience}>
                  {audience}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <TabPanels>
          {/* Blogs Tab */}
          <TabPanel px={0}>
            <Box>
              {filterBlogs().length > 0 ? (
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                  gap={6}
                >
                  {filterBlogs().map((blog) => (
                    <BlogsCard key={blog.id} {...blog} otherBlog={false} />
                  ))}
                </Grid>
              ) : (
                <Text textAlign="center" mt={10} color="#7B1035" opacity={0.7}>
                  No blogs available.
                </Text>
              )}
            </Box>
          </TabPanel>

          {/* Events Tab */}
          <TabPanel px={0}>
            <Box
              maxH="550px"
              overflowY="auto"
              px={2}
              sx={{
                scrollbarWidth: "thin",
                scrollbarColor: "#D4A843 rgba(212,168,67,0.2)",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": { background: "#D4A843", borderRadius: "4px" },
                "&::-webkit-scrollbar-track": { background: "rgba(212,168,67,0.1)", borderRadius: "4px" },
              }}
            >
              {filterBlogs().length > 0 ? (
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                  gap={6}
                >
                  {filterBlogs().map((blog) => (
                    <BlogsCard key={blog.id} {...blog} otherBlog={true} />
                  ))}
                </Grid>
              ) : (
                <Text textAlign="center" mt={10} color="#7B1035" opacity={0.7}>
                  No events available.
                </Text>
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
});

export default BlogCardSection;