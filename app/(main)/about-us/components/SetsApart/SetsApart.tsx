import { Box, Center, Container, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CustomSubHeading from '../../../../travelComponent/common/CustomSubHeading/CustomSubHeading';

const MotionBox = motion(Box);

const features = [
  {
    icon: "/icons/aboutUs/destination.png",
    title: "Personalized Itineraries",
    description: "Tailored experiences that match your unique interests and preferences",
  },
  {
    icon: "/icons/aboutUs/expertise.png",
    title: "Local Expertise",
    description: "Insider access to hidden gems and authentic experiences",
  },
  {
    icon: "/icons/aboutUs/customer-service.png",
    title: "Unmatched Service",
    description: "Dedicated support from start to finish for a seamless journey",
  },
];

const SetsApart = () => {
  return (
    <Box
      py={{ base: 4, lg: 12 }}
      bg="#F5EDD8" // cream background to match the page
      fontFamily="'ALESHA', 'Georgia', serif" // brand font
    >
      <Container maxW={{ base: "95%", lg: "80%" }}>
        <VStack spacing={{ base: 2, lg: 4 }} textAlign="center" mb={12}>
          <CustomSubHeading highlightText="Us Apart?">
            What Sets
          </CustomSubHeading>
          <Text
            color="#7B1035"
            maxW={{ lg: "800px" }}
            fontSize={{ lg: "lg" }}
            opacity={0.85}
          >
            Our passion for Europe and unwavering commitment to excellence sets us apart. With extensive knowledge, expertise, and local connections, we curate bespoke itineraries that reflect each traveler&apos;s unique interests.
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: 4, lg: 8 }}
        >
          {features.map((feature, i) => (
            <MotionBox
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GridItem
                bg="white" // clean white card
                borderRadius="xl"
                p={8}
                boxShadow="0 10px 25px -5px rgba(123,16,53,0.08)"
                borderWidth={1}
                borderColor="#D4A843"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  boxShadow: "0 20px 35px -8px rgba(212,168,67,0.25)",
                  borderColor: "#7B1035",
                }}
              >
                <Center>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    w={12}
                    h={12}
                    mb={4}
                    objectFit="contain"
                  />
                </Center>
                <Heading
                  size="md"
                  mb={3}
                  color="#7B1035"
                  fontFamily="'ALESHA', 'Georgia', serif"
                >
                  {feature.title}
                </Heading>
                <Text color="#7B1035" opacity={0.8}>
                  {feature.description}
                </Text>
              </GridItem>
            </MotionBox>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SetsApart;