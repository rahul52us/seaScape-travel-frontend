import { Avatar, Box, Heading, HStack, ScaleFade, Text, VStack, Icon } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";

const RevireCard2 = observer(() => {
  const { testimonialStore: { testimonials } } = stores;

  return (
    <Box fontFamily="'ALESHA', 'Georgia', serif">
      <Heading
        fontSize={{ base: "2xl", lg: "3xl" }}
        mb={{ base: 4, lg: 8 }}
        color="#7B1035" // brand maroon
        fontWeight="700"
        letterSpacing="tight"
      >
        Memorable Experiences
      </Heading>
      <VStack spacing={{ base: 4, lg: 8 }}>
        {testimonials?.data?.map((testimonial, index) => (
          <ScaleFade key={testimonial.id} in={true} delay={index * 0.1}>
            <Box
              p={{ base: 4, lg: 6 }}
              borderLeft="4px solid"
              borderColor="#D4A843" // brand gold
              bg="white"
              borderRadius="lg"
              boxShadow="0 4px 12px rgba(123,16,53,0.04)"
              transition="all 0.2s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 12px 20px rgba(123,16,53,0.1)",
                borderColor: "#D4A843",
              }}
            >
              <Icon as={FaQuoteLeft} color="#D4A843" boxSize={4} mb={3} opacity={0.6} />
              <Text fontSize={{ base: "sm", lg: "md" }} mb={4} color="#7B1035" opacity={0.85} lineHeight="1.6">
                &apos;{testimonial.description}&apos;
              </Text>
              <HStack spacing={3}>
                <Avatar
                  size={{ base: "sm", lg: "md" }}
                  src={testimonial?.image?.url}
                  name={testimonial?.name}
                  bg="#F5EDD8"
                  color="#7B1035"
                />
                <Box>
                  <Text fontWeight="bold" fontSize={{ base: "sm", lg: "md" }} color="#7B1035">
                    {testimonial.name}
                  </Text>
                  <Text fontSize={{ base: "xs", lg: "sm" }} color="#7B1035" opacity={0.6}>
                    {testimonial.profession}
                  </Text>
                </Box>
              </HStack>
            </Box>
          </ScaleFade>
        ))}
      </VStack>
    </Box>
  );
});

export default RevireCard2;