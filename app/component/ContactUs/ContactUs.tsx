import {
  Box,
  Grid,
  GridItem,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  useBreakpointValue,
  Container,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { LuArrowUpRight, LuSend } from "react-icons/lu";
import { FaRegSmile, FaGlobe, FaHeart } from "react-icons/fa";
import CustomButton from "../common/CustomButton/CustomButton";
import { keyframes } from "@emotion/react";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";

// Smooth fade-in animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactUs = observer(() => {
  const {
    locationStore: { location },
    auth: { openNotification },
    contactStore: { createContact },
  } = stores;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const formPadding = useBreakpointValue({ base: 5, md: 7, lg: 8 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return (
      formData.name.trim() &&
      emailRegex.test(formData.email) &&
      phoneRegex.test(formData.phone) &&
      formData.location
    );
  }, [formData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      openNotification({
        title: "Error",
        message: "Please fill in all required fields correctly.",
        type: "error",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const data = await createContact({
        phone: formData.phone,
        email: formData.email,
        description: formData.description,
        name: formData.name,
        location: formData.location,
      });
      openNotification({
        title: "Submitted Successfully",
        message: data?.message || "We'll get back to you soon!",
        type: "success",
      });
      setFormData({
        name: "",
        location: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (err: any) {
      openNotification({
        title: "Submission Failed",
        message: err?.message || "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      bg="#F5EDD8" // brand cream
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 6, lg: 8 }}
      position="relative"
      overflow="hidden"
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      {/* Decorative top bar – gold/maroon gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bg="linear-gradient(90deg, #D4A843, #7B1035, #D4A843)"
        opacity={0.7}
      />

      {/* Soft background blobs – gold and maroon */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="350px"
        h="350px"
        borderRadius="full"
        bg="rgba(212,168,67,0.04)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-8%"
        left="-3%"
        w="280px"
        h="280px"
        borderRadius="full"
        bg="rgba(123,16,53,0.03)"
        pointerEvents="none"
      />

      <Container maxW="1200px" mx="auto">
        {/* Header Section */}
        <Box textAlign="center" mb={{ base: 10, md: 14 }} animation={`${fadeInUp} 0.6s ease-out`}>
          <HStack justify="center" spacing={2} mb={2}>
            <Icon as={FaRegSmile} color="#D4A843" boxSize={5} />
            <Text
              textTransform="uppercase"
              color="#D4A843"
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="700"
              letterSpacing="3px"
            >
              Let's Connect
            </Text>
          </HStack>
          <Text
            fontSize={headingSize}
            fontWeight="800"
            lineHeight="1.2"
            color="#7B1035"
            maxW="800px"
            mx="auto"
          >
            Ready to explore the world?{" "}
            <Text as="span" color="#7B1035" position="relative" display="inline-block">
              Let’s plan your adventure.
              <Box
                position="absolute"
                bottom="-8px"
                left={0}
                right={0}
                h="3px"
                bg="#D4A843"
                borderRadius="full"
                width="70%"
                mx="auto"
              />
            </Text>
          </Text>
        </Box>

        {/* Two-Column Grid */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, lg: 12 }}
          alignItems="center"
        >
          {/* Left Column: Image with overlay text – UPDATED to travel agency theme */}
          <GridItem animation={`${fadeInUp} 0.8s ease-out`}>
            <Box
              position="relative"
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="0 25px 35px -12px rgba(123,16,53,0.2)"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Image
                // Replaced local image with a high-quality travel photo (women exploring)
                src="https://res.cloudinary.com/dygvzvd6p/image/upload/v1784369891/Travel_11_n4kjdg.png"
                alt="Women exploring the world together"
                objectFit="cover"
                w="100%"
                h={{ base: "300px", md: "450px" }}
                transition="transform 0.5s"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="linear-gradient(to top, rgba(123,16,53,0.85), transparent)"
                p={6}
              >
                <Text color="white" fontWeight="bold" fontSize="lg" fontFamily="inherit">
                  ✨ Travel. Connect. Grow. ✨
                </Text>
                <Text color="white" opacity={0.8} fontSize="sm">
                  Let us craft your perfect getaway
                </Text>
              </Box>
            </Box>
          </GridItem>

          {/* Right Column: Form Card */}
          <GridItem animation={`${fadeInUp} 1s ease-out`}>
            <Box
              bg="white"
              p={formPadding}
              borderRadius="3xl"
              boxShadow="0 10px 30px rgba(123,16,53,0.05)"
              border="1px solid rgba(212,168,67,0.2)"
              transition="all 0.25s"
              _hover={{ boxShadow: "0 20px 35px -12px rgba(123,16,53,0.12)" }}
            >
              <HStack spacing={2} mb={6}>
                <Icon as={FaHeart} color="#D4A843" boxSize={5} />
                <Text fontSize="2xl" fontWeight="700" color="#7B1035">
                  Start Your Journey
                </Text>
              </HStack>

              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={6}
                mb={8}
              >
                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#7B1035" fontWeight="600">
                      Full Name
                    </FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      bg="#F5EDD8"
                      border="1px solid rgba(212,168,67,0.2)"
                      _hover={{ borderColor: "#D4A843", bg: "white" }}
                      _focus={{ borderColor: "#D4A843", boxShadow: "0 0 0 2px rgba(212,168,67,0.3)" }}
                      borderRadius="xl"
                      transition="all 0.2s"
                      fontFamily="'ALESHA', 'Georgia', serif"
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#7B1035" fontWeight="600">
                      Email
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      bg="#F5EDD8"
                      border="1px solid rgba(212,168,67,0.2)"
                      _hover={{ borderColor: "#D4A843", bg: "white" }}
                      _focus={{ borderColor: "#D4A843", boxShadow: "0 0 0 2px rgba(212,168,67,0.3)" }}
                      borderRadius="xl"
                      transition="all 0.2s"
                      fontFamily="'ALESHA', 'Georgia', serif"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#7B1035" fontWeight="600">
                      Phone Number
                    </FormLabel>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      bg="#F5EDD8"
                      border="1px solid rgba(212,168,67,0.2)"
                      _hover={{ borderColor: "#D4A843", bg: "white" }}
                      _focus={{ borderColor: "#D4A843", boxShadow: "0 0 0 2px rgba(212,168,67,0.3)" }}
                      borderRadius="xl"
                      transition="all 0.2s"
                      fontFamily="'ALESHA', 'Georgia', serif"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" color="#7B1035" fontWeight="600">
                      Your Next Destination
                    </FormLabel>
                    <Select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Select your location"
                      bg="#F5EDD8"
                      border="1px solid rgba(212,168,67,0.2)"
                      _hover={{ borderColor: "#D4A843", bg: "white" }}
                      _focus={{ borderColor: "#D4A843", boxShadow: "0 0 0 2px rgba(212,168,67,0.3)" }}
                      borderRadius="xl"
                      iconColor="#D4A843"
                      fontFamily="'ALESHA', 'Georgia', serif"
                    >
                      {location?.data?.map((dest) => (
                        <option key={dest?.name} value={dest?.name}>
                          {dest?.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <FormControl>
                    <FormLabel fontSize="sm" color="#7B1035" fontWeight="600">
                      Additional Details (Optional)
                    </FormLabel>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Travel dates, special requests, or other details"
                      bg="#F5EDD8"
                      border="1px solid rgba(212,168,67,0.2)"
                      _hover={{ borderColor: "#D4A843", bg: "white" }}
                      _focus={{ borderColor: "#D4A843", boxShadow: "0 0 0 2px rgba(212,168,67,0.3)" }}
                      borderRadius="xl"
                      rows={3}
                      fontFamily="'ALESHA', 'Georgia', serif"
                    />
                  </FormControl>
                </GridItem>
              </Grid>

              <CustomButton
                size="lg"
                width="100%"
                icon={LuSend}
                onClick={handleSubmit}
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
                bg="#D4A843"
                color="#7B1035"
                _hover={{ 
                  bg: "#c9a03a", 
                  transform: "translateY(-2px)", 
                  boxShadow: "0 8px 20px rgba(212,168,67,0.4)" 
                }}
                _active={{ transform: "translateY(0)" }}
                fontWeight="700"
                borderRadius="full"
                px={6}
                py={6}
                mt={2}
                transition="all 0.2s"
              >
                Plan My Trip
              </CustomButton>

              {/* Trust badge */}
              <HStack justify="center" spacing={4} mt={6} pt={4} borderTop="1px solid rgba(212,168,67,0.2)">
                <Icon as={FaGlobe} color="#7B1035" opacity={0.5} boxSize={3} />
                <Text fontSize="xs" color="#7B1035" opacity={0.7}>
                  Secure & encrypted
                </Text>
                <Text color="rgba(212,168,67,0.3)">|</Text>
                <Icon as={FaHeart} color="#D4A843" boxSize={3} />
                <Text fontSize="xs" color="#7B1035" opacity={0.7}>
                  No spam, ever
                </Text>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
});

export default ContactUs;