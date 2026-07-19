import { Box, Container, Flex, Grid, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import CustomSubHeading from '../../../../travelComponent/common/CustomSubHeading/CustomSubHeading';

const ServicesSection = () => {
  return (
    <Box
      py={{ base: 6, lg: 8 }}
      fontFamily="'ALESHA', 'Georgia', serif" // brand font
    >
      <Container maxW={{ base: "95%", lg: "80%" }}>
        <VStack spacing={4} textAlign="center" mb={{ base: 6, lg: 12 }}>
          <CustomSubHeading highlightText="Services">
            Our
          </CustomSubHeading>
          <Text
            fontSize={{ lg: "lg" }}
            color="#7B1035"
            opacity={0.85}
            maxW={{ lg: "800px" }}
          >
            From romantic getaways to family adventures and cultural immersions, we offer tailor-made travel options to suit every taste and budget.
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          alignItems="center"
        >
          <Box
            borderRadius="xl"
            overflow="hidden"
            boxShadow="0 10px 25px -5px rgba(123,16,53,0.1)"
            borderWidth={2}
            borderColor="#D4A843"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1726743750199-b59b37752080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEl0aW5lcmFyaWVzfGVufDB8fDB8fHww"
              alt="Our Services"
              objectFit="cover"
              w="100%"
              h={{ base: "250px", md: "400px" }}
            />
          </Box>

          <VStack align="start" spacing={{ base: 3, lg: 6 }}>
            {[
              "Guided tours with expert local guides",
              "Luxury escapes with boutique accommodations",
              "Self-drive adventures at your own pace",
              "River cruises through Europe's waterways",
              "Cultural immersion experiences",
              "Family-friendly itineraries",
            ].map((service, i) => (
              <Flex key={i} align="center">
                <Icon
                  as={FiArrowRight}
                  color="#D4A843" // gold accent
                  mr={3}
                  boxSize={5}
                />
                <Text
                  fontSize={{ lg: "lg" }}
                  color="#7B1035"
                  opacity={0.85}
                >
                  {service}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;