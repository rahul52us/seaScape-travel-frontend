"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Spinner,
  VStack,
  Text,
  Textarea,
  HStack,
  Icon,
  Box,
  useToast,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import stores from "../../store/stores";

const BookingInfoModal = observer(({ isOpen, onClose, data }: any) => {
  const {
    bookingStore: { createBooking },
  } = stores;

  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = () => {
    if (!fullName.trim() || !phoneNumber.trim()) {
      setError("Full Name and Phone Number are required.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = {
      name: fullName,
      phone: phoneNumber,
      email: email || null,
      comment: comment || null,
      data
    };

    createBooking(formData)
      .then(() => {
        // Open thank you page in new tab
        window.open('/thankyou', '_blank');
        handleClose();
      })
      .catch((err: any) => {
        setError(err?.message || "Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = () => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setComment("");
    setError("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(4px)" />
      <ModalContent
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 25px 50px -12px rgba(0,0,0,0.25)"
        bg="white"
        maxW="500px"
        mx={4}
      >
        {/* Header – Maroon with gold accent */}
        <Box
          bg="#6b1a2a"
          color="white"
          py={5}
          px={6}
          textAlign="center"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "3px",
            bg: "#e8b86b",
            borderRadius: "full",
          }}
        >
          <ModalHeader fontSize="2xl" fontWeight="bold" p={0} letterSpacing="tight">
            ✈️ Plan Your Journey
          </ModalHeader>
          <Text fontSize="sm" opacity={0.9} mt={1}>
            Fill in your details – we'll craft your perfect escape
          </Text>
        </Box>

        <ModalBody px={6} py={6}>
          <VStack spacing={5} align="stretch">
            {/* Full Name */}
            <HStack spacing={3}>
              <Icon as={FaUser} color="#8a6a6a" boxSize={5} />
              <Input
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                borderRadius="lg"
                bg="#fdf8f0"
                border="1px solid #f0e6d8"
                _focus={{ borderColor: "#e8b86b", bg: "white", boxShadow: "0 0 0 1px #e8b86b" }}
                _hover={{ borderColor: "#e8b86b" }}
                isInvalid={!fullName.trim() && error.length > 0}
                _invalid={{ borderColor: "#e53e3e" }}
              />
            </HStack>

            {/* Phone Number */}
            <HStack spacing={3}>
              <Icon as={FaPhone} color="#8a6a6a" boxSize={5} />
              <Input
                placeholder="Phone Number *"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                borderRadius="lg"
                bg="#fdf8f0"
                border="1px solid #f0e6d8"
                _focus={{ borderColor: "#e8b86b", bg: "white", boxShadow: "0 0 0 1px #e8b86b" }}
                _hover={{ borderColor: "#e8b86b" }}
                isInvalid={!phoneNumber.trim() && error.length > 0}
                _invalid={{ borderColor: "#e53e3e" }}
              />
            </HStack>

            {/* Email */}
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="#8a6a6a" boxSize={5} />
              <Input
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                borderRadius="lg"
                bg="#fdf8f0"
                border="1px solid #f0e6d8"
                _focus={{ borderColor: "#e8b86b", bg: "white", boxShadow: "0 0 0 1px #e8b86b" }}
                _hover={{ borderColor: "#e8b86b" }}
              />
            </HStack>

            {/* Comments */}
            <HStack spacing={3} align="start">
              <Icon as={FaCommentDots} color="#8a6a6a" boxSize={5} mt={2} />
              <Textarea
                placeholder="Additional Comments (Optional) – e.g., travel dates, special requests"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                borderRadius="lg"
                bg="#fdf8f0"
                border="1px solid #f0e6d8"
                rows={3}
                _focus={{ borderColor: "#e8b86b", bg: "white", boxShadow: "0 0 0 1px #e8b86b" }}
                _hover={{ borderColor: "#e8b86b" }}
              />
            </HStack>
          </VStack>

          {error && (
            <Text color="#e53e3e" mt={3} textAlign="center" fontSize="sm" fontWeight="500">
              ⚠️ {error}
            </Text>
          )}
        </ModalBody>

        <ModalFooter px={6} pb={6}>
          <Button
            leftIcon={<Icon as={FaPaperPlane} boxSize={4} />}
            bg="#6b1a2a"
            color="white"
            size="lg"
            w="full"
            borderRadius="full"
            onClick={handleSubmit}
            isDisabled={loading}
            _hover={{ bg: "#8b2a3a", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(107,26,42,0.3)" }}
            _active={{ transform: "translateY(0)" }}
            transition="all 0.2s ease"
            fontWeight="600"
            letterSpacing="wide"
          >
            {loading ? <Spinner size="sm" color="white" /> : "Send Enquiry"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default BookingInfoModal;