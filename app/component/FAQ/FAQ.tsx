import { Box, Flex, Image, Container, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaQuestionCircle, FaLeaf } from "react-icons/fa";
import CustomSubHeading from "../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import FAQAccordion from "./FAQAccordion/FAQAccordion";
import "./FAQAccordion/scroll.css";
import { observer } from "mobx-react-lite";

const FAQ = observer(() => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      bg="#F5EDD8" // brand cream
      py={{ base: "3rem", md: "5rem" }}
      overflow="hidden"
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {/* Decorative wavy top – gold/maroon gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="6px"
        bg="linear-gradient(90deg, #D4A843, #7B1035, #D4A843)"
        opacity={0.7}
      />
      <Box
        position="absolute"
        top="-50px"
        right="-30px"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(212,168,67,0.05)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-40px"
        left="-20px"
        w="180px"
        h="180px"
        borderRadius="full"
        bg="rgba(123,16,53,0.03)"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 8, md: 12 }}
          align="center"
        >
          {/* Left side – Illustration and decorative text */}
          <Box flex={1} textAlign={{ base: "center", md: "left" }}>
            <Flex justify={{ base: "center", md: "flex-start" }} mb={3}>
              <Icon as={FaQuestionCircle} color="#D4A843" boxSize={6} />
            </Flex>
            <CustomSubHeading highlightText=" Need to Know ">
              Everything You
            </CustomSubHeading>
            <Box
              w="80px"
              h="3px"
              bg="#D4A843"
              mx={{ base: "auto", md: "0" }}
              my={4}
              borderRadius="full"
            />
            <Text fontSize="sm" color="#7B1035" opacity={0.85} maxW="320px" mx={{ base: "auto", md: "0" }}>
              Your questions answered – everything you need to plan your perfect journey.
            </Text>
            {/* Floating image */}
            <Image
              src="/images/faqImage.png"
              alt="faq illustration"
              maxW={{ base: "180px", md: "280px" }}
              mx={{ base: "auto", md: "0" }}
              mt={6}
              opacity={0.85}
              style={{ mixBlendMode: "multiply" }}
            />
          </Box>

          {/* Right side – Accordion in a modern card */}
          <Box
            flex={1.2}
            bg="white"
            borderRadius="3xl"
            boxShadow="0 20px 40px -12px rgba(123,16,53,0.08)"
            border="1px solid rgba(212,168,67,0.2)"
            overflow="hidden"
            transition="all 0.25s"
            _hover={{ boxShadow: "0 25px 45px -12px rgba(123,16,53,0.12)" }}
          >
            <Flex justify="center" p={{ base: 4, md: 6 }}>
              <Box
                w="100%"
                maxH={{ base: "28rem", md: "32rem" }}
                className="customScrollBar"
                overflow="auto"
                pr={2}
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#F5EDD8",
                    borderRadius: "full",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#D4A843",
                    borderRadius: "full",
                  },
                }}
              >
                <FAQAccordion />
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* Small footnote – gold accent */}
        <Flex justify="center" mt={10} gap={2} align="center">
          <Icon as={FaLeaf} color="#D4A843" boxSize={3} opacity={0.6} />
          <Text fontSize="xs" color="#7B1035" opacity={0.7}>
            Still have questions?{" "}
            <Text as="span" color="#D4A843" fontWeight="600" cursor="pointer" _hover={{ color: "#c9a03a" }}>
              Reach out to us
            </Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
});

export default FAQ;