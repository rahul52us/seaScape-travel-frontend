import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
  VStack,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";

const FAQAccordion = observer(() => {
  const {
    companyStore: { companyDetails, getPageContent },
  } = stores;

  const [expandedPanels, setExpandedPanels] = useState({});
  const [content, setContent] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const pageContent = getPageContent("home");
    setContent(pageContent);

    if (pageContent?.homeFaq) {
      setLoading(false);
    }
  }, [companyDetails, getPageContent]);

  const togglePanel = (index: number) => {
    setExpandedPanels((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading || !content?.homeFaq) {
    return (
      <Flex justify="center" align="center" h="200px">
        <Spinner size="xl" color="#D4A843" /> {/* brand gold */}
      </Flex>
    );
  }

  return (
    <Box fontFamily="'ALESHA', 'Georgia', serif">
      <Accordion allowToggle>
        <VStack spacing={{ base: 3, md: 5 }} align="stretch">
          {content?.homeFaq?.map((module, index) => (
            <Box
              key={index}
              position="relative"
              rounded="14px"
              transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <AccordionItem
                border="none"
                bg="white"
                rounded="14px"
                transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                {({ isExpanded }) => (
                  <Box
                    shadow={
                      isExpanded
                        ? "0 4px 16px rgba(123,16,53,0.1)"
                        : "none"
                    }
                    p={{ base: 1.5, md: 3 }}
                    rounded={"14px"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <AccordionButton
                      _hover={{ bg: "transparent" }}
                      cursor="pointer"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{
                          base: isExpanded ? "18px" : "14px",
                          md: isExpanded ? "20px" : "16px",
                        }}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        fontWeight={isExpanded ? "500" : "400"}
                        color="#7B1035" // brand maroon
                      >
                        {module.title}
                      </Box>
                      <AccordionIcon
                        color="#D4A843" // brand gold
                        transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      />
                    </AccordionButton>
                    <AccordionPanel
                      px={4}
                      pt={0}
                      pb={4}
                      style={{
                        overflow: "hidden",
                        transition:
                          "max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        maxHeight: isExpanded ? "500px" : "0",
                        opacity: isExpanded ? 1 : 0,
                      }}
                      color="#7B1035" // maroon with lower opacity if needed
                      w={{ base: "100%", md: "85%" }}
                    >
                      <Text
                        lineHeight={{ base: "24px", md: "28px" }}
                        fontSize={{ base: "14px", md: "16px" }}
                        color="#7B1035"
                        opacity={0.85}
                        noOfLines={expandedPanels[index] ? undefined : 3}
                      >
                        {module.description}
                      </Text>
                      <Button
                        size="sm"
                        mt={2}
                        variant="link"
                        color="#D4A843" // brand gold
                        _hover={{ color: "#c9a03a", textDecoration: "underline" }}
                        onClick={() => togglePanel(index)}
                      >
                        {expandedPanels[index] ? "Show Less" : "Read More.."}
                      </Button>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Box>
          ))}
        </VStack>
      </Accordion>
    </Box>
  );
});

export default FAQAccordion;